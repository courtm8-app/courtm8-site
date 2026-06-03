<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Courtm8 site — agent guide

Official marketing landing page for **Courtm8**: a single-page waitlist site for court availability, booking, and analytics aimed at schools and athletic communities.

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript |
| UI | React 19, shadcn/ui (`radix-nova` style) |
| Styling | Tailwind CSS v4 (`@import "tailwindcss"`), `tw-animate-css` |
| Icons | lucide-react |
| Fonts | Geist Sans + Geist Mono (via `next/font/google`) |
| Deploy | Vercel (auto-detected Next.js project) |

## Repository layout

```
app/
  layout.tsx          # Root layout, fonts, metadata, viewport
  page.tsx            # Landing page (only route)
  globals.css         # Theme tokens, base styles, landing-page utilities
  api/waitlist/route.ts
components/
  logo.tsx            # Responsive logo (lockup vs icon)
  waitlist-form.tsx   # Client-side email form
  landing-background.tsx
  feature-highlights.tsx
  ui/                 # shadcn primitives (button, input)
lib/utils.ts          # cn() helper
public/
  logo-lockup.svg     # Desktop wordmark
  logo-icon.svg       # Mobile icon + background watermark
data/                 # Local waitlist storage (dev only; gitignored JSON)
```

## Design system

- **Palette:** Strict black-and-white. No color accents unless explicitly requested.
- **CSS variables** live in `app/globals.css` (`:root` + `@theme inline` for Tailwind v4).
- **Typography:** Fluid sizing via `clamp()` and viewport units — avoid fixed breakpoint-only headline sizes.
- **Layout:** Full-viewport shell (`min-h-dvh`), not a centered narrow column. Content is left-aligned with viewport-scaled padding and safe-area insets.
- **Visual language:** Court-inspired grid background, subtle glow, frosted cards, numbered feature tiles. Keep decoration minimal and monochrome.

### Responsive conventions

- Horizontal padding: `pl/pr-[max(clamp(1.25rem,5vw,4rem),env(safe-area-inset-*))]`
- Vertical spacing: `clamp()` and `vh`-based gaps
- Short viewports: `[@media(max-height:32rem)]:` overrides for tighter spacing
- Form: stacked on mobile, row from `sm:` up; full-width button on mobile

## Key components

### `app/page.tsx`

Single landing route. Structure:

1. `LandingBackground` — grid, glow, watermark logo
2. Header with `Logo`
3. Hero (eyebrow pill, headline, subcopy)
4. `FeatureHighlights` — three value-prop cards
5. Waitlist card wrapping `WaitlistForm`
6. Footer tagline

Uses staggered `animate-in` entrance animations.

### `components/waitlist-form.tsx`

Client component. Posts `{ email }` to `POST /api/waitlist`. States: idle, submitting, success, error. Helper copy lives in the page card, not the form.

### `app/api/waitlist/route.ts`

- Validates email with regex
- Logs every submission (`console.log`)
- In **development**, appends to `data/waitlist.json` (gitignored)
- Production: logs only (Vercel filesystem is ephemeral) — wire a DB before relying on persistence

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
npm run lint
```

## Assets

Replace placeholder SVGs in `public/` when brand assets are ready (keep filenames):

- `logo-lockup.svg` — shown `md+`
- `logo-icon.svg` — shown below `md`, also used as page watermark

Favicon: `app/favicon.ico`

## What not to do

- Do not commit `.env*`, `data/waitlist.json`, or `.next/`
- Do not introduce a database or auth unless asked — waitlist is log/file only today
- Do not revert to a centered `max-w-lg` column layout; the page should fill the viewport
- Do not add color outside the monochrome palette without explicit approval
- Read Next.js 16 docs in `node_modules/next/dist/docs/` before changing routing, caching, or metadata APIs

## Deployment

Push to GitHub → import on Vercel. Build command: `next build`. No required env vars. `main` → production; other branches → preview URLs.
