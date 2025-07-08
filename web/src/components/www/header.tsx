import { IconBook, IconBuildingArch, IconCode, IconMenu2 } from "@tabler/icons-react"
import { Link, useNavigate } from "@tanstack/react-router"
import { Button } from "@web/components/ui/button"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@web/components/ui/navigation-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@web/components/ui/popover"
import { cn } from "@web/lib/utils"
import ThemeToggle from "../theme-toggles"

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "/", label: "Home" },
  {
    label: "Features",
    submenu: true,
    type: "description",
    items: [
      {
        href: "/#feature-commitments",
        label: "Commitments",
        description: `Track "things" in your life.`,
      },
      {
        href: "/#feature-goals",
        label: "Life Goals",
        description: "Change your life, one goal at a time.",
      },
      {
        href: "/#feature-stats",
        label: "Stats",
        description: "See your progress in numbers.",
      },
    ],
  },
  {
    label: "About",
    submenu: true,
    type: "icon",
    items: [
      { href: "/manifesto", label: "Manifesto", icon: IconBook },
      { href: "/docs", label: "For Developers", icon: IconCode },
      { href: "https://dorkodu.com", label: "Our Company", icon: IconBuildingArch },
    ],
  },
]

export function Header() {
  const navigate = useNavigate()

  return (
    <header>
      <nav data-state={'active'} className="w-full px-2 group">
        <div className={cn('mx-auto mt-2 px-3 transition-all duration-300 max-w-4xl lg:px-4')}>
          <div className="flex h-16 items-center justify-between gap-4 w-full">
            {/* Left side */}
            <div className="flex items-center gap-2">
              {/* Mobile menu trigger */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    className="md:hidden"
                    variant="ghost"
                    size="icon">
                    <IconMenu2 className="size-6" />
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
                                      className="py-2"
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
                              navigationLinks[index + 1]?.submenu) ||
                              (link.submenu &&
                                !navigationLinks[index + 1]?.submenu) ||
                              (link.submenu &&
                                navigationLinks[index + 1]?.submenu &&
                                link.type !== navigationLinks[index + 1]?.type)) && (
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
                <img src="/images/wanderia_Brand_White.svg" alt="Wanderia Logo" className="h-11 md:h-13 hidden dark:block" />
                <img src="/images/wanderia_Brand.svg" alt="Wanderia Logo" className="h-11 md:h-13 dark:hidden" />
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
                            <NavigationMenuTrigger className="text-muted-foreground hover:text-primary bg-transparent cursor-pointer px-2 py-1 font-medium *:[svg]:-me-0.5 *:[svg]:size-3.5">
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
                                          <item.icon
                                            size={18}
                                            className="text-muted-foreground"
                                            aria-hidden="true"
                                          />
                                          <span>{item.label}</span>
                                        </div>
                                      )}

                                      {/* Display label with description if present */}
                                      {link.type === "description" &&
                                        "description" in item ? (
                                        <div>
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
                          <NavigationMenuLink onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            navigate({ to: link.href! });
                          }}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary py-1 font-medium">
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
            <div className="hidden md:flex items-center gap-2">
              <Button variant="default" asChild className="text-sm rounded-xl font-extrabold uppercase">
                <a href="#">Get Started</a>
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}