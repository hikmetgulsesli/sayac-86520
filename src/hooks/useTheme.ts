import { useState, useEffect, useCallback } from "react"
import type { ThemeMode } from "../types"

const THEME_KEY = "sayac_theme"

function getInitialTheme(): ThemeMode {
  const stored = localStorage.getItem(THEME_KEY)
  if (stored === "light" || stored === "dark") {
    return stored
  }
  return "dark"
}

export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }, [])

  return {
    theme,
    isDark: theme === "dark",
    toggleTheme,
  }
}
