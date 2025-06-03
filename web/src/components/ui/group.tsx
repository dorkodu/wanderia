"use client";

import { cn } from "@web/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const groupVariants = cva(
  "flex",
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
        baseline: "items-baseline",
      },
      justify: {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly",
      },
      wrap: {
        wrap: "flex-wrap",
        nowrap: "flex-nowrap",
        "wrap-reverse": "flex-wrap-reverse",
      },
      direction: {
        row: "flex-row",
        column: "flex-col",
        "row-reverse": "flex-row-reverse",
        "column-reverse": "flex-col-reverse",
      },
    },
    defaultVariants: {
      gap: "md",
      align: "center",
      justify: "start",
      wrap: "wrap",
      direction: "row",
    },
  }
);

export interface GroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof groupVariants> {
  gap?: number | "xs" | "sm" | "md" | "lg" | "xl" | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8;
  maw?: number; // max-width
}

const Group = React.forwardRef<HTMLDivElement, GroupProps>(
  ({ className, gap, align, justify, wrap, direction, maw, style, ...props }, ref) => {
    // Handle numeric gap values
    let customStyle = style;
    if (typeof gap === "number" && gap > 8) {
      customStyle = { gap: `${gap * 0.25}rem`, ...customStyle };
    }
    if (maw) {
      customStyle = { maxWidth: maw, ...customStyle };
    }

    const gapVariant = typeof gap === "number" && gap <= 8 ? gap : typeof gap === "string" ? gap : undefined;

    return (
      <div
        className={cn(groupVariants({ gap: gapVariant, align, justify, wrap, direction }), className)}
        style={customStyle}
        ref={ref}
        {...props}
      />
    );
  }
);
Group.displayName = "Group";

export { Group, groupVariants };
