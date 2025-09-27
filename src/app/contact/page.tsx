'use client'

import { Layout } from '@/components/Layout/Layout'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-8 pb-6 bg-[var(--background)] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[var(--foreground)] mb-3 opacity-95">
              Get in <span className="text-[var(--primary-green)]">Touch</span>
            </h1>
            <p className="text-base text-[var(--text-muted)] opacity-85">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-8 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            {/* Contact Form */}
            <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg p-4">
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-4 opacity-95">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-[var(--foreground)] text-sm font-medium mb-1 opacity-90">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--primary-green)] transition-colors duration-200 text-sm"
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-[var(--foreground)] text-sm font-medium mb-1 opacity-90">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--primary-green)] transition-colors duration-200 text-sm"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-[var(--foreground)] text-sm font-medium mb-1 opacity-90">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--primary-green)] transition-colors duration-200 text-sm"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-[var(--foreground)] text-sm font-medium mb-1 opacity-90">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--primary-green)] transition-colors duration-200 resize-none text-sm"
                    placeholder="Tell us more about your inquiry..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[var(--primary-green)] text-[var(--background)] py-3 px-4 rounded-lg font-bold text-sm hover:bg-[var(--secondary-green)] transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg p-4">
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-4 opacity-95">Get in Touch</h2>
              
              <div className="space-y-4">
                <div className="p-3 bg-[var(--background)] rounded-lg border border-[var(--border-color)]">
                  <h3 className="text-[var(--foreground)] font-bold text-sm mb-2 opacity-95">Email</h3>
                  <p className="text-[var(--text-muted)] text-sm opacity-80 mb-1">contact@teamblack.com</p>
                  <p className="text-[var(--text-muted)] text-sm opacity-80">support@teamblack.com</p>
                </div>
                
                <div className="p-3 bg-[var(--background)] rounded-lg border border-[var(--border-color)]">
                  <h3 className="text-[var(--foreground)] font-bold text-sm mb-2 opacity-95">Phone</h3>
                  <p className="text-[var(--text-muted)] text-sm opacity-80 mb-1">+1 (555) 123-4567</p>
                  <p className="text-[var(--text-muted)] text-sm opacity-80">Mon-Fri 9AM-6PM EST</p>
                </div>
                
                <div className="p-3 bg-[var(--background)] rounded-lg border border-[var(--border-color)]">
                  <h3 className="text-[var(--foreground)] font-bold text-sm mb-2 opacity-95">Address</h3>
                  <p className="text-[var(--text-muted)] text-sm opacity-80 mb-1">123 Black Green Street</p>
                  <p className="text-[var(--text-muted)] text-sm opacity-80">Team Black City, TB 12345</p>
                </div>
                
                <div className="p-3 bg-[var(--background)] rounded-lg border border-[var(--border-color)]">
                  <h3 className="text-[var(--foreground)] font-bold text-sm mb-2 opacity-95">Live Chat</h3>
                  <p className="text-[var(--text-muted)] text-sm opacity-80 mb-1">Available 24/7</p>
                  <p className="text-[var(--text-muted)] text-sm opacity-80">Instant support</p>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="pt-4 border-t border-[var(--border-color)]">
                <h3 className="text-[var(--foreground)] font-bold text-sm mb-3 opacity-95">Follow Us</h3>
                <div className="flex space-x-2">
                  {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                    <button
                      key={social}
                      className="w-8 h-8 bg-[var(--hover-bg)] rounded-lg flex items-center justify-center hover:bg-[var(--primary-green)]/20 transition-colors duration-200 border border-[var(--border-color)] hover:border-[var(--primary-green)]/30"
                    >
                      <span className="text-[var(--foreground)] text-xs font-medium">{social[0]}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-3 opacity-95">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[var(--text-muted)] opacity-85">
              Quick answers to common questions
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: "How do I place an order?",
                answer: "Simply browse our products, add items to your cart, and proceed to checkout. You can pay securely using various payment methods."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, bank transfers, and cryptocurrency payments for your convenience."
              },
              {
                question: "How long does shipping take?",
                answer: "Standard shipping takes 3-5 business days, while express shipping delivers within 1-2 business days."
              },
              {
                question: "Do you offer customer support?",
                answer: "Yes! Our customer support team is available 24/7 via live chat, email, and phone to assist you with any questions."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg p-4">
                <h3 className="text-[var(--foreground)] font-bold text-sm mb-2 opacity-95">{faq.question}</h3>
                <p className="text-[var(--text-muted)] opacity-85 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
