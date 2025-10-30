import { IconBuildingStore, IconCompass, IconHome, IconPlant2, IconSparkles } from "@tabler/icons-react"
import { Link, useRouterState } from "@tanstack/react-router"
import { Button } from "@web/components/ui/button"
import { useSpotlight } from "@web/lib/spotlight"
import { cn } from "@web/lib/utils"
import { useEffect, useRef, useState } from "react"

const navigationItems = [
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
  },
]

const NavButton = ({ item, isActive }: { item: typeof navigationItems[number]; isActive: boolean }) => (
  <Link
    key={item.title}
    to={item.url}
    className={cn(
      "flex flex-col items-center justify-center min-w-0 flex-1 py-1 px-2 rounded-lg transition-colors",
      isActive
        ? "text-blue-500 bg-blue-500/10"
        : "text-muted-foreground hover:text-foreground hover:bg-accent"
    )}
  >
    <item.icon className="size-6 mb-1" />
    <span className="text-xs font-medium truncate">{item.title}</span>
  </Link>
)

export function MobileBottomBar() {
  const routerState = useRouterState()
  const { open: openSpotlight } = useSpotlight()
  const currentPath = routerState.location.pathname
  const firstHalf = navigationItems.slice(0, 2)
  const secondHalf = navigationItems.slice(2)

  // State for controlling visibility
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isScrollingUp, setIsScrollingUp] = useState(false)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)
  const hideTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)

  // Pages where bottom bar should be hidden
  const hiddenPages = [
    '/onboarding',
    '/settings',
    '/profile',
    '/premium'
  ]

  const shouldHideOnPage = hiddenPages.some(page => currentPath.startsWith(page))

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Clear existing timeouts
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      // Determine scroll direction
      const scrollingUp = currentScrollY < lastScrollY
      setIsScrollingUp(scrollingUp)
      setLastScrollY(currentScrollY)

      // Show bar when scrolling up or at top of page
      if (scrollingUp || currentScrollY < 100) {
        setIsVisible(true)

        // Auto-hide after 3 seconds of no scrolling when not at top
        if (currentScrollY > 100) {
          scrollTimeoutRef.current = setTimeout(() => {
            setIsVisible(false)
          }, 3000)
        }
      }
      // Hide bar when scrolling down (after small threshold)
      else if (currentScrollY > lastScrollY + 10) {
        setIsVisible(false)
      }
    }

    const handleTouchStart = () => {
      // Show bar on touch interaction
      setIsVisible(true)

      // Auto-hide after 3 seconds
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current)
      }
      hideTimeoutRef.current = setTimeout(() => {
        setIsVisible(false)
      }, 3000)
    }

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })

    // Show bar initially
    setIsVisible(true)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('touchstart', handleTouchStart)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current)
      }
    }
  }, [lastScrollY])

  // Always show on certain interactions
  const handleCreateClick = () => {
    setIsVisible(true)
    openSpotlight({ searchString: "create" })
  }

  // Don't render if should be hidden on this page
  if (shouldHideOnPage) {
    return null
  }

  return (
    <div
      className={cn(
        "lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t transition-transform duration-300 ease-in-out",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="flex items-center justify-around px-2 py-2 h-16 space-x-1">
        {firstHalf.map((item) => {
          const isActive = currentPath === item.url
          return (
            <NavButton key={item.title} item={item} isActive={isActive} />
          )
        })}

        {/* Create/Spotlight Button (center) */}
        <Button
          onClick={handleCreateClick}
          size="sm"
          className="flex flex-col items-center justify-center
                      min-w-0 flex-1 py-1 px-2 h-full rounded-lg
                      bg-gradient-to-tr from-lime-700 to-emerald-400 hover:from-lime-600 hover:to-emerald-300
                      transition-all duration-200 active:scale-95"
        >
          <IconSparkles className="size-8" stroke={2.25} />
        </Button>

        {secondHalf.map((item) => {
          const isActive = currentPath === item.url
          return (
            <NavButton key={item.title} item={item} isActive={isActive} />
          )
        })}
      </div>
    </div>
  )
}
