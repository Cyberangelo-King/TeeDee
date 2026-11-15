# TeeDee Edge Automations LTD — Antigravity Build Pack

**Version:** 1.0  
**Prepared:** 15 November 2026  
**Purpose:** A complete handoff package for building the TeeDee Edge Automations website in Google Antigravity, then transferring the repository to GitHub for continued development.

## Read this first

This pack is the project source of truth for the first Antigravity build. It contains the product brief, PRD, TRD, information architecture, design system, content strategy, motion/asset production brief, SEO/accessibility/performance requirements, QA plan, deployment instructions and staged Antigravity prompts.

### Non-negotiable project direction

- Reference: Ucam WordPress theme, Home 3: https://reactheme.com/products/wordpress/ucam/home-3/
- Visual preference: the **video-background hero variation**. Confirm the exact demo variant in the browser before implementation.
- Goal: faithfully recreate the reference's broad visual structure, image-led composition, transitions, animation language and page rhythm, but with TeeDee's own identity, content, imagery and UX.
- Brand idea: **Secure. Power. Automate.**
- Existing supplied TeeDee logo and company flyer are source materials. Preserve the recognised logo. Do not invent a replacement identity.
- The website should elevate the reference with intentional micro-interactions, Lottie animations, custom motion assets and well-produced video, without becoming noisy or slow.
- Build for desktop, tablet and mobile. Mobile is a designed experience, not a compressed desktop.
- The result must be credible enough for a CEO presentation and structured for production hardening.

## Existing brand direction to preserve

The current proposed brand system describes TeeDee as a practical systems partner for safer, powered and better-connected spaces.

**Brand character:** capable, precise, assured, accessible.

**Palette:**
- Signal Red: `#B32632`
- Signal Orange: `#E57A2F`
- Graphite: `#17191D`
- Warm Paper: `#F4F2ED`
- White: `#FFFFFF`
- Technical Slate: use the existing design-system token if present; otherwise derive a neutral slate scale and document it.

**Typography direction:** Manrope for display/headings, Inter for body/UI, IBM Plex Mono for technical labels/eyebrows. Confirm against the supplied design-system source before locking font files.

**Photography principles:** prefer real installations, equipment in context, technicians at work, site context and finished environments. Natural grading. No fake project claims, unsafe practices, generic hacker imagery or fabricated control rooms.

**Verbal identity:** practical, precise, calm, human. Explain technical value without empty jargon or fear marketing. Never promise “100% impenetrable security” or “zero downtime”.

## Asset intake checklist

Before Antigravity starts building, create this folder structure in the repository and place the already-supplied original assets into it:

```text
public/
  brand/
    teedee-logo-original.[original-extension]
    teedee-flyer-original.[original-extension]
    logo-primary.svg                 # only if an approved/vector source exists
    logo-light.svg                   # approved derivative, if needed
    logo-dark.svg                    # approved derivative, if needed
    favicon.svg
  video/
    hero-desktop.mp4
    hero-desktop.webm
    hero-mobile.mp4                  # optional, ideally shorter/lighter
    poster-hero.webp
  images/
    services/
    industries/
    projects/
    team/
    og/
  motion/
    lottie/
    gifs/
    webp/
```

Do not fabricate a vector logo by tracing a low-quality raster without approval. If only a raster logo exists, use it faithfully and record the need for an approved vector master.

## How to use this pack

1. Create a new project in Google Antigravity.
2. Add the original logo and flyer to `public/brand/` without modifying them.
3. Add this entire pack to the project root, preserving filenames.
4. Add the Ucam reference URL and ask Antigravity to inspect it visually.
5. Run prompts in `prompts/` in order. Do not paste every prompt at once.
6. Require Antigravity to maintain `docs/BUILD_LOG.md`, `docs/DECISIONS.md` and `docs/OPEN_QUESTIONS.md`.
7. Review the generated design and functionality before allowing the next phase.
8. Push the completed repository to GitHub.
9. Share the GitHub repository and any deployment/preview URL for continuation, review and hardening.

## Critical truth and approval rules

The supplied flyer and brand documentation are the starting evidence. If an item is unclear, record it as **Needs company confirmation**. Never invent:
- phone numbers, email addresses, office addresses or social links;
- certifications, registrations, years of experience or staff credentials;
- customer names, testimonials, partner logos or project case studies;
- statistics, installation counts, response times or warranties;
- exact service scope, product brands or maintenance terms.

The services currently named in the brand guidelines are: electronic security, CCTV, solar and inverter installation, electrical work, access control, networking, smart locks, building automation and technical training. The flyer is the authoritative cross-check for the actual current offer. Do not silently add a service just because it is adjacent to the category.

## What “done” means

A complete first build has:
- a consistent brand system;
- a cinematic but performant hero;
- all agreed pages and responsive states;
- meaningful, working interactions;
- accurate company content with all unknowns flagged;
- original or licensed media assets;
- SEO and social metadata;
- accessible keyboard and reduced-motion behaviour;
- no broken links, empty buttons, console errors or fake forms;
- documented setup, build and deployment steps;
- a GitHub repository that another developer can run.
