import { useNavigate } from '@tanstack/react-router'
import { useAuth } from '@web/lib/auth/provider'
import { useEffect } from 'react'

interface OnboardingGuardProps {
  children: React.ReactNode
}

export function OnboardingGuard({ children }: OnboardingGuardProps) {
  const { user, loading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    // Only check onboarding status if user is loaded and authenticated
    if (!loading && user) {
      // Check if user has completed onboarding
      // For now, we'll check if user has basic required fields
      // In a real app, you'd check the onboardingCompleted field from the database
  // TODO: Replace heuristic with real flag when backend adds onboardingCompleted
  const heuristicCompleted = Boolean(user.name && user.username);
  if (!heuristicCompleted) {
        navigate({ to: '/onboarding' })
      }
    }
  }, [user, loading, navigate])

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  // If user is not authenticated, let the auth guard handle it
  if (!user) {
    return <>{children}</>
  }

  // If user is authenticated and onboarding is complete, show the content
  return <>{children}</>
}
