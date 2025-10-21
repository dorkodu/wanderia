import * as React from 'react'
import type { HelpRegistry } from './types'

function P(props: React.PropsWithChildren) {
  return <p className="text-muted-foreground leading-relaxed">{props.children}</p>
}

export const helpRegistry: HelpRegistry = {
  categories: [
    { id: 'getting-started', title: 'Getting started', description: 'Quick intro to Trekie' },
    { id: 'features', title: 'Features', description: 'Core capabilities of the app' },
    { id: 'problems', title: 'Common problems', description: 'Fixes and troubleshooting' },
    { id: 'tips', title: 'Tips & tricks', description: 'Make the most of Trekie' },
  ],
  articles: [
    {
      slug: 'welcome-to-trekie',
      title: 'Welcome to Trekie',
      excerpt: 'A 2-minute overview of how Trekie works and what to try first.',
      category: 'getting-started',
      tags: ['overview', 'intro'],
      render: () => (
        <div className="space-y-3">
          <P>Welcome! Trekie is your gamified life dashboard and AI productivity companion.</P>
          <P>
            Start by creating a couple of commitments (recurring habits) and one goal. Check back
            daily to keep streaks alive, earn XP, and unlock achievements.
          </P>
          <ul className="list-disc ms-6 text-muted-foreground">
            <li>Create 1–3 simple habits you can do daily</li>
            <li>Add a goal you want to reach in 1–4 weeks</li>
            <li>Visit your Home each day and mark completions</li>
          </ul>
        </div>
      ),
    },
    {
      slug: 'troubleshooting-login',
      title: 'Trouble logging in',
      excerpt: 'Can’t log in? Here are quick checks to get you back in.',
      category: 'problems',
      tags: ['auth', 'account'],
      render: () => (
        <div className="space-y-3">
          <P>Common fixes:</P>
          <ol className="list-decimal ms-6 text-muted-foreground">
            <li>Ensure your email is correct and confirmed</li>
            <li>Try a password reset from the Forgot Password link</li>
            <li>Disable aggressive ad/script blockers for our domain</li>
            <li>Hard refresh the page (Ctrl/Cmd + Shift + R)</li>
          </ol>
          <P>
            Still stuck? Reach us from the footer links or open an issue on our GitHub.
          </P>
        </div>
      ),
    },
    {
      slug: 'power-tips',
      title: 'Power tips to stay consistent',
      excerpt: 'Tiny tactics that boost streaks and reduce friction.',
      category: 'tips',
      tags: ['motivation', 'habits'],
      render: () => (
        <div className="space-y-3">
          <ul className="list-disc ms-6 text-muted-foreground">
            <li>Keep habits extremely small at first (1–3 minutes)</li>
            <li>Use reminders and timebox sessions in your calendar</li>
            <li>Batch similar tasks, do them back-to-back</li>
            <li>Reward yourself after finishing a streak day</li>
          </ul>
        </div>
      ),
    },
  ],
}

export function getArticleBySlug(slug: string) {
  return helpRegistry.articles.find((a) => a.slug === slug)
}

export function getArticlesByCategory(id: HelpRegistry['categories'][number]['id']) {
  return helpRegistry.articles.filter((a) => a.category === id)
}
