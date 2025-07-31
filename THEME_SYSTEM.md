# daisyUI Theme-System

## Übersicht

Das Trading Journal verfügt jetzt über ein vollständiges Theme-System mit daisyUI, das 22 verschiedene Themes unterstützt, organisiert in Light-, Dark- und Special-Themes.

## Verfügbare Themes

### Light Themes (9)
- `light` - Standard Light Theme
- `cupcake` - Süße Pastellfarben  
- `valentine` - Romantische Rosa/Rot Töne
- `garden` - Natürliche Grüntöne
- `aqua` - Erfrischende Blautöne
- `pastel` - Weiche Pastellfarben
- `wireframe` - Minimalistisch schwarz/weiß
- `retro` - Vintage-inspiriert
- `winter` - Kühle, winterliche Farben

### Dark Themes (12)
- `dark` - Standard Dark Theme
- `cyberpunk` - Neon-Grün und Pink
- `synthwave` - 80er Jahre Neon-Stil
- `halloween` - Orange und Lila
- `forest` - Dunkle Grüntöne
- `black` - Minimalistisch schwarz
- `luxury` - Elegante goldene Akzente
- `dracula` - Vampir-inspiriert
- `night` - Tiefblaue Nachttöne
- `coffee` - Warme Brauntöne
- `dim` - Gedämpfte dunkle Farben
- `sunset` - Warme Orange/Rosa Töne

### Special Themes (1)
- `nord` - Ursprüngliches Theme mit arktischen Farben

## Komponenten

### ThemeProvider
Verwaltet den globalen Theme-Zustand und Local Storage Persistierung.

```tsx
import { ThemeProvider } from '@/components/theme'

<ThemeProvider defaultTheme="nord">
  <App />
</ThemeProvider>
```

### ThemePicker
Vollständiger Theme-Selector mit kategorisierter Dropdown-Liste.

```tsx
import { ThemePicker } from '@/components/theme'

<ThemePicker />
```

### ThemePickerCompact
Kompakte Version für Header-Integration ohne eigenen Dropdown-Wrapper.

```tsx
import { ThemePickerCompact } from '@/components/theme'

<ThemePickerCompact />
```

### ThemeToggle
Einfacher Light/Dark Toggle mit animierten Icons.

```tsx
import { ThemeToggle } from '@/components/theme'

<ThemeToggle />
```

### useTheme Hook
Zugriff auf Theme-Zustand und -Funktionen.

```tsx
import { useTheme } from '@/components/theme'

function MyComponent() {
  const { theme, setTheme, isLight, isDark } = useTheme()
  
  return (
    <div>
      Aktuelles Theme: {theme}
      {isLight && <span>Light Mode aktiv</span>}
      {isDark && <span>Dark Mode aktiv</span>}
    </div>
  )
}
```

## Features

- ✅ **22 vorkonfigurierte Themes**
- ✅ **Local Storage Persistierung** - Theme wird beim Neuladen beibehalten
- ✅ **Hydration-sicher** - Kein Theme-Flackern beim Laden
- ✅ **TypeScript-Support** - Vollständig typisiert
- ✅ **Kategorisierte Organization** - Light/Dark/Special Themes
- ✅ **Responsive Design** - Funktioniert auf allen Bildschirmgrößen
- ✅ **Accessibility** - Screen Reader kompatibel

## Integration

Das Theme-System ist in den Header der Anwendung integriert. Benutzer können:

1. **Vollständige Theme-Auswahl** über das Palette-Icon im Header (neben dem User-Menu)
2. **Schnelle Light/Dark-Umschaltung** über den Theme-Toggle (optional, in anderen Komponenten)
3. **Automatische Persistierung** - Gewähltes Theme bleibt beim nächsten Besuch erhalten
4. **Bessere UX** - Theme-Picker ist jetzt an einem prominenteren und zugänglicheren Ort

## Technische Details

- **Framework**: Next.js 15 mit React 18
- **UI Library**: daisyUI 5.x
- **Storage**: Local Storage für Theme-Persistierung
- **SSR-Safe**: Verhindert hydration mismatches
- **Performance**: Optimiert für schnelle Theme-Wechsel

## Anpassung

Neue Themes können in `tailwind.config.ts` hinzugefügt werden:

```typescript
daisyui: {
  themes: [
    // ... bestehende themes
    "neues-theme",
  ],
}
```

Anschließend die Theme-Provider Typen in `theme-provider.tsx` erweitern. 