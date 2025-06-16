import { cn } from "@web/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const titleVariants = cva(
  "scroll-m-20 tracking-tight",
  {
    variants: {
      order: {
        1: "text-4xl font-extrabold lg:text-5xl",
        2: "text-3xl font-semibold tracking-tight",
        3: "text-2xl font-semibold tracking-tight",
        4: "text-xl font-semibold tracking-tight",
        5: "text-lg font-semibold tracking-tight",
        6: "text-base font-semibold tracking-tight",
      },
      color: {
        default: "text-foreground",
        muted: "text-muted-foreground",
        dimmed: "text-muted-foreground",
        primary: "text-primary",
        secondary: "text-secondary-foreground",
        accent: "text-accent-foreground",
        destructive: "text-destructive",
      },
    },
    defaultVariants: {
      order: 1,
      color: "default",
    },
  }
);

export interface TitleProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'color'>,
  VariantProps<typeof titleVariants> {
  order?: 1 | 2 | 3 | 4 | 5 | 6;
  fw?: number; // font-weight
  lh?: number; // line-height  
  size?: number; // font-size
  mt?: number; // margin-top
  c?: "default" | "muted" | "dimmed" | "primary" | "secondary" | "accent" | "destructive";
}

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, order = 1, color, fw, lh, size, mt, c, style, children, ...props }, ref) => {
    const Component = `h${order}` as keyof React.JSX.IntrinsicElements;

    // Handle custom styles
    let customStyle: React.CSSProperties = { ...style };
    if (fw) customStyle.fontWeight = fw;
    if (lh) customStyle.lineHeight = lh;
    if (size) customStyle.fontSize = `${size}px`;
    if (mt) customStyle.marginTop = `${mt * 0.25}rem`;

    // Handle color prop (c is shorthand for color)
    const colorValue = c || color;

    return React.createElement(
      Component,
      {
        className: cn(titleVariants({ order, color: colorValue }), className),
        style: customStyle,
        ref,
        ...props,
      },
      children
    );
  }
);
Title.displayName = "Title";

export { Title, titleVariants };
