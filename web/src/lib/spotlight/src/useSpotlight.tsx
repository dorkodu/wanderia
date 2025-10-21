import * as React from "react"
import type {
  SpotlightContextType,
  SpotlightOpenConfig,
  SpotlightProviderProps
} from "./types"

const SpotlightContext = React.createContext<SpotlightContextType | undefined>(undefined)

export function SpotlightProvider({
  children,
  actions: providedActions = [],
  keyboardShortcuts = []
}: SpotlightProviderProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [searchString, setSearchString] = React.useState("")

  const open = React.useCallback((config?: SpotlightOpenConfig) => {
    setIsOpen(true)
    if (config?.searchString !== undefined) {
      setSearchString(config.searchString)
    }
  }, [])

  const close = React.useCallback(() => {
    setIsOpen(false)
    setSearchString("") // Clear search string when closing
  }, [])

  const toggle = React.useCallback(() => setIsOpen(prev => !prev), [])

  const getActionById = React.useCallback((id: string) => {
    return providedActions.find(action => action.id === id)
  }, [providedActions])

  // Global keyboard shortcut handler
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Primary spotlight toggle (always Cmd/Ctrl + K)
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        toggle()
        return
      }

      // Custom keyboard shortcuts (only when spotlight is closed)
      if (!isOpen) {
        for (const shortcut of keyboardShortcuts) {
          const metaMatch = shortcut.meta ? e.metaKey : true
          const ctrlMatch = shortcut.ctrl ? e.ctrlKey : true
          const shiftMatch = shortcut.shift ? e.shiftKey : true
          const altMatch = shortcut.alt ? e.altKey : true

          if (
            e.key === shortcut.key &&
            metaMatch &&
            ctrlMatch &&
            shiftMatch &&
            altMatch
          ) {
            e.preventDefault()
            const action = getActionById(shortcut.actionId)
            if (action) {
              action.onSelect()
            }
            return
          }
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [toggle, isOpen, keyboardShortcuts, getActionById])

  const value = React.useMemo(
    () => ({
      isOpen,
      open,
      close,
      toggle,
      searchString,
      setSearchString,
      actions: providedActions,
      getActionById
    }),
    [isOpen, open, close, toggle, searchString, setSearchString, providedActions, getActionById]
  )

  return (
    <SpotlightContext.Provider value={value}>
      {children}
    </SpotlightContext.Provider>
  )
}

export function useSpotlight() {
  const context = React.useContext(SpotlightContext)
  if (context === undefined) {
    throw new Error("useSpotlight must be used within a SpotlightProvider")
  }
  return context
}
