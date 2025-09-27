import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Product {
  id: string
  name: string
  description: string
  price: number
  currency: string
  category_id: string
  seller_id: string
  images: string[]
  stock_quantity: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Category {
  id: string
  name: string
  description: string
  image_url: string
  parent_id?: string
  created_at: string
}

export interface User {
  id: string
  email: string
  full_name: string
  phone?: string
  avatar_url?: string
  is_seller: boolean
  created_at: string
  updated_at: string
}

export interface Order {
  id: string
  buyer_id: string
  seller_id: string
  product_id: string
  quantity: number
  total_amount: number
  currency: string
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled'
  payment_status: 'pending' | 'paid' | 'failed' | 'refunded'
  payment_intent_id?: string
  shipping_address: Record<string, unknown>
  created_at: string
  updated_at: string
}

export interface Cart {
  id: string
  user_id: string
  product_id: string
  quantity: number
  created_at: string
}
