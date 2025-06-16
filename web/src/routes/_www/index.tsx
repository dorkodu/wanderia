import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@web/components/hero'
import { Features } from '@web/components/www/features'

export const Route = createFileRoute('/_www/')({
  component: Page,
})

function Page() {
  return (
    <main>
      <Hero />
      <Features />
    </main>
  )
}
