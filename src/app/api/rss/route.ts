import { NextRequest, NextResponse } from 'next/server'

interface RSSItem {
  title: string
  description: string
  link: string
  pubDate: string
  guid?: string
}

interface RSSSource {
  name: string
  url: string
  parser: (xml: string) => RSSItem[]
}

// RSS Feed URLs
const RSS_SOURCES: Record<string, RSSSource> = {
  reuters: {
    name: "Reuters Finance",
    url: "https://feeds.reuters.com/reuters/businessNews",
    parser: parseStandardRSS
  },
  marketwatch: {
    name: "MarketWatch",
    url: "https://feeds.marketwatch.com/marketwatch/topstories/",
    parser: parseStandardRSS
  },
  yahoo: {
    name: "Yahoo Finance",
    url: "https://feeds.finance.yahoo.com/rss/2.0/headline",
    parser: parseStandardRSS
  },
  fxstreet: {
    name: "FXStreet",
    url: "https://www.fxstreet.com/rss/news",
    parser: parseStandardRSS
  }
}

function parseStandardRSS(xml: string): RSSItem[] {
  try {
    // Basic XML parsing for RSS items
    const items: RSSItem[] = []
    
    // Extract items using regex (ES5 compatible)
    const itemRegex = /<item>([\s\S]*?)<\/item>/g
    let match
    
    while ((match = itemRegex.exec(xml)) !== null) {
      const itemXml = match[1]
      
      // Extract title
      const titleMatch = itemXml.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>|<title>([\s\S]*?)<\/title>/)
      const title = titleMatch ? (titleMatch[1] || titleMatch[2] || '') : ''
      
      // Extract description  
      const descMatch = itemXml.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>|<description>([\s\S]*?)<\/description>/)
      const description = descMatch ? (descMatch[1] || descMatch[2] || '') : ''
      
      // Extract link
      const linkMatch = itemXml.match(/<link><!\[CDATA\[([\s\S]*?)\]\]><\/link>|<link>([\s\S]*?)<\/link>/)
      const link = linkMatch ? (linkMatch[1] || linkMatch[2] || '') : ''
      
      // Extract pubDate
      const dateMatch = itemXml.match(/<pubDate>([\s\S]*?)<\/pubDate>/)
      const pubDate = dateMatch ? dateMatch[1] : new Date().toISOString()
      
      if (title && link) {
        items.push({
          title: title.trim(),
          description: description.trim(),
          link: link.trim(),
          pubDate: pubDate.trim()
        })
      }
    }
    
    return items.slice(0, 20) // Limit to 20 items per source
  } catch (error) {
    console.error('Error parsing RSS:', error)
    return []
  }
}

async function fetchRSSFeed(url: string): Promise<string> {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; RSS Reader)',
        'Accept': 'application/rss+xml, application/xml, text/xml'
      },
      next: { revalidate: 300 } // Cache for 5 minutes
    })
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }
    
    return await response.text()
  } catch (error) {
    console.error(`Error fetching RSS from ${url}:`, error)
    throw error
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const source = searchParams.get('source')
    
    if (!source || !RSS_SOURCES[source]) {
      return NextResponse.json(
        { error: 'Invalid or missing source parameter' },
        { status: 400 }
      )
    }
    
    const rssSource = RSS_SOURCES[source]
    
    try {
      const xml = await fetchRSSFeed(rssSource.url)
      const items = rssSource.parser(xml)
      
      return NextResponse.json({
        source: rssSource.name,
        itemCount: items.length,
        items: items,
        lastUpdated: new Date().toISOString()
      })
    } catch (fetchError) {
      // Return mock data if RSS feed is unavailable
      console.error(`RSS feed unavailable for ${source}:`, fetchError)
      
      return NextResponse.json({
        source: rssSource.name,
        itemCount: 0,
        items: generateMockNews(rssSource.name),
        lastUpdated: new Date().toISOString(),
        note: "Using mock data - RSS feed temporarily unavailable"
      })
    }
    
  } catch (error) {
    console.error('RSS API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Mock data for when RSS feeds are unavailable
function generateMockNews(sourceName: string): RSSItem[] {
  const mockData: Record<string, RSSItem[]> = {
    "Reuters Finance": [
      {
        title: "Global Markets Rally on Strong Economic Data",
        description: "Stock markets worldwide gained ground following positive economic indicators...",
        link: "https://example.com/news1",
        pubDate: new Date(Date.now() - 1000 * 60 * 30).toISOString() // 30 min ago
      },
      {
        title: "Central Bank Signals Interest Rate Policy Changes",
        description: "Federal Reserve officials hint at potential monetary policy adjustments...",
        link: "https://example.com/news2", 
        pubDate: new Date(Date.now() - 1000 * 60 * 60).toISOString() // 1 hour ago
      }
    ],
    "MarketWatch": [
      {
        title: "Tech Stocks Lead Market Gains",
        description: "Technology sector outperforms broader market indices...",
        link: "https://example.com/news3",
        pubDate: new Date(Date.now() - 1000 * 60 * 45).toISOString()
      }
    ],
    "Yahoo Finance": [
      {
        title: "Currency Markets Show Volatility",
        description: "Major currency pairs experience increased trading volume...",
        link: "https://example.com/news4",
        pubDate: new Date(Date.now() - 1000 * 60 * 20).toISOString()
      }
    ],
    "FXStreet": [
      {
        title: "EUR/USD Technical Analysis Update",
        description: "European currency shows strength against the dollar...",
        link: "https://example.com/news5",
        pubDate: new Date(Date.now() - 1000 * 60 * 15).toISOString()
      }
    ]
  }
  
  return mockData[sourceName] || []
} 