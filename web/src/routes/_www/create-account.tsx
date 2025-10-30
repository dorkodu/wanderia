import { createFileRoute, Link } from '@tanstack/react-router'
import { CreateAccountForm } from '@web/components/forms/create-account-form'

export const Route = createFileRoute('/_www/create-account')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="flex h-screen items-center justify-center p-4">
      <div className="w-full max-w-md -mt-20">
        <CreateAccountForm />

        <div className="mt-4 text-center text-sm text-muted-foreground">
          <p>
            By continuing, you agree to our <br /> <Link to="/legal/terms-of-service" className="text-primary underline">Terms of Service</Link> and <Link to="/legal/privacy-policy" className="text-primary underline">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </main>
  )
}
