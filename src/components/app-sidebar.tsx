"use client"

import * as React from "react"
import { CalendarDays, LayoutDashboard, Inbox, Search, Settings, TrendingUpDown, LineChart, CloudUpload, Wallet, Shield, StickyNote } from "lucide-react"
import { useSession } from "next-auth/react"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Kalender",
    url: "#calendar",
    icon: CalendarDays,
  },
  {
    title: "Analytics", 
    url: "#analytics",
    icon: LineChart,
  },
  {
    title: "Alle Trades",
    url: "#trades", 
    icon: TrendingUpDown,
  },
  {
    title: "Notizen",
    url: "#notes",
    icon: StickyNote,
  },
  {
    title: "Upload",
    url: "#upload",
    icon: CloudUpload,
  },
]

const tradingItems = [
  {
    title: "Profit/Loss",
    url: "#profit",
    icon: Wallet,
  },
  {
    title: "Performance",
    url: "#performance", 
    icon: LineChart,
  },
]

const settingsItems = [
  {
    title: "Einstellungen",
    url: "#settings",
    icon: Settings,
  },
]

const adminItems = [
  {
    title: "Admin Dashboard",
    url: "/admin",
    icon: Shield,
  },
]

interface AppSidebarProps {
  currentSection?: string
  onSectionChange?: (section: string) => void
}

export function AppSidebar({ currentSection = "dashboard", onSectionChange }: AppSidebarProps) {
  const { data: session } = useSession()
  const isAdmin = session?.user?.role === 'ADMIN'
  const handleSectionClick = (section: string) => {
    // Remove the '#' prefix for section change
    const sectionId = section.replace('#', '')
    onSectionChange?.(sectionId)
    
    // Scroll to section if it exists
    const element = document.querySelector(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const renderMenuItems = (menuItems: typeof items, sectionTitle?: string) => (
    <div className="menu-section">
      {sectionTitle && (
        <div className="menu-title text-xs font-semibold text-base-content/60 px-4 py-2">
          {sectionTitle}
        </div>
      )}
      {menuItems.map((item) => {
        const sectionId = item.url.replace('#', '')
        const isActive = currentSection === sectionId
        
        return (
          <li key={item.title}>
            <button 
              onClick={() => handleSectionClick(item.url)}
              className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors hover:bg-base-200 ${
                isActive ? 'bg-primary text-primary-content' : 'text-base-content'
              }`}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.title}</span>
            </button>
          </li>
        )
      })}
    </div>
  )

  return (
    <aside className="min-h-full w-full bg-base-200 border-r border-base-300">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-base-300">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-content">
          <div className="w-8 h-8 bg-primary text-primary-content rounded-lg flex items-center justify-center font-bold text-lg">
            J
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold text-base-content">Journaly</span>
          <span className="text-xs text-base-content/60">by EFX24</span>
          <span className="text-xs text-base-content/40">Pro Analytics</span>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex flex-col h-full">
        <ul className="menu menu-vertical flex-1 p-0">
          {renderMenuItems(items, "Navigation")}
          
          <div className="divider my-2"></div>
          
          {renderMenuItems(tradingItems, "Analytics")}
          
          <div className="divider my-2"></div>
          
          {renderMenuItems(settingsItems, "Sonstiges")}
          
          {/* Admin Section - Only visible to admins */}
          {isAdmin && (
            <>
              <div className="divider my-2"></div>
              <div className="menu-section">
                <div className="menu-title text-xs font-semibold text-warning px-4 py-2">
                  Administration
                </div>
                {adminItems.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.url}
                      className="flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors hover:bg-base-200 text-warning"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </li>
                ))}
              </div>
            </>
          )}
        </ul>
        
        {/* Footer */}
        <div className="p-4 border-t border-base-300 text-center">
          <p className="text-xs text-base-content/60">
            © 2025 Journaly - by EFX24
          </p>
        </div>
      </nav>
    </aside>
  )
} 