import { useNavigate } from '@tanstack/react-router'
import { Button } from '@web/components/ui/button'
import { Progress } from '@web/components/ui/progress'
import { useAuth } from '@web/lib/auth/provider'

export function OnboardingWelcome() {
  const navigate = useNavigate()
  const { user } = useAuth()

  const handleGetStarted = () => {
    navigate({ to: '/onboarding/profile' })
  }

  return (
    <div className="max-w-2xl mx-auto text-center space-y-8">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Step 1 of 4</span>
          <span>25%</span>
        </div>
        <Progress value={25} className="h-2" />
      </div>

      {/* Welcome Header */}
      <div className="space-y-4">
        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <span className="text-3xl">🎯</span>
        </div>
        <h1 className="text-4xl font-bold text-foreground">
          Welcome to Trekie, {user?.name?.split(' ')[0]}!
        </h1>
        <p className="text-xl text-muted-foreground">
          Let's get you set up for success. We'll help you create goals, track your progress,
          and build the habits that matter most to you.
        </p>
      </div>

      {/* Features Preview */}
      <div className="grid md:grid-cols-3 gap-6 py-8">
        <div className="space-y-3">
          <div className="w-12 h-12 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
            <span className="text-2xl">📊</span>
          </div>
          <h3 className="font-semibold">Track Progress</h3>
          <p className="text-sm text-muted-foreground">
            Monitor your goals with detailed analytics and insights
          </p>
        </div>

        <div className="space-y-3">
          <div className="w-12 h-12 mx-auto bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
            <span className="text-2xl">🏆</span>
          </div>
          <h3 className="font-semibold">Achieve Goals</h3>
          <p className="text-sm text-muted-foreground">
            Break down big goals into manageable daily actions
          </p>
        </div>

        <div className="space-y-3">
          <div className="w-12 h-12 mx-auto bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
            <span className="text-2xl">👥</span>
          </div>
          <h3 className="font-semibold">Stay Motivated</h3>
          <p className="text-sm text-muted-foreground">
            Connect with friends and celebrate your wins together
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="space-y-4">
        <Button
          onClick={handleGetStarted}
          size="lg"
          className="px-8 font-semibold"
        >
          Let's Get Started
        </Button>
        <p className="text-sm text-muted-foreground">
          This will only take 2-3 minutes
        </p>
      </div>
    </div>
  )
}
