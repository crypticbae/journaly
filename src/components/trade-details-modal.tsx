"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { 
  X, 
  TrendingUp, 
  TrendingDown, 
  Calendar, 
  Hash,
  MessageSquare
} from "lucide-react"

interface TradeDetailsModalProps {
  trade: {
    id: string
    ticket: string
    instrument: string
    type: string
    profit: number
    openTime: string
    size: number
    price: number
    exitPrice?: number
  } | null
  isOpen: boolean
  onClose: () => void
}

export function TradeDetailsModal({ trade, isOpen, onClose }: TradeDetailsModalProps) {
  if (!isOpen || !trade) return null

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

  const isProfit = trade.profit >= 0

  return (
    <div className="modal modal-open">
      <div className="modal-box w-11/12 max-w-md">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="font-bold text-lg text-base-content">Trade Details</h3>
            <p className="text-base-content/60 text-sm">#{trade.ticket}</p>
          </div>
          <button 
            className="btn btn-sm btn-circle btn-ghost"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Trade Info */}
        <div className="space-y-4">
          {/* Instrument & Type */}
          <div className="card bg-base-200">
            <div className="card-body p-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-xl">{trade.instrument}</h4>
                <Badge variant={trade.type === 'buy' ? 'default' : 'secondary'}>
                  {trade.type.toUpperCase()}
                </Badge>
              </div>
            </div>
          </div>

          {/* Trade Details Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="card bg-base-100 border border-base-300">
              <div className="card-body p-3">
                <div className="text-xs text-base-content/60 mb-1">Zeit</div>
                <div className="font-mono text-sm">{formatDate(trade.openTime)}</div>
              </div>
            </div>

            <div className="card bg-base-100 border border-base-300">
              <div className="card-body p-3">
                <div className="text-xs text-base-content/60 mb-1">Größe</div>
                <div className="font-mono font-bold">{trade.size}</div>
              </div>
            </div>

            <div className="card bg-base-100 border border-base-300">
              <div className="card-body p-3">
                <div className="text-xs text-base-content/60 mb-1">Entry Preis</div>
                <div className="font-mono">{trade.price.toFixed(2)}</div>
              </div>
            </div>

            <div className="card bg-base-100 border border-base-300">
              <div className="card-body p-3">
                <div className="text-xs text-base-content/60 mb-1">Exit Preis</div>
                <div className="font-mono">{trade.exitPrice ? trade.exitPrice.toFixed(2) : '-'}</div>
              </div>
            </div>
          </div>

          {/* Profit Section */}
          <div className="card bg-base-200">
            <div className="card-body p-4">
              <div className="flex items-center justify-center gap-3">
                {isProfit ? (
                  <TrendingUp className="h-6 w-6 text-success" />
                ) : (
                  <TrendingDown className="h-6 w-6 text-error" />
                )}
                <div className={`text-2xl font-bold ${
                  isProfit ? 'text-success' : 'text-error'
                }`}>
                  {formatCurrency(trade.profit)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="modal-action mt-6">
          <button className="btn btn-outline" onClick={onClose}>
            Schließen
          </button>
          <button 
            className="btn btn-primary gap-2"
            onClick={() => {
              console.log('Navigate to notes for trade:', trade.id)
              alert('Navigation zu Trade-Notizen kommt bald!')
            }}
          >
            <MessageSquare className="h-4 w-4" />
            Notiz hinzufügen
          </button>
        </div>
      </div>
      
      {/* Modal Backdrop */}
      <div className="modal-backdrop" onClick={onClose}>
        <button>close</button>
      </div>
    </div>
  )
} 