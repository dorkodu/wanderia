import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_www/playbook')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_www/playbook"!</div>
}
