import * as cheerio from 'cheerio';

export interface Trade {
  id: string;
  openTime: string;
  ticket: string;
  type: 'buy' | 'sell';
  size: number;
  instrument: string;
  price: number;
  exitPrice?: number; // Exit-Preis hinzufügen
  order: string;
  comment: string;
  entry: 'in' | 'out';
  commission: number;
  fee: number;
  swap: number;
  profit: number;
}

export interface AccountSummary {
  accountNumber: string;
  name: string;
  currency: string;
  date: string;
  closedPnL: number;
  balance: number;
  equity: number;
  previousBalance: number;
  previousEquity: number;
  totalCreditFacility: number;
  floatingPnL: number;
  marginRequirements: number;
  availableMargin: number;
}

export interface ParsedEmail {
  trades: Trade[];
  accountSummary: AccountSummary;
}

interface RawTransaction {
  openTime: string;
  ticket: string;
  type: 'buy' | 'sell';
  size: number;
  instrument: string;
  price: number;
  order: string;
  comment: string;
  entry: 'in' | 'out';
  commission: number;
  fee: number;
  swap: number;
  profit: number;
}

export function parseEmailContent(htmlContent: string): ParsedEmail {
  const $ = cheerio.load(htmlContent);
  
  const rawTransactions: RawTransaction[] = [];
  const accountSummary = extractAccountSummary($);
  
  console.log('Parsing email content, looking for deals...');
  console.log('📋 Content preview:', htmlContent.substring(0, 500));
  
  // Prüfe explizit nach "Deals:" Text
  const hasDealsText = htmlContent.toLowerCase().includes('deals:');
  console.log('🔍 Contains "deals:" text:', hasDealsText);
  
  if (hasDealsText) {
    console.log('✅ Found deals text, parsing tables...');
  } else {
    console.log('❌ No deals text found in content');
  }
  
  // Sammle zuerst alle Transaktionen
  $('table').each((tableIndex, table) => {
    const $table = $(table);
    const tableText = $table.text();
    
    // Prüfe ob diese Tabelle Deals enthält
    if (tableText.includes('Deals:')) {
      console.log('Found deals table at index:', tableIndex);
      
      // Finde alle Zeilen mit Trade-Daten
      $table.find('tr').each((rowIndex, row) => {
        const $row = $(row);
        const cells = $row.find('td');
        
        // Prüfe auf Trade-Zeilen (verschiedene Kriterien)
        const hasDateCell = $row.find('.msdate').length > 0;
        const hasEnoughCells = cells.length >= 13; // Deals-Tabelle hat 13 Zellen
        const firstCellText = $(cells[0]).text().trim();
        const hasDateFormat = /\d{4}\.\d{2}\.\d{2}/.test(firstCellText);
        const isNotHeader = !firstCellText.includes('Open Time');
        
        if ((hasDateCell || hasDateFormat) && hasEnoughCells && isNotHeader) {
          
          // Parse Trade-Daten (korrekte Zellen-Zuordnung)
          const openTime = $(cells[0]).text().trim();
          const ticket = $(cells[1]).text().trim();
          const type = $(cells[2]).text().trim().toLowerCase();
          const sizeText = $(cells[3]).text().trim();
          const instrument = $(cells[4]).text().trim();
          const priceText = $(cells[5]).text().trim();
          const order = $(cells[6]).text().trim();
          const comment = $(cells[7]).text().trim(); // Nur Zelle 7, nicht 7+8
          const entry = $(cells[8]).text().trim().toLowerCase(); // KORRIGIERT: Zelle 8
          const commission = parseFloat($(cells[9]).text().trim()) || 0; // KORRIGIERT: Zelle 9
          const fee = parseFloat($(cells[10]).text().trim()) || 0; // KORRIGIERT: Zelle 10
          const swap = parseFloat($(cells[11]).text().trim()) || 0; // KORRIGIERT: Zelle 11
          const profit = parseFloat($(cells[12]).text().trim()) || 0; // KORRIGIERT: Zelle 12
          
          // Validierung und Parsing
          if (ticket && ticket.length > 3 && (type === 'buy' || type === 'sell') && instrument) {
            const transaction: RawTransaction = {
              openTime: openTime,
              ticket: ticket,
              type: type as 'buy' | 'sell',
              size: parseFloat(sizeText) || 0,
              instrument: instrument,
              price: parseFloat(priceText) || 0,
              order: order,
              comment: comment.trim(),
              entry: (entry === 'in' || entry === 'out') ? entry as 'in' | 'out' : 'in',
              commission: commission,
              fee: fee,
              swap: swap,
              profit: profit
            };
            
            rawTransactions.push(transaction);
          }
        }
      });
    }
  });
  
  console.log(`Found ${rawTransactions.length} raw transactions`);
  
    // Kombiniere Buy/Sell Paare zu kompletten Trades
  const trades = combineTransactionsToTrades(rawTransactions);

  return {
    trades,
    accountSummary
  };
}

function combineTransactionsToTrades(rawTransactions: RawTransaction[]): Trade[] {
  const trades: Trade[] = [];
  const usedTransactions = new Set<number>();
  
  console.log('Combining transactions to trades...');
  
  for (let i = 0; i < rawTransactions.length; i++) {
    if (usedTransactions.has(i)) continue;
    
    const openTx = rawTransactions[i];
    
    // Suche nach Eröffnungstransaktionen ("in")
    if (openTx.entry === 'in') {
      console.log(`Looking for matching close for open: ${openTx.type} ${openTx.ticket} ${openTx.instrument} ${openTx.size}`);
      
      // Suche nach passender Schließungstransaktion ("out")
      for (let j = i + 1; j < rawTransactions.length; j++) {
        if (usedTransactions.has(j)) continue;
        
        const closeTx = rawTransactions[j];
        
        // Prüfe auf passende Schließungstransaktion
        if (closeTx.entry === 'out' && 
            closeTx.instrument === openTx.instrument &&
            Math.abs(closeTx.size - openTx.size) < 0.001) { // Floating point comparison
          
          console.log(`✅ Found matching pair: Open ${openTx.ticket} + Close ${closeTx.ticket}`);
          
          // Erstelle kombinierten Trade
          const trade: Trade = {
            id: generateTradeId(),
            openTime: openTx.openTime,
            ticket: `${openTx.ticket}-${closeTx.ticket}`, // Kombiniere Ticket-IDs
            type: openTx.type, // Der Trade-Typ ist die eröffnende Richtung
            size: openTx.size,
            instrument: openTx.instrument,
            price: openTx.price, // Entry-Preis
            exitPrice: closeTx.price, // Exit-Preis hinzufügen
            order: `Entry: ${openTx.order} | Exit: ${closeTx.order}`,
            comment: `${openTx.comment} | ${closeTx.comment}`.trim(),
            entry: 'out', // Der Trade ist abgeschlossen
            commission: openTx.commission + closeTx.commission,
            fee: openTx.fee + closeTx.fee,
            swap: openTx.swap + closeTx.swap,
            profit: closeTx.profit // Der Profit kommt von der schließenden Transaktion
          };
          
          // Zusätzliche Informationen in Kommentar
          const entryPrice = openTx.price;
          const exitPrice = closeTx.price;
          const exitTime = closeTx.openTime;
          
          trade.comment = `Entry: ${entryPrice} (${openTx.openTime}) | Exit: ${exitPrice} (${exitTime}) | P/L: ${closeTx.profit}`;
          
          trades.push(trade);
          usedTransactions.add(i);
          usedTransactions.add(j);
          
          console.log(`Created trade: ${trade.instrument} ${trade.size} | Entry: ${entryPrice} | Exit: ${exitPrice} | P/L: ${trade.profit}`);
          break;
        }
      }
    }
  }
  
  console.log(`Created ${trades.length} complete trades from ${rawTransactions.length} transactions`);
  return trades;
}

function extractAccountSummary($: cheerio.CheerioAPI): AccountSummary {
  console.log('Extracting account summary...');
  
  // Account-Informationen aus der ersten Zeile extrahieren
  let accountNumber = '';
  let name = '';
  let currency = '';
  let date = '';
  
  // Suche nach Account-Informationen in allen Tabellen
  $('table').each((i, table) => {
    const $table = $(table);
    $table.find('tr').each((j, row) => {
      const $row = $(row);
      const text = $row.text();
      
      if (text.includes('A/C No:') && text.includes('Name:') && text.includes('Currency:')) {
        const cells = $row.find('td');
        if (cells.length >= 4) {
          accountNumber = $(cells[0]).text().replace('A/C No:', '').replace(/\*/g, '').trim();
          name = $(cells[1]).text().replace('Name:', '').replace(/\*/g, '').trim();
          currency = $(cells[2]).text().replace('Currency:', '').replace(/\*/g, '').trim();
          date = $(cells[3]).text().replace(/\*/g, '').trim();
        }
      }
    });
  });
  
  console.log('Account info:', { accountNumber, name, currency, date });
  
  // Summary-Werte extrahieren
  let closedPnL = 0;
  let balance = 0;
  let equity = 0;
  let previousBalance = 0;
  let previousEquity = 0;
  let totalCreditFacility = 0;
  let floatingPnL = 0;
  let marginRequirements = 0;
  let availableMargin = 0;
  
  // Suche in allem Text nach Summary-Werten
  $('table').each((i, table) => {
    const $table = $(table);
    const tableText = $table.text();
    
    if (tableText.includes('A/C Summary:') || tableText.includes('Closed P/L:') || tableText.includes('Balance:')) {
      $table.find('tr').each((j, row) => {
        const $row = $(row);
        const rowText = $row.text();
        
        // Parse verschiedene Werte
        if (rowText.includes('Closed Trade P/L:') || rowText.includes('Closed P/L:')) {
          const match = rowText.match(/-?\d+\.?\d*/);
          if (match) closedPnL = parseFloat(match[0]);
        }
        if (rowText.includes('Balance:') && !rowText.includes('Previous')) {
          const match = rowText.match(/-?\d+\.?\d*/);
          if (match) balance = parseFloat(match[0]);
        }
        if (rowText.includes('Equity:') && !rowText.includes('Previous')) {
          const match = rowText.match(/-?\d+\.?\d*/);
          if (match) equity = parseFloat(match[0]);
        }
        if (rowText.includes('Previous Ledger Balance:')) {
          const match = rowText.match(/-?\d+\.?\d*/);
          if (match) previousBalance = parseFloat(match[0]);
        }
        if (rowText.includes('Previous Equity:')) {
          const match = rowText.match(/-?\d+\.?\d*/);
          if (match) previousEquity = parseFloat(match[0]);
        }
        if (rowText.includes('Total Credit Facility:')) {
          const match = rowText.match(/-?\d+\.?\d*/);
          if (match) totalCreditFacility = parseFloat(match[0]);
        }
        if (rowText.includes('Floating P/L:')) {
          const match = rowText.match(/-?\d+\.?\d*/);
          if (match) floatingPnL = parseFloat(match[0]);
        }
        if (rowText.includes('Margin Requirements:')) {
          const match = rowText.match(/-?\d+\.?\d*/);
          if (match) marginRequirements = parseFloat(match[0]);
        }
        if (rowText.includes('Available Margin:')) {
          const match = rowText.match(/-?\d+\.?\d*/);
          if (match) availableMargin = parseFloat(match[0]);
        }
      });
    }
  });
  
  console.log('Summary values:', { closedPnL, balance, equity });
  
  return {
    accountNumber,
    name,
    currency,
    date,
    closedPnL,
    balance,
    equity,
    previousBalance,
    previousEquity,
    totalCreditFacility,
    floatingPnL,
    marginRequirements,
    availableMargin
  };
}

function generateTradeId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Test-Funktion für die Entwicklung
export function testParser(htmlContent: string): void {
  const result = parseEmailContent(htmlContent);
  console.log('Parsed Trades:', result.trades.length);
  console.log('Account Summary:', result.accountSummary);
  console.log('Sample Trade:', result.trades[0]);
} 