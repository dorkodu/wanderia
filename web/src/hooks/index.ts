
import { useCanGoBack, useRouter } from "@tanstack/react-router"
import { useEffect, useState } from "react"

export function useDelay() {
  const [state, setState] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setState(false), 100)
    return () => clearTimeout(timeout)
  }, [])

  return state
}

export function useSafeGoBack() {
  const router = useRouter()
  const canGoBack = useCanGoBack()

  return () => {
    if (canGoBack) {
      router.history.back()
    } else {
      router.navigate({ to: "/" })
    }
  }
}