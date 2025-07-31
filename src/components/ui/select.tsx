"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  variant?: "bordered" | "ghost" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error"
  selectSize?: "xs" | "sm" | "md" | "lg"
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, variant = "bordered", selectSize = "md", children, ...props }, ref) => {
    const baseClasses = "select w-full"
    
    const variantClasses = {
      bordered: "select-bordered",
      ghost: "select-ghost",
      primary: "select-primary",
      secondary: "select-secondary",
      accent: "select-accent",
      info: "select-info",
      success: "select-success",
      warning: "select-warning",
      error: "select-error"
    }

    const sizeClasses = {
      xs: "select-xs",
      sm: "select-sm",
      md: "",
      lg: "select-lg"
    }

    return (
      <select
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[selectSize],
          className
        )}
        {...props}
      >
        {children}
      </select>
    )
  }
)
Select.displayName = "Select"

const SelectContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>
    {children}
  </div>
))
SelectContent.displayName = "SelectContent"

const SelectItem = React.forwardRef<
  HTMLOptionElement,
  React.OptionHTMLAttributes<HTMLOptionElement>
>(({ className, children, ...props }, ref) => (
  <option
    ref={ref}
    className={cn("", className)}
    {...props}
  >
    {children}
  </option>
))
SelectItem.displayName = "SelectItem"

const SelectTrigger = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & SelectProps
>(({ className, variant = "bordered", selectSize = "md", children, ...props }, ref) => {
  const baseClasses = "select w-full"
  
  const variantClasses = {
    bordered: "select-bordered",
    ghost: "select-ghost",
    primary: "select-primary",
    secondary: "select-secondary",
    accent: "select-accent",
    info: "select-info",
    success: "select-success",
    warning: "select-warning",
    error: "select-error"
  }

  const sizeClasses = {
    xs: "select-xs",
    sm: "select-sm",
    md: "",
    lg: "select-lg"
  }

  return (
    <div
      ref={ref}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[selectSize],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})
SelectTrigger.displayName = "SelectTrigger"

const SelectValue = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & { placeholder?: string }
>(({ className, placeholder, children, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("", className)}
    {...props}
  >
    {children || placeholder}
  </span>
))
SelectValue.displayName = "SelectValue"

export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } 