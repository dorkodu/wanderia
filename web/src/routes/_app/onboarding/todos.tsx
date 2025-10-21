import { createFileRoute } from '@tanstack/react-router'
import { OnboardingTodos } from '@web/components/onboarding/todos'

export const Route = createFileRoute('/_app/onboarding/todos')({
  component: OnboardingTodosPage,
})

function OnboardingTodosPage() {
  return <OnboardingTodos />
}
