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
    <div className="space-y-8">
      {/* Stunning Header with Gradient Background */}
      <div className="relative overflow-hidden rounded-2xl">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-10 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-4 right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-secondary/10 rounded-full blur-lg animate-pulse"></div>
        
        <Card className="border-0 bg-base-100/80 backdrop-blur-sm shadow-2xl">
          <CardHeader className="pb-8 pt-8">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <CardTitle className="flex items-center gap-3 text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-lg text-white">
                    <Newspaper className="h-6 w-6" />
                  </div>
                  Trading News & Markets
                </CardTitle>
                <CardDescription className="text-lg text-base-content/70">
                  📈 Live-Nachrichten aus der Finanzwelt • 🔄 Auto-Update alle 10 Min
                </CardDescription>
                
                {/* Live Indicator */}
                <div className="flex items-center gap-2 pt-2">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse shadow-lg"></div>
                    <span className="text-sm font-medium text-success">LIVE</span>
                  </div>
                  <div className="text-sm text-base-content/60">
                    {filteredNews.length} aktuelle Artikel
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <Button 
                  onClick={fetchNews} 
                  disabled={isLoading}
                  className="btn-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                  Aktualisieren
                </Button>
                <div className="text-xs text-center text-base-content/60">
                  {new Date().toLocaleTimeString('de-DE')}
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>

            {/* Stunning Sources & Filters */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* News Sources */}
        <Card className="bg-gradient-to-br from-base-100 to-base-200 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 bg-gradient-to-br from-info to-info/80 rounded-lg text-white">
                <Globe className="h-5 w-5" />
              </div>
              News-Quellen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-3">
              {NEWS_SOURCES.map((source, index) => (
                <div 
                  key={source.name} 
                  className="group flex items-center gap-4 p-4 bg-base-100 rounded-xl border border-base-300 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`p-3 rounded-xl shadow-md text-white bg-gradient-to-br ${
                    source.color === 'badge-primary' ? 'from-primary to-primary/80' :
                    source.color === 'badge-secondary' ? 'from-secondary to-secondary/80' :
                    source.color === 'badge-accent' ? 'from-accent to-accent/80' :
                    'from-info to-info/80'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    {source.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-base-content group-hover:text-primary transition-colors">
                      {source.name}
                    </div>
                    <Badge className={`${source.color} badge-sm mt-1 shadow-sm`}>
                      {source.category.toUpperCase()}
                    </Badge>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Category Filters */}
        <Card className="bg-gradient-to-br from-base-100 to-base-200 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 bg-gradient-to-br from-warning to-warning/80 rounded-lg text-white">
                <Filter className="h-5 w-5" />
              </div>
              Kategorien
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-sm text-base-content/70 mb-4">
                Filtere Nachrichten nach Kategorien:
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {categories.map((category, index) => (
                  <Button
                    key={category}
                    className={`h-12 font-medium transition-all duration-300 hover:scale-105 ${
                      selectedCategory === category 
                        ? 'btn-primary shadow-lg shadow-primary/25' 
                        : 'btn-outline hover:btn-primary'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-center gap-2">
                      {category === "all" && <Globe className="h-4 w-4" />}
                      {category === "finance" && <DollarSign className="h-4 w-4" />}
                      {category === "markets" && <TrendingUp className="h-4 w-4" />}
                      {category === "forex" && <BarChart3 className="h-4 w-4" />}
                      <span>{category === "all" ? "Alle" : category.toUpperCase()}</span>
                    </div>
                  </Button>
                ))}
              </div>
              
              {/* Filter Stats */}
              <div className="mt-4 p-3 bg-base-200 rounded-lg">
                <div className="text-sm text-center">
                  <span className="font-medium text-primary">{filteredNews.length}</span>
                  <span className="text-base-content/70"> Artikel gefiltert</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

            {/* Premium News Feed */}
      <Card className="bg-gradient-to-br from-base-100 to-base-200 border-0 shadow-2xl">
        <CardHeader className="pb-6">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-3 bg-gradient-to-br from-success to-success/80 rounded-xl text-white shadow-lg">
                <Newspaper className="h-6 w-6" />
              </div>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Live News Feed
              </span>
            </CardTitle>
            
            <div className="flex items-center gap-3">
              <Badge className="badge-success shadow-lg px-4 py-2 text-sm">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-2"></div>
                {filteredNews.length} Artikel
              </Badge>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-16 space-y-4">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-primary/20 rounded-full"></div>
                <div className="absolute top-0 left-0 w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
              <div className="text-center">
                <div className="font-medium text-lg text-primary">Lade aktuelle Nachrichten...</div>
                <div className="text-sm text-base-content/60 mt-1">Dies kann einen Moment dauern</div>
              </div>
            </div>
          ) : filteredNews.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-base-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <Newspaper className="h-8 w-8 text-base-content/40" />
              </div>
              <div className="text-lg font-medium text-base-content/70">Keine Nachrichten gefunden</div>
              <div className="text-sm text-base-content/50 mt-1">Versuche einen anderen Filter oder aktualisiere die Seite</div>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredNews.map((item, index) => (
                <div 
                  key={index} 
                  className="group relative bg-base-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-base-300/50 hover:border-primary/30"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative flex items-start justify-between gap-6">
                    <div className="flex-1 space-y-3">
                      {/* Title */}
                      <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors duration-300">
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block hover:underline"
                        >
                          {item.title}
                        </a>
                      </h3>
                      
                      {/* Description */}
                      {item.description && (
                        <p className="text-base-content/80 text-base leading-relaxed line-clamp-3">
                          {item.description.replace(/<[^>]*>/g, '').substring(0, 300)}
                          {item.description.length > 300 ? '...' : ''}
                        </p>
                      )}
                      
                      {/* Meta Information */}
                      <div className="flex items-center gap-4 pt-2">
                        <Badge className={`shadow-sm px-3 py-1 font-medium ${
                          item.source.includes('Reuters') ? 'badge-primary' :
                          item.source.includes('MarketWatch') ? 'badge-secondary' :
                          item.source.includes('Yahoo') ? 'badge-accent' :
                          'badge-info'
                        }`}>
                          {item.source}
                        </Badge>
                        
                        <div className="flex items-center gap-2 text-sm text-base-content/60">
                          <Clock className="h-4 w-4" />
                          <span className="font-medium">{formatDate(item.pubDate)}</span>
                        </div>
                        
                        {item.category && (
                          <Badge className="badge-outline badge-sm">
                            {item.category.toUpperCase()}
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <div className="flex flex-col items-center gap-2">
                      <Button 
                        className="btn-primary btn-circle shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                        onClick={() => window.open(item.link, '_blank')}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </Button>
                      <div className="text-xs text-base-content/40 text-center">
                        Lesen
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full"></div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Enhanced Live Status Footer */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-success/10 via-primary/10 to-info/10 rounded-2xl blur-sm"></div>
        <Card className="relative bg-base-100/90 backdrop-blur-sm border-0 shadow-xl">
          <CardContent className="py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Live Status Indicator */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-4 h-4 bg-success rounded-full animate-pulse shadow-lg"></div>
                  <div className="absolute inset-0 w-4 h-4 bg-success rounded-full animate-ping opacity-75"></div>
                </div>
                <div className="text-center md:text-left">
                  <div className="font-bold text-lg text-success">LIVE STATUS</div>
                  <div className="text-sm text-base-content/70">Auto-Update alle 10 Minuten</div>
                </div>
              </div>
              
              {/* Statistics */}
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{news.length}</div>
                  <div className="text-xs text-base-content/60">Artikel geladen</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">{NEWS_SOURCES.length}</div>
                  <div className="text-xs text-base-content/60">News-Quellen</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">10</div>
                  <div className="text-xs text-base-content/60">Min Intervall</div>
                </div>
              </div>
              
              {/* Last Update */}
              <div className="flex items-center gap-3 text-center md:text-right">
                <div className="p-2 bg-info/20 rounded-lg">
                  <Clock className="h-5 w-5 text-info" />
                </div>
                <div>
                  <div className="font-medium text-base-content">Letzte Aktualisierung</div>
                  <div className="text-sm text-base-content/70 font-mono">
                    {new Date().toLocaleString('de-DE')}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Progress Bar for Next Update */}
            <div className="mt-6 space-y-2">
              <div className="flex justify-between text-xs text-base-content/60">
                <span>Nächste Aktualisierung in:</span>
                <span>~{10 - (Math.floor(Date.now() / 60000) % 10)} Min</span>
              </div>
              <div className="w-full bg-base-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-success to-primary h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${((Math.floor(Date.now() / 60000) % 10) / 10) * 100}%` }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 