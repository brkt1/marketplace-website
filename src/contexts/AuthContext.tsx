'use client'

import { AuthUser, authService } from '@/lib/auth'
import { supabase } from '@/lib/supabase'
import { User } from '@supabase/supabase-js'
import React, { createContext, useContext, useEffect, useState } from 'react'

interface AuthContextType {
  user: User | null
  profile: AuthUser | null
  loading: boolean
  signUp: (email: string, password: string, fullName: string, phone?: string) => Promise<{ data: unknown; error: unknown }>
  signIn: (email: string, password: string) => Promise<{ data: unknown; error: unknown }>
  signOut: () => Promise<{ error: unknown }>
  updateProfile: (updates: Partial<AuthUser>) => Promise<{ data: unknown; error: unknown }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user ?? null)
      
      if (session?.user) {
        const { data: profileData } = await authService.getUserProfile(session.user.id)
        setProfile(profileData)
      }
      
      setLoading(false)
    }

    getInitialSession()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null)
        
        if (session?.user) {
          const { data: profileData } = await authService.getUserProfile(session.user.id)
          setProfile(profileData)
        } else {
          setProfile(null)
        }
        
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const signUp = async (email: string, password: string, fullName: string, phone?: string) => {
    const result = await authService.signUp(email, password, fullName, phone)
    return result
  }

  const signIn = async (email: string, password: string) => {
    const result = await authService.signIn(email, password)
    return result
  }

  const signOut = async () => {
    const result = await authService.signOut()
    setUser(null)
    setProfile(null)
    return result
  }

  const updateProfile = async (updates: Partial<AuthUser>) => {
    if (!user) return { data: null, error: new Error('No user logged in') }
    
    const result = await authService.updateProfile(user.id, updates)
    if (result.data) {
      setProfile(result.data)
    }
    return result
  }

  const value = {
    user,
    profile,
    loading,
    signUp,
    signIn,
    signOut,
    updateProfile,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
