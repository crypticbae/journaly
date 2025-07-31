"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ProgressProps extends React.HTMLAttributes<HTMLProgressElement> {
  value?: number
  max?: number
  variant?: "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error"
}

const Progress = React.forwardRef<HTMLProgressElement, ProgressProps>(
  ({ className, value = 0, max = 100, variant = "primary", ...props }, ref) => {
    const variantClasses = {
      primary: "progress-primary",
      secondary: "progress-secondary",
      accent: "progress-accent",
      info: "progress-info",
      success: "progress-success",
      warning: "progress-warning",
      error: "progress-error"
    }

    return (
      <progress
        ref={ref}
        className={cn(
          "progress w-full",
          variantClasses[variant],
          className
        )}
        value={value}
        max={max}
        {...props}
      />
    )
  }
)
Progress.displayName = "Progress"

export { Progress } 