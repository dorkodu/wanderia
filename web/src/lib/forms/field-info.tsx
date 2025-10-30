import type { AnyFieldApi } from "@tanstack/react-form";
import type { ReactNode } from "react";

export function FieldInfo({ field, info }: { field: AnyFieldApi, info?: ReactNode }) {
  return (
    <>
      {field.state.meta.isTouched && !field.state.meta.isValid ?
        <p className="text-sm text-red-500">{field.state.meta.errors.join(',')}</p>
        : null}
      {info &&
        <p className="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
          {info}
        </p>
      }
    </>
  )
}
