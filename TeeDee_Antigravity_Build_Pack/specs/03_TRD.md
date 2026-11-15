# Technical Requirements Document (TRD)

**Version:** 1.0  
**Target build environment:** Google Antigravity  
**Repository handoff:** GitHub  
**Architecture preference:** Next.js + React + TypeScript

## 1. Technical objectives
Build a maintainable, fast, accessible marketing website with strong motion design, reusable components and a clean content model. The site must be easy to review and continue in a GitHub repository.

## 2. Proposed stack
- Next.js (App Router; current stable version supported by Antigravity environment)
- React
- TypeScript with strict mode
- Tailwind CSS or CSS Modules/design tokens; choose one primary styling system and avoid competing styling approaches
- Framer Motion for component-level transitions and micro-interactions
- GSAP + ScrollTrigger only for complex scroll choreography that CSS/Framer Motion cannot handle cleanly
- Lottie via a maintained React player for selected vector animations
- Native HTML video for hero/background video
- `next/image` for responsive image optimisation
- Zod for form/schema validation if needed
- React Hook Form only if form complexity justifies it
- Lucide icons or a consistent custom SVG icon set
- Vercel or Netlify deployment, subject to project/account choice

Do not add libraries simply because they are fashionable. Explain the reason for each nontrivial dependency.

## 3. Architecture
Use a component-driven, route-based architecture.

Suggested structure:

```text
teedee-edge-website/
├── public/
│   ├── brand/
│   ├── video/
│   ├── images/
│   │   ├── services/
│   │   ├── industries/
│   │   ├── projects/
│   │   └── og/
│   ├── motion/
│   │   ├── lottie/
│   │   ├── gifs/
│   │   └── webp/
│   └── fonts/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── services/[slug]/page.tsx
│   │   ├── industries/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── projects/[slug]/page.tsx
│   │   ├── insights/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── privacy/page.tsx
│   │   ├── not-found.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── sections/
│   │   ├── services/
│   │   ├── motion/
│   │   ├── forms/
│   │   └── ui/
│   ├── content/
│   │   ├── site.ts
│   │   ├── services.ts
│   │   ├── industries.ts
│   │   ├── projects.ts
│   │   ├── faqs.ts
│   │   └── navigation.ts
│   ├── lib/
│   │   ├── metadata.ts
│   │   ├── analytics.ts
│   │   ├── validation.ts
│   │   └── utils.ts
│   └── types/
├── docs/
│   ├── BUILD_LOG.md
│   ├── DECISIONS.md
│   ├── OPEN_QUESTIONS.md
│   └── ASSET_REGISTER.md
├── .env.example
├── README.md
├── package.json
└── ...
```

Antigravity may adjust the structure if it has a strong technical reason. It must document deviations.

## 4. Rendering and data
- Prefer server components for static content and SEO.
- Use client components only where interaction or browser APIs are needed.
- Keep content data separate from presentation.
- Avoid unnecessary client-side global state.
- Use static generation for known service and content pages where possible.
- Use metadata API for page-specific SEO.
- Add Open Graph and Twitter/X metadata.
- Use semantic HTML and meaningful landmarks.

## 5. Video requirements
Hero video:
- MP4 H.264 baseline-compatible fallback; WebM may be provided for smaller modern-browser delivery.
- Muted, autoplay, loop, playsInline.
- No audio track required.
- Include `poster`.
- Do not load a massive original file unoptimised.
- Use a compressed desktop video and a smaller mobile crop/asset if justified.
- Target initial video payload as low as practical; measure actual file and network impact.
- If `prefers-reduced-motion: reduce`, use poster image or a still frame rather than autoplaying moving video.
- If save-data or constrained connection can be detected reliably, prefer poster/static media.
- Text and CTA must render independently of video readiness.

## 6. Image requirements
- Use AVIF/WebP where supported and retain appropriate fallback.
- Supply accurate width/height or aspect ratio to prevent layout shift.
- Use `sizes` and responsive sources.
- Lazy-load below-the-fold images.
- Do not lazy-load the primary hero poster/LCP image.
- Use descriptive alt text for meaningful images; empty alt for decorative imagery.
- Use consistent crop rules per image collection.

## 7. Motion requirements
- Define shared motion tokens: duration, easing, distance, stagger and reduced-motion behaviour.
- Prefer transform and opacity; avoid animating layout properties on every frame.
- Avoid scroll hijacking.
- Avoid scroll effects that block reading or make content inaccessible.
- Use GSAP only for complex pinned/sequence effects; clean up ScrollTriggers on unmount.
- Framer Motion for component-level reveal, hover and route transitions.
- Lottie only where vector animation adds explanatory or brand value.
- GIFs are not the default for complex motion because they can be large and have limited colour/alpha efficiency; prefer MP4/WebM or Lottie when appropriate.
- Every motion effect must have a static fallback.
- Do not animate all cards simultaneously if it harms performance or attention.

## 8. Accessibility
Target WCAG 2.2 AA as the project goal:
- semantic headings and landmarks;
- keyboard-accessible navigation and controls;
- visible focus indicator;
- accessible labels and error messages;
- sufficient contrast;
- no colour-only meaning;
- text alternatives for meaningful imagery;
- reduced-motion support;
- no autoplay audio;
- pause/stop mechanism for nonessential persistent motion if required;
- carousels must be keyboard operable and not auto-advance aggressively;
- mobile touch targets should be comfortably usable.

## 9. Performance
Set practical performance budgets and measure with Lighthouse/PageSpeed after build:
- aim for strong Core Web Vitals, especially LCP, INP and CLS;
- avoid shipping unnecessary JavaScript;
- code-split heavy animation features;
- lazy-load below-fold video and heavy interactive modules;
- compress images/video;
- preload only critical fonts/assets;
- use font-display swap or an equivalent non-blocking approach;
- avoid layout shifts from media and fonts;
- do not allow the hero video to delay the headline/CTA.

Record actual Lighthouse results; do not claim a score without measurement.

## 10. Forms and backend
Release one can use:
- a server action/API route connected to an approved email/form provider; or
- a trusted hosted form endpoint; or
- a temporary form UI clearly marked as not production-connected, with verified direct contact fallback.

Do not store sensitive data unnecessarily. Validate and sanitize input server-side. Add spam protection appropriate to the chosen provider. Keep secrets in environment variables. Never commit API keys.

Required environment documentation:
```env
# Example only. Populate with approved provider values.
CONTACT_FORM_ENDPOINT=
CONTACT_EMAIL_TO=
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_ANALYTICS_ID=
```
Do not expose private credentials in `NEXT_PUBLIC_` variables.

## 11. SEO and discoverability
- unique title and description per page;
- canonical URLs;
- Open Graph image;
- Twitter/X card metadata;
- sitemap.xml;
- robots.txt;
- structured data only for facts that are true and verified;
- Organization/LocalBusiness schema only after legal name, address and contact details are confirmed;
- Service schema only for real services;
- descriptive URL slugs;
- internal links;
- meaningful heading hierarchy;
- alt text;
- no keyword stuffing.

## 12. Security and privacy
- HTTPS on production host;
- secure headers where supported;
- no secrets in source control;
- input validation and spam mitigation;
- privacy notice reviewed by company;
- consent and analytics configuration appropriate to applicable law;
- no publication of client site plans, camera feeds, credentials or sensitive building details;
- dependency updates and lockfile committed.

## 13. Browser support
Support current stable Chrome, Edge, Firefox and Safari, plus mobile Safari and Chrome. Gracefully degrade motion and video on older or constrained devices.

## 14. Testing
- TypeScript checks;
- lint;
- production build;
- unit tests for utility/validation logic where appropriate;
- route smoke tests;
- form validation tests;
- keyboard navigation;
- reduced-motion test;
- mobile responsive checks;
- cross-browser checks;
- broken link and asset checks;
- Lighthouse performance/accessibility/SEO checks.

## 15. GitHub handoff
- Commit source code, lockfile, README, docs and public assets that are licensed/owned.
- Do not commit `.env` or private credentials.
- Use descriptive commits.
- Provide `.env.example`.
- Include local setup, build and deployment commands.
- Keep `main` stable; use feature branches if work is ongoing.
- Add screenshots or short screen recordings to the repository README or `docs/`.
