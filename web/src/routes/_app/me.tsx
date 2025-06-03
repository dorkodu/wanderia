import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/me')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_app/me"!</div>
}
