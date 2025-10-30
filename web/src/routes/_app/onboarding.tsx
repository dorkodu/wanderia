import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/onboarding')({
  component: OnboardingLayout,
})

function OnboardingLayout() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Outlet />
      </div>
    </div>
  )
}
