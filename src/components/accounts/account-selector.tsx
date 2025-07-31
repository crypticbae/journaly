"use client"

import * as React from "react"
import { Wallet, AreaChart } from "lucide-react"

interface TradingAccount {
  id: string
  name: string
  accountNumber: string
  currency: string
  isDefault: boolean
  _count: {
    trades: number
  }
}

interface AccountSelectorProps {
  accounts: TradingAccount[]
  selectedAccountId: string
  onAccountSelect: (accountId: string) => void
}

export function AccountSelector({
  accounts,
  selectedAccountId,
  onAccountSelect
}: AccountSelectorProps) {
  const realAccounts = accounts.filter(acc => acc.id !== 'all')
  const allAccountsTab = accounts.find(acc => acc.id === 'all')

  const getAccountIcon = (account: TradingAccount) => {
    if (account.id === 'all') {
      return <AreaChart className="h-4 w-4" />
    }
    return <Wallet className="h-4 w-4" />
  }

  const getAccountBadgeColor = (account: TradingAccount) => {
    if (account.id === 'all') {
      return 'badge-primary'
    }
    if (account.isDefault) {
      return 'badge-success'
    }
    return 'badge-outline'
  }

  return (
    <div className="w-full space-y-4">
      {/* Account Tabs */}
      <div className="tabs tabs-boxed bg-base-200 p-1">
        {accounts.map((account) => (
          <button
            key={account.id}
            onClick={() => onAccountSelect(account.id)}
            className={`tab tab-lg flex-1 gap-2 ${
              selectedAccountId === account.id ? 'tab-active' : ''
            }`}
          >
            {getAccountIcon(account)}
            <span className="font-medium">{account.name}</span>
            {account._count.trades > 0 && (
              <span className={`badge badge-sm ${getAccountBadgeColor(account)}`}>
                {account._count.trades}
              </span>
            )}
            {account.id !== 'all' && account.isDefault && (
              <span className="badge badge-xs badge-success">Standard</span>
            )}
          </button>
        ))}
      </div>

      {/* Account Info */}
      {selectedAccountId === 'all' && allAccountsTab && (
        <div className="card bg-primary/10 border border-primary/20">
          <div className="card-body p-4">
            <div className="flex items-center gap-3">
              {/* Alternative without DaisyUI avatar wrapper for perfect centering */}
              <div className="bg-primary text-primary-content w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                <AreaChart className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-primary">Alle Trading Accounts</h3>
                <p className="text-sm text-primary/70">
                  Übersicht über alle deine Trading-Aktivitäten
                </p>
              </div>
              <div className="text-right">
                <div className="stat-value text-2xl text-primary">{allAccountsTab._count.trades}</div>
                <div className="stat-desc text-primary/70">Trades gesamt</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Selected Real Account Info */}
      {selectedAccountId !== 'all' && (
        (() => {
          const selectedAccount = accounts.find(acc => acc.id === selectedAccountId)
          if (!selectedAccount) return null

          return (
            <div className="card bg-base-200">
              <div className="card-body p-4">
                <div className="flex items-center gap-3">
                  {/* Alternative without DaisyUI avatar wrapper for perfect centering */}
                  <div className="bg-neutral text-neutral-content w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                    <Wallet className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold">{selectedAccount.name}</h3>
                    <p className="text-sm text-base-content/70">
                      Account #{selectedAccount.accountNumber} • {selectedAccount.currency}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="stat-value text-2xl">{selectedAccount._count.trades}</div>
                    <div className="stat-desc">Trades</div>
                  </div>
                </div>
              </div>
            </div>
          )
        })()
      )}

      {/* Info for new users */}
      {realAccounts.length === 0 && (
        <div className="alert alert-info">
          <div className="flex items-start gap-3">
            <Wallet className="h-5 w-5 mt-0.5" />
            <div>
              <h4 className="font-medium">Willkommen!</h4>
              <p className="text-sm">
                Lade deine erste Trading-Email hoch um automatisch Accounts zu erstellen, 
                oder erstelle manuell einen Account.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 