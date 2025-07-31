import { NextAuthOptions } from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { prisma } from "./prisma"
import { UserRole, UserStatus } from "@/generated/prisma"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        if (!user) {
          return null
        }

        // Check if user is approved
        if (user.status !== UserStatus.APPROVED) {
          throw new Error(`Account status: ${user.status.toLowerCase()}. Please contact admin.`)
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if (!isPasswordValid) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          status: user.status,
        }
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.status = user.status
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!
        session.user.role = token.role as UserRole
        session.user.status = token.status as UserStatus
      }
      return session
    }
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error"
  }
}

// Helper functions for user management
export async function createUser(email: string, password: string, name?: string) {
  const hashedPassword = await bcrypt.hash(password, 12)
  
  return await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
      status: UserStatus.PENDING, // Requires admin approval
    }
  })
}

export async function approveUser(userId: string, approvedBy: string) {
  return await prisma.user.update({
    where: { id: userId },
    data: {
      status: UserStatus.APPROVED,
      approvedAt: new Date(),
      approvedBy,
    }
  })
}

export async function rejectUser(userId: string, reason?: string) {
  return await prisma.user.update({
    where: { id: userId },
    data: {
      status: UserStatus.REJECTED,
      rejectedAt: new Date(),
      rejectionReason: reason,
    }
  })
}

export async function getPendingUsers() {
  return await prisma.user.findMany({
    where: {
      status: UserStatus.PENDING
    },
    select: {
      id: true,
      email: true,
      name: true,
      registeredAt: true,
    },
    orderBy: {
      registeredAt: 'asc'
    }
  })
} 