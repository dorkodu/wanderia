import { useNavigate } from '@tanstack/react-router'
import { Badge } from '@web/components/ui/badge'
import { Button } from '@web/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@web/components/ui/card'
import { Input } from '@web/components/ui/input'
import { Label } from '@web/components/ui/label'
import { Progress } from '@web/components/ui/progress'
import { Plus, X } from 'lucide-react'
import { useState } from 'react'

export function OnboardingGoals() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [newGoal, setNewGoal] = useState('')
  const [goals, setGoals] = useState<string[]>([])

  const suggestedGoals = [
    'Exercise 3 times a week',
    'Read 12 books this year',
    'Learn a new skill',
    'Save $1000',
    'Meditate daily',
    'Drink more water',
    'Sleep 8 hours a night',
    'Eat healthier'
  ]

  const addGoal = (goal: string) => {
    if (goal.trim() && !goals.includes(goal)) {
      setGoals(prev => [...prev, goal])
      setNewGoal('')
    }
  }

  const removeGoal = (goalToRemove: string) => {
    setGoals(prev => prev.filter(goal => goal !== goalToRemove))
  }

  const handleContinue = async () => {
    setLoading(true)

    // TODO: Save goals to backend
    // await createInitialGoals(goals)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    setLoading(false)
    navigate({ to: '/onboarding/todos' })
  }

  const handleSkip = () => {
    navigate({ to: '/onboarding/complete' })
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Step 3 of 4</span>
          <span>75%</span>
        </div>
        <Progress value={75} className="h-2" />
      </div>

      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">What would you like to achieve?</h1>
        <p className="text-muted-foreground">
          Set some initial goals to get started. You can always add more later!
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Goals</CardTitle>
          <CardDescription>
            Add goals that matter to you. Be specific and make them actionable.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Add Custom Goal */}
          <div className="space-y-2">
            <Label htmlFor="newGoal">Add a custom goal</Label>
            <div className="flex gap-2">
              <Input
                id="newGoal"
                placeholder="e.g., Run a 5K in 3 months"
                value={newGoal}
                onChange={(e) => setNewGoal(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addGoal(newGoal)}
              />
              <Button
                onClick={() => addGoal(newGoal)}
                disabled={!newGoal.trim()}
                size="icon"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Suggested Goals */}
          <div className="space-y-3">
            <Label>Or choose from these popular goals</Label>
            <div className="flex flex-wrap gap-2">
              {suggestedGoals.map((goal) => (
                <Badge
                  key={goal}
                  variant={goals.includes(goal) ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary/80"
                  onClick={() => goals.includes(goal) ? removeGoal(goal) : addGoal(goal)}
                >
                  {goal}
                  {goals.includes(goal) && (
                    <X className="ml-1 h-3 w-3" />
                  )}
                </Badge>
              ))}
            </div>
          </div>

          {/* Selected Goals */}
          {goals.length > 0 && (
            <div className="space-y-3">
              <Label>Your selected goals ({goals.length})</Label>
              <div className="space-y-2">
                {goals.map((goal, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-muted rounded-lg"
                  >
                    <span>{goal}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeGoal(goal)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handleSkip}
          disabled={loading}
        >
          Skip for now
        </Button>
        <Button
          onClick={handleContinue}
          disabled={loading}
        >
          {loading ? 'Creating goals...' : 'Continue'}
        </Button>
      </div>
    </div>
  )
}
