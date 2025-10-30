import { useNavigate } from '@tanstack/react-router'
import { Badge } from '@web/components/ui/badge'
import { Button } from '@web/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@web/components/ui/card'
import { Input } from '@web/components/ui/input'
import { Label } from '@web/components/ui/label'
import { Progress } from '@web/components/ui/progress'
import { Plus, X } from 'lucide-react'
import { useState } from 'react'

export function OnboardingTodos() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState<string[]>([])

  const suggestedTodos = [
    'Set up my workspace',
    'Review project documentation',
    'Plan my daily routine',
    'Organize my files',
    'Learn something new today',
    'Call a friend or family',
    'Prepare healthy meals',
    'Exercise for 30 minutes'
  ]

  const addTodo = (todo: string) => {
    if (todo.trim() && !todos.includes(todo)) {
      setTodos(prev => [...prev, todo])
      setNewTodo('')
    }
  }

  const removeTodo = (todoToRemove: string) => {
    setTodos(prev => prev.filter(todo => todo !== todoToRemove))
  }

  const handleContinue = async () => {
    setLoading(true)

    // TODO: Save todos to backend
    // await createInitialTodos(todos)
    await new Promise(resolve => setTimeout(resolve, 1000))

    setLoading(false)
    navigate({ to: '/onboarding/complete' })
  }

  const handleSkip = () => {
    navigate({ to: '/onboarding/complete' })
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

      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">What tasks are on your mind?</h1>
        <p className="text-muted-foreground">
          Add some initial todos to get started. You can always add more later!
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Todos</CardTitle>
          <CardDescription>
            Add tasks that need your attention. Be specific and actionable.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Add Custom Todo */}
          <div className="space-y-2">
            <Label htmlFor="newTodo">Add a custom todo</Label>
            <div className="flex gap-2">
              <Input
                id="newTodo"
                placeholder="e.g., Finish reading that book"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTodo(newTodo)}
              />
              <Button
                onClick={() => addTodo(newTodo)}
                disabled={!newTodo.trim()}
                size="icon"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Suggested Todos */}
          <div className="space-y-3">
            <Label>Or choose from these popular tasks</Label>
            <div className="flex flex-wrap gap-2">
              {suggestedTodos.map((todo) => (
                <Badge
                  key={todo}
                  variant={todos.includes(todo) ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary/80"
                  onClick={() => todos.includes(todo) ? removeTodo(todo) : addTodo(todo)}
                >
                  {todo}
                  {todos.includes(todo) && (
                    <X className="ml-1 h-3 w-3" />
                  )}
                </Badge>
              ))}
            </div>
          </div>

          {/* Selected Todos */}
          {todos.length > 0 && (
            <div className="space-y-3">
              <Label>Your selected todos ({todos.length})</Label>
              <div className="space-y-2">
                {todos.map((todo, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-muted rounded-lg"
                  >
                    <span>{todo}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeTodo(todo)}
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
          {loading ? 'Creating todos...' : 'Complete Setup'}
        </Button>
      </div>
    </div>
  )
}
