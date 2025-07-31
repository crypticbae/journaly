"use client"

import { useEffect, useState } from "react"

export default function CSSDebugPage() {
  const [cssVariables, setCssVariables] = useState<Record<string, string>>({})
  const [currentTheme, setCurrentTheme] = useState<string>("light")

  useEffect(() => {
    // Set default theme
    document.documentElement.setAttribute('data-theme', 'light')
    updateCSSVariables()
  }, [])

  const updateCSSVariables = () => {
    const computedStyle = getComputedStyle(document.documentElement)
    const variables: Record<string, string> = {}
    
    // Get all relevant CSS custom properties
    const cssProps = [
      '--color-primary',
      '--color-secondary', 
      '--color-accent',
      '--color-neutral',
      '--color-base-100',
      '--color-base-200',
      '--color-base-300',
      '--color-base-content',
      '--color-info',
      '--color-success',
      '--color-warning',
      '--color-error'
    ]

    cssProps.forEach(prop => {
      variables[prop] = computedStyle.getPropertyValue(prop).trim() || 'NOT FOUND'
    })

    setCssVariables(variables)
  }

  const testTheme = (themeName: string) => {
    console.log(`🎨 Testing theme: ${themeName}`)
    document.documentElement.setAttribute("data-theme", themeName)
    setCurrentTheme(themeName)
    
    // Wait a bit for CSS to update
    setTimeout(() => {
      updateCSSVariables()
    }, 100)
  }

  const checkCSS = () => {
    // Check if daisyUI CSS is loaded
    const styleSheets = Array.from(document.styleSheets)
    const daisyUIFound = styleSheets.some(sheet => {
      try {
        const rules = Array.from(sheet.cssRules || [])
        return rules.some(rule => rule.cssText.includes('daisyui') || rule.cssText.includes('data-theme'))
      } catch (e) {
        return false
      }
    })

    console.log('🔍 daisyUI CSS found in stylesheets:', daisyUIFound)
    return daisyUIFound
  }

  return (
    <div className="min-h-screen p-8 bg-base-100">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-base-content mb-8">🔍 CSS Debug Panel</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Theme Testing */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Theme Testing</h2>
              <p className="mb-4">Current theme: <span className="font-mono bg-base-300 px-2 py-1 rounded">{currentTheme}</span></p>
              
                                    <div className="flex gap-2 flex-wrap mb-4">
                        <button onClick={() => testTheme("light")} className="btn btn-sm btn-primary">Light</button>
                        <button onClick={() => testTheme("dark")} className="btn btn-sm btn-secondary">Dark</button>
                        <button onClick={() => testTheme("nord")} className="btn btn-sm btn-accent">Nord</button>
                        <button onClick={() => testTheme("cupcake")} className="btn btn-sm btn-success">Cupcake 🧁</button>
                        <button onClick={() => testTheme("bumblebee")} className="btn btn-sm btn-warning">Bumblebee 🐝</button>
                        <button onClick={() => testTheme("retro")} className="btn btn-sm btn-info">Retro 🕹️</button>
                        <button onClick={() => testTheme("halloween")} className="btn btn-sm btn-error">Halloween 🎃</button>
                        <button onClick={() => testTheme("forest")} className="btn btn-sm btn-success">Forest 🌲</button>
                        <button onClick={() => testTheme("aqua")} className="btn btn-sm btn-info">Aqua 🌊</button>
                        <button onClick={() => testTheme("pastel")} className="btn btn-sm btn-primary">Pastel 🎨</button>
                        <button onClick={() => testTheme("dracula")} className="btn btn-sm btn-error">Dracula 🧛</button>
                        <button onClick={() => testTheme("night")} className="btn btn-sm btn-secondary">Night 🌙</button>
                        <button onClick={() => testTheme("dim")} className="btn btn-sm btn-neutral">Dim 🌫️</button>
                      </div>

              <div className="grid grid-cols-4 gap-2">
                <div className="text-center">
                  <div className="w-full h-16 bg-primary rounded mb-1"></div>
                  <span className="text-xs">primary</span>
                </div>
                <div className="text-center">
                  <div className="w-full h-16 bg-secondary rounded mb-1"></div>
                  <span className="text-xs">secondary</span>
                </div>
                <div className="text-center">
                  <div className="w-full h-16 bg-accent rounded mb-1"></div>
                  <span className="text-xs">accent</span>
                </div>
                <div className="text-center">
                  <div className="w-full h-16 bg-base-200 rounded mb-1"></div>
                  <span className="text-xs">base-200</span>
                </div>
              </div>
            </div>
          </div>

          {/* CSS Variables */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">CSS Variables</h2>
              <button onClick={updateCSSVariables} className="btn btn-sm btn-outline mb-4">Refresh Variables</button>
              
              <div className="space-y-2 text-sm max-h-96 overflow-y-auto">
                {Object.entries(cssVariables).map(([prop, value]) => (
                  <div key={prop} className="flex justify-between items-center">
                    <span className="font-mono text-xs">{prop}:</span>
                    <span className={`font-mono text-xs px-2 py-1 rounded ${value === 'NOT FOUND' ? 'bg-error text-error-content' : 'bg-base-300'}`}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* System Info */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">System Info</h2>
              <div className="space-y-2 text-sm">
                <div>
                  <strong>daisyUI CSS loaded:</strong>
                  <button onClick={checkCSS} className="btn btn-xs btn-outline ml-2">Check</button>
                </div>
                <div><strong>Tailwind CSS:</strong> {typeof window !== 'undefined' ? '✅ Available' : '❌ Not Available'}</div>
                <div><strong>Browser:</strong> {typeof navigator !== 'undefined' ? navigator.userAgent.split(' ').slice(-1)[0] : 'Unknown'}</div>
              </div>
            </div>
          </div>

          {/* Raw CSS Output */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Tailwind Config</h2>
                                    <div className="text-xs bg-base-300 p-4 rounded overflow-x-auto">
                        <pre>{`{
          plugins: [require("daisyui")],
          daisyui: {
            themes: ["light", "dark", "nord", "cupcake", "bumblebee", "retro", "halloween", "forest", "aqua", "pastel", "dracula", "night", "dim"],
            base: true,
            styled: true,
            utils: true,
            logs: false,
            darkTheme: "dark",
          }
        }`}</pre>
                      </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <a href="/theme-test" className="btn btn-outline mr-4">← Theme Test</a>
          <a href="/dashboard" className="btn btn-outline">← Dashboard</a>
        </div>
      </div>
    </div>
  )
} 