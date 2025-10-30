import { createFileRoute } from '@tanstack/react-router'
import { OnboardingComplete } from '@web/components/onboarding/complete'

export const Route = createFileRoute('/_app/onboarding/complete')({
  component: OnboardingCompletePage,
})

function OnboardingCompletePage() {
  return <OnboardingComplete />
}
