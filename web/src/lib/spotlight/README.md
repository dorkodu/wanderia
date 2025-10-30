# Spotlight Library

A configurable, type-safe spotlight/command palette component for React applications.

## Features

- 🎯 **Configurable Actions**: Define custom actions with labels, icons, shortcuts, and search terms
- 📚 **Grouped Actions**: Organize actions into logical groups
- ⌨️ **Keyboard Shortcuts**: Define custom keyboard shortcuts for actions
- 🔍 **Search Terms**: Each action can have multiple search terms for better discoverability
- 🚀 **Initial Search**: Open spotlight with pre-filled search text
- 💻 **Type Safe**: Full TypeScript support with IntelliSense
- 🔮 **Future-Proof**: Extensible configuration object pattern

## Quick Start

### 1. Install Dependencies

This library requires the following peer dependencies:

```bash
npm install @tanstack/react-router lucide-react
```

### 2. Basic Setup

```tsx
import { SpotlightProvider, Spotlight } from '@web/lib/spotlight'

const actions = [
  {
    id: 'create-post',
    label: 'Create new post',
    shortcut: '⌘P',
    searchTerms: ['create', 'post', 'new'],
    group: 'Content',
    onSelect: () => console.log('Creating post...'),
  },
]

function App() {
  return (
    <SpotlightProvider actions={actions}>
      <Spotlight />
      {/* Your app content */}
    </SpotlightProvider>
  )
}
```

### 3. Using in Components

```tsx
import { useSpotlight } from '@web/lib/spotlight'

function MyComponent() {
  const { open } = useSpotlight()

  return (
    <button onClick={() => open({ searchString: 'create' })}>
      Quick Create
    </button>
  )
}
```

## API Reference

### Components

#### `<SpotlightProvider>`

The main provider component that manages spotlight state and actions.

**Props:**

- `actions?: SpotlightAction[]` - Array of available actions
- `keyboardShortcuts?: SpotlightKeyboardShortcut[]` - Global keyboard shortcuts
- `children: React.ReactNode` - Child components

#### `<Spotlight>`

The main spotlight component that renders the command dialog.

#### `<SpotlightTrigger>`

A customizable trigger button for opening the spotlight.

**Props:**

- `variant?: "default" | "compact" | "icon"` - Visual variant
- `className?: string` - Custom CSS classes
- `placeholder?: string` - Placeholder text
- `showShortcut?: boolean` - Show keyboard shortcut hint
- `config?: SpotlightOpenConfig` - Configuration for opening spotlight

### Hooks

#### `useSpotlight()`

Main hook for interacting with spotlight functionality.

**Returns:**

- `isOpen: boolean` - Whether spotlight is currently open
- `open: (config?: SpotlightOpenConfig) => void` - Open spotlight with optional config
- `close: () => void` - Close spotlight
- `toggle: () => void` - Toggle spotlight open/closed
- `searchString: string` - Current search input value
- `setSearchString: (value: string) => void` - Set search input value
- `actions: SpotlightAction[]` - Array of all available actions
- `getActionById: (id: string) => SpotlightAction | undefined` - Get action by ID

### Types

#### `SpotlightAction`

```tsx
interface SpotlightAction {
  id: string // Unique identifier
  label: string // Display label
  shortcut?: string // Display shortcut (e.g., "⌘P")
  searchTerms?: string[] // Terms for search filtering
  icon?: React.ComponentType // Icon component
  onSelect: () => void // Action callback
  group?: string // Group name (default: "Other")
}
```

#### `SpotlightOpenConfig`

```tsx
interface SpotlightOpenConfig {
  searchString?: string // Pre-fill search input
  selectedActionId?: string // Pre-select an action (future feature)
  groupFilter?: string // Filter to specific group (future feature)
  autoFocus?: boolean // Auto-focus input (future feature)
}
```

#### `SpotlightKeyboardShortcut`

```tsx
interface SpotlightKeyboardShortcut {
  key: string // Key to press
  meta?: boolean // Cmd/Ctrl modifier
  ctrl?: boolean // Ctrl modifier
  shift?: boolean // Shift modifier
  alt?: boolean // Alt modifier
  actionId: string // ID of action to trigger
}
```

### Utilities

#### `createNavigationAction()`

Helper to create navigation actions.

```tsx
createNavigationAction('go-home', 'Go to Dashboard', '/dashboard', {
  icon: HomeIcon,
  searchTerms: ['home', 'dashboard'],
  navigate: navigate,
})
```

#### `createCallbackAction()`

Helper to create callback-based actions.

```tsx
createCallbackAction('save-file', 'Save File', () => saveFile(), {
  icon: SaveIcon,
  shortcut: '⌘S',
  group: 'File',
})
```

#### `createKeyboardShortcut()`

Helper to create keyboard shortcuts.

```tsx
createKeyboardShortcut('s', 'save-file', { meta: true })
```

## Examples

### Navigation Actions

```tsx
const navigationActions = [
  createNavigationAction('home', 'Dashboard', '/', {
    icon: HomeIcon,
    navigate,
  }),
  createNavigationAction('settings', 'Settings', '/settings', {
    icon: SettingsIcon,
    navigate,
  }),
]
```

### Quick Actions with Pre-filled Search

```tsx
// Open spotlight with "create" search term
<button onClick={() => open({ searchString: 'create' })}>Quick Create</button>
```

### Dynamic Actions

```tsx
// Generate actions from data
const projectActions = projects.map(project => ({
  id: \`open-\${project.id}\`,
  label: \`Open \${project.name}\`,
  searchTerms: ["project", project.name.toLowerCase()],
  group: "Projects",
  onSelect: () => openProject(project.id)
}))
```

## File Structure

```
lib/spotlight/
├── index.ts                 # Main exports
├── types/
│   └── index.ts            # TypeScript interfaces
├── hooks/
│   └── useSpotlight.tsx    # Main hook and provider
├── components/
│   ├── Spotlight.tsx       # Main spotlight component
│   └── SpotlightTrigger.tsx # Trigger button component
├── utils/
│   └── helpers.ts          # Utility functions
└── examples/
    └── config-examples.tsx # Usage examples
```

## Migration

If you're migrating from the old spotlight system:

1. Update imports:

   ```tsx
   // Before
   import { useSpotlight } from '@web/hooks/useSpotlight'

   // After
   import { useSpotlight } from '@web/lib/spotlight'
   ```

2. Update open() calls:

   ```tsx
   // Before
   open('create')

   // After
   open({ searchString: 'create' })
   ```

The new system is backward compatible - `open()` without parameters still works!
