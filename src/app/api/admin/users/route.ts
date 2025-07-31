import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions, getPendingUsers, approveUser, rejectUser } from '@/lib/auth'
import { UserRole } from '@/generated/prisma'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session || session.user.role !== UserRole.ADMIN) {
      return NextResponse.json(
        { error: 'Zugriff verweigert. Admin-Rechte erforderlich.' },
        { status: 403 }
      )
    }

    const pendingUsers = await getPendingUsers()
    
    return NextResponse.json({ users: pendingUsers })
  } catch (error) {
    console.error('Error fetching pending users:', error)
    return NextResponse.json(
      { error: 'Fehler beim Laden der wartenden Benutzer' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session || session.user.role !== UserRole.ADMIN) {
      return NextResponse.json(
        { error: 'Zugriff verweigert. Admin-Rechte erforderlich.' },
        { status: 403 }
      )
    }

    const { action, userId, reason } = await request.json()

    if (!userId || !action) {
      return NextResponse.json(
        { error: 'userId und action sind erforderlich' },
        { status: 400 }
      )
    }

    if (action === 'approve') {
      const user = await approveUser(userId, session.user.id)
      return NextResponse.json({ 
        message: 'Benutzer erfolgreich genehmigt',
        user: {
          id: user.id,
          email: user.email,
          status: user.status
        }
      })
    } else if (action === 'reject') {
      const user = await rejectUser(userId, reason)
      return NextResponse.json({ 
        message: 'Benutzer abgelehnt',
        user: {
          id: user.id,
          email: user.email,
          status: user.status
        }
      })
    } else {
      return NextResponse.json(
        { error: 'Ungültige Aktion. Erlaubt: approve, reject' },
        { status: 400 }
      )
    }

  } catch (error) {
    console.error('Error managing user:', error)
    return NextResponse.json(
      { error: 'Fehler bei der Benutzerverwaltung' },
      { status: 500 }
    )
  }
} 