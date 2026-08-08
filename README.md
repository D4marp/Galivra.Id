# GALIVRA — Innovation Solutions

Marketing website for GALIVRA (Galivra Innovation Solutions), built with
Next.js App Router, TypeScript, Tailwind CSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/                 App Router entrypoints (layout, page, SEO routes)
  layout.tsx          Root layout — fonts, metadata, Open Graph/Twitter tags
  page.tsx             Homepage — assembles all sections
  globals.css          Design tokens, Tailwind layers, custom utilities
  robots.ts / sitemap.ts
  privacy-policy/ terms/  Placeholder legal pages
components/          Shared UI (Navbar, Footer, SectionHeading, ui/ primitives)
sections/            One component per homepage section
lib/
  data.ts             All site copy/content lives here — edit this file to
                       update services, portfolio items, pricing, nav links,
                       contact details, etc.
  utils.ts             `cn()` class-merging helper
public/
  logo.png             GALIVRA logo (background removed)
```

## Things to finish before launch

- **Portfolio** — `lib/data.ts` → `PORTFOLIO_ITEMS` currently holds
  placeholder projects. Replace with real case studies and add project
  images.
- **Contact form** — `sections/Contact.tsx` currently forwards submissions
  to WhatsApp via a `wa.me` link (pre-filled with the form details). Wire
  this up to a proper API route / email service / CRM if you want
  submissions to land somewhere other than WhatsApp.
- **Legal pages** — `app/privacy-policy` and `app/terms` are placeholders.
  Replace with real policy text.
- **Domain** — update `SITE_URL` in `app/layout.tsx` and the URLs in
  `app/robots.ts` / `app/sitemap.ts` once the production domain is live.
- **Social links** — `components/Footer.tsx` has placeholder `href="#"`
  for Instagram/LinkedIn — add the real profile URLs.
- **shadcn/ui** — the form fields and buttons in `components/ui/` are
  written in the shadcn/ui style (using `cn()` + Tailwind) but without the
  CLI scaffold, to keep dependencies minimal. Run `npx shadcn@latest init`
  if you want the full component library later.

## Design system

Color tokens, type scale and spacing live in `tailwind.config.ts`:

- Background: `#05070A` / `#080B10` / `#0B0F14`
- Accent: GALIVRA Blue `#3B82F6`, Bright Blue `#60A5FA`, Cyan `#22D3EE`
- Type: Inter (display/body) + JetBrains Mono (eyebrows, numbers, data
  labels) — loaded via `next/font` in `app/layout.tsx`
- Motion respects `prefers-reduced-motion` (see `app/globals.css`)

## Build

```bash
npm run build
npm run start
```
