import { prisma } from './prisma'
import { Trade, TradingAccount, AccountSummary } from '@/generated/prisma'
import { Trade as LegacyTrade, AccountSummary as LegacyAccountSummary } from './email-parser'

// Trading Account Management
export async function createTradingAccount(
  userId: string,
  data: {
    name: string
    description?: string
    accountNumber: string
    brokerName?: string
    currency?: string
    isDefault?: boolean
  }
) {
  // If this is the first account or marked as default, set as default
  if (data.isDefault) {
    // Remove default from other accounts
    await prisma.tradingAccount.updateMany({
      where: { userId, isDefault: true },
      data: { isDefault: false }
    })
  }

  // Check if this is the user's first account
  const accountCount = await prisma.tradingAccount.count({
    where: { userId }
  })

  return await prisma.tradingAccount.create({
    data: {
      ...data,
      userId,
      isDefault: data.isDefault || accountCount === 0 // First account is default
    }
  })
}

export async function getUserTradingAccounts(userId: string) {
  return await prisma.tradingAccount.findMany({
    where: { userId, isActive: true },
    include: {
      _count: {
        select: {
          trades: true
        }
      }
    },
    orderBy: [
      { isDefault: 'desc' },
      { createdAt: 'asc' }
    ]
  })
}

export async function setDefaultTradingAccount(userId: string, accountId: string) {
  await prisma.$transaction([
    // Remove default from all accounts
    prisma.tradingAccount.updateMany({
      where: { userId, isDefault: true },
      data: { isDefault: false }
    }),
    // Set new default
    prisma.tradingAccount.update({
      where: { id: accountId, userId },
      data: { isDefault: true }
    })
  ])
}

// Trade Management
export async function insertTradeForAccount(accountId: string, trade: LegacyTrade) {
  return await prisma.trade.create({
    data: {
      tradingAccountId: accountId,
      openTime: trade.openTime,
      ticket: trade.ticket,
      type: trade.type,
      size: trade.size,
      instrument: trade.instrument,
      price: trade.price,
      exitPrice: trade.exitPrice,
      orderId: trade.order,
      comment: trade.comment,
      entry: trade.entry,
      commission: trade.commission,
      fee: trade.fee,
      swap: trade.swap,
      profit: trade.profit
    }
  })
}

export async function insertTradesForAccount(accountId: string, trades: LegacyTrade[]) {
  const results = []
  for (const trade of trades) {
    const result = await insertTradeForAccount(accountId, trade)
    results.push(result)
  }
  return results
}

export async function getTradesForAccount(accountId: string, userId: string) {
  // Verify account belongs to user
  const account = await prisma.tradingAccount.findFirst({
    where: { id: accountId, userId }
  })
  
  if (!account) {
    throw new Error('Trading account not found or access denied')
  }

  return await prisma.trade.findMany({
    where: { tradingAccountId: accountId },
    orderBy: { openTime: 'desc' }
  })
}

export async function getAllTradesForUser(userId: string) {
  return await prisma.trade.findMany({
    where: {
      tradingAccount: {
        userId
      }
    },
    include: {
      tradingAccount: {
        select: {
          id: true,
          name: true,
          accountNumber: true,
          currency: true
        }
      }
    },
    orderBy: { openTime: 'desc' }
  })
}

// Trading Statistics
export async function getTradingStatsForAccount(accountId: string, userId: string) {
  // Verify account belongs to user
  const account = await prisma.tradingAccount.findFirst({
    where: { id: accountId, userId }
  })
  
  if (!account) {
    throw new Error('Trading account not found or access denied')
  }

  const totalTrades = await prisma.trade.count({
    where: { tradingAccountId: accountId }
  })

  const profitSum = await prisma.trade.aggregate({
    where: { tradingAccountId: accountId },
    _sum: { profit: true }
  })

  const winningTrades = await prisma.trade.count({
    where: { tradingAccountId: accountId, profit: { gt: 0 } }
  })

  const losingTrades = await prisma.trade.count({
    where: { tradingAccountId: accountId, profit: { lt: 0 } }
  })

  const maxProfit = await prisma.trade.aggregate({
    where: { tradingAccountId: accountId },
    _max: { profit: true }
  })

  const maxLoss = await prisma.trade.aggregate({
    where: { tradingAccountId: accountId },
    _min: { profit: true }
  })

  const totalProfit = profitSum._sum.profit || 0

  return {
    totalTrades,
    totalProfit,
    winningTrades,
    losingTrades,
    winRate: totalTrades > 0 ? (winningTrades / totalTrades) * 100 : 0,
    averageProfit: totalTrades > 0 ? totalProfit / totalTrades : 0,
    maxProfit: maxProfit._max.profit || 0,
    maxLoss: maxLoss._min.profit || 0
  }
}

export async function getTradingStatsForUser(userId: string) {
  const totalTrades = await prisma.trade.count({
    where: {
      tradingAccount: { userId }
    }
  })

  const profitSum = await prisma.trade.aggregate({
    where: {
      tradingAccount: { userId }
    },
    _sum: { profit: true }
  })

  const winningTrades = await prisma.trade.count({
    where: {
      tradingAccount: { userId },
      profit: { gt: 0 }
    }
  })

  const losingTrades = await prisma.trade.count({
    where: {
      tradingAccount: { userId },
      profit: { lt: 0 }
    }
  })

  const maxProfit = await prisma.trade.aggregate({
    where: {
      tradingAccount: { userId }
    },
    _max: { profit: true }
  })

  const maxLoss = await prisma.trade.aggregate({
    where: {
      tradingAccount: { userId }
    },
    _min: { profit: true }
  })

  const totalProfit = profitSum._sum.profit || 0

  return {
    totalTrades,
    totalProfit,
    winningTrades,
    losingTrades,
    winRate: totalTrades > 0 ? (winningTrades / totalTrades) * 100 : 0,
    averageProfit: totalTrades > 0 ? totalProfit / totalTrades : 0,
    maxProfit: maxProfit._max.profit || 0,
    maxLoss: maxLoss._min.profit || 0
  }
}

// Daily P/L for Calendar
export async function getDailyPnLForUser(
  userId: string, 
  startDate?: string | null, 
  endDate?: string | null,
  accountId?: string | null
) {
  // Standard-Datumsbereich auf aktuellen Monat setzen
  const now = new Date()
  const start = startDate ? new Date(startDate) : new Date(now.getFullYear(), now.getMonth(), 1)
  const end = endDate ? new Date(endDate) : new Date(now.getFullYear(), now.getMonth() + 1, 0)

  // Where-Clause basierend auf Account-Filter aufbauen
  const whereClause: any = {
    tradingAccount: { userId }
  }

  // Account-Filter hinzufügen wenn spezifischer Account ausgewählt
  if (accountId && accountId !== 'all') {
    whereClause.tradingAccountId = accountId
  }

  console.log('📊 Calendar filter:', { userId, accountId, whereClause })

  // Trades holen
  const trades = await prisma.trade.findMany({
    where: whereClause,
    select: {
      openTime: true,
      profit: true,
      commission: true,
      fee: true,
      swap: true,
      tradingAccount: {
        select: {
          currency: true
        }
      }
    },
    orderBy: { openTime: 'asc' }
  })

  // Trades nach Datum gruppieren und P/L berechnen
  const dailyData = new Map<string, {
    date: string
    totalPnL: number
    tradeCount: number
    winningTrades: number
    losingTrades: number
    totalProfit: number
    totalLoss: number
    currency: string
  }>()

  trades.forEach(trade => {
    // Extrahiere Datum aus openTime (Format: "2024.12.31 10:30:45" oder "2024-12-31")
    let date: string
    if (trade.openTime.includes('.')) {
      // Format: "2024.12.31 10:30:45"
      date = trade.openTime.split(' ')[0].replace(/\./g, '-')
    } else if (trade.openTime.includes(' ')) {
      // Format: "2024-12-31 10:30:45"
      date = trade.openTime.split(' ')[0]
    } else {
      // Format: "2024-12-31"
      date = trade.openTime
    }

    const totalPnL = trade.profit + trade.commission + trade.fee + trade.swap
    
    if (!dailyData.has(date)) {
      dailyData.set(date, {
        date,
        totalPnL: 0,
        tradeCount: 0,
        winningTrades: 0,
        losingTrades: 0,
        totalProfit: 0,
        totalLoss: 0,
        currency: trade.tradingAccount.currency || 'USD'
      })
    }

    const dayData = dailyData.get(date)!
    dayData.totalPnL += totalPnL
    dayData.tradeCount += 1

    if (totalPnL > 0) {
      dayData.winningTrades += 1
      dayData.totalProfit += totalPnL
    } else if (totalPnL < 0) {
      dayData.losingTrades += 1
      dayData.totalLoss += Math.abs(totalPnL)
    }
  })

  // Map zu Array konvertieren und sortieren
  return Array.from(dailyData.values()).sort((a, b) => a.date.localeCompare(b.date))
}

// Account Summary Management
export async function insertAccountSummaryForAccount(
  accountId: string, 
  summary: LegacyAccountSummary
) {
  return await prisma.accountSummary.create({
    data: {
      tradingAccountId: accountId,
      date: summary.date,
      currency: summary.currency,
      closedPnL: summary.closedPnL,
      balance: summary.balance,
      equity: summary.equity,
      previousBalance: summary.previousBalance,
      previousEquity: summary.previousEquity,
      totalCreditFacility: summary.totalCreditFacility,
      floatingPnL: summary.floatingPnL,
      marginRequirements: summary.marginRequirements,
      availableMargin: summary.availableMargin
    }
  })
}

export async function getLatestAccountSummaryForAccount(accountId: string, userId: string) {
  // Verify account belongs to user
  const account = await prisma.tradingAccount.findFirst({
    where: { id: accountId, userId }
  })
  
  if (!account) {
    throw new Error('Trading account not found or access denied')
  }

  return await prisma.accountSummary.findFirst({
    where: { tradingAccountId: accountId },
    orderBy: { createdAt: 'desc' }
  })
}

// Data Migration Helper (from old SQLite to new PostgreSQL)
export async function migrateUserData(
  userId: string,
  accountData: {
    name: string
    accountNumber: string
    brokerName?: string
  },
  trades: LegacyTrade[],
  accountSummary?: LegacyAccountSummary
) {
  return await prisma.$transaction(async (tx) => {
    // Create trading account
    const tradingAccount = await tx.tradingAccount.create({
      data: {
        userId,
        name: accountData.name,
        accountNumber: accountData.accountNumber,
        brokerName: accountData.brokerName,
        isDefault: true
      }
    })

    // Insert trades
    if (trades.length > 0) {
      await tx.trade.createMany({
        data: trades.map(trade => ({
          tradingAccountId: tradingAccount.id,
          openTime: trade.openTime,
          ticket: trade.ticket,
          type: trade.type,
          size: trade.size,
          instrument: trade.instrument,
          price: trade.price,
          exitPrice: trade.exitPrice,
          orderId: trade.order,
          comment: trade.comment,
          entry: trade.entry,
          commission: trade.commission,
          fee: trade.fee,
          swap: trade.swap,
          profit: trade.profit
        }))
      })
    }

    // Insert account summary
    if (accountSummary) {
      await tx.accountSummary.create({
        data: {
          tradingAccountId: tradingAccount.id,
          date: accountSummary.date,
          currency: accountSummary.currency,
          closedPnL: accountSummary.closedPnL,
          balance: accountSummary.balance,
          equity: accountSummary.equity,
          previousBalance: accountSummary.previousBalance,
          previousEquity: accountSummary.previousEquity,
          totalCreditFacility: accountSummary.totalCreditFacility,
          floatingPnL: accountSummary.floatingPnL,
          marginRequirements: accountSummary.marginRequirements,
          availableMargin: accountSummary.availableMargin
        }
      })
    }

    return tradingAccount
  })
}

// Cleanup
export async function deleteAllDataForUser(userId: string) {
  await prisma.$transaction([
    // Delete all trades for user's accounts
    prisma.trade.deleteMany({
      where: {
        tradingAccount: { userId }
      }
    }),
    // Delete all account summaries for user's accounts
    prisma.accountSummary.deleteMany({
      where: {
        tradingAccount: { userId }
      }
    }),
    // Delete all trading accounts for user
    prisma.tradingAccount.deleteMany({
      where: { userId }
    })
  ])
} 