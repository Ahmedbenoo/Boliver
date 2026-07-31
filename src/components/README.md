# Component Architecture

This directory contains all UI components organized by responsibility.

## Structure

```
components/
├── ui/           # shadcn/ui primitives (Button, Accordion, Input, etc.)
├── layout/       # Header, Footer, SectionWrapper, PageHeader
├── shared/       # Reusable animated & visual components
├── sections/     # Homepage & page section components
├── forms/        # Form-specific client components
└── providers/    # Context providers (Motion, Loading, Theme)
```

## Conventions

- **Server Components** by default — add `"use client"` only when needed
- Section components accept typed `data` props from `@/types`
- Use `@/lib/data/*` for static fallbacks, `@/lib/supabase/queries/*` in pages
- Animations via Framer Motion — import variants from `@/lib/animations/variants`

## Phase Status

| Folder | Status |
|--------|--------|
| ui/ | ✅ Complete |
| layout/ | ✅ Complete |
| shared/ | ✅ Complete |
| sections/ | ✅ Complete |
| forms/ | ✅ Complete |
| providers/ | ✅ Complete |
