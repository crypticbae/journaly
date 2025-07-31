"use client"

import { createContext, useContext, useEffect, useState } from "react"

type ThemeType = 'light' | 'dark' | 'cupcake' | 'synthwave' | 'cyberpunk' | 'dracula' | 'nord'

interface SimpleThemeContextType {
  theme: ThemeType
  setTheme: (theme: ThemeType) => void
}

const SimpleThemeContext = createContext<SimpleThemeContextType | undefined>(undefined)

export function useSimpleTheme() {
  const context = useContext(SimpleThemeContext)
  if (context === undefined) {
    throw new Error('useSimpleTheme must be used within a SimpleThemeProvider')
  }
  return context
}

export function SimpleThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeType>('light')

  // Force apply theme to DOM
  const applyTheme = (newTheme: ThemeType) => {
    console.log('Applying theme:', newTheme)
    
    // Remove all possible theme attributes first
    document.documentElement.removeAttribute('data-theme')
    
    // Force a small delay and then apply
    setTimeout(() => {
      document.documentElement.setAttribute('data-theme', newTheme)
      console.log('Theme applied to DOM:', newTheme)
      
      // Verify it was applied
      const appliedTheme = document.documentElement.getAttribute('data-theme')
      console.log('Verified DOM theme:', appliedTheme)
    }, 10)
    
    // Save to localStorage
    try {
      localStorage.setItem('simple-theme', newTheme)
      console.log('Theme saved to localStorage:', newTheme)
    } catch (e) {
      console.warn('Could not save theme to localStorage:', e)
    }
  }

  // Load initial theme
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('simple-theme') as ThemeType
      console.log('Loaded theme from localStorage:', savedTheme)
      
      if (savedTheme) {
        setThemeState(savedTheme)
        applyTheme(savedTheme)
      } else {
        applyTheme('light')
      }
    } catch (e) {
      console.warn('Could not load theme from localStorage:', e)
      applyTheme('light')
    }
  }, [])

  const setTheme = (newTheme: ThemeType) => {
    console.log('Setting new theme:', newTheme)
    setThemeState(newTheme)
    applyTheme(newTheme)
  }

  return (
    <SimpleThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </SimpleThemeContext.Provider>
  )
} 