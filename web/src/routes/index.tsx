// landing

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Welcome,
})

function Welcome() {
  return (
    <div>
      <h1>Welcome to the Nostr App</h1>
      <p>This is a simple Nostr client.</p>
    </div>
  )
}