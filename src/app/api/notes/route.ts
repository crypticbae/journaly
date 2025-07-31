import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// GET - Alle Notizen für User
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Nicht authentifiziert' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    const tradeId = searchParams.get('tradeId')
    const category = searchParams.get('category')
    const pinnedOnly = searchParams.get('pinnedOnly') === 'true'

    console.log(`📝 Fetching notes for user: ${session.user.email}`)

    // Build where clause
    const where: any = {
      userId: session.user.id
    }

    if (tradeId) {
      where.tradeId = tradeId
    }

    if (category && category !== 'all') {
      where.category = category
    }

    if (pinnedOnly) {
      where.isPinned = true
    }

    const notes = await (prisma as any).tradeNote.findMany({
      where,
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
      },
      orderBy: [
        { isPinned: 'desc' },
        { createdAt: 'desc' }
      ]
    })

    console.log(`✅ Found ${notes.length} notes for user: ${session.user.email}`)

    return NextResponse.json({
      notes,
      user: {
        id: session.user.id,
        email: session.user.email
      }
    })
  } catch (error) {
    console.error('Error fetching notes:', error)
    return NextResponse.json(
      { error: 'Fehler beim Laden der Notizen' },
      { status: 500 }
    )
  }
}

// POST - Neue Notiz erstellen
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Nicht authentifiziert' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { 
      title, 
      content, 
      tradeId, 
      convictionBefore, 
      emotionAfter, 
      category, 
      tags, 
      isPrivate, 
      isPinned 
    } = body

    // Validation
    if (!title || !content) {
      return NextResponse.json(
        { error: 'Titel und Inhalt sind erforderlich' },
        { status: 400 }
      )
    }

    console.log(`📝 Creating note for user: ${session.user.email}`)

    // Validate tradeId exists and belongs to user if provided
    if (tradeId) {
      const trade = await prisma.trade.findFirst({
        where: {
          id: tradeId,
          tradingAccount: {
            userId: session.user.id
          }
        }
      })

      if (!trade) {
        return NextResponse.json(
          { error: 'Trade nicht gefunden oder nicht berechtigt' },
          { status: 404 }
        )
      }
    }

    const note = await (prisma as any).tradeNote.create({
      data: {
        title: title.trim(),
        content: content.trim(),
        userId: session.user.id,
        tradeId: tradeId || null,
        convictionBefore: convictionBefore ? parseInt(convictionBefore) : null,
        emotionAfter: emotionAfter ? parseInt(emotionAfter) : null,
        category: category?.trim() || null,
        tags: tags?.trim() || null,
        isPrivate: Boolean(isPrivate),
        isPinned: Boolean(isPinned)
      },
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

    console.log(`✅ Created note: ${note.id} for user: ${session.user.email}`)

    return NextResponse.json({
      note,
      message: 'Notiz erfolgreich erstellt'
    }, { status: 201 })
  } catch (error) {
    console.error('Error creating note:', error)
    return NextResponse.json(
      { error: 'Fehler beim Erstellen der Notiz' },
      { status: 500 }
    )
  }
}

// PUT - Notiz aktualisieren
export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Nicht authentifiziert' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { 
      id,
      title, 
      content, 
      tradeId, 
      convictionBefore, 
      emotionAfter, 
      category, 
      tags, 
      isPrivate, 
      isPinned 
    } = body

    // Validation
    if (!id || !title || !content) {
      return NextResponse.json(
        { error: 'ID, Titel und Inhalt sind erforderlich' },
        { status: 400 }
      )
    }

    console.log(`📝 Updating note: ${id} for user: ${session.user.email}`)

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

    // Validate tradeId exists and belongs to user if provided
    if (tradeId) {
      const trade = await prisma.trade.findFirst({
        where: {
          id: tradeId,
          tradingAccount: {
            userId: session.user.id
          }
        }
      })

      if (!trade) {
        return NextResponse.json(
          { error: 'Trade nicht gefunden oder nicht berechtigt' },
          { status: 404 }
        )
      }
    }

    const note = await (prisma as any).tradeNote.update({
      where: { id },
      data: {
        title: title.trim(),
        content: content.trim(),
        tradeId: tradeId || null,
        convictionBefore: convictionBefore ? parseInt(convictionBefore) : null,
        emotionAfter: emotionAfter ? parseInt(emotionAfter) : null,
        category: category?.trim() || null,
        tags: tags?.trim() || null,
        isPrivate: Boolean(isPrivate),
        isPinned: Boolean(isPinned)
      },
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
      message: 'Notiz erfolgreich aktualisiert'
    })
  } catch (error) {
    console.error('Error updating note:', error)
    return NextResponse.json(
      { error: 'Fehler beim Aktualisieren der Notiz' },
      { status: 500 }
    )
  }
}

// DELETE - Notiz löschen
export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Nicht authentifiziert' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { error: 'Notiz-ID ist erforderlich' },
        { status: 400 }
      )
    }

    console.log(`📝 Deleting note: ${id} for user: ${session.user.email}`)

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

    await (prisma as any).tradeNote.delete({
      where: { id }
    })

    console.log(`✅ Deleted note: ${id} for user: ${session.user.email}`)

    return NextResponse.json({
      message: 'Notiz erfolgreich gelöscht'
    })
  } catch (error) {
    console.error('Error deleting note:', error)
    return NextResponse.json(
      { error: 'Fehler beim Löschen der Notiz' },
      { status: 500 }
    )
  }
} 