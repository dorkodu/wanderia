import { err, type Result } from "neverthrow";
import { useCallback, useEffect } from "react";
import { noActiveWalletError } from "../errors";
import * as walletService from "../service";
import { useWalletStore } from "../store";
import type { Wallet, WalletBackup, WalletError } from "../types";

/**
 * React hook for wallet operations.
 * Provides wallet state and actions for creating, importing, and signing.
 */
export function useWallet() {
  const {
    wallets,
    activeWalletID,
    isLoading,
    isInitialized,
    initialize,
    setActiveWallet,
    addWallet,
    removeWallet,
    setLoading
  } = useWalletStore();

  // Initialize on mount
  useEffect(() => {
    if (!isInitialized) {
      initialize();
    }
  }, [isInitialized, initialize]);

  // Get active wallet
  const activeWallet = wallets.find((w) => w.id === activeWalletID) ?? null;

  /**
   * Creates a new wallet.
   * Returns the wallet and mnemonic phrase for backup.
   */
  const createWallet = useCallback(
    async (
      name: string
    ): Promise<Result<{ wallet: Wallet; mnemonic: string }, WalletError>> => {
      setLoading(true);
      try {
        const result = await walletService.createWallet(name);
        if (result.isOk()) {
          addWallet(result.value.wallet);
          setActiveWallet(result.value.wallet.id);
        }
        return result;
      } finally {
        setLoading(false);
      }
    },
    [setLoading, addWallet, setActiveWallet]
  );

  /**
   * Imports a wallet from a mnemonic phrase.
   */
  const importFromMnemonic = useCallback(
    async (name: string, mnemonic: string): Promise<Result<Wallet, WalletError>> => {
      setLoading(true);
      try {
        const result = await walletService.importFromMnemonic(name, mnemonic);
        if (result.isOk()) {
          addWallet(result.value);
          setActiveWallet(result.value.id);
        }
        return result;
      } finally {
        setLoading(false);
      }
    },
    [setLoading, addWallet, setActiveWallet]
  );

  /**
   * Imports a wallet from an encrypted backup.
   */
  const importFromBackup = useCallback(
    async (
      backup: WalletBackup,
      password: string
    ): Promise<Result<Wallet, WalletError>> => {
      setLoading(true);
      try {
        const result = await walletService.importFromBackup(backup, password);
        if (result.isOk()) {
          addWallet(result.value);
          setActiveWallet(result.value.id);
        }
        return result;
      } finally {
        setLoading(false);
      }
    },
    [setLoading, addWallet, setActiveWallet]
  );

  /**
   * Exports the active wallet as an encrypted backup.
   */
  const exportWallet = useCallback(
    async (password: string): Promise<Result<WalletBackup, WalletError>> => {
      if (!activeWalletID) {
        return err(noActiveWalletError());
      }
      return walletService.exportWallet(activeWalletID, password);
    },
    [activeWalletID]
  );

  /**
   * Signs a message with the active wallet.
   */
  const signMessage = useCallback(
    async (message: Uint8Array): Promise<Result<Uint8Array, WalletError>> => {
      if (!activeWalletID) {
        return err(noActiveWalletError());
      }
      return walletService.signMessage(activeWalletID, message);
    },
    [activeWalletID]
  );

  /**
   * Selects a wallet as active.
   */
  const selectWallet = useCallback(
    (walletID: string) => {
      const wallet = wallets.find((w) => w.id === walletID);
      if (wallet) {
        setActiveWallet(walletID);
      }
    },
    [wallets, setActiveWallet]
  );

  /**
   * Deletes a wallet.
   */
  const deleteWallet = useCallback(
    async (walletID: string): Promise<Result<void, WalletError>> => {
      setLoading(true);
      try {
        const result = await walletService.deleteWallet(walletID);
        if (result.isOk()) {
          removeWallet(walletID);
        }
        return result;
      } finally {
        setLoading(false);
      }
    },
    [setLoading, removeWallet]
  );

  return {
    // State
    wallets,
    activeWallet,
    isLoading,
    isInitialized,

    // Actions
    createWallet,
    importFromMnemonic,
    importFromBackup,
    exportWallet,
    signMessage,
    selectWallet,
    deleteWallet
  };
}
