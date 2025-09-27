export interface WhatsAppMessage {
  to: string
  type: 'text' | 'template' | 'interactive'
  text?: {
    body: string
  }
  template?: {
    name: string
    language: {
      code: string
    }
    components?: Record<string, unknown>[]
  }
  interactive?: {
    type: 'button' | 'list'
    header?: {
      type: 'text'
      text: string
    }
    body: {
      text: string
    }
    footer?: {
      text: string
    }
    action: {
      buttons?: Array<{
        type: 'reply'
        reply: {
          id: string
          title: string
        }
      }>
      sections?: Array<{
        title: string
        rows: Array<{
          id: string
          title: string
          description?: string
        }>
      }>
    }
  }
}

export interface WhatsAppContact {
  phone: string
  name?: string
  email?: string
}

export const whatsappService = {
  async sendMessage(message: WhatsAppMessage) {
    const response = await fetch('/api/whatsapp/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    })

    if (!response.ok) {
      throw new Error('Failed to send WhatsApp message')
    }

    return response.json()
  },

  async sendTextMessage(to: string, text: string) {
    return this.sendMessage({
      to,
      type: 'text',
      text: { body: text }
    })
  },

  async sendTemplateMessage(to: string, templateName: string, languageCode: string = 'en', components?: Record<string, unknown>[]) {
    return this.sendMessage({
      to,
      type: 'template',
      template: {
        name: templateName,
        language: { code: languageCode },
        components
      }
    })
  },

  async sendInteractiveMessage(to: string, interactive: WhatsAppMessage['interactive']) {
    return this.sendMessage({
      to,
      type: 'interactive',
      interactive
    })
  },

  async sendOrderConfirmation(to: string, orderDetails: {
    orderId: string
    productName: string
    amount: number
    currency: string
    trackingNumber?: string
  }) {
    const message = `🎉 Order Confirmation!

Order ID: ${orderDetails.orderId}
Product: ${orderDetails.productName}
Amount: ${orderDetails.currency} ${orderDetails.amount}

${orderDetails.trackingNumber ? `Tracking Number: ${orderDetails.trackingNumber}` : 'Your order is being processed.'}

Thank you for your purchase! 🙏`

    return this.sendTextMessage(to, message)
  },

  async sendOrderUpdate(to: string, orderId: string, status: string, additionalInfo?: string) {
    const statusEmojis: Record<string, string> = {
      'confirmed': '✅',
      'shipped': '🚚',
      'delivered': '📦',
      'cancelled': '❌'
    }

    const message = `${statusEmojis[status] || '📋'} Order Update

Order ID: ${orderId}
Status: ${status.charAt(0).toUpperCase() + status.slice(1)}

${additionalInfo ? `Additional Info: ${additionalInfo}` : ''}

Need help? Reply to this message! 💬`

    return this.sendTextMessage(to, message)
  },

  async sendProductInquiry(to: string, productName: string, sellerName: string, productUrl: string) {
    const message = `🛍️ Product Inquiry

Hi! I'm interested in your product: ${productName}

Seller: ${sellerName}
Product Link: ${productUrl}

Could you please provide more details about:
• Availability
• Shipping options
• Any discounts available

Thank you! 😊`

    return this.sendTextMessage(to, message)
  },

  async sendWelcomeMessage(to: string, userName: string) {
    const message = `👋 Welcome to Marketplace, ${userName}!

Thank you for joining our community of buyers and sellers. 

Here's what you can do:
🛒 Browse thousands of products
💰 Sell your own items
💬 Chat with sellers via WhatsApp
🌍 Shop in your preferred language
🔒 Secure payments with Stripe

Need help? Just reply to this message!

Happy shopping! 🎉`

    return this.sendTextMessage(to, message)
  },

  async sendSellerNotification(to: string, notification: {
    type: 'new_order' | 'order_cancelled' | 'payment_received' | 'product_inquiry'
    data: Record<string, unknown>
  }) {
    let message = ''

    switch (notification.type) {
      case 'new_order':
        message = `🛒 New Order Received!

Order ID: ${notification.data.orderId}
Product: ${notification.data.productName}
Buyer: ${notification.data.buyerName}
Amount: ${notification.data.currency} ${notification.data.amount}

Please confirm and prepare for shipping. 📦`
        break

      case 'payment_received':
        message = `💰 Payment Received!

Order ID: ${notification.data.orderId}
Amount: ${notification.data.currency} ${notification.data.amount}
Payment Method: ${notification.data.paymentMethod}

You can now proceed with shipping. 🚚`
        break

      case 'product_inquiry':
        message = `💬 New Product Inquiry

Product: ${notification.data.productName}
From: ${notification.data.buyerName}
Message: ${notification.data.message}

Please respond to help the customer! 😊`
        break

      case 'order_cancelled':
        message = `❌ Order Cancelled

Order ID: ${notification.data.orderId}
Product: ${notification.data.productName}
Reason: ${notification.data.reason || 'Not specified'}

The payment has been refunded. 💳`
        break
    }

    return this.sendTextMessage(to, message)
  }
}
