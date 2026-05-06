import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva("relative w-full rounded-2xl border p-4 text-sm font-light", {
  variants: {
    variant: {
      default: "border-border bg-surface text-foreground",
      destructive: "border-destructive/40 bg-red-950/40 text-red-200",
      success: "border-red-400/30 bg-brand-light text-red-100",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return <div role="alert" className={cn(alertVariants({ variant }), className)} {...props} />;
}

function AlertTitle({ className, ...props }: React.ComponentProps<"h5">) {
  return <h5 className={cn("mb-1 font-normal leading-none tracking-tight", className)} {...props} />;
}

function AlertDescription({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("text-sm leading-6", className)} {...props} />;
}

export { Alert, AlertTitle, AlertDescription };
