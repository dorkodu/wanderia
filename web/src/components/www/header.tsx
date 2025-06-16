import { IconBook, IconInfoCircle, IconLifebuoy, IconMenu4 } from "@tabler/icons-react"
import { Link } from "@tanstack/react-router"
import { Button } from "@web/components/ui/button"
import { Image } from "@web/components/ui/image"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@web/components/ui/navigation-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@web/components/ui/popover"
import { cn } from "@web/lib/utils"

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "#", label: "Home" },
  {
    label: "Features",
    submenu: true,
    type: "description",
    items: [
      {
        href: "#",
        label: "Components",
        description: "Browse all components in the library.",
      },
      {
        href: "#",
        label: "Documentation",
        description: "Learn how to use the library.",
      },
      {
        href: "#",
        label: "Templates",
        description: "Pre-built layouts for common use cases.",
      },
    ],
  },
  {
    label: "About",
    submenu: true,
    type: "icon",
    items: [
      { href: "#", label: "Getting Started", icon: "BookOpenIcon" },
      { href: "#", label: "Tutorials", icon: "LifeBuoyIcon" },
      { href: "#", label: "About Us", icon: "InfoIcon" },
    ],
  },
]

export function Header() {
  return (
    <header>
      <nav data-state={'active'} className="fixed z-20 w-full px-2 group">
        <div className={cn('mx-auto mt-2 max-w-6xl px-3 transition-all duration-300 lg:px-8', 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-4')}>
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-1 lg:gap-0 lg:py-1.5">
            <div className="flex h-16 items-center justify-between gap-4">
              {/* Left side */}
              <div className="flex items-center gap-2">
                {/* Mobile menu trigger */}
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      className="md:hidden"
                      variant="ghost"
                      size="icon"
                    >
                      <IconMenu4 className="size-6" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="start" className="w-64 p-1 md:hidden">
                    <NavigationMenu className="max-w-none *:w-full">
                      <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                        {navigationLinks.map((link, index) => (
                          <NavigationMenuItem key={index} className="w-full">
                            {link.submenu ? (
                              <>
                                <div className="text-muted-foreground px-2 py-1.5 text-xs font-medium">
                                  {link.label}
                                </div>
                                <ul>
                                  {link.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                      <NavigationMenuLink
                                        href={item.href}
                                        className="py-1.5"
                                      >
                                        {item.label}
                                      </NavigationMenuLink>
                                    </li>
                                  ))}
                                </ul>
                              </>
                            ) : (
                              <NavigationMenuLink href={link.href} className="py-1.5">
                                {link.label}
                              </NavigationMenuLink>
                            )}
                            {/* Add separator between different types of items */}
                            {index < navigationLinks.length - 1 &&
                              // Show separator if:
                              // 1. One is submenu and one is simple link OR
                              // 2. Both are submenus but with different types
                              ((!link.submenu &&
                                navigationLinks[index + 1].submenu) ||
                                (link.submenu &&
                                  !navigationLinks[index + 1].submenu) ||
                                (link.submenu &&
                                  navigationLinks[index + 1].submenu &&
                                  link.type !== navigationLinks[index + 1].type)) && (
                                <div
                                  role="separator"
                                  aria-orientation="horizontal"
                                  className="bg-border -mx-1 my-1 h-px w-full"
                                />
                              )}
                          </NavigationMenuItem>
                        ))}
                      </NavigationMenuList>
                    </NavigationMenu>
                  </PopoverContent>
                </Popover>
                <Link to="/" className="text-primary hover:text-primary/90">
                  <Image src="/images/wanderia_Brand_White.svg" alt="Wanderia Logo" className="h-12" />
                </Link>
              </div>
              <div className="flex items-center gap-2">
                {/* Main nav */}
                <div className="flex items-center gap-6">
                  {/* Navigation menu */}
                  <NavigationMenu viewport={false} className="max-md:hidden">
                    <NavigationMenuList className="gap-2">
                      {navigationLinks.map((link, index) => (
                        <NavigationMenuItem key={index}>
                          {link.submenu ? (
                            <>
                              <NavigationMenuTrigger className="text-muted-foreground hover:text-primary bg-transparent px-2 py-1.5 font-medium *:[svg]:-me-0.5 *:[svg]:size-3.5">
                                {link.label}
                              </NavigationMenuTrigger>
                              <NavigationMenuContent className="data-[motion=from-end]:slide-in-from-right-16! data-[motion=from-start]:slide-in-from-left-16! data-[motion=to-end]:slide-out-to-right-16! data-[motion=to-start]:slide-out-to-left-16! z-50 p-1">
                                <ul
                                  className={cn(
                                    link.type === "description"
                                      ? "min-w-64"
                                      : "min-w-48"
                                  )}
                                >
                                  {link.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                      <NavigationMenuLink
                                        href={item.href}
                                        className="py-1.5"
                                      >
                                        {/* Display icon if present */}
                                        {link.type === "icon" && "icon" in item && (
                                          <div className="flex items-center gap-2">
                                            {item.icon === "BookOpenIcon" && (
                                              <IconBook
                                                size={16}
                                                className="text-foreground opacity-60"
                                                aria-hidden="true"
                                              />
                                            )}
                                            {item.icon === "LifeBuoyIcon" && (
                                              <IconLifebuoy
                                                size={16}
                                                className="text-foreground opacity-60"
                                                aria-hidden="true"
                                              />
                                            )}
                                            {item.icon === "InfoIcon" && (
                                              <IconInfoCircle
                                                size={16}
                                                className="text-foreground opacity-60"
                                                aria-hidden="true"
                                              />
                                            )}
                                            <span>{item.label}</span>
                                          </div>
                                        )}

                                        {/* Display label with description if present */}
                                        {link.type === "description" &&
                                          "description" in item ? (
                                          <div className="space-y-1">
                                            <div className="font-medium">
                                              {item.label}
                                            </div>
                                            <p className="text-muted-foreground line-clamp-2 text-xs">
                                              {item.description}
                                            </p>
                                          </div>
                                        ) : (
                                          // Display simple label if not icon or description type
                                          !link.type ||
                                          (link.type !== "icon" &&
                                            link.type !== "description" && (
                                              <span>{item.label}</span>
                                            ))
                                        )}
                                      </NavigationMenuLink>
                                    </li>
                                  ))}
                                </ul>
                              </NavigationMenuContent>
                            </>
                          ) : (
                            <NavigationMenuLink
                              href={link.href}
                              className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                            >
                              {link.label}
                            </NavigationMenuLink>
                          )}
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
              </div>
              {/* Right side */}
              <div className="flex items-center gap-2">
                <Button asChild size="sm" className="text-sm">
                  <a href="#">Get Started</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}