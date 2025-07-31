"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { UserCheck, UserX, Clock, Mail, Calendar, AlertTriangle } from "lucide-react"

interface PendingUser {
  id: string
  email: string
  name: string | null
  registeredAt: string
}

export function UserManagement() {
  const [pendingUsers, setPendingUsers] = React.useState<PendingUser[]>([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [actionLoading, setActionLoading] = React.useState<string | null>(null)

  const fetchPendingUsers = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/admin/users')
      const data = await response.json()
      
      if (response.ok) {
        setPendingUsers(data.users || [])
      } else {
        console.error('Error fetching pending users:', data.error)
      }
    } catch (error) {
      console.error('Error fetching pending users:', error)
    } finally {
      setIsLoading(false)
    }
  }

  React.useEffect(() => {
    fetchPendingUsers()
  }, [])

  const handleUserAction = async (userId: string, action: 'approve' | 'reject', reason?: string) => {
    setActionLoading(userId)
    
    try {
      const response = await fetch('/api/admin/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action,
          userId,
          reason
        })
      })

      const data = await response.json()

      if (response.ok) {
        // Remove user from pending list
        setPendingUsers(prev => prev.filter(user => user.id !== userId))
        
        // Show success message
        alert(`Benutzer ${action === 'approve' ? 'genehmigt' : 'abgelehnt'}: ${data.message}`)
      } else {
        alert(`Fehler: ${data.error}`)
      }
    } catch (error) {
      alert('Ein Fehler ist aufgetreten')
    } finally {
      setActionLoading(null)
    }
  }

  const handleReject = (userId: string) => {
    const reason = prompt('Grund für die Ablehnung (optional):')
    handleUserAction(userId, 'reject', reason || undefined)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('de-DE')
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserCheck className="h-5 w-5" />
            Benutzer-Verwaltung
          </CardTitle>
          <CardDescription>
            Genehmigen oder lehnen Sie Registrierungsanfragen ab
          </CardDescription>
        </CardHeader>
        <CardContent>
          {pendingUsers.length === 0 ? (
            <div className="text-center py-8">
              <Clock className="h-12 w-12 text-base-content/40 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-base-content/60">
                Keine wartenden Benutzer
              </h3>
              <p className="text-sm text-base-content/40">
                Alle Registrierungsanfragen wurden bearbeitet.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="h-4 w-4 text-warning" />
                <span className="text-sm text-warning">
                  {pendingUsers.length} Benutzer warten auf Genehmigung
                </span>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Benutzer</TableHead>
                    <TableHead>E-Mail</TableHead>
                    <TableHead>Registriert</TableHead>
                    <TableHead>Aktionen</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                            {user.name?.charAt(0)?.toUpperCase() || user.email.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div className="font-medium">
                              {user.name || 'Kein Name'}
                            </div>
                            <Badge variant="outline" className="text-xs">
                              <Clock className="h-3 w-3 mr-1" />
                              Wartend
                            </Badge>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-base-content/60" />
                          {user.email}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2 text-sm text-base-content/60">
                          <Calendar className="h-4 w-4" />
                          {formatDate(user.registeredAt)}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            className="btn btn-success"
                            onClick={() => handleUserAction(user.id, 'approve')}
                            disabled={actionLoading === user.id}
                          >
                            {actionLoading === user.id ? (
                              <span className="loading loading-spinner loading-xs"></span>
                            ) : (
                              <UserCheck className="h-4 w-4" />
                            )}
                            Genehmigen
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="btn-error"
                            onClick={() => handleReject(user.id)}
                            disabled={actionLoading === user.id}
                          >
                            <UserX className="h-4 w-4" />
                            Ablehnen
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Schnellaktionen</CardTitle>
          <CardDescription>Nützliche Admin-Funktionen</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              variant="outline"
              onClick={fetchPendingUsers}
              className="flex items-center gap-2"
            >
              <Clock className="h-4 w-4" />
              Liste aktualisieren
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open('http://localhost:5555', '_blank')}
              className="flex items-center gap-2"
            >
              <UserCheck className="h-4 w-4" />
              Prisma Studio
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open('http://localhost:5435', '_blank')}
              className="flex items-center gap-2"
            >
              <UserCheck className="h-4 w-4" />
              PgAdmin
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 