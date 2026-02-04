import { MpcSigner } from '@my-embedded-wallet/solana-sdk';
import type { OkoWalletInterface } from '@oko-wallet/oko-sdk-core';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface WalletContextType {
  signer: MpcSigner | null;
  publicKey: string | null;
  isConnected: boolean;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

interface WalletProviderProps {
  children: ReactNode;
  okoWallet: OkoWalletInterface; // Injected from the app or another provider
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children, okoWallet }) => {
  const [signer, setSigner] = useState<MpcSigner | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [publicKey, setPublicKey] = useState<string | null>(null);

  useEffect(() => {
    const mpcSigner = new MpcSigner(okoWallet);
    setSigner(mpcSigner);
  }, [okoWallet]);

  const connect = async () => {
    if (!signer) return;
    try {
      await signer.connect();
      if (signer.publicKey) {
        setPublicKey(signer.publicKey.toBase58());
        setIsConnected(true);
      }
    } catch (e) {
      console.error("Failed to connect embedded wallet", e);
      throw e;
    }
  };

  const disconnect = async () => {
    if (!signer) return;
    await signer.disconnect();
    setPublicKey(null);
    setIsConnected(false);
  };

  return (
    <WalletContext.Provider value={{ signer, publicKey, isConnected, connect, disconnect }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWalletContext = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWalletContext must be used within a WalletProvider');
  }
  return context;
};
