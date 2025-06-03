"use client";

import { cn } from "@web/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const textVariants = cva(
  "", // Base classes can be added here if needed
  {
    variants: {
      size: {
        inherit: "",
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
        "4xl": "text-4xl",
        "5xl": "text-5xl",
      },
      weight: {
        inherit: "",
        thin: "font-thin",
        extralight: "font-extralight",
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
        extrabold: "font-extrabold",
        black: "font-black",
      },
      color: {
        default: "text-foreground",
        muted: "text-muted-foreground",
        primary: "text-primary",
        secondary: "text-secondary-foreground", // Assuming text on secondary bg
        accent: "text-accent-foreground", // Assuming text on accent bg
        destructive: "text-destructive",
        inherit: "text-current",
      },
      align: {
        inherit: "",
        left: "text-left",
        center: "text-center",
        right: "text-right",
        justify: "text-justify",
      },
      transform: {
        inherit: "",
        uppercase: "uppercase",
        lowercase: "lowercase",
        capitalize: "capitalize",
        none: "normal-case",
      },
      italic: {
        true: "italic",
      },
      underline: {
        true: "underline",
      },
      truncate: {
        true: "truncate",
      },
    },
    defaultVariants: {
      size: "inherit",
      weight: "inherit",
      color: "default",
      align: "inherit",
      transform: "inherit",
    },
  }
);

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">, // Using HTMLElement for broader compatibility with `as` prop
  VariantProps<typeof textVariants> {
  as?:
  | "p"
  | "span"
  | "div"
  | "label"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "figcaption"
  | "blockquote";
  lineClamp?: number;
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      className,
      as: Component = "p",
      size,
      weight,
      color,
      align,
      transform,
      italic,
      underline,
      truncate,
      lineClamp,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const lineClampStyle = lineClamp
      ? {
        display: "-webkit-box",
        WebkitBoxOrient: "vertical" as React.CSSProperties['WebkitBoxOrient'],
        WebkitLineClamp: lineClamp,
        overflow: "hidden",
      }
      : {};

    const combinedStyle = lineClamp ? { ...style, ...lineClampStyle } : style;

    return (
      <Component
        className={cn(
          textVariants({
            size,
            weight,
            color,
            align,
            transform,
            italic,
            underline,
            truncate,
            // className from variants is implicitly handled by cva
          }),
          className
        )}
        style={combinedStyle}
        ref={ref as any} // Using `as any` for simplicity with polymorphic `as` prop.
        // For stricter typing, this would require more complex generic patterns.
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Text.displayName = "Text";

export { Text, textVariants };
