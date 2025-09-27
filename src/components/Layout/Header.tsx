'use client'

import { ThemeToggle } from '@/components/ThemeToggle'
import { useAuth } from '@/contexts/AuthContext'
import { useCart } from '@/contexts/CartContext'
import {
  GlobeAltIcon,
  HomeIcon,
  PhoneIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export function Header() {
  const { user, profile, signOut } = useAuth()
  const { getCartCount } = useCart()
  const { t, i18n } = useTranslation()
  const pathname = usePathname()
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
  ]

  const desktopNavItems = [
    { href: '/', label: 'Home', icon: HomeIcon },
    { href: '/products', label: 'Products', icon: ShoppingBagIcon },
    { href: '/contact', label: 'Contact', icon: PhoneIcon },
    { href: '/faq', label: 'FAQ', icon: QuestionMarkCircleIcon }
  ]

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode)
    setIsLanguageOpen(false)
  }

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-sm border-b border-[var(--border-color)]">
      <div className="px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Section - Logo */}
          <div className="flex items-center">
            <div className="w-3 h-3 bg-[var(--primary-green)] mr-2"></div>
            <span className="text-[var(--foreground)] text-xl font-bold">Marketplace</span>
          </div>

          {/* Center Section - Desktop Navigation (hidden on mobile) */}
          <nav className="hidden md:flex items-center space-x-8">
            {desktopNavItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 group ${
                    isActive
                      ? 'text-[var(--primary-green)] bg-[var(--primary-green)]/10'
                      : 'text-[var(--text-muted)] hover:text-[var(--primary-green)] hover:bg-[var(--hover-bg)]'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span className="font-medium">{item.label}</span>
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[var(--primary-green)] rounded-full"></div>
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right Section - Essential Actions */}
          <div className="flex items-center space-x-3">
            {/* Cart */}
            <Link href="/cart" className="relative text-[var(--foreground)] hover:text-[var(--primary-green)] transition-colors">
              <ShoppingCartIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-[var(--primary-green)] text-[var(--background)] text-xs rounded-full h-3 w-3 sm:h-4 sm:w-4 flex items-center justify-center font-bold">
                  {getCartCount()}
                </span>
              )}
            </Link>

            {/* User Menu */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-[var(--foreground)] hover:text-[var(--primary-green)] transition-colors"
                >
                  <div className="w-8 h-8 bg-[var(--primary-green)] rounded-full flex items-center justify-center">
                    <span className="text-[var(--background)] text-sm font-bold">
                      {profile?.full_name?.charAt(0) || user.email?.charAt(0) || 'U'}
                    </span>
                  </div>
                </button>

                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-[var(--card-bg)] backdrop-blur-md rounded-lg shadow-lg z-50 border border-[var(--border-color)]">
                    <div className="py-1">
                      <div className="px-4 py-2 text-sm text-[var(--primary-green)]/80 border-b border-[var(--border-color)]">
                        {profile?.full_name}
                      </div>
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-sm text-[var(--foreground)] hover:bg-[var(--hover-bg)] hover:text-[var(--primary-green)]"
                      >
                        Profile
                      </Link>
                      <Link
                        href="/orders"
                        className="block px-4 py-2 text-sm text-[var(--foreground)] hover:bg-[var(--hover-bg)] hover:text-[var(--primary-green)]"
                      >
                        Orders
                      </Link>
                      {profile?.is_seller && (
                        <Link
                          href="/seller/dashboard"
                          className="block px-4 py-2 text-sm text-[var(--foreground)] hover:bg-[var(--hover-bg)] hover:text-[var(--primary-green)]"
                        >
                          Seller Dashboard
                        </Link>
                      )}
                      <button
                        onClick={handleSignOut}
                        className="block w-full text-left px-4 py-2 text-sm text-[var(--foreground)] hover:bg-[var(--hover-bg)] hover:text-[var(--primary-green)]"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Link
                  href="/auth/login"
                  className="text-[var(--foreground)] hover:text-[var(--primary-green)] text-xs sm:text-sm transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="bg-[var(--primary-green)] text-[var(--background)] px-2 py-1 sm:px-4 sm:py-2 rounded text-xs sm:text-sm font-bold hover:bg-[var(--secondary-green)] transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center text-[var(--foreground)] hover:text-[var(--primary-green)] transition-colors"
              >
                <GlobeAltIcon className="h-3 w-3 sm:h-4 sm:w-4" />
              </button>
              
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-[var(--card-bg)] backdrop-blur-md rounded-lg shadow-lg z-50 border border-[var(--border-color)]">
                  <div className="py-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full text-left px-3 py-2 text-sm hover:bg-[var(--hover-bg)] hover:text-[var(--primary-green)] flex items-center space-x-2 ${
                          i18n.language === lang.code ? 'bg-[var(--hover-bg)] text-[var(--primary-green)]' : 'text-[var(--foreground)]'
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>


      </div>
    </header>
  )
}
