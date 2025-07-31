"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "neutral" | "ghost" | "link" | "outline" | "error" | "warning" | "success" | "info"
  size?: "xs" | "sm" | "md" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseClasses = "btn"
    
    const variantClasses = {
      primary: "btn-primary",
      secondary: "btn-secondary", 
      accent: "btn-accent",
      neutral: "btn-neutral",
      ghost: "btn-ghost",
      link: "btn-link",
      outline: "btn-outline",
      error: "btn-error",
      warning: "btn-warning",
      success: "btn-success",
      info: "btn-info"
    }

    const sizeClasses = {
      xs: "btn-xs",
      sm: "btn-sm", 
      md: "",
      lg: "btn-lg"
    }

    return (
      <button
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button } 