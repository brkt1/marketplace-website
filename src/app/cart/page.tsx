'use client'

import { Layout } from '@/components/Layout/Layout'
import { useCart } from '@/contexts/CartContext'
import Link from 'next/link'

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart()

  const subtotal = getCartTotal()
  const shipping = subtotal > 100 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-8 pb-6 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[var(--foreground)] mb-3 opacity-95">
              Shopping Cart
            </h1>
            <p className="text-base text-[var(--text-muted)] opacity-85">
              Review your items and proceed to checkout
            </p>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="pb-8 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto px-4">
          {cartItems.length === 0 ? (
            /* Empty Cart */
            <div className="text-center py-12">
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-3 opacity-95">Your cart is empty</h2>
              <p className="text-sm text-[var(--text-muted)] mb-6 opacity-85">Add some products to get started!</p>
              <Link
                href="/products"
                className="bg-[var(--primary-green)] text-[var(--background)] px-6 py-3 rounded-lg font-bold text-sm hover:bg-[var(--secondary-green)] transition-colors duration-200"
              >
                Browse Products
              </Link>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Cart Items */}
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg p-4 flex items-center gap-4">
                    {/* Product Image */}
                    <div className="w-16 h-16 bg-[var(--background)] border border-[var(--border-color)] rounded-lg flex items-center justify-center flex-shrink-0">
                      {item.image.startsWith('http') ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                      ) : (
                        <span className="text-2xl">{item.image}</span>
                      )}
                    </div>
                    
                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[var(--foreground)] font-bold text-sm mb-1 truncate">{item.name}</h3>
                      <p className="text-[var(--text-muted)] text-xs mb-1 opacity-80">In Stock</p>
                      <p className="text-[var(--primary-green)] font-bold text-sm">{item.currency || '$'}{item.price}</p>
                    </div>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 bg-[var(--hover-bg)] border border-[var(--border-color)] rounded flex items-center justify-center text-[var(--foreground)] hover:bg-[var(--border-color)] transition-colors text-sm"
                      >
                        -
                      </button>
                      <span className="text-[var(--foreground)] font-bold w-6 text-center text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 bg-[var(--hover-bg)] border border-[var(--border-color)] rounded flex items-center justify-center text-[var(--foreground)] hover:bg-[var(--border-color)] transition-colors text-sm"
                      >
                        +
                      </button>
                    </div>
                    
                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-400 transition-colors text-sm"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              
              {/* Continue Shopping */}
              <div className="pt-4 border-t border-[var(--border-color)]">
                <Link
                  href="/products"
                  className="text-[var(--primary-green)] hover:text-[var(--secondary-green)] transition-colors text-sm"
                >
                  ← Continue Shopping
                </Link>
              </div>

              {/* Order Summary */}
              <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg p-4">
                <h2 className="text-[var(--foreground)] font-bold text-lg mb-4 opacity-95">Order Summary</h2>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-[var(--text-muted)] text-sm">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[var(--text-muted)] text-sm">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-[var(--text-muted)] text-sm">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-[var(--border-color)] pt-3">
                    <div className="flex justify-between text-[var(--foreground)] font-bold text-base">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                {/* Promo Code */}
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Promo code"
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--primary-green)] text-sm"
                  />
                </div>
                
                {/* Checkout Button */}
                <button className="w-full bg-[var(--primary-green)] text-[var(--background)] py-3 rounded-lg font-bold text-sm hover:bg-[var(--secondary-green)] transition-colors duration-200 mb-3">
                  Proceed to Checkout
                </button>
                
                {/* Security Notice */}
                <div className="text-center">
                  <p className="text-[var(--text-muted)] text-xs opacity-80">
                    Secure checkout with SSL encryption
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Recommended Products */}
      {cartItems.length > 0 && (
        <section className="py-8 bg-[var(--card-bg)]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-6 text-center opacity-95">
              You might also like
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Power Mouse Elite', price: 79.99, image: '🖱️' },
                { name: 'Monitor Display 4K', price: 599.99, image: '🖥️' },
                { name: 'Software Suite Pro', price: 99.99, image: '💿' },
                { name: 'Wireless Charger', price: 49.99, image: '🔋' }
              ].map((product, index) => (
                <div key={index} className="bg-[var(--background)] border border-[var(--border-color)] rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">{product.image}</div>
                  <h3 className="text-[var(--foreground)] font-bold text-sm mb-1">{product.name}</h3>
                  <p className="text-[var(--primary-green)] font-bold text-sm mb-3">${product.price}</p>
                  <button className="w-full bg-[var(--hover-bg)] text-[var(--foreground)] py-2 rounded text-sm hover:bg-[var(--border-color)] transition-colors duration-200 border border-[var(--border-color)]">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  )
}
