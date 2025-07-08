import { createContext, useContext } from "react";
import type { ModalsContextValue } from "./types";

export const ModalsContext = createContext<ModalsContextValue | null>(null);

export function useModals() {
  const ctx = useContext(ModalsContext);
  if (!ctx) throw new Error("useModals must be used within ModalsProvider");
  return ctx;
}

export const modals = {
  openModal: (...args: Parameters<ModalsContextValue["openModal"]>) => {
    const ctx = (window as any).__modalsContext as ModalsContextValue | undefined;
    if (!ctx) throw new Error("modals context not found");
    return ctx.openModal(...args);
  },
  openContextModal: (...args: Parameters<ModalsContextValue["openContextModal"]>) => {
    const ctx = (window as any).__modalsContext as ModalsContextValue | undefined;
    if (!ctx) throw new Error("modals context not found");
    return ctx.openContextModal(...args);
  },
  openConfirmModal: (...args: Parameters<ModalsContextValue["openConfirmModal"]>) => {
    const ctx = (window as any).__modalsContext as ModalsContextValue | undefined;
    if (!ctx) throw new Error("modals context not found");
    return ctx.openConfirmModal(...args);
  },
  closeModal: (...args: Parameters<ModalsContextValue["closeModal"]>) => {
    const ctx = (window as any).__modalsContext as ModalsContextValue | undefined;
    if (!ctx) throw new Error("modals context not found");
    return ctx.closeModal(...args);
  },
  closeAll: (...args: Parameters<ModalsContextValue["closeAll"]>) => {
    const ctx = (window as any).__modalsContext as ModalsContextValue | undefined;
    if (!ctx) throw new Error("modals context not found");
    return ctx.closeAll(...args);
  },
};

// Attach context to window for global API (optional, for compatibility)
if (typeof window !== "undefined") {
  Object.defineProperty(window, "__modalsContext", {
    get() {
      return (window as any).___modalsContextValue;
    },
    set(v) {
      (window as any).___modalsContextValue = v;
    },
    configurable: true,
  });
}
