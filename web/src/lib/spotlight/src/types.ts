import * as React from "react"

export interface SpotlightAction {
  id: string
  label: string
  shortcut?: string
  searchTerms?: string[]
  icon?: React.ComponentType<{ size?: number; className?: string }>
  onSelect: () => void
  group?: string
}

export interface SpotlightKeyboardShortcut {
  key: string
  meta?: boolean
  ctrl?: boolean
  shift?: boolean
  alt?: boolean
  actionId: string
}

export interface SpotlightOpenConfig {
  searchString?: string
  selectedActionId?: string
  groupFilter?: string
  autoFocus?: boolean
}

export interface SpotlightContextType {
  isOpen: boolean
  open: (config?: SpotlightOpenConfig) => void
  close: () => void
  toggle: () => void
  searchString: string
  setSearchString: (value: string) => void
  actions: SpotlightAction[]
  getActionById: (id: string) => SpotlightAction | undefined
}

export interface SpotlightProviderProps {
  children: React.ReactNode
  actions?: SpotlightAction[]
  keyboardShortcuts?: SpotlightKeyboardShortcut[]
}
