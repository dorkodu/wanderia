import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import * as walletService from "./service";
import type { Wallet, WalletState } from "./types";

/**
 * Zustand store for wallet state management.
 * Persists the active wallet selection to localStorage.
 */
interface WalletStoreState extends WalletState {
  /** Initialize the store by loading wallets from IndexedDB */
  initialize: () => Promise<void>;
  /** Set the active wallet */
  setActiveWallet: (walletID: string | null) => void;
  /** Update the wallet list */
  setWallets: (wallets: Wallet[]) => void;
  /** Add a wallet to the list */
  addWallet: (wallet: Wallet) => void;
  /** Remove a wallet from the list */
  removeWallet: (walletID: string) => void;
  /** Set loading state */
  setLoading: (loading: boolean) => void;
}

export const useWalletStore = create<WalletStoreState>()(
  persist(
    (set, get) => ({
      wallets: [],
      activeWalletID: null,
      isLoading: false,
      isInitialized: false,

      initialize: async () => {
        if (get().isInitialized) return;

        set({ isLoading: true });

        try {
          const wallets = await walletService.getWallets();
          set({
            wallets,
            isLoading: false,
            isInitialized: true
          });

          // Auto-select first wallet if none selected
          if (!get().activeWalletID && wallets.length > 0) {
            set({ activeWalletID: wallets[0]!.id });
          }
        } catch (error) {
          console.error("Failed to initialize wallet store:", error);
          set({ isLoading: false, isInitialized: true });
        }
      },

      setActiveWallet: (walletID) => {
        set({ activeWalletID: walletID });
      },

      setWallets: (wallets) => {
        set({ wallets });
      },

      addWallet: (wallet) => {
        set((state) => ({
          wallets: [...state.wallets, wallet]
        }));
      },

      removeWallet: (walletID) => {
        set((state) => ({
          wallets: state.wallets.filter((w) => w.id !== walletID),
          activeWalletID:
            state.activeWalletID === walletID ? null : state.activeWalletID
        }));
      },

      setLoading: (loading) => {
        set({ isLoading: loading });
      }
    }),
    {
      name: "wanderia-wallet-store",
      storage: createJSONStorage(() => localStorage),
      // Only persist the active wallet selection
      partialize: (state) => ({
        activeWalletID: state.activeWalletID
      })
    }
  )
);

/**
 * Gets the currently active wallet from the store.
 */
export function getActiveWallet(): Wallet | null {
  const state = useWalletStore.getState();
  if (!state.activeWalletID) return null;
  return state.wallets.find((w) => w.id === state.activeWalletID) ?? null;
}
