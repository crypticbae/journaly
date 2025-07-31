"use client"

import { useState, useEffect } from 'react'

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

// Virtual "All Accounts" account
const ALL_ACCOUNTS_VIRTUAL: TradingAccount = {
  id: 'all',
  name: 'Alle Accounts',
  accountNumber: 'ALL',
  currency: 'Multi',
  isDefault: true,
  _count: { trades: 0 }
}

export function useTradingAccounts() {
  const [accounts, setAccounts] = useState<TradingAccount[]>([])
  const [selectedAccountId, setSelectedAccountId] = useState<string>('all') // Default to "all"
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchAccounts = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/accounts')
      const data = await response.json()

      if (response.ok) {
        const realAccounts = data.accounts || []
        
        // Calculate total trades for "All Accounts" virtual account
        const totalTrades = realAccounts.reduce((sum: number, acc: TradingAccount) => 
          sum + (acc._count?.trades || 0), 0)
        
        const allAccountsTab = {
          ...ALL_ACCOUNTS_VIRTUAL,
          _count: { trades: totalTrades }
        }
        
        // Always include "All Accounts" as first tab
        const accountsWithAll = [allAccountsTab, ...realAccounts]
        
        setAccounts(accountsWithAll)
        
        // If no specific account is selected or it doesn't exist, default to "all"
        if (!selectedAccountId || 
            (selectedAccountId !== 'all' && !realAccounts.find((acc: TradingAccount) => acc.id === selectedAccountId))) {
          setSelectedAccountId('all')
        }
        
        console.log(`📊 Loaded ${realAccounts.length} real accounts + 'All Accounts' tab (${totalTrades} total trades)`)
      } else {
        console.error('Failed to fetch accounts:', data.error)
        setError(data.error)
        // Even on error, show the "All Accounts" tab
        setAccounts([ALL_ACCOUNTS_VIRTUAL])
      }
    } catch (error) {
      console.error('Error fetching accounts:', error)
      setError('Fehler beim Laden der Accounts')
      // Even on error, show the "All Accounts" tab
      setAccounts([ALL_ACCOUNTS_VIRTUAL])
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchAccounts()
  }, [])

  const selectAccount = (accountId: string) => {
    console.log(`🎯 Switching to account: ${accountId}`)
    setSelectedAccountId(accountId)
  }

  const refreshAccounts = () => {
    fetchAccounts()
  }

  // Get the currently selected account (including virtual "all" account)
  const selectedAccount = accounts.find(acc => acc.id === selectedAccountId) || accounts[0]

  return {
    accounts,
    selectedAccount,
    selectedAccountId,
    isLoading,
    error,
    selectAccount,
    refreshAccounts
  }
} 