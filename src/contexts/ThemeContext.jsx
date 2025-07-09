"use client"

import { createContext, useContext } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useLocalStorage("theme", "aurora")

  const themes = [
    { id: "aurora", name: "Aurora", icon: "🌌" },
    { id: "ocean", name: "Ocean", icon: "🌊" },
    { id: "batman", name: "Batman", icon: "🦇" },
  ]

  const changeTheme = (themeId) => {
    setCurrentTheme(themeId)
    // Apply theme CSS variables
    document.documentElement.setAttribute("data-theme", themeId)
  }

  const value = {
    currentTheme,
    themes,
    changeTheme,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
