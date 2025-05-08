import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_www/create-account')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_www/create-account"!</div>
}
