import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_www/help/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_www/help/"!</div>
}
