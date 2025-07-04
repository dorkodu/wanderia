import { createFileRoute, Navigate } from '@tanstack/react-router'

export const Route = createFileRoute('/_www/legal/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Navigate to="/legal/terms-of-service" />
}
