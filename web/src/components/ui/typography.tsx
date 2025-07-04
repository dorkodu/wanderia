import { cn } from "@web/lib/utils"
import * as React from "react"

// Typography components
interface TitleProps extends React.ComponentProps<"h1"> {
  order?: 1 | 2 | 3 | 4 | 5 | 6
  size?: number | string
  fw?: number
  lh?: number
}

function Title({
  className,
  order = 1,
  size,
  fw,
  lh,
  ...props
}: TitleProps) {
  const Component = `h${order}` as React.ElementType

  const sizeClasses = {
    1: "text-4xl",
    2: "text-3xl",
    3: "text-2xl",
    4: "text-xl",
    5: "text-lg",
    6: "text-base"
  }[order]

  const fontWeight = fw ? `font-[${fw}]` : "font-semibold"
  const lineHeight = lh ? `leading-[${lh}]` : ""
  const fontSize = size ? (typeof size === "number" ? `text-[${size}px]` : size) : ""

  return (
    <Component
      className={cn(
        sizeClasses,
        fontWeight,
        lineHeight,
        fontSize,
        "tracking-tight",
        className
      )}
      {...props}
    />
  )
}

interface TextProps extends React.ComponentProps<"p"> {
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  fw?: number
  c?: string
  lh?: number
  span?: boolean
  inherit?: boolean
}

function Text({
  className,
  size = "md",
  fw,
  c,
  lh,
  span,
  inherit,
  ...props
}: TextProps) {
  const Component = span ? "span" : "p"

  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl"
  }[size]

  const fontWeight = fw ? `font-[${fw}]` : ""
  const lineHeight = lh ? `leading-[${lh}]` : ""
  const color = c === "dimmed" ? "text-muted-foreground" : c ? `text-[${c}]` : ""

  return (
    <Component
      className={cn(
        inherit ? "" : sizeClasses,
        fontWeight,
        lineHeight,
        color,
        className
      )}
      {...props}
    />
  )
}

export { Text, Title }

