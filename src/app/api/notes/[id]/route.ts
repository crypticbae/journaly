import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// PATCH - Notiz Pin-Status togglen
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Nicht authentifiziert' },
        { status: 401 }
      )
    }

    const { id } = params
    const body = await request.json()
    const { action } = body

    console.log(`📝 ${action} note: ${id} for user: ${session.user.email}`)

    // Check if note exists and belongs to user
    const existingNote = await (prisma as any).tradeNote.findFirst({
      where: {
        id,
        userId: session.user.id
      }
    })

    if (!existingNote) {
      return NextResponse.json(
        { error: 'Notiz nicht gefunden oder nicht berechtigt' },
        { status: 404 }
      )
    }

    let updateData: any = {}

    if (action === 'toggle-pin') {
      updateData.isPinned = !existingNote.isPinned
    } else {
      return NextResponse.json(
        { error: 'Unbekannte Aktion' },
        { status: 400 }
      )
    }

    const note = await (prisma as any).tradeNote.update({
      where: { id },
      data: updateData,
      include: {
        trade: {
          select: {
            id: true,
            ticket: true,
            instrument: true,
            type: true,
            profit: true,
            openTime: true,
          }
        }
      }
    })

    console.log(`✅ Updated note: ${note.id} for user: ${session.user.email}`)

    return NextResponse.json({
      note,
      message: `Notiz erfolgreich ${action === 'toggle-pin' ? (note.isPinned ? 'angepinnt' : 'entpinnt') : 'aktualisiert'}`
    })
  } catch (error) {
    console.error('Error updating note:', error)
    return NextResponse.json(
      { error: 'Fehler beim Aktualisieren der Notiz' },
      { status: 500 }
    )
  }
} 