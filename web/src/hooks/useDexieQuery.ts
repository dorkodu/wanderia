
import { QueryKey, useQuery, useQueryClient, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { liveQuery, Observable } from 'dexie'
import { useEffect } from 'react'

/**
 * Custom hook to integrate Dexie's live queries with TanStack Query.
 *
 * @template TData The expected type of the data returned by the query.
 * @template TError The expected type of the error.
 *
 * @param {QueryKey} queryKey A unique key for the query, used by TanStack Query for caching and invalidation.
 * @param {() => Promise<TData> | TData} queryFn An async function that fetches data from Dexie. This is the core Dexie query logic.
 * @param {Omit<UseQueryOptions<TData, TError, TData, QueryKey>, 'queryKey' | 'queryFn'>} [options] Optional TanStack Query options.
 *
 * @returns {UseQueryResult<TData, TError>} The result object from TanStack Query's useQuery, including data, isLoading, isError, etc.
 */
export function useDexieQuery<
  TData = unknown,
  TError = Error,
>(
  queryKey: QueryKey,
  queryFn: () => Promise<TData> | TData,
  options?: Omit<UseQueryOptions<TData, TError, TData, QueryKey>, 'queryKey' | 'queryFn'>
): UseQueryResult<TData, TError> {

  const queryClient = useQueryClient()

  // Use TanStack Query to fetch and manage the state of the Dexie query
  const queryResult = useQuery<TData, TError, TData, QueryKey>({
    queryKey: queryKey,
    queryFn: queryFn,
    ...options,
    // It's often beneficial to keep data longer with live queries,
    // as invalidation will handle updates. Adjust staleTime/gcTime as needed.
    staleTime: options?.staleTime ?? Infinity, // Default to infinite staleTime
    gcTime: options?.gcTime ?? 1000 * 60 * 60 * 1, // Default to 1 hour garbage collection
  })

  // Effect to subscribe to Dexie's liveQuery and invalidate TanStack Query on changes
  useEffect(() => {
    console.log(`Setting up Dexie live query subscription for key:`, queryKey)

    // Create a Dexie live query observable based on the *same logic* as queryFn.
    // It's crucial that this observes the same data the queryFn fetches.
    const observable: Observable<TData> = liveQuery(queryFn)

    // Subscribe to the observable
    const subscription = observable.subscribe({
      next: (data) => {
        // When Dexie detects a change, invalidate the query in TanStack Query.
        // This will trigger a refetch using the original queryFn.
        // Alternatively, you could use queryClient.setQueryData(queryKey, data)
        // if you want to bypass the refetch and directly update the cache.
        // Invalidation is generally safer as it re-runs the exact queryFn.
        console.log(`Dexie change detected for key: ${JSON.stringify(queryKey)}. Invalidating.`)
        queryClient.invalidateQueries({ queryKey: queryKey })
      },
      error: (err) => {
        // Optional: Handle errors from the live query subscription itself
        console.error(`Dexie live query subscription error for key: ${JSON.stringify(queryKey)}`, err)
        // You might want to update the query state to error here as well
        // queryClient.setQueryData(queryKey, (oldData) => oldData); // Example: trigger error state update
        queryClient.invalidateQueries({ queryKey: queryKey }) // Invalidate to potentially show error in useQuery
      }
    })

    // Cleanup function: unsubscribe when the component unmounts or queryKey changes
    return () => {
      console.log(`Tearing down Dexie live query subscription for key:`, queryKey)
      subscription.unsubscribe()
    }

    // Re-run the effect if the queryClient or queryKey changes
    // Note: queryFn is often defined inline, causing re-renders.
    // Consider memoizing queryFn with useCallback if it's complex or defined in the component.
  }, [queryClient, queryKey, queryFn]) // Include queryFn in dependencies if it's not stable

  // Return the result from TanStack Query's useQuery
  return queryResult
}
