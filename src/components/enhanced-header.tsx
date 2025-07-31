"use client"

import * as React from "react"
import { useSession, signOut } from "next-auth/react"
import { Menu, LogOut, RefreshCw, Maximize } from "lucide-react"
import { SimpleThemeToggle } from "@/components/theme/simple-theme-toggle"

interface EnhancedHeaderProps {
  sectionTitle: string
  trades?: any[]
  stats?: any
  onMenuToggle?: () => void
  showStats?: boolean
}

export function EnhancedHeader({ 
  sectionTitle, 
  trades = [], 
  stats = {}, 
  onMenuToggle,
  showStats = true 
}: EnhancedHeaderProps) {
  const { data: session } = useSession()

  const handleSignOut = () => {
    signOut({ callbackUrl: "/auth" })
  }

  const handleRefresh = () => {
    window.location.reload()
  }

  const handleFullscreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen()
    }
  }

  return (
    <header className="relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10"></div>
      
      {/* Main Header Content */}
      <div className="relative navbar glass-effect sticky top-0 z-10 shadow-lg">
        {/* Mobile Menu Toggle */}
        <div className="flex-none lg:hidden">
          <label htmlFor="drawer-toggle" className="btn btn-square btn-ghost hover-glow">
            <Menu className="h-5 w-5" />
          </label>
        </div>
        
        {/* Enhanced Title Section */}
        <div className="flex-1">
          <div className="flex items-center gap-4">
            {/* Title & Breadcrumb - Clean ohne Icon */}
            <div className="flex flex-col">
              <div className="breadcrumbs text-sm">
                <ul>
                  <li><a className="text-base-content opacity-60 hover:text-primary transition-colors">Journaly</a></li>
                  <li className="text-primary font-medium">{sectionTitle}</li>
                </ul>
              </div>
              <h1 className="text-2xl font-bold text-gradient">
                {sectionTitle}
              </h1>
            </div>
          </div>
        </div>

        {/* Enhanced User Area */}
        <div className="flex-none">
          <div className="flex items-center gap-3">
            {/* Welcome Badge */}
            <div className="hidden sm:flex items-center gap-2">
              <div className="badge badge-outline badge-primary pulse-ring">
                ✨ Willkommen, {session?.user?.name?.split(' ')[0] || 'Trader'}
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-1">
              <div className="tooltip tooltip-bottom" data-tip="Daten aktualisieren">
                <button 
                  className="btn btn-ghost btn-sm hover-glow" 
                  onClick={handleRefresh}
                >
                  <RefreshCw className="h-4 w-4" />
                </button>
              </div>
              
              <div className="tooltip tooltip-bottom" data-tip="Vollbild">
                <button 
                  className="btn btn-ghost btn-sm hover-glow"
                  onClick={handleFullscreen}
                >
                  <Maximize className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            {/* Theme Picker */}
            <div className="tooltip tooltip-bottom" data-tip="Theme wechseln">
              <SimpleThemeToggle />
            </div>
            
            {/* Enhanced User Menu */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost w-10 h-10 rounded-full hover:bg-base-200 p-0 hover-glow">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-content flex items-center justify-center shadow-lg border-2 border-base-100 transition-all duration-300 hover:scale-110">
                  {(session?.user?.name || session?.user?.email || "U")[0].toUpperCase()}
                </div>
              </div>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow-xl menu menu-sm dropdown-content glass-effect rounded-box w-64 border border-base-300">
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
                      <div className="text-xs opacity-60">
                        <span className="text-success">●</span> Online
                      </div>
                    </div>
                  </div>
                </li>
                
                <li><hr className="my-1" /></li>
                
                {/* Role Badge */}
                <li>
                  <div className="flex items-center justify-between p-2">
                    <span>Status</span>
                    <div className="badge badge-secondary badge-sm gap-1">
                      {session?.user?.role === 'ADMIN' ? '👑 Admin' : '👤 Trader'}
                    </div>
                  </div>
                </li>
                
                <li><hr className="my-1" /></li>
                
                {/* Sign Out */}
                <li>
                  <button onClick={handleSignOut} className="text-error hover:bg-error hover:bg-opacity-10 transition-colors">
                    <LogOut className="h-4 w-4" />
                    Abmelden
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Stats Bar - Echte Trading-Statistiken */}
      {showStats && (
        <div className="relative bg-gradient-to-r from-base-200 to-base-300 border-b border-base-300">
          <div className="container mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                {/* Quick Stats */}
                <div className="stats stats-horizontal shadow-sm glass-effect">
                  <div className="stat py-2 px-4 hover:bg-base-200 hover:bg-opacity-50 transition-colors cursor-pointer">
                    <div className="stat-title text-xs">Ø Trade</div>
                    <div className="stat-value text-sm text-primary">
                      {stats?.averageProfit ? `$${stats.averageProfit.toFixed(2)}` : '$0.00'}
                    </div>
                    <div className="stat-desc text-xs">Durchschnitt</div>
                  </div>
                  <div className="stat py-2 px-4 hover:bg-base-200 hover:bg-opacity-50 transition-colors cursor-pointer">
                    <div className="stat-title text-xs">Trades</div>
                    <div className="stat-value text-sm text-accent">{trades?.length || 0}</div>
                    <div className="stat-desc text-xs">Gesamt</div>
                  </div>
                  <div className="stat py-2 px-4 hover:bg-base-200 hover:bg-opacity-50 transition-colors cursor-pointer">
                    <div className="stat-title text-xs">Win Rate</div>
                    <div className="stat-value text-sm text-success">{stats?.winRate?.toFixed(1) || 0}%</div>
                    <div className="stat-desc text-xs">Erfolgsquote</div>
                  </div>
                  <div className="stat py-2 px-4 hover:bg-base-200 hover:bg-opacity-50 transition-colors cursor-pointer">
                    <div className="stat-title text-xs">Profit</div>
                    <div className={`stat-value text-sm ${stats?.totalProfit >= 0 ? 'text-success' : 'text-error'}`}>
                      {stats?.totalProfit ? `$${stats.totalProfit.toLocaleString()}` : '$0.00'}
                    </div>
                    <div className="stat-desc text-xs">Gesamt</div>
                  </div>
                </div>
              </div>
              
              {/* Live Status */}
              <div className="flex items-center gap-3">
                <div className="badge badge-success badge-sm gap-2 flex items-center">
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
      )}
    </header>
  )
} 