import { cn } from "@web/lib/utils"
import * as React from "react"

interface TextProps extends React.ComponentProps<"p"> {
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  weight?: "normal" | "medium" | "semibold" | "bold"
  color?: "default" | "muted" | "destructive" | "success" | "warning"
  component?: React.ElementType
}

const sizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl"
}

const weightClasses = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold"
}

const colorClasses = {
  default: "text-foreground",
  muted: "text-muted-foreground",
  destructive: "text-destructive",
  success: "text-green-600",
  warning: "text-yellow-600"
}

function Text({
  className,
  size = "md",
  weight = "normal",
  color = "default",
  component: Component = "p",
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(
        sizeClasses[size],
        weightClasses[weight],
        colorClasses[color],
        className
      )}
      {...props}
    />
  )
}

export { Text }
