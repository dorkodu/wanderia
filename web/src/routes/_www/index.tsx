import { createFileRoute } from '@tanstack/react-router'
import FAQ from '@web/components/www/faq'
import { Features, Punchline } from '@web/components/www/features'
import { Hero } from '@web/components/www/hero'

export const Route = createFileRoute('/_www/')({
  component: Page,
})

function Page() {
  return (
    <main>
      <Hero />
      <Punchline />
      <Features />
      <FAQ />
    </main>
  )
}
