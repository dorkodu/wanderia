import { err, ok, type Result } from "neverthrow";
import {
  base64ToBytes,
  bytesToBase64,
  decryptWithPassword,
  encryptWithPassword,
  exportPublicKeyBytes,
  generateKeyPairWebCrypto,
  generateMnemonic,
  generateWalletID,
  isWebCryptoSupported,
  mnemonicToSeed,
  seedToKeyPair,
  signWithNoble,
  signWithWebCrypto,
  validateMnemonic
} from "./crypto";
import {
  invalidBackupError,
  signingError,
  storageError,
  walletExistsError,
  walletNotFoundError
} from "./errors";
import * as storage from "./storage";
import type { StoredKey, Wallet, WalletBackup, WalletError } from "./types";

/**
 * Encodes bytes to Base58 (Solana address format).
 * Uses a simple implementation - consider using bs58 package for production.
 */
function bytesToBase58(bytes: Uint8Array): string {
  const ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  const BASE = 58;

  // Count leading zeros
  let zeroes = 0;
  for (const byte of bytes) {
    if (byte === 0) zeroes++;
    else break;
  }

  // Convert to base58
  const size = Math.ceil((bytes.length * 138) / 100) + 1;
  const b58 = new Uint8Array(size);

  let length = 0;
  for (const byte of bytes) {
    let carry = byte;
    let i = 0;
    for (let j = size - 1; (carry !== 0 || i < length) && j >= 0; j--, i++) {
      carry += 256 * (b58[j] ?? 0);
      b58[j] = carry % BASE;
      carry = Math.floor(carry / BASE);
    }
    length = i;
  }

  // Skip leading zeros in base58 result
  let it = size - length;
  while (it < size && b58[it] === 0) {
    it++;
  }

  // Build string
  let str = "1".repeat(zeroes);
  for (; it < size; it++) {
    str += ALPHABET[b58[it]!];
  }

  return str;
}

/**
 * Creates a new wallet with a generated key pair.
 */
export async function createWallet(
  name: string
): Promise<Result<{ wallet: Wallet; mnemonic: string }, WalletError>> {
  // Generate mnemonic for recovery
  const mnemonicResult = await generateMnemonic(128);
  if (mnemonicResult.isErr()) {
    return err(mnemonicResult.error);
  }
  const mnemonic = mnemonicResult.value;

  // Check if Web Crypto is supported
  const webCryptoSupported = await isWebCryptoSupported();

  if (webCryptoSupported) {
    // Use Web Crypto API for key generation
    const keyPairResult = await generateKeyPairWebCrypto();
    if (keyPairResult.isErr()) {
      return err(keyPairResult.error);
    }

    const keyPair = keyPairResult.value;

    // Export public key bytes
    const publicKeyResult = await exportPublicKeyBytes(keyPair.publicKey);
    if (publicKeyResult.isErr()) {
      return err(publicKeyResult.error);
    }

    const publicKeyBytes = publicKeyResult.value;
    const publicKey = bytesToBase58(publicKeyBytes);

    // Check if wallet already exists
    if (await storage.walletExists(publicKey)) {
      return err(walletExistsError(publicKey));
    }

    const walletID = generateWalletID();
    const now = Date.now();

    const wallet: Wallet = {
      id: walletID,
      name,
      publicKey,
      createdAt: now,
      lastUsedAt: now
    };

    const storedKey: StoredKey = {
      walletID,
      publicKeyBytes,
      privateKey: keyPair.privateKey,
      isWebCrypto: true
    };

    try {
      await storage.saveWallet(wallet, storedKey);
    } catch (error) {
      return err(
        storageError(
          error instanceof Error ? error.message : "Failed to save wallet"
        )
      );
    }

    return ok({ wallet, mnemonic });
  } else {
    // Fallback: derive key from mnemonic using noble-ed25519
    // This requires the @noble/ed25519 package
    const seedResult = await mnemonicToSeed(mnemonic);
    if (seedResult.isErr()) {
      return err(seedResult.error);
    }

    // TODO: Implement noble-ed25519 fallback
    // For now, return an error indicating Web Crypto is required
    return err({
      code: "CRYPTO_NOT_SUPPORTED",
      message:
        "Web Crypto API with Ed25519 support is required. Please use a modern browser (Chrome 113+, Safari 17+, Firefox 117+)."
    });
  }
}

/**
 * Imports a wallet from a mnemonic phrase.
 */
export async function importFromMnemonic(
  name: string,
  mnemonic: string
): Promise<Result<Wallet, WalletError>> {
  // Validate mnemonic
  const validResult = await validateMnemonic(mnemonic);
  if (validResult.isErr()) {
    return err(validResult.error);
  }

  if (!validResult.value) {
    return err({
      code: "INVALID_MNEMONIC",
      message: "Invalid mnemonic phrase. Please check and try again."
    });
  }

  // Derive seed from mnemonic
  const seedResult = await mnemonicToSeed(mnemonic);
  if (seedResult.isErr()) {
    return err(seedResult.error);
  }

  // Derive key pair from seed
  const keyPairResult = await seedToKeyPair(seedResult.value);
  if (keyPairResult.isErr()) {
    return err(keyPairResult.error);
  }

  const { publicKey: publicKeyBytes, privateKey: privateKeyBytes } = keyPairResult.value;
  const publicKey = bytesToBase58(publicKeyBytes);

  // Check if wallet already exists
  if (await storage.walletExists(publicKey)) {
    return err(walletExistsError(publicKey));
  }

  const walletID = generateWalletID();
  const now = Date.now();

  const wallet: Wallet = {
    id: walletID,
    name,
    publicKey,
    createdAt: now,
    lastUsedAt: now
  };

  const storedKey: StoredKey = {
    walletID,
    publicKeyBytes,
    privateKey: privateKeyBytes,
    isWebCrypto: false
  };

  try {
    await storage.saveWallet(wallet, storedKey);
  } catch (error) {
    return err(
      storageError(error instanceof Error ? error.message : "Failed to save wallet")
    );
  }

  return ok(wallet);
}

/**
 * Signs a message with a wallet's private key.
 */
export async function signMessage(
  walletID: string,
  message: Uint8Array
): Promise<Result<Uint8Array, WalletError>> {
  // Get stored key
  const storedKey = await storage.getStoredKey(walletID);
  if (!storedKey) {
    return err(walletNotFoundError(walletID));
  }

  let signResult: Result<Uint8Array, WalletError>;

  if (storedKey.isWebCrypto && storedKey.privateKey instanceof CryptoKey) {
    // Use Web Crypto API for signing
    signResult = await signWithWebCrypto(storedKey.privateKey, message);
  } else if (storedKey.privateKey instanceof Uint8Array) {
    // Use noble-ed25519 for signing
    signResult = await signWithNoble(storedKey.privateKey, message);
  } else {
    return err(signingError("Invalid key format"));
  }

  if (signResult.isErr()) {
    return err(signingError(signResult.error.message));
  }

  // Update last used timestamp
  await storage.updateLastUsed(walletID);

  return ok(signResult.value);
}

/**
 * Exports a wallet as an encrypted backup.
 */
export async function exportWallet(
  walletID: string,
  password: string
): Promise<Result<WalletBackup, WalletError>> {
  const wallet = await storage.getWallet(walletID);
  if (!wallet) {
    return err(walletNotFoundError(walletID));
  }

  const storedKey = await storage.getStoredKey(walletID);
  if (!storedKey) {
    return err(walletNotFoundError(walletID));
  }

  // For Web Crypto keys, we can't export the private key directly
  // We need to store mnemonic separately for backup purposes
  if (storedKey.isWebCrypto) {
    return err({
      code: "ENCRYPTION_ERROR",
      message:
        "Cannot export Web Crypto wallet. Please use the mnemonic phrase for recovery instead."
    });
  }

  // Encrypt the private key bytes
  const privateKeyBytes = storedKey.privateKey as Uint8Array;
  const encryptResult = await encryptWithPassword(privateKeyBytes, password);
  if (encryptResult.isErr()) {
    return err(encryptResult.error);
  }

  const { encrypted, salt, iv } = encryptResult.value;

  // Create checksum
  const hashBuffer = await crypto.subtle.digest(
    "SHA-256",
    privateKeyBytes.buffer as ArrayBuffer
  );
  const hashArray = new Uint8Array(hashBuffer);
  const checksum = bytesToBase64(hashArray.slice(0, 8));

  const backup: WalletBackup = {
    version: 1,
    wallet: {
      id: wallet.id,
      name: wallet.name,
      publicKey: wallet.publicKey,
      createdAt: wallet.createdAt
    },
    encryptedPrivateKey: bytesToBase64(encrypted),
    salt: bytesToBase64(salt),
    iv: bytesToBase64(iv),
    checksum
  };

  return ok(backup);
}

/**
 * Imports a wallet from an encrypted backup.
 */
export async function importFromBackup(
  backup: WalletBackup,
  password: string
): Promise<Result<Wallet, WalletError>> {
  // Validate backup version
  if (backup.version !== 1) {
    return err(invalidBackupError(`Unsupported backup version: ${backup.version}`));
  }

  // Check if wallet already exists
  if (await storage.walletExists(backup.wallet.publicKey)) {
    return err(walletExistsError(backup.wallet.publicKey));
  }

  // Decrypt private key
  const decryptResult = await decryptWithPassword(
    base64ToBytes(backup.encryptedPrivateKey),
    password,
    base64ToBytes(backup.salt),
    base64ToBytes(backup.iv)
  );

  if (decryptResult.isErr()) {
    return err({
      code: "DECRYPTION_ERROR",
      message: "Failed to decrypt backup. Please check the password."
    });
  }

  const privateKeyBytes = decryptResult.value;

  // Verify checksum
  const hashBuffer = await crypto.subtle.digest(
    "SHA-256",
    privateKeyBytes.buffer as ArrayBuffer
  );
  const hashArray = new Uint8Array(hashBuffer);
  const expectedChecksum = bytesToBase64(hashArray.slice(0, 8));

  if (expectedChecksum !== backup.checksum) {
    return err(invalidBackupError("Checksum mismatch. Backup may be corrupted."));
  }

  // TODO: Derive public key from private key and verify it matches backup
  // This requires noble-ed25519

  const walletID = generateWalletID();
  const now = Date.now();

  const wallet: Wallet = {
    id: walletID,
    name: backup.wallet.name,
    publicKey: backup.wallet.publicKey,
    createdAt: backup.wallet.createdAt,
    lastUsedAt: now
  };

  // TODO: Convert private key bytes to public key bytes
  const storedKey: StoredKey = {
    walletID,
    publicKeyBytes: new Uint8Array(32), // Placeholder
    privateKey: privateKeyBytes,
    isWebCrypto: false
  };

  try {
    await storage.saveWallet(wallet, storedKey);
  } catch (error) {
    return err(
      storageError(error instanceof Error ? error.message : "Failed to save wallet")
    );
  }

  return ok(wallet);
}

/**
 * Gets all wallets.
 */
export async function getWallets(): Promise<Wallet[]> {
  return storage.getAllWallets();
}

/**
 * Gets a wallet by ID.
 */
export async function getWallet(
  walletID: string
): Promise<Result<Wallet, WalletError>> {
  const wallet = await storage.getWallet(walletID);
  if (!wallet) {
    return err(walletNotFoundError(walletID));
  }
  return ok(wallet);
}

/**
 * Deletes a wallet.
 */
export async function deleteWallet(
  walletID: string
): Promise<Result<void, WalletError>> {
  const wallet = await storage.getWallet(walletID);
  if (!wallet) {
    return err(walletNotFoundError(walletID));
  }

  try {
    await storage.deleteWallet(walletID);
    return ok(undefined);
  } catch (error) {
    return err(
      storageError(error instanceof Error ? error.message : "Failed to delete wallet")
    );
  }
}
