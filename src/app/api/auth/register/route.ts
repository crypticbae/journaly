import { NextRequest, NextResponse } from 'next/server'
import { createUser } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const registerSchema = z.object({
  email: z.string().email('Ungültige E-Mail-Adresse'),
  password: z.string().min(8, 'Passwort muss mindestens 8 Zeichen lang sein'),
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen lang sein').optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const validation = registerSchema.safeParse(body)
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Validierungsfehler', details: validation.error.issues },
        { status: 400 }
      )
    }

    const { email, password, name } = validation.data

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'Ein Benutzer mit dieser E-Mail-Adresse existiert bereits' },
        { status: 409 }
      )
    }

    // Create user (status: PENDING)
    const user = await createUser(email, password, name)

    return NextResponse.json({
      message: 'Registrierung erfolgreich! Dein Account muss noch von einem Administrator bestätigt werden.',
      userId: user.id,
      status: user.status
    }, { status: 201 })

  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Registrierung fehlgeschlagen' },
      { status: 500 }
    )
  }
} 