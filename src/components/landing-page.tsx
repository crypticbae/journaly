"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  TrendingUp, 
  BarChart3,
  Users,
  Mail,
  Shield,
  Calendar,
  ArrowRight, 
  Play,
  CheckCircle2,
  Star,
  Download,
  Zap,
  Target,
  Globe,
  MessageCircle,
  ChevronDown,
  LineChart,
  PieChart,
  Database,
  Clock,
  Smartphone,
  Monitor
} from "lucide-react"
import { useRouter } from "next/navigation"

export function LandingPage() {
  const router = useRouter()
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">J</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-gray-900">Journaly</span>
                  <span className="text-sm text-gray-500 ml-2">by EFX24</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button 
                onClick={() => window.open('https://discord.gg/HnbSSMcqNv', '_blank')}
                variant="outline"
                className="border-blue-200 text-blue-700 hover:bg-blue-50"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Discord beitreten
              </Button>
              <Button 
                onClick={() => window.open('https://discord.gg/HnbSSMcqNv', '_blank')}
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
              >
                Zugang beantragen
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4">
        <div className={`max-w-7xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Hero Content */}
          <div className="max-w-4xl mx-auto mb-16">
            <Badge className="mb-6 px-4 py-2 bg-amber-100 text-amber-700 border-amber-200">
              <Star className="h-4 w-4 mr-2" />
              Exklusiv für EliteFX24 Member
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Das Trading Journal für
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> EliteFX24 Member</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
              Analysiere deine PU Prime Trades, importiere automatisch Email-Confirmations und verbessere deine Strategie. Exklusiv entwickelt für Member der EliteFX24 Community.
            </p>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="h-6 w-6 text-amber-600" />
                <span className="font-semibold text-amber-800">Wichtige Informationen</span>
              </div>
              <ul className="text-amber-700 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600" />
                  <span>Nur für EliteFX24 Member verfügbar</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600" />
                  <span>Funktioniert ausschließlich mit PU Prime</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600" />
                  <span>Zugang nur über Discord-Anfrage</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                onClick={() => window.open('https://discord.gg/HnbSSMcqNv', '_blank')}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Zugang im Discord beantragen
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              
              <Button 
                onClick={() => router.push('/dashboard')}
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 px-8 py-4 text-lg hover:bg-gray-50"
              >
                <Monitor className="h-5 w-5 mr-2" />
                Live Demo ansehen
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {[
                { label: "EliteFX24 Member", value: "500+", icon: Users },
                { label: "PU Prime Trades", value: "250K+", icon: TrendingUp },
                { label: "Email-Import", value: "99.9%", icon: Mail },
                { label: "Member Zufriedenheit", value: "100%", icon: Shield }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </div>
      </section>

      {/* App Screenshot Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nahtlose PU Prime Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Importiere automatisch deine PU Prime Trading-Confirmations und analysiere deine Performance in Echtzeit
            </p>
          </div>

          {/* App Preview */}
          <div className="relative max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-6 border-b pb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600 ml-4 font-mono text-sm">journaly.app/dashboard</span>
                  <div className="ml-auto flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-700 text-xs font-medium">PU Prime Connected</span>
                  </div>
                </div>
                
                {/* Fake Dashboard Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-green-700 text-sm font-medium">PU Prime Gewinn</span>
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="text-2xl font-bold text-green-800">+€8,750</div>
                    <div className="text-sm text-green-600">+15.2% diesen Monat</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-blue-700 text-sm font-medium">Win Rate</span>
                      <Target className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-blue-800">78.5%</div>
                    <div className="text-sm text-blue-600">Elite Member Ø</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-purple-700 text-sm font-medium">Emails importiert</span>
                      <Mail className="h-4 w-4 text-purple-600" />
                    </div>
                    <div className="text-2xl font-bold text-purple-800">247</div>
                    <div className="text-sm text-purple-600">PU Prime Confirmations</div>
                  </div>
                </div>

                {/* Fake Chart */}
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">PU Prime Performance Timeline</h3>
                    <div className="flex gap-2">
                      <Badge variant="outline">7D</Badge>
                      <Badge className="bg-blue-600">30D</Badge>
                      <Badge variant="outline">1Y</Badge>
                    </div>
                  </div>
                  <div className="h-48 bg-gradient-to-t from-blue-100 to-blue-50 rounded-lg border border-blue-200 flex items-end justify-center">
                    <LineChart className="h-16 w-16 text-blue-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-blue-100 text-blue-700 border-blue-200">
              <Zap className="h-4 w-4 mr-2" />
              Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Speziell für EliteFX24 Member entwickelt
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Exklusives Trading Journal mit PU Prime Integration - nur für Elite-Member verfügbar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Mail,
                title: "PU Prime Email-Import",
                description: "Automatischer Import von PU Prime Trading-Confirmations. .eml und .html Dateien werden nahtlos erkannt und verarbeitet.",
                color: "blue"
              },
              {
                icon: BarChart3,
                title: "Elite Member Analytics",
                description: "Erweiterte Performance-Analyse speziell für EliteFX24 Member mit exklusiven Metriken und Benchmarks.",
                color: "green"
              },
              {
                icon: Users,
                title: "Exklusiver Member-Zugang",
                description: "Nur für verifizierte EliteFX24 Member verfügbar. Zugang wird über Discord-Anfrage gewährt.",
                color: "purple"
              },
              {
                icon: Calendar,
                title: "PU Prime Trading-Kalender",
                description: "Visualisiere deine PU Prime Performance im Kalender. Erkenne Muster und optimiere deine Elite-Strategie.",
                color: "orange"
              },
              {
                icon: Shield,
                title: "Elite Member Sicherheit",
                description: "Höchste Sicherheitsstandards für EliteFX24 Member. Deine PU Prime Daten bleiben privat und geschützt.",
                color: "red"
              },
              {
                icon: Target,
                title: "PU Prime Optimiert",
                description: "Speziell für PU Prime entwickelt. Funktioniert ausschließlich mit PU Prime Trading-Daten und -Formaten.",
                color: "indigo"
              }
            ].map((feature, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-gray-200 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-${feature.color}-100 border border-${feature.color}-200 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-6 w-6 text-${feature.color}-600`} />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Vertrauen der EliteFX24 Community
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: "EliteFX24 Member", value: "500+", icon: Users },
              { label: "PU Prime Trades importiert", value: "250K+", icon: Database },
              { label: "Durchschnittl. Elite Performance", value: "+32%", icon: TrendingUp },
              { label: "Member Zufriedenheit", value: "100%", icon: Star }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bereit der EliteFX24 Community beizutreten?
          </h2>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            Erhalte exklusiven Zugang zum professionellen Trading Journal für EliteFX24 Member mit PU Prime Integration.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-10 max-w-2xl mx-auto border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-white" />
              <span className="font-semibold text-white">Zugangsvoraussetzungen</span>
            </div>
            <ul className="text-blue-100 space-y-2 text-left">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-white" />
                <span>Aktive EliteFX24 Member-Mitgliedschaft</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-white" />
                <span>PU Prime Trading Account</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-white" />
                <span>Anfrage über EliteFX24 Discord</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              onClick={() => window.open('https://discord.gg/HnbSSMcqNv', '_blank')}
              size="lg"
              className="bg-white text-blue-700 hover:bg-gray-50 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Zugang im Discord beantragen
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            
            <Button 
              onClick={() => window.open('https://discord.gg/HnbSSMcqNv', '_blank')}
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm"
            >
              <Users className="h-5 w-5 mr-2" />
              EliteFX24 Community
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              <span>Kostenlos für Member</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              <span>Exklusiver Zugang</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              <span>PU Prime Integration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">J</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-white">Journaly</span>
                  <span className="text-gray-400 ml-2">by EFX24</span>
                </div>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Das exklusive Trading Journal für EliteFX24 Member. Speziell für PU Prime entwickelt. Von Marcel aka bae.
              </p>
              <Button 
                onClick={() => window.open('https://discord.gg/HnbSSMcqNv', '_blank')}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                EliteFX24 Discord: bae69
              </Button>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">EliteFX24</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://discord.gg/HnbSSMcqNv" target="_blank" className="hover:text-white transition-colors">Discord Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Member Benefits</a></li>
                <li><a href="#" className="hover:text-white transition-colors">PU Prime Setup</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://discord.gg/HnbSSMcqNv" target="_blank" className="hover:text-white transition-colors">Discord Hilfe</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Member FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kontakt bae69</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Journaly - Exklusiv für EliteFX24 Member. Made with ❤️ by Marcel aka bae.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 