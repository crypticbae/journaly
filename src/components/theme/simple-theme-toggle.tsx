"use client"

import { useEffect, useState } from "react"
import { SunMoon, Palette } from "lucide-react"

type Theme = "light" | "dark" | "nord" | "cupcake" | "bumblebee" | "retro" | "halloween" | "forest" | "aqua" | "pastel" | "dracula" | "night" | "dim"

export function SimpleThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light")

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = (localStorage.getItem("theme") || "light") as Theme
    setTheme(savedTheme)
    document.documentElement.setAttribute("data-theme", savedTheme)
    console.log(`🎨 Initial theme loaded: ${savedTheme}`)
  }, [])

  const changeTheme = (newTheme: Theme) => {
    console.log(`🎨 Changing theme to: ${newTheme}`)
    setTheme(newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
    console.log(`🎨 Theme changed - HTML data-theme: ${document.documentElement.getAttribute("data-theme")}`)
  }

  const getThemeColors = (themeName: Theme) => {
    const colorMaps: Record<Theme, { bg: string; content: string; primary: string; secondary: string; accent: string }> = {
      light: {
        bg: "oklch(1 0 0)",
        content: "oklch(0.2 0 0)",
        primary: "oklch(0.4912 0.3096 275.75)",
        secondary: "oklch(0.6906 0.3618 342.55)",
        accent: "oklch(0.7151 0.2768 183.61)"
      },
      dark: {
        bg: "oklch(0.1915 0.0267 285.82)",
        content: "oklch(0.7206 0.0191 286.64)",
        primary: "oklch(0.6569 0.196 275.75)",
        secondary: "oklch(0.7451 0.2775 342.55)",
        accent: "oklch(0.7676 0.196 183.61)"
      },
      nord: {
        bg: "oklch(0.2607 0.0162 220.77)",
        content: "oklch(0.8736 0.0216 220.77)",
        primary: "oklch(0.6314 0.1046 220.77)",
        secondary: "oklch(0.7088 0.0779 220.77)",
        accent: "oklch(0.6824 0.0922 220.77)"
      },
      cupcake: {
        bg: "oklch(0.9647 0.0039 61.84)",
        content: "oklch(0.2 0 0)",
        primary: "oklch(0.7206 0.1059 3.72)",
        secondary: "oklch(0.8627 0.0706 61.84)",
        accent: "oklch(0.7255 0.1412 154.45)"
      },
      bumblebee: {
        bg: "oklch(1 0.0039 85.29)",
        content: "oklch(0.2 0 0)",
        primary: "oklch(0.6902 0.1412 85.29)",
        secondary: "oklch(0.8824 0.1412 85.29)",
        accent: "oklch(0.7412 0.1412 85.29)"
      },
      retro: {
        bg: "oklch(0.9412 0.0235 109.77)",
        content: "oklch(0.2706 0.0471 109.77)",
        primary: "oklch(0.7176 0.1294 76.91)",
        secondary: "oklch(0.6902 0.1294 218.07)",
        accent: "oklch(0.6078 0.1412 27.41)"
      },
      halloween: {
        bg: "oklch(0.1608 0.0157 269.75)",
        content: "oklch(0.8784 0.0627 40.69)",
        primary: "oklch(0.7098 0.1529 40.69)",
        secondary: "oklch(0.6902 0.1412 269.75)",
        accent: "oklch(0.6588 0.1765 27.41)"
      },
      forest: {
        bg: "oklch(0.1725 0.0196 152.61)",
        content: "oklch(0.8627 0.0392 152.61)",
        primary: "oklch(0.6078 0.1412 152.61)",
        secondary: "oklch(0.7804 0.1412 152.61)",
        accent: "oklch(0.5882 0.1647 27.41)"
      },
      aqua: {
        bg: "oklch(0.9451 0.0039 207.08)",
        content: "oklch(0.1333 0.0078 207.08)",
        primary: "oklch(0.6902 0.1412 207.08)",
        secondary: "oklch(0.7804 0.1412 315.68)",
        accent: "oklch(0.6078 0.1412 152.61)"
      },
      pastel: {
        bg: "oklch(1 0 0)",
        content: "oklch(0.2 0 0)",
        primary: "oklch(0.9 0.063 306.703)",
        secondary: "oklch(0.89 0.058 10.001)",
        accent: "oklch(0.9 0.093 164.15)"
      },
      dracula: {
        bg: "oklch(0.28822 0.022 277.508)",
        content: "oklch(0.97747 0.007 106.545)",
        primary: "oklch(0.75461 0.183 346.812)",
        secondary: "oklch(0.74202 0.148 301.883)",
        accent: "oklch(0.83392 0.124 66.558)"
      },
      night: {
        bg: "oklch(0.20768 0.039 265.754)",
        content: "oklch(0.84153 0.007 265.754)",
        primary: "oklch(0.75351 0.138 232.661)",
        secondary: "oklch(0.68011 0.158 276.934)",
        accent: "oklch(0.7236 0.176 350.048)"
      },
      dim: {
        bg: "oklch(0.30857 0.023 264.149)",
        content: "oklch(0.82901 0.031 222.959)",
        primary: "oklch(0.86133 0.141 139.549)",
        secondary: "oklch(0.73375 0.165 35.353)",
        accent: "oklch(0.74229 0.133 311.379)"
      }
    }
    return colorMaps[themeName]
  }

  const getThemeName = (themeName: Theme) => {
    const names: Record<Theme, string> = {
      light: "Light",
      dark: "Dark", 
      nord: "Nord",
      cupcake: "Cupcake",
      bumblebee: "Bumblebee",
      retro: "Retro",
      halloween: "Halloween",
      forest: "Forest",
      aqua: "Aqua",
      pastel: "Pastel",
      dracula: "Dracula",
      night: "Night",
      dim: "Dim"
    }
    return names[themeName]
  }

  const themes: Theme[] = ["light", "dark", "nord", "cupcake", "bumblebee", "retro", "halloween", "forest", "aqua", "pastel", "dracula", "night", "dim"]

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-sm p-2">
        <div className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm" style={{backgroundColor: getThemeColors(theme).bg}}>
          <div className="size-1 rounded-full" style={{backgroundColor: getThemeColors(theme).content}}></div>
          <div className="size-1 rounded-full" style={{backgroundColor: getThemeColors(theme).primary}}></div>
          <div className="size-1 rounded-full" style={{backgroundColor: getThemeColors(theme).secondary}}></div>
          <div className="size-1 rounded-full" style={{backgroundColor: getThemeColors(theme).accent}}></div>
        </div>
      </div>
      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-44 p-2 shadow border border-base-300">
        {themes.map((themeName) => {
          const colors = getThemeColors(themeName)
          return (
            <li key={themeName}>
              <button 
                onClick={() => changeTheme(themeName)} 
                className={`gap-3 px-3 py-2 ${theme === themeName ? "bg-base-content/10" : ""}`}
              >
                <div className="grid shrink-0 grid-cols-2 gap-1 rounded-md p-1.5 shadow-sm" style={{backgroundColor: colors.bg}}>
                  <div className="size-1.5 rounded-full" style={{backgroundColor: colors.content}}></div>
                  <div className="size-1.5 rounded-full" style={{backgroundColor: colors.primary}}></div>
                  <div className="size-1.5 rounded-full" style={{backgroundColor: colors.secondary}}></div>
                  <div className="size-1.5 rounded-full" style={{backgroundColor: colors.accent}}></div>
                </div>
                <div className="w-24 truncate text-left text-sm">{getThemeName(themeName)}</div>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
} 