import OverlayLoader from '@/shared/components/loaders/OverlayLoader'
import ApplicationError from '@/shared/components/misc/ApplicationError'
import { modals } from '@/shared/components/modals'
import { onError, onReset } from '@/shared/lib/errors'
import { queryClient } from "@/shared/lib/react-query"
import { trpc, trpcClient } from "@/shared/lib/trpc"
import { useAppStore } from '@/shared/stores/appStore'
import { cssVariablesResolver, theme } from '@/styles/theme'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FlagsProvider } from 'flagged'
import { useEffect, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import { trekie } from './shared/lib/trekie'

function App() {
  const loading = useAppStore($ => $.loading)
  const premium = useAppStore($ => $.accountTier === 'PREMIUM')

  useEffect(() => {
    // TODO: Perform authorization logic by sending a request to the API
    if (!loading.auth) return
    // auth.login()
  }, [loading.auth])

  // trekie hooks
  trekie.useDailyRefresh()

  return (
    <ErrorBoundary FallbackComponent={ApplicationError} onError={onError} onReset={onReset}>
      <FlagsProvider features={{ beta: true, premium }}>
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
          <QueryClientProvider client={queryClient}>
            <ColorSchemeScript defaultColorScheme="light" />
            <MantineProvider theme={theme} defaultColorScheme="light" cssVariablesResolver={cssVariablesResolver}>
              <ModalsProvider
                modals={modals}
                modalProps={{ centered: true, radius: 'lg' }}
              >
                <Notifications limit={3} position="top-center" zIndex={99999} />
                {loading.auth && <OverlayLoader full={true} />}
                {!loading.auth && <Outlet />}
              </ModalsProvider>
            </MantineProvider>
            <ScrollRestoration />
          </QueryClientProvider>
        </trpc.Provider>
      </FlagsProvider>
    </ErrorBoundary>
  )
}

export default App
