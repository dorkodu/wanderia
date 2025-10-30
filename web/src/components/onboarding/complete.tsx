import { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { Button } from '@web/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@web/components/ui/card'
import { Progress } from '@web/components/ui/progress'
import { CheckCircle, Sparkles } from 'lucide-react'
import { useAuth } from '@web/lib/auth/provider'

export function OnboardingComplete() {
  const navigate = useNavigate()
  const { user, completeOnboarding } = useAuth()
  const [loading, setLoading] = useState(false)

  const handleFinish = async () => {
    setLoading(true)
    
    try {
      // Mark onboarding as completed
      await completeOnboarding()
      
      // Redirect to home page
      navigate({ to: '/home' })
    } catch (error) {
      console.error('Failed to complete onboarding:', error)
      // Still redirect even if API call fails
      navigate({ to: '/home' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Step 4 of 4</span>
          <span>100%</span>
        </div>
        <Progress value={100} className="h-2" />
      </div>

      {/* Success Animation */}
      <div className="text-center space-y-6">
        <div className="relative mx-auto w-32 h-32">
          <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center animate-pulse">
            <CheckCircle className="w-16 h-16 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 animate-bounce">
            <Sparkles className="w-8 h-8 text-yellow-400" />
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl font-bold">You're all set!</h1>
          <p className="text-xl text-muted-foreground">
            Welcome to Trekie, {user?.name?.split(' ')[0]}. Let's start achieving your goals together!
          </p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              Next Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Explore your dashboard</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Start tracking your first goal</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Connect with friends</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <span className="text-2xl">💡</span>
              Pro Tips
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>• Set specific, measurable goals</p>
            <p>• Check in daily to build habits</p>
            <p>• Celebrate small wins along the way</p>
            <p>• Don't be afraid to adjust your goals</p>
          </CardContent>
        </Card>
      </div>

      {/* Final CTA */}
      <div className="text-center space-y-4">
        <Button 
          onClick={handleFinish}
          size="lg"
          className="px-8 font-semibold"
          disabled={loading}
        >
          {loading ? 'Setting up your account...' : 'Start Your Journey'}
        </Button>
        <p className="text-sm text-muted-foreground">
          You can always update your preferences later in settings
        </p>
      </div>
    </div>
  )
}
