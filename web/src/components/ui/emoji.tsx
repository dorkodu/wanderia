import { cn } from "@web/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const emojiVariants = cva(
  "inline-flex items-center justify-center",
  {
    variants: {
      size: {
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
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface EmojiProps
  extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof emojiVariants> {
  emoji: string;
  size?: number | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
}

const Emoji = React.forwardRef<HTMLSpanElement, EmojiProps>(
  ({ className, emoji, size, style, ...props }, ref) => {
    // Handle numeric size values
    const customStyle = typeof size === "number" ? { fontSize: `${size}px`, ...style } : style;
    const sizeVariant = typeof size === "number" ? undefined : size;

    return (
      <span
        className={cn(emojiVariants({ size: sizeVariant }), className)}
        style={customStyle}
        ref={ref}
        role="img"
        aria-label={emoji}
        {...props}
      >
        {emoji}
      </span>
    );
  }
);
Emoji.displayName = "Emoji";

export { Emoji, emojiVariants };
