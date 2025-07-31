import Database from 'better-sqlite3';
import { Trade, AccountSummary } from './email-parser';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'trading-journal.db');

// Datenbank initialisieren
let db: Database.Database | null = null;

export function getDatabase(): Database.Database {
  if (!db) {
    db = new Database(DB_PATH);
    initializeTables();
  }
  return db;
}

function initializeTables() {
  if (!db) return;
  
  // Trades Tabelle
  db.exec(`
    CREATE TABLE IF NOT EXISTS trades (
      id TEXT PRIMARY KEY,
      open_time TEXT NOT NULL,
      ticket TEXT NOT NULL,
      type TEXT NOT NULL CHECK (type IN ('buy', 'sell')),
      size REAL NOT NULL,
      instrument TEXT NOT NULL,
      price REAL NOT NULL,
      exit_price REAL,
      order_id TEXT,
      comment TEXT,
      entry TEXT CHECK (entry IN ('in', 'out')),
      commission REAL DEFAULT 0,
      fee REAL DEFAULT 0,
      swap REAL DEFAULT 0,
      profit REAL DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Prüfe ob exit_price Spalte existiert und füge sie hinzu falls nicht
  try {
    const result = db.prepare("PRAGMA table_info(trades)").all() as any[];
    const hasExitPrice = result.some(column => column.name === 'exit_price');
    
    if (!hasExitPrice) {
      console.log('Adding exit_price column to existing trades table...');
      db.exec('ALTER TABLE trades ADD COLUMN exit_price REAL');
    }
  } catch (error) {
    console.log('Could not check/add exit_price column:', error);
  }
  
  // Account Summaries Tabelle
  db.exec(`
    CREATE TABLE IF NOT EXISTS account_summaries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      account_number TEXT NOT NULL,
      name TEXT NOT NULL,
      currency TEXT NOT NULL,
      date TEXT NOT NULL,
      closed_pnl REAL NOT NULL,
      balance REAL NOT NULL,
      equity REAL NOT NULL,
      previous_balance REAL DEFAULT 0,
      previous_equity REAL DEFAULT 0,
      total_credit_facility REAL DEFAULT 0,
      floating_pnl REAL DEFAULT 0,
      margin_requirements REAL DEFAULT 0,
      available_margin REAL DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
  
  // Indizes für bessere Performance
  db.exec(`
    CREATE INDEX IF NOT EXISTS idx_trades_ticket ON trades(ticket);
    CREATE INDEX IF NOT EXISTS idx_trades_instrument ON trades(instrument);
    CREATE INDEX IF NOT EXISTS idx_trades_open_time ON trades(open_time);
    CREATE INDEX IF NOT EXISTS idx_account_summaries_date ON account_summaries(date);
  `);
}

// Trade-Funktionen
export function insertTrade(trade: Trade): void {
  const db = getDatabase();
  const stmt = db.prepare(`
    INSERT OR REPLACE INTO trades (
      id, open_time, ticket, type, size, instrument, price, exit_price,
      order_id, comment, entry, commission, fee, swap, profit
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  
  stmt.run(
    trade.id,
    trade.openTime,
    trade.ticket,
    trade.type,
    trade.size,
    trade.instrument,
    trade.price,
    trade.exitPrice || null,
    trade.order,
    trade.comment,
    trade.entry,
    trade.commission,
    trade.fee,
    trade.swap,
    trade.profit
  );
}

export function insertTrades(trades: Trade[]): void {
  const db = getDatabase();
  const transaction = db.transaction(() => {
    trades.forEach(insertTrade);
  });
  transaction();
}

export function getAllTrades(): Trade[] {
  const db = getDatabase();
  const stmt = db.prepare(`
    SELECT 
      id, open_time as openTime, ticket, type, size, instrument, price, exit_price as exitPrice,
      order_id as "order", comment, entry, commission, fee, swap, profit
    FROM trades 
    ORDER BY open_time DESC
  `);
  return stmt.all() as Trade[];
}

export function getTradesByInstrument(instrument: string): Trade[] {
  const db = getDatabase();
  const stmt = db.prepare(`
    SELECT 
      id, open_time as openTime, ticket, type, size, instrument, price, exit_price as exitPrice,
      order_id as "order", comment, entry, commission, fee, swap, profit
    FROM trades 
    WHERE instrument = ?
    ORDER BY open_time DESC
  `);
  return stmt.all(instrument) as Trade[];
}

export function getTradingStats(): {
  totalTrades: number;
  totalProfit: number;
  winningTrades: number;
  losingTrades: number;
  winRate: number;
  averageProfit: number;
  maxProfit: number;
  maxLoss: number;
} {
  const db = getDatabase();
  
  const totalStmt = db.prepare('SELECT COUNT(*) as count, SUM(profit) as total_profit FROM trades');
  const totalResult = totalStmt.get() as { count: number; total_profit: number };
  
  const winStmt = db.prepare('SELECT COUNT(*) as count FROM trades WHERE profit > 0');
  const winResult = winStmt.get() as { count: number };
  
  const lossStmt = db.prepare('SELECT COUNT(*) as count FROM trades WHERE profit < 0');
  const lossResult = lossStmt.get() as { count: number };
  
  const maxProfitStmt = db.prepare('SELECT MAX(profit) as max_profit FROM trades');
  const maxProfitResult = maxProfitStmt.get() as { max_profit: number };
  
  const maxLossStmt = db.prepare('SELECT MIN(profit) as max_loss FROM trades');
  const maxLossResult = maxLossStmt.get() as { max_loss: number };
  
  const totalTrades = totalResult.count || 0;
  const totalProfit = totalResult.total_profit || 0;
  const winningTrades = winResult.count || 0;
  const losingTrades = lossResult.count || 0;
  
  return {
    totalTrades,
    totalProfit,
    winningTrades,
    losingTrades,
    winRate: totalTrades > 0 ? (winningTrades / totalTrades) * 100 : 0,
    averageProfit: totalTrades > 0 ? totalProfit / totalTrades : 0,
    maxProfit: maxProfitResult.max_profit || 0,
    maxLoss: maxLossResult.max_loss || 0
  };
}

// Account Summary Funktionen
export function insertAccountSummary(summary: AccountSummary): void {
  const db = getDatabase();
  const stmt = db.prepare(`
    INSERT INTO account_summaries (
      account_number, name, currency, date, closed_pnl, balance, equity,
      previous_balance, previous_equity, total_credit_facility, 
      floating_pnl, margin_requirements, available_margin
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  
  stmt.run(
    summary.accountNumber,
    summary.name,
    summary.currency,
    summary.date,
    summary.closedPnL,
    summary.balance,
    summary.equity,
    summary.previousBalance,
    summary.previousEquity,
    summary.totalCreditFacility,
    summary.floatingPnL,
    summary.marginRequirements,
    summary.availableMargin
  );
}

export function getLatestAccountSummary(): AccountSummary | null {
  const db = getDatabase();
  const stmt = db.prepare(`
    SELECT 
      account_number as accountNumber, name, currency, date,
      closed_pnl as closedPnL, balance, equity,
      previous_balance as previousBalance, previous_equity as previousEquity,
      total_credit_facility as totalCreditFacility, floating_pnl as floatingPnL,
      margin_requirements as marginRequirements, available_margin as availableMargin
    FROM account_summaries 
    ORDER BY created_at DESC 
    LIMIT 1
  `);
  return stmt.get() as AccountSummary | null;
}

export function deleteAllData(): void {
  const db = getDatabase();
  db.exec('DELETE FROM trades');
  db.exec('DELETE FROM account_summaries');
}

// Datenbank schließen
export function closeDatabase(): void {
  if (db) {
    db.close();
    db = null;
  }
} 