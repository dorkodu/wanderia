import { useNavigate } from "@tanstack/react-router"
import type { LucideIcon } from "lucide-react"
import type { SpotlightAction, SpotlightKeyboardShortcut, SpotlightOpenConfig } from "./types"

/**
 * Utility function to create navigation actions for the spotlight
 */
export function createNavigationAction(
  id: string,
  label: string,
  path: string,
  options: {
    icon?: LucideIcon
    shortcut?: string
    searchTerms?: string[]
    navigate: ReturnType<typeof useNavigate>
  }
): SpotlightAction {
  return {
    id,
    label,
    shortcut: options.shortcut,
    searchTerms: options.searchTerms || [label.toLowerCase()],
    icon: options.icon,
    group: "Navigation",
    onSelect: () => {
      options.navigate({ to: path })
    }
  }
}

/**
 * Utility function to create quick action that opens spotlight with search
 */
export function createQuickAction(
  id: string,
  label: string,
  searchTerm: string,
  options: {
    icon?: LucideIcon
    shortcut?: string
    searchTerms?: string[]
    open: (config?: SpotlightOpenConfig) => void
  }
): SpotlightAction {
  return {
    id,
    label,
    shortcut: options.shortcut,
    searchTerms: options.searchTerms || [label.toLowerCase()],
    icon: options.icon,
    group: "Quick Actions",
    onSelect: () => {
      options.open({ searchString: searchTerm })
    }
  }
}

/**
 * Utility function to create actions with callbacks
 */
export function createCallbackAction(
  id: string,
  label: string,
  callback: () => void,
  options: {
    icon?: LucideIcon
    shortcut?: string
    searchTerms?: string[]
    group?: string
  } = {}
): SpotlightAction {
  return {
    id,
    label,
    shortcut: options.shortcut,
    searchTerms: options.searchTerms || [label.toLowerCase()],
    icon: options.icon,
    group: options.group || "Actions",
    onSelect: callback
  }
}

/**
 * Helper to create keyboard shortcuts easily
 */
export function createKeyboardShortcut(
  key: string,
  actionId: string,
  modifiers: {
    meta?: boolean
    ctrl?: boolean
    shift?: boolean
    alt?: boolean
  } = { meta: true }
): SpotlightKeyboardShortcut {
  return {
    key,
    actionId,
    ...modifiers
  }
}
