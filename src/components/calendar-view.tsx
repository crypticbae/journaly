"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, TrendingUp, TrendingDown } from "lucide-react"

interface DailyPnL {
  date: string
  totalPnL: number
  tradeCount: number
  winningTrades: number
  losingTrades: number
  totalProfit: number
  totalLoss: number
  currency: string
}

interface CalendarViewProps {
  className?: string
  selectedAccountId?: string | null
}

export function CalendarView({ className, selectedAccountId }: CalendarViewProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [dailyPnL, setDailyPnL] = useState<DailyPnL[]>([])
  const [loading, setLoading] = useState(false)
  const [selectedDay, setSelectedDay] = useState<DailyPnL | null>(null)

  // Kalender-Daten laden
  const fetchCalendarData = async (date: Date) => {
    setLoading(true)
    try {
      const year = date.getFullYear()
      const month = date.getMonth()
      const startDate = new Date(year, month, 1).toISOString().split('T')[0]
      const endDate = new Date(year, month + 1, 0).toISOString().split('T')[0]

      console.log('📅 Fetching calendar data for:', { startDate, endDate, accountId: selectedAccountId })

      // URL mit Account-Filter aufbauen
      const url = new URL('/api/calendar', window.location.origin)
      url.searchParams.set('startDate', startDate)
      url.searchParams.set('endDate', endDate)
      if (selectedAccountId && selectedAccountId !== 'all') {
        url.searchParams.set('accountId', selectedAccountId)
      }

      const response = await fetch(url.toString())
      
      if (!response.ok) {
        console.error('❌ Calendar API HTTP error:', response.status, response.statusText)
        setDailyPnL([])
        return
      }
      
      const data = await response.json()
      console.log('📊 Calendar API response:', data)
      
      if (data.dailyPnL && Array.isArray(data.dailyPnL)) {
        console.log('✅ Setting daily P/L data:', data.dailyPnL.length, 'entries')
        setDailyPnL(data.dailyPnL)
      } else {
        console.error('❌ Invalid data format:', data)
        setDailyPnL([])
      }
    } catch (error) {
      console.error('❌ Fehler beim Laden der Kalender-Daten:', error)
      setDailyPnL([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCalendarData(currentDate)
  }, [currentDate, selectedAccountId]) // Auch bei Account-Wechsel aktualisieren

  // Navigation zwischen Monaten
  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate)
    if (direction === 'prev') {
      newDate.setMonth(currentDate.getMonth() - 1)
    } else {
      newDate.setMonth(currentDate.getMonth() + 1)
    }
    setCurrentDate(newDate)
    setSelectedDay(null) // Reset selection
  }

  // Kalender-Grid generieren
  const generateCalendarDays = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const startDate = new Date(firstDay)
    
    // Woche beginnt Montag (1 = Montag, 0 = Sonntag)
    const firstDayOfWeek = firstDay.getDay()
    const mondayOffset = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1
    startDate.setDate(startDate.getDate() - mondayOffset)

    const days = []
    const currentGridDate = new Date(startDate)

    // 42 Tage generieren (6 Wochen x 7 Tage)
    for (let i = 0; i < 42; i++) {
      const dateStr = currentGridDate.toISOString().split('T')[0]
      const pnlData = dailyPnL.find(d => d.date === dateStr)
      const isCurrentMonth = currentGridDate.getMonth() === month
      const isToday = dateStr === new Date().toISOString().split('T')[0]

      days.push({
        date: new Date(currentGridDate),
        dateStr,
        day: currentGridDate.getDate(),
        isCurrentMonth,
        isToday,
        pnlData
      })

      currentGridDate.setDate(currentGridDate.getDate() + 1)
    }

    return days
  }

  // P/L-Farbe bestimmen - Einfache, bewährte Lösung
  const getPnLColor = (pnl: number) => {
    if (pnl > 0) return 'text-green-700 bg-green-100 border-green-200 hover:bg-green-200 dark:text-green-300 dark:bg-green-900 dark:border-green-700'
    if (pnl < 0) return 'text-red-700 bg-red-100 border-red-200 hover:bg-red-200 dark:text-red-300 dark:bg-red-900 dark:border-red-700'
    return 'text-gray-600 bg-gray-100 border-gray-200 hover:bg-gray-200 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600'
  }

  // Währungsformatierung
  const formatCurrency = (amount: number, currency = 'USD') => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  const days = generateCalendarDays()
  const monthName = currentDate.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })

  // Monatsstatistiken berechnen
  const monthStats = dailyPnL.reduce((acc, day) => {
    acc.totalPnL += day.totalPnL
    acc.tradingDays += day.tradeCount > 0 ? 1 : 0
    acc.profitableDays += day.totalPnL > 0 ? 1 : 0
    acc.totalTrades += day.tradeCount
    return acc
  }, { totalPnL: 0, tradingDays: 0, profitableDays: 0, totalTrades: 0 })

  const profitableDaysRate = monthStats.tradingDays > 0 ? (monthStats.profitableDays / monthStats.tradingDays) * 100 : 0

  return (
    <div className={className}>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5" />
                Trading Kalender
              </CardTitle>
              <CardDescription>
                Tägliche P/L-Übersicht für {monthName}
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => navigateMonth('prev')}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={() => navigateMonth('next')}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Monatsstatistiken */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div className="text-center">
              <div className={`text-lg font-bold ${monthStats.totalPnL >= 0 ? 'text-success' : 'text-error'}`}>
                {formatCurrency(monthStats.totalPnL)}
              </div>
              <div className="text-sm text-muted-foreground">Monats-P/L</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold">{monthStats.tradingDays}</div>
              <div className="text-sm text-muted-foreground">Trading-Tage</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-info">{profitableDaysRate.toFixed(1)}%</div>
              <div className="text-sm text-muted-foreground">Profitable Tage</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold">{monthStats.totalTrades}</div>
              <div className="text-sm text-muted-foreground">Gesamt Trades</div>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-muted-foreground">Lade Kalender-Daten...</div>
            </div>
          ) : dailyPnL.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <div className="text-muted-foreground mb-2">
                Keine Trading-Daten für {monthName} gefunden
              </div>
              <div className="text-sm text-muted-foreground">
                Lade eine Email-Datei hoch, um Trading-Daten zu importieren
              </div>
            </div>
          ) : (
            <>
              {/* Wochentage Header */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map(day => (
                  <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Kalender-Grid */}
              <div className="grid grid-cols-7 gap-1">
                {days.map((day, index) => (
                  <button
                    key={index}
                    onClick={() => day.pnlData ? setSelectedDay(day.pnlData) : null}
                    className={`
                      p-2 min-h-[60px] rounded-lg border transition-all duration-200 
                      hover:shadow-md flex flex-col items-center justify-center
                      ${day.isCurrentMonth ? 'border-border' : 'border-transparent opacity-30'}
                      ${day.isToday ? 'ring-2 ring-primary' : ''}
                      ${day.pnlData ? getPnLColor(day.pnlData.totalPnL) : 'bg-background'}
                      ${day.pnlData ? 'cursor-pointer hover:scale-105' : 'cursor-default'}
                    `}
                  >
                    <span className={`text-sm font-medium ${day.isToday ? 'font-bold' : ''}`}>
                      {day.day}
                    </span>
                    
                    {day.pnlData && (
                      <>
                        <span className="text-xs font-semibold">
                          {formatCurrency(day.pnlData.totalPnL, day.pnlData.currency)}
                        </span>
                        <div className="flex items-center gap-1 mt-1">
                          {day.pnlData.totalPnL > 0 ? (
                            <TrendingUp className="h-3 w-3" />
                          ) : day.pnlData.totalPnL < 0 ? (
                            <TrendingDown className="h-3 w-3" />
                          ) : null}
                          <span className="text-xs">{day.pnlData.tradeCount}</span>
                        </div>
                      </>
                    )}
                  </button>
                ))}
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Tagesdetails Modal/Card */}
      {selectedDay && (
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>
              Trading-Details für {new Date(selectedDay.date).toLocaleDateString('de-DE')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className={`text-xl font-bold ${selectedDay.totalPnL >= 0 ? 'text-success' : 'text-error'}`}>
                  {formatCurrency(selectedDay.totalPnL, selectedDay.currency)}
                </div>
                <div className="text-sm text-muted-foreground">Tages-P/L</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold">{selectedDay.tradeCount}</div>
                <div className="text-sm text-muted-foreground">Trades</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-success">{selectedDay.winningTrades}</div>
                <div className="text-sm text-muted-foreground">Gewinner</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-error">{selectedDay.losingTrades}</div>
                <div className="text-sm text-muted-foreground">Verlierer</div>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <Badge variant="outline" className="text-success border-success">
                Profit: {formatCurrency(selectedDay.totalProfit, selectedDay.currency)}
              </Badge>
              <Badge variant="outline" className="text-error border-error">
                Verlust: {formatCurrency(-selectedDay.totalLoss, selectedDay.currency)}
              </Badge>
              <Badge variant="outline">
                Win-Rate: {selectedDay.tradeCount > 0 ? ((selectedDay.winningTrades / selectedDay.tradeCount) * 100).toFixed(1) : 0}%
              </Badge>
            </div>

            <Button 
              variant="outline" 
              size="sm" 
              className="mt-4"
              onClick={() => setSelectedDay(null)}
            >
              Schließen
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
} 