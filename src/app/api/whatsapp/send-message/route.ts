import { NextRequest, NextResponse } from 'next/server'

const WHATSAPP_API_URL = 'https://graph.facebook.com/v18.0'

export async function POST(request: NextRequest) {
  try {
    const { to, type, text, template, interactive } = await request.json()

    if (!to || !type) {
      return NextResponse.json(
        { error: 'Recipient and message type are required' },
        { status: 400 }
      )
    }

    const accessToken = process.env.WHATSAPP_ACCESS_TOKEN
    const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID

    if (!accessToken || !phoneNumberId) {
      return NextResponse.json(
        { error: 'WhatsApp configuration missing' },
        { status: 500 }
      )
    }

    const messageData: Record<string, unknown> = {
      messaging_product: 'whatsapp',
      to,
      type,
    }

    switch (type) {
      case 'text':
        if (!text?.body) {
          return NextResponse.json(
            { error: 'Text body is required for text messages' },
            { status: 400 }
          )
        }
        messageData.text = text
        break

      case 'template':
        if (!template?.name || !template?.language) {
          return NextResponse.json(
            { error: 'Template name and language are required' },
            { status: 400 }
          )
        }
        messageData.template = template
        break

      case 'interactive':
        if (!interactive) {
          return NextResponse.json(
            { error: 'Interactive data is required' },
            { status: 400 }
          )
        }
        messageData.interactive = interactive
        break

      default:
        return NextResponse.json(
          { error: 'Invalid message type' },
          { status: 400 }
        )
    }

    const response = await fetch(
      `${WHATSAPP_API_URL}/${phoneNumberId}/messages`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageData),
      }
    )

    if (!response.ok) {
      const errorData = await response.json()
      console.error('WhatsApp API error:', errorData)
      return NextResponse.json(
        { error: 'Failed to send WhatsApp message', details: errorData },
        { status: response.status }
      )
    }

    const result = await response.json()
    return NextResponse.json(result)
  } catch (error) {
    console.error('Error sending WhatsApp message:', error)
    return NextResponse.json(
      { error: 'Failed to send WhatsApp message' },
      { status: 500 }
    )
  }
}
