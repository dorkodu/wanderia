import { createFileRoute } from '@tanstack/react-router'
import { useFeed } from '@web/lib/nostr/hooks'

export const Route = createFileRoute('/_app/home')({
  component: RouteComponent,
})

function RouteComponent() {

  const { data: events, status } = useFeed()

  return <div>
    <h1>Home</h1>
    <h2>Feed</h2>

    <ul>
      {status === "success" &&
        events.map((event) =>
          <li key={`NOSTR_EVENT:${event.id}`}>{event.content}</li>
        )}
    </ul>
  </div >
}
