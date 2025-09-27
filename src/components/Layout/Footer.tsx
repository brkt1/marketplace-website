'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useCart } from '@/contexts/CartContext'
import {
  HomeIcon,
  PhoneIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  UserIcon
} from '@heroicons/react/24/outline'
import {
  HomeIcon as HomeIconSolid,
  PhoneIcon as PhoneIconSolid,
  QuestionMarkCircleIcon as QuestionMarkCircleIconSolid,
  ShoppingBagIcon as ShoppingBagIconSolid,
  ShoppingCartIcon as ShoppingCartIconSolid,
  UserIcon as UserIconSolid
} from '@heroicons/react/24/solid'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Footer() {
  const { user } = useAuth()
  const { getCartCount } = useCart()
  const pathname = usePathname()

  const mobileNavItems = [
    { 
      href: '/', 
      icon: HomeIcon, 
      iconSolid: HomeIconSolid, 
      label: 'Home' 
    },
    { 
      href: '/products', 
      icon: ShoppingBagIcon, 
      iconSolid: ShoppingBagIconSolid, 
      label: 'Products' 
    },
    { 
      href: '/cart', 
      icon: ShoppingCartIcon, 
      iconSolid: ShoppingCartIconSolid, 
      label: 'Cart',
      badge: getCartCount()
    },
    { 
      href: '/contact', 
      icon: PhoneIcon, 
      iconSolid: PhoneIconSolid, 
      label: 'Contact' 
    },
    { 
      href: '/faq', 
      icon: QuestionMarkCircleIcon, 
      iconSolid: QuestionMarkCircleIconSolid, 
      label: 'FAQ' 
    }
  ]

  // Add profile link if user is logged in
  const allMobileNavItems = user 
    ? [...mobileNavItems, { 
        href: '/profile', 
        icon: UserIcon, 
        iconSolid: UserIconSolid, 
        label: 'Profile' 
      }]
    : mobileNavItems

  // Separate cart from other nav items for central positioning
  const regularNavItems = allMobileNavItems.filter(item => item.href !== '/cart')
  const cartItem = allMobileNavItems.find(item => item.href === '/cart')

  return (
    <>
      {/* Floating Pill Mobile Navigation - Inspired by modern design */}
      <div className="fixed bottom-6 left-4 right-4 z-40 md:hidden">
        {/* Main floating pill container */}
        <div className="relative">
          {/* Floating pill background with soft shadows */}
          <div className="bg-[var(--card-bg)]/95 backdrop-blur-2xl rounded-full shadow-2xl border border-[var(--border-color)]/20">
            {/* Soft inner shadow for depth */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
            
            {/* Navigation content */}
            <div className="relative flex items-center justify-between px-6 py-4">
              {/* Left side navigation items */}
              <div className="flex items-center space-x-8">
                {regularNavItems.slice(0, 2).map((item) => {
                  const isActive = pathname === item.href
                  const IconComponent = isActive ? item.iconSolid : item.icon
                  
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 group"
                    >
                      <IconComponent 
                        className={`h-6 w-6 transition-all duration-300 ${
                          isActive 
                            ? 'text-[var(--primary-green)] scale-110' 
                            : 'text-[var(--text-muted)] group-hover:text-[var(--primary-green)] group-hover:scale-105'
                        }`} 
                      />
                      
                      {/* Active state indicator */}
                      {isActive && (
                        <div className="absolute inset-0 bg-[var(--primary-green)]/20 rounded-full animate-pulse"></div>
                      )}
                    </Link>
                  )
                })}
              </div>

              {/* Central Cart Button - Elevated and prominent */}
              <div className="relative">
                <Link
                  href="/cart"
                  className="relative flex items-center justify-center w-16 h-16 rounded-full shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    background: 'linear-gradient(135deg, var(--primary-green) 0%, var(--accent-green) 100%)',
                    boxShadow: '0 8px 32px rgba(0, 255, 0, 0.3), 0 4px 16px rgba(0, 255, 0, 0.2)'
                  }}
                >
                  {/* Cart icon */}
                  <ShoppingCartIcon className="h-7 w-7 text-white" />
                  
                  {/* Cart badge */}
                  {cartItem?.badge && cartItem.badge > 0 && (
                    <div className="absolute -top-1 -right-1 bg-white text-[var(--primary-green)] text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg animate-bounce">
                      {cartItem.badge > 99 ? '99+' : cartItem.badge}
                    </div>
                  )}
                  
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>

              {/* Right side navigation items */}
              <div className="flex items-center space-x-8">
                {regularNavItems.slice(2).map((item) => {
                  const isActive = pathname === item.href
                  const IconComponent = isActive ? item.iconSolid : item.icon
                  
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 group"
                    >
                      <IconComponent 
                        className={`h-6 w-6 transition-all duration-300 ${
                          isActive 
                            ? 'text-[var(--primary-green)] scale-110' 
                            : 'text-[var(--text-muted)] group-hover:text-[var(--primary-green)] group-hover:scale-105'
                        }`} 
                      />
                      
                      {/* Active state indicator */}
                      {isActive && (
                        <div className="absolute inset-0 bg-[var(--primary-green)]/20 rounded-full animate-pulse"></div>
                      )}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
          
          {/* Subtle bottom glow */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-gradient-to-t from-[var(--primary-green)]/20 to-transparent rounded-full blur-sm"></div>
        </div>
      </div>
    </>
  )
}
