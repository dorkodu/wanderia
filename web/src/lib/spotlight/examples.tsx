import type { SpotlightOpenConfig } from "./src/types"
import { useSpotlight } from "./src/useSpotlight"


/**
 * Example showing the new configuration object approach for opening spotlight
 * This demonstrates current functionality and future extensibility
 */

// Current usage examples
export function SpotlightUsageExamples() {
  const { open } = useSpotlight()

  // 1. Basic usage - just open spotlight
  const openBasic = () => {
    open()
  }

  // 2. Open with search string (current feature)
  const openWithSearch = () => {
    open({ searchString: "create" })
  }

  // 3. Future feature examples (not yet implemented)
  const openWithAdvancedConfig = () => {
    open({
      searchString: "project",
      groupFilter: "Projects",        // Future: Filter to specific group
      selectedActionId: "create-project", // Future: Pre-select action
      autoFocus: true                 // Future: Auto-focus behavior
    })
  }

  // 4. Utility function to create reusable configs
  const createQuickAction = (searchTerm: string): SpotlightOpenConfig => ({
    searchString: searchTerm,
    autoFocus: true
  })

  const openQuickCreate = () => open(createQuickAction("create"))
  const openQuickSettings = () => open(createQuickAction("settings"))

  return (
    <div className="space-y-2">
      <button onClick={openBasic}>
        Open Spotlight
      </button>

      <button onClick={openWithSearch}>
        Create Actions
      </button>

      <button onClick={openWithAdvancedConfig}>
        Project Actions (Future Features)
      </button>

      <button onClick={openQuickCreate}>
        Quick Create
      </button>

      <button onClick={openQuickSettings}>
        Quick Settings
      </button>
    </div>
  )
}

/**
 * Benefits of the configuration object approach:
 * 
 * 1. **Backward Compatibility**: 
 *    - open() still works without parameters
 *    - All existing code continues to work
 * 
 * 2. **Future Extensibility**:
 *    - Can add new options without breaking existing code
 *    - Optional parameters make it easy to add features incrementally
 * 
 * 3. **Type Safety**:
 *    - TypeScript ensures only valid configuration options are used
 *    - IntelliSense provides helpful autocomplete
 * 
 * 4. **Self-Documenting**:
 *    - Configuration object makes intent clear
 *    - Easy to understand what each option does
 * 
 * 5. **Composable**:
 *    - Can create reusable configuration objects
 *    - Easy to build higher-level utilities
 */

// Example of how this could be extended in the future:
interface FutureSpotlightOpenConfig extends SpotlightOpenConfig {
  selectedActionId?: string    // Pre-select a specific action
  groupFilter?: string        // Show only actions from specific group
  autoFocus?: boolean         // Control input focus behavior
  position?: 'center' | 'top' // Control spotlight position
  theme?: 'light' | 'dark'    // Override theme for this instance
  callbacks?: {               // Event callbacks
    onOpen?: () => void
    onClose?: () => void
    onActionSelect?: (actionId: string) => void
  }
}

export type { FutureSpotlightOpenConfig }
