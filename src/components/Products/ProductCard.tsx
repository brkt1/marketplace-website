'use client'

import { useCart } from '@/contexts/CartContext'
import { Product } from '@/lib/supabase'
import { whatsappService } from '@/lib/whatsapp'
import {
  ChatBubbleLeftRightIcon,
  HeartIcon,
  ShareIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface ProductCardProps {
  product: Product
  onAddToCart?: (productId: string) => void
  onToggleFavorite?: (productId: string) => void
  isFavorite?: boolean
  sellerName?: string
  sellerPhone?: string
}

export function ProductCard({ 
  product, 
  onAddToCart, 
  onToggleFavorite, 
  isFavorite = false,
  sellerName,
  sellerPhone 
}: ProductCardProps) {
  const { t } = useTranslation()
  const { addToCart } = useCart()
  const [isLoading, setIsLoading] = useState(false)

  const handleWhatsAppContact = async () => {
    if (!sellerPhone) return
    
    setIsLoading(true)
    try {
      const productUrl = `${window.location.origin}/products/${product.id}`
      await whatsappService.sendProductInquiry(
        sellerPhone,
        product.name,
        sellerName || 'Seller',
        productUrl
      )
      // You might want to show a success message here
    } catch (error) {
      console.error('Failed to send WhatsApp message:', error)
      // You might want to show an error message here
    } finally {
      setIsLoading(false)
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: `${window.location.origin}/products/${product.id}`,
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${window.location.origin}/products/${product.id}`)
    }
  }

  return (
    <div className="bg-[var(--card-bg)] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-[var(--border-color)]">
      {/* Product Image */}
      <div className="relative aspect-square">
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.images[0] || '/placeholder-product.jpg'}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </Link>
        
        {/* Favorite Button */}
        <button
          onClick={() => onToggleFavorite?.(product.id)}
          className="absolute top-2 right-2 p-2 bg-[var(--card-bg)] rounded-full shadow-md hover:shadow-lg transition-shadow"
        >
          {isFavorite ? (
            <HeartSolidIcon className="h-5 w-5 text-red-500" />
          ) : (
            <HeartIcon className="h-5 w-5 text-gray-600" />
          )}
        </button>

        {/* Stock Badge */}
        {product.stock_quantity === 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
            {t('products.outOfStock')}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-[var(--foreground)] mb-2 line-clamp-2 hover:text-[var(--primary-green)] transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-[var(--text-muted)] text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xl font-bold text-[var(--foreground)]">
            {product.currency} {product.price.toFixed(2)}
          </span>
          {product.stock_quantity > 0 && (
            <span className="text-sm text-[var(--primary-green)]">
              {t('products.inStock')}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <button
            onClick={() => {
              addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.images[0] || '/placeholder-product.jpg',
                currency: product.currency
              })
              onAddToCart?.(product.id)
            }}
            disabled={product.stock_quantity === 0}
            className="flex-1 bg-[var(--primary-green)] text-[var(--background)] py-2 px-3 rounded-md hover:bg-[var(--secondary-green)] disabled:bg-[var(--text-muted)] disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-1"
          >
            <ShoppingCartIcon className="h-4 w-4" />
            <span className="text-sm">{t('products.addToCart')}</span>
          </button>

          {sellerPhone && (
            <button
              onClick={handleWhatsAppContact}
              disabled={isLoading}
              className="bg-[var(--accent-green)] text-[var(--background)] p-2 rounded-md hover:bg-[var(--secondary-green)] disabled:bg-[var(--text-muted)] transition-colors"
              title={t('messages.whatsappContact')}
            >
              <ChatBubbleLeftRightIcon className="h-4 w-4" />
            </button>
          )}

          <button
            onClick={handleShare}
            className="bg-[var(--hover-bg)] text-[var(--text-muted)] p-2 rounded-md hover:bg-[var(--border-color)] transition-colors"
            title={t('messages.shareProduct')}
          >
            <ShareIcon className="h-4 w-4" />
          </button>
        </div>

        {/* Seller Info */}
        {sellerName && (
          <div className="mt-3 pt-3 border-t border-[var(--border-color)]">
            <p className="text-sm text-[var(--text-muted)]">
              Sold by: <span className="font-medium text-[var(--foreground)]">{sellerName}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
