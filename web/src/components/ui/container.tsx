"use client";

import { cn } from "@web/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const containerVariants = cva(
  "mx-auto px-4",
  {
    variants: {
      size: {
        sm: "max-w-screen-sm",
        md: "max-w-screen-md",
        lg: "max-w-screen-lg",
        xl: "max-w-screen-xl",
        "2xl": "max-w-screen-2xl",
        xs: "max-w-xs",
        fluid: "max-w-none",
      },
    },
    defaultVariants: {
      size: "lg",
    },
  }
);

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
  Omit<VariantProps<typeof containerVariants>, "size"> {
  size?: number | "sm" | "md" | "lg" | "xl" | "2xl" | "xs" | "fluid";
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, style, ...props }, ref) => {
    // Handle numeric size values
    const customStyle = typeof size === "number" ? { maxWidth: size, ...style } : style;
    const sizeVariant = typeof size === "number" ? undefined : size;

    return (
      <div
        className={cn(containerVariants({ size: sizeVariant }), className)}
        style={customStyle}
        ref={ref}
        {...props}
      />
    );
  }
);
Container.displayName = "Container";

export { Container, containerVariants };
