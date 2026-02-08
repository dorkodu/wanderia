import { useWalletContext } from '../context/WalletContext.js';

export const useEmbeddedWallet = () => {
  const { signer, publicKey, isConnected, connect, disconnect } = useWalletContext();

  return {
    signer,
    publicKey,
    isConnected,
    connect,
    disconnect,
    // Helper to check if ready
    ready: !!signer
  };
};
