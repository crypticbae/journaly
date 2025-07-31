import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { getDailyPnLForUser } from '@/lib/database-new'

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Nicht authentifiziert' },
        { status: 401 }
      )
    }

    // URL-Parameter für Datum-Range und Account-Filter
    const { searchParams } = new URL(request.url)
    const startDate = searchParams.get('startDate')
    const endDate = searchParams.get('endDate')
    const accountId = searchParams.get('accountId')

    console.log(`📅 Fetching calendar data for user: ${session.user.email}`)
    console.log(`📅 Date range: ${startDate} to ${endDate}`)
    console.log(`📅 Account filter: ${accountId || 'all accounts'}`)

    // Tägliche P/L-Daten für den User holen
    const dailyPnL = await getDailyPnLForUser(session.user.id, startDate, endDate, accountId)

    console.log(`✅ Found ${dailyPnL.length} daily P/L entries`)
    console.log('📊 Sample data:', dailyPnL.slice(0, 3))

    return NextResponse.json({
      dailyPnL,
      user: {
        id: session.user.id,
        email: session.user.email
      }
    })
  } catch (error) {
    console.error('Error fetching calendar data:', error)
    return NextResponse.json(
      { error: 'Fehler beim Laden der Kalender-Daten' },
      { status: 500 }
    )
  }
} 