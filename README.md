# PropCopy AI

**Listing copy that closes. In 10 seconds.**

PropCopy AI is an AI-powered content generation platform built exclusively for real estate agents. Generate listing descriptions, social posts, buyer emails, neighborhood bios, open house announcements, and more — in 10 seconds.

## Tech Stack

- **Frontend**: Next.js 16 + Tailwind CSS
- **AI**: Anthropic Claude (`claude-sonnet-4-6`)
- **Database/Auth**: Supabase (PostgreSQL + Auth)
- **Payments**: Stripe (with 7-day free trials)
- **Hosting**: Vercel
- **State**: Zustand

## Features

### Landing Page
- Hero with live demo widget (try free without signup)
- Features section
- Pricing (Starter $29, Pro $59, Team $99)
- Testimonials & FAQ
- CTA with 7-day free trial

### Dashboard
- Usage meter (generations used / limit)
- 7-day streak tracker
- Quick action buttons
- Recent generations history
- Referral program

### Generate Content (6 tabs)
1. **Listing Descriptions** — Full (250w), Short (100w), Teaser (50w)
2. **Social Media Posts** — Instagram, Facebook, LinkedIn, X/Twitter
3. **Buyer Follow-up Emails** — With subject lines, 3 tone options
4. **Just Listed / Just Sold** — Social + email announcements
5. **Neighborhood Bios** — 2-paragraph rich descriptions
6. **Open House** — Social, email blast, and SMS

### My Library
- Grid view of all saved generations
- Filter by type, search
- Click to view, copy, delete
- Export as text

### Templates
- Pre-built templates by category (Luxury, Starter, Condos, Investment, Waterfront, Foreclosures)
- One-click fill the generator

### Account Settings
- Profile + headshot upload
- Subscription management with usage meter
- Billing history
- Agent Bio Builder (pre-populates all generations)
- Notification preferences
- Referral program

### Extra Features
- Tone memory (remembers preferred tone)
- Copy-to-clipboard toast notifications
- 3-step onboarding wizard
- Referral system ("Give 1 month, Get 1 month")
- Mobile responsive throughout

## Setup

1. Clone the repo
2. Copy `.env.example` to `.env.local` and fill in your keys
3. Run `npm install`
4. Run `npm run dev`

### Required Environment Variables

```bash
ANTHROPIC_API_KEY=                    # Anthropic Claude API key
NEXT_PUBLIC_SUPABASE_URL=             # Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=        # Supabase anon key
STRIPE_SECRET_KEY=                    # Stripe secret key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=   # Stripe publishable key
STRIPE_WEBHOOK_SECRET=                # Stripe webhook secret
```

## Color Palette

| Color | Hex |
|-------|-----|
| Deep Navy | `#0B1437` |
| Gold | `#C9A84C` |
| Gold Light | `#DFC06E` |
| White | `#FFFFFF` |
| Light Gray | `#F5F6FA` |

## Deploy to Vercel

Set all environment variables in Vercel dashboard, connect your GitHub repo, and deploy.

## Stripe Setup

1. Create products in Stripe dashboard: Starter ($29/mo), Pro ($59/mo), Team ($99/mo)
2. Add price IDs to environment variables
3. Webhook endpoint: `https://your-domain.com/api/stripe/webhook`
4. Webhook events: `checkout.session.completed`, `invoice.payment_succeeded`, `customer.subscription.deleted`, `customer.subscription.updated`
