"use client"

import * as React from "react"
import { useSession, signOut } from "next-auth/react"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { AppSidebar } from "@/components/app-sidebar"
import { UserManagement } from "@/components/admin/user-management"
import { Menu, LogOut, Shield, Users, Settings as SettingsIcon, Database } from "lucide-react"

export default function AdminPage() {
  const { data: session } = useSession()
  const [currentSection, setCurrentSection] = React.useState("users")

  const handleSectionChange = (section: string) => {
    setCurrentSection(section)
  }

  const handleSignOut = () => {
    signOut({ callbackUrl: "/auth" })
  }

  const getSectionTitle = () => {
    switch (currentSection) {
      case "users": return "Benutzer-Verwaltung"
      case "system": return "System-Einstellungen"
      case "database": return "Datenbank-Verwaltung"
      case "dashboard": return "Dashboard"
      case "analytics": return "Analytics"
      case "trades": return "Alle Trades"
      case "upload": return "Upload"
      case "profit": return "Profit/Loss"
      case "performance": return "Performance"
      case "settings": return "Einstellungen"
      default: return "Admin Dashboard"
    }
  }

  const renderAdminSection = () => {
    switch (currentSection) {
      case "users":
        return <UserManagement />
      
      case "system":
        return (
          <div className="space-y-6">
            <div className="card bg-base-100 shadow-sm">
              <div className="card-body">
                <h2 className="card-title">System-Einstellungen</h2>
                <p className="text-base-content/60">Globale Systemkonfiguration und -verwaltung</p>
                
                <div className="space-y-4 mt-4">
                  <div className="alert alert-info">
                    <SettingsIcon className="h-5 w-5" />
                    <div>
                      <h4 className="font-medium">Coming Soon</h4>
                      <p className="text-sm">System-Einstellungen werden in einem zukünftigen Update verfügbar sein.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      
      case "database":
        return (
          <div className="space-y-6">
            <div className="card bg-base-100 shadow-sm">
              <div className="card-body">
                <h2 className="card-title">Datenbank-Verwaltung</h2>
                <p className="text-base-content/60">Datenbank-Status und globale Operationen</p>
                
                <div className="space-y-4 mt-4">
                  <div className="alert alert-warning">
                    <Database className="h-5 w-5" />
                    <div>
                      <h4 className="font-medium">Erweiterte Datenbank-Features</h4>
                      <p className="text-sm">Datenbank-Backups, Migrations und globale Bereinigung werden in einem zukünftigen Update verfügbar sein.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      
      default:
        return (
          <div className="space-y-6">
            <div className="card bg-base-100 shadow-sm">
              <div className="card-body">
                <h2 className="card-title flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Admin Dashboard
                </h2>
                <p className="text-base-content/60">Zentrale Verwaltung für Administratoren</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="stat bg-primary/10 rounded-lg p-4">
                    <div className="stat-figure text-primary">
                      <Users className="h-8 w-8" />
                    </div>
                    <div className="stat-title text-primary">Benutzer</div>
                    <div className="stat-value text-primary">?</div>
                    <div className="stat-desc text-primary/70">Registrierte User</div>
                  </div>
                  
                  <div className="stat bg-info/10 rounded-lg p-4">
                    <div className="stat-figure text-info">
                      <Database className="h-8 w-8" />
                    </div>
                    <div className="stat-title text-info">System</div>
                    <div className="stat-value text-info">OK</div>
                    <div className="stat-desc text-info/70">PostgreSQL</div>
                  </div>
                  
                  <div className="stat bg-success/10 rounded-lg p-4">
                    <div className="stat-figure text-success">
                      <SettingsIcon className="h-8 w-8" />
                    </div>
                    <div className="stat-title text-success">Status</div>
                    <div className="stat-value text-success">Live</div>
                    <div className="stat-desc text-success/70">Production Ready</div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-medium mb-3">Schnellzugriff</h3>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setCurrentSection("users")}
                      className="btn btn-primary btn-sm"
                    >
                      <Users className="h-4 w-4" />
                      Benutzer verwalten
                    </button>
                    <button 
                      onClick={() => setCurrentSection("system")}
                      className="btn btn-outline btn-sm"
                    >
                      <SettingsIcon className="h-4 w-4" />
                      System-Einstellungen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <ProtectedRoute adminOnly={true}>
      <div className="drawer lg:drawer-open">
        <input id="admin-drawer-toggle" type="checkbox" className="drawer-toggle" />
        
        {/* Sidebar */}
        <div className="drawer-side">
          <label htmlFor="admin-drawer-toggle" className="drawer-overlay"></label>
          <div className="w-64 min-h-full bg-base-200 border-r border-base-300">
            <AppSidebar 
              currentSection={currentSection} 
              onSectionChange={handleSectionChange}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="drawer-content flex flex-col min-h-screen">
          {/* Header */}
          <header className="navbar bg-base-100 border-b border-base-300 sticky top-0 z-10">
            <div className="flex-none lg:hidden">
              <label htmlFor="admin-drawer-toggle" className="btn btn-square btn-ghost">
                <Menu className="h-5 w-5" />
              </label>
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-base-content flex items-center gap-2">
                  <Shield className="h-5 w-5 text-warning" />
                  {getSectionTitle()}
                </h1>
                <p className="text-sm text-base-content/60">
                  Administrator: {session?.user?.name || session?.user?.email}
                </p>
              </div>
            </div>

            {/* User Menu */}
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-8 h-8 rounded-full bg-warning text-warning-content flex items-center justify-center">
                    <Shield className="h-4 w-4" />
                  </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                  <li className="menu-title">
                    <span>Administrator</span>
                  </li>
                  <li>
                    <a href="/dashboard" className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Zum User-Dashboard
                    </a>
                  </li>
                  <li><hr /></li>
                  <li>
                    <button onClick={handleSignOut} className="text-error">
                      <LogOut className="h-4 w-4" />
                      Abmelden
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </header>

          {/* Admin Notice */}
          <div className="bg-warning/10 border-b border-warning/20 px-6 py-3">
            <div className="flex items-center gap-2 text-warning">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Administrator-Modus</span>
              <span className="text-xs opacity-70">• Erweiterte Berechtigungen aktiv</span>
            </div>
          </div>

          {/* Main Content Area */}
          <main className="flex-1 overflow-auto p-6 bg-base-200/30">
            <div className="container mx-auto max-w-7xl">
              {renderAdminSection()}
            </div>
          </main>

          {/* Footer */}
          <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <div>
              <p className="text-sm">Journaly - Admin Dashboard v2.0</p>
            </div>
          </footer>
        </div>
      </div>
    </ProtectedRoute>
  )
} 