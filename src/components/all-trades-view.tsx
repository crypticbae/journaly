"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, Search, TrendingUp, TrendingDown, ChevronLeft, ChevronRight, Calendar, X, MessageSquare } from "lucide-react"
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

interface AllTradesViewProps {
  trades: Trade[]
  stats: TradingStats
}

type SortField = 'openTime' | 'instrument' | 'type' | 'size' | 'price' | 'profit'
type SortOrder = 'asc' | 'desc'

export function AllTradesView({ trades, stats }: AllTradesViewProps) {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [instrumentFilter, setInstrumentFilter] = React.useState("all")
  const [typeFilter, setTypeFilter] = React.useState("all")
  const [startDate, setStartDate] = React.useState("")
  const [endDate, setEndDate] = React.useState("")
  const [sortField, setSortField] = React.useState<SortField>('openTime')
  const [sortOrder, setSortOrder] = React.useState<SortOrder>('desc')
  
  // Pagination State
  const [currentPage, setCurrentPage] = React.useState(1)
  const [tradesPerPage, setTradesPerPage] = React.useState(20)

  // Get unique instruments for filter
  const uniqueInstruments = React.useMemo(() => {
    console.log('📊 Creating instrument filter options from trades:', trades.length)
    const instruments = new Set(trades.map(trade => trade.instrument).filter(Boolean))
    const instrumentArray = Array.from(instruments).sort()
    console.log('🎯 Found instruments:', instrumentArray)
    return instrumentArray
  }, [trades])

  // Filter and sort trades
  const filteredAndSortedTrades = React.useMemo(() => {
    console.log('🔍 Filtering trades:', { 
      totalTrades: trades.length, 
      searchTerm, 
      instrumentFilter, 
      typeFilter,
      startDate,
      endDate
    })

    let filtered = trades.filter(trade => {
      // Safe string checks mit fallbacks
      const instrument = trade.instrument || ''
      const ticket = trade.ticket || ''
      const comment = trade.comment || ''
      const type = trade.type || ''

      const matchesSearch = searchTerm === '' || 
                           instrument.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           ticket.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           comment.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesInstrument = instrumentFilter === "all" || instrument === instrumentFilter
      const matchesType = typeFilter === "all" || type === typeFilter

      // Datums-Filter
      const tradeDate = new Date(trade.openTime)
      let matchesDateRange = true

      if (startDate) {
        const start = new Date(startDate)
        start.setHours(0, 0, 0, 0) // Start des Tages
        matchesDateRange = matchesDateRange && tradeDate >= start
      }

      if (endDate) {
        const end = new Date(endDate)
        end.setHours(23, 59, 59, 999) // Ende des Tages
        matchesDateRange = matchesDateRange && tradeDate <= end
      }

      return matchesSearch && matchesInstrument && matchesType && matchesDateRange
    })

    console.log('✅ Filtered trades count:', filtered.length)
    console.log('🎯 Applied filters:', { searchTerm, instrumentFilter, typeFilter, startDate, endDate })

    return filtered.sort((a, b) => {
      let aValue: any = a[sortField]
      let bValue: any = b[sortField]

      // Handle different field types
      if (sortField === 'openTime') {
        aValue = new Date(a.openTime).getTime()
        bValue = new Date(b.openTime).getTime()
      } else if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase()
        bValue = bValue.toLowerCase()
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    })
  }, [trades, searchTerm, instrumentFilter, typeFilter, startDate, endDate, sortField, sortOrder])

  // Pagination Logic
  const totalFilteredTrades = filteredAndSortedTrades.length
  const totalPages = Math.ceil(totalFilteredTrades / tradesPerPage)
  const startIndex = (currentPage - 1) * tradesPerPage
  const endIndex = startIndex + tradesPerPage
  const paginatedTrades = filteredAndSortedTrades.slice(startIndex, endIndex)

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, instrumentFilter, typeFilter, startDate, endDate, tradesPerPage])

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortOrder('desc')
    }
  }

  // Datums-Filter zurücksetzen
  const clearDateFilter = () => {
    setStartDate("")
    setEndDate("")
  }

  // Schnell-Filter für häufige Zeiträume
  const setQuickDateFilter = (days: number) => {
    const end = new Date()
    const start = new Date()
    start.setDate(start.getDate() - days)
    
    setStartDate(start.toISOString().split('T')[0])
    setEndDate(end.toISOString().split('T')[0])
  }

  // Notiz zu Trade hinzufügen
  const handleAddNote = (trade: Trade) => {
    // Erstelle URL-Parameter für die Notiz-Seite mit vorausgewähltem Trade
    const params = new URLSearchParams({
      action: 'create',
      tradeId: trade.id,
      tradeTicket: trade.ticket,
      tradeInstrument: trade.instrument
    })
    
    // Navigiere zur Notizen-Seite (simuliert durch Alert für jetzt)
    const message = `Neue Notiz für Trade ${trade.ticket} (${trade.instrument}) erstellen.\n\nFeature kommt in der nächsten Version!`
    alert(message)
    
    // TODO: Später implementieren:
    // router.push(`#notes?${params.toString()}`)
    console.log('Creating note for trade:', {
      id: trade.id,
      ticket: trade.ticket,
      instrument: trade.instrument,
      type: trade.type,
      profit: trade.profit
    })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('de-DE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) return <ArrowUpDown className="h-4 w-4 opacity-50" />
    return (
      <ArrowUpDown 
        className={`h-4 w-4 ${sortOrder === 'asc' ? 'rotate-180' : ''}`} 
      />
    )
  }

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Gefilterte Trades</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalFilteredTrades}</div>
            <p className="text-xs text-base-content opacity-60">
              von {trades.length} gesamt • Seite {currentPage}/{totalPages}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Gesamtprofit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(stats.totalProfit)}</div>
            <p className="text-xs text-base-content/60">alle Trades</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.winRate.toFixed(1)}%</div>
            <p className="text-xs text-muted-foreground">{stats.winningTrades} Gewinner</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Ø Profit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(stats.averageProfit)}</div>
            <p className="text-xs text-muted-foreground">pro Trade</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Trades Filter</CardTitle>
          <CardDescription>Filtere und sortiere deine Trading-Aktivitäten</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Erste Zeile: Suche, Instrument, Typ */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-base-content/60" />
                <Input
                  placeholder="Suche nach Instrument, Ticket oder Kommentar..."
                  value={searchTerm}
                  onChange={(e) => {
                    console.log('🔍 Search term changed:', e.target.value)
                    setSearchTerm(e.target.value)
                  }}
                  className="pl-8"
                />
              </div>
            </div>
            
            {/* Instrument Filter - Native DaisyUI Select */}
            <div className="w-[180px]">
              <select 
                className="select select-bordered w-full"
                value={instrumentFilter} 
                onChange={(e) => {
                  console.log('🎯 Instrument filter changed:', e.target.value)
                  setInstrumentFilter(e.target.value)
                }}
              >
                <option value="all">Alle Instrumente</option>
                {uniqueInstruments.map(instrument => (
                  <option key={instrument} value={instrument}>
                    {instrument}
                  </option>
                ))}
              </select>
            </div>

            {/* Type Filter - Native DaisyUI Select */}
            <div className="w-[120px]">
              <select 
                className="select select-bordered w-full"
                value={typeFilter} 
                onChange={(e) => {
                  console.log('📈 Type filter changed:', e.target.value)
                  setTypeFilter(e.target.value)
                }}
              >
                <option value="all">Alle Typen</option>
                <option value="buy">Buy</option>
                <option value="sell">Sell</option>
              </select>
            </div>
          </div>

          {/* Zweite Zeile: Datums-Filter */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Datums-Filter Gruppe */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Von Datum */}
                <div className="flex-1">
                  <label className="label">
                    <span className="label-text flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Von Datum
                    </span>
                  </label>
                  <input
                    type="date"
                    className="input input-bordered w-full"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    max={endDate || new Date().toISOString().split('T')[0]}
                  />
                </div>

                {/* Bis Datum */}
                <div className="flex-1">
                  <label className="label">
                    <span className="label-text">Bis Datum</span>
                  </label>
                  <input
                    type="date"
                    className="input input-bordered w-full"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    min={startDate}
                    max={new Date().toISOString().split('T')[0]}
                  />
                </div>

                {/* Datums-Filter löschen */}
                {(startDate || endDate) && (
                  <div className="flex-shrink-0">
                    <label className="label">
                      <span className="label-text opacity-0">Clear</span>
                    </label>
                    <button
                      className="btn btn-ghost btn-outline"
                      onClick={clearDateFilter}
                      title="Datums-Filter zurücksetzen"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Schnell-Filter */}
            <div className="flex-shrink-0">
              <label className="label">
                <span className="label-text">Schnell-Filter</span>
              </label>
              <div className="flex gap-2">
                <button
                  className="btn btn-sm btn-outline"
                  onClick={() => setQuickDateFilter(7)}
                >
                  7T
                </button>
                <button
                  className="btn btn-sm btn-outline"
                  onClick={() => setQuickDateFilter(30)}
                >
                  30T
                </button>
                <button
                  className="btn btn-sm btn-outline"
                  onClick={() => setQuickDateFilter(90)}
                >
                  90T
                </button>
              </div>
            </div>
          </div>

          {/* Aktive Filter Anzeige */}
          {(startDate || endDate || searchTerm || instrumentFilter !== "all" || typeFilter !== "all") && (
            <div className="border-t border-base-300 pt-4">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-sm font-medium text-base-content/70">Aktive Filter:</span>
                
                {searchTerm && (
                  <div className="badge badge-ghost gap-2">
                    Suche: "{searchTerm}"
                    <X 
                      className="h-3 w-3 cursor-pointer hover:text-error" 
                      onClick={() => setSearchTerm("")}
                    />
                  </div>
                )}
                
                {instrumentFilter !== "all" && (
                  <div className="badge badge-ghost gap-2">
                    Instrument: {instrumentFilter}
                    <X 
                      className="h-3 w-3 cursor-pointer hover:text-error" 
                      onClick={() => setInstrumentFilter("all")}
                    />
                  </div>
                )}
                
                {typeFilter !== "all" && (
                  <div className="badge badge-ghost gap-2">
                    Typ: {typeFilter.toUpperCase()}
                    <X 
                      className="h-3 w-3 cursor-pointer hover:text-error" 
                      onClick={() => setTypeFilter("all")}
                    />
                  </div>
                )}
                
                {(startDate || endDate) && (
                  <div className="badge badge-ghost gap-2">
                    Zeitraum: {startDate || '∞'} bis {endDate || '∞'}
                    <X 
                      className="h-3 w-3 cursor-pointer hover:text-error" 
                      onClick={clearDateFilter}
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Trades Table */}
      <Card>
        <CardHeader>
          <CardTitle>Trades Übersicht</CardTitle>
          <CardDescription>
            {filteredAndSortedTrades.length} Trade{filteredAndSortedTrades.length !== 1 ? 's' : ''} angezeigt
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[180px]">
                    <Button 
                      variant="ghost" 
                      onClick={() => handleSort('openTime')}
                      className="h-auto p-0 font-semibold"
                    >
                      Zeit {getSortIcon('openTime')}
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button 
                      variant="ghost" 
                      onClick={() => handleSort('instrument')}
                      className="h-auto p-0 font-semibold"
                    >
                      Instrument {getSortIcon('instrument')}
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button 
                      variant="ghost" 
                      onClick={() => handleSort('type')}
                      className="h-auto p-0 font-semibold"
                    >
                      Typ {getSortIcon('type')}
                    </Button>
                  </TableHead>
                  <TableHead className="text-right">
                    <Button 
                      variant="ghost" 
                      onClick={() => handleSort('size')}
                      className="h-auto p-0 font-semibold"
                    >
                      Größe {getSortIcon('size')}
                    </Button>
                  </TableHead>
                  <TableHead className="text-right">
                    <Button 
                      variant="ghost" 
                      onClick={() => handleSort('price')}
                      className="h-auto p-0 font-semibold"
                    >
                      Entry Preis {getSortIcon('price')}
                    </Button>
                  </TableHead>
                  <TableHead className="text-right">Exit Preis</TableHead>
                  <TableHead className="text-right">
                    <Button 
                      variant="ghost" 
                      onClick={() => handleSort('profit')}
                      className="h-auto p-0 font-semibold"
                    >
                      Profit {getSortIcon('profit')}
                    </Button>
                  </TableHead>
                  <TableHead>Ticket</TableHead>
                  <TableHead>Aktionen</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedTrades.map((trade) => (
                  <TableRow key={trade.id}>
                    <TableCell className="font-mono text-sm">
                      {formatDate(trade.openTime)}
                    </TableCell>
                    <TableCell className="font-medium">
                      {trade.instrument}
                    </TableCell>
                    <TableCell>
                      <Badge variant={trade.type === 'buy' ? 'default' : 'secondary'}>
                        {trade.type.toUpperCase()}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      {trade.size}
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      {trade.price.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      {trade.exitPrice ? trade.exitPrice.toFixed(2) : '-'}
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      <div className={`flex items-center justify-end gap-1 ${
                        trade.profit >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {trade.profit >= 0 ? (
                          <TrendingUp className="h-3 w-3" />
                        ) : (
                          <TrendingDown className="h-3 w-3" />
                        )}
                        {formatCurrency(trade.profit)}
                      </div>
                    </TableCell>
                    <TableCell className="font-mono text-xs text-muted-foreground">
                      {trade.ticket}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <button 
                          className="btn btn-ghost btn-xs"
                          onClick={() => handleAddNote(trade)}
                          title="Notiz hinzufügen"
                        >
                          <MessageSquare className="h-3 w-3" />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          {/* Pagination Controls */}
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
              {totalFilteredTrades > 0 ? (
                <>
                  Zeige {startIndex + 1}-{Math.min(endIndex, totalFilteredTrades)} von {totalFilteredTrades} Trades
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
          
          {paginatedTrades.length === 0 && totalFilteredTrades === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              Keine Trades gefunden, die den Filterkriterien entsprechen.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
} 