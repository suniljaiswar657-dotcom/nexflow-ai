# NEXFLOW AI

Next-generation AI Business Automation SaaS for Indian small and growing businesses.

NEXFLOW brings lead management, sales assistance, customer engagement and repeatable business workflows into one workspace.

## V1 product direction

- AI Command Center
- Lead Management CRM
- AI Sales Assistant
- WhatsApp Automation
- Automated Follow-up Engine
- Monthly Subscription System

## Current build status

The repository currently contains the first responsive Next.js frontend foundation and a Command Center preview. The lead records and activity feed shown in the preview are **demo data**, not live customer records. Authentication, database persistence, OpenAI-powered actions, WhatsApp provider integration, billing and production automation are not connected yet.

## Technology

- Next.js 14 + React + TypeScript
- Tailwind CSS
- Supabase (planned for authentication and database)
- OpenAI API (planned for AI features)
- WhatsApp Business Platform/provider (planned)
- Razorpay (planned for subscriptions)
- Vercel (deployment target)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Environment variables

Add secrets only in your deployment provider's environment settings. Never commit API keys.

Planned variables:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (server only)
- `OPENAI_API_KEY` (server only)
- Razorpay server credentials (when billing is implemented)

## Build

```bash
npm run build
```

## Delivery sequence

Build → Test → Fix → Verify → Deploy → First Customer.
