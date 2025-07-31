"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config?: Record<string, any>
  children: React.ReactNode
}

export function ChartContainer({ 
  config, 
  children, 
  className, 
  ...props 
}: ChartContainerProps) {
  return (
    <div 
      className={cn("w-full", className)} 
      {...props}
    >
      {children}
    </div>
  )
}

export function ChartTooltip({ children, ...props }: any) {
  return <div {...props}>{children}</div>
}

export function ChartTooltipContent({ children, ...props }: any) {
  return <div {...props}>{children}</div>
} 