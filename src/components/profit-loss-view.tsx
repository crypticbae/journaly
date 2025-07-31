"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { TrendingUpDown, ArrowDownLeft, Wallet, Target, AreaChart, CalendarDays } from "lucide-react"
import { Trade } from "@/lib/email-parser"

interface TradingStats {
  totalTrades: number;
  totalProfit: number;
  winningTrades: number;
  losingTrades: number;
  winRate: number;
  averageProfit: number;
  maxProfit: number;
  maxLoss: number;
}

interface ProfitLossViewProps {
  trades: Trade[]
  stats: TradingStats
}

export function ProfitLossView({ trades, stats }: ProfitLossViewProps) {
  // Calculate additional metrics
  const profitableTrades = trades.filter(trade => trade.profit > 0)
  const losingTrades = trades.filter(trade => trade.profit < 0)
  
  const totalWinnings = profitableTrades.reduce((sum, trade) => sum + trade.profit, 0)
  const totalLosses = Math.abs(losingTrades.reduce((sum, trade) => sum + trade.profit, 0))
  
  const averageWin = profitableTrades.length > 0 ? totalWinnings / profitableTrades.length : 0
  const averageLoss = losingTrades.length > 0 ? totalLosses / losingTrades.length : 0
  
  const profitFactor = totalLosses > 0 ? totalWinnings / totalLosses : totalWinnings > 0 ? 999 : 0
  const expectancy = stats.totalTrades > 0 ? stats.totalProfit / stats.totalTrades : 0
  
  // Monthly P&L breakdown
  const monthlyPnL = React.useMemo(() => {
    const monthlyData = new Map<string, number>()
    
    trades.forEach(trade => {
      const date = new Date(trade.openTime)
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
      
      if (!monthlyData.has(monthKey)) {
        monthlyData.set(monthKey, 0)
      }
      monthlyData.set(monthKey, monthlyData.get(monthKey)! + trade.profit)
    })
    
    return Array.from(monthlyData.entries())
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([month, profit]) => ({
        month,
        profit,
        monthName: new Date(month + '-01').toLocaleDateString('de-DE', { 
          month: 'long', 
          year: 'numeric' 
        })
      }))
  }, [trades])

  // Daily P&L for the last 30 days
  const dailyPnL = React.useMemo(() => {
    const last30Days = new Map<string, number>()
    const now = new Date()
    
    // Initialize last 30 days
    for (let i = 29; i >= 0; i--) {
      const date = new Date(now)
      date.setDate(date.getDate() - i)
      const dateKey = date.toISOString().split('T')[0]
      last30Days.set(dateKey, 0)
    }
    
    // Add trade profits
    trades.forEach(trade => {
      const dateKey = trade.openTime.split(' ')[0]
      if (last30Days.has(dateKey)) {
        last30Days.set(dateKey, last30Days.get(dateKey)! + trade.profit)
      }
    })
    
    return Array.from(last30Days.entries()).map(([date, profit]) => ({
      date,
      profit,
      displayDate: new Date(date).toLocaleDateString('de-DE', { 
        day: '2-digit', 
        month: '2-digit' 
      })
    }))
  }, [trades])

  // Best and worst performing instruments
  const instrumentPerformance = React.useMemo(() => {
    const instrumentStats = new Map<string, { profit: number, trades: number }>()
    
    trades.forEach(trade => {
      if (!instrumentStats.has(trade.instrument)) {
        instrumentStats.set(trade.instrument, { profit: 0, trades: 0 })
      }
      const stats = instrumentStats.get(trade.instrument)!
      stats.profit += trade.profit
      stats.trades += 1
    })
    
    return Array.from(instrumentStats.entries())
      .map(([instrument, stats]) => ({
        instrument,
        profit: stats.profit,
        trades: stats.trades,
        avgProfit: stats.profit / stats.trades
      }))
      .sort((a, b) => b.profit - a.profit)
  }, [trades])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount)
  }

  const formatPercent = (value: number) => {
    return `${value.toFixed(2)}%`
  }

  return (
    <div className="space-y-6">
      {/* Main P&L Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wallet className="h-5 w-5" />
              Profit & Loss Übersicht
            </CardTitle>
            <CardDescription>Deine Trading-Performance im Detail</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-sm font-medium text-base-content/70">Gesamtprofit</p>
                <p className={`text-3xl font-bold ${stats.totalProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {formatCurrency(stats.totalProfit)}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-base-content/70">Erwartungswert</p>
                <p className={`text-2xl font-bold ${expectancy >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {formatCurrency(expectancy)}
                </p>
                <p className="text-xs text-base-content/60">pro Trade</p>
              </div>
            </div>
            
            <Separator />
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <TrendingUpDown className="h-4 w-4 text-green-600" />
                  <h4 className="font-semibold">Gewinnende Trades</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Anzahl:</span>
                    <span className="font-mono">{stats.winningTrades}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Gesamtgewinn:</span>
                    <span className="font-mono text-green-600">{formatCurrency(totalWinnings)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Ø Gewinn:</span>
                    <span className="font-mono text-green-600">{formatCurrency(averageWin)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Max Gewinn:</span>
                    <span className="font-mono text-green-600">{formatCurrency(stats.maxProfit)}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <ArrowDownLeft className="h-4 w-4 text-red-600" />
                  <h4 className="font-semibold">Verlierende Trades</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Anzahl:</span>
                    <span className="font-mono">{stats.losingTrades}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Gesamtverlust:</span>
                    <span className="font-mono text-red-600">-{formatCurrency(totalLosses)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Ø Verlust:</span>
                    <span className="font-mono text-red-600">-{formatCurrency(averageLoss)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Max Verlust:</span>
                    <span className="font-mono text-red-600">{formatCurrency(stats.maxLoss)}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Key Metriken
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Win Rate</span>
                <span className="font-mono">{formatPercent(stats.winRate)}</span>
              </div>
              <Progress value={stats.winRate} className="h-2" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Profit Faktor</span>
                <Badge variant={profitFactor >= 1.5 ? "default" : profitFactor >= 1 ? "secondary" : "error"}>
                  {profitFactor === 999 ? "∞" : profitFactor.toFixed(2)}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                {profitFactor >= 1.5 ? "Ausgezeichnet" : profitFactor >= 1 ? "Gut" : "Verbesserung nötig"}
              </p>
            </div>
            
            <Separator />
            
            <div className="space-y-3">
              <h4 className="font-medium">Risk/Reward</h4>
              <div className="flex justify-between text-sm">
                <span>Avg Win/Loss Ratio</span>
                <span className="font-mono">
                  {averageLoss > 0 ? (averageWin / averageLoss).toFixed(2) : "∞"}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5" />
            Monatliche Performance
          </CardTitle>
          <CardDescription>Profit/Loss Entwicklung über die Monate</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {monthlyPnL.map(({ month, profit, monthName }) => (
              <div key={month} className="flex items-center justify-between py-2">
                <span className="font-medium">{monthName}</span>
                <div className="flex items-center gap-3">
                  <div className={`w-32 h-2 rounded-full bg-muted relative overflow-hidden`}>
                    <div 
                      className={`h-full ${profit >= 0 ? 'bg-green-500' : 'bg-red-500'}`}
                      style={{ 
                        width: `${Math.min(Math.abs(profit) / Math.max(...monthlyPnL.map(m => Math.abs(m.profit))) * 100, 100)}%` 
                      }}
                    />
                  </div>
                  <span className={`font-mono min-w-[100px] text-right ${
                    profit >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {formatCurrency(profit)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Instrument Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AreaChart className="h-5 w-5" />
            Instrument Performance
          </CardTitle>
          <CardDescription>Performance nach Handelsinstrumenten</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {instrumentPerformance.slice(0, 10).map(({ instrument, profit, trades, avgProfit }) => (
              <div key={instrument} className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center gap-3">
                  <Badge variant="outline">{instrument}</Badge>
                  <span className="text-sm text-muted-foreground">{trades} Trades</span>
                </div>
                <div className="text-right">
                  <div className={`font-mono font-medium ${
                    profit >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {formatCurrency(profit)}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Ø {formatCurrency(avgProfit)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 