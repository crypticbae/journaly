"use client"

import { Sun, Moon, Palette } from "lucide-react"
import { useSimpleTheme } from "./simple-theme-provider"

const themes = {
  // Light Themes (Defined with full CSS variables)
  light: { name: "Light", icon: Sun, category: "light", description: "Standard helles Theme" },
  cupcake: { name: "Cupcake", icon: Sun, category: "light", description: "Süße Pastellfarben" },
  nord: { name: "Nord", icon: Sun, category: "light", description: "Nordisches Design" },

  // Dark Themes (Defined with full CSS variables)
  dark: { name: "Dark", icon: Moon, category: "dark", description: "Standard dunkles Theme" },
  synthwave: { name: "Synthwave", icon: Moon, category: "dark", description: "80er Jahre Neon-Stil" },
  cyberpunk: { name: "Cyberpunk", icon: Moon, category: "dark", description: "Futuristische Neon-Farben" },
  dracula: { name: "Dracula", icon: Moon, category: "dark", description: "Vampir-inspirierte Farben" },
} as const

export function SimpleThemePicker() {
  const { theme, setTheme } = useSimpleTheme()

  const lightThemes = Object.entries(themes).filter(([_, config]) => config.category === 'light')
  const darkThemes = Object.entries(themes).filter(([_, config]) => config.category === 'dark')

  const handleThemeSelect = (newTheme: string) => {
    console.log('User selected theme:', newTheme)
    setTheme(newTheme as any)
    
    // Close dropdown
    const activeElement = document.activeElement as HTMLElement
    if (activeElement) {
      activeElement.blur()
    }
  }

  const getCurrentIcon = () => {
    const currentTheme = themes[theme as keyof typeof themes]
    if (currentTheme) {
      const Icon = currentTheme.icon
      return <Icon className="h-4 w-4" />
    }
    return <Palette className="h-4 w-4" />
  }

  return (
    <div className="w-full max-h-80 overflow-y-auto">
      <div className="mb-2 text-center">
        <div className="text-sm font-semibold">Current: {themes[theme as keyof typeof themes]?.name || theme}</div>
      </div>

      {/* Light Themes */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-2 px-1">
          <Sun className="h-4 w-4 text-yellow-500" />
          <span className="text-xs font-semibold">Light Themes</span>
        </div>
        <div className="grid grid-cols-1 gap-1">
          {lightThemes.map(([themeKey, themeConfig]) => (
            <button
              key={themeKey}
              onClick={() => handleThemeSelect(themeKey)}
              className={`flex items-center gap-3 px-3 py-2 text-sm transition-colors rounded-lg ${
                theme === themeKey 
                  ? 'bg-primary text-primary-content' 
                  : 'hover:bg-base-200'
              }`}
            >
              <themeConfig.icon className="h-4 w-4 opacity-60" />
              <span>{themeConfig.name}</span>
              {theme === themeKey && (
                <div className="ml-auto">
                  <div className="w-2 h-2 rounded-full bg-current"></div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Dark Themes */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-2 px-1">
          <Moon className="h-4 w-4 text-blue-500" />
          <span className="text-xs font-semibold">Dark Themes</span>
        </div>
        <div className="grid grid-cols-1 gap-1">
          {darkThemes.map(([themeKey, themeConfig]) => (
            <button
              key={themeKey}
              onClick={() => handleThemeSelect(themeKey)}
              className={`flex items-center gap-3 px-3 py-2 text-sm transition-colors rounded-lg ${
                theme === themeKey 
                  ? 'bg-primary text-primary-content' 
                  : 'hover:bg-base-200'
              }`}
            >
              <themeConfig.icon className="h-4 w-4 opacity-60" />
              <span>{themeConfig.name}</span>
              {theme === themeKey && (
                <div className="ml-auto">
                  <div className="w-2 h-2 rounded-full bg-current"></div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      
    </div>
  )
} 