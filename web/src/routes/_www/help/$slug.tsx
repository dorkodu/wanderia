import { createFileRoute, notFound } from '@tanstack/react-router'
import { getArticleBySlug } from '@web/components/help/data'
import { Text, Title } from '@web/components/ui/typography'

export const Route = createFileRoute('/_www/help/$slug')({
  component: ArticlePage,
})

function ArticlePage() {
  const { slug } = Route.useParams()
  const article = getArticleBySlug(slug)
  if (!article) throw notFound()

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 space-y-4">
      <header>
        <Title order={1} className="text-3xl">{article.title}</Title>
        <Text c="dimmed">{article.excerpt}</Text>
      </header>
      <article className="prose dark:prose-invert max-w-none">
        {article.render()}
      </article>
    </main>
  )
}

