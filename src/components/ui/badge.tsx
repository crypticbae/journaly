"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "primary" | "accent" | "neutral" | "info" | "success" | "warning" | "error" | "ghost"
  size?: "xs" | "sm" | "md" | "lg"
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const baseClasses = "badge"
    
    const variantClasses = {
      default: "badge-neutral",
      secondary: "badge-secondary",
      destructive: "badge-error",
      outline: "badge-outline",
      primary: "badge-primary",
      accent: "badge-accent",
      neutral: "badge-neutral",
      info: "badge-info",
      success: "badge-success",
      warning: "badge-warning",
      error: "badge-error",
      ghost: "badge-ghost"
    }

    const sizeClasses = {
      xs: "badge-xs",
      sm: "badge-sm",
      md: "",
      lg: "badge-lg"
    }

    return (
      <div
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      />
    )
  }
)
Badge.displayName = "Badge"

export { Badge } 