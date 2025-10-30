import { createFileRoute } from '@tanstack/react-router'
import { HelpList } from '@web/components/help/HelpList'

export const Route = createFileRoute('/_www/help/')({
  component: HelpPage,
})

function HelpPage() {
  return <HelpList />
}
