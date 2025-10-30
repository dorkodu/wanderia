import { createFileRoute, Link } from '@tanstack/react-router'
import { ForgotPasswordForm } from '@web/components/forms/forgot-password-form'

export const Route = createFileRoute('/_www/forgot-password')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="flex h-[80vh] items-center justify-center">
      <div className="w-full max-w-xs gap-6 mx-4">

        <ForgotPasswordForm />

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>
            Remember your password?{" "}
            <Link to="/login" className="text-blue-500 underline font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
