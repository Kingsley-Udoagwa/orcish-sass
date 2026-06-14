import type { ReactNode } from 'react'
import { useEffect } from 'react'

type ThemeProviderProps = {
  children: ReactNode
  defaultTheme?: 'light' | 'dark' | 'auto'
  storageKey?: string
}

export function ThemeProvider({
  children,
  defaultTheme = 'dark',
  storageKey = 'theme',
}: ThemeProviderProps) {
  useEffect(() => {
    const root = document.documentElement
    const stored = window.localStorage.getItem(storageKey)
    const theme = stored === 'light' || stored === 'dark' || stored === 'auto' ? stored : defaultTheme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const resolved = theme === 'auto' ? (prefersDark ? 'dark' : 'light') : theme

    root.classList.remove('light', 'dark')
    root.classList.add(resolved)
    root.style.colorScheme = resolved

    if (theme === 'auto') {
      root.removeAttribute('data-theme')
    } else {
      root.setAttribute('data-theme', theme)
    }
  }, [defaultTheme, storageKey])

  return <>{children}</>
}
