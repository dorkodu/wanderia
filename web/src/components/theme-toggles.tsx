import { useId } from "react";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "@web/components/theme-provider";
import { Switch } from "@web/components/ui/switch";
import { Toggle } from "@web/components/ui/toggle";

export function ThemeSwitch() {
  const id = useId();
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative inline-grid h-9 grid-cols-[1fr_1fr] items-center text-sm font-medium">
      <Switch
        id={id}
        checked={theme === "dark"}
        onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="peer data-[state=checked]:bg-input/30 data-[state=unchecked]:bg-input/50 absolute inset-0 h-[inherit] w-auto [&_span]:h-full [&_span]:w-1/2 [&_span]:transition-transform [&_span]:duration-300 [&_span]:ease-[cubic-bezier(0.16,1,0.3,1)] [&_span]:data-[state=checked]:translate-x-full [&_span]:data-[state=checked]:rtl:-translate-x-full"
      />
      <span className="peer-data-[state=checked]:text-muted-foreground/70 pointer-events-none relative ms-0.5 flex min-w-8 items-center justify-center text-center">
        <IconSun className="size-5" aria-hidden="true" />
      </span>
      <span className="peer-data-[state=unchecked]:text-muted-foreground/70 pointer-events-none relative me-0.5 flex min-w-8 items-center justify-center text-center">
        <IconMoon className="size-5" aria-hidden="true" />
      </span>
    </div>
  )
}

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Toggle
        variant="outline"
        className="group data-[state=on]:hover:bg-muted size-9 data-[state=on]:bg-transparent cursor-pointer"
        pressed={theme === "dark"}
        onPressedChange={() =>
          setTheme(theme === "dark" ? "light" : "dark")
        }
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        {/* Note: After dark mode implementation, rely on dark: prefix rather than group-data-[state=on]: */}
        <IconMoon
          size={18}
          className="shrink-0 scale-0 opacity-0 transition-all dark:scale-100 dark:opacity-100"
          aria-hidden="true"
        />
        <IconSun
          size={18}
          className="absolute shrink-0 scale-100 opacity-100 transition-all dark:scale-0 dark:opacity-0"
          aria-hidden="true"
        />
      </Toggle>
    </div>
  )
}
