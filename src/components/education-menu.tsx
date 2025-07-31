"use client"

import { GraduationCap, Star, Crown, Diamond, ExternalLink } from "lucide-react"

export function EducationMenu() {
  const packages = [
    {
      name: "FREE MENTOR",
      icon: <GraduationCap className="h-5 w-5" />,
      description: "5-Tage Trading-Video-Kurs",
      color: "text-blue-600",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      borderColor: "border-blue-200",
      url: "https://www.elitefx24.com/course/kostenloser-mentor"
    },
    {
      name: "GOLD PAKET",
      icon: <Star className="h-5 w-5" />,
      description: "Daily Analysen + Live-Sessions",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50 hover:bg-yellow-100",
      borderColor: "border-yellow-200",
      url: "https://www.elitefx24.com/course/gold-member"
    },
    {
      name: "PLATIN PAKET",
      icon: <Crown className="h-5 w-5" />,
      description: "Live Trading + Fundamentalanalyse",
      color: "text-gray-600",
      bgColor: "bg-gray-50 hover:bg-gray-100",
      borderColor: "border-gray-200",
      url: "https://www.elitefx24.com/course/platin-member"
    },
    {
      name: "DIAMOND PAKET",
      icon: <Diamond className="h-5 w-5" />,
      description: "Elite Trading-Mastery",
      color: "text-purple-600",
      bgColor: "bg-purple-50 hover:bg-purple-100",
      borderColor: "border-purple-200",
      url: "https://www.elitefx24.com/course/diamant-member"
    }
  ]

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div className="dropdown dropdown-top dropdown-start">
        <div tabIndex={0} role="button" className="btn btn-primary btn-sm gap-2 shadow-lg">
          <GraduationCap className="h-4 w-4" />
          <span className="hidden sm:inline">EliteFX24 Bildung</span>
        </div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-80 p-3 shadow-xl border border-base-300 mb-2">
          <li className="menu-title">
            <span className="text-base font-bold text-base-content flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              EliteFX24 Trading-Pakete
            </span>
          </li>
          <div className="divider my-2"></div>
          {packages.map((pkg, index) => (
            <li key={index}>
              <a 
                href={pkg.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${pkg.bgColor} ${pkg.borderColor} hover:shadow-md`}
              >
                <div className={`${pkg.color}`}>
                  {pkg.icon}
                </div>
                <div className="flex-1">
                  <div className={`font-semibold ${pkg.color}`}>
                    {pkg.name}
                  </div>
                  <div className="text-xs text-base-content/60">
                    {pkg.description}
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-base-content/40" />
              </a>
            </li>
          ))}
          <div className="divider my-2"></div>
          <li>
            <div className="text-center">
              <p className="text-xs text-base-content/60 mb-2">
                Entfalten Sie Ihr Trading-Potenzial
              </p>
              <p className="text-xs text-base-content/80 font-medium">
                Von Einsteiger bis zum unabhängigen Trader
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
} 