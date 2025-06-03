import { cn } from "@web/lib/utils";
import type * as React from "react";
import { useMemo } from "react";
import twemoji from "twemoji";

interface Props {
  emoji: string;
  size?: number;
}

export default function Emoji({
  emoji,
  size = 32,
  className,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement> & Props) {
  const src = useMemo(() => {
    const element = document.createElement("div");
    element.innerHTML = twemoji.parse(emoji, {
      ext: ".svg",
      folder: "svg",
      base: "https://cdn.jsdelivr.net/gh/twitter/twemoji@v14.0.2/assets/",
    });
    return (element.firstChild as HTMLImageElement).src;
  }, [emoji]);

  return (
    <img
      src={src}
      alt={emoji}
      draggable={false}
      width={size}
      height={size}
      className={cn("inline align-[-0.125em] select-none", className)}
      style={{ width: size, height: size, ...props.style }}
      {...props}
    />
  );
}
