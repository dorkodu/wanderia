import { AccountTier, IUser } from "@sdk/core/index"
import { trekie } from "@web/shared/lib/trekie"
import { LogKind, log } from "@web/shared/utils/log"
import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

export interface AppStoreState {

}

export interface AppStoreAction {

}

const initialState: AppStoreState = {

}

export const useAppStore = create(
  immer<AppStoreState & AppStoreAction>((set, get) => ({
    ...initialState,
  }))
)
