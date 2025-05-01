import { useNostrFeed } from "@/lib/nostr"
import { useState } from "react"

function LoginForm({ onLogin }: { onLogin: (privkey: string) => void }) {
  const [privkey, setPrivkey] = useState("")
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        onLogin(privkey)
      }}
      className="mb-4"
    >
      <input
        type="password"
        placeholder="Enter your Nostr private key"
        value={privkey}
        onChange={e => setPrivkey(e.target.value)}
        className="border p-2 rounded w-80"
      />
      <button type="submit" className="ml-2 px-4 py-2 bg-blue-600 text-white rounded">Login</button>
    </form>
  )
}

export default function HomePage() {
  const [privkey, setPrivkey] = useState<string | null>(null)
  // In a real app, store privkey in context or global state
  const pubkey = privkey || undefined
  const events = useNostrFeed(pubkey)

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Nostr Feed</h1>
      {!privkey && <LoginForm onLogin={setPrivkey} />}
      <ul>
        {events.map((ev, i) => (
          <li key={ev.id || i} className="mb-4 p-3 border rounded bg-white text-black">
            <div className="font-mono text-xs text-gray-500 mb-1">{ev.pubkey}</div>
            <div>{ev.content}</div>
            <div className="text-xs text-gray-400 mt-1">{new Date(ev.created_at * 1000).toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
