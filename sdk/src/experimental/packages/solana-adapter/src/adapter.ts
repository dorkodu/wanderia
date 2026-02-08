import { MpcSigner } from '@my-embedded-wallet/solana-sdk';
import {
  BaseMessageSignerWalletAdapter,
  WalletAccountError,
  WalletName,
  WalletReadyState,
  WalletSignTransactionError
} from '@solana/wallet-adapter-base';
import { PublicKey, Transaction, VersionedTransaction } from '@solana/web3.js';

export const MyEmbeddedWalletName = 'MyEmbeddedWallet' as WalletName<'MyEmbeddedWallet'>;

export interface MyEmbeddedWalletAdapterConfig {
  signer: MpcSigner;
}

export class MyEmbeddedWalletAdapter extends BaseMessageSignerWalletAdapter {
  name = MyEmbeddedWalletName;
  url = 'https://my-embedded-wallet.com';
  icon = 'data:image/svg+xml;base64,...'; // Placeholder icon
  supportedTransactionVersions: ReadonlySet<any> = new Set(['legacy', 0]);

  private _signer: MpcSigner;
  private _readyState: WalletReadyState = WalletReadyState.Installed;

  constructor(config: MyEmbeddedWalletAdapterConfig) {
    super();
    this._signer = config.signer;
  }

  get publicKey(): PublicKey | null {
    return this._signer.publicKey;
  }

  get connecting(): boolean {
    return false; // MpcSigner connection is usually instant after auth
  }

  get readyState(): WalletReadyState {
    return this._readyState; // Always "Installed" since it's embedded
  }

  async connect(): Promise<void> {
    try {
      if (this.connected || this.connecting) return;

      await this._signer.connect();

      if (!this._signer.publicKey) throw new WalletAccountError();

      this.emit('connect', this._signer.publicKey);
    } catch (error: any) {
      this.emit('error', error);
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    await this._signer.disconnect();
    this.emit('disconnect');
  }

  async signTransaction<T extends Transaction | VersionedTransaction>(transaction: T): Promise<T> {
    try {
      return await this._signer.signTransaction(transaction);
    } catch (error: any) {
      throw new WalletSignTransactionError(error?.message, error);
    }
  }

  async signAllTransactions<T extends Transaction | VersionedTransaction>(transactions: T[]): Promise<T[]> {
    try {
      return await this._signer.signAllTransactions(transactions);
    } catch (error: any) {
      throw new WalletSignTransactionError(error?.message, error);
    }
  }

  async signMessage(message: Uint8Array): Promise<Uint8Array> {
    try {
      return await this._signer.signMessage(message);
    } catch (error: any) {
      throw new WalletSignTransactionError(error?.message, error);
    }
  }
}
