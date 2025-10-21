import { DEFAULT_AVATAR, UNAUTHENTICATED_DISPLAYNAME } from "@sdk/core"
import { IconMenu2 } from "@tabler/icons-react"
import { Link } from "@tanstack/react-router"
import { Avatar, AvatarFallback, AvatarImage } from "@web/components/ui/avatar"
import { SidebarTrigger, useSidebar } from "@web/components/ui/sidebar"
import { useAuth } from "@web/lib/auth/provider"
import * as React from "react"

export function MobileTopBar() {
  const { user } = useAuth()
  const { isMobile } = useSidebar()
  const [isDark, setIsDark] = React.useState(false)

  React.useEffect(() => {
    // Check if dark mode is enabled
    const checkDarkMode = () => {
      const isDarkMode = document.documentElement.classList.contains('dark') ||
        window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDark(isDarkMode)
    }

    checkDarkMode()

    // Listen for theme changes
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', checkDarkMode)

    return () => {
      observer.disconnect()
      mediaQuery.removeEventListener('change', checkDarkMode)
    }
  }, [])

  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="flex items-center justify-between px-2 h-14">
        {/* Menu/Hamburger Button */}
        <SidebarTrigger className="lg:hidden p-2">
          <IconMenu2 className="size-6" />
        </SidebarTrigger>

        {/* Logo */}
        <Link to="/home" className="flex items-center">
          <img
            src="/images/trekie_Icon.svg"
            className="h-8"
            alt="Trekie"
          />
        </Link>

        {/* Profile Picture - Just decorative on mobile */}
        <div className="h-10 w-10 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user?.image ?? DEFAULT_AVATAR} alt={user?.name ?? UNAUTHENTICATED_DISPLAYNAME} />
            <AvatarFallback>
              {user?.name?.charAt(0) || "U"}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  )
}
