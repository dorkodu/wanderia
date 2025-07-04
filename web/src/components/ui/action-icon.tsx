import { cn } from "@web/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

const actionIconVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: "text-white shadow-sm"
      },
      size: {
        default: "h-9 w-9",
        sm: "h-8 w-8",
        lg: "h-10 w-10",
        xl: "h-12 w-12"
      },
      color: {
        default: "",
        dark: "bg-gray-800 text-white hover:bg-gray-700",
        gray: "bg-gray-500 text-white hover:bg-gray-400",
        red: "bg-red-600 text-white hover:bg-red-500",
        "red.7": "bg-red-600 text-white hover:bg-red-500"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      color: "default"
    },
  }
)

interface ActionIconProps
  extends Omit<React.ComponentProps<"button">, "color">,
  VariantProps<typeof actionIconVariants> {
  component?: "a" | "button"
  href?: string
  target?: string
  gradient?: {
    from: string
    to: string
    deg?: number
  } | boolean
}

function ActionIcon({
  className,
  variant,
  size,
  color,
  component = "button",
  href,
  target,
  gradient,
  style,
  ...props
}: ActionIconProps) {
  const gradientStyle = gradient && typeof gradient === "object" && "from" in gradient ? {
    background: `linear-gradient(${gradient.deg || 45}deg, ${gradient.from}, ${gradient.to})`,
    ...style
  } : style

  const isGradient = gradient === true || (typeof gradient === "object" && "from" in gradient)

  if (component === "a" || href) {
    const { onClick, onMouseDown, onMouseUp, ...anchorProps } = props as any
    return (
      <a
        href={href}
        target={target}
        className={cn(actionIconVariants({
          variant: isGradient ? "gradient" : variant,
          size,
          color: color as "default" | "gray" | "red" | "dark" | "red.7" | null | undefined,
          className
        }))}
        style={gradientStyle}
        onClick={onClick}
        {...anchorProps}
      />
    )
  }

  return (
    <button
      className={cn(actionIconVariants({
        variant: isGradient ? "gradient" : variant,
        size,
        color: color as "default" | "gray" | "red" | "dark" | "red.7" | null | undefined,
        className
      }))}
      style={gradientStyle}
      {...(props as React.ComponentProps<"button">)}
    />
  )
}

export { ActionIcon, actionIconVariants }
