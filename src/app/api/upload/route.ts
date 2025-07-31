import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { parseEmailWithMultipleAccounts } from '@/lib/smart-email-parser'
import { createTradingAccount, getUserTradingAccounts } from '@/lib/database-new'
import { insertTradesForAccount, insertAccountSummaryForAccount } from '@/lib/database-new'
import multer from 'multer'

// Configure multer for file upload
const upload = multer({ storage: multer.memoryStorage() })

// Helper to run multer
const runMiddleware = (req: any, res: any, fn: any) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }
      return resolve(result)
    })
  })
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

    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.json(
        { error: 'Keine Datei hochgeladen' },
        { status: 400 }
      )
    }

    const arrayBuffer = await file.arrayBuffer()
    const filename = file.name
    
    console.log(`📤 Processing file: ${filename} (${file.type})`)
    
    // PDF-Dateien werden derzeit nicht unterstützt
    if (filename.toLowerCase().endsWith('.pdf')) {
      console.log(`❌ PDF detected but not supported: ${filename}`)
      return NextResponse.json(
        { error: 'PDF-Dateien werden derzeit nicht unterstützt. Bitte verwende Email-Dateien (.eml oder .html).' },
        { status: 400 }
      )
    }

    // Email-Verarbeitung
    const content = new TextDecoder().decode(arrayBuffer)
    console.log('📧 Processing as email...')
    
    const parseResult = parseEmailWithMultipleAccounts(content)
    
    if (parseResult.totalAccounts === 0) {
      return NextResponse.json(
        { error: 'Keine Trading-Accounts in der Datei gefunden' },
        { status: 400 }
      )
    }

    // Bestehende User-Accounts laden
    const existingAccounts = await getUserTradingAccounts(session.user.id)
    const results = []

    // Für jeden gefundenen Account
    for (const accountData of parseResult.accounts) {
      console.log(`🏦 Processing account: ${accountData.accountNumber}`)
      
      // Prüfe ob Account bereits existiert
      let tradingAccount = existingAccounts.find(
        acc => acc.accountNumber === accountData.accountNumber
      )
      
      if (!tradingAccount) {
        // Account automatisch erstellen
        console.log(`✨ Creating new trading account: ${accountData.accountNumber}`)
        
        const newAccount = await createTradingAccount(session.user.id, {
          name: accountData.accountName,
          accountNumber: accountData.accountNumber,
          currency: accountData.currency,
          description: `Automatisch erstellt beim Email-Import`,
          brokerName: 'PU Prime',
          isDefault: existingAccounts.length === 0 // Erster Account wird Standard
        })
        
        // Add _count property for compatibility
        tradingAccount = {
          ...newAccount,
          _count: { trades: 0 }
        }
        
        results.push({
          action: 'created',
          account: {
            id: tradingAccount.id,
            name: tradingAccount.name,
            accountNumber: tradingAccount.accountNumber
          }
        })
      }

      // Safety check
      if (!tradingAccount) {
        console.error(`Failed to create or find trading account: ${accountData.accountNumber}`)
        continue
      }

      // Trades für diesen Account importieren
      if (accountData.trades.length > 0) {
        console.log(`📊 Importing ${accountData.trades.length} trades for account ${accountData.accountNumber}`)
        
        await insertTradesForAccount(tradingAccount.id, accountData.trades)
        
        results.push({
          action: 'imported_trades',
          account: {
            id: tradingAccount.id,
            name: tradingAccount.name,
            accountNumber: tradingAccount.accountNumber
          },
          tradesCount: accountData.trades.length
        })
      }
      
      // Account Summary importieren
      if (accountData.accountSummary) {
        console.log(`💰 Importing account summary for ${accountData.accountNumber}`)
        
        await insertAccountSummaryForAccount(tradingAccount.id, accountData.accountSummary)
        
        results.push({
          action: 'imported_summary',
          account: {
            id: tradingAccount.id,
            name: tradingAccount.name,
            accountNumber: tradingAccount.accountNumber
          }
        })
      }
    }

    console.log('✅ Email import completed successfully')

    return NextResponse.json({
      success: true,
      message: `Successfully processed ${parseResult.totalAccounts} accounts with ${parseResult.totalTrades} total trades from email`,
      fileType: 'Email',
      totalAccounts: parseResult.totalAccounts,
      totalTrades: parseResult.totalTrades,
      details: results
    })

  } catch (error) {
    console.error('Email upload error:', error)
    return NextResponse.json(
      { error: 'Fehler beim Import der Email-Datei' },
      { status: 500 }
    )
  }
} 