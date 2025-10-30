import { IconChevronRight } from '@tabler/icons-react'
import { Input } from '@web/components/ui/input'
import { Text, Title } from '@web/components/ui/typography'
import * as React from 'react'
import { helpRegistry } from './data'

export function HelpList() {
  const [q, setQ] = React.useState('')
  const results = React.useMemo(() => {
    const query = q.trim().toLowerCase()
    if (!query) return [] as typeof helpRegistry.articles
    return helpRegistry.articles.filter((a) =>
      a.title.toLowerCase().includes(query) ||
      a.excerpt.toLowerCase().includes(query) ||
      (a.tags?.some((t) => t.toLowerCase().includes(query)) ?? false)
    )
  }, [q])

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 space-y-10">
      <header className="text-center space-y-2">
        <Title order={1} className="text-3xl">Help Center</Title>
        <Text c="dimmed">Guides, fixes, and tips to get the most out of Trekie.</Text>
      </header>

      <div className="max-w-xl mx-auto">
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search help… (e.g., login, streaks, goals)"
        />
        {q && (
          <div className="mt-4 space-y-2">
            {results.length === 0 && (
              <Text c="dimmed">No matching articles yet.</Text>
            )}
            {results.map((a) => (
              <a
                key={a.slug}
                href={`/help/${a.slug}`}
                className="group block rounded-xl border p-4 hover:bg-accent/50 hover:shadow-sm transition-colors"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-medium">{a.title}</span>
                  <IconChevronRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                </div>
                <Text c="dimmed" size="sm" className="mt-1">{a.excerpt}</Text>
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {helpRegistry.categories.map((cat) => (
          <section key={cat.id} className="rounded-lg border p-4">
            <Title order={3} className="mb-1">{cat.title}</Title>
            {cat.description && <Text c="dimmed">{cat.description}</Text>}
            <ul className="mt-3 space-y-2">
              {helpRegistry.articles
                .filter((a) => a.category === cat.id)
                .slice(0, 3)
                .map((a) => (
                  <li key={a.slug} className="list-none">
                    <a
                      href={`/help/${a.slug}`}
                      className="group block rounded-xl border p-4 hover:bg-accent/50 hover:shadow-sm transition-colors"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-medium">{a.title}</span>
                        <IconChevronRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                      </div>
                      <Text size="sm" c="dimmed" className="mt-1">{a.excerpt}</Text>
                    </a>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>

      <footer className="text-center">
        <Text c="dimmed">Can’t find what you need? Reach out via our footer links.</Text>
      </footer>
    </div>
  )
}
