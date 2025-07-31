import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { deleteAllDataForUser } from '@/lib/database-new'

export async function POST(request: NextRequest) {
  try {
    // Session prüfen
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Nicht authentifiziert' },
        { status: 401 }
      )
    }

    console.log(`🗑️ User ${session.user.email} is clearing all their data...`)
    
    // Alle Daten für diesen spezifischen User löschen
    await deleteAllDataForUser(session.user.id)
    
    console.log(`✅ Successfully cleared all data for user: ${session.user.email}`)

    return NextResponse.json({
      success: true,
      message: 'Alle deine Trading-Daten wurden erfolgreich gelöscht.'
    })

  } catch (error) {
    console.error('Clear data error:', error)
    return NextResponse.json(
      { error: 'Fehler beim Löschen der Daten' },
      { status: 500 }
    )
  }
} 