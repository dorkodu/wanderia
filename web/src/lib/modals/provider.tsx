import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@web/components/ui/dialog";
import React, { useCallback, useRef, useState } from "react";
import { ModalsContext } from ".";
import type { ConfirmModalProps, ContextModalProps, ModalBase, ModalId, ModalsContextValue } from "./types";

let globalModalId = 0;
function getId() {
  return `modal-${++globalModalId}`;
}

const ModalsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [modals, setModals] = useState<ModalBase[]>([]);
  const modalsRef = useRef(modals);
  modalsRef.current = modals;

  const closeModal = useCallback((id: ModalId) => {
    setModals((ms) => ms.map((m) => (m.id === id ? { ...m, opened: false } : m)));
    setTimeout(() => {
      setModals((ms) => ms.filter((m) => m.id !== id));
    }, 200);
  }, []);

  const closeAll = useCallback(() => {
    setModals((ms) => ms.map((m) => ({ ...m, opened: false })));
    setTimeout(() => setModals([]), 200);
  }, []);

  const openModal = useCallback((options: Omit<ModalBase, "opened" | "type">) => {
    const id = options.id || getId();
    setModals((ms) => [
      ...ms,
      {
        ...options,
        id,
        type: "base",
        opened: true,
      },
    ]);
    return id;
  }, []);

  const openContextModal = useCallback(<T,>({ title, innerProps, component }: {
    modal: string;
    title?: React.ReactNode;
    innerProps: T;
    component?: React.ComponentType<ContextModalProps<T>>;
  }) => {
    const id = getId();
    setModals((ms) => [
      ...ms,
      {
        id,
        type: "context",
        title,
        opened: true,
        contextModalProps: { innerProps, context: contextValue, id },
        component,
      },
    ]);
    return id;
  }, []);

  const openConfirmModal = useCallback((options: ConfirmModalProps & { title?: React.ReactNode }) => {
    const id = getId();
    setModals((ms) => [
      ...ms,
      {
        id,
        type: "confirm",
        title: options.title,
        opened: true,
        confirmProps: options,
      },
    ]);
    return id;
  }, []);

  const contextValue: ModalsContextValue = {
    openModal,
    openContextModal,
    openConfirmModal,
    closeModal,
    closeAll,
    modals,
  };

  // Attach context to window for global API (optional, for compatibility)
  if (typeof window !== "undefined") {
    (window as any).___modalsContextValue = contextValue;
  }

  return (
    <ModalsContext.Provider value={contextValue}>
      {children}
      {modals.map((modal) => {
        if (modal.type === "base") {
          return (
            <Dialog key={modal.id} open={modal.opened} onOpenChange={(open) => !open && closeModal(modal.id)}>
              <DialogContent>
                {modal.title && <DialogHeader><DialogTitle>{modal.title}</DialogTitle></DialogHeader>}
                {modal.children}
              </DialogContent>
            </Dialog>
          );
        }
        if (modal.type === "context" && modal.component) {
          const Comp = modal.component;
          return (
            <Dialog key={modal.id} open={modal.opened} onOpenChange={(open) => !open && closeModal(modal.id)}>
              <DialogContent>
                {modal.title && <DialogHeader><DialogTitle>{modal.title}</DialogTitle></DialogHeader>}
                <Comp {...modal.contextModalProps} />
              </DialogContent>
            </Dialog>
          );
        }
        if (modal.type === "confirm" && modal.confirmProps) {
          const { labels = { confirm: "Confirm", cancel: "Cancel" }, onConfirm, onCancel, children } = modal.confirmProps;
          return (
            <Dialog key={modal.id} open={modal.opened} onOpenChange={(open) => !open && closeModal(modal.id)}>
              <DialogContent>
                {modal.title && <DialogHeader><DialogTitle>{modal.title}</DialogTitle></DialogHeader>}
                <DialogDescription>{children}</DialogDescription>
                <DialogFooter>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => {
                      onCancel?.();
                      closeModal(modal.id);
                    }}
                  >
                    {labels.cancel}
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      onConfirm?.();
                      closeModal(modal.id);
                    }}
                  >
                    {labels.confirm}
                  </button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          );
        }
        return null;
      })}
    </ModalsContext.Provider>
  );
};

export default ModalsProvider;
