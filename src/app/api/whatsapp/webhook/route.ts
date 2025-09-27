import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const mode = searchParams.get('hub.mode')
  const token = searchParams.get('hub.verify_token')
  const challenge = searchParams.get('hub.challenge')

  const verifyToken = process.env.WHATSAPP_VERIFY_TOKEN

  if (mode === 'subscribe' && token === verifyToken) {
    console.log('WhatsApp webhook verified')
    return new NextResponse(challenge)
  } else {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Handle incoming WhatsApp messages
    if (body.object === 'whatsapp_business_account') {
      body.entry?.forEach((entry: Record<string, unknown>) => {
        (entry.changes as Record<string, unknown>[])?.forEach((change: Record<string, unknown>) => {
          if (change.field === 'messages') {
            const value = change.value as Record<string, unknown>
            const messages = value.messages
            const contacts = value.contacts

            if (messages) {
              (messages as Record<string, unknown>[]).forEach((message: Record<string, unknown>) => {
                handleIncomingMessage(message, contacts as Record<string, unknown>[])
              })
            }
          }
        })
      })
    }

    return NextResponse.json({ status: 'ok' })
  } catch (error) {
    console.error('Error processing WhatsApp webhook:', error)
    return NextResponse.json(
      { error: 'Failed to process webhook' },
      { status: 500 }
    )
  }
}

async function handleIncomingMessage(message: Record<string, unknown>, contacts: Record<string, unknown>[]) {
  try {
    const contact = contacts?.find(c => (c as Record<string, unknown>).wa_id === message.from)
    const senderName = ((contact as Record<string, unknown>)?.profile as Record<string, unknown>)?.name || 'Unknown'
    const messageText = (message.text as Record<string, unknown>)?.body || ''
    const messageType = message.type

    console.log(`Received ${messageType} message from ${senderName}: ${messageText}`)

    // Here you can implement your business logic for handling incoming messages
    // For example:
    // - Auto-reply to common questions
    // - Process order inquiries
    // - Handle customer support requests
    // - Update order status based on keywords

    // Example: Auto-reply for common keywords
    if (messageType === 'text') {
      const lowerText = (messageText as string).toLowerCase()
      
      if (lowerText.includes('order') || lowerText.includes('track')) {
        // Handle order tracking requests
        await sendOrderTrackingResponse(message.from as string, senderName as string)
      } else if (lowerText.includes('help') || lowerText.includes('support')) {
        // Handle help requests
        await sendHelpResponse(message.from as string, senderName as string)
      } else if (lowerText.includes('price') || lowerText.includes('cost')) {
        // Handle price inquiries
        await sendPriceInquiryResponse(message.from as string, senderName as string)
      }
    }
  } catch (error) {
    console.error('Error handling incoming message:', error)
  }
}

async function sendOrderTrackingResponse(to: string, senderName: string) {
  const response = await fetch('/api/whatsapp/send-message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      to,
      type: 'text',
      text: {
        body: `Hi ${senderName}! 👋\n\nTo track your order, please provide your order ID or check your account dashboard.\n\nYou can also reply with "HELP" for more assistance.`
      }
    }),
  })

  return response.json()
}

async function sendHelpResponse(to: string, senderName: string) {
  const response = await fetch('/api/whatsapp/send-message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      to,
      type: 'text',
      text: {
        body: `Hi ${senderName}! 👋\n\nI'm here to help! Here are some things I can assist you with:\n\n• Order tracking - Reply with "ORDER"\n• Product inquiries - Reply with "PRODUCT"\n• Pricing information - Reply with "PRICE"\n• General support - Reply with "SUPPORT"\n\nIs there anything specific you'd like to know? 😊`
      }
    }),
  })

  return response.json()
}

async function sendPriceInquiryResponse(to: string, senderName: string) {
  const response = await fetch('/api/whatsapp/send-message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      to,
      type: 'text',
      text: {
        body: `Hi ${senderName}! 👋\n\nFor pricing information, please visit our website or browse our product catalog. You can also contact the seller directly for specific product pricing.\n\nNeed help finding a product? Just let me know! 😊`
      }
    }),
  })

  return response.json()
}
