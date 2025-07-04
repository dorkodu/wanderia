import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/$username')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_app/$username"!</div>
}
