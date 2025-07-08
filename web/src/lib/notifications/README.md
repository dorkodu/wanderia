# Notifications System

A Mantine-like notifications system built with Sonner and shadcn/ui components.

## Setup

1. **Add the Toaster to your app root** (usually in `main.tsx` or your root component):

```tsx
import { Toaster } from '@web/components/ui/sonner'

function App() {
  return (
    <div>
      {/* Your app content */}
      <Toaster />
    </div>
  )
}
```

## Usage

### Basic Import

```tsx
import { notifications } from '@web/lib/notifications'
```

### Quick Methods

```tsx
// Success notification
notifications.success('Operation completed!')

// Error notification
notifications.error('Something went wrong')
notifications.error('Custom Title', 'Custom message')

// Warning notification
notifications.warning('This action cannot be undone')

// Info notification
notifications.info('New update available')

// Loading notification
const loadingId = notifications.loading('Processing...')
```

### Advanced Usage

```tsx
// Custom notification
const id = notifications.show({
  title: 'Custom Notification',
  message: 'With all options',
  color: 'blue', // "blue" | "green" | "red" | "yellow" | "gray"
  icon: CustomIcon, // Lucide icon or React component
  autoClose: 5000, // milliseconds, or false for no auto-close
  withCloseButton: true,
  position: 'top-right', // positioning
  onOpen: () => console.log('Opened'),
  onClose: () => console.log('Closed'),
  className: 'custom-toast-class',
})

// Update notification
notifications.update({
  id: loadingId,
  title: 'Complete!',
  message: 'Operation finished',
  color: 'green',
  autoClose: 3000,
})

// Hide specific notification
notifications.hide(id)

// Clear all notifications
notifications.clean()
```

## API Reference

### `notifications.show(data: NotificationData): string`

Shows a notification and returns its ID.

### `notifications.hide(id: string): void`

Hides a specific notification by ID.

### `notifications.clean(): void`

Clears all notifications.

### `notifications.update(data: UpdateNotificationData): void`

Updates an existing notification.

### Quick Methods

- `notifications.success(message, options?)`
- `notifications.error(title?, message?, options?)`
- `notifications.warning(message, options?)`
- `notifications.info(message, options?)`
- `notifications.loading(message, options?)`

## Types

```tsx
interface NotificationData {
  id?: string
  title?: string
  message?: string | ReactNode
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'gray'
  icon?: LucideIcon | ReactNode
  autoClose?: number | false
  withCloseButton?: boolean
  onClose?: () => void
  onOpen?: () => void
  position?:
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'top-center'
    | 'bottom-center'
  className?: string
}
```

## Migration from Mantine

This library provides the same API as Mantine's notifications system:

```tsx
// Mantine
import { notifications } from '@mantine/notifications'

// This library
import { notifications } from '@web/lib/notifications'

// Same usage!
notifications.show({ title: 'Hello', message: 'World' })
```
