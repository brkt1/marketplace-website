'use client'

import { Layout } from '@/components/Layout/Layout'
import { useCart } from '@/contexts/CartContext'
import Link from 'next/link'
import { useState } from 'react'

interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  image: string
  category: string
  inStock: boolean
  badge?: string
  features?: string[]
  specifications?: { [key: string]: string }
}

export default function ProductDetail({ params }: { params: { id: string } }) {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  // Sample product data - in a real app, this would come from an API
  const products: Product[] = [
    { 
      id: '1', 
      name: 'Gaming Headset Pro', 
      description: 'Premium wireless gaming headset with 7.1 surround sound, noise cancellation, and RGB lighting. Perfect for competitive gaming and immersive audio experiences.', 
      price: 129.99, 
      originalPrice: 179.99, 
      rating: 4.8, 
      reviews: 1247, 
      image: '🎧', 
      category: 'gaming', 
      inStock: true, 
      badge: undefined,
      features: [
        '7.1 Surround Sound',
        'Active Noise Cancellation',
        'RGB Lighting',
        'Wireless Connectivity',
        '30-hour Battery Life',
        'Comfortable Memory Foam'
      ],
      specifications: {
        'Driver Size': '50mm',
        'Frequency Response': '20Hz - 20kHz',
        'Impedance': '32 Ohms',
        'Battery Life': '30 hours',
        'Connectivity': 'Wireless 2.4GHz + Bluetooth',
        'Weight': '320g'
      }
    },
    { 
      id: '2', 
      name: 'Wireless Mechanical Keyboard', 
      description: 'RGB mechanical keyboard with customizable switches, per-key lighting, and wireless connectivity. Built for gamers and professionals.', 
      price: 99.99, 
      rating: 4.7, 
      reviews: 892, 
      image: '⌨️', 
      category: 'electronics', 
      inStock: true, 
      badge: undefined,
      features: [
        'Mechanical Switches',
        'RGB Per-Key Lighting',
        'Wireless & Wired Modes',
        'Programmable Keys',
        'Durable Construction',
        'Gaming Mode'
      ],
      specifications: {
        'Switch Type': 'Mechanical',
        'Layout': 'Full Size',
        'Backlighting': 'RGB',
        'Connectivity': 'Wireless + USB-C',
        'Battery Life': '40 hours',
        'Weight': '1.2kg'
      }
    },
    { 
      id: 'blvck-tumbler-pro', 
      name: 'Blvck Tumbler Pro Series', 
      description: 'Experience the ultimate in premium design with our signature Blvck Tumbler Pro Series. Crafted with precision and built for the modern lifestyle.', 
      price: 89, 
      originalPrice: 129, 
      rating: 4.9, 
      reviews: 1247, 
      image: 'https://img.freepik.com/free-vector/black-wavy-abstract-pattern_1409-10054.jpg?semt=ais_hybrid&w=740&q=80', 
      category: 'lifestyle', 
      inStock: true, 
      badge: undefined,
      features: [
        'Premium Black Design',
        'Insulated Construction',
        'Leak-Proof Lid',
        'Dishwasher Safe',
        'BPA Free',
        'Lifetime Warranty'
      ],
      specifications: {
        'Capacity': '20oz',
        'Material': 'Stainless Steel',
        'Insulation': 'Double Wall',
        'Lid Type': 'Leak-Proof',
        'Weight': '400g',
        'Dimensions': '8" x 3"'
      }
    }
  ]

  const product = products.find(p => p.id === params.id) || products[0]
  const relatedProducts = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 3)

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="py-3 bg-[var(--card-bg)] border-b border-[var(--border-color)]">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-[var(--text-muted)] hover:text-[var(--primary-green)] transition-colors">Home</Link>
            <span className="text-[var(--text-muted)]">/</span>
            <Link href="/products" className="text-[var(--text-muted)] hover:text-[var(--primary-green)] transition-colors">Products</Link>
            <span className="text-[var(--text-muted)]">/</span>
            <span className="text-[var(--foreground)]">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-8 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            {/* Product Image */}
            <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg p-4">
              <div className="relative aspect-square bg-[var(--background)] border border-[var(--border-color)] rounded-lg overflow-hidden">
                {product.image.startsWith('http') ? (
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-6xl">{product.image}</div>
                  </div>
                )}
                
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-3 left-3">
                    <span className="bg-[var(--primary-green)] text-[var(--background)] px-2 py-1 rounded text-xs font-bold">
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>
            </div>
                
            {/* Product Info */}
            <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg p-4 space-y-4">
              <div>
                <h1 className="text-2xl font-bold text-[var(--foreground)] mb-3 opacity-95">
                  {product.name}
                </h1>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed opacity-85">
                  {product.description}
                </p>
              </div>
              
              {/* Price */}
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-[var(--primary-green)]">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-[var(--text-muted)] line-through opacity-80">
                    ${product.originalPrice}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </span>
                )}
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-[var(--foreground)] font-medium text-sm">Quantity:</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 bg-[var(--hover-bg)] border border-[var(--border-color)] rounded flex items-center justify-center text-[var(--foreground)] hover:bg-[var(--border-color)] transition-colors text-sm"
                    >
                      -
                    </button>
                    <span className="text-[var(--foreground)] font-bold w-8 text-center text-sm">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 bg-[var(--hover-bg)] border border-[var(--border-color)] rounded flex items-center justify-center text-[var(--foreground)] hover:bg-[var(--border-color)] transition-colors text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => {
                      for (let i = 0; i < quantity; i++) {
                        addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                          currency: '$'
                        })
                      }
                    }}
                    disabled={!product.inStock}
                    className={`w-full py-3 px-4 rounded-lg font-bold text-sm transition-colors duration-200 ${
                      product.inStock
                        ? 'bg-[var(--primary-green)] text-[var(--background)] hover:bg-[var(--secondary-green)]'
                        : 'bg-[var(--text-muted)] text-[var(--foreground)] cursor-not-allowed'
                    }`}
                  >
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                  <button className="w-full border border-[var(--border-color)] text-[var(--foreground)] py-3 px-4 rounded-lg font-bold text-sm hover:bg-[var(--hover-bg)] transition-colors duration-200">
                    Buy Now
                  </button>
                </div>
              </div>

              {/* Features */}
              {product.features && (
                <div>
                  <h3 className="text-lg font-bold text-[var(--foreground)] mb-3 opacity-95">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-[var(--text-muted)] text-sm">
                        <span className="text-[var(--primary-green)]">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      {product.specifications && (
        <section className="py-8 bg-[var(--card-bg)]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-6 opacity-95">Specifications</h2>
            <div className="bg-[var(--background)] border border-[var(--border-color)] rounded-lg p-4">
              <div className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-2 border-b border-[var(--border-color)] last:border-b-0">
                    <span className="text-[var(--text-muted)] font-medium text-sm">{key}</span>
                    <span className="text-[var(--foreground)] text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-8 bg-[var(--background)]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-6 opacity-95">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg overflow-hidden">
                  <Link href={`/products/${relatedProduct.id}`}>
                    <div className="relative h-32 bg-[var(--background)] border-b border-[var(--border-color)] flex items-center justify-center">
                      {relatedProduct.image.startsWith('http') ? (
                        <img 
                          src={relatedProduct.image} 
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-3xl">
                          {relatedProduct.image}
                        </div>
                      )}
                    </div>
                  </Link>
                  
                  <div className="p-4">
                    <Link href={`/products/${relatedProduct.id}`}>
                      <h3 className="text-[var(--foreground)] font-bold text-sm mb-2 hover:text-[var(--primary-green)] transition-colors cursor-pointer">
                        {relatedProduct.name}
                      </h3>
                    </Link>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[var(--primary-green)] font-bold text-sm">${relatedProduct.price}</span>
                      {relatedProduct.originalPrice && (
                        <span className="text-[var(--text-muted)] line-through text-xs">${relatedProduct.originalPrice}</span>
                      )}
                    </div>
                    
                    <button
                      onClick={() => addToCart({
                        id: relatedProduct.id,
                        name: relatedProduct.name,
                        price: relatedProduct.price,
                        image: relatedProduct.image,
                        currency: '$'
                      })}
                      className="w-full bg-[var(--primary-green)] text-[var(--background)] py-2 rounded text-sm font-bold hover:bg-[var(--secondary-green)] transition-colors duration-200"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  )
}