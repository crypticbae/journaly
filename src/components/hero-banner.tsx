"use client"

import * as React from "react"
import { TrendingUpDown, BarChart3, Users, Zap } from "lucide-react"

interface HeroBannerProps {
  title?: string
  subtitle?: string
  stats?: {
    totalTrades?: number
    totalProfit?: number
    activeUsers?: number
    winRate?: number
  }
}

export function HeroBanner({
  title = "Journaly - by EFX24",
  subtitle = "Dein professionelles Trading Journal",
  stats = {}
}: HeroBannerProps) {
  return (
    <div className="hero bg-gradient-to-r from-primary to-secondary min-h-[300px] relative overflow-hidden opacity-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full animate-pulse opacity-20"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-secondary rounded-full animate-bounce opacity-20"></div>
        <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-accent rounded-full animate-ping opacity-20"></div>
      </div>
      
      <div className="hero-content text-center relative z-10">
        <div className="max-w-4xl">
          {/* Main Title */}
          <h1 className="text-5xl font-bold mb-6 text-gradient">
            {title}
          </h1>
          <p className="text-xl text-base-content mb-8 max-w-2xl mx-auto opacity-80">
            {subtitle}
          </p>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="card bg-base-100 shadow-xl backdrop-blur-sm border border-base-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 glass-effect">
              <div className="card-body items-center text-center p-6">
                <div className="avatar placeholder mb-2">
                  <div className="bg-primary text-primary-content w-12 h-12 rounded-full flex items-center justify-center">
                    <TrendingUpDown className="h-6 w-6" />
                  </div>
                </div>
                <h2 className="card-title text-primary text-2xl font-bold">
                  {stats.totalTrades?.toLocaleString() || "0"}
                </h2>
                <p className="text-base-content opacity-60">Trades Gesamt</p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl backdrop-blur-sm border border-base-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 glass-effect">
              <div className="card-body items-center text-center p-6">
                <div className="avatar placeholder mb-2">
                  <div className="bg-success text-success-content rounded-full w-12 flex items-center justify-center">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                </div>
                <h2 className="card-title text-success text-2xl font-bold">
                  {stats.totalProfit ? `$${stats.totalProfit.toLocaleString()}` : "$0"}
                </h2>
                <p className="text-base-content opacity-60">Gesamtprofit</p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl backdrop-blur-sm border border-base-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 glass-effect">
              <div className="card-body items-center text-center p-6">
                <div className="avatar placeholder mb-2">
                  <div className="bg-secondary text-secondary-content rounded-full w-12 flex items-center justify-center">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
                <h2 className="card-title text-secondary text-2xl font-bold">
                  {stats.activeUsers || "0"}
                </h2>
                <p className="text-base-content opacity-60">Aktive Accounts</p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl backdrop-blur-sm border border-base-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 glass-effect">
              <div className="card-body items-center text-center p-6">
                <div className="avatar placeholder mb-2">
                  <div className="bg-accent text-accent-content rounded-full w-12 flex items-center justify-center">
                    <Zap className="h-6 w-6" />
                  </div>
                </div>
                <h2 className="card-title text-accent text-2xl font-bold">
                  {stats.winRate ? `${stats.winRate.toFixed(1)}%` : "0%"}
                </h2>
                <p className="text-base-content opacity-60">Win Rate</p>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button className="btn btn-primary btn-lg glass-effect hover-glow">
              📊 Analytics öffnen
            </button>
            <button className="btn btn-outline btn-lg glass-effect hover-glow">
              📤 Trade importieren
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 