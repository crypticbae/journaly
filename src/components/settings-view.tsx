"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ChangePasswordForm } from "@/components/change-password-form"
import { CreditsSection } from "@/components/credits-section"
import { 
  Settings, 
  Database, 
  Download, 
  Trash2, 
  AlertTriangle,
  Info,
  FileText,
  Shield,
  Building2
} from "lucide-react"
import { useSession } from "next-auth/react"

export function SettingsView() {
  const { data: session } = useSession()
  const [isClearing, setIsClearing] = React.useState(false)
  const [tradeCount, setTradeCount] = React.useState<number | null>(null)
  const [accountCount, setAccountCount] = React.useState<number | null>(null)

  // Get user's data statistics
  React.useEffect(() => {
    const fetchUserStats = async () => {
      try {
        // Get trades count
        const tradesResponse = await fetch('/api/trades')
        const tradesData = await tradesResponse.json()
        if (tradesResponse.ok) {
          setTradeCount(tradesData.trades?.length || 0)
        }

        // Get accounts count
        const accountsResponse = await fetch('/api/accounts')
        const accountsData = await accountsResponse.json()
        if (accountsResponse.ok) {
          setAccountCount(accountsData.accounts?.length || 0)
        }
      } catch (error) {
        console.error('Error fetching user stats:', error)
      }
    }
    
    if (session?.user) {
      fetchUserStats()
    }
  }, [session])

  const handleClearData = async () => {
    if (!confirm('Möchtest du wirklich ALLE deine Trading-Daten löschen? Das umfasst alle deine Trading-Accounts und Trades. Diese Aktion kann nicht rückgängig gemacht werden.')) {
      return
    }

    // Doppelte Bestätigung für kritische Aktion
    if (!confirm('LETZTE WARNUNG: Alle deine Trading-Accounts und alle Trades werden permanent gelöscht. Bist du sicher?')) {
      return
    }

    setIsClearing(true)
    try {
      const response = await fetch('/api/clear', {
        method: 'POST',
      })

      if (response.ok) {
        alert('✅ Alle deine Trading-Daten wurden erfolgreich gelöscht.')
        setTradeCount(0)
        setAccountCount(0)
        // Reload page to refresh all data
        window.location.reload()
      } else {
        const errorData = await response.json()
        alert(`❌ Fehler beim Löschen: ${errorData.error}`)
      }
    } catch (error) {
      console.error('Error clearing data:', error)
      alert('❌ Netzwerkfehler beim Löschen der Daten.')
    } finally {
      setIsClearing(false)
    }
  }

  const handleExportData = async () => {
    try {
      const response = await fetch('/api/trades')
      const data = await response.json()
      
      if (response.ok && data.trades) {
        // Create enhanced CSV content with account information
        const headers = [
          'Datum', 
          'Ticket', 
          'Typ', 
          'Größe', 
          'Instrument', 
          'Entry Preis', 
          'Exit Preis', 
          'Profit', 
          'Kommentar',
          'Account Name',
          'Account Number',
          'Currency'
        ]
        
        const csvContent = [
          headers.join(','),
          ...data.trades.map((trade: any) => [
            trade.openTime,
            trade.ticket,
            trade.type,
            trade.size,
            trade.instrument,
            trade.price,
            trade.exitPrice || '',
            trade.profit,
            `"${trade.comment.replace(/"/g, '""')}"`,
            `"${trade.tradingAccount?.name || 'Unknown'}"`,
            trade.tradingAccount?.accountNumber || '',
            trade.tradingAccount?.currency || ''
          ].join(','))
        ].join('\n')

        // Download CSV
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
        const link = document.createElement('a')
        const url = URL.createObjectURL(blob)
        link.setAttribute('href', url)
        link.setAttribute('download', `journaly-${session?.user?.email}-${new Date().toISOString().split('T')[0]}.csv`)
        link.style.visibility = 'hidden'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } else {
        alert('❌ Fehler beim Exportieren der Daten.')
      }
    } catch (error) {
      console.error('Error exporting data:', error)
      alert('❌ Fehler beim Exportieren der Daten.')
    }
  }

  return (
    <div className="space-y-6">
      {/* User Profile & App Info */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Benutzer-Informationen
          </CardTitle>
          <CardDescription>
            Deine persönlichen Journaly Daten
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium">Benutzer</h4>
              <p className="text-sm text-base-content/70">{session?.user?.email || 'Nicht angemeldet'}</p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium">Account-Typ</h4>
              <div className="flex items-center gap-2">
                <span className="text-sm text-base-content/70">
                  {session?.user?.role === 'ADMIN' ? 'Administrator' : 'Standard-Benutzer'}
                </span>
                {session?.user?.role === 'ADMIN' && (
                  <Badge variant="outline" className="text-xs">Admin</Badge>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">Registriert seit</h4>
              <p className="text-sm text-base-content/70">Januar 2025</p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium">Status</h4>
              <Badge variant="outline" className="text-success">
                {session?.user?.status === 'APPROVED' ? 'Bestätigt' : 'Ausstehend'}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Password Change */}
      <ChangePasswordForm />

      {/* Data Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Deine Trading-Daten
          </CardTitle>
          <CardDescription>Übersicht und Verwaltung deiner persönlichen Trading-Daten</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Data Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg border">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">{accountCount !== null ? accountCount : '...'}</p>
              <p className="text-sm text-base-content/70">Trading Accounts</p>
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-info">{tradeCount !== null ? tradeCount : '...'}</p>
              <p className="text-sm text-base-content/70">Gespeicherte Trades</p>
            </div>
          </div>

          <Separator />

          {/* Data Actions */}
          <div className="space-y-4">
            <h4 className="font-medium">Daten Aktionen</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Daten Exportieren
                  </CardTitle>
                  <CardDescription className="text-xs">
                    Exportiere alle deine Trading-Daten als CSV-Datei
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button 
                    onClick={handleExportData}
                    variant="outline" 
                    size="sm"
                    disabled={tradeCount === 0}
                    className="w-full btn btn-outline"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    CSV Export
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-error/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2 text-error">
                    <Trash2 className="h-4 w-4" />
                    Alle Daten Löschen
                  </CardTitle>
                  <CardDescription className="text-xs">
                    Lösche alle deine Trading-Accounts und Trades permanent
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button 
                    onClick={handleClearData}
                    size="sm"
                    disabled={isClearing || (tradeCount === 0 && accountCount === 0)}
                    className="w-full btn btn-error"
                  >
                    {isClearing ? (
                      <>
                        <span className="loading loading-spinner loading-sm mr-2"></span>
                        Lösche...
                      </>
                    ) : (
                      <>
                        <Trash2 className="h-4 w-4 mr-2" />
                        Alle Daten Löschen
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Privacy & Account */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Datenschutz & Sicherheit
          </CardTitle>
          <CardDescription>Deine persönlichen Datenschutz-Einstellungen</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3 p-3 rounded-lg border border-success/20 bg-success/10">
            <Shield className="h-5 w-5 text-success mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-medium text-success">Deine Daten sind sicher</h4>
              <p className="text-sm text-success/80">
                Alle deine Trading-Daten sind vollständig privat und nur für dich sichtbar. 
                Kein anderer Benutzer kann deine Accounts oder Trades einsehen.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Sicherheits-Features</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                Sichere Anmeldung mit NextAuth.js
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                Deine Daten sind von anderen Benutzern getrennt
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                Verschlüsselte Datenübertragung (HTTPS)
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                Sichere Passwort-Speicherung
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Help & Trading Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Trading Journal Features
          </CardTitle>
          <CardDescription>Übersicht über die verfügbaren Funktionen</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium">Smart Import Features</h4>
            <ul className="space-y-2 text-sm text-base-content/70">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                Automatische Account-Erkennung in Emails
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                Separate Zuordnung von Trades zu Accounts
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                Automatische Account-Erstellung beim Import
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                Tab-basierte Account-Navigation
              </li>
            </ul>
          </div>

          <Separator />

          <div className="space-y-3">
            <h4 className="font-medium">Unterstützte Email-Formate</h4>
            <ul className="space-y-2 text-sm text-base-content/70">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-500 mt-2"></div>
                <span>PU Prime Daily Confirmation Emails (.eml, .html)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-500 mt-2"></div>
                <span>Weitergeleitete Gmail Trading-Reports</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-500 mt-2"></div>
                <span>Multi-Account Detection (z.B. Account #15423942)</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Important Notice */}
      <Card className="border-warning/20 bg-warning/10">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-warning mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-medium text-warning">Wichtige Hinweise</h4>
              <ul className="text-sm text-warning/80 space-y-1">
                <li>• Diese App dient nur zu Analysezwecken</li>
                <li>• Alle Berechnungen sind ohne Gewähr</li>
                <li>• Überprüfe wichtige Daten mit deinen offiziellen Broker-Statements</li>
                <li>• Die "Alle Daten löschen" Funktion kann nicht rückgängig gemacht werden</li>
                <li>• Bei Problemen wende dich an den Administrator</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Credits & About */}
      <CreditsSection />
    </div>
  )
} 