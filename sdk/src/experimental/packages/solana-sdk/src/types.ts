import { PublicKey, Transaction, VersionedTransaction } from "@solana/web3.js";

export interface KeyProvider {
  publicKey: PublicKey | null;
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  isConnected: boolean;
}

export interface Signer extends KeyProvider {
  signTransaction<T extends Transaction | VersionedTransaction>(transaction: T): Promise<T>;
  signAllTransactions<T extends Transaction | VersionedTransaction>(transactions: T[]): Promise<T[]>;
  signMessage(message: Uint8Array): Promise<Uint8Array>;
}

export interface OkoUserSession {
  token: string;
  userId: string;
}
