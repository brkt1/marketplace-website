'use client'

import { Layout } from '@/components/Layout/Layout'
import { useCart } from '@/contexts/CartContext'
import Link from 'next/link'

export default function Home() {
  const { addToCart } = useCart()

  const stats = [
    {
      icon: '🏠',
      title: '65+ days average delivery time',
      description: 'Fast and reliable shipping worldwide'
    },
    {
      icon: '🛡️',
      title: '7+ years warranty on products',
      description: 'Quality guarantee on all purchases'
    },
    {
      icon: '📦',
      title: '180+ products available',
      description: 'Wide selection since 2020'
    }
  ]

  const features = [
    {
      icon: '💪',
      title: 'High Quality',
      description: 'Premium products with excellent durability and performance'
    },
    {
      icon: '⚡',
      title: 'Fast Shipping',
      description: 'Quick delivery and long-lasting product satisfaction'
    },
    {
      icon: '✅',
      title: 'No Hassle Returns',
      description: 'Easy returns and exchanges with immediate processing'
    }
  ]

  const products = [
    {
      id: 1,
      name: 'Product 1',
      size: '77m²',
      price: '5,800,000',
      image: '/placeholder-product-1.jpg'
    },
    {
      id: 2,
      name: 'Product 2',
      size: '94m²',
      price: '7,200,000',
      image: '/placeholder-product-2.jpg'
    },
    {
      id: 3,
      name: 'Product 3',
      size: '65m²',
      price: '6,000,000',
      image: '/placeholder-product-3.jpg'
    },
    {
      id: 4,
      name: 'Product 4',
      size: '60m²',
      price: '5,200,000',
      image: '/placeholder-product-4.jpg'
    }
  ]

  const paymentMethods = [
    {
      icon: '💳',
      title: 'Credit Purchase',
      description: 'We partner with major banks offering credit at rates from 5.5% annually'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Family Support',
      description: 'Use government family support programs for your purchases'
    },
    {
      icon: '🏛️',
      title: 'Government Subsidies',
      description: 'We work with government subsidies. Contact our managers for details'
    },
    {
      icon: '💻',
      title: 'Digital Payment',
      description: 'Secure online payments and bank transfers available'
    }
  ]

  const steps = [
    {
      number: '1',
      title: 'Consultation and Selection',
      description: 'Discuss your needs and requirements, determine budget and get personalized recommendations'
    },
    {
      number: '2',
      title: 'Purchase and Processing',
      description: 'Our team of specialists will process your order with attention to quality and specifications'
    },
    {
      number: '3',
      title: 'Delivery and Support',
      description: 'Complete delivery and setup. Conduct final quality checks and provide ongoing support'
    }
  ]

  return (
    <Layout>
      {/* Hero Section - Modern Design */}
      <section className="relative min-h-screen bg-gradient-to-br from-[var(--background)] via-[var(--background)] to-[var(--background)] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
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

        <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-8">
          {/* Left Panel */}
          <div className="w-full lg:w-1/3 space-y-6 sm:space-y-8 lg:space-y-10 lg:pr-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight">
                  <span className="text-[var(--foreground)]">
                    Blvck
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-[var(--primary-green)] to-[var(--accent-green)] bg-clip-text text-transparent">
                    Tumbler
                  </span>
                </h1>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-[var(--foreground)] text-xl font-semibold tracking-wide opacity-90">Black Lifestyle Lovers.</h2>
                <p className="text-[var(--text-muted)] text-sm sm:text-base lg:text-lg leading-relaxed max-w-md opacity-80">
                  Experience what it feels like drinking your favourite beverage out of our premium, all-black mug that was designed with you in mind.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row">
              <Link href="/products">
                <button className="group relative bg-[var(--primary-green)] text-[var(--background)] px-8 py-4 font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-[var(--secondary-green)] hover:text-[var(--background)] transition-all duration-300 shadow-lg shadow-[var(--primary-green)]/25 hover:shadow-[var(--primary-green)]/40 hover:scale-105 border border-[var(--primary-green)]/20">
                  <span className="relative z-10">Explore Now</span>
                </button>
              </Link>
              <button className="group border-2 border-[var(--border-color)] text-[var(--foreground)] px-8 py-4 font-semibold text-sm uppercase tracking-wider rounded-xl hover:border-[var(--primary-green)] hover:text-[var(--primary-green)] hover:bg-[var(--hover-bg)] transition-all duration-300 backdrop-blur-sm bg-[var(--card-bg)]/50">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Center Panel - Product Display */}
          <div className="w-full lg:w-1/3 flex items-center justify-center py-8 sm:py-12 lg:py-0">
            <div className="relative group">
              {/* Floating Background Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--primary-green)]/20 to-[var(--accent-green)]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              {/* Tumbler Image */}
              <div className="relative z-10">
                <img 
                  src="https://img.freepik.com/free-vector/black-wavy-abstract-pattern_1409-10054.jpg?semt=ais_hybrid&w=740&q=80" 
                  alt="Blvck Tumbler" 
                  className="w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-96 lg:h-[28rem] object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500 border border-[var(--border-color)]/30"
                />
                
                {/* Modern Accent Elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 lg:w-24 lg:h-24 border-4 border-[var(--primary-green)] rounded-full border-r-transparent animate-spin-slow"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 lg:w-20 lg:h-20 bg-[var(--primary-green)] rounded-2xl flex items-center justify-center shadow-lg border border-[var(--primary-green)]/20">
                  <span className="text-[var(--background)] text-lg lg:text-xl font-bold">30%</span>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute top-6 left-6 bg-[var(--card-bg)]/90 backdrop-blur-sm border border-[var(--border-color)] rounded-2xl px-4 py-2 shadow-lg">
                  <span className="text-[var(--primary-green)] text-sm font-semibold">Featured</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-full lg:w-1/3 space-y-10 lg:pl-12">
            <div className="flex justify-end">
              <div className="w-10 h-10 flex items-center justify-center bg-[var(--hover-bg)] backdrop-blur-sm border border-[var(--border-color)] rounded-2xl hover:bg-[var(--border-color)]/20 transition-colors">
                <svg className="w-5 h-5 text-[var(--foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-[var(--foreground)] text-xl font-semibold opacity-90">Discover Excellence</h3>
                <p className="text-[var(--text-muted)] text-lg leading-relaxed opacity-80">
                  Learn more about what makes our Blvck Tumbler unique and different. Experience the premium quality through our video showcase.
                </p>
              </div>
              
              {/* Modern Play Button */}
              <div className="flex items-center space-x-6">
                <button className="group relative w-16 h-16 bg-[var(--primary-green)] rounded-2xl flex items-center justify-center hover:bg-[var(--secondary-green)] transition-all duration-300 shadow-lg shadow-[var(--primary-green)]/25 hover:shadow-[var(--primary-green)]/40 hover:scale-110 border border-[var(--primary-green)]/20">
                  <div className="w-0 h-0 border-l-[10px] border-l-[var(--background)] border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                </button>
                <div className="space-y-1">
                  <p className="text-[var(--foreground)] font-medium opacity-90">Watch Demo</p>
                  <p className="text-[var(--text-muted)] text-sm opacity-70">2:30 min</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Stats Section - Modern Design */}
      <section className="relative pb-16 sm:pb-20 bg-gradient-to-b from-[var(--background)] to-[var(--background)] overflow-hidden">
        {/* Background Line Design */}
        <div className="absolute inset-0 bg-[linear-gradient(30deg,rgba(0,255,0,0.06)_1px,transparent_1px),linear-gradient(-30deg,rgba(0,255,0,0.06)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        
        {/* Decorative Lines */}
        <div className="absolute top-0 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-[var(--primary-green)]/50 to-transparent"></div>
        <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[var(--primary-green)]/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="group text-center">
              <div className="relative bg-[var(--card-bg)] backdrop-blur-sm border border-[var(--border-color)] rounded-3xl p-8 hover:border-[var(--primary-green)]/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[var(--primary-green)]/10 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-green)]/5 to-[var(--accent-green)]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl lg:text-6xl font-black text-[var(--primary-green)] mb-4 opacity-90">2024</div>
                  <div className="text-[var(--foreground)] text-lg font-semibold tracking-wide opacity-90">Latest Technology</div>
                  <div className="text-[var(--text-muted)] text-sm mt-2 opacity-80">Cutting-edge innovation</div>
                </div>
              </div>
            </div>
            
            <div className="group text-center">
              <div className="relative bg-[var(--card-bg)] backdrop-blur-sm border border-[var(--border-color)] rounded-3xl p-8 hover:border-[var(--primary-green)]/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[var(--primary-green)]/10 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-green)]/5 to-[var(--accent-green)]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl lg:text-6xl font-black text-[var(--primary-green)] mb-4 opacity-90">100%</div>
                  <div className="text-[var(--foreground)] text-lg font-semibold tracking-wide opacity-90">Professional Grade</div>
                  <div className="text-[var(--text-muted)] text-sm mt-2 opacity-80">Premium quality guaranteed</div>
                </div>
              </div>
            </div>
            
            <div className="group text-center">
              <div className="relative bg-[var(--card-bg)] backdrop-blur-sm border border-[var(--border-color)] rounded-3xl p-8 hover:border-[var(--primary-green)]/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[var(--primary-green)]/10 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-green)]/5 to-[var(--accent-green)]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl lg:text-6xl font-black text-[var(--primary-green)] mb-4 opacity-90">24/7</div>
                  <div className="text-[var(--foreground)] text-lg font-semibold tracking-wide opacity-90">Support Available</div>
                  <div className="text-[var(--text-muted)] text-sm mt-2 opacity-80">Always here to help</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Products Showcase */}
      <section className="pb-24 bg-gradient-to-b from-[var(--background)] via-[var(--background)] to-[var(--background)] overflow-hidden relative">
        {/* Background Line Design */}
        <div className="absolute inset-0 bg-[linear-gradient(60deg,rgba(0,255,0,0.04)_1px,transparent_1px),linear-gradient(-60deg,rgba(0,255,0,0.04)_1px,transparent_1px)] bg-[size:120px_120px]"></div>
        
        {/* Decorative Corner Lines */}
        <div className="absolute top-0 left-0 w-32 h-px bg-gradient-to-r from-[var(--primary-green)]/60 to-transparent"></div>
        <div className="absolute top-0 left-0 h-32 w-px bg-gradient-to-b from-[var(--primary-green)]/60 to-transparent"></div>
        <div className="absolute top-0 right-0 w-32 h-px bg-gradient-to-l from-[var(--primary-green)]/60 to-transparent"></div>
        <div className="absolute top-0 right-0 h-32 w-px bg-gradient-to-b from-[var(--primary-green)]/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-32 h-px bg-gradient-to-r from-[var(--primary-green)]/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 h-32 w-px bg-gradient-to-t from-[var(--primary-green)]/60 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-32 h-px bg-gradient-to-l from-[var(--primary-green)]/60 to-transparent"></div>
        <div className="absolute bottom-0 right-0 h-32 w-px bg-gradient-to-t from-[var(--primary-green)]/60 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-4 sm:mb-6 lg:mb-8">
              <span className="text-[var(--foreground)] opacity-95">
                Premium
              </span>
              <br />
              <span className="bg-gradient-to-r from-[var(--primary-green)] to-[var(--accent-green)] bg-clip-text text-transparent">
                Products
              </span>
            </h2>
            <p className="text-xl text-[var(--text-muted)] max-w-4xl mx-auto leading-relaxed opacity-85">
              Discover our curated collection of premium products designed for excellence and performance. 
              Each item is crafted with precision and built to exceed expectations.
            </p>
          </div>


          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                name: 'Blvck Tumbler Classic',
                price: '$49',
                originalPrice: '$69',
                rating: 4.8,
                reviews: 892,
                image: 'https://img.freepik.com/free-vector/black-wavy-abstract-pattern_1409-10054.jpg?semt=ais_hybrid&w=740&q=80',
                badge: null,
                badgeColor: 'bg-gradient-to-r from-green-400 to-emerald-500 text-black'
              },
              {
                name: 'Blvck Tumbler Travel',
                price: '$59',
                originalPrice: '$79',
                rating: 4.7,
                reviews: 634,
                image: 'https://img.freepik.com/free-vector/black-wavy-abstract-pattern_1409-10054.jpg?semt=ais_hybrid&w=740&q=80',
                badge: null,
                badgeColor: 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
              },
              {
                name: 'Blvck Tumbler Elite',
                price: '$99',
                originalPrice: null,
                rating: 4.9,
                reviews: 445,
                image: 'https://img.freepik.com/free-vector/black-wavy-abstract-pattern_1409-10054.jpg?semt=ais_hybrid&w=740&q=80',
                badge: null,
                badgeColor: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
              }
            ].map((product, index) => {
              const cardColors = [
                'bg-gradient-to-br from-[var(--card-bg)] to-[var(--card-bg)] border-[var(--border-color)] hover:border-[var(--primary-green)]/50 hover:shadow-[var(--primary-green)]/10',
                'bg-gradient-to-br from-[var(--card-bg)] to-[var(--card-bg)] border-[var(--border-color)] hover:border-[var(--primary-green)]/50 hover:shadow-[var(--primary-green)]/10',
                'bg-gradient-to-br from-[var(--card-bg)] to-[var(--card-bg)] border-[var(--border-color)] hover:border-[var(--primary-green)]/50 hover:shadow-[var(--primary-green)]/10'
              ]
              const badgeColors = [
                'bg-gradient-to-r from-[var(--hover-bg)] to-[var(--border-color)] text-[var(--foreground)]',
                'bg-gradient-to-r from-[var(--hover-bg)] to-[var(--border-color)] text-[var(--foreground)]', 
                'bg-gradient-to-r from-[var(--hover-bg)] to-[var(--border-color)] text-[var(--foreground)]'
              ]
              const buttonColors = [
                'bg-gradient-to-r from-[var(--hover-bg)] to-[var(--border-color)] hover:from-[var(--primary-green)] hover:to-[var(--secondary-green)] shadow-[var(--primary-green)]/25 hover:shadow-[var(--primary-green)]/40',
                'bg-gradient-to-r from-[var(--hover-bg)] to-[var(--border-color)] hover:from-[var(--primary-green)] hover:to-[var(--secondary-green)] shadow-[var(--primary-green)]/25 hover:shadow-[var(--primary-green)]/40',
                'bg-gradient-to-r from-[var(--hover-bg)] to-[var(--border-color)] hover:from-[var(--primary-green)] hover:to-[var(--secondary-green)] shadow-[var(--primary-green)]/25 hover:shadow-[var(--primary-green)]/40'
              ]
              
              return (
              <div key={index} className={`group relative bg-[var(--card-bg)] backdrop-blur-sm border border-[var(--border-color)] rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-[var(--primary-green)]/50`}>
                {/* Product Image */}
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 border-b border-[var(--border-color)]/20"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-4 py-2 rounded-2xl text-xs font-bold shadow-lg bg-[var(--hover-bg)] text-[var(--foreground)] border border-[var(--border-color)]`}>
                      {product.badge}
                    </span>
                  </div>
                  
                  {/* Quick Add Button */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button 
                      onClick={() => addToCart({
                        id: product.name.toLowerCase().replace(/\s+/g, '-'),
                        name: product.name,
                        price: parseFloat(product.price.replace('$', '')),
                        image: product.image,
                        currency: '$'
                      })}
                      className={`w-12 h-12 bg-[var(--primary-green)] hover:bg-[var(--secondary-green)] rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 border border-[var(--primary-green)]/20`}
                    >
                      <span className="text-[var(--background)] text-lg font-bold">+</span>
                    </button>
                  </div>
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Product Info */}
                <div className="p-6 space-y-4 bg-[var(--card-bg)]">
                  <h3 className="text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--primary-green)] transition-colors duration-300 opacity-95">{product.name}</h3>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-sm ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-[var(--text-muted)]'}`}>
                          ⭐
                        </span>
                      ))}
                    </div>
                    <span className="text-[var(--text-muted)] text-sm font-medium opacity-80">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-black text-[var(--primary-green)] opacity-95">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-[var(--text-muted)] line-through text-lg opacity-70">{product.originalPrice}</span>
                    )}
                  </div>
                  
                  {/* Add to Cart Button */}
                  <button 
                    onClick={() => addToCart({
                      id: product.name.toLowerCase().replace(/\s+/g, '-'),
                      name: product.name,
                      price: parseFloat(product.price.replace('$', '')),
                      image: product.image,
                      currency: '$'
                    })}
                    className={`w-full bg-[var(--primary-green)] hover:bg-[var(--secondary-green)] text-[var(--background)] py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:scale-105 border border-[var(--primary-green)]/20`}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              )
            })}
          </div>

          {/* View All Products Button */}
          <div className="text-center mt-20">
            <Link href="/products">
              <button className="group relative bg-transparent border-2 border-[var(--primary-green)] text-[var(--primary-green)] px-16 py-6 font-bold text-lg rounded-2xl hover:border-[var(--primary-green)] hover:bg-[var(--primary-green)] hover:text-[var(--background)] transition-all duration-300 backdrop-blur-sm shadow-lg shadow-[var(--primary-green)]/10 hover:shadow-[var(--primary-green)]/25 hover:scale-105 bg-[var(--card-bg)]/30">
                <span className="relative z-10 opacity-95">View All Products</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

