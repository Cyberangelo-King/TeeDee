# SEO, Accessibility, Performance and QA Plan

## SEO checklist
- Unique page title and meta description.
- Canonical URL.
- Open Graph title, description and image.
- Twitter/X card.
- sitemap.xml.
- robots.txt.
- descriptive slugs.
- one clear H1 per page.
- logical H2/H3 hierarchy.
- internal links between related services.
- descriptive image alt text.
- structured data only for verified business facts.
- no invented location/address/hours/reviews.
- no keyword stuffing.
- pages should be indexable and render meaningful content without client-side animation.

## Local SEO
Only configure LocalBusiness schema and local landing copy once the exact business address/service area and official contact details are confirmed. Never infer an address from the user's location.

## Accessibility
Target WCAG 2.2 AA:
- keyboard-only operation;
- focus visible;
- semantic landmarks;
- labels and error messages;
- colour contrast;
- meaningful alt text;
- reduced-motion mode;
- no autoplay audio;
- controls with accessible names;
- carousel controls and pause behaviour;
- mobile touch targets;
- heading order;
- no information communicated only by colour or animation.

## Performance checklist
- hero poster is optimised and loads quickly;
- video is muted, compressed and does not block text;
- no unneeded preloader;
- responsive image sizes;
- lazy-load below-fold images;
- avoid unnecessary JS;
- dynamic import for heavy motion where suitable;
- limit font weights;
- reserve media dimensions;
- test real mobile network behaviour;
- record Lighthouse reports and Core Web Vitals where available.

## QA test matrix
| Area | Test |
|---|---|
| Navigation | desktop dropdown, mobile menu, keyboard, escape/close |
| Hero | video, poster fallback, reduced motion, mobile crop |
| Layout | 360, 390, 768, 1024, 1440, 1920 px |
| Services | cards, detail routes, related links |
| Forms | required fields, invalid email, no contact method, success/error |
| CTA | all links and contact methods point to verified destinations |
| Motion | reduced motion, no scroll hijack, no jank |
| Accessibility | keyboard, focus, labels, contrast, alt |
| SEO | titles, descriptions, canonical, OG, sitemap, robots |
| Media | no broken assets, licensed/approved sources |
| Build | lint, typecheck, production build |
| Browser | Chrome, Edge, Firefox, Safari; mobile Safari/Chrome |
| Security | no secrets in repo, no sensitive project details |

## Definition of ready for CEO presentation
- A complete, coherent visual experience.
- No lorem ipsum or generic placeholder copy in visible areas.
- All unverified facts are removed or explicitly withheld.
- Main contact action works.
- No fake testimonials or fake projects.
- All important pages exist.
- Desktop and mobile are both polished.
- Motion is purposeful and not excessive.
- A concise presentation walkthrough is prepared.
