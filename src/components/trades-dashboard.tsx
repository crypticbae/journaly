"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"
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

interface AccountSummary {
  accountNumber: string;
  name: string;
  currency: string;
  date: string;
  closedPnL: number;
  balance: number;
  equity: number;
}

interface TradesDashboardProps {
  trades: Trade[];
  stats: TradingStats;
  accountSummary: AccountSummary | null;
}

export function TradesDashboard({ trades, stats, accountSummary }: TradesDashboardProps) {
  // Pagination State
  const [currentPage, setCurrentPage] = React.useState(1)
  const [tradesPerPage, setTradesPerPage] = React.useState(20)

  // Pagination Logic
  const totalTrades = trades.length
  const totalPages = Math.ceil(totalTrades / tradesPerPage)
  const startIndex = (currentPage - 1) * tradesPerPage
  const endIndex = startIndex + tradesPerPage
  const paginatedTrades = trades.slice(startIndex, endIndex)

  // Reset to page 1 when trades change
  React.useEffect(() => {
    setCurrentPage(1)
  }, [trades.length, tradesPerPage])

  const formatCurrency = (amount: number, currency = 'USD') => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: currency,
    }).format(amount)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('de-DE')
  }

  const getProfitBadge = (profit: number) => {
    if (profit > 0) {
      return <Badge variant="default" className="bg-success text-success-content">
        +{formatCurrency(profit)}
      </Badge>
    } else if (profit < 0) {
      return <Badge variant="error">
        {formatCurrency(profit)}
      </Badge>
    } else {
      return <Badge variant="secondary">
        {formatCurrency(profit)}
      </Badge>
    }
  }

  const getTypeBadge = (type: string) => {
    const displayText = type === 'buy' ? 'LONG' : 'SHORT';
    return (
      <Badge variant={type === 'buy' ? 'default' : 'secondary'}>
        {displayText}
      </Badge>
    )
  }

  const calculatePips = (entryPrice: number, exitPrice: number, type: string, instrument: string) => {
    const priceDiff = exitPrice - entryPrice;
    
    // Pip-Wert je nach Instrument
    let pipValue = 0.0001; // Standard für die meisten Forex-Paare
    if (instrument.includes('JPY')) {
      pipValue = 0.01; // JPY Paare
    } else if (instrument.includes('XAU') || instrument.includes('GOLD')) {
      pipValue = 0.1; // Gold: 1 Pip = 0.1
    }
    
    // Für Short-Positionen (sell) ist die Richtung umgekehrt
    const multiplier = type === 'buy' ? 1 : -1;
    const pipDifference = (priceDiff * multiplier) / pipValue;
    
    return pipDifference;
  }

  return (
    <div className="space-y-6">
      {/* Account Summary */}
      {accountSummary && (
        <Card>
          <CardHeader>
            <CardTitle>Account Übersicht</CardTitle>
            <CardDescription>
              {accountSummary.name} - Account #{accountSummary.accountNumber}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-base-content/70">Balance</p>
                                  <p className={`font-semibold ${accountSummary.balance >= 0 ? 'text-success' : 'text-error'}`}>
                  {formatCurrency(accountSummary.balance, accountSummary.currency)}
                </p>
              </div>
              <div>
                <p className="text-sm text-base-content/70">Equity</p>
                <p className="font-semibold">
                  {formatCurrency(accountSummary.equity, accountSummary.currency)}
                </p>
              </div>
              <div>
                <p className="text-sm text-base-content/70">Closed P/L</p>
                                  <p className={`font-semibold ${accountSummary.closedPnL >= 0 ? 'text-success' : 'text-error'}`}>
                  {formatCurrency(accountSummary.closedPnL, accountSummary.currency)}
                </p>
              </div>
              <div>
                <p className="text-sm text-base-content/70">Stand</p>
                <p className="text-sm">{accountSummary.date}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Trading Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-base-content/70">Gesamt Trades</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalTrades}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-base-content/70">Gesamt P/L</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${stats.totalProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {formatCurrency(stats.totalProfit)}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-base-content/70">Win Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.winRate.toFixed(1)}%</div>
            <p className="text-xs text-muted-foreground">
              {stats.winningTrades}W / {stats.losingTrades}L
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-base-content/70">Avg. P/L</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${stats.averageProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {formatCurrency(stats.averageProfit)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Trades Table */}
      <Card>
        <CardHeader>
          <CardTitle>Alle Trades</CardTitle>
          <CardDescription>
            Vollständige Übersicht aller importierten Trades
          </CardDescription>
        </CardHeader>
        <CardContent>
          {trades.length === 0 ? (
            <div className="text-center py-8 text-base-content/60">
              Keine Trades gefunden. Lade eine Trading-Email hoch.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Zeit</TableHead>
                    <TableHead>Ticket</TableHead>
                    <TableHead>Typ</TableHead>
                    <TableHead>Instrument</TableHead>
                    <TableHead>Volumen</TableHead>
                    <TableHead>Entry</TableHead>
                    <TableHead>Exit</TableHead>
                    <TableHead>Pips</TableHead>
                    <TableHead>Profit/Loss</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedTrades.map((trade) => {
                    const pips = trade.exitPrice ? calculatePips(trade.price, trade.exitPrice, trade.type, trade.instrument) : 0;
                    
                    return (
                      <TableRow key={trade.id}>
                        <TableCell className="text-sm">
                          {formatDate(trade.openTime)}
                        </TableCell>
                        <TableCell className="font-mono text-sm">
                          {trade.ticket}
                        </TableCell>
                        <TableCell>
                          {getTypeBadge(trade.type)}
                        </TableCell>
                        <TableCell className="font-semibold">
                          {trade.instrument}
                        </TableCell>
                        <TableCell>{trade.size}</TableCell>
                        <TableCell className="font-mono">
                          {trade.price.toFixed(2)}
                        </TableCell>
                        <TableCell className="font-mono">
                          {trade.exitPrice ? trade.exitPrice.toFixed(2) : '-'}
                        </TableCell>
                        <TableCell className="font-mono">
                          <Badge variant={pips >= 0 ? 'default' : 'error'} className={pips >= 0 ? 'bg-success text-success-content' : 'bg-error text-error-content'}>
                            {pips >= 0 ? '+' : ''}{pips.toFixed(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {getProfitBadge(trade.profit)}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">
                            {trade.entry}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </div>
          )}

          {/* Pagination Controls */}
          {totalTrades > 0 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border-t border-base-300">
              {/* Page Size Selector */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-base-content">Anzeigen:</span>
                <select
                  className="select select-bordered select-sm w-auto"
                  value={tradesPerPage}
                  onChange={(e) => setTradesPerPage(Number(e.target.value))}
                >
                  <option value={20}>20 pro Seite</option>
                  <option value={50}>50 pro Seite</option>
                  <option value={100}>100 pro Seite</option>
                </select>
              </div>

              {/* Page Info */}
              <div className="text-sm text-base-content">
                {totalTrades > 0 ? (
                  <>
                    Zeige {startIndex + 1}-{Math.min(endIndex, totalTrades)} von {totalTrades} Trades
                  </>
                ) : (
                  'Keine Trades'
                )}
              </div>

              {/* Page Navigation */}
              {totalPages > 1 && (
                <div className="join">
                  <button 
                    className="join-item btn btn-sm"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  
                  {/* Page Numbers */}
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum: number;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                    
                    return (
                      <button
                        key={pageNum}
                        className={`join-item btn btn-sm ${
                          currentPage === pageNum ? 'btn-active' : ''
                        }`}
                        onClick={() => setCurrentPage(pageNum)}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                  
                  <button 
                    className="join-item btn btn-sm"
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
} 