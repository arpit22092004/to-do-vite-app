"use client"

import { useState } from "react"
import { useTheme } from "../contexts/ThemeContext"
import "./ThemeSwitcher.css"

const ThemeSwitcher = () => {
  const { currentTheme, themes, changeTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const currentThemeData = themes.find((theme) => theme.id === currentTheme)

  return (
    <div className="theme-switcher">
      <button className="theme-button" onClick={() => setIsOpen(!isOpen)}>
        <span className="theme-icon">{currentThemeData?.icon}</span>
        <span className="theme-name">{currentThemeData?.name}</span>
        <span className={`dropdown-arrow ${isOpen ? "open" : ""}`}>▼</span>
      </button>

      {isOpen && (
        <div className="theme-dropdown">
          {themes.map((theme) => (
            <button
              key={theme.id}
              className={`theme-option ${theme.id === currentTheme ? "active" : ""}`}
              onClick={() => {
                changeTheme(theme.id)
                setIsOpen(false)
              }}
            >
              <span className="theme-icon">{theme.icon}</span>
              <span className="theme-name">{theme.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ThemeSwitcher
