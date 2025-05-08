import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_www/404')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_www/404"!</div>
}
