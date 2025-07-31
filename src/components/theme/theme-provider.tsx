"use client"

import { createContext, useContext, useEffect, useState } from "react"

type ThemeType = 'light' | 'dark' | 'cupcake' | 'valentine' | 'garden' | 'aqua' | 'pastel' | 'wireframe' | 'retro' | 'cyberpunk' | 'synthwave' | 'halloween' | 'forest' | 'black' | 'luxury' | 'dracula' | 'night' | 'coffee' | 'winter' | 'dim' | 'nord' | 'sunset'

// Theme categories for organization
export const lightThemes: ThemeType[] = [
  'light', 'cupcake', 'valentine', 'garden', 'aqua', 'pastel', 'wireframe', 'retro', 'winter'
]

export const darkThemes: ThemeType[] = [
  'dark', 'cyberpunk', 'synthwave', 'halloween', 'forest', 'black', 'luxury', 'dracula', 'night', 'coffee', 'dim', 'sunset'
]

export const specialThemes: ThemeType[] = ['nord']

export const allThemes = [...lightThemes, ...darkThemes, ...specialThemes]

interface ThemeContextType {
  theme: ThemeType
  setTheme: (theme: ThemeType) => void
  isLight: boolean
  isDark: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: ThemeType
}

export function ThemeProvider({ children, defaultTheme = 'light' }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<ThemeType>(defaultTheme)
  const [mounted, setMounted] = useState(false)

  // Hydration safe theme loading
  useEffect(() => {
    setMounted(true)
    
    // Try to load theme from localStorage
    try {
      const savedTheme = localStorage.getItem('daisyui-theme') as ThemeType
      console.log('ThemeProvider: Loaded theme from localStorage:', savedTheme)
      
      if (savedTheme && allThemes.includes(savedTheme)) {
        setThemeState(savedTheme)
        document.documentElement.setAttribute('data-theme', savedTheme)
        console.log('ThemeProvider: Applied saved theme:', savedTheme)
      } else {
        // If no saved theme, use default
        setThemeState(defaultTheme)
        document.documentElement.setAttribute('data-theme', defaultTheme)
        console.log('ThemeProvider: Applied default theme:', defaultTheme)
      }
    } catch (error) {
      console.warn('Failed to load theme from localStorage:', error)
      setThemeState(defaultTheme)
      document.documentElement.setAttribute('data-theme', defaultTheme)
    }
  }, [defaultTheme])

  const setTheme = (newTheme: ThemeType) => {
    console.log('ThemeProvider: Setting theme to:', newTheme)
    setThemeState(newTheme)
    
    // Update DOM
    document.documentElement.setAttribute('data-theme', newTheme)
    console.log('ThemeProvider: DOM updated with theme:', newTheme)
    
    // Save to localStorage
    try {
      localStorage.setItem('daisyui-theme', newTheme)
      console.log('ThemeProvider: Theme saved to localStorage:', newTheme)
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error)
    }
  }

  const isLight = lightThemes.includes(theme)
  const isDark = darkThemes.includes(theme)

  const value = {
    theme,
    setTheme,
    isLight,
    isDark,
  }

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
} 