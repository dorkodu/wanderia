import { cn } from "@web/lib/utils"
import { SearchIcon } from "lucide-react"
import type { SpotlightOpenConfig } from "./types"
import { useSpotlight } from "./useSpotlight"

interface SpotlightTriggerProps {
  variant?: "default" | "compact" | "icon"
  className?: string
  placeholder?: string
  showShortcut?: boolean
  config?: SpotlightOpenConfig
}

export function SpotlightTrigger({
  variant = "default",
  className,
  placeholder = "Search",
  showShortcut = true,
  config
}: SpotlightTriggerProps) {
  const { open } = useSpotlight()

  const handleClick = () => {
    open(config)
  }

  if (variant === "icon") {
    return (
      <button
        onClick={handleClick}
        className={cn(
          "inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors",
          "hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          className
        )}
        aria-label="Open search"
      >
        <SearchIcon size={20} />
      </button>
    )
  }

  if (variant === "compact") {
    return (
      <button
        onClick={handleClick}
        className={cn(
          "inline-flex items-center gap-2 rounded-lg border border-input bg-background px-3 py-2 text-sm transition-colors",
          "hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          className
        )}
      >
        <SearchIcon size={16} className="text-muted-foreground" />
        <span className="text-muted-foreground">{placeholder}</span>
        {showShortcut && (
          <kbd className="ml-auto text-xs text-muted-foreground">⌘K</kbd>
        )}
      </button>
    )
  }

  return (
    <button
      className={cn(
        "dark:bg-white/5 bg-slate-200/60 text-foreground placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-ring/50 inline-flex",
        "h-10 w-full rounded-xl border border-input px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] cursor-pointer",
        "hover:bg-accent/50",
        className
      )}
      onClick={handleClick}
    >
      <span className="flex grow items-center">
        <SearchIcon
          className="text-muted-foreground/80 -ms-1 me-3"
          size={20}
          aria-hidden="true"
        />
        <span className="text-muted-foreground/50 font-normal text-base">{placeholder}</span>
      </span>
      {showShortcut && (
        <kbd className="bg-muted text-muted-foreground/70 ms-12 -me-1 inline-flex h-5 max-h-full items-center rounded border p-1.5 font-[inherit] text-[0.75rem] font-medium">
          <span className="text-[0.75rem]">⌘</span> K
        </kbd>
      )}
    </button>
  )
}
