// Core hooks and providers
export { SpotlightProvider, useSpotlight } from "./src/useSpotlight"

// Components
export { Spotlight, SpotlightTrigger } from "./src"

// Types
export type {
  SpotlightAction, SpotlightContextType, SpotlightKeyboardShortcut,
  SpotlightOpenConfig, SpotlightProviderProps
} from "./src/types"

// Utilities
export {
  createCallbackAction,
  createKeyboardShortcut, createNavigationAction,
  createQuickAction
} from "./src/helpers"

// Examples (for reference)
export { SpotlightUsageExamples } from "./examples"
export type { FutureSpotlightOpenConfig } from "./examples"

