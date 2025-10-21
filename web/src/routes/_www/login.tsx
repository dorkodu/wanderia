import { createFileRoute, Link, redirect } from '@tanstack/react-router'
import { LoginForm } from '@web/components/forms/login-form'
import { Button } from '@web/components/ui/button'
import { authClient } from '@web/lib/auth/client'

export const Route = createFileRoute('/_www/login')({
  beforeLoad: async () => {
    const session = await authClient.getSession()
    if (session.data?.session) {
      throw redirect({ to: '/home', replace: true })
    }
  },
  component: Page,
})

interface Credentials {
  loginName: string
  password: string
}

const defaultCredentials: Credentials = {
  loginName: '',
  password: ''
}

function Page() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="w-full max-w-xs gap-6 mx-4">

        <div className="flex flex-col items-center gap-2 text-center mb-6 -mt-25">
          <h1 className="text-2xl font-bold">Welcome to Trekie!</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Continue where you left, or start anew.
          </p>
        </div>

        <LoginForm />

        <div className="my-4" />
        <Button className="w-full font-bold" variant="light" aria-label="Create Account" asChild>
          <Link to="/create-account">CREATE YOUR ACCOUNT</Link>
        </Button>

        <div className="mt-10 text-center text-sm text-muted-foreground">
          <p>
            By continuing, you agree to our <br /> <Link to="/legal/terms-of-service" className="text-primary underline">Terms of Service</Link> and <Link to="/legal/privacy-policy" className="text-primary underline">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </main>
  )
}
