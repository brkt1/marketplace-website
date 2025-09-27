'use client'

import { Layout } from '@/components/Layout/Layout'
import { useCart } from '@/contexts/CartContext'
import Link from 'next/link'
import { useMemo, useState } from 'react'

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('newest')
  const [searchQuery, setSearchQuery] = useState('')
  const { addToCart } = useCart()

  const categories = [
    { id: 'all', name: 'All Products', icon: '🛍️' },
    { id: 'accessories', name: 'Tumblers', icon: '🥤' },
    { id: 'premium', name: 'Premium', icon: '⭐' },
    { id: 'limited', name: 'Limited Edition', icon: '🔥' },
    { id: 'sale', name: 'On Sale', icon: '💰' }
  ]

  const products = [
    {
      id: 1,
      name: 'Blvck Tumbler Classic',
      category: 'accessories',
      price: 49.99,
      originalPrice: 69.99,
      rating: 4.8,
      reviews: 124,
      image: 'https://img.freepik.com/free-vector/black-wavy-abstract-pattern_1409-10054.jpg?semt=ais_hybrid&w=740&q=80',
      badge: 'New',
      inStock: true
    },
    {
      id: 2,
      name: 'Blvck Tumbler Travel',
      category: 'accessories',
      price: 59.99,
      originalPrice: 79.99,
      rating: 4.9,
      reviews: 89,
      image: 'https://img.freepik.com/free-vector/black-wavy-abstract-pattern_1409-10054.jpg?semt=ais_hybrid&w=740&q=80',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 3,
      name: 'Blvck Tumbler Elite',
      category: 'accessories',
      price: 99.99,
      originalPrice: null,
      rating: 4.7,
      reviews: 67,
      image: 'https://img.freepik.com/free-vector/black-wavy-abstract-pattern_1409-10054.jpg?semt=ais_hybrid&w=740&q=80',
      badge: 'Premium',
      inStock: true
    },
    {
      id: 4,
      name: 'Blvck Tumbler Pro',
      category: 'accessories',
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.6,
      reviews: 45,
      image: 'https://img.freepik.com/free-vector/black-wavy-abstract-pattern_1409-10054.jpg?semt=ais_hybrid&w=740&q=80',
      badge: null,
      inStock: true
    },
    {
      id: 5,
      name: 'Blvck Tumbler Sport',
      category: 'accessories',
      price: 69.99,
      originalPrice: 89.99,
      rating: 4.9,
      reviews: 156,
      image: 'https://img.freepik.com/free-vector/black-wavy-abstract-pattern_1409-10054.jpg?semt=ais_hybrid&w=740&q=80',
      badge: 'Popular',
      inStock: true
    },
    {
      id: 6,
      name: 'Blvck Tumbler Mini',
      category: 'accessories',
      price: 39.99,
      originalPrice: 49.99,
      rating: 4.5,
      reviews: 234,
      image: 'https://img.freepik.com/free-vector/black-wavy-abstract-pattern_1409-10054.jpg?semt=ais_hybrid&w=740&q=80',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 7,
      name: 'Blvck Tumbler Max',
      category: 'accessories',
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.7,
      reviews: 98,
      image: 'https://img.freepik.com/free-vector/black-wavy-abstract-pattern_1409-10054.jpg?semt=ais_hybrid&w=740&q=80',
      badge: 'New',
      inStock: true
    },
    {
      id: 8,
      name: 'Blvck Tumbler Limited',
      category: 'accessories',
      price: 149.99,
      originalPrice: null,
      rating: 4.8,
      reviews: 203,
      image: 'https://img.freepik.com/free-vector/black-wavy-abstract-pattern_1409-10054.jpg?semt=ais_hybrid&w=740&q=80',
      badge: 'Limited',
      inStock: true
    },
    {
      id: 9,
      name: 'Blvck Tumbler Signature',
      category: 'accessories',
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.9,
      reviews: 87,
      image: 'https://img.freepik.com/free-vector/black-wavy-abstract-pattern_1409-10054.jpg?semt=ais_hybrid&w=740&q=80',
      badge: 'Premium',
      inStock: true
    },
    {
      id: 10,
      name: 'Blvck Tumbler Essential',
      category: 'accessories',
      price: 34.99,
      originalPrice: 44.99,
      rating: 4.6,
      reviews: 156,
      image: 'https://img.freepik.com/free-vector/black-wavy-abstract-pattern_1409-10054.jpg?semt=ais_hybrid&w=740&q=80',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 11,
      name: 'Blvck Tumbler Deluxe',
      category: 'accessories',
      price: 119.99,
      originalPrice: 149.99,
      rating: 4.4,
      reviews: 312,
      image: 'https://img.freepik.com/free-vector/black-wavy-abstract-pattern_1409-10054.jpg?semt=ais_hybrid&w=740&q=80',
      badge: null,
      inStock: true
    },
    {
      id: 12,
      name: 'Blvck Tumbler Ultimate',
      category: 'accessories',
      price: 179.99,
      originalPrice: 219.99,
      rating: 4.8,
      reviews: 45,
      image: 'https://img.freepik.com/free-vector/black-wavy-abstract-pattern_1409-10054.jpg?semt=ais_hybrid&w=740&q=80',
      badge: 'Hot',
      inStock: true
    }
  ]

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = products.filter(product => {
      // Category filter
      const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory
      
      // Search filter
      const searchMatch = searchQuery === '' || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      
      return categoryMatch && searchMatch
    })

    // Sort products
    switch (sortBy) {
      case 'price-low':
        return filtered.sort((a, b) => a.price - b.price)
      case 'price-high':
        return filtered.sort((a, b) => b.price - a.price)
      case 'popular':
        return filtered.sort((a, b) => b.reviews - a.reviews)
      case 'newest':
      default:
        return filtered.sort((a, b) => b.id - a.id)
    }
  }, [products, selectedCategory, searchQuery, sortBy])

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 sm:pb-16 bg-gradient-to-br from-[var(--background)] via-[var(--background)] to-[var(--background)] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Enhanced Line Design Patterns */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Diagonal Line Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,255,0,0.08)_1px,transparent_1px),linear-gradient(-45deg,rgba(0,255,0,0.08)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        
        {/* Vertical Accent Lines */}
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--primary-green)]/40 to-transparent"></div>
        <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--primary-green)]/40 to-transparent"></div>
        
        {/* Horizontal Accent Lines */}
        <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--primary-green)]/40 to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--primary-green)]/40 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight">
                <span className="text-[var(--foreground)]">
                  Premium
                </span>
                <br />
                <span className="bg-gradient-to-r from-[var(--primary-green)] to-[var(--accent-green)] bg-clip-text text-transparent">
                  Products
                </span>
              </h1>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-[var(--foreground)] text-xl font-semibold tracking-wide opacity-90">Discover Excellence.</h2>
              <p className="text-[var(--text-muted)] text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto opacity-80">
                Explore our curated collection of premium Blvck Tumblers designed for excellence and performance. 
                Each item is crafted with precision and built to exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="pb-4 sm:pb-6 bg-[var(--background)] border-b border-[var(--border-color)] relative overflow-hidden">
        {/* Background Line Design */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(-45deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        {/* Decorative Lines */}
        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[var(--primary-green)]/30 to-transparent"></div>
        <div className="absolute bottom-0 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-[var(--primary-green)]/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 relative z-10">
          <div className="flex flex-col gap-3 sm:gap-4">
            
            {/* Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-[var(--text-muted)] text-sm">🔍</span>
              </div>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-4 py-2 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--primary-green)] hover:border-[var(--primary-green)]/50 transition-all duration-300 text-sm"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-2 sm:px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 border hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-[var(--primary-green)] text-[var(--background)] border-[var(--primary-green)] shadow-lg shadow-[var(--primary-green)]/25'
                      : 'bg-[var(--hover-bg)] text-[var(--foreground)] hover:bg-[var(--primary-green)]/20 hover:border-[var(--primary-green)]/30 border-[var(--border-color)]'
                  }`}
                >
                  <span className="mr-1">{category.icon}</span>
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <span className="text-[var(--foreground)] text-xs opacity-90">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg px-2 py-1.5 text-[var(--foreground)] text-xs focus:outline-none focus:border-[var(--primary-green)] hover:border-[var(--primary-green)]/50 transition-colors"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-12 sm:pb-16 md:pb-20 bg-[var(--background)] relative overflow-hidden">
        {/* Background Line Design */}
        <div className="absolute inset-0 bg-[linear-gradient(30deg,rgba(0,255,0,0.02)_1px,transparent_1px),linear-gradient(-30deg,rgba(0,255,0,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        
        {/* Decorative Lines */}
        <div className="absolute top-0 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-[var(--primary-green)]/25 to-transparent"></div>
        <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[var(--primary-green)]/25 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-3 sm:px-4 relative z-10">
          {filteredAndSortedProducts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">No products found</h3>
              <p className="text-[var(--text-muted)] mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                }}
                className="px-6 py-3 bg-[var(--primary-green)] text-[var(--background)] rounded-lg font-bold hover:bg-[var(--secondary-green)] transition-all duration-300 shadow-lg shadow-[var(--primary-green)]/30 hover:scale-105"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {filteredAndSortedProducts.map((product, index) => {
              const cardColors = [
                'bg-gradient-to-br from-[var(--card-bg)] to-[var(--card-bg)] border-[var(--border-color)] hover:border-[var(--primary-green)]/50 hover:shadow-[var(--primary-green)]/10',
                'bg-gradient-to-br from-[var(--card-bg)] to-[var(--card-bg)] border-[var(--border-color)] hover:border-[var(--primary-green)]/50 hover:shadow-[var(--primary-green)]/10',
                'bg-gradient-to-br from-[var(--card-bg)] to-[var(--card-bg)] border-[var(--border-color)] hover:border-[var(--primary-green)]/50 hover:shadow-[var(--primary-green)]/10',
                'bg-gradient-to-br from-[var(--card-bg)] to-[var(--card-bg)] border-[var(--border-color)] hover:border-[var(--primary-green)]/50 hover:shadow-[var(--primary-green)]/10',
                'bg-gradient-to-br from-[var(--card-bg)] to-[var(--card-bg)] border-[var(--border-color)] hover:border-[var(--primary-green)]/50 hover:shadow-[var(--primary-green)]/10',
                'bg-gradient-to-br from-[var(--card-bg)] to-[var(--card-bg)] border-[var(--border-color)] hover:border-[var(--primary-green)]/50 hover:shadow-[var(--primary-green)]/10'
              ]
              const buttonColors = [
                'bg-gradient-to-r from-[var(--hover-bg)] to-[var(--border-color)] hover:from-[var(--primary-green)] hover:to-[var(--secondary-green)] shadow-[var(--primary-green)]/25 hover:shadow-[var(--primary-green)]/40',
                'bg-gradient-to-r from-[var(--hover-bg)] to-[var(--border-color)] hover:from-[var(--primary-green)] hover:to-[var(--secondary-green)] shadow-[var(--primary-green)]/25 hover:shadow-[var(--primary-green)]/40',
                'bg-gradient-to-r from-[var(--hover-bg)] to-[var(--border-color)] hover:from-[var(--primary-green)] hover:to-[var(--secondary-green)] shadow-[var(--primary-green)]/25 hover:shadow-[var(--primary-green)]/40',
                'bg-gradient-to-r from-[var(--hover-bg)] to-[var(--border-color)] hover:from-[var(--primary-green)] hover:to-[var(--secondary-green)] shadow-[var(--primary-green)]/25 hover:shadow-[var(--primary-green)]/40',
                'bg-gradient-to-r from-[var(--hover-bg)] to-[var(--border-color)] hover:from-[var(--primary-green)] hover:to-[var(--secondary-green)] shadow-[var(--primary-green)]/25 hover:shadow-[var(--primary-green)]/40',
                'bg-gradient-to-r from-[var(--hover-bg)] to-[var(--border-color)] hover:from-[var(--primary-green)] hover:to-[var(--secondary-green)] shadow-[var(--primary-green)]/25 hover:shadow-[var(--primary-green)]/40'
              ]
              
              return (
              <div key={product.id} className={`group relative bg-[var(--card-bg)] backdrop-blur-sm border border-[var(--border-color)] rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-[var(--primary-green)]/50`}>
                {/* Product Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Link href={`/products/${product.id}`}>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </Link>
                  
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-2 left-2">
                      <span className={`px-2 py-1 rounded-lg text-xs font-bold shadow-lg bg-[var(--primary-green)] text-[var(--background)] border border-[var(--primary-green)]/20`}>
                        {product.badge}
                      </span>
                    </div>
                  )}
                  
                  {/* Price Overlay */}
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="bg-[var(--card-bg)]/95 backdrop-blur-sm border border-[var(--border-color)]/30 rounded-lg p-2 shadow-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-black text-[var(--primary-green)]">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-[var(--text-muted)] line-through text-sm opacity-70">${product.originalPrice}</span>
                          )}
                        </div>
                        <button 
                          onClick={() => addToCart({
                            id: product.id.toString(),
                            name: product.name,
                            price: product.price,
                            image: product.image,
                            currency: '$'
                          })}
                          disabled={!product.inStock}
                          className={`w-8 h-8 bg-[var(--primary-green)] hover:bg-[var(--secondary-green)] rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 disabled:bg-[var(--text-muted)] disabled:cursor-not-allowed border border-[var(--primary-green)]/20`}
                        >
                          <span className="text-[var(--background)] text-sm font-bold">+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stock Status */}
                  {!product.inStock && (
                    <div className="absolute top-2 right-2">
                      <span className="px-2 py-1 rounded-lg text-xs font-bold bg-[var(--text-muted)]/90 backdrop-blur-sm text-[var(--foreground)] shadow-lg border border-[var(--border-color)]/30">
                        Out of Stock
                      </span>
                    </div>
                  )}
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Product Info */}
                <div className="p-3 sm:p-4 bg-[var(--card-bg)]">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="text-sm sm:text-base font-bold text-[var(--foreground)] group-hover:text-[var(--primary-green)] transition-colors duration-300 opacity-95 cursor-pointer line-clamp-2">{product.name}</h3>
                  </Link>
                </div>
              </div>
              )
            })}
            </div>
          )}
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-[var(--primary-green)]/20 text-[var(--foreground)] px-8 py-3 rounded-lg font-bold hover:bg-[var(--primary-green)]/30 transition-all duration-300 border border-[var(--primary-green)]/30 hover:border-[var(--primary-green)]/50 hover:scale-105 shadow-lg shadow-[var(--primary-green)]/10">
              Load More Products
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="pb-20 bg-[var(--background)] relative overflow-hidden">
        {/* Background Line Design */}
        <div className="absolute inset-0 bg-[linear-gradient(60deg,rgba(0,255,0,0.02)_1px,transparent_1px),linear-gradient(-60deg,rgba(0,255,0,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        
        {/* Decorative Corner Lines */}
        <div className="absolute top-0 left-0 w-24 h-px bg-gradient-to-r from-[var(--primary-green)]/40 to-transparent"></div>
        <div className="absolute top-0 left-0 h-24 w-px bg-gradient-to-b from-[var(--primary-green)]/40 to-transparent"></div>
        <div className="absolute top-0 right-0 w-24 h-px bg-gradient-to-l from-[var(--primary-green)]/40 to-transparent"></div>
        <div className="absolute top-0 right-0 h-24 w-px bg-gradient-to-b from-[var(--primary-green)]/40 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-6 opacity-95">
            Stay Updated
          </h2>
          <p className="text-lg text-[var(--text-muted)] mb-8 opacity-85">
            Get notified about new products, exclusive deals, and special offers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-[var(--card-bg)] border border-[var(--primary-green)]/30 rounded-lg text-[var(--foreground)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--primary-green)] hover:border-[var(--primary-green)]/50 transition-colors"
            />
            <button className="bg-[var(--primary-green)] text-[var(--background)] px-6 py-3 rounded-lg font-bold hover:bg-[var(--secondary-green)] transition-all duration-300 shadow-lg shadow-[var(--primary-green)]/30 hover:scale-105 border border-[var(--primary-green)]/20">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
