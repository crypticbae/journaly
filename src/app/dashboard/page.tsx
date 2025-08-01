"use client"

import * as React from "react"
import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { AppSidebar } from "@/components/app-sidebar"
import { TradesDashboard } from "@/components/trades-dashboard"
import { TradingCharts } from "@/components/trading-charts"
import { AllTradesView } from "@/components/all-trades-view"
import { UploadComponent } from "@/components/upload-component"
import { ProfitLossView } from "@/components/profit-loss-view"
import { PerformanceView } from "@/components/performance-view"
import { SettingsView } from "@/components/settings-view"
import { CalendarView } from "@/components/calendar-view"
import { NotesView } from "@/components/notes-view"
import { NewsFeed } from "@/components/news-feed"
import { AccountSelector } from "@/components/accounts/account-selector"
import { useTradingAccounts } from "@/hooks/use-trading-accounts"
import { Trade } from "@/lib/email-parser"
import { Menu, LogOut, Building2, RefreshCw, Maximize } from "lucide-react"
import { SimpleThemeToggle } from "@/components/theme/simple-theme-toggle"
import { TradingQuotes } from "@/components/trading-quotes"
import { EducationMenu } from "@/components/education-menu"


interface TradingStats {
  totalTrades: number
  totalProfit: number
  winningTrades: number
  losingTrades: number
  winRate: number
  averageProfit: number
  maxProfit: number
  maxLoss: number
}

interface AccountSummary {
  accountNumber: string
  name: string
  currency: string
  date: string
  closedPnL: number
  balance: number
  equity: number
  previousBalance: number
  previousEquity: number
  totalCreditFacility: number
  floatingPnL: number
  marginRequirements: number
  availableMargin: number
}

export default function DashboardPage() {
  const { data: session } = useSession()
  const {
    accounts,
    selectedAccount,
    selectedAccountId,
    isLoading: accountsLoading,
    selectAccount,
    refreshAccounts
  } = useTradingAccounts()
  
  const [trades, setTrades] = React.useState<Trade[]>([])
  const [stats, setStats] = React.useState<TradingStats>({
    totalTrades: 0,
    totalProfit: 0,
    winningTrades: 0,
    losingTrades: 0,
    winRate: 0,
    averageProfit: 0,
    maxProfit: 0,
    maxLoss: 0
  })
  const [accountSummary, setAccountSummary] = React.useState<AccountSummary | null>(null)
  const [isLoading, setIsLoading] = React.useState(true)
  const [currentSection, setCurrentSection] = React.useState("dashboard")
  
  // Fetch trades and stats function
  const fetchTrades = React.useCallback(async () => {
    setIsLoading(true)
    try {
      // URL mit Account-Filter aufbauen
      const url = new URL('/api/trades', window.location.origin)
      if (selectedAccountId && selectedAccountId !== 'all') {
        url.searchParams.set('accountId', selectedAccountId)
      }

      console.log(`📊 Fetching trades with URL: ${url.toString()}`)
      
      const response = await fetch(url.toString())
      const data = await response.json()
      
      if (response.ok) {
        setTrades(data.trades || [])
        setStats(data.stats || {
          totalTrades: 0,
          totalProfit: 0,
          winningTrades: 0,
          losingTrades: 0,
          winRate: 0,
          averageProfit: 0,
          maxProfit: 0,
          maxLoss: 0
        })
        console.log(`📊 Loaded ${data.trades?.length || 0} trades for ${selectedAccount?.name || 'all accounts'}`)
      } else {
        console.error('Failed to fetch trades:', data.error)
        setTrades([])
        setStats({
          totalTrades: 0,
          totalProfit: 0,
          winningTrades: 0,
          losingTrades: 0,
          winRate: 0,
          averageProfit: 0,
          maxProfit: 0,
          maxLoss: 0
        })
      }
    } catch (error) {
      console.error('Error fetching trades:', error)
      setTrades([])
      setStats({
        totalTrades: 0,
        totalProfit: 0,
        winningTrades: 0,
        losingTrades: 0,
        winRate: 0,
        averageProfit: 0,
        maxProfit: 0,
        maxLoss: 0
      })
    } finally {
      setIsLoading(false)
    }
  }, [selectedAccountId, selectedAccount])

  React.useEffect(() => {
    fetchTrades()
  }, [fetchTrades])

  const handleUploadSuccess = () => {
    fetchTrades()
    refreshAccounts() // Refresh account data including trade counts
  }

  const handleSectionChange = (section: string) => {
    setCurrentSection(section)
  }

  const handleSignOut = () => {
    signOut({ callbackUrl: "/auth" })
  }

  const getSectionTitle = () => {
    switch (currentSection) {
      case "dashboard": return "Dashboard"
      case "calendar": return "Trading Kalender"
      case "analytics": return "Analytics"
      case "trades": return "Alle Trades"
      case "notes": return "Trading Notizen"
      case "news": return "News & Markets"
      case "upload": return "Upload"
      case "profit": return "Profit/Loss"
      case "performance": return "Performance"
      case "settings": return "Einstellungen"
      default: return "Journaly"
    }
  }

  const renderCurrentSection = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center min-h-64">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      )
    }

    switch (currentSection) {
      case "dashboard":
        return (
          <TradesDashboard 
            trades={trades} 
            stats={stats} 
            accountSummary={accountSummary}
          />
        )
      
      case "calendar":
        return <CalendarView selectedAccountId={selectedAccountId} />
      
      case "analytics":
        return <TradingCharts trades={trades} />
      
      case "trades":
        return <AllTradesView trades={trades} stats={stats} />
      
      case "notes":
        return <NotesView notes={[]} trades={trades} />
      
      case "news":
        return <NewsFeed />
      
      case "upload":
        return <UploadComponent onUploadSuccess={handleUploadSuccess} />
      
      case "profit":
        return <ProfitLossView trades={trades} stats={stats} />
      
      case "performance":
        return <PerformanceView trades={trades} stats={stats} />
      
      case "settings":
        return <SettingsView />
      
      default:
        return (
          <TradesDashboard 
            trades={trades} 
            stats={stats} 
            accountSummary={accountSummary}
          />
        )
    }
  }

  return (
    <ProtectedRoute>
      <div className="drawer lg:drawer-open">
        <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />
        
        {/* Sidebar */}
        <div className="drawer-side">
          <label htmlFor="drawer-toggle" className="drawer-overlay"></label>
          <div className="w-64 min-h-full bg-base-200 border-r border-base-300">
            <AppSidebar 
              currentSection={currentSection} 
              onSectionChange={handleSectionChange}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="drawer-content flex flex-col min-h-screen">
          {/* Beautiful Header with Gradient */}
          <header className="relative">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10"></div>
            
            {/* Main Header Content */}
            <div className="relative navbar bg-base-100 backdrop-blur-sm border-b border-base-300 sticky top-0 z-10 glass-effect">
              <div className="flex-none lg:hidden">
                <label htmlFor="drawer-toggle" className="btn btn-square btn-ghost">
                  <Menu className="h-5 w-5" />
                </label>
              </div>
              
              {/* Enhanced Title Section */}
              <div className="flex-1">
                <div className="flex items-center gap-4">
                  {/* Title & Breadcrumb */}
                  <div className="flex flex-col">
                    <div className="breadcrumbs text-sm">
                      <ul>
                        <li><a className="text-base-content opacity-60">Journaly</a></li>
                        <li className="text-primary font-medium">{getSectionTitle()}</li>
                      </ul>
                    </div>
                    <h1 className="text-2xl font-bold text-gradient">
                      {getSectionTitle()}
                    </h1>
                  </div>
                  
                  {/* Trading Quotes - Zentriert */}
                  <div className="hidden lg:flex flex-1 justify-center">
                    <div className="max-w-lg">
                      <TradingQuotes />
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced User Area */}
              <div className="flex-none">
                <div className="flex items-center gap-3">
                  {/* Welcome Badge */}
                  <div className="hidden sm:flex items-center gap-2">
                    <div className="badge badge-outline badge-primary">
                      ✨ Willkommen, {session?.user?.name?.split(' ')[0] || 'Trader'}
                    </div>
                  </div>
                  
                  {/* Theme Picker with enhanced styling */}
                  <div className="tooltip tooltip-bottom" data-tip="Theme wechseln">
                    <SimpleThemeToggle />
                  </div>
                  
                  {/* Enhanced User Menu */}
                  <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost w-10 h-10 rounded-full hover:bg-base-200 p-0">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-content flex items-center justify-center shadow-lg border-2 border-base-100">
                        {(session?.user?.name || session?.user?.email || "U")[0].toUpperCase()}
                      </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow-xl menu menu-sm dropdown-content bg-base-100 rounded-box w-64 border border-base-300">
                      {/* User Info Header */}
                      <li className="menu-title">
                        <div className="flex items-center gap-3 p-2">
                          <div className="avatar">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-content flex items-center justify-center">
                              {(session?.user?.name || session?.user?.email || "U")[0].toUpperCase()}
                            </div>
                          </div>
                          <div>
                            <div className="font-medium">{session?.user?.name || session?.user?.email}</div>
                            <div className="text-xs opacity-60">Online</div>
                          </div>
                        </div>
                      </li>
                      
                      <li><hr className="my-1" /></li>
                      
                      {/* Role Badge */}
                      <li>
                        <div className="flex items-center justify-between p-2">
                          <span>Status</span>
                          <div className="badge badge-secondary badge-sm">
                            {session?.user?.role === 'ADMIN' ? '👑 Admin' : '👤 Trader'}
                          </div>
                        </div>
                      </li>
                      
                      <li><hr className="my-1" /></li>
                      
                      {/* Sign Out */}
                      <li>
                        <button onClick={handleSignOut} className="text-error hover:bg-error hover:bg-opacity-10">
                          <LogOut className="h-4 w-4" />
                          Abmelden
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Stats Bar */}
            <div className="relative bg-gradient-to-r from-base-200 to-base-300 border-b border-base-300">
              <div className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    {/* Quick Stats - Echte Trading-Statistiken */}
                    <div className="stats stats-horizontal shadow-sm bg-base-100">
                      <div className="stat py-2 px-4">
                        <div className="stat-title text-xs">Ø Trade</div>
                        <div className="stat-value text-sm text-primary">
                          {stats?.averageProfit ? `$${stats.averageProfit.toFixed(2)}` : '$0.00'}
                        </div>
                        <div className="stat-desc text-xs">Durchschnitt</div>
                      </div>
                      <div className="stat py-2 px-4">
                        <div className="stat-title text-xs">Trades</div>
                        <div className="stat-value text-sm text-accent">{trades?.length || 0}</div>
                        <div className="stat-desc text-xs">Gesamt</div>
                      </div>
                      <div className="stat py-2 px-4">
                        <div className="stat-title text-xs">Win Rate</div>
                        <div className="stat-value text-sm text-success">{stats?.winRate?.toFixed(1) || 0}%</div>
                        <div className="stat-desc text-xs">Erfolgsquote</div>
                      </div>
                      <div className="stat py-2 px-4">
                        <div className="stat-title text-xs">Profit</div>
                        <div className={`stat-value text-sm ${stats?.totalProfit >= 0 ? 'text-success' : 'text-error'}`}>
                          {stats?.totalProfit ? `$${stats.totalProfit.toLocaleString()}` : '$0.00'}
                        </div>
                        <div className="stat-desc text-xs">Gesamt</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Live Status & Action Buttons */}
                  <div className="flex items-center gap-3">
                    {/* Action Buttons */}
                    <div className="flex items-center gap-1">
                      <div className="tooltip tooltip-bottom" data-tip="Daten aktualisieren">
                        <button 
                          className="btn btn-ghost btn-sm hover:bg-base-300" 
                          onClick={() => window.location.reload()}
                        >
                          <RefreshCw className="h-4 w-4" />
                        </button>
                      </div>
                      
                      <div className="tooltip tooltip-bottom" data-tip="Vollbild">
                        <button 
                          className="btn btn-ghost btn-sm hover:bg-base-300"
                          onClick={() => document.documentElement.requestFullscreen()}
                        >
                          <Maximize className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Live Status */}
                    <div className="flex items-center gap-2">
                      <div className="badge badge-success badge-sm gap-1 flex items-center">
                        <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                        <span>Live</span>
                      </div>
                      <div className="text-xs text-base-content opacity-60">
                        Letzte Aktualisierung: {new Date().toLocaleTimeString('de-DE')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Enhanced Account Selector */}
          <div className="bg-gradient-to-r from-base-100 to-base-200 border-b border-base-300 px-6 py-4">
            {accountsLoading ? (
              <div className="flex justify-center py-8">
                <div className="flex items-center gap-3">
                  <span className="loading loading-spinner loading-md text-primary"></span>
                  <span className="text-base-content opacity-60">Lade Accounts...</span>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <AccountSelector
                  accounts={accounts}
                  selectedAccountId={selectedAccountId}
                  onAccountSelect={selectAccount}
                />
              </div>
            )}
          </div>

          {/* Main Content Area */}
          <main className="flex-1 overflow-auto p-6 bg-base-200/30">
            <div className="container mx-auto max-w-7xl">
              {renderCurrentSection()}
            </div>
          </main>

          {/* Footer */}
          <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <div>
              <p className="text-sm">Journaly - by EFX24 v2.0</p>
            </div>
          </footer>
        </div>
      </div>

      {/* Education Menu - Fixed Bottom Left */}
      <EducationMenu />

    </ProtectedRoute>
  )
} 