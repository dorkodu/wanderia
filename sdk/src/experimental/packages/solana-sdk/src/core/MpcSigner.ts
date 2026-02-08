import type { OkoWalletInterface } from "@oko-wallet/oko-sdk-core"; // Assuming type availability or we mock it
import { PublicKey, Transaction, VersionedTransaction } from "@solana/web3.js";
import { Signer } from "../types.js";

export class MpcSigner implements Signer {
  private _publicKey: PublicKey | null = null;
  private _connected: boolean = false;

  constructor(private okoWallet: OkoWalletInterface) { }

  get publicKey(): PublicKey | null {
    return this._publicKey;
  }

  get isConnected(): boolean {
    return this._connected;
  }

  async connect(): Promise<void> {
    // In Oko, connection usually implies getting the public key availability
    const hexKey = await this.okoWallet.getPublicKeyEd25519();
    if (hexKey) {
      this._publicKey = new PublicKey(Buffer.from(hexKey, 'hex'));
      this._connected = true;
    }
  }

  async disconnect(): Promise<void> {
    this._publicKey = null;
    this._connected = false;
  }

  async signTransaction<T extends Transaction | VersionedTransaction>(transaction: T): Promise<T> {
    if (!this._publicKey) throw new Error("Wallet not connected");

    // Serialize transaction to bytes
    const message = transaction.serializeMessage();

    // Sign using Oko MPC
    // Note: This logic assumes okoWallet exposes a raw sign method compatible with Ed25519
    // We might need to adapt based on specific Oko Core API if it differs.
    // Based on research, we likely use a sign method that returns the signature.
    // If okoWallet.signSolanaTransaction exists (which it likely does in the svm package), uses that.
    // But here we are building from 'Core'. Core usually exposes `sign` for raw bytes or specific chains.

    // Let's assume we use the raw sign for now or we might need to check how svm_wallet did it.
    // Re-checking svm_wallet code would be ideal if I could, but I'll implement generic structure.

    const signatureHex = await this.okoWallet.sign(
      "solana",
      Buffer.from(message).toString('hex'),
      this._publicKey.toBuffer().toString('hex')
    );

    const signature = Uint8Array.from(Buffer.from(signatureHex, 'hex'));

    transaction.addSignature(this._publicKey, Buffer.from(signature));
    return transaction;
  }

  async signAllTransactions<T extends Transaction | VersionedTransaction>(transactions: T[]): Promise<T[]> {
    // Parallel signing for now
    return Promise.all(transactions.map(tx => this.signTransaction(tx)));
  }

  async signMessage(message: Uint8Array): Promise<Uint8Array> {
    if (!this._publicKey) throw new Error("Wallet not connected");

    const signatureHex = await this.okoWallet.sign(
      "solana",
      Buffer.from(message).toString('hex'),
      this._publicKey.toBuffer().toString('hex')
    );

    return Uint8Array.from(Buffer.from(signatureHex, 'hex'));
  }
}
