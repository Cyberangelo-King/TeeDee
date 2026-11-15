# TeeDee Edge Automations LTD — Website

A presentation-ready company website built on Next.js 15, React 19 and TypeScript. The current deployment target is Netlify static hosting.

## Current application structure

- `app/` is the active Next.js App Router and contains the presentation website.
- `src/` contains the earlier multi-page implementation and reusable service content retained for future product work. It is not the active route tree while the root `app/` directory exists.
- `public/brand/` contains the supplied original logo/flyer and derived SVG brand assets.
- `public/images/` contains brand-aligned SVG service and industry illustrations.

Keep one Next.js config only: `next.config.ts`.

## Local development

Node.js 22 is recommended.

```bash
npm ci
npm run dev
```

## Build and deployment

```bash
npm run build
```

Next.js exports the static site to `out/`. Netlify publishes that directory using `netlify.toml`.

The project enquiry form uses Netlify Forms markup. It is processed only after the static site is deployed to Netlify and Netlify has detected the form. Configure form notifications in the Netlify project and submit a real test enquiry before presenting it as an operational lead channel.

## Presentation environment

Copy `.env.example` to `.env.local` for local work, or configure the values in Netlify:

- `NEXT_PUBLIC_SITE_URL`: canonical public URL.
- `NEXT_PUBLIC_INDEX_SITE=false`: keeps the presentation deployment out of search results. Change to `true` only after launch approval.
- `NEXT_PUBLIC_HERO_VIDEO_URL`: currently points to temporary Ucam reference footage for presentation use. It is not cleared for production use.

The video is muted, loops, and has a local SVG poster/fallback. It is disabled for reduced-motion visitors and on smaller screens to avoid unnecessary mobile data use.

## Before production launch

1. Replace the temporary Ucam footage with TeeDee-owned or properly licensed footage. Do not ship the reference video as a production asset without rights confirmation.
2. Set the canonical domain and `NEXT_PUBLIC_INDEX_SITE=true` after domain and launch approval.
3. Configure Netlify form notifications, spam protection and the team inbox; submit a test enquiry.
4. Review the privacy notice against the actual data-handling process and obtain appropriate legal review.
5. Confirm current phone, email, service scope, locations, operating hours and response expectations.
6. Replace vector service/industry illustrations with approved real project photography as it becomes available.
7. Add case studies, client logos, testimonials, certifications and performance claims only with evidence and written permission.

Do not add invented clients, projects, credentials, guarantees, response times or performance statistics.
