import NextAuth from "next-auth"
import { UserRole, UserStatus } from "@/generated/prisma"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      email: string
      name?: string | null
      role: UserRole
      status: UserStatus
    }
  }

  interface User {
    role: UserRole
    status: UserStatus
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: UserRole
    status: UserStatus
  }
} 