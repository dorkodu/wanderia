import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_www/legal')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_www/legal"!</div>
}
