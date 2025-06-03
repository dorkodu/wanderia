import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/premium')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_app/premium"!</div>
}
