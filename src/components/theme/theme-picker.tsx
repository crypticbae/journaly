"use client"

import { ChevronDown, Sun, Moon, Palette } from "lucide-react"
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

export function ThemePicker() {
  const { theme, setTheme, isLight } = useTheme()

  const getThemeIcon = (themeType: 'light' | 'dark' | 'special') => {
    switch (themeType) {
      case 'light':
        return <Sun className="h-4 w-4" />
      case 'dark':
        return <Moon className="h-4 w-4" />
      case 'special':
        return <Palette className="h-4 w-4" />
    }
  }

  const getCurrentThemeIcon = () => {
    if (lightThemes.includes(theme)) return <Sun className="h-4 w-4" />
    if (darkThemes.includes(theme)) return <Moon className="h-4 w-4" />
    return <Palette className="h-4 w-4" />
  }

  return (
    <div className="dropdown dropdown-top w-full">
      {/* Trigger Button */}
      <div 
        tabIndex={0} 
        role="button" 
        className="btn btn-ghost btn-sm w-full justify-between normal-case font-normal"
      >
        <div className="flex items-center gap-2">
          {getCurrentThemeIcon()}
          <span className="text-sm">Theme: {themeDisplayNames[theme]}</span>
        </div>
        <ChevronDown className="h-4 w-4 opacity-60" />
      </div>

      {/* Dropdown Menu */}
      <ul 
        tabIndex={0} 
        className="dropdown-content menu bg-base-200 rounded-box z-50 w-72 p-2 shadow-xl border border-base-300 max-h-96 overflow-y-auto"
      >
        {/* Light Themes Section */}
        <li className="menu-title text-xs font-semibold text-base-content/60 px-2 py-1">
          <div className="flex items-center gap-2">
            <Sun className="h-3 w-3" />
            Light Themes
          </div>
        </li>
        {lightThemes.map((themeOption) => (
          <li key={themeOption}>
            <button
              onClick={() => setTheme(themeOption)}
              className={`flex items-center gap-3 px-3 py-2 text-sm transition-colors ${
                theme === themeOption 
                  ? 'bg-primary text-primary-content' 
                  : 'hover:bg-base-300'
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
          </li>
        ))}

        {/* Divider */}
        <div className="divider my-1"></div>

        {/* Dark Themes Section */}
        <li className="menu-title text-xs font-semibold text-base-content/60 px-2 py-1">
          <div className="flex items-center gap-2">
            <Moon className="h-3 w-3" />
            Dark Themes
          </div>
        </li>
        {darkThemes.map((themeOption) => (
          <li key={themeOption}>
            <button
              onClick={() => setTheme(themeOption)}
              className={`flex items-center gap-3 px-3 py-2 text-sm transition-colors ${
                theme === themeOption 
                  ? 'bg-primary text-primary-content' 
                  : 'hover:bg-base-300'
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
          </li>
        ))}

        {/* Divider */}
        <div className="divider my-1"></div>

        {/* Special Themes Section */}
        <li className="menu-title text-xs font-semibold text-base-content/60 px-2 py-1">
          <div className="flex items-center gap-2">
            <Palette className="h-3 w-3" />
            Special Themes
          </div>
        </li>
        {specialThemes.map((themeOption) => (
          <li key={themeOption}>
            <button
              onClick={() => setTheme(themeOption)}
              className={`flex items-center gap-3 px-3 py-2 text-sm transition-colors ${
                theme === themeOption 
                  ? 'bg-primary text-primary-content' 
                  : 'hover:bg-base-300'
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
          </li>
        ))}
      </ul>
    </div>
  )
} 