import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_www/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_www/login"!</div>
}
