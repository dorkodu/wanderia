import { cn } from "@web/lib/utils"
import * as React from "react"

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  radius?: number | string // border-radius
  w?: number | string // width
  h?: number | string // height
  mx?: string | number // margin-x
  my?: string | number // margin-y
  maw?: number | string // max-width
  mah?: number | string // max-height
  fit?: React.CSSProperties["objectFit"] // object-fit
  alt?: string
  loading?: "eager" | "lazy"
}

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      className,
      style,
      radius = "lg",
      w,
      h,
      mx,
      my,
      maw,
      mah,
      fit = "cover",
      alt = "",
      loading = "lazy",
      ...props
    },
    ref
  ) => {
    const width = typeof w === "number" ? `${w}px` : w
    const height = typeof h === "number" ? `${h}px` : h
    const borderRadius = typeof radius === "number" ? `${radius}px` : radius
    const marginX = typeof mx === "number" ? `${mx}px` : mx
    const marginY = typeof my === "number" ? `${my}px` : my

    return (
      <img
        ref={ref}
        alt={alt}
        loading={loading}
        className={cn(className, `rounded-${typeof radius === "string" ? radius : "[" + radius + "]"}`)}
        style={{
          width,
          height,
          borderRadius,
          marginLeft: marginX,
          marginRight: marginX,
          marginTop: marginY,
          marginBottom: marginY,
          maxWidth: maw,
          maxHeight: mah,
          objectFit: fit,
          ...style,
        }}
        {...props}
      />
    )
  }
)
Image.displayName = "Image"
