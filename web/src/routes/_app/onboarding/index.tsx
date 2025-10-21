import { createFileRoute } from '@tanstack/react-router'
import { OnboardingWelcome } from '@web/components/onboarding/welcome'

export const Route = createFileRoute('/_app/onboarding/')({
  component: OnboardingWelcomePage,
})

function OnboardingWelcomePage() {
  return <OnboardingWelcome />
}
