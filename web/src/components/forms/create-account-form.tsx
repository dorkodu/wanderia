import { IconEye, IconEyeOff, IconLoader } from "@tabler/icons-react"
import { useForm } from "@tanstack/react-form"
import { Link, useNavigate } from "@tanstack/react-router"
import { useState } from "react"
import z from "zod"

import { useAuth } from "@web/lib/auth/provider"
import { FieldInfo } from "@web/lib/forms/field-info"

import { Button } from "@web/components/ui/button"
import { Input } from "@web/components/ui/input"

import { USERNAME_REGEX } from "@sdk/core"


// Validation schemas
const createAccountSchema = z.object({
  displayName: z.string().min(2, "Display name must be at least 2 characters"),
  username: z.string()
    .min(3, "Username must be at least 3 characters")
    .max(16, "Username must be at most 16 characters")
    .regex(USERNAME_REGEX, "Username can only contain letters, numbers, dots, and underscores"),
  email: z.email("Please enter a valid email address"),
  password: z.string()
    .min(8, "Password must be at least 8 characters"),
})

type CreateAccountData = z.infer<typeof createAccountSchema>

const defaultFormData: CreateAccountData = {
  displayName: '',
  username: '',
  email: '',
  password: '',
}

export const safecheckEmail = (x: string) => z.email().safeParse(x)
export const safecheckUsername = (x: string) => z.string().regex(USERNAME_REGEX).safeParse(x)

export function CreateAccountForm() {
  const { signup, loading, error, clearError, checkUsernameAvailability } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  // Social login postponed

  const form = useForm({
    defaultValues: defaultFormData,
    validators: {
      onSubmit: ({ value }) => {
        const validation = createAccountSchema.safeParse(value)
        if (!validation.success) {
          return validation.error.issues[0]?.message || 'Validation failed'
        }
        return undefined
      }
    },
    onSubmit: async ({ value }) => {
      clearError()

      // Call the signup function
      const success = await signup({
        email: value.email,
        password: value.password,
        name: value.displayName,
        username: value.username
      })

      if (success) {
        // Navigate to onboarding flow for new users
        navigate({ to: "/onboarding" })
      }
    }
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Create Account</h1>
        <p className="text-muted-foreground text-sm">
          Welcome, it's always a good time to start anew!
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          form.handleSubmit()
        }}
        className="space-y-4">

        {/* Display Name Field */}
        <form.Field
          name="displayName"
          validators={{
            onChange: ({ value }) => {
              if (!value) return 'Name is required'
              if (value.length < 2) return 'Name must be at least 2 characters'
              if (value.length > 50) return 'Name must be at most 50 characters'
              return undefined
            }
          }}
        >
          {(field) => (
            <div className="space-y-2">
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                disabled={loading}
                placeholder="Your Name"
                className={field.state.meta.errors.length > 0 ? "border-destructive" : ""}
              />
              <FieldInfo field={field} />
            </div>
          )}
        </form.Field>

        {/* Username Field */}
        <form.Field
          name="username"
          validators={{
            onChange: ({ value }) => {
              if (!value) return 'Username is required'
              const result = safecheckUsername(value)
              if (!result.success) return 'Username can only contain letters, numbers, dots, and underscores'
              if (value.length < 3) return 'Username must be at least 3 characters'
              if (value.length > 16) return 'Username must be at most 16 characters'
              return undefined
            },
            onChangeAsyncDebounceMs: 500,
            onChangeAsync: async ({ value }) => {
              if (!value || value.length < 3) return undefined

              // Check if username is available
              const isAvailable = await checkUsernameAvailability(value)

              if (!isAvailable) {
                return 'This username is not available'
              }

              return undefined
            }
          }}
        >
          {(field) => (
            <div className="space-y-2">
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Username"
                disabled={loading}
                className={field.state.meta.errors.length > 0 ? "border-destructive" : ""}
              />

              <FieldInfo field={field} info />
            </div>
          )}
        </form.Field>

        {/* Email Field */}
        <form.Field
          name="email"
          validators={{
            onChange: ({ value }) => {
              if (!value) return 'Email is required'
              const result = safecheckEmail(value)
              if (!result.success) return 'Please enter a valid email address'
              return undefined
            }
          }}
        >
          {(field) => (
            <div className="space-y-2">
              <Input
                id={field.name}
                name={field.name}
                type="email"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Email"
                disabled={loading}
                className={field.state.meta.errors.length > 0 ? "border-destructive" : ""}
              />
              <FieldInfo field={field} />
            </div>
          )}
        </form.Field>

        {/* Password Field */}
        <form.Field
          name="password"
          validators={{
            onChange: ({ value }) => {
              if (!value) return 'Password is required'
              if (value.length < 8) return 'Password must be at least 8 characters'
              return undefined
            }
          }}
        >
          {(field) => (
            <div className="space-y-2">
              <div className="relative">
                <Input
                  id={field.name}
                  name={field.name}
                  type={showPassword ? "text" : "password"}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Password"
                  disabled={loading}
                  className={`pr-10 ${field.state.meta.errors.length > 0 ? "border-destructive" : ""}`}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-0 h-full px-3 text-muted-foreground hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loading}
                >
                  {showPassword ? (
                    <IconEyeOff className="size-6" />
                  ) : (
                    <IconEye className="size-6" />
                  )}
                </Button>
              </div>
              <FieldInfo field={field} />
            </div>
          )}
        </form.Field>

        {/* Error Display */}
        {error && (
          <div className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-md p-3">
            {error}
          </div>
        )}

        {/* Submit Button */}
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <Button
              type="submit"
              className="w-full font-bold"
              disabled={!canSubmit || isSubmitting || loading}
            >
              {loading || isSubmitting ? <IconLoader className="mr-2 h-4 w-4 animate-spin" /> : "CREATE ACCOUNT"}
            </Button>
          )}
        </form.Subscribe>
      </form>

      {/* Social login postponed */}



      {/* Sign In Link */}
      <div className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 hover:underline font-medium">
          Login
        </Link>
      </div>
    </div>
  )
}