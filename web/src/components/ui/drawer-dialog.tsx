import * as React from "react"

import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "@web/components/ui/dialog"
import {
  Drawer,
  DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger
} from "@web/components/ui/drawer"

export function DrawerDialog(
  { trigger, content, title, description, footer }:
    { trigger: React.ReactNode, title: React.ReactNode, description?: React.ReactNode, content?: React.ReactNode, footer?: React.ReactNode }
) {
  const [open, setOpen] = React.useState(false)
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {trigger}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          {content}
        </DialogContent>
        <DialogFooter>
          {footer}
        </DialogFooter>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        {trigger}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>
            {description}
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          {content}
        </div>
        <DrawerFooter className="pt-2">
          {footer}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}