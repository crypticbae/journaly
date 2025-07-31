"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Calendar, 
  BarChart3, 
  Clock, 
  Zap,
  Award
} from "lucide-react"
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

interface PerformanceViewProps {
  trades: Trade[]
  stats: TradingStats
}

type TimeFrame = 'all' | '30d' | '7d' | '1d'

export function PerformanceView({ trades, stats }: PerformanceViewProps) {
  const [timeFrame, setTimeFrame] = React.useState<TimeFrame>('all')
  
  // Filter trades by timeframe
  const filteredTrades = React.useMemo(() => {
    if (timeFrame === 'all') return trades
    
    const now = new Date()
    const days = timeFrame === '30d' ? 30 : timeFrame === '7d' ? 7 : 1
    const cutoffDate = new Date(now.getTime() - days * 24 * 60 * 60 * 1000)
    
    return trades.filter(trade => new Date(trade.openTime) >= cutoffDate)
  }, [trades, timeFrame])

  // Advanced performance metrics
  const metrics = React.useMemo(() => {
    if (filteredTrades.length === 0) {
      return {
        sharpeRatio: 0,
        maxDrawdown: 0,
        consecutiveWins: 0,
        consecutiveLosses: 0,
        averageHoldTime: 0,
        profitFactor: 0,
        expectancy: 0,
        largestWin: 0,
        largestLoss: 0,
        winningStreak: 0,
        losingStreak: 0,
        dailyReturns: []
      }
    }

    const profits = filteredTrades.map(t => t.profit)
    const totalProfit = profits.reduce((sum, p) => sum + p, 0)
    const winningTrades = profits.filter(p => p > 0)
    const losingTrades = profits.filter(p => p < 0)
    
    const winSum = winningTrades.reduce((sum, p) => sum + p, 0)
    const lossSum = Math.abs(losingTrades.reduce((sum, p) => sum + p, 0))
    
    // Calculate streaks
    let currentStreak = 0
    let maxWinStreak = 0
    let maxLossStreak = 0
    let lastWasWin = false
    
    profits.forEach(profit => {
      const isWin = profit > 0
      if (isWin === lastWasWin) {
        currentStreak++
      } else {
        if (lastWasWin) {
          maxWinStreak = Math.max(maxWinStreak, currentStreak)
        } else {
          maxLossStreak = Math.max(maxLossStreak, currentStreak)
        }
        currentStreak = 1
        lastWasWin = isWin
      }
    })
    
    // Final streak check
    if (lastWasWin) {
      maxWinStreak = Math.max(maxWinStreak, currentStreak)
    } else {
      maxLossStreak = Math.max(maxLossStreak, currentStreak)
    }

    // Calculate drawdown
    let runningTotal = 0
    let peak = 0
    let maxDrawdown = 0
    
    profits.forEach(profit => {
      runningTotal += profit
      if (runningTotal > peak) {
        peak = runningTotal
      }
      const drawdown = peak - runningTotal
      if (drawdown > maxDrawdown) {
        maxDrawdown = drawdown
      }
    })

    // Daily returns for Sharpe ratio (simplified)
    const dailyReturns: number[] = []
    const dailyProfits = new Map<string, number>()
    
    filteredTrades.forEach(trade => {
      const date = trade.openTime.split(' ')[0]
      dailyProfits.set(date, (dailyProfits.get(date) || 0) + trade.profit)
    })
    
    dailyProfits.forEach(profit => dailyReturns.push(profit))
    
    const avgDailyReturn = dailyReturns.length > 0 ? 
      dailyReturns.reduce((sum, r) => sum + r, 0) / dailyReturns.length : 0
    
    const dailyReturnStdDev = dailyReturns.length > 1 ? 
      Math.sqrt(dailyReturns.reduce((sum, r) => sum + Math.pow(r - avgDailyReturn, 2), 0) / (dailyReturns.length - 1)) : 0
    
    const sharpeRatio = dailyReturnStdDev > 0 ? avgDailyReturn / dailyReturnStdDev : 0

    return {
      sharpeRatio,
      maxDrawdown,
      consecutiveWins: maxWinStreak,
      consecutiveLosses: maxLossStreak,
      averageHoldTime: 0, // Would need entry/exit times to calculate
      profitFactor: lossSum > 0 ? winSum / lossSum : winSum > 0 ? 999 : 0,
      expectancy: totalProfit / filteredTrades.length,
      largestWin: Math.max(...profits, 0),
      largestLoss: Math.min(...profits, 0),
      winningStreak: maxWinStreak,
      losingStreak: maxLossStreak,
      dailyReturns
    }
  }, [filteredTrades])

  // Time-based analysis
  const timeAnalysis = React.useMemo(() => {
    const hourlyPerformance = new Array(24).fill(0).map((_, hour) => ({
      hour,
      trades: 0,
      profit: 0
    }))
    
    const weeklyPerformance = new Array(7).fill(0).map((_, day) => ({
      day,
      dayName: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'][day],
      trades: 0,
      profit: 0
    }))

    filteredTrades.forEach(trade => {
      const date = new Date(trade.openTime)
      const hour = date.getHours()
      const dayOfWeek = date.getDay()
      
      hourlyPerformance[hour].trades++
      hourlyPerformance[hour].profit += trade.profit
      
      weeklyPerformance[dayOfWeek].trades++
      weeklyPerformance[dayOfWeek].profit += trade.profit
    })

    return { hourlyPerformance, weeklyPerformance }
  }, [filteredTrades])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount)
  }

  const getRatingBadge = (value: number, thresholds: { good: number, excellent: number }) => {
    if (value >= thresholds.excellent) return <Badge className="bg-green-500">Ausgezeichnet</Badge>
    if (value >= thresholds.good) return <Badge variant="secondary">Gut</Badge>
    return <Badge variant="error">Verbesserung nötig</Badge>
  }

  return (
    <div className="space-y-6">
      {/* Time Frame Selector */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Performance Analyse
              </CardTitle>
              <CardDescription>Detaillierte Trading-Performance Metriken</CardDescription>
            </div>
            <select 
              value={timeFrame} 
              onChange={(e) => setTimeFrame(e.target.value as TimeFrame)}
              className="select select-bordered w-[120px]"
            >
              <option value="all">Alle Zeit</option>
              <option value="30d">30 Tage</option>
              <option value="7d">7 Tage</option>
              <option value="1d">1 Tag</option>
            </select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold">{filteredTrades.length}</p>
              <p className="text-sm text-muted-foreground">Trades</p>
            </div>
            <div className="text-center">
              <p className={`text-2xl font-bold ${metrics.expectancy >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {formatCurrency(metrics.expectancy)}
              </p>
              <p className="text-sm text-muted-foreground">Erwartungswert</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{metrics.sharpeRatio.toFixed(2)}</p>
              <p className="text-sm text-muted-foreground">Sharpe Ratio</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-red-600">{formatCurrency(metrics.maxDrawdown)}</p>
              <p className="text-sm text-muted-foreground">Max Drawdown</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Risk Management
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Profit Faktor</span>
              <div className="flex items-center gap-2">
                <span className="font-mono">{metrics.profitFactor === 999 ? '∞' : metrics.profitFactor.toFixed(2)}</span>
                {getRatingBadge(metrics.profitFactor, { good: 1.25, excellent: 2.0 })}
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm">Sharpe Ratio</span>
              <div className="flex items-center gap-2">
                <span className="font-mono">{metrics.sharpeRatio.toFixed(2)}</span>
                {getRatingBadge(metrics.sharpeRatio, { good: 1.0, excellent: 2.0 })}
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm">Max Drawdown</span>
              <span className="font-mono text-red-600">{formatCurrency(metrics.maxDrawdown)}</span>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Größter Gewinn</span>
                <span className="font-mono text-green-600">{formatCurrency(metrics.largestWin)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Größter Verlust</span>
                <span className="font-mono text-red-600">{formatCurrency(metrics.largestLoss)}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Trading Streaks
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className="text-sm">Längste Gewinnserie</span>
              </div>
              <span className="font-mono text-green-600">{metrics.winningStreak} Trades</span>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <TrendingDown className="h-4 w-4 text-red-600" />
                <span className="text-sm">Längste Verlustserie</span>
              </div>
              <span className="font-mono text-red-600">{metrics.losingStreak} Trades</span>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <h4 className="font-medium">Konsistenz</h4>
              <div className="flex justify-between">
                <span className="text-sm">Gewinn/Verlust Ratio</span>
                <span className="font-mono">
                  {metrics.losingStreak > 0 ? (metrics.winningStreak / metrics.losingStreak).toFixed(2) : '∞'}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Time-based Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Performance nach Tageszeit
            </CardTitle>
            <CardDescription>Beste Trading-Stunden identifizieren</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {timeAnalysis.hourlyPerformance
                .filter(hour => hour.trades > 0)
                .sort((a, b) => b.profit - a.profit)
                .slice(0, 8)
                .map(({ hour, trades, profit }) => (
                  <div key={hour} className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline">{hour}:00 - {hour + 1}:00</Badge>
                      <span className="text-sm text-muted-foreground">{trades} Trades</span>
                    </div>
                    <span className={`font-mono ${profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {formatCurrency(profit)}
                    </span>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Performance nach Wochentag
            </CardTitle>
            <CardDescription>Beste Trading-Tage identifizieren</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {timeAnalysis.weeklyPerformance
                .filter(day => day.trades > 0)
                .sort((a, b) => b.profit - a.profit)
                .map(({ day, dayName, trades, profit }) => (
                  <div key={day} className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline">{dayName}</Badge>
                      <span className="text-sm text-muted-foreground">{trades} Trades</span>
                    </div>
                    <span className={`font-mono ${profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {formatCurrency(profit)}
                    </span>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Performance Bewertung
          </CardTitle>
          <CardDescription>Gesamtbewertung deiner Trading-Performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <h4 className="font-medium">Profitabilität</h4>
              {getRatingBadge(metrics.profitFactor, { good: 1.25, excellent: 2.0 })}
              <p className="text-xs text-muted-foreground">
                Basierend auf Profit Faktor: {metrics.profitFactor === 999 ? '∞' : metrics.profitFactor.toFixed(2)}
              </p>
            </div>
            
            <div className="text-center space-y-2">
              <h4 className="font-medium">Risikomanagement</h4>
              {getRatingBadge(metrics.sharpeRatio, { good: 1.0, excellent: 2.0 })}
              <p className="text-xs text-muted-foreground">
                Basierend auf Sharpe Ratio: {metrics.sharpeRatio.toFixed(2)}
              </p>
            </div>
            
            <div className="text-center space-y-2">
              <h4 className="font-medium">Konsistenz</h4>
              {getRatingBadge(
                filteredTrades.length > 0 ? (filteredTrades.filter(t => t.profit > 0).length / filteredTrades.length) * 100 : 0,
                { good: 60, excellent: 80 }
              )}
              <p className="text-xs text-muted-foreground">
                Win Rate: {filteredTrades.length > 0 ? ((filteredTrades.filter(t => t.profit > 0).length / filteredTrades.length) * 100).toFixed(1) : 0}%
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 