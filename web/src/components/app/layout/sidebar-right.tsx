import * as React from "react"

import { Link } from "@tanstack/react-router"
import { NavHeader } from "@web/components/app/layout/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarSeparator
} from "@web/components/ui/sidebar"
import { DailyStats } from "@web/namespaces/life/DailyStats"

// This is sample data.
const data = {
  user: {
    name: "Doruk Eray",
    email: "@dorukeray",
    avatar: "/avatars/shadcn.jpg",
  },
}

export function SidebarRight({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="none"
      className="sticky top-0 hidden h-svh lg:flex px-2"
      style={{
        "--sidebar-width": "18rem", // Larger width for desktop/tablet
      } as React.CSSProperties & { '--sidebar-width': string }}
      {...props}
    >
      <SidebarHeader className="flex border-sidebar-border h-16">
        <NavHeader />
      </SidebarHeader>
      <SidebarContent>
        <DailyStats />

        <SidebarSeparator className="mx-0" />
        {Footer}

        <img src="/images/dorkodu_Brand.svg" className="w-[50%] h-auto" alt="" />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  )
}

const Footer = (
  <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance mx-4">
    <ul className="flex gap-1 justify-center text-muted-foreground/50 *:[li]:text-muted-foreground">
      <li><Link to="/about">About</Link></li>
      · <li><Link to="/legal/terms-of-service">Terms</Link></li>
      · <li><Link to="/legal/privacy-policy">Privacy</Link></li>
      · <li><a href="https://dorkodu.com/jobs" target="_blank">Careers</a></li>
      · <li><a href="https://dorkodu.substack.com" target="_blank">Blog</a></li>
    </ul>
  </div>
)