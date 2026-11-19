# NEXFLOW AI

Next-generation AI Business Automation SaaS for Indian small and growing businesses.

## Current MVP

This repository includes a responsive static business command center with:
- Lead CRM: create, edit, search, filter and delete leads.
- Pipeline dashboard and analytics.
- Workflow configuration prototypes for enquiry response, follow-up, customer welcome and daily summaries.
- Business message drafting templates.
- Indicative subscription plan UI.
- Browser-local persistence for demo records.

## Run locally

Open `index.html` in a browser, or serve the repository root with a static web server. No build command or dependencies are required for this MVP.

## Deploy on Vercel

Import this repository into Vercel. Use the repository root as the output directory and leave the build command empty. `vercel.json` is included.

## Important limitations

- Demo records are stored only in the current browser. There is no authentication, multi-user database or cross-device sync.
- Workflow toggles are prototypes; they do not send messages or run background jobs.
- Message drafts use local templates, not a live AI model.
- Pricing is illustrative; payment checkout and subscriptions are not connected.
- Do not enter real customer personal data until authentication, server-side authorization, database storage, backups and privacy controls are implemented.

## Production roadmap

1. Supabase Auth, tenant-isolated PostgreSQL schema and Row Level Security.
2. Server-side OpenAI integration with usage limits and audit logs.
3. Real workflow execution, scheduling, retries and consent-aware notifications.
4. WhatsApp Business Platform integration using approved templates and opt-in.
5. Razorpay subscriptions, webhook verification and plan entitlements.
6. Automated tests, monitoring, export/deletion and security review.

## Security

No secrets are required for this static MVP. Never commit API keys or environment files.

## License

MIT
