'use client'

import { Footer } from './Footer'
import { Header } from './Header'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pb-16 md:pb-0">
        {children}
      </main>
      <Footer />
    </div>
  )
}
