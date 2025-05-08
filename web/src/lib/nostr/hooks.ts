import { useNostr } from "@nostrify/react"
import { useQuery } from "@tanstack/react-query"

// You can use react-query or any other data fetching solution.
export function useFeed() {
  const { nostr } = useNostr()

  return useQuery({
    queryKey: ['feed'],
    queryFn: () => nostr.query([{ kinds: [1, 6], limit: 20 }]),
  })
}