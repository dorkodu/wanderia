import { IconBuildingStore, IconCalendar, IconCompass, IconHome, IconMessageQuestion, IconPlant2, IconSettings } from "@tabler/icons-react"
import MobileUserMenu from "@web/components/app/layout/mobile-menu"
import { NavMain } from "@web/components/app/layout/nav-main"
import { NavSecondary } from "@web/components/app/layout/nav-secondary"
import { useTheme } from "@web/components/theme-provider"
import { Sidebar, SidebarContent, SidebarHeader, SidebarRail, useSidebar } from "@web/components/ui/sidebar"
import { useIsMobile } from "@web/hooks/use-mobile"
import * as React from "react"

// Logo component that switches based on sidebar state and theme
function SidebarLogo() {
  const { state } = useSidebar()
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'

  if (state === "collapsed") {
    return (
      <img
        src="/images/trekie_Icon.svg"
        className="w-10 h-10 my-2 mx-auto"
        alt="Trekie"
      />
    )
  }

  return (
    <img
      src={isDark ? "/images/trekie_Brand_White.svg" : "/images/trekie_Brand.svg"}
      className="w-[75%] my-2 mx-2"
      alt="Trekie"
    />
  )
}
const data = {
  navMain: [
    {
      title: "Home",
      url: "/home",
      icon: IconHome,
    },
    {
      title: "Explore",
      url: "/explore",
      icon: IconCompass,
    },
    {
      title: "Life",
      url: "/life",
      icon: IconPlant2,
    },

    {
      title: "Market",
      url: "/market",
      icon: IconBuildingStore,
      badge: "10",
    },
  ],
  navSecondary: [
    {
      title: "Calendar",
      url: "/calendar",
      icon: IconCalendar,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: IconSettings,
    },
    {
      title: "Help",
      url: "/help",
      icon: IconMessageQuestion,
    },
  ],
  favorites: [
    {
      name: "Project Management & Task Tracking",
      url: "#",
      emoji: "📊",
    },
  ],
}


export function SidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar()
  const isMobile = useIsMobile()

  return (
    <Sidebar
      collapsible="icon"
      className="border-r-0 border-transparent"
      side="left"
      variant="sidebar"
      {...props}
    >
      {isMobile ? (
        // Mobile sidebar content - User menu
        <SidebarContent>
          <MobileUserMenu />
        </SidebarContent>
      ) : (
        // Desktop sidebar content - Regular navigation
        <>
          <SidebarHeader>
            <SidebarLogo />
            <NavMain items={data.navMain} />
          </SidebarHeader>
          <SidebarContent>
            {/* Favorites, Pinned Things etc. */}
          </SidebarContent>
          <NavSecondary items={data.navSecondary} className="mt-auto" />
        </>
      )}
      <SidebarRail />
    </Sidebar>
  )
}

