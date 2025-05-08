import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_www/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
    <h1>Landing Page</h1>
  </>
}
