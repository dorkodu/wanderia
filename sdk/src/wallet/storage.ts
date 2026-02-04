import Dexie, { type EntityTable } from "dexie";
import type { StoredKey, Wallet } from "./types";

/**
 * Wallet metadata stored in IndexedDB.
 * Excludes runtime-only fields.
 */
interface WalletRecord {
  id: string;
  name: string;
  publicKey: string;
  createdAt: number;
  lastUsedAt: number;
}

/**
 * Key record stored in IndexedDB.
 * Note: CryptoKey objects can be stored directly in IndexedDB.
 */
interface KeyRecord {
  walletID: string;
  publicKeyBytes: Uint8Array;
  privateKey: CryptoKey | Uint8Array;
  isWebCrypto: boolean;
}

/**
 * Dexie database for wallet storage.
 * Uses IndexedDB under the hood.
 */
class WalletDatabase extends Dexie {
  wallets!: EntityTable<WalletRecord, "id">;
  keys!: EntityTable<KeyRecord, "walletID">;

  constructor() {
    super("WanderiaWallet");

    this.version(1).stores({
      wallets: "id, publicKey, createdAt",
      keys: "walletID"
    });
  }
}

/** Singleton database instance */
let db: WalletDatabase | null = null;

/**
 * Gets or creates the database instance.
 */
export function getDatabase(): WalletDatabase {
  if (!db) {
    db = new WalletDatabase();
  }
  return db;
}

/**
 * Saves a wallet and its key to storage.
 */
export async function saveWallet(
  wallet: Wallet,
  storedKey: StoredKey
): Promise<void> {
  const database = getDatabase();

  await database.transaction("rw", database.wallets, database.keys, async () => {
    await database.wallets.put({
      id: wallet.id,
      name: wallet.name,
      publicKey: wallet.publicKey,
      createdAt: wallet.createdAt,
      lastUsedAt: wallet.lastUsedAt
    });

    await database.keys.put({
      walletID: storedKey.walletID,
      publicKeyBytes: storedKey.publicKeyBytes,
      privateKey: storedKey.privateKey,
      isWebCrypto: storedKey.isWebCrypto
    });
  });
}

/**
 * Retrieves a wallet by ID.
 */
export async function getWallet(id: string): Promise<Wallet | undefined> {
  const database = getDatabase();
  const record = await database.wallets.get(id);

  if (!record) return undefined;

  return {
    id: record.id,
    name: record.name,
    publicKey: record.publicKey,
    createdAt: record.createdAt,
    lastUsedAt: record.lastUsedAt
  };
}

/**
 * Retrieves a wallet by public key.
 */
export async function getWalletByPublicKey(
  publicKey: string
): Promise<Wallet | undefined> {
  const database = getDatabase();
  const record = await database.wallets.where("publicKey").equals(publicKey).first();

  if (!record) return undefined;

  return {
    id: record.id,
    name: record.name,
    publicKey: record.publicKey,
    createdAt: record.createdAt,
    lastUsedAt: record.lastUsedAt
  };
}

/**
 * Retrieves all wallets.
 */
export async function getAllWallets(): Promise<Wallet[]> {
  const database = getDatabase();
  const records = await database.wallets.toArray();

  return records.map((record) => ({
    id: record.id,
    name: record.name,
    publicKey: record.publicKey,
    createdAt: record.createdAt,
    lastUsedAt: record.lastUsedAt
  }));
}

/**
 * Retrieves the stored key for a wallet.
 */
export async function getStoredKey(walletID: string): Promise<StoredKey | undefined> {
  const database = getDatabase();
  const record = await database.keys.get(walletID);

  if (!record) return undefined;

  return {
    walletID: record.walletID,
    publicKeyBytes: record.publicKeyBytes,
    privateKey: record.privateKey,
    isWebCrypto: record.isWebCrypto
  };
}

/**
 * Updates the lastUsedAt timestamp for a wallet.
 */
export async function updateLastUsed(walletID: string): Promise<void> {
  const database = getDatabase();
  await database.wallets.update(walletID, {
    lastUsedAt: Date.now()
  });
}

/**
 * Deletes a wallet and its key.
 */
export async function deleteWallet(walletID: string): Promise<void> {
  const database = getDatabase();

  await database.transaction("rw", database.wallets, database.keys, async () => {
    await database.wallets.delete(walletID);
    await database.keys.delete(walletID);
  });
}

/**
 * Checks if a wallet with the given public key exists.
 */
export async function walletExists(publicKey: string): Promise<boolean> {
  const database = getDatabase();
  const count = await database.wallets.where("publicKey").equals(publicKey).count();
  return count > 0;
}

/**
 * Clears all wallet data (for testing or reset).
 */
export async function clearAllWallets(): Promise<void> {
  const database = getDatabase();

  await database.transaction("rw", database.wallets, database.keys, async () => {
    await database.wallets.clear();
    await database.keys.clear();
  });
}
