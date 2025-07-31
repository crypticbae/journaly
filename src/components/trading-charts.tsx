"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, Bar, BarChart, Pie, PieChart, Cell, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"
import { Trade } from "@/lib/email-parser"
import { useEffect, useState } from "react"

interface TradingChartsProps {
  trades: Trade[]
}

// Dynamic Theme Colors - VEREINFACHT für daisyUI Themes! 🎨
const getThemeColors = () => {
  // Get current theme to determine colors
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light'
  
  console.log('🎨 Current theme:', currentTheme)
  
  // Theme-specific color mappings (simplified but working approach)
  const themeColorMaps: Record<string, any> = {
    light: {
      primary: '#6366F1',    // Blue
      secondary: '#8B5CF6',  // Purple
      success: '#10B981',    // Green  
      error: '#EF4444',      // Red
      warning: '#F59E0B',    // Yellow
      accent: '#06B6D4',     // Cyan
      neutral: '#6B7280'     // Gray
    },
    dark: {
      primary: '#8B5CF6',    // Purple
      secondary: '#06B6D4',  // Cyan
      success: '#10B981',    // Green
      error: '#EF4444',      // Red
      warning: '#F59E0B',    // Yellow
      accent: '#8B5CF6',     // Purple
      neutral: '#6B7280'     // Gray
    },
    nord: {
      primary: '#5E81AC',    // Nord Blue
      secondary: '#88C0D0',  // Nord Light Blue  
      success: '#A3BE8C',    // Nord Green
      error: '#BF616A',      // Nord Red
      warning: '#EBCB8B',    // Nord Yellow
      accent: '#B48EAD',     // Nord Purple
      neutral: '#4C566A'     // Nord Dark Gray
    },
    cupcake: {
      primary: '#65C3F7',    // Cupcake Cyan
      secondary: '#F7C6D7',  // Cupcake Pink
      success: '#84CC16',    // Cupcake Green
      error: '#EF4444',      // Cupcake Red
      warning: '#F59E0B',    // Cupcake Yellow  
      accent: '#A855F7',     // Cupcake Purple
      neutral: '#6B7280'     // Cupcake Gray
    },
    bumblebee: {
      primary: '#FDE047',    // Bumblebee Yellow
      secondary: '#FACC15',  // Bumblebee Gold
      success: '#22C55E',    // Bumblebee Green
      error: '#EF4444',      // Bumblebee Red
      warning: '#F97316',    // Bumblebee Orange
      accent: '#000000',     // Bumblebee Black
      neutral: '#6B7280'     // Bumblebee Gray
    },
         retro: {
       primary: '#F59E0B',    // Retro Orange/Gold
       secondary: '#84CC16',  // Retro Green
       success: '#059669',    // Retro Success Green
       error: '#DC2626',      // Retro Red
       warning: '#D97706',    // Retro Warning Orange
       accent: '#7C3AED',     // Retro Purple
       neutral: '#6B7280'     // Retro Gray
     },
     halloween: {
       primary: '#FF8C00',    // Halloween Orange (spooky pumpkin)
       secondary: '#8B00FF',  // Halloween Purple (dark magic)
       success: '#32CD32',    // Halloween Green (poison/slime)
       error: '#FF4500',      // Halloween Red-Orange (blood)
       warning: '#FFD700',    // Halloween Gold (witch's treasure)
       accent: '#4B0082',     // Halloween Indigo (midnight)
       neutral: '#2F2F2F'     // Halloween Dark Gray (shadows)
     },
     forest: {
       primary: '#22C55E',    // Forest Green (main trees)
       secondary: '#16A34A',  // Forest Dark Green (deep woods)
       success: '#15803D',    // Forest Success Green (healthy plants)
       error: '#DC2626',      // Forest Red (autumn leaves)
       warning: '#F59E0B',    // Forest Warning Amber (sunlight)
       accent: '#0891B2',     // Forest Accent Teal (water/moss)
       neutral: '#374151'     // Forest Neutral Gray (bark/stone)
     },
     aqua: {
       primary: '#06B6D4',    // Aqua Cyan (ocean waves)
       secondary: '#8B5CF6',  // Aqua Purple (deep sea)
       success: '#10B981',    // Aqua Success Green (coral)
       error: '#F87171',      // Aqua Coral Red (sea anemone)
       warning: '#FCD34D',    // Aqua Warning Yellow (sunfish)
       accent: '#F0F9FF',     // Aqua Accent Light Blue (foam)
       neutral: '#374151'     // Aqua Neutral Gray (sea floor)
     },
     pastel: {
       primary: '#E879F9',    // Pastel Magenta (soft pink)
       secondary: '#FCA5A5',  // Pastel Coral (soft red)
       success: '#86EFAC',    // Pastel Success Green (mint)
       error: '#F87171',      // Pastel Coral Red (soft error)
       warning: '#FCD34D',    // Pastel Warning Yellow (soft gold)
       accent: '#A7F3D0',     // Pastel Accent Teal (soft mint)
       neutral: '#9CA3AF'     // Pastel Neutral Gray (soft gray)
     },
     dracula: {
       primary: '#FF79C6',    // Dracula Pink (vampire pink)
       secondary: '#BD93F9',  // Dracula Purple (mystic purple)
       success: '#50FA7B',    // Dracula Green (toxic green)
       error: '#FF5555',      // Dracula Red (blood red)
       warning: '#F1FA8C',    // Dracula Yellow (pale yellow)
       accent: '#8BE9FD',     // Dracula Cyan (ice blue)
       neutral: '#6272A4'     // Dracula Comment (gray blue)
     },
     night: {
       primary: '#7C3AED',    // Night Purple (starlight purple)
       secondary: '#A855F7',  // Night Magenta (cosmic purple)
       success: '#10B981',    // Night Success Green (emerald glow)
       error: '#EF4444',      // Night Error Red (ruby glow)
       warning: '#F59E0B',    // Night Warning Amber (golden star)
       accent: '#EC4899',     // Night Accent Pink (nebula pink)
       neutral: '#4B5563'     // Night Neutral Gray (midnight gray)
     },
     dim: {
       primary: '#34D399',    // Dim Emerald (soft green glow)
       secondary: '#F97316',  // Dim Orange (warm dim glow)
       success: '#10B981',    // Dim Success Green (emerald)
       error: '#F87171',      // Dim Error Red (soft red)
       warning: '#FBBF24',    // Dim Warning Yellow (soft gold)
       accent: '#C084FC',     // Dim Accent Purple (soft violet)
       neutral: '#6B7280'     // Dim Neutral Gray (muted gray)
     }
   }
  
  const colors = themeColorMaps[currentTheme] || themeColorMaps.light
  
  console.log('🎨 Using colors for theme:', currentTheme, colors)
  
  return colors
}

// Custom Tooltip Komponente
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-base-100 p-3 border border-base-300 rounded-lg shadow-lg">
        <p className="text-sm text-base-content/70 mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm font-medium" style={{ color: entry.color }}>
            {entry.dataKey}: ${entry.value?.toFixed(2)}
          </p>
        ))}
      </div>
    )
  }
  return null
}

// Currency formatter
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(value)
}

export function TradingCharts({ trades }: TradingChartsProps) {
  // Theme state for dynamic colors 🎨
  const [currentTheme, setCurrentTheme] = useState('light')
  const [colors, setColors] = useState(() => {
    // Safe initial state for SSR
    return {
      primary: '#6366F1',
      secondary: '#8B5CF6', 
      success: '#10B981',
      error: '#EF4444',
      warning: '#F59E0B',
      accent: '#06B6D4',
      neutral: '#6B7280'
    }
  })

  // Timeline state
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d')

  // Filter trades based on selected timeframe
  const getFilteredTrades = () => {
    const now = new Date()
    let startDate: Date

    switch (selectedTimeframe) {
      case '24h':
        startDate = new Date(now.getTime() - 24 * 60 * 60 * 1000)
        break
      case '7d':
        startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
        break
      case '30d':
        startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
        break
      case '1m':
        startDate = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate())
        break
      default:
        return trades
    }

    return trades.filter(trade => new Date(trade.openTime) >= startDate)
  }

  const filteredTrades = getFilteredTrades()

  // Watch for theme changes and get REAL CSS values
  useEffect(() => {
    const updateTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme') || 'light'
      setCurrentTheme(theme)
      
      // Get REAL theme colors from CSS custom properties
      const realColors = getThemeColors()
      console.log(`🎨 Loading REAL colors for theme "${theme}":`, realColors)
      setColors(realColors)
    }

    // Initial theme detection
    updateTheme()

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          updateTheme()
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    })

    return () => observer.disconnect()
  }, [])

  // Cumulative profit calculation
  const timelineData = filteredTrades
    .map((trade, index) => {
      const cumulativeProfit = filteredTrades
        .slice(0, index + 1)
        .reduce((sum, t) => sum + t.profit, 0)
      
      return {
        date: new Date(trade.openTime).toLocaleDateString('de-DE', { 
          month: 'short', 
          day: 'numeric' 
        }),
        cumulative: cumulativeProfit,
        profit: trade.profit,
        trades: index + 1
      }
    })

  // Monthly performance data
  const monthlyData = filteredTrades.reduce((acc: any, trade) => {
    const month = new Date(trade.openTime).toLocaleDateString('de-DE', { 
      month: 'short', 
      year: 'numeric' 
    })
    
    if (!acc[month]) {
      acc[month] = { month, profit: 0, loss: 0, count: 0 }
    }
    
    if (trade.profit > 0) {
      acc[month].profit += trade.profit
    } else {
      acc[month].loss += Math.abs(trade.profit)
    }
    acc[month].count += 1
    
    return acc
  }, {})

  const performanceData = Object.values(monthlyData)

  // Win/Loss pie chart data
  const winningTrades = filteredTrades.filter(t => t.profit > 0)
  const losingTrades = filteredTrades.filter(t => t.profit < 0)
  const breakEvenTrades = filteredTrades.filter(t => t.profit === 0)

  const pieData = [
    {
      name: "Gewinn-Trades",
      count: winningTrades.length,
      value: winningTrades.reduce((sum, trade) => sum + trade.profit, 0),
      fill: colors.success
    },
    {
      name: "Verlust-Trades", 
      count: losingTrades.length,
      value: Math.abs(losingTrades.reduce((sum, trade) => sum + trade.profit, 0)),
      fill: colors.error
    },
    {
      name: "Break-Even",
      count: breakEvenTrades.length, 
      value: 0,
      fill: colors.neutral
    }
  ].filter(item => item.count > 0)

  // Show message if no trades available
  if (trades.length === 0) {
    return (
      <div className="space-y-4">
        <Card>
          <CardContent className="flex items-center justify-center h-[200px]">
            <p className="text-base-content/60">Keine Trading-Daten verfügbar</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Timeline Selection */}
      <Card>
        <CardHeader>
          <CardTitle>📊 Analytics Timeline</CardTitle>
          <CardDescription>
            Wähle den Zeitraum für die Analyse
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {[
              { key: '24h', label: 'Letzte 24h', icon: '⏰' },
              { key: '7d', label: 'Letzte 7 Tage', icon: '📅' },
              { key: '30d', label: 'Letzte 30 Tage', icon: '📆' },
              { key: '1m', label: 'Letzter Monat', icon: '🗓️' }
            ].map((timeframe) => (
              <button
                key={timeframe.key}
                onClick={() => setSelectedTimeframe(timeframe.key)}
                className={`btn btn-sm ${
                  selectedTimeframe === timeframe.key 
                    ? 'btn-primary' 
                    : 'btn-outline hover:btn-primary'
                }`}
              >
                <span className="mr-1">{timeframe.icon}</span>
                {timeframe.label}
              </button>
            ))}
          </div>
          <div className="mt-3 text-sm text-base-content/60">
            Zeige {filteredTrades.length} von {trades.length} Trades
            {selectedTimeframe !== 'all' && (
              <span className="ml-2 badge badge-primary badge-sm">
                {selectedTimeframe === '24h' && 'Letzte 24 Stunden'}
                {selectedTimeframe === '7d' && 'Letzte 7 Tage'}
                {selectedTimeframe === '30d' && 'Letzte 30 Tage'}
                {selectedTimeframe === '1m' && 'Letzter Monat'}
              </span>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Show message if no filtered trades available */}
      {filteredTrades.length === 0 ? (
        <Card>
          <CardContent className="flex items-center justify-center h-[200px]">
            <div className="text-center">
              <p className="text-base-content/60 mb-2">
                Keine Trading-Daten für {
                  selectedTimeframe === '24h' ? 'die letzten 24 Stunden' :
                  selectedTimeframe === '7d' ? 'die letzten 7 Tage' :
                  selectedTimeframe === '30d' ? 'die letzten 30 Tage' :
                  selectedTimeframe === '1m' ? 'den letzten Monat' : 'den ausgewählten Zeitraum'
                } verfügbar
              </p>
              <p className="text-sm text-base-content/40">
                Wähle einen anderen Zeitraum oder importiere mehr Trading-Daten
              </p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Profit/Loss Timeline Chart */}
        <Card className="col-span-full lg:col-span-2">
          <CardHeader>
            <CardTitle>📈 Profit/Loss Timeline</CardTitle>
            <CardDescription>
              Entwicklung der Trades über Zeit (Kumulativ)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={timelineData} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={colors.neutral} opacity={0.3} />
                  <XAxis 
                    dataKey="date" 
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    fontSize={12}
                    stroke={colors.neutral}
                  />
                  <YAxis 
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    fontSize={12}
                    tickFormatter={(value) => `$${value}`}
                    stroke={colors.neutral}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Line 
                    type="monotone" 
                    dataKey="cumulative" 
                    stroke={colors.primary}
                    strokeWidth={3}
                    dot={{ fill: colors.primary, strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: colors.primary, strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Win/Loss Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>🎯 Win/Loss Verteilung</CardTitle>
            <CardDescription>
              Anzahl gewonnene vs. verlorene Trades
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="count"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip 
                    content={({ active, payload }: any) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload
                        return (
                          <div className="bg-base-100 p-3 border border-base-300 rounded-lg shadow-lg">
                            <p className="text-sm font-medium">{data.name}</p>
                            <p className="text-sm text-base-content/70">
                              {data.count} Trades
                            </p>
                            <p className="text-sm text-base-content/70">
                              {formatCurrency(data.value)}
                            </p>
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Performance */}
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle>📊 Monatliche Performance</CardTitle>
            <CardDescription>
              Gewinn/Verlust aufgeschlüsselt nach Monaten
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={colors.neutral} opacity={0.3} />
                  <XAxis 
                    dataKey="month" 
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    fontSize={12}
                    stroke={colors.neutral}
                  />
                  <YAxis 
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    fontSize={12}
                    tickFormatter={(value) => `$${value}`}
                    stroke={colors.neutral}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="profit" fill={colors.success} radius={[4, 4, 0, 0]} />
                  <Bar dataKey="loss" fill={colors.error} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Individual Trade Performance */}
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle>💹 Einzelne Trade Performance</CardTitle>
            <CardDescription>
              Profit/Loss jedes einzelnen Trades über Zeit
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={timelineData} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={colors.neutral} opacity={0.3} />
                  <XAxis 
                    dataKey="date" 
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    fontSize={12}
                    stroke={colors.neutral}
                  />
                  <YAxis 
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    fontSize={12}
                    tickFormatter={(value) => `$${value}`}
                    stroke={colors.neutral}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="profit" 
                    radius={[2, 2, 2, 2]}
                  >
                    {timelineData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.profit >= 0 ? colors.success : colors.error} 
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded" style={{backgroundColor: colors.success}}></div>
                <p className="text-sm text-base-content/70">
                  {timelineData.filter(d => d.profit >= 0).length} Gewinner
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded" style={{backgroundColor: colors.error}}></div>
                <p className="text-sm text-base-content/70">
                  {timelineData.filter(d => d.profit < 0).length} Verlierer
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      </>
      )}
    </div>
  )
} 