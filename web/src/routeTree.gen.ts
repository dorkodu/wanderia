/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as WwwImport } from './routes/_www'
import { Route as AppImport } from './routes/_app'
import { Route as WwwIndexImport } from './routes/_www/index'
import { Route as WwwLoginImport } from './routes/_www/login'
import { Route as WwwLegalImport } from './routes/_www/legal'
import { Route as WwwErrorImport } from './routes/_www/error'
import { Route as WwwCreateAccountImport } from './routes/_www/create-account'
import { Route as WwwAboutImport } from './routes/_www/about'
import { Route as Www404Import } from './routes/_www/404'
import { Route as AppSocialImport } from './routes/_app/social'
import { Route as AppPremiumImport } from './routes/_app/premium'
import { Route as AppMeImport } from './routes/_app/me'
import { Route as AppHomeImport } from './routes/_app/home'
import { Route as WwwLegalIndexImport } from './routes/_www/legal/index'
import { Route as WwwHelpIndexImport } from './routes/_www/help/index'
import { Route as AppSettingsIndexImport } from './routes/_app/settings/index'
import { Route as AppMarketIndexImport } from './routes/_app/market/index'
import { Route as AppCommunityIndexImport } from './routes/_app/community/index'
import { Route as WwwLegalTermsOfServiceImport } from './routes/_www/legal/terms-of-service'
import { Route as WwwLegalRefundPolicyImport } from './routes/_www/legal/refund-policy'
import { Route as WwwLegalPrivacyPolicyImport } from './routes/_www/legal/privacy-policy'
import { Route as WwwLegalCookiePolicyImport } from './routes/_www/legal/cookie-policy'
import { Route as WwwLegalCompanyImport } from './routes/_www/legal/company'
import { Route as WwwLegalCommunityRulesImport } from './routes/_www/legal/community-rules'
import { Route as AppProfileEditImport } from './routes/_app/profile/edit'
import { Route as AppProfileUsernameImport } from './routes/_app/profile/$username'
import { Route as AppCommunityIdImport } from './routes/_app/community/$id'

// Create/Update Routes

const WwwRoute = WwwImport.update({
  id: '/_www',
  getParentRoute: () => rootRoute,
} as any)

const AppRoute = AppImport.update({
  id: '/_app',
  getParentRoute: () => rootRoute,
} as any)

const WwwIndexRoute = WwwIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => WwwRoute,
} as any)

const WwwLoginRoute = WwwLoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => WwwRoute,
} as any)

const WwwLegalRoute = WwwLegalImport.update({
  id: '/legal',
  path: '/legal',
  getParentRoute: () => WwwRoute,
} as any)

const WwwErrorRoute = WwwErrorImport.update({
  id: '/error',
  path: '/error',
  getParentRoute: () => WwwRoute,
} as any)

const WwwCreateAccountRoute = WwwCreateAccountImport.update({
  id: '/create-account',
  path: '/create-account',
  getParentRoute: () => WwwRoute,
} as any)

const WwwAboutRoute = WwwAboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => WwwRoute,
} as any)

const Www404Route = Www404Import.update({
  id: '/404',
  path: '/404',
  getParentRoute: () => WwwRoute,
} as any)

const AppSocialRoute = AppSocialImport.update({
  id: '/social',
  path: '/social',
  getParentRoute: () => AppRoute,
} as any)

const AppPremiumRoute = AppPremiumImport.update({
  id: '/premium',
  path: '/premium',
  getParentRoute: () => AppRoute,
} as any)

const AppMeRoute = AppMeImport.update({
  id: '/me',
  path: '/me',
  getParentRoute: () => AppRoute,
} as any)

const AppHomeRoute = AppHomeImport.update({
  id: '/home',
  path: '/home',
  getParentRoute: () => AppRoute,
} as any)

const WwwLegalIndexRoute = WwwLegalIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => WwwLegalRoute,
} as any)

const WwwHelpIndexRoute = WwwHelpIndexImport.update({
  id: '/help/',
  path: '/help/',
  getParentRoute: () => WwwRoute,
} as any)

const AppSettingsIndexRoute = AppSettingsIndexImport.update({
  id: '/settings/',
  path: '/settings/',
  getParentRoute: () => AppRoute,
} as any)

const AppMarketIndexRoute = AppMarketIndexImport.update({
  id: '/market/',
  path: '/market/',
  getParentRoute: () => AppRoute,
} as any)

const AppCommunityIndexRoute = AppCommunityIndexImport.update({
  id: '/community/',
  path: '/community/',
  getParentRoute: () => AppRoute,
} as any)

const WwwLegalTermsOfServiceRoute = WwwLegalTermsOfServiceImport.update({
  id: '/terms-of-service',
  path: '/terms-of-service',
  getParentRoute: () => WwwLegalRoute,
} as any)

const WwwLegalRefundPolicyRoute = WwwLegalRefundPolicyImport.update({
  id: '/refund-policy',
  path: '/refund-policy',
  getParentRoute: () => WwwLegalRoute,
} as any)

const WwwLegalPrivacyPolicyRoute = WwwLegalPrivacyPolicyImport.update({
  id: '/privacy-policy',
  path: '/privacy-policy',
  getParentRoute: () => WwwLegalRoute,
} as any)

const WwwLegalCookiePolicyRoute = WwwLegalCookiePolicyImport.update({
  id: '/cookie-policy',
  path: '/cookie-policy',
  getParentRoute: () => WwwLegalRoute,
} as any)

const WwwLegalCompanyRoute = WwwLegalCompanyImport.update({
  id: '/company',
  path: '/company',
  getParentRoute: () => WwwLegalRoute,
} as any)

const WwwLegalCommunityRulesRoute = WwwLegalCommunityRulesImport.update({
  id: '/community-rules',
  path: '/community-rules',
  getParentRoute: () => WwwLegalRoute,
} as any)

const AppProfileEditRoute = AppProfileEditImport.update({
  id: '/profile/edit',
  path: '/profile/edit',
  getParentRoute: () => AppRoute,
} as any)

const AppProfileUsernameRoute = AppProfileUsernameImport.update({
  id: '/profile/$username',
  path: '/profile/$username',
  getParentRoute: () => AppRoute,
} as any)

const AppCommunityIdRoute = AppCommunityIdImport.update({
  id: '/community/$id',
  path: '/community/$id',
  getParentRoute: () => AppRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_app': {
      id: '/_app'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AppImport
      parentRoute: typeof rootRoute
    }
    '/_www': {
      id: '/_www'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof WwwImport
      parentRoute: typeof rootRoute
    }
    '/_app/home': {
      id: '/_app/home'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof AppHomeImport
      parentRoute: typeof AppImport
    }
    '/_app/me': {
      id: '/_app/me'
      path: '/me'
      fullPath: '/me'
      preLoaderRoute: typeof AppMeImport
      parentRoute: typeof AppImport
    }
    '/_app/premium': {
      id: '/_app/premium'
      path: '/premium'
      fullPath: '/premium'
      preLoaderRoute: typeof AppPremiumImport
      parentRoute: typeof AppImport
    }
    '/_app/social': {
      id: '/_app/social'
      path: '/social'
      fullPath: '/social'
      preLoaderRoute: typeof AppSocialImport
      parentRoute: typeof AppImport
    }
    '/_www/404': {
      id: '/_www/404'
      path: '/404'
      fullPath: '/404'
      preLoaderRoute: typeof Www404Import
      parentRoute: typeof WwwImport
    }
    '/_www/about': {
      id: '/_www/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof WwwAboutImport
      parentRoute: typeof WwwImport
    }
    '/_www/create-account': {
      id: '/_www/create-account'
      path: '/create-account'
      fullPath: '/create-account'
      preLoaderRoute: typeof WwwCreateAccountImport
      parentRoute: typeof WwwImport
    }
    '/_www/error': {
      id: '/_www/error'
      path: '/error'
      fullPath: '/error'
      preLoaderRoute: typeof WwwErrorImport
      parentRoute: typeof WwwImport
    }
    '/_www/legal': {
      id: '/_www/legal'
      path: '/legal'
      fullPath: '/legal'
      preLoaderRoute: typeof WwwLegalImport
      parentRoute: typeof WwwImport
    }
    '/_www/login': {
      id: '/_www/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof WwwLoginImport
      parentRoute: typeof WwwImport
    }
    '/_www/': {
      id: '/_www/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof WwwIndexImport
      parentRoute: typeof WwwImport
    }
    '/_app/community/$id': {
      id: '/_app/community/$id'
      path: '/community/$id'
      fullPath: '/community/$id'
      preLoaderRoute: typeof AppCommunityIdImport
      parentRoute: typeof AppImport
    }
    '/_app/profile/$username': {
      id: '/_app/profile/$username'
      path: '/profile/$username'
      fullPath: '/profile/$username'
      preLoaderRoute: typeof AppProfileUsernameImport
      parentRoute: typeof AppImport
    }
    '/_app/profile/edit': {
      id: '/_app/profile/edit'
      path: '/profile/edit'
      fullPath: '/profile/edit'
      preLoaderRoute: typeof AppProfileEditImport
      parentRoute: typeof AppImport
    }
    '/_www/legal/community-rules': {
      id: '/_www/legal/community-rules'
      path: '/community-rules'
      fullPath: '/legal/community-rules'
      preLoaderRoute: typeof WwwLegalCommunityRulesImport
      parentRoute: typeof WwwLegalImport
    }
    '/_www/legal/company': {
      id: '/_www/legal/company'
      path: '/company'
      fullPath: '/legal/company'
      preLoaderRoute: typeof WwwLegalCompanyImport
      parentRoute: typeof WwwLegalImport
    }
    '/_www/legal/cookie-policy': {
      id: '/_www/legal/cookie-policy'
      path: '/cookie-policy'
      fullPath: '/legal/cookie-policy'
      preLoaderRoute: typeof WwwLegalCookiePolicyImport
      parentRoute: typeof WwwLegalImport
    }
    '/_www/legal/privacy-policy': {
      id: '/_www/legal/privacy-policy'
      path: '/privacy-policy'
      fullPath: '/legal/privacy-policy'
      preLoaderRoute: typeof WwwLegalPrivacyPolicyImport
      parentRoute: typeof WwwLegalImport
    }
    '/_www/legal/refund-policy': {
      id: '/_www/legal/refund-policy'
      path: '/refund-policy'
      fullPath: '/legal/refund-policy'
      preLoaderRoute: typeof WwwLegalRefundPolicyImport
      parentRoute: typeof WwwLegalImport
    }
    '/_www/legal/terms-of-service': {
      id: '/_www/legal/terms-of-service'
      path: '/terms-of-service'
      fullPath: '/legal/terms-of-service'
      preLoaderRoute: typeof WwwLegalTermsOfServiceImport
      parentRoute: typeof WwwLegalImport
    }
    '/_app/community/': {
      id: '/_app/community/'
      path: '/community'
      fullPath: '/community'
      preLoaderRoute: typeof AppCommunityIndexImport
      parentRoute: typeof AppImport
    }
    '/_app/market/': {
      id: '/_app/market/'
      path: '/market'
      fullPath: '/market'
      preLoaderRoute: typeof AppMarketIndexImport
      parentRoute: typeof AppImport
    }
    '/_app/settings/': {
      id: '/_app/settings/'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof AppSettingsIndexImport
      parentRoute: typeof AppImport
    }
    '/_www/help/': {
      id: '/_www/help/'
      path: '/help'
      fullPath: '/help'
      preLoaderRoute: typeof WwwHelpIndexImport
      parentRoute: typeof WwwImport
    }
    '/_www/legal/': {
      id: '/_www/legal/'
      path: '/'
      fullPath: '/legal/'
      preLoaderRoute: typeof WwwLegalIndexImport
      parentRoute: typeof WwwLegalImport
    }
  }
}

// Create and export the route tree

interface AppRouteChildren {
  AppHomeRoute: typeof AppHomeRoute
  AppMeRoute: typeof AppMeRoute
  AppPremiumRoute: typeof AppPremiumRoute
  AppSocialRoute: typeof AppSocialRoute
  AppCommunityIdRoute: typeof AppCommunityIdRoute
  AppProfileUsernameRoute: typeof AppProfileUsernameRoute
  AppProfileEditRoute: typeof AppProfileEditRoute
  AppCommunityIndexRoute: typeof AppCommunityIndexRoute
  AppMarketIndexRoute: typeof AppMarketIndexRoute
  AppSettingsIndexRoute: typeof AppSettingsIndexRoute
}

const AppRouteChildren: AppRouteChildren = {
  AppHomeRoute: AppHomeRoute,
  AppMeRoute: AppMeRoute,
  AppPremiumRoute: AppPremiumRoute,
  AppSocialRoute: AppSocialRoute,
  AppCommunityIdRoute: AppCommunityIdRoute,
  AppProfileUsernameRoute: AppProfileUsernameRoute,
  AppProfileEditRoute: AppProfileEditRoute,
  AppCommunityIndexRoute: AppCommunityIndexRoute,
  AppMarketIndexRoute: AppMarketIndexRoute,
  AppSettingsIndexRoute: AppSettingsIndexRoute,
}

const AppRouteWithChildren = AppRoute._addFileChildren(AppRouteChildren)

interface WwwLegalRouteChildren {
  WwwLegalCommunityRulesRoute: typeof WwwLegalCommunityRulesRoute
  WwwLegalCompanyRoute: typeof WwwLegalCompanyRoute
  WwwLegalCookiePolicyRoute: typeof WwwLegalCookiePolicyRoute
  WwwLegalPrivacyPolicyRoute: typeof WwwLegalPrivacyPolicyRoute
  WwwLegalRefundPolicyRoute: typeof WwwLegalRefundPolicyRoute
  WwwLegalTermsOfServiceRoute: typeof WwwLegalTermsOfServiceRoute
  WwwLegalIndexRoute: typeof WwwLegalIndexRoute
}

const WwwLegalRouteChildren: WwwLegalRouteChildren = {
  WwwLegalCommunityRulesRoute: WwwLegalCommunityRulesRoute,
  WwwLegalCompanyRoute: WwwLegalCompanyRoute,
  WwwLegalCookiePolicyRoute: WwwLegalCookiePolicyRoute,
  WwwLegalPrivacyPolicyRoute: WwwLegalPrivacyPolicyRoute,
  WwwLegalRefundPolicyRoute: WwwLegalRefundPolicyRoute,
  WwwLegalTermsOfServiceRoute: WwwLegalTermsOfServiceRoute,
  WwwLegalIndexRoute: WwwLegalIndexRoute,
}

const WwwLegalRouteWithChildren = WwwLegalRoute._addFileChildren(
  WwwLegalRouteChildren,
)

interface WwwRouteChildren {
  Www404Route: typeof Www404Route
  WwwAboutRoute: typeof WwwAboutRoute
  WwwCreateAccountRoute: typeof WwwCreateAccountRoute
  WwwErrorRoute: typeof WwwErrorRoute
  WwwLegalRoute: typeof WwwLegalRouteWithChildren
  WwwLoginRoute: typeof WwwLoginRoute
  WwwIndexRoute: typeof WwwIndexRoute
  WwwHelpIndexRoute: typeof WwwHelpIndexRoute
}

const WwwRouteChildren: WwwRouteChildren = {
  Www404Route: Www404Route,
  WwwAboutRoute: WwwAboutRoute,
  WwwCreateAccountRoute: WwwCreateAccountRoute,
  WwwErrorRoute: WwwErrorRoute,
  WwwLegalRoute: WwwLegalRouteWithChildren,
  WwwLoginRoute: WwwLoginRoute,
  WwwIndexRoute: WwwIndexRoute,
  WwwHelpIndexRoute: WwwHelpIndexRoute,
}

const WwwRouteWithChildren = WwwRoute._addFileChildren(WwwRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof WwwRouteWithChildren
  '/home': typeof AppHomeRoute
  '/me': typeof AppMeRoute
  '/premium': typeof AppPremiumRoute
  '/social': typeof AppSocialRoute
  '/404': typeof Www404Route
  '/about': typeof WwwAboutRoute
  '/create-account': typeof WwwCreateAccountRoute
  '/error': typeof WwwErrorRoute
  '/legal': typeof WwwLegalRouteWithChildren
  '/login': typeof WwwLoginRoute
  '/': typeof WwwIndexRoute
  '/community/$id': typeof AppCommunityIdRoute
  '/profile/$username': typeof AppProfileUsernameRoute
  '/profile/edit': typeof AppProfileEditRoute
  '/legal/community-rules': typeof WwwLegalCommunityRulesRoute
  '/legal/company': typeof WwwLegalCompanyRoute
  '/legal/cookie-policy': typeof WwwLegalCookiePolicyRoute
  '/legal/privacy-policy': typeof WwwLegalPrivacyPolicyRoute
  '/legal/refund-policy': typeof WwwLegalRefundPolicyRoute
  '/legal/terms-of-service': typeof WwwLegalTermsOfServiceRoute
  '/community': typeof AppCommunityIndexRoute
  '/market': typeof AppMarketIndexRoute
  '/settings': typeof AppSettingsIndexRoute
  '/help': typeof WwwHelpIndexRoute
  '/legal/': typeof WwwLegalIndexRoute
}

export interface FileRoutesByTo {
  '': typeof AppRouteWithChildren
  '/home': typeof AppHomeRoute
  '/me': typeof AppMeRoute
  '/premium': typeof AppPremiumRoute
  '/social': typeof AppSocialRoute
  '/404': typeof Www404Route
  '/about': typeof WwwAboutRoute
  '/create-account': typeof WwwCreateAccountRoute
  '/error': typeof WwwErrorRoute
  '/login': typeof WwwLoginRoute
  '/': typeof WwwIndexRoute
  '/community/$id': typeof AppCommunityIdRoute
  '/profile/$username': typeof AppProfileUsernameRoute
  '/profile/edit': typeof AppProfileEditRoute
  '/legal/community-rules': typeof WwwLegalCommunityRulesRoute
  '/legal/company': typeof WwwLegalCompanyRoute
  '/legal/cookie-policy': typeof WwwLegalCookiePolicyRoute
  '/legal/privacy-policy': typeof WwwLegalPrivacyPolicyRoute
  '/legal/refund-policy': typeof WwwLegalRefundPolicyRoute
  '/legal/terms-of-service': typeof WwwLegalTermsOfServiceRoute
  '/community': typeof AppCommunityIndexRoute
  '/market': typeof AppMarketIndexRoute
  '/settings': typeof AppSettingsIndexRoute
  '/help': typeof WwwHelpIndexRoute
  '/legal': typeof WwwLegalIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_app': typeof AppRouteWithChildren
  '/_www': typeof WwwRouteWithChildren
  '/_app/home': typeof AppHomeRoute
  '/_app/me': typeof AppMeRoute
  '/_app/premium': typeof AppPremiumRoute
  '/_app/social': typeof AppSocialRoute
  '/_www/404': typeof Www404Route
  '/_www/about': typeof WwwAboutRoute
  '/_www/create-account': typeof WwwCreateAccountRoute
  '/_www/error': typeof WwwErrorRoute
  '/_www/legal': typeof WwwLegalRouteWithChildren
  '/_www/login': typeof WwwLoginRoute
  '/_www/': typeof WwwIndexRoute
  '/_app/community/$id': typeof AppCommunityIdRoute
  '/_app/profile/$username': typeof AppProfileUsernameRoute
  '/_app/profile/edit': typeof AppProfileEditRoute
  '/_www/legal/community-rules': typeof WwwLegalCommunityRulesRoute
  '/_www/legal/company': typeof WwwLegalCompanyRoute
  '/_www/legal/cookie-policy': typeof WwwLegalCookiePolicyRoute
  '/_www/legal/privacy-policy': typeof WwwLegalPrivacyPolicyRoute
  '/_www/legal/refund-policy': typeof WwwLegalRefundPolicyRoute
  '/_www/legal/terms-of-service': typeof WwwLegalTermsOfServiceRoute
  '/_app/community/': typeof AppCommunityIndexRoute
  '/_app/market/': typeof AppMarketIndexRoute
  '/_app/settings/': typeof AppSettingsIndexRoute
  '/_www/help/': typeof WwwHelpIndexRoute
  '/_www/legal/': typeof WwwLegalIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/home'
    | '/me'
    | '/premium'
    | '/social'
    | '/404'
    | '/about'
    | '/create-account'
    | '/error'
    | '/legal'
    | '/login'
    | '/'
    | '/community/$id'
    | '/profile/$username'
    | '/profile/edit'
    | '/legal/community-rules'
    | '/legal/company'
    | '/legal/cookie-policy'
    | '/legal/privacy-policy'
    | '/legal/refund-policy'
    | '/legal/terms-of-service'
    | '/community'
    | '/market'
    | '/settings'
    | '/help'
    | '/legal/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | ''
    | '/home'
    | '/me'
    | '/premium'
    | '/social'
    | '/404'
    | '/about'
    | '/create-account'
    | '/error'
    | '/login'
    | '/'
    | '/community/$id'
    | '/profile/$username'
    | '/profile/edit'
    | '/legal/community-rules'
    | '/legal/company'
    | '/legal/cookie-policy'
    | '/legal/privacy-policy'
    | '/legal/refund-policy'
    | '/legal/terms-of-service'
    | '/community'
    | '/market'
    | '/settings'
    | '/help'
    | '/legal'
  id:
    | '__root__'
    | '/_app'
    | '/_www'
    | '/_app/home'
    | '/_app/me'
    | '/_app/premium'
    | '/_app/social'
    | '/_www/404'
    | '/_www/about'
    | '/_www/create-account'
    | '/_www/error'
    | '/_www/legal'
    | '/_www/login'
    | '/_www/'
    | '/_app/community/$id'
    | '/_app/profile/$username'
    | '/_app/profile/edit'
    | '/_www/legal/community-rules'
    | '/_www/legal/company'
    | '/_www/legal/cookie-policy'
    | '/_www/legal/privacy-policy'
    | '/_www/legal/refund-policy'
    | '/_www/legal/terms-of-service'
    | '/_app/community/'
    | '/_app/market/'
    | '/_app/settings/'
    | '/_www/help/'
    | '/_www/legal/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AppRoute: typeof AppRouteWithChildren
  WwwRoute: typeof WwwRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  AppRoute: AppRouteWithChildren,
  WwwRoute: WwwRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_app",
        "/_www"
      ]
    },
    "/_app": {
      "filePath": "_app.tsx",
      "children": [
        "/_app/home",
        "/_app/me",
        "/_app/premium",
        "/_app/social",
        "/_app/community/$id",
        "/_app/profile/$username",
        "/_app/profile/edit",
        "/_app/community/",
        "/_app/market/",
        "/_app/settings/"
      ]
    },
    "/_www": {
      "filePath": "_www.tsx",
      "children": [
        "/_www/404",
        "/_www/about",
        "/_www/create-account",
        "/_www/error",
        "/_www/legal",
        "/_www/login",
        "/_www/",
        "/_www/help/"
      ]
    },
    "/_app/home": {
      "filePath": "_app/home.tsx",
      "parent": "/_app"
    },
    "/_app/me": {
      "filePath": "_app/me.tsx",
      "parent": "/_app"
    },
    "/_app/premium": {
      "filePath": "_app/premium.tsx",
      "parent": "/_app"
    },
    "/_app/social": {
      "filePath": "_app/social.tsx",
      "parent": "/_app"
    },
    "/_www/404": {
      "filePath": "_www/404.tsx",
      "parent": "/_www"
    },
    "/_www/about": {
      "filePath": "_www/about.tsx",
      "parent": "/_www"
    },
    "/_www/create-account": {
      "filePath": "_www/create-account.tsx",
      "parent": "/_www"
    },
    "/_www/error": {
      "filePath": "_www/error.tsx",
      "parent": "/_www"
    },
    "/_www/legal": {
      "filePath": "_www/legal.tsx",
      "parent": "/_www",
      "children": [
        "/_www/legal/community-rules",
        "/_www/legal/company",
        "/_www/legal/cookie-policy",
        "/_www/legal/privacy-policy",
        "/_www/legal/refund-policy",
        "/_www/legal/terms-of-service",
        "/_www/legal/"
      ]
    },
    "/_www/login": {
      "filePath": "_www/login.tsx",
      "parent": "/_www"
    },
    "/_www/": {
      "filePath": "_www/index.tsx",
      "parent": "/_www"
    },
    "/_app/community/$id": {
      "filePath": "_app/community/$id.tsx",
      "parent": "/_app"
    },
    "/_app/profile/$username": {
      "filePath": "_app/profile/$username.tsx",
      "parent": "/_app"
    },
    "/_app/profile/edit": {
      "filePath": "_app/profile/edit.tsx",
      "parent": "/_app"
    },
    "/_www/legal/community-rules": {
      "filePath": "_www/legal/community-rules.tsx",
      "parent": "/_www/legal"
    },
    "/_www/legal/company": {
      "filePath": "_www/legal/company.tsx",
      "parent": "/_www/legal"
    },
    "/_www/legal/cookie-policy": {
      "filePath": "_www/legal/cookie-policy.tsx",
      "parent": "/_www/legal"
    },
    "/_www/legal/privacy-policy": {
      "filePath": "_www/legal/privacy-policy.tsx",
      "parent": "/_www/legal"
    },
    "/_www/legal/refund-policy": {
      "filePath": "_www/legal/refund-policy.tsx",
      "parent": "/_www/legal"
    },
    "/_www/legal/terms-of-service": {
      "filePath": "_www/legal/terms-of-service.tsx",
      "parent": "/_www/legal"
    },
    "/_app/community/": {
      "filePath": "_app/community/index.tsx",
      "parent": "/_app"
    },
    "/_app/market/": {
      "filePath": "_app/market/index.tsx",
      "parent": "/_app"
    },
    "/_app/settings/": {
      "filePath": "_app/settings/index.tsx",
      "parent": "/_app"
    },
    "/_www/help/": {
      "filePath": "_www/help/index.tsx",
      "parent": "/_www"
    },
    "/_www/legal/": {
      "filePath": "_www/legal/index.tsx",
      "parent": "/_www/legal"
    }
  }
}
ROUTE_MANIFEST_END */
