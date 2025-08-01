"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Newspaper, 
  ExternalLink, 
  RefreshCw, 
  TrendingUp, 
  DollarSign, 
  BarChart3,
  Globe,
  Clock,
  Filter
} from "lucide-react"

interface NewsItem {
  title: string
  description: string
  link: string
  pubDate: string
  source: string
  category?: string
}

interface NewsSource {
  name: string
  url: string
  category: string
  icon: React.ReactNode
  color: string
}

const NEWS_SOURCES: NewsSource[] = [
  {
    name: "Reuters Finance",
    url: "/api/rss?source=reuters",
    category: "finance",
    icon: <DollarSign className="h-4 w-4" />,
    color: "badge-primary"
  },
  {
    name: "MarketWatch",
    url: "/api/rss?source=marketwatch",
    category: "markets", 
    icon: <TrendingUp className="h-4 w-4" />,
    color: "badge-secondary"
  },
  {
    name: "Yahoo Finance",
    url: "/api/rss?source=yahoo",
    category: "finance",
    icon: <BarChart3 className="h-4 w-4" />,
    color: "badge-accent"
  },
  {
    name: "FXStreet",
    url: "/api/rss?source=fxstreet",
    category: "forex",
    icon: <Globe className="h-4 w-4" />,
    color: "badge-info"
  }
]

export function NewsFeed() {
  const [news, setNews] = React.useState<NewsItem[]>([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all")
  const [error, setError] = React.useState<string>("")

  const fetchNews = async () => {
    setIsLoading(true)
    setError("")
    
    try {
      const allNews: NewsItem[] = []
      
      // Fetch from all sources
      const promises = NEWS_SOURCES.map(async (source) => {
        try {
          const response = await fetch(source.url)
          const data = await response.json()
          
          if (response.ok && data.items) {
            return data.items.map((item: any) => ({
              ...item,
              source: source.name,
              category: source.category
            }))
          }
          return []
        } catch (err) {
          console.error(`Error fetching ${source.name}:`, err)
          return []
        }
      })
      
      const results = await Promise.all(promises)
      results.forEach(items => allNews.push(...items))
      
      // Sort by date (newest first)
      allNews.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
      
      setNews(allNews.slice(0, 50)) // Limit to 50 latest items
    } catch (error) {
      console.error('Error fetching news:', error)
      setError('Fehler beim Laden der Nachrichten')
    } finally {
      setIsLoading(false)
    }
  }

  React.useEffect(() => {
    fetchNews()
    
    // Auto-refresh every 10 minutes
    const interval = setInterval(fetchNews, 10 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
    const diffMinutes = Math.floor(diffMs / (1000 * 60))
    
    if (diffMinutes < 60) {
      return `vor ${diffMinutes} Min`
    } else if (diffHours < 24) {
      return `vor ${diffHours} Std`
    } else {
      return date.toLocaleDateString('de-DE')
    }
  }

  const filteredNews = selectedCategory === "all" 
    ? news 
    : news.filter(item => item.category === selectedCategory)

  const categories = ["all", ...Array.from(new Set(news.map(item => item.category)))]

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Newspaper className="h-5 w-5" />
            Trading News
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <div className="text-error mb-4">{error}</div>
            <Button onClick={fetchNews} variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Erneut versuchen
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Newspaper className="h-5 w-5" />
                Trading News & Markets
              </CardTitle>
              <CardDescription>
                Live-Nachrichten aus der Finanzwelt
              </CardDescription>
            </div>
            <Button 
              onClick={fetchNews} 
              disabled={isLoading}
              size="sm"
              variant="outline"
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              Aktualisieren
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Sources & Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Filter className="h-4 w-4" />
            News-Quellen
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {NEWS_SOURCES.map((source) => (
              <div key={source.name} className="flex items-center gap-2 p-3 bg-base-100 rounded-lg border">
                {source.icon}
                <div>
                  <div className="font-medium text-sm">{source.name}</div>
                  <Badge className={`${source.color} badge-sm`}>
                    {source.category}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
                             <Button
                 key={category}
                 size="sm"
                 variant={selectedCategory === category ? "primary" : "outline"}
                 onClick={() => setSelectedCategory(category)}
               >
                {category === "all" ? "Alle" : category.toUpperCase()}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* News Feed */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Aktuelle Nachrichten</span>
            <Badge className="badge-success">
              {filteredNews.length} Artikel
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex justify-center py-8">
              <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
          ) : filteredNews.length === 0 ? (
            <div className="text-center py-8 text-base-content opacity-60">
              Keine Nachrichten gefunden
            </div>
          ) : (
            <div className="space-y-4">
              {filteredNews.map((item, index) => (
                <div key={index} className="border-b border-base-300 pb-4 last:border-b-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2 leading-tight">
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          {item.title}
                        </a>
                      </h3>
                      
                      {item.description && (
                        <p className="text-base-content opacity-70 text-sm mb-2 line-clamp-2">
                          {item.description.replace(/<[^>]*>/g, '').substring(0, 200)}...
                        </p>
                      )}
                      
                      <div className="flex items-center gap-3 text-xs">
                        <Badge className="badge-outline badge-sm">
                          {item.source}
                        </Badge>
                        <div className="flex items-center gap-1 text-base-content opacity-60">
                          <Clock className="h-3 w-3" />
                          {formatDate(item.pubDate)}
                        </div>
                      </div>
                    </div>
                    
                                         <Button 
                       size="sm" 
                       variant="ghost"
                       onClick={() => window.open(item.link, '_blank')}
                     >
                       <ExternalLink className="h-4 w-4" />
                     </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Live Status */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-center gap-2 text-sm text-base-content opacity-60">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span>Live-Updates alle 10 Minuten</span>
            <span>•</span>
            <span>Letzte Aktualisierung: {new Date().toLocaleTimeString('de-DE')}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 