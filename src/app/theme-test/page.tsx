"use client"

import { useEffect, useState } from "react"

export default function ThemeTestPage() {
  const [currentTheme, setCurrentTheme] = useState<string>("Loading...")

  useEffect(() => {
    // Update current theme display after hydration
    const updateThemeDisplay = () => {
      const theme = document.documentElement.getAttribute('data-theme') || 'null'
      setCurrentTheme(theme)
      
      // Also update the display element
      const displayElement = document.getElementById('current-theme-display')
      if (displayElement) {
        displayElement.textContent = theme
      }
    }

    updateThemeDisplay()
    
    // Set default theme if none is set
    if (!document.documentElement.getAttribute('data-theme')) {
      console.log("🎨 No theme set, setting default 'light'")
      document.documentElement.setAttribute('data-theme', 'light')
      updateThemeDisplay()
    }
  }, [])

  const testTheme = (themeName: string) => {
    console.log(`🎨 Testing theme: ${themeName}`)
    document.documentElement.setAttribute("data-theme", themeName)
    
    // Verify it was set
    const actualTheme = document.documentElement.getAttribute('data-theme')
    console.log(`🎨 Theme set to: ${actualTheme}`)
    
    setCurrentTheme(actualTheme || 'null')
    
    // Update display
    const displayElement = document.getElementById('current-theme-display')
    if (displayElement) {
      displayElement.textContent = actualTheme || 'null'
    }
  }

  return (
    <div className="min-h-screen p-8 bg-base-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-base-content mb-8">🎨 daisyUI Theme Test</h1>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-base-content mb-4">Quick Theme Test:</h2>
                            <div className="flex gap-4 flex-wrap">
                    <button onClick={() => testTheme("light")} className="btn btn-primary">Light</button>
                    <button onClick={() => testTheme("dark")} className="btn btn-secondary">Dark</button>
                    <button onClick={() => testTheme("nord")} className="btn btn-accent">Nord</button>
                    <button onClick={() => testTheme("cupcake")} className="btn btn-success">Cupcake 🧁</button>
                    <button onClick={() => testTheme("bumblebee")} className="btn btn-warning">Bumblebee 🐝</button>
                    <button onClick={() => testTheme("retro")} className="btn btn-info">Retro 🕹️</button>
                    <button onClick={() => testTheme("halloween")} className="btn btn-error">Halloween 🎃</button>
                    <button onClick={() => testTheme("forest")} className="btn btn-success">Forest 🌲</button>
                    <button onClick={() => testTheme("aqua")} className="btn btn-info">Aqua 🌊</button>
                    <button onClick={() => testTheme("pastel")} className="btn btn-primary">Pastel 🎨</button>
                    <button onClick={() => testTheme("dracula")} className="btn btn-error">Dracula 🧛</button>
                    <button onClick={() => testTheme("night")} className="btn btn-secondary">Night 🌙</button>
                    <button onClick={() => testTheme("dim")} className="btn btn-neutral">Dim 🌫️</button>
                  </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Color Swatches */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-base-content">Color Palette</h3>
              <div className="grid grid-cols-4 gap-2">
                <div className="text-center">
                  <div className="w-full h-12 bg-primary rounded mb-1"></div>
                  <span className="text-xs text-base-content">primary</span>
                </div>
                <div className="text-center">
                  <div className="w-full h-12 bg-secondary rounded mb-1"></div>
                  <span className="text-xs text-base-content">secondary</span>
                </div>
                <div className="text-center">
                  <div className="w-full h-12 bg-accent rounded mb-1"></div>
                  <span className="text-xs text-base-content">accent</span>
                </div>
                <div className="text-center">
                  <div className="w-full h-12 bg-neutral rounded mb-1"></div>
                  <span className="text-xs text-base-content">neutral</span>
                </div>
                <div className="text-center">
                  <div className="w-full h-12 bg-base-100 border border-base-content/20 rounded mb-1"></div>
                  <span className="text-xs text-base-content">base-100</span>
                </div>
                <div className="text-center">
                  <div className="w-full h-12 bg-base-200 rounded mb-1"></div>
                  <span className="text-xs text-base-content">base-200</span>
                </div>
                <div className="text-center">
                  <div className="w-full h-12 bg-base-300 rounded mb-1"></div>
                  <span className="text-xs text-base-content">base-300</span>
                </div>
                <div className="text-center">
                  <div className="w-full h-12 bg-info rounded mb-1"></div>
                  <span className="text-xs text-base-content">info</span>
                </div>
              </div>
            </div>
          </div>

          {/* Components */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-base-content">Components</h3>
              <div className="space-y-3">
                <button className="btn btn-primary w-full">Primary Button</button>
                <button className="btn btn-secondary w-full">Secondary Button</button>
                <button className="btn btn-accent w-full">Accent Button</button>
                <input type="text" placeholder="Input field" className="input input-bordered w-full" />
                <div className="alert alert-info">
                  <span>Info alert message</span>
                </div>
              </div>
            </div>
          </div>

          {/* Debug Info */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-base-content">Debug Info</h3>
              <div className="space-y-2 text-sm text-base-content">
                                 <div>
                   <strong>Current data-theme:</strong><br />
                   <code className="bg-base-300 px-2 py-1 rounded text-xs" id="current-theme-display">
                     Loading...
                   </code>
                 </div>
                                        <div>
                          <strong>Available themes in config:</strong><br />
                          <code className="bg-base-300 px-2 py-1 rounded text-xs">
                            ["light", "dark", "nord", "cupcake", "bumblebee", "retro", "halloween", "forest", "aqua", "pastel", "dracula", "night", "dim"]
                          </code>
                        </div>
                <div>
                  <strong>daisyUI version:</strong><br />
                  <code className="bg-base-300 px-2 py-1 rounded text-xs">5.0.46</code>
                </div>
              </div>
            </div>
          </div>
        </div>

                        <div className="mt-8 p-6 bg-base-200 rounded-lg">
                  <h3 className="text-xl font-semibold text-base-content mb-4">Expected Behavior:</h3>
                  <ul className="list-disc list-inside space-y-2 text-base-content">
                    <li><strong>Light:</strong> White/light background, dark text</li>
                    <li><strong>Dark:</strong> Dark background, light text</li>
                    <li><strong>Nord:</strong> Blue/cool colors (primary should be blue)</li>
                    <li><strong>Cupcake:</strong> Pink/purple colors (sweet pastels) 🧁</li>
                    <li><strong>Bumblebee:</strong> Yellow/black colors (bee-like) 🐝</li>
                    <li><strong>Retro:</strong> Orange/brown vintage colors (old computer) 🕹️</li>
                    <li><strong>Halloween:</strong> Orange/purple spooky colors (dark magic) 🎃👻</li>
                    <li><strong>Forest:</strong> Green/nature colors (deep woods) 🌲🌿</li>
                    <li><strong>Aqua:</strong> Cyan/blue ocean colors (underwater) 🌊💙</li>
                    <li><strong>Pastel:</strong> Soft light colors (dreamy pastels) 🎨💖</li>
                    <li><strong>Dracula:</strong> Pink/purple vampire colors (gothic dark) 🧛🩸</li>
                    <li><strong>Night:</strong> Deep midnight colors with starlight accents 🌙✨</li>
                    <li><strong>Dim:</strong> Muted dark colors with soft glowing accents 🌫️⚫</li>
                  </ul>
                </div>

        <div className="mt-6">
          <a href="/dashboard" className="btn btn-outline">← Back to Dashboard</a>
        </div>
      </div>
    </div>
  )
} 