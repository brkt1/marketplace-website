'use client'

import { Layout } from '@/components/Layout/Layout'
import { useState } from 'react'

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  const faqCategories = [
    {
      title: "General Questions",
      items: [
        {
          question: "What is Team Black?",
          answer: "Team Black is a cutting-edge black and green marketplace platform that connects buyers and sellers of technology products with advanced features like secure payments, real-time communication, and multi-language support."
        },
        {
          question: "How do I create an account?",
          answer: "Click the 'Register' button in the header, fill out the registration form with your details, verify your email, and you're ready to start using Team Black!"
        },
        {
          question: "Is Team Black free to use?",
          answer: "Yes! Creating an account and browsing products is completely free. We only charge small transaction fees when you make purchases or sell products."
        }
      ]
    },
    {
      title: "Account & Security",
      items: [
        {
          question: "How do I reset my password?",
          answer: "Click 'Forgot Password' on the login page, enter your email address, and follow the instructions sent to your email to reset your password securely."
        },
        {
          question: "Is my personal information secure?",
          answer: "Absolutely. We use industry-standard encryption and security measures to protect your personal and financial information. Your data is never shared with third parties without your consent."
        },
        {
          question: "Can I delete my account?",
          answer: "Yes, you can delete your account at any time from your profile settings. Please note that this action is irreversible and will remove all your data from our platform."
        }
      ]
    },
    {
      title: "Shopping & Orders",
      items: [
        {
          question: "How do I place an order?",
          answer: "Browse our products, add items to your cart, review your order, choose your payment method, and complete the checkout process. You'll receive a confirmation email with order details."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and cryptocurrency payments for maximum convenience."
        },
        {
          question: "Can I cancel my order?",
          answer: "You can cancel your order within 24 hours of placement if it hasn't been shipped yet. Contact our support team for assistance with cancellations."
        },
        {
          question: "How do I track my order?",
          answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order status in your account dashboard under 'My Orders'."
        }
      ]
    },
    {
      title: "Shipping & Returns",
      items: [
        {
          question: "What are your shipping options?",
          answer: "We offer standard shipping (3-5 business days), express shipping (1-2 business days), and overnight delivery for urgent orders. Shipping costs vary by location and speed."
        },
        {
          question: "Do you ship internationally?",
          answer: "Yes! We ship to most countries worldwide. International shipping times vary by destination, typically 7-14 business days."
        },
        {
          question: "What is your return policy?",
          answer: "We offer a 30-day return policy for most items. Products must be in original condition with packaging. Contact support to initiate a return."
        },
        {
          question: "How do I return an item?",
          answer: "Contact our support team to request a return authorization. Once approved, you'll receive return instructions and a prepaid shipping label if applicable."
        }
      ]
    },
    {
      title: "Selling on ProductHub",
      items: [
        {
          question: "How do I become a seller?",
          answer: "Register for an account and apply to become a seller through your profile settings. We'll review your application and approve qualified sellers."
        },
        {
          question: "What are the seller fees?",
          answer: "We charge a small commission on each sale (typically 5-10% depending on the product category) and payment processing fees. No monthly fees or setup costs."
        },
        {
          question: "How do I manage my listings?",
          answer: "Access your seller dashboard to create, edit, and manage your product listings. You can track sales, manage inventory, and communicate with buyers."
        },
        {
          question: "When do I get paid?",
          answer: "Payments are processed and transferred to your account within 2-3 business days after order completion, minus applicable fees."
        }
      ]
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-8 pb-6 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[var(--foreground)] mb-3 opacity-95">
              Frequently Asked Questions
            </h1>
            <p className="text-base text-[var(--text-muted)] opacity-85">
              Find answers to common questions about our platform, services, and policies.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="pb-8 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-xl font-bold text-[var(--foreground)] mb-4 opacity-95">
                  {category.title}
                </h2>
                
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => {
                    const globalIndex = categoryIndex * 100 + itemIndex
                    const isOpen = openItems.includes(globalIndex)
                    
                    return (
                      <div key={itemIndex} className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg">
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-[var(--hover-bg)] transition-colors duration-200"
                        >
                          <h3 className="text-[var(--foreground)] font-bold text-sm pr-3">
                            {item.question}
                          </h3>
                          <span className={`text-[var(--primary-green)] text-lg transition-transform flex-shrink-0 ${isOpen ? 'rotate-45' : ''}`}>
                            +
                          </span>
                        </button>
                        
                        {isOpen && (
                          <div className="px-4 pb-3">
                            <p className="text-[var(--text-muted)] leading-relaxed text-sm">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-8 bg-[var(--card-bg)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-3 opacity-95">
            Still Have Questions?
          </h2>
          <p className="text-sm text-[var(--text-muted)] mb-6 opacity-85">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          
          <div className="flex flex-col gap-3 justify-center">
            <a
              href="/contact"
              className="bg-[var(--primary-green)] text-[var(--background)] px-6 py-3 rounded-lg font-bold text-sm hover:bg-[var(--secondary-green)] transition-colors duration-200"
            >
              Contact Support
            </a>
            <button className="bg-[var(--hover-bg)] text-[var(--foreground)] px-6 py-3 rounded-lg font-bold text-sm hover:bg-[var(--border-color)] transition-colors duration-200 border border-[var(--border-color)]">
              Live Chat
            </button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
