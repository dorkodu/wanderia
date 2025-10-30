import { IconSparkles, type TablerIcon } from "@tabler/icons-react"
import { Link, useRouterState } from "@tanstack/react-router"
import { Button } from "@web/components/ui/button"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar, } from "@web/components/ui/sidebar"
import { useSpotlight } from "@web/lib/spotlight"
import { type LucideIcon } from "lucide-react"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon: LucideIcon | TablerIcon
  }[]
}) {
  const { state } = useSidebar()
  const s = useRouterState()
  const { open: openSpotlight } = useSpotlight()

  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild isActive={item.url === s.location.pathname} size="lg" variant="outline" className="rounded-2xl 
          data-[active=true]:bg-blue-600/10 data-[active=true]:text-blue-500/80">
            <Link to={item.url} className="flex pl-6 pr-2">
              <item.icon className="size-6! text-inherit opacity-80" />
              <span className="text-[16.5px]">{item.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))
      }

      <Button
        onClick={() => openSpotlight({ searchString: "create" })}
        size={state === "collapsed" ? "icon" : "xl"}
        className={`mt-2 bg-gradient-to-tr from-lime-700 to-emerald-400 rounded-2xl font-bold ${state === "collapsed"
          ? "w-10 h-10 p-2 justify-center"
          : "text-lg"
          }`}
      >
        <IconSparkles className="size-6" stroke={2.25} />
        {state === "expanded" && <span className="text-shadow-xs">CREATE</span>}
      </Button>

    </SidebarMenu>
  )
}


