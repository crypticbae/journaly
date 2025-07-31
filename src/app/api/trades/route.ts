import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { getAllTradesForUser, getTradingStatsForUser, getTradesForAccount, getTradingStatsForAccount } from '@/lib/database-new'

export async function GET(request: NextRequest) {
  try {
    // Session prüfen
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Nicht authentifiziert' },
        { status: 401 }
      )
    }

    // Account-Filter aus Query Parameters
    const { searchParams } = new URL(request.url)
    const accountId = searchParams.get('accountId')

    console.log(`📊 Fetching trades for user: ${session.user.email}`)
    console.log(`📊 Account filter: ${accountId || 'all accounts'}`)

    let trades, stats

    if (accountId && accountId !== 'all') {
      // Trades für spezifischen Account
      trades = await getTradesForAccount(accountId, session.user.id)
      stats = await getTradingStatsForAccount(accountId, session.user.id)
      console.log(`✅ Found ${trades.length} trades for account: ${accountId}`)
    } else {
      // Alle Trades für User
      trades = await getAllTradesForUser(session.user.id)
      stats = await getTradingStatsForUser(session.user.id)
      console.log(`✅ Found ${trades.length} trades for user: ${session.user.email}`)
    }

    return NextResponse.json({
      trades,
      stats,
      accountId: accountId || 'all',
      user: {
        id: session.user.id,
        email: session.user.email
      }
    })
  } catch (error) {
    console.error('Error fetching user trades:', error)
    return NextResponse.json(
      { error: 'Fehler beim Laden der Trades' },
      { status: 500 }
    )
  }
} 