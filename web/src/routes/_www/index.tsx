import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_www/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_www/"!</div>
}
