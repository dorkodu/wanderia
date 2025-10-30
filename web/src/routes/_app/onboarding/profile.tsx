import { createFileRoute } from '@tanstack/react-router'
import { OnboardingProfile } from '@web/components/onboarding/profile'

export const Route = createFileRoute('/_app/onboarding/profile')({
  component: OnboardingProfilePage,
})

function OnboardingProfilePage() {
  return <OnboardingProfile />
}
