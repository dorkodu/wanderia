import { createFileRoute } from '@tanstack/react-router'
import { OnboardingGoals } from '@web/components/onboarding/goals'

export const Route = createFileRoute('/_app/onboarding/goals')({
  component: OnboardingGoalsPage,
})

function OnboardingGoalsPage() {
  return <OnboardingGoals />
}
