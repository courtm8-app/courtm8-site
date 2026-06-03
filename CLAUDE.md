@AGENTS.md

# Claude notes for Courtm8 site

This repo is a **single-page waitlist landing site** — not a multi-route app. Most work happens in `app/page.tsx`, `app/globals.css`, and `components/`.

## Current state (June 2026)

- One route: `/` with full-viewport responsive layout
- Waitlist form → `POST /api/waitlist` (logs + local JSON in dev)
- Monochrome brand; court-grid background and feature highlight cards
- Next.js **16.2.7**, Tailwind **v4**, shadcn **radix-nova**
- Placeholder logos in `public/`; swap for final brand assets when ready

## When editing UI

1. Preserve full-page layout (`min-h-dvh`, fluid `clamp()` typography, safe-area padding)
2. Keep the black-and-white palette
3. Match existing animation pattern (`animate-in fade-in slide-in-from-bottom-2` with staggered delays)
4. Put marketing copy in `page.tsx`; keep `WaitlistForm` focused on form behavior
5. Run `npm run build` after substantive changes

## When editing docs

`AGENTS.md` is the canonical project guide. Update it when stack, structure, or conventions change. This file should stay short and point to `AGENTS.md` for details.
