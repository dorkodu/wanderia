import { IconLoader } from "@tabler/icons-react"
import { useForm } from "@tanstack/react-form"
import { Link, useNavigate } from "@tanstack/react-router"
import z from "zod"

import { useAuth } from "@web/lib/auth/provider"
import { FieldInfo } from "@web/lib/forms/field-info"

import { Button } from "@web/components/ui/button"
import { Input } from "@web/components/ui/input"

import { USERNAME_REGEX } from "@sdk/core"

interface Credentials {
  loginName: string
  password: string
}

const defaultCredentials: Credentials = {
  loginName: '',
  password: ''
}

export const safecheckEmail = (x: string) => z.email().trim().safeParse(x)
export const safecheckUsername = (x: string) => z.string().trim().regex(USERNAME_REGEX).safeParse(x)

export function LoginForm() {
  const { login, loading, error, clearError } = useAuth()
  const navigate = useNavigate()

  const form = useForm({
    defaultValues: defaultCredentials,
    validators: {
      onBlur: ({ value, formApi }) => {
        if (!value.loginName)
          return 'Your email or username is required.'

        if (!value.password)
          return 'Password is required.'

        if (safecheckEmail(value.loginName).success) {
          return undefined
        } else if (safecheckUsername(value.loginName).success) {
          return undefined
        } else {
          return 'Please enter a valid email or username.'
        }
      },
      onSubmit: ({ value, formApi }) => {
        if (!value.loginName || !value.password) {
          return 'Both email/username and password are required.'
        }

        if (safecheckEmail(value.loginName).success || safecheckUsername(value.loginName).success) {
          return undefined
        } else {
          return 'Please enter a valid email or username.'
        }
      }
    },
    onSubmit: async ({ value }) => {
      clearError()
      const success = await login(value.loginName, value.password)
      if (success) {
        navigate({ to: "/home" })
      }
    }
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
      className="space-y-3">

      <form.Field
        name="loginName"
        validators={{
          onChange: ({ value }) =>
            !value
              ? 'A email or username is required'
              : undefined,
          onChangeAsyncDebounceMs: 500,
          onChangeAsync: async ({ value }) => {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            return (
              value.includes('error') && 'No "error" allowed in email or username'
            )
          },
        }}
        children={(field) => {
          return (
            <>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}

                placeholder="Email or Username"
                type="text"
                required
                className="mt-1"
                disabled={loading}
              />
              <FieldInfo field={field} />
            </>
          )
        }}
      />

      <form.Field
        name="password"
        validators={{
          onChange: ({ value }) =>
            !value ? 'Password is required' : undefined,
        }}
        children={(field) => {
          return (
            <>
              <Input
                id={field.name}
                name={field.name}
                type="password"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Password"
                required
                className="mt-1"
                disabled={loading}
              />
              <FieldInfo field={field} />
            </>
          )
        }}
      />

      <div className="flex items-center justify-between">
        <Link to="/forgot-password" className="ml-auto text-sm underline-offset-2 hover:underline">
          Forgot your password?
        </Link>
      </div>

      <form.Subscribe
        selector={(state) => [state.errorMap]}
        children={([errorMap]) => errorMap?.onSubmit ? (
          <div>
            <em>There was an error on the form: {errorMap.onSubmit}</em>
          </div>
        ) : null
        }
      />

      <Button type="submit" className="w-full font-bold" disabled={loading}>
        {loading ? <IconLoader
          className="-ms-1 animate-spin opacity-70"
          size={16}
          aria-hidden="true"
        /> : "LOGIN"}
      </Button>
    </form>
  )

}