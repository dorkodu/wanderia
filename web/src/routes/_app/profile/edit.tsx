import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/profile/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_app/profile/edit"!</div>
}
