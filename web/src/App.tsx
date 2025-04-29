import { QueryClientProvider } from '@tanstack/react-query'
import OverlayLoader from '@web/shared/components/loaders/OverlayLoader'
import ApplicationError from '@web/shared/components/misc/ApplicationError'
import { onError, onReset } from '@web/shared/lib/errors'
import { queryClient } from "@web/shared/lib/react-query"
import { trekie, useDailyRefresh } from '@web/shared/lib/trekie'
import { useAppStore } from '@web/shared/stores/appStore'
import { FlagsProvider } from 'flagged'
import { ErrorBoundary } from 'react-error-boundary'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import { useAuthCheck } from './shared/lib/auth'

function App() {
  const loading = useAppStore($ => $.loading)

  useDailyRefresh() // trekie daily game refresh
  useAuthCheck() // check user session, do auth

  return (
    <ErrorBoundary FallbackComponent={ApplicationError} onError={onError} onReset={onReset}>
      <FlagsProvider features={{ beta: true, premium }}>
        <QueryClientProvider client={queryClient}>
          {loading.auth && <OverlayLoader full={true} />}
          {!loading.auth && <Outlet />}
          <ScrollRestoration />
        </QueryClientProvider>
      </FlagsProvider>
    </ErrorBoundary>
  )
}

export default App
