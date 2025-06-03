import { cn } from "@web/lib/utils"
import * as React from "react"

// Box - Generic container component
interface BoxProps extends React.ComponentProps<"div"> {
  component?: React.ElementType
}

function Box({ className, component: Component = "div", ...props }: BoxProps) {
  return <Component className={cn("", className)} {...props} />
}

// Stack - Vertical flex layout with gap
interface StackProps extends React.ComponentProps<"div"> {
  gap?: number | string
  align?: "start" | "center" | "end" | "stretch"
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly"
}

function Stack({
  className,
  gap = 4,
  align = "stretch",
  justify = "start",
  ...props
}: StackProps) {
  const gapClass = typeof gap === "number" ? `gap-${gap}` : gap
  const alignClass = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch"
  }[align]
  const justifyClass = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly"
  }[justify]

  return (
    <div
      className={cn("flex flex-col", gapClass, alignClass, justifyClass, className)}
      {...props}
    />
  )
}

// Group - Horizontal flex layout with gap
interface GroupProps extends React.ComponentProps<"div"> {
  gap?: number | string
  align?: "start" | "center" | "end" | "stretch"
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly"
  wrap?: "wrap" | "nowrap" | "wrap-reverse"
}

function Group({
  className,
  gap = 4,
  align = "center",
  justify = "start",
  wrap = "wrap",
  ...props
}: GroupProps) {
  const gapClass = typeof gap === "number" ? `gap-${gap}` : gap
  const alignClass = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch"
  }[align]
  const justifyClass = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly"
  }[justify]
  const wrapClass = {
    wrap: "flex-wrap",
    nowrap: "flex-nowrap",
    "wrap-reverse": "flex-wrap-reverse"
  }[wrap]

  return (
    <div
      className={cn("flex", gapClass, alignClass, justifyClass, wrapClass, className)}
      {...props}
    />
  )
}

// SimpleGrid - Responsive grid layout
interface SimpleGridProps extends React.ComponentProps<"div"> {
  cols?: number | { base?: number; sm?: number; md?: number; lg?: number; xl?: number }
  spacing?: number | string
}

function SimpleGrid({
  className,
  cols = 1,
  spacing = 4,
  ...props
}: SimpleGridProps) {
  let gridClass = ""

  if (typeof cols === "number") {
    gridClass = `grid-cols-${cols}`
  } else {
    const classes: string[] = []
    if (cols.base) classes.push(`grid-cols-${cols.base}`)
    if (cols.sm) classes.push(`sm:grid-cols-${cols.sm}`)
    if (cols.md) classes.push(`md:grid-cols-${cols.md}`)
    if (cols.lg) classes.push(`lg:grid-cols-${cols.lg}`)
    if (cols.xl) classes.push(`xl:grid-cols-${cols.xl}`)
    gridClass = classes.join(" ")
  }

  const spacingClass = typeof spacing === "number" ? `gap-${spacing}` : spacing

  return (
    <div
      className={cn("grid", gridClass, spacingClass, className)}
      {...props}
    />
  )
}

// Flex - Flexbox container
interface FlexProps extends React.ComponentProps<"div"> {
  direction?: "row" | "column" | "row-reverse" | "column-reverse"
  align?: "start" | "center" | "end" | "stretch"
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly"
  wrap?: "wrap" | "nowrap" | "wrap-reverse"
  gap?: number | string
}

function Flex({
  className,
  direction = "row",
  align = "stretch",
  justify = "start",
  wrap = "nowrap",
  gap,
  ...props
}: FlexProps) {
  const directionClass = {
    row: "flex-row",
    column: "flex-col",
    "row-reverse": "flex-row-reverse",
    "column-reverse": "flex-col-reverse"
  }[direction]

  const alignClass = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch"
  }[align]

  const justifyClass = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly"
  }[justify]

  const wrapClass = {
    wrap: "flex-wrap",
    nowrap: "flex-nowrap",
    "wrap-reverse": "flex-wrap-reverse"
  }[wrap]

  const gapClass = gap ? (typeof gap === "number" ? `gap-${gap}` : gap) : ""

  return (
    <div
      className={cn("flex", directionClass, alignClass, justifyClass, wrapClass, gapClass, className)}
      {...props}
    />
  )
}

export { Box, Flex, Group, SimpleGrid, Stack }
