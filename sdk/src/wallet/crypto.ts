import * as ed from "@noble/ed25519";
import { err, ok, type Result } from "neverthrow";
import { cryptoNotSupportedError, invalidMnemonicError } from "./errors";
import type { WalletError } from "./types";

/**
 * BIP39 English wordlist (2048 words).
 * Loaded lazily to avoid bundle size impact.
 */
let wordlist: string[] | null = null;

/**
 * Loads the BIP39 English wordlist.
 */
async function loadWordlist(): Promise<string[]> {
  if (wordlist) return wordlist;

  // BIP39 English wordlist - loaded inline for simplicity
  // In production, this could be dynamically imported
  const response = await fetch(
    "https://raw.githubusercontent.com/bitcoin/bips/master/bip-0039/english.txt"
  );
  const text = await response.text();
  wordlist = text.trim().split("\n");
  return wordlist;
}

/**
 * Checks if the browser supports Ed25519 in Web Crypto API.
 */
export async function isWebCryptoSupported(): Promise<boolean> {
  if (typeof window === "undefined" || !window.crypto?.subtle) {
    return false;
  }

  try {
    // Try to generate a test key pair
    const testKey = await window.crypto.subtle.generateKey(
      { name: "Ed25519" },
      false,
      ["sign", "verify"]
    );
    return testKey !== null;
  } catch {
    return false;
  }
}

/**
 * Generates an Ed25519 key pair using Web Crypto API.
 * The private key is non-extractable for security.
 */
export async function generateKeyPairWebCrypto(): Promise<
  Result<CryptoKeyPair, WalletError>
> {
  try {
    const keyPair = await window.crypto.subtle.generateKey(
      { name: "Ed25519" },
      false, // Non-extractable for security
      ["sign", "verify"]
    );
    return ok(keyPair);
  } catch (error) {
    return err(
      cryptoNotSupportedError(
        error instanceof Error ? error.message : "Failed to generate key pair"
      )
    );
  }
}

/**
 * Exports the public key bytes from a CryptoKey.
 */
export async function exportPublicKeyBytes(
  publicKey: CryptoKey
): Promise<Result<Uint8Array, WalletError>> {
  try {
    const exported = await window.crypto.subtle.exportKey("raw", publicKey);
    return ok(new Uint8Array(exported));
  } catch (error) {
    return err(
      cryptoNotSupportedError(
        error instanceof Error ? error.message : "Failed to export public key"
      )
    );
  }
}

/**
 * Signs a message using the Web Crypto API.
 */
export async function signWithWebCrypto(
  privateKey: CryptoKey,
  message: Uint8Array
): Promise<Result<Uint8Array, WalletError>> {
  try {
    const signature = await window.crypto.subtle.sign(
      { name: "Ed25519" },
      privateKey,
      message.buffer as ArrayBuffer
    );
    return ok(new Uint8Array(signature));
  } catch (error) {
    return err(
      cryptoNotSupportedError(
        error instanceof Error ? error.message : "Failed to sign message"
      )
    );
  }
}

/**
 * Signs a message using noble-ed25519 (for non-WebCrypto keys).
 */
export async function signWithNoble(
  privateKey: Uint8Array,
  message: Uint8Array
): Promise<Result<Uint8Array, WalletError>> {
  try {
    const signature = await ed.signAsync(message, privateKey);
    return ok(signature);
  } catch (error) {
    return err(
      cryptoNotSupportedError(
        error instanceof Error ? error.message : "Failed to sign message"
      )
    );
  }
}

/**
 * Generates a BIP39 mnemonic phrase.
 * @param strength - Number of bits of entropy (128 = 12 words, 256 = 24 words)
 */
export async function generateMnemonic(
  strength: 128 | 256 = 128
): Promise<Result<string, WalletError>> {
  try {
    const words = await loadWordlist();
    const entropyBytes = strength / 8;
    const entropy = new Uint8Array(entropyBytes);
    crypto.getRandomValues(entropy);

    // Calculate checksum
    const hashBuffer = await crypto.subtle.digest("SHA-256", entropy);
    const hashArray = new Uint8Array(hashBuffer);
    const checksumBits = strength / 32;

    // Convert entropy + checksum to 11-bit groups
    const bits = Array.from(entropy)
      .map((b) => b.toString(2).padStart(8, "0"))
      .join("");

    const checksumBitString = hashArray[0]!.toString(2).padStart(8, "0");
    const allBits = bits + checksumBitString.slice(0, checksumBits);

    // Split into 11-bit groups and map to words
    const mnemonicWords: string[] = [];
    for (let i = 0; i < allBits.length; i += 11) {
      const index = parseInt(allBits.slice(i, i + 11), 2);
      mnemonicWords.push(words[index]!);
    }

    return ok(mnemonicWords.join(" "));
  } catch (error) {
    return err(
      cryptoNotSupportedError(
        error instanceof Error
          ? error.message
          : "Failed to generate mnemonic"
      )
    );
  }
}

/**
 * Validates a BIP39 mnemonic phrase.
 */
export async function validateMnemonic(
  mnemonic: string
): Promise<Result<boolean, WalletError>> {
  try {
    const words = await loadWordlist();
    const mnemonicWords = mnemonic.trim().toLowerCase().split(/\s+/);

    // Check word count (12 or 24 words)
    if (mnemonicWords.length !== 12 && mnemonicWords.length !== 24) {
      return ok(false);
    }

    // Check all words are in wordlist
    for (const word of mnemonicWords) {
      if (!words.includes(word)) {
        return ok(false);
      }
    }

    // TODO: Verify checksum
    // For full validation, we'd need to reverse the mnemonic to entropy
    // and verify the checksum matches

    return ok(true);
  } catch (error) {
    return err(
      invalidMnemonicError(
        error instanceof Error ? error.message : "Validation failed"
      )
    );
  }
}

/**
 * Derives a seed from a mnemonic phrase using PBKDF2.
 * This follows BIP39 specification.
 */
export async function mnemonicToSeed(
  mnemonic: string,
  passphrase: string = ""
): Promise<Result<Uint8Array, WalletError>> {
  try {
    const encoder = new TextEncoder();
    const mnemonicBytes = encoder.encode(mnemonic.normalize("NFKD"));
    const salt = encoder.encode(("mnemonic" + passphrase).normalize("NFKD"));

    // Import mnemonic as key material
    const keyMaterial = await crypto.subtle.importKey(
      "raw",
      mnemonicBytes,
      "PBKDF2",
      false,
      ["deriveBits"]
    );

    // Derive 64 bytes (512 bits) using PBKDF2
    const derivedBits = await crypto.subtle.deriveBits(
      {
        name: "PBKDF2",
        salt: salt,
        iterations: 2048,
        hash: "SHA-512"
      },
      keyMaterial,
      512
    );

    return ok(new Uint8Array(derivedBits));
  } catch (error) {
    return err(
      cryptoNotSupportedError(
        error instanceof Error
          ? error.message
          : "Failed to derive seed from mnemonic"
      )
    );
  }
}

/**
 * Derives an Ed25519 key pair from a seed using noble-ed25519.
 * Uses the first 32 bytes of the seed as the private key.
 */
export async function seedToKeyPair(
  seed: Uint8Array
): Promise<Result<{ publicKey: Uint8Array; privateKey: Uint8Array }, WalletError>> {
  try {
    // For Ed25519, we use the first 32 bytes of the seed as the private key
    const privateKey = seed.slice(0, 32);

    // Derive public key from private key using noble-ed25519
    const publicKey = await ed.getPublicKeyAsync(privateKey);

    return ok({
      publicKey,
      privateKey
    });
  } catch (error) {
    return err(
      cryptoNotSupportedError(
        error instanceof Error
          ? error.message
          : "Failed to derive key pair from seed"
      )
    );
  }
}

/**
 * Encrypts data using AES-GCM with a password-derived key.
 */
export async function encryptWithPassword(
  data: Uint8Array,
  password: string
): Promise<
  Result<{ encrypted: Uint8Array; salt: Uint8Array; iv: Uint8Array }, WalletError>
> {
  try {
    const encoder = new TextEncoder();
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const iv = crypto.getRandomValues(new Uint8Array(12));

    // Derive key from password using PBKDF2
    const keyMaterial = await crypto.subtle.importKey(
      "raw",
      encoder.encode(password),
      "PBKDF2",
      false,
      ["deriveKey"]
    );

    const key = await crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: salt.buffer as ArrayBuffer,
        iterations: 100000,
        hash: "SHA-256"
      },
      keyMaterial,
      { name: "AES-GCM", length: 256 },
      false,
      ["encrypt"]
    );

    // Encrypt the data
    const encrypted = await crypto.subtle.encrypt(
      { name: "AES-GCM", iv: iv },
      key,
      data.buffer as ArrayBuffer
    );

    return ok({
      encrypted: new Uint8Array(encrypted),
      salt: salt,
      iv: iv
    });
  } catch (error) {
    return err(
      cryptoNotSupportedError(
        error instanceof Error ? error.message : "Encryption failed"
      )
    );
  }
}

/**
 * Decrypts data that was encrypted with encryptWithPassword.
 */
export async function decryptWithPassword(
  encrypted: Uint8Array,
  password: string,
  salt: Uint8Array,
  iv: Uint8Array
): Promise<Result<Uint8Array, WalletError>> {
  try {
    const encoder = new TextEncoder();

    // Derive key from password using PBKDF2
    const keyMaterial = await crypto.subtle.importKey(
      "raw",
      encoder.encode(password),
      "PBKDF2",
      false,
      ["deriveKey"]
    );

    const key = await crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: salt.buffer as ArrayBuffer,
        iterations: 100000,
        hash: "SHA-256"
      },
      keyMaterial,
      { name: "AES-GCM", length: 256 },
      false,
      ["decrypt"]
    );

    // Decrypt the data
    const decrypted = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: iv.buffer as ArrayBuffer },
      key,
      encrypted.buffer as ArrayBuffer
    );

    return ok(new Uint8Array(decrypted));
  } catch (error) {
    return err(
      cryptoNotSupportedError(
        error instanceof Error ? error.message : "Decryption failed"
      )
    );
  }
}

/**
 * Generates a random wallet ID.
 */
export function generateWalletID(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/**
 * Converts bytes to base64 string.
 */
export function bytesToBase64(bytes: Uint8Array): string {
  return btoa(String.fromCharCode(...bytes));
}

/**
 * Converts base64 string to bytes.
 */
export function base64ToBytes(base64: string): Uint8Array {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}
