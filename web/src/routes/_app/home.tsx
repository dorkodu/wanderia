import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/home')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_app/home"!</div>
}
