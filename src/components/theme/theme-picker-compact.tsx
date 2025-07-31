"use client"

import { Sun, Moon, Palette } from "lucide-react"
import { useTheme, lightThemes, darkThemes, specialThemes } from "./theme-provider"

const themeDisplayNames: Record<string, string> = {
  // Light themes
  light: "Light",
  cupcake: "Cupcake",
  valentine: "Valentine", 
  garden: "Garden",
  aqua: "Aqua",
  pastel: "Pastel",
  wireframe: "Wireframe",
  retro: "Retro",
  winter: "Winter",
  
  // Dark themes
  dark: "Dark",
  cyberpunk: "Cyberpunk",
  synthwave: "Synthwave",
  halloween: "Halloween",
  forest: "Forest",
  black: "Black",
  luxury: "Luxury",
  dracula: "Dracula",
  night: "Night",
  coffee: "Coffee",
  dim: "Dim",
  sunset: "Sunset",
  
  // Special themes
  nord: "Nord",
}

export function ThemePickerCompact() {
  const { theme, setTheme } = useTheme()

  const handleThemeSelect = (newTheme: any) => {
    setTheme(newTheme)
    // Close dropdown by removing focus
    const activeElement = document.activeElement as HTMLElement
    if (activeElement) {
      activeElement.blur()
    }
  }

  return (
    <div className="w-full max-h-80 overflow-y-auto">
      {/* Light Themes Section */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-2 px-1">
          <Sun className="h-4 w-4 text-base-content/60" />
          <span className="text-xs font-semibold text-base-content/60">Light Themes</span>
        </div>
        <div className="grid grid-cols-1 gap-1">
          {lightThemes.map((themeOption) => (
            <button
              key={themeOption}
              onClick={() => handleThemeSelect(themeOption)}
              className={`flex items-center gap-3 px-3 py-2 text-sm transition-colors rounded-lg ${
                theme === themeOption 
                  ? 'bg-primary text-primary-content' 
                  : 'hover:bg-base-200'
              }`}
            >
              <Sun className="h-4 w-4 opacity-60" />
              <span>{themeDisplayNames[themeOption]}</span>
              {theme === themeOption && (
                <div className="ml-auto">
                  <div className="w-2 h-2 rounded-full bg-current"></div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Dark Themes Section */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-2 px-1">
          <Moon className="h-4 w-4 text-base-content/60" />
          <span className="text-xs font-semibold text-base-content/60">Dark Themes</span>
        </div>
        <div className="grid grid-cols-1 gap-1">
          {darkThemes.map((themeOption) => (
            <button
              key={themeOption}
              onClick={() => handleThemeSelect(themeOption)}
              className={`flex items-center gap-3 px-3 py-2 text-sm transition-colors rounded-lg ${
                theme === themeOption 
                  ? 'bg-primary text-primary-content' 
                  : 'hover:bg-base-200'
              }`}
            >
              <Moon className="h-4 w-4 opacity-60" />
              <span>{themeDisplayNames[themeOption]}</span>
              {theme === themeOption && (
                <div className="ml-auto">
                  <div className="w-2 h-2 rounded-full bg-current"></div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Special Themes Section */}
      <div>
        <div className="flex items-center gap-2 mb-2 px-1">
          <Palette className="h-4 w-4 text-base-content/60" />
          <span className="text-xs font-semibold text-base-content/60">Special Themes</span>
        </div>
        <div className="grid grid-cols-1 gap-1">
          {specialThemes.map((themeOption) => (
            <button
              key={themeOption}
              onClick={() => handleThemeSelect(themeOption)}
              className={`flex items-center gap-3 px-3 py-2 text-sm transition-colors rounded-lg ${
                theme === themeOption 
                  ? 'bg-primary text-primary-content' 
                  : 'hover:bg-base-200'
              }`}
            >
              <Palette className="h-4 w-4 opacity-60" />
              <span>{themeDisplayNames[themeOption]}</span>
              {theme === themeOption && (
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