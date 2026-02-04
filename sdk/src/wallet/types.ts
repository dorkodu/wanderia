import type { Result } from "neverthrow";

/**
 * Represents a stored wallet with its metadata.
 * Private keys are stored separately in a non-extractable CryptoKey format.
 */
export interface Wallet {
  /** Unique wallet identifier */
  id: string;
  /** User-friendly wallet name */
  name: string;
  /** Base58-encoded Solana public key (address) */
  publicKey: string;
  /** Timestamp when the wallet was created */
  createdAt: number;
  /** Timestamp of last usage */
  lastUsedAt: number;
}

/**
 * Internal representation of stored key material.
 * The privateKey is a non-extractable CryptoKey when using Web Crypto API,
 * or encrypted key bytes when using fallback.
 */
export interface StoredKey {
  /** Wallet ID this key belongs to */
  walletID: string;
  /** The public key bytes (32 bytes for Ed25519) */
  publicKeyBytes: Uint8Array;
  /**
   * The private key - either:
   * - CryptoKey (non-extractable) when using Web Crypto API
   * - Encrypted bytes when using fallback or for export
   */
  privateKey: CryptoKey | Uint8Array;
  /** Whether this key uses Web Crypto API (non-extractable) */
  isWebCrypto: boolean;
}

/**
 * Encrypted wallet backup for export/import.
 * Uses AES-GCM with PBKDF2 key derivation.
 */
export interface WalletBackup {
  /** Backup format version */
  version: 1;
  /** Wallet metadata */
  wallet: Omit<Wallet, "lastUsedAt">;
  /** Encrypted private key bytes */
  encryptedPrivateKey: string;
  /** Salt used for PBKDF2 key derivation (base64) */
  salt: string;
  /** IV used for AES-GCM encryption (base64) */
  iv: string;
  /** Checksum for integrity verification */
  checksum: string;
}

/**
 * Mnemonic-based wallet recovery data.
 */
export interface MnemonicRecovery {
  /** BIP39 mnemonic phrase (12 or 24 words) */
  mnemonic: string;
  /** Derivation path used */
  derivationPath: string;
}

/**
 * Wallet state managed by Zustand store.
 */
export interface WalletState {
  /** All available wallets */
  wallets: Wallet[];
  /** Currently active wallet ID */
  activeWalletID: string | null;
  /** Loading state */
  isLoading: boolean;
  /** Whether the wallet system is initialized */
  isInitialized: boolean;
}

/**
 * Wallet store actions.
 */
export interface WalletActions {
  /** Initialize the wallet system, loading wallets from storage */
  initialize(): Promise<void>;
  /** Create a new wallet */
  createWallet(name: string): Promise<Result<Wallet, WalletError>>;
  /** Create wallet from mnemonic */
  importFromMnemonic(
    name: string,
    mnemonic: string
  ): Promise<Result<Wallet, WalletError>>;
  /** Import wallet from encrypted backup */
  importFromBackup(
    backup: WalletBackup,
    password: string
  ): Promise<Result<Wallet, WalletError>>;
  /** Export wallet as encrypted backup */
  exportWallet(
    walletID: string,
    password: string
  ): Promise<Result<WalletBackup, WalletError>>;
  /** Select the active wallet */
  selectWallet(walletID: string): void;
  /** Delete a wallet */
  deleteWallet(walletID: string): Promise<Result<void, WalletError>>;
  /** Sign a message with the active wallet */
  signMessage(message: Uint8Array): Promise<Result<Uint8Array, WalletError>>;
}

/**
 * Combined wallet store type.
 */
export type WalletStore = WalletState & WalletActions;

/**
 * Error types for wallet operations.
 */
export type WalletErrorCode =
  | "WALLET_NOT_FOUND"
  | "CRYPTO_NOT_SUPPORTED"
  | "INVALID_MNEMONIC"
  | "SIGNING_ERROR"
  | "STORAGE_ERROR"
  | "DECRYPTION_ERROR"
  | "ENCRYPTION_ERROR"
  | "INVALID_BACKUP"
  | "NO_ACTIVE_WALLET"
  | "WALLET_EXISTS";

/**
 * Wallet error with typed error codes.
 */
export interface WalletError {
  code: WalletErrorCode;
  message: string;
  cause?: unknown;
}
