'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    setMounted(true)
    
    // Get current theme from document or localStorage
    const currentTheme = document.documentElement.classList.contains('light') ? 'light' : 'dark'
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark'
    
    if (savedTheme && savedTheme !== currentTheme) {
      // Apply saved theme if different from current
      setTheme(savedTheme)
      const root = document.documentElement
      root.classList.remove('light', 'dark')
      root.classList.add(savedTheme)
    } else if (!savedTheme) {
      // Check system preference if no saved theme
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const initialTheme = prefersDark ? 'dark' : 'light'
      setTheme(initialTheme)
      // Apply system preference
      const root = document.documentElement
      root.classList.remove('light', 'dark')
      root.classList.add(initialTheme)
      localStorage.setItem('theme', initialTheme)
    } else {
      // Use current theme
      setTheme(currentTheme)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    
    // Apply theme to document
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        className="relative p-2 text-[var(--foreground)] hover:text-[var(--primary-green)] transition-colors duration-200"
        aria-label="Theme toggle"
      >
        <div className="relative w-5 h-5">
          <SunIcon className="absolute inset-0 w-5 h-5 opacity-0" />
          <MoonIcon className="absolute inset-0 w-5 h-5 opacity-100" />
        </div>
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 text-[var(--foreground)] hover:text-[var(--primary-green)] transition-colors duration-200"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-5 h-5">
        <SunIcon 
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            theme === 'light' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-90 scale-75'
          }`}
        />
        <MoonIcon 
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            theme === 'dark' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-90 scale-75'
          }`}
        />
      </div>
    </button>
  )
}
