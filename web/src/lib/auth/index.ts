import { useAppStore } from "@web/lib/stores/appStore"
import { useEffect } from "react"

export function useAuthCheck() {
  const loading = useAppStore($ => $.loading)

  useEffect(() => {
    // TODO: Perform authorization logic by sending a request to the API
    // TODO: check if any session exist locally, verify, validate from API
    if (!loading.auth) return
    // auth.login()
  }, [loading.auth])
}