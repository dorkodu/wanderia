/**
 * Wanderia Embedded Wallet SDK
 *
 * A self-custodial wallet solution for Solana that provides:
 * - Secure key generation using Web Crypto API (Ed25519)
 * - IndexedDB storage with non-extractable keys
 * - BIP39 mnemonic recovery support
 * - Encrypted backup export/import
 * - React hooks for state management
 */

// Types
export type {
  MnemonicRecovery, StoredKey, Wallet, WalletActions, WalletBackup, WalletError, WalletErrorCode, WalletState, WalletStore
} from "./types";

// Error factories
export {
  createWalletError, cryptoNotSupportedError, decryptionError,
  encryptionError,
  invalidBackupError, invalidMnemonicError, noActiveWalletError, signingError,
  storageError, walletExistsError, walletNotFoundError
} from "./errors";

// Crypto utilities
export {
  base64ToBytes,
  bytesToBase64,
  generateMnemonic,
  generateWalletID,
  isWebCryptoSupported,
  mnemonicToSeed,
  seedToKeyPair,
  signWithNoble,
  signWithWebCrypto,
  validateMnemonic
} from "./crypto";

// Service layer
export {
  createWallet, deleteWallet, exportWallet, getWallet, getWallets, importFromBackup, importFromMnemonic, signMessage
} from "./service";

// Storage layer
export {
  clearAllWallets, getAllWallets, getDatabase, getStoredKey, saveWallet, updateLastUsed,
  walletExists
} from "./storage";

// React integration
export { useWallet } from "./hooks/useWallet";
export { getActiveWallet, useWalletStore } from "./store";

// Solana utilities
export {
  base58ToBytes,
  createSignedTransaction,
  getAddressInfo,
  getPublicKeyBytes,
  isValidSolanaAddress,
  shortenAddress,
  signTransaction
} from "./solana";
