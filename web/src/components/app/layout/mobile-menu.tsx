import { DEFAULT_AVATAR, UNAUTHENTICATED_DISPLAYNAME } from "@sdk/core"
import { IconLogout2 } from "@tabler/icons-react"
import { Link, useNavigate } from "@tanstack/react-router"
import { ThemeSwitch } from "@web/components/theme-toggles"
import { Avatar, AvatarFallback, AvatarImage } from "@web/components/ui/avatar"
import { Separator } from "@web/components/ui/separator"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@web/components/ui/sidebar"
import { useAuth } from "@web/lib/auth/provider"
import { Bell, HelpCircle, Settings, Shield, Sparkles, User } from "lucide-react"
import React from "react"

// Types for each user menu item
interface UserMenuItem {
  icon: React.ComponentType<{ className?: string }>
  label: string
  description: string
  href: string
  highlight?: boolean
}

// Dedicated component for mobile user-specific navigation & actions
export function MobileUserMenu() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const userMenuItems: UserMenuItem[] = [
    { icon: User, label: "Profile", description: "Manage your profile", href: "/profile" },
    { icon: Settings, label: "Settings", description: "Account settings & preferences", href: "/settings" },
    { icon: Sparkles, label: "Upgrade to Pro", description: "Unlock premium features", href: "/premium", highlight: true },
    { icon: Shield, label: "Privacy", description: "Privacy & security settings", href: "/settings/privacy" },
    { icon: Bell, label: "Notifications", description: "Manage your notifications", href: "/settings/notifications" },
    { icon: HelpCircle, label: "Help & Support", description: "Get help with Trekie", href: "/help" },
  ]

  return (
    <div className="px-2 py-4">
      {/* User Profile Section */}
      <div className="flex items-center gap-3 p-3 mb-4 rounded-2xl bg-accent/50">
        <Avatar className="h-12 w-12 border-2 border-border">
          <AvatarImage src={user?.image ?? DEFAULT_AVATAR} alt={user?.name ?? UNAUTHENTICATED_DISPLAYNAME} />
          <AvatarFallback className="text-sm font-semibold bg-gradient-to-br from-blue-500 to-purple-600 text-white">
            {user?.name?.charAt(0) || "U"}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 text-left min-w-0">
          <div className="font-medium text-sm truncate">{user?.name || "User"}</div>
          <div className="text-xs text-muted-foreground truncate">{user?.email || "user@example.com"}</div>
          <div className="flex items-center gap-1 mt-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            <span className="text-xs text-green-600 font-medium">Online</span>
          </div>
        </div>
      </div>

      {/* User Menu Items */}
      <div className="mb-6">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-3">Account</h3>
        <SidebarMenu>
          {userMenuItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton
                asChild
                size="lg"
                className={`rounded-xl transition-all duration-200 ${item.highlight
                    ? "bg-gradient-to-r from-lime-600 to-emerald-500 text-white hover:from-lime-700 hover:to-emerald-600"
                    : "hover:bg-accent/80"
                  }`}
              >
                <Link to={item.href}>
                  <item.icon className={`size-5 ${item.highlight ? "text-white" : ""}`} />
                  <div className="flex-1 text-left min-w-0">
                    <div className={`font-medium text-sm truncate ${item.highlight ? "text-white" : ""}`}>{item.label}</div>
                    <div
                      className={`text-xs truncate ${item.highlight ? "text-white/80" : "text-muted-foreground"
                        }`}
                    >
                      {item.description}
                    </div>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </div>

      {/* Appearance / Theme Toggle */}
      <div className="mb-6">
        <div className="px-3">
          <ThemeSwitch />
        </div>
      </div>

      <Separator className="my-4" />

      {/* Sign Out */}
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            size="lg"
            className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-xl"
            onClick={async () => {
              await logout()
              navigate({ to: "/login" })
            }}
          >
            <IconLogout2 className="size-6" />
            <div className="flex-1 text-left min-w-0">
              <div className="font-medium text-sm">Log Out</div>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </div>
  )
}

export default MobileUserMenu
