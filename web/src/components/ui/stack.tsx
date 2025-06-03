"use client";

import { cn } from "@web/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const stackVariants = cva(
  "flex flex-col",
  {
    variants: {
      gap: {
        0: "gap-0",
        1: "gap-1",
        2: "gap-2",
        3: "gap-3",
        4: "gap-4",
        5: "gap-5",
        6: "gap-6",
        8: "gap-8",
        xs: "gap-1",
        sm: "gap-2",
        md: "gap-4",
        lg: "gap-6",
        xl: "gap-8",
      },
      align: {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
      },
      justify: {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly",
      },
    },
    defaultVariants: {
      gap: "md",
      align: "stretch",
      justify: "start",
    },
  }
);

export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof stackVariants> {
  gap?: number | "xs" | "sm" | "md" | "lg" | "xl" | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8;
}

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ className, gap, align, justify, style, ...props }, ref) => {
    // Handle numeric gap values
    const customStyle = typeof gap === "number" && gap > 8 ? { gap: `${gap * 0.25}rem`, ...style } : style;
    const gapVariant = typeof gap === "number" && gap <= 8 ? gap : typeof gap === "string" ? gap : undefined;

    return (
      <div
        className={cn(stackVariants({ gap: gapVariant, align, justify }), className)}
        style={customStyle}
        ref={ref}
        {...props}
      />
    );
  }
);
Stack.displayName = "Stack";

export { Stack, stackVariants };
