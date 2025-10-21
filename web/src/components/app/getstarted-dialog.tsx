import React, { useId, useState } from "react"

import { Link } from "@tanstack/react-router"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@web/components/ui/dialog"
import { LoginForm } from "../forms/login-form"
import { Button } from "../ui/button"

export default function KickstartDialog({ children }: { children?: React.ReactNode }) {
  const id = useId()
  const [dialogOpen, setDialogOpen] = useState(false)
  return (
    <Dialog open={dialogOpen} onOpenChange={(x) => setDialogOpen(x)} modal>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <div className="flex flex-col items-center gap-2">
          <div className="flex size-12 shrink-0 items-center justify-center mb-1" aria-hidden="true">
            <img src="/images/trekie_Icon.svg" alt="Trekie Icon" />
          </div>
          <DialogHeader>
            <DialogTitle className="sm:text-center">Welcome to Trekie!</DialogTitle>
            <DialogDescription className="sm:text-center">
              Continue where you left, or start anew!
            </DialogDescription>
          </DialogHeader>
        </div>

        <LoginForm />

        <div className="before:bg-border after:bg-border flex items-center gap-3 before:h-px before:flex-1 after:h-px after:flex-1">
          <span className="text-muted-foreground text-xs">OR</span>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            className="w-full after:flex-1 font-medium"
            variant="outline"
            aria-label="Continue with Google"
          >
            <span className="pointer-events-none me-2 flex-1">
              <img className="size-5 mr-1"
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Google_Favicon_2025.svg" alt="" />
            </span>
            <span>CONTINUE WITH GOOGLE</span>
          </Button>
          <Button className="w-full font-bold" variant="light" aria-label="Create Account" asChild onClick={() => {
            setDialogOpen(false)
          }}>
            <Link to="/create-account">CREATE YOUR ACCOUNT</Link>
          </Button>
        </div>

      </DialogContent>
    </Dialog>
  )
}
