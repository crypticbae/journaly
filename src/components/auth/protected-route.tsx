"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { ReactNode, useEffect } from "react"

interface ProtectedRouteProps {
  children: ReactNode
  adminOnly?: boolean
}

export function ProtectedRoute({ children, adminOnly = false }: ProtectedRouteProps) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "loading") return // Still loading

    if (!session) {
      router.push("/auth")
      return
    }

    if (adminOnly && session.user.role !== "ADMIN") {
      router.push("/dashboard") // Redirect non-admins to dashboard
      return
    }
  }, [session, status, router, adminOnly])

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <span className="loading loading-spinner loading-lg text-primary"></span>
          <p className="text-base-content/60">Laden...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return null // Will redirect
  }

  if (adminOnly && session.user.role !== "ADMIN") {
    return null // Will redirect
  }

  return <>{children}</>
} 