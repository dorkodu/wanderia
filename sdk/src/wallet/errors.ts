import type { WalletError, WalletErrorCode } from "./types";

/**
 * Creates a typed wallet error.
 */
export function createWalletError(
  code: WalletErrorCode,
  message: string,
  cause?: unknown
): WalletError {
  return { code, message, cause };
}

/**
 * Wallet not found in storage.
 */
export function walletNotFoundError(walletID: string): WalletError {
  return createWalletError(
    "WALLET_NOT_FOUND",
    `Wallet with ID "${walletID}" not found`
  );
}

/**
 * Web Crypto API not supported or Ed25519 not available.
 */
export function cryptoNotSupportedError(reason: string): WalletError {
  return createWalletError(
    "CRYPTO_NOT_SUPPORTED",
    `Cryptographic operation not supported: ${reason}`
  );
}

/**
 * Invalid BIP39 mnemonic phrase.
 */
export function invalidMnemonicError(reason: string): WalletError {
  return createWalletError("INVALID_MNEMONIC", `Invalid mnemonic: ${reason}`);
}

/**
 * Transaction or message signing failed.
 */
export function signingError(reason: string, cause?: unknown): WalletError {
  return createWalletError("SIGNING_ERROR", `Signing failed: ${reason}`, cause);
}

/**
 * Storage operation (IndexedDB) failed.
 */
export function storageError(reason: string, cause?: unknown): WalletError {
  return createWalletError(
    "STORAGE_ERROR",
    `Storage operation failed: ${reason}`,
    cause
  );
}

/**
 * Failed to decrypt wallet backup.
 */
export function decryptionError(reason: string, cause?: unknown): WalletError {
  return createWalletError(
    "DECRYPTION_ERROR",
    `Decryption failed: ${reason}`,
    cause
  );
}

/**
 * Failed to encrypt wallet for backup.
 */
export function encryptionError(reason: string, cause?: unknown): WalletError {
  return createWalletError(
    "ENCRYPTION_ERROR",
    `Encryption failed: ${reason}`,
    cause
  );
}

/**
 * Invalid or corrupted wallet backup.
 */
export function invalidBackupError(reason: string): WalletError {
  return createWalletError("INVALID_BACKUP", `Invalid backup: ${reason}`);
}

/**
 * No active wallet selected.
 */
export function noActiveWalletError(): WalletError {
  return createWalletError(
    "NO_ACTIVE_WALLET",
    "No active wallet selected. Please select a wallet first."
  );
}

/**
 * Wallet with the same public key already exists.
 */
export function walletExistsError(publicKey: string): WalletError {
  return createWalletError(
    "WALLET_EXISTS",
    `Wallet with public key "${publicKey}" already exists`
  );
}
