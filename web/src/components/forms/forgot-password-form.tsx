import { IconAt, IconLoader, IconMail } from "@tabler/icons-react"
import { useForm } from "@tanstack/react-form"
import { useNavigate } from "@tanstack/react-router"
import { useAuth } from "@web/lib/auth/provider"
import { FieldInfo } from "@web/lib/forms/field-info"
import { useState } from "react"
import z from "zod"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

interface ForgotPasswordData {
  email: string
}

const defaultData: ForgotPasswordData = {
  email: ''
}

export const safecheckEmail = (x: string) => z.email().trim().safeParse(x)

export function ForgotPasswordForm() {
  const { forgotPassword, loading, error, clearError } = useAuth()
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()

  const form = useForm({
    defaultValues: defaultData,
    validators: {
      onBlur: ({ value }) => {
        if (!value.email) {
          return 'Email is required.'
        }

        if (!safecheckEmail(value.email).success) {
          return 'Please enter a valid email address.'
        }

        return undefined
      },
      onSubmit: ({ value }) => {
        if (!value.email) {
          return 'Email is required.'
        }

        if (!safecheckEmail(value.email).success) {
          return 'Please enter a valid email address.'
        }

        return undefined
      }
    },
    onSubmit: async ({ value }) => {
      clearError()
      const success = await forgotPassword(value.email)
      if (success) {
        setSuccess(true)
      }
    }
  })

  const formDefault = (
    <div className="space-y-4 text-center">
      <div className="flex flex-col items-center gap-2 text-center mb-6">
        <h1 className="text-2xl font-bold">Reset your password</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email and we'll send you a link to reset your password.
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          form.handleSubmit()
        }}
        className="space-y-4">

        <form.Field
          name="email"
          validators={{
            onChange: ({ value }) =>
              !value
                ? 'Email is required'
                : !safecheckEmail(value).success
                  ? 'Please enter a valid email address'
                  : undefined,
          }}
          children={(field) => {
            return (
              <div className="space-y-2">
                <div className="relative">
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="Your Email"
                    type="email"
                    required
                    disabled={loading}
                    className="peer ps-9" />

                  <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                    <IconAt size={16} aria-hidden="true" />
                  </div>
                </div>

                <FieldInfo field={field} />
              </div>
            )
          }}
        />

        {error && (
          <div className="text-sm text-destructive">{error}</div>
        )}

        <form.Subscribe
          selector={(state) => [state.errorMap]}
          children={([errorMap]) => errorMap?.onSubmit ? (
            <div className="text-sm text-destructive">
              {errorMap.onSubmit}
            </div>
          ) : null}
        />

        <Button type="submit" className="w-full font-bold" disabled={loading}>
          {loading ? (
            <IconLoader
              className="-ms-1 animate-spin opacity-70"
              size={16}
              aria-hidden="true"
            />
          ) : (
            "SEND RESET LINK"
          )}
        </Button>
      </form>
    </div>
  )

  const formLinkSent = (
    <div className="space-y-4 text-center">
      <div className="flex justify-center">
        <div className="flex size-12 shrink-0 items-center justify-center mb-2 bg-green-500/20 rounded-full">
          <IconMail className="size-6 text-green-500" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-foreground">Check your email</h3>
        <p className="text-muted-foreground text-sm mt-1">
          We have sent a password reset link to your inbox.
        </p>
      </div>
      <div className="pt-2">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => {
            setSuccess(false)
            form.reset()
          }}
        >
          Send Another Email
        </Button>
      </div>
    </div>
  )

  return (success ? formLinkSent : formDefault)
}
