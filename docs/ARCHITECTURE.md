# Boliveer — Project Architecture

Premium software agency website built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and Supabase.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI | shadcn/ui + Lucide Icons |
| Animation | Framer Motion |
| CMS | Supabase (PostgreSQL) |
| Validation | Zod |

## Folder Structure

```
src/
├── app/                    # Next.js routes & API
│   ├── (marketing)/        # Public pages with shared layout
│   ├── api/                # Contact, consultation, revalidation
│   ├── layout.tsx          # Root layout + fonts + JSON-LD
│   ├── page.tsx            # Landing page
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── ui/                 # shadcn/ui primitives
│   ├── layout/             # Header, Footer, SectionWrapper
│   ├── shared/             # Animated & reusable UI
│   ├── sections/           # Homepage sections
│   ├── forms/              # Form components
│   └── providers/          # Motion, Loading providers
├── lib/
│   ├── constants/          # Site config, routes, navigation
│   ├── data/               # Static fallback content
│   ├── supabase/           # Client, server, queries
│   ├── seo/                # Metadata & JSON-LD helpers
│   ├── animations/         # Framer Motion variants
│   └── validations/        # Zod schemas
├── types/                  # TypeScript interfaces
└── hooks/                  # Custom React hooks
```

## Data Flow

```
Page (Server Component)
  └── lib/supabase/queries/*.ts
        ├── Supabase (production)
        └── lib/data/*.ts (fallback)
              └── Typed via src/types/content.ts
```

Every section component receives typed `data` props. Static files in `lib/data/` serve as development fallbacks. When Supabase env vars are set, queries fetch live CMS content.

## CMS Tables

See `supabase/migrations/001_initial_schema.sql` for the full schema:

- `site_settings`, `hero_section`, `clients`, `services`
- `process_steps`, `portfolio_projects`, `why_features`
- `technologies`, `testimonials`, `pricing_plans`, `faqs`
- `blog_posts`, `team_members`, `career_positions`
- `contact_submissions`, `consultation_requests`

## SEO

- Per-page metadata via `createPageMetadata()`
- JSON-LD: Organization, WebSite, FAQ, Article, Breadcrumb
- Auto-generated `sitemap.xml` and `robots.txt`

## Development Phases

| Phase | Scope | Status |
|-------|-------|--------|
| 1 | Architecture & scaffolding | ✅ Complete |
| 2 | Design system & layout | ✅ Complete |
| 3 | Landing page sections | ✅ Complete |
| 4 | Remaining pages | ✅ Complete |
| 5 | Performance, SEO, a11y | ✅ Complete |

## Getting Started

```bash
cp .env.local.example .env.local
npm install
npm run dev
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Production site URL |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-side admin key |
| `REVALIDATE_SECRET` | On-demand ISR webhook secret |
