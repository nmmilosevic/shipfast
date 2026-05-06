# ShipFast Studio

ShipFast Studio is a production-ready Next.js 15 lead generation site for a premium micro-SaaS studio. The positioning is simple: we make your idea come to life.

## Stack

- Next.js 15 App Router
- TypeScript strict mode
- Tailwind CSS v4
- shadcn/ui new-york style primitives
- Lucide React
- React Hook Form
- Zod
- Supabase
- native `fetch`
- `next/font` with DM Sans

## Install

```bash
npm install
```

## Environment

Create `.env.local` from `.env.local.example`:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

## Supabase Setup

Create a Supabase project, copy the project URL, anon key, and service role key into `.env.local`, then run the SQL migration in `supabase/migrations/001_create_leads.sql`.

The migration creates a `public.leads` table with row level security enabled. The API route writes with the service role key, so the key must only be used server-side.

## Local Development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Vercel Deploy

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Add the three Supabase environment variables.
4. Deploy.

## Where To Edit Content

- Homepage sections: `components/hero.tsx`, `components/how-it-works.tsx`, `components/built-for.tsx`, `components/what-we-build-preview.tsx`, `components/examples-preview.tsx`, `components/pricing-preview.tsx`, `components/cta.tsx`
- Pages: `app/*/page.tsx`
- Contact validation: `lib/validations.ts`
- Contact API: `app/api/contact/route.ts`
- Design tokens: `app/globals.css`
