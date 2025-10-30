import * as React from 'react';
export type HelpCategoryId =
  | 'getting-started'
  | 'features'
  | 'problems'
  | 'tips';

export interface HelpArticle {
  slug: string
  title: string
  excerpt: string
  category: HelpCategoryId
  tags?: string[]
  // Keeping content as a render function keeps it framework-native and easy to extend later
  render: () => React.ReactElement
}

export interface HelpCategory {
  id: HelpCategoryId
  title: string
  description?: string
}

export interface HelpRegistry {
  categories: HelpCategory[]
  articles: HelpArticle[]
}
