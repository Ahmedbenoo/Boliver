# CMS Schema Reference

Maps Supabase tables to TypeScript interfaces in `src/types/content.ts`.

| Table | TypeScript Interface | Data File |
|-------|---------------------|-----------|
| `hero_section` | `HeroContent` | `lib/data/hero.ts` |
| `clients` | `ClientLogo[]` | `lib/data/clients.ts` |
| `services` | `Service[]` | `lib/data/services.ts` |
| `process_steps` | `ProcessStep[]` | `lib/data/process.ts` |
| `portfolio_projects` | `PortfolioProject[]` | `lib/data/portfolio.ts` |
| `why_features` | `WhyFeature[]` | `lib/data/why-boliveer.ts` |
| `technologies` | `Technology[]` | `lib/data/technologies.ts` |
| `testimonials` | `Testimonial[]` | `lib/data/testimonials.ts` |
| `pricing_plans` | `PricingPlan[]` | `lib/data/pricing.ts` |
| `faqs` | `FaqItem[]` | `lib/data/faqs.ts` |
| `blog_posts` | `BlogPost` | `lib/data/blog.ts` |
| `team_members` | `TeamMember[]` | `lib/data/team.ts` |
| `career_positions` | `CareerPosition[]` | `lib/data/careers.ts` |
| `site_settings` | `SiteSettings` | `lib/constants/site.ts` |

## Admin Dashboard Integration

Each table includes:
- `is_published` — controls public visibility
- `sort_order` — controls display order
- `created_at` / `updated_at` — audit timestamps

Form submissions go to:
- `contact_submissions`
- `consultation_requests`

## Revalidation

When content is updated in Supabase, trigger on-demand revalidation:

```bash
curl -X POST https://your-site.com/api/revalidate \
  -H "x-revalidate-secret: YOUR_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"path": "/"}'
```
