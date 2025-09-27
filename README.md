# Marketplace Website

A modern, full-featured marketplace website built with Next.js, Supabase, Stripe, and WhatsApp Business integration. This platform supports multiple languages and provides a complete e-commerce solution with secure payments and instant communication.

## Features

### 🛒 Core Marketplace Features
- **Product Management**: Create, edit, and manage product listings
- **User Authentication**: Secure login/register with Supabase Auth
- **Shopping Cart**: Add products to cart and manage quantities
- **Order Management**: Track orders from purchase to delivery
- **Search & Filtering**: Find products quickly with advanced search
- **Categories**: Organize products by categories

### 💳 Payment Integration
- **Stripe Integration**: Secure payment processing
- **Multiple Payment Methods**: Credit cards, digital wallets
- **Payment Intent API**: Secure payment flow
- **Webhook Support**: Real-time payment status updates

### 💬 WhatsApp Business Integration
- **Instant Communication**: Contact sellers via WhatsApp
- **Order Notifications**: Automated order updates
- **Customer Support**: AI-powered responses
- **Product Inquiries**: Direct product questions to sellers

### 🌍 Multi-Language Support
- **10+ Languages**: English, Spanish, French, German, Italian, Portuguese, Arabic, Chinese, Japanese, Korean
- **Dynamic Language Switching**: Change language on the fly
- **Localized Content**: All UI elements translated

### 🔒 Security & Performance
- **Row Level Security**: Supabase RLS for data protection
- **Type Safety**: Full TypeScript implementation
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Next.js App Router with metadata

## Tech Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React Hook Form**: Form management with validation
- **Zod**: Schema validation
- **React i18next**: Internationalization

### Backend
- **Supabase**: Backend-as-a-Service
  - PostgreSQL database
  - Authentication
  - Real-time subscriptions
  - Row Level Security

### Payment & Communication
- **Stripe**: Payment processing
- **WhatsApp Business API**: Customer communication
- **Webhook handling**: Real-time updates

### UI Components
- **Heroicons**: Beautiful SVG icons
- **Headless UI**: Accessible components
- **Lucide React**: Additional icons

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account
- Stripe account
- WhatsApp Business API access

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd marketplace-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

   # Stripe Configuration
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

   # WhatsApp Business API
   WHATSAPP_ACCESS_TOKEN=your_whatsapp_access_token
   WHATSAPP_PHONE_NUMBER_ID=your_whatsapp_phone_number_id
   WHATSAPP_VERIFY_TOKEN=your_whatsapp_verify_token

   # App Configuration
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Set up Supabase Database**
   - Create a new Supabase project
   - Run the SQL schema from `supabase-schema.sql` in your Supabase SQL editor
   - Enable Row Level Security on all tables

5. **Set up Stripe**
   - Create a Stripe account
   - Get your publishable and secret keys
   - Set up webhooks for payment events

6. **Set up WhatsApp Business API**
   - Create a Meta Business account
   - Set up WhatsApp Business API
   - Get your access token and phone number ID
   - Configure webhook URL: `https://yourdomain.com/api/whatsapp/webhook`

7. **Run the development server**
   ```bash
   npm run dev
   ```

8. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
marketplace-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API routes
│   │   │   ├── payments/      # Stripe payment endpoints
│   │   │   └── whatsapp/      # WhatsApp webhook endpoints
│   │   ├── auth/              # Authentication pages
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── Auth/              # Authentication components
│   │   ├── Layout/            # Layout components
│   │   └── Products/          # Product-related components
│   ├── contexts/              # React contexts
│   ├── lib/                   # Utility libraries
│   │   ├── supabase.ts        # Supabase client
│   │   ├── auth.ts            # Authentication service
│   │   ├── stripe.ts          # Stripe integration
│   │   ├── whatsapp.ts        # WhatsApp integration
│   │   └── i18n.ts            # Internationalization
│   └── locales/               # Translation files
├── supabase-schema.sql        # Database schema
└── README.md
```

## API Endpoints

### Payment Endpoints
- `POST /api/payments/create-intent` - Create Stripe payment intent
- `POST /api/payments/confirm` - Confirm payment
- `GET /api/payments/methods` - Get saved payment methods
- `POST /api/payments/save-method` - Save payment method
- `DELETE /api/payments/delete-method` - Delete payment method

### WhatsApp Endpoints
- `POST /api/whatsapp/send-message` - Send WhatsApp message
- `GET /api/whatsapp/webhook` - Webhook verification
- `POST /api/whatsapp/webhook` - Webhook for incoming messages

## Database Schema

The database includes the following main tables:
- `users` - User profiles and authentication
- `categories` - Product categories
- `products` - Product listings
- `cart` - Shopping cart items
- `orders` - Order management
- `payments` - Payment records

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Other Platforms
- **Netlify**: Compatible with Next.js
- **Railway**: Full-stack deployment
- **DigitalOcean**: App Platform deployment

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key | Yes |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key | Yes |
| `STRIPE_SECRET_KEY` | Stripe secret key | Yes |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook secret | Yes |
| `WHATSAPP_ACCESS_TOKEN` | WhatsApp access token | Yes |
| `WHATSAPP_PHONE_NUMBER_ID` | WhatsApp phone number ID | Yes |
| `WHATSAPP_VERIFY_TOKEN` | WhatsApp webhook verify token | Yes |
| `NEXT_PUBLIC_APP_URL` | Application URL | Yes |

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@marketplace.com or join our Discord community.

## Roadmap

- [ ] Mobile app (React Native)
- [ ] Advanced analytics dashboard
- [ ] AI-powered product recommendations
- [ ] Multi-vendor marketplace features
- [ ] Advanced search with filters
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Social media integration
- [ ] Email notifications
- [ ] Advanced seller tools

---

Built with ❤️ using Next.js, Supabase, Stripe, and WhatsApp Business API