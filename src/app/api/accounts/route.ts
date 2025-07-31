import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { createTradingAccount, getUserTradingAccounts } from '@/lib/database-new'
import { z } from 'zod'

const createAccountSchema = z.object({
  name: z.string().min(1, 'Account-Name ist erforderlich'),
  description: z.string().optional(),
  accountNumber: z.string().min(1, 'Account-Nummer ist erforderlich'),
  brokerName: z.string().optional(),
  currency: z.string().default('USD'),
  isDefault: z.boolean().optional()
})

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Nicht authentifiziert' },
        { status: 401 }
      )
    }

    const accounts = await getUserTradingAccounts(session.user.id)
    
    return NextResponse.json({ accounts })
  } catch (error) {
    console.error('Error fetching trading accounts:', error)
    return NextResponse.json(
      { error: 'Fehler beim Laden der Trading-Accounts' },
      { status: 500 }
    )
  }
}

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
    
    // Validate input
    const validation = createAccountSchema.safeParse(body)
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Validierungsfehler', details: validation.error.issues },
        { status: 400 }
      )
    }

    const accountData = validation.data

    // Create trading account
    const account = await createTradingAccount(session.user.id, accountData)

    return NextResponse.json({
      message: 'Trading-Account erfolgreich erstellt',
      account: {
        id: account.id,
        name: account.name,
        accountNumber: account.accountNumber,
        currency: account.currency,
        isDefault: account.isDefault
      }
    }, { status: 201 })

  } catch (error) {
    console.error('Error creating trading account:', error)
    return NextResponse.json(
      { error: 'Fehler beim Erstellen des Trading-Accounts' },
      { status: 500 }
    )
  }
} 