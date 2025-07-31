"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "bordered" | "ghost" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error"
  inputSize?: "xs" | "sm" | "md" | "lg"
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = "bordered", inputSize = "md", ...props }, ref) => {
    const baseClasses = "input w-full"
    
    const variantClasses = {
      bordered: "input-bordered",
      ghost: "input-ghost",
      primary: "input-primary",
      secondary: "input-secondary",
      accent: "input-accent",
      info: "input-info",
      success: "input-success",
      warning: "input-warning",
      error: "input-error"
    }

    const sizeClasses = {
      xs: "input-xs",
      sm: "input-sm",
      md: "",
      lg: "input-lg"
    }

    return (
      <input
        type={type}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[inputSize],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input } 