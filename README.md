# Courtm8 site

Official landing page for Courtm8 — a single black-and-white waitlist page built with [Next.js](https://nextjs.org/) (App Router), TypeScript, Tailwind CSS v4, and [shadcn/ui](https://ui.shadcn.com/).

## Local development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Useful scripts:

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run lint` | Lint with ESLint |

## Waitlist endpoint

The form posts JSON `{ email }` to `POST /api/waitlist` ([app/api/waitlist/route.ts](app/api/waitlist/route.ts)).

- Every submission is logged via `console.log` (visible in `npm run dev` and in Vercel function logs).
- In development, submissions are also appended to `data/waitlist.json` for easy inspection. That file is gitignored.
- Serverless filesystems on Vercel are ephemeral, so production submissions live only in logs until a real database is wired up.

## Logo assets

The page references two SVGs under `public/`:

- `public/logo-lockup.svg` — icon + wordmark, shown on desktop
- `public/logo-icon.svg` — icon only, shown on mobile

Placeholder versions ship with the repo. Replace them with the real brand assets when ready (same filenames). The favicon is served from `app/favicon.ico` — swap it for a transparent export of the icon-only logo when convenient.

## Deployment

The project is ready to deploy on Vercel:

1. Push the repo to GitHub.
2. In the [Vercel dashboard](https://vercel.com/new), import the `courtm8-site` repository.
3. Accept the auto-detected Next.js settings (build command `next build`, no env vars required).
4. The `main` branch auto-deploys to production; every other branch gets a preview URL.
