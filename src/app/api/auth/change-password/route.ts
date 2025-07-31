import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { z } from 'zod'

const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, 'Aktuelles Passwort ist erforderlich'),
  newPassword: z.string().min(8, 'Neues Passwort muss mindestens 8 Zeichen lang sein'),
  confirmPassword: z.string()
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwörter stimmen nicht überein",
  path: ["confirmPassword"]
})

export async function POST(request: NextRequest) {
  try {
    // Check if user is authenticated
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Nicht autorisiert' },
        { status: 401 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validation = changePasswordSchema.safeParse(body)
    
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Ungültige Daten', details: validation.error.errors },
        { status: 400 }
      )
    }

    const { currentPassword, newPassword } = validation.data

    // Get user from database
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'Benutzer nicht gefunden' },
        { status: 404 }
      )
    }

    // Verify current password
    const isCurrentPasswordValid = await bcrypt.compare(currentPassword, user.password)
    if (!isCurrentPasswordValid) {
      return NextResponse.json(
        { error: 'Aktuelles Passwort ist falsch' },
        { status: 400 }
      )
    }

    // Hash new password
    const hashedNewPassword = await bcrypt.hash(newPassword, 12)

    // Update password in database
    await prisma.user.update({
      where: { email: session.user.email },
      data: { password: hashedNewPassword }
    })

    return NextResponse.json({
      message: 'Passwort erfolgreich geändert'
    })

  } catch (error) {
    console.error('Error changing password:', error)
    return NextResponse.json(
      { error: 'Interner Server-Fehler' },
      { status: 500 }
    )
  }
} 