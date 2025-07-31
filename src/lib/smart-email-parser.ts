import * as cheerio from 'cheerio';
import { parseEmailContent, Trade as LegacyTrade, AccountSummary as LegacyAccountSummary } from './email-parser';
import { decodeEmailContent } from './email-decoder';

export interface SmartParsedEmail {
  accounts: Array<{
    accountNumber: string;
    accountName: string;
    currency: string;
    trades: LegacyTrade[];
    accountSummary: LegacyAccountSummary | null;
  }>;
  totalTrades: number;
  totalAccounts: number;
}

export function parseEmailWithMultipleAccounts(emlContent: string): SmartParsedEmail {
  console.log('🔍 Starting smart multi-account email parsing...');
  
  // Zuerst Email-Content dekodieren (Base64, etc.)
  const htmlContent = decodeEmailContent(emlContent);
  
  // Dann normale Parsing
  const basicResult = parseEmailContent(htmlContent);
  
  // Alle Account-Nummern in der Email finden
  const accountNumbers = extractAllAccountNumbers(htmlContent);
  console.log('Found account numbers:', accountNumbers);
  
  // Wenn nur ein Account gefunden wurde, normale Struktur zurückgeben
  if (accountNumbers.length <= 1) {
    const accountNumber = accountNumbers[0] || basicResult.accountSummary.accountNumber || 'Unknown';
    return {
      accounts: [{
        accountNumber,
        accountName: `Account ${accountNumber}`,
        currency: basicResult.accountSummary.currency || 'USD',
        trades: basicResult.trades,
        accountSummary: basicResult.accountSummary
      }],
      totalTrades: basicResult.trades.length,
      totalAccounts: 1
    };
  }
  
  // Mehrere Accounts gefunden - separieren
  console.log(`🏦 Multiple accounts detected: ${accountNumbers.length} accounts`);
  
  const accounts = accountNumbers.map(accountNumber => {
    const accountTrades = filterTradesByAccount(basicResult.trades, accountNumber, htmlContent);
    const accountSummary = extractAccountSummaryForAccount(htmlContent, accountNumber);
    
    return {
      accountNumber,
      accountName: `Account ${accountNumber}`,
      currency: accountSummary?.currency || basicResult.accountSummary.currency || 'USD',
      trades: accountTrades,
      accountSummary: accountSummary || null
    };
  });
  
  const totalTrades = accounts.reduce((sum, acc) => sum + acc.trades.length, 0);
  
  console.log(`✅ Successfully separated ${totalTrades} trades into ${accounts.length} accounts`);
  
  return {
    accounts,
    totalTrades,
    totalAccounts: accounts.length
  };
}

function extractAllAccountNumbers(htmlContent: string): string[] {
  const $ = cheerio.load(htmlContent);
  const accountNumbers = new Set<string>();
  
  // Verschiedene Patterns für Account-Nummern
  const patterns = [
    /A\/C No:\s*(\d+)/gi,
    /Account\s*#?(\d+)/gi,
    /Account\s*Number:\s*(\d+)/gi,
    /Account:\s*(\d+)/gi,
    /MT4\s*Account:\s*(\d+)/gi,
    /MT5\s*Account:\s*(\d+)/gi
  ];
  
  // Im HTML-Text suchen
  const fullText = $.text();
  patterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(fullText)) !== null) {
      const accountNum = match[1].trim();
      if (accountNum.length >= 6) { // Mindestens 6 Zeichen für Account-Nummer
        accountNumbers.add(accountNum);
      }
    }
  });
  
  // In Tabellen suchen
  $('table').each((i, table) => {
    const $table = $(table);
    $table.find('td, th').each((j, cell) => {
      const cellText = $(cell).text();
      patterns.forEach(pattern => {
        const matches = cellText.match(pattern);
        if (matches) {
          matches.forEach(match => {
            const numMatch = match.match(/(\d+)/);
            if (numMatch && numMatch[1].length >= 6) {
              accountNumbers.add(numMatch[1]);
            }
          });
        }
      });
    });
  });
  
  return Array.from(accountNumbers);
}

function filterTradesByAccount(trades: LegacyTrade[], accountNumber: string, htmlContent: string): LegacyTrade[] {
  // Wenn nur ein Account, alle Trades zurückgeben
  if (!accountNumber || trades.length === 0) {
    return trades;
  }
  
  // Versuche Trades basierend auf Context zu filtern
  // Dies ist ein heuristischer Ansatz - kann verbessert werden
  
  const $ = cheerio.load(htmlContent);
  const accountTrades: LegacyTrade[] = [];
  
  // Suche nach Tabellen die diese Account-Nummer enthalten
  $('table').each((tableIndex, table) => {
    const $table = $(table);
    const tableText = $table.text();
    
    // Prüfe ob diese Tabelle die Account-Nummer enthält
    if (tableText.includes(accountNumber) || tableText.includes(`Account ${accountNumber}`)) {
      // Parse Trades aus dieser Tabelle
      $table.find('tr').each((rowIndex, row) => {
        const $row = $(row);
        const cells = $row.find('td');
        
        if (cells.length >= 13) { // Trade-Zeile
          const ticket = $(cells[1]).text().trim();
          
          // Finde entsprechenden Trade in der Liste
          const matchingTrade = trades.find(t => t.ticket === ticket || t.ticket.includes(ticket));
          if (matchingTrade && !accountTrades.find(t => t.id === matchingTrade.id)) {
            accountTrades.push(matchingTrade);
          }
        }
      });
    }
  });
  
  // Fallback: Wenn keine spezifische Zuordnung möglich, alle Trades diesem Account zuordnen
  if (accountTrades.length === 0) {
    return trades; // Besser als keine Trades
  }
  
  return accountTrades;
}

function extractAccountSummaryForAccount(htmlContent: string, accountNumber: string): LegacyAccountSummary | null {
  const $ = cheerio.load(htmlContent);
  
  // Suche nach Account Summary für diesen spezifischen Account
  let accountSummary: Partial<LegacyAccountSummary> = {
    accountNumber,
    name: `Account ${accountNumber}`,
    currency: 'USD',
    date: new Date().toISOString().split('T')[0],
    closedPnL: 0,
    balance: 0,
    equity: 0,
    previousBalance: 0,
    previousEquity: 0,
    totalCreditFacility: 0,
    floatingPnL: 0,
    marginRequirements: 0,
    availableMargin: 0
  };
  
  // Suche nach Tabellen die Account-spezifische Daten enthalten
  $('table').each((i, table) => {
    const $table = $(table);
    const tableText = $table.text();
    
    if (tableText.includes(accountNumber) && (tableText.includes('Balance') || tableText.includes('Equity'))) {
      $table.find('tr').each((j, row) => {
        const $row = $(row);
        const rowText = $row.text();
        
        // Parse verschiedene Werte
        if (rowText.includes('Balance:') && !rowText.includes('Previous')) {
          const match = rowText.match(/-?\d+\.?\d*/);
          if (match) accountSummary.balance = parseFloat(match[0]);
        }
        if (rowText.includes('Equity:') && !rowText.includes('Previous')) {
          const match = rowText.match(/-?\d+\.?\d*/);
          if (match) accountSummary.equity = parseFloat(match[0]);
        }
        if (rowText.includes('Closed P/L:')) {
          const match = rowText.match(/-?\d+\.?\d*/);
          if (match) accountSummary.closedPnL = parseFloat(match[0]);
        }
      });
    }
  });
  
  return accountSummary as LegacyAccountSummary;
}

// Test-Funktion
export function testSmartParser(htmlContent: string): void {
  const result = parseEmailWithMultipleAccounts(htmlContent);
  console.log('Smart Parser Results:');
  console.log(`- Total Accounts: ${result.totalAccounts}`);
  console.log(`- Total Trades: ${result.totalTrades}`);
  result.accounts.forEach((account, index) => {
    console.log(`- Account ${index + 1}: ${account.accountNumber} (${account.trades.length} trades)`);
  });
} 