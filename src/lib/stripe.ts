import { loadStripe } from '@stripe/stripe-js'

// Initialize Stripe with proper error handling
export const stripePromise = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY && 
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY !== 'your-stripe-publishable-key-here'
  ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  : null

export interface PaymentIntentData {
  amount: number
  currency: string
  metadata?: {
    orderId?: string
    userId?: string
    productId?: string
  }
}

export interface PaymentMethod {
  id: string
  type: string
  card?: {
    brand: string
    last4: string
    exp_month: number
    exp_year: number
  }
}

export const paymentService = {
  async createPaymentIntent(data: PaymentIntentData) {
    const response = await fetch('/api/payments/create-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error('Failed to create payment intent')
    }

    return response.json()
  },

  async confirmPayment(paymentIntentId: string) {
    const response = await fetch('/api/payments/confirm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ paymentIntentId }),
    })

    if (!response.ok) {
      throw new Error('Failed to confirm payment')
    }

    return response.json()
  },

  async getPaymentMethods(userId: string) {
    const response = await fetch(`/api/payments/methods?userId=${userId}`)
    
    if (!response.ok) {
      throw new Error('Failed to fetch payment methods')
    }

    return response.json()
  },

  async savePaymentMethod(paymentMethodId: string, userId: string) {
    const response = await fetch('/api/payments/save-method', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ paymentMethodId, userId }),
    })

    if (!response.ok) {
      throw new Error('Failed to save payment method')
    }

    return response.json()
  },

  async deletePaymentMethod(paymentMethodId: string) {
    const response = await fetch('/api/payments/delete-method', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ paymentMethodId }),
    })

    if (!response.ok) {
      throw new Error('Failed to delete payment method')
    }

    return response.json()
  },
}
