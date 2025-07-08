import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export interface AppStoreState {
  loading: {
    auth?: boolean;
    data?: boolean;
    ui?: boolean;
  }
}

export interface AppStoreAction { }

const initialState: AppStoreState = {
  loading: {
    auth: false,
    data: false,
    ui: false
  }
};

export const useAppStore = create(
  immer<AppStoreState & AppStoreAction>((_set, _get) => ({
    ...initialState,
  }))
);
