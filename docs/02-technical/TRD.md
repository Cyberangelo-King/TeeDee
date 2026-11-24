# Technical Requirements Document — Website and CMS

**Version:** 0.1 | **Date:** 24 November 2026 | **Status:** Proposed technical baseline

## 1. Purpose

Define the technical qualities, constraints and verification expectations for the public website and its custom CMS. This TRD records the existing implementation and the intended direction while leaving provider-specific details open until they are tested and approved.

## 2. Existing implementation baseline

The current main branch contains:

- Next.js 15.5.x, React 19.1.x and TypeScript.
- Tailwind CSS 3.4.x, Framer Motion 12.x and Lucide React.
- Next.js App Router structure under src/app.
- Reusable components under src/components.
- Local typed content modules under src/content.
- A static export setting in next.config.ts (output: export).
- Netlify configuration that builds with npm run build and publishes out.
- NETLIFY_NEXT_PLUGIN_SKIP=true, consistent with the current static-only configuration.
- Node.js 22 in Netlify configuration and GitHub Actions.
- A GitHub Actions workflow that installs dependencies and runs the production build.
- Existing local site metadata, sitemap and robots handling.

These are observed repository facts as of 24 November 2026. They are not a recommendation to freeze every dependency or preserve the current static architecture unchanged.

## 3. Target technical qualities

- Typed, modular, maintainable code.
- Server-rendered or statically generated public content where appropriate for discoverability.
- A secure authenticated CMS isolated from public visitor capabilities.
- Structured content separated from UI components.
- Explicit domain and data-access boundaries.
- Predictable publishing and rollback behaviour.
- Validated inputs on both client and server.
- Database constraints and migrations if a database is introduced.
- Least-privilege access to data and infrastructure.
- Reproducible builds, automated checks and documented deployment.
- No secrets in source control or public browser bundles.
- Reasonable performance on mobile networks and mid-range devices.

## 4. Proposed stack — not all choices approved

| Layer | Current / candidate | Decision state |
|---|---|---|
| Public and CMS application | Next.js App Router + React + TypeScript | Existing base; keep unless audit proves otherwise |
| Styling | Tailwind for utility/layout plus custom CSS or CSS Modules for visual craft | Proposed |
| Interaction | Framer Motion / Motion; GSAP only for justified complex sequences | Existing Framer Motion; selective use |
| 3D | Three.js / React Three Fiber only where it materially improves explanation or brand experience | Optional; not a default |
| Database | PostgreSQL, with Supabase as a managed candidate | Pending cost, region, ownership and architecture approval |
| Authentication | Supabase Auth or an approved alternative | Pending provider decision |
| Media storage | Managed object storage, potentially Supabase Storage | Pending |
| Hosting | Existing Netlify project/configuration | Existing candidate; test CMS compatibility |
| Source control | GitHub | Existing personal-account repo; target company-owned organisation |
| Domain/DNS | Company-selected registrar; Cloudflare DNS is a candidate | Pending domain and account owner |
| Analytics | Privacy-reviewed analytics / Search Console / Bing Webmaster Tools | Pending approval |

Library choices must be based on use cases and compatibility. Do not add dependencies merely because they are popular.

## 5. Critical architecture constraint: current static export

The current Next.js application exports static files. Its configuration disables the normal Next.js server output and Netlify configuration publishes the out directory.

A production CMS introduces authentication, protected mutations, dynamic content, media management and a publishing mechanism. Therefore, before building CMS features, the team must decide how published data reaches the public site and how CMS operations are served.

Viable patterns to evaluate include:

1. **Dynamic Next.js on Netlify:** use the supported Next.js runtime/adapter capabilities for authenticated routes, server-side data access and suitable revalidation.
2. **Static public site plus managed backend:** the public site remains static or hybrid, while a secure backend handles CMS writes and publication; public content must still be delivered in a way that preserves crawlable, current page content.
3. **Another hosting arrangement:** only if compatibility, cost or required capabilities make the existing Netlify setup unsuitable.

Do not simply remove output: export or disable the Netlify plugin skip without testing build, routing, forms, caching and deployment behaviour. Record the decision in an ADR and verify a small proof of concept before committing the full CMS architecture.

## 6. Application architecture

- Prefer server components for public content and data that should be rendered on the server.
- Use client components only for interactive UI or browser-only APIs.
- Keep CMS routes behind authentication and server-side authorisation.
- Keep business rules and validation outside presentation components.
- Separate public read models from privileged CMS mutation paths.
- Use explicit schemas and typed contracts between UI and persistence.
- Avoid direct database access from untrusted browser contexts unless supported by correct row-level policies and a reviewed threat model.
- Use stable identifiers, unique slug constraints and explicit publication states.
- Use database transactions for related writes.
- Make form and media operations safe to retry where applicable.
- Paginate CMS lists; do not load unbounded content or audit collections.

## 7. Database requirements if PostgreSQL is approved

- Version-controlled SQL migrations.
- Primary/foreign keys, uniqueness and check constraints where appropriate.
- Indexes based on actual query patterns.
- Explicit draft/published/archived status and publication timestamps.
- Audit/revision model designed to support the agreed CMS recovery needs.
- Created/updated timestamps and actor references for managed content.
- Clear separation of user identity from content authorisation.
- Row Level Security on every exposed table where the chosen platform exposes tables to clients.
- Automated tests for policies and cross-user access.
- Backups, export and restore procedure.
- No production data in local fixtures or test environments unless sanitised and authorised.

Do not finalise the schema until CMS content types, roles, workflows and data lifecycle are approved.

## 8. Rendering, caching and publishing

- Public pages must expose meaningful text content to crawlers without relying on animation or client-side rendering alone.
- Draft and scheduled content must not appear publicly before authorised publication.
- Publish operations must invalidate or refresh the correct public pages and metadata.
- Cache behaviour and invalidation must be documented and tested.
- Canonical URLs must be stable after domain activation.
- Preview routes must be protected and must not be indexed.
- Media URLs and access policies must be appropriate to public/private use.
- Publishing must be recoverable if an edit is incorrect.

## 9. Media and performance

- Prefer responsive AVIF/WebP images where supported.
- Reserve image/video dimensions to limit layout shift.
- Compress hero video; provide poster and still fallback.
- Do not autoplay audio.
- Load noncritical media and animation lazily.
- Avoid shipping large 3D libraries on routes that do not need them.
- Respect prefers-reduced-motion and data-saving constraints where practical.
- Measure actual asset payloads, JavaScript bundles and Core Web Vitals.
- Keep decorative motion off the critical path.

## 10. Accessibility and browser compatibility

Target WCAG 2.2 AA:
- semantic structure and headings;
- accessible names and labels;
- keyboard operation and visible focus;
- sufficient contrast;
- useful error and status announcements;
- no essential information communicated only by motion or colour;
- reduced-motion support;
- touch-friendly controls;
- accessible menus, dialogs, tables and CMS forms.

Test current stable Chrome, Edge, Firefox and Safari, including mobile Safari and Chrome.

## 11. Security and privacy

- Server-side role enforcement for every privileged CMS action.
- Secure session handling and account recovery.
- MFA for privileged users where supported.
- Strict input validation and output encoding.
- Upload type/size limits and safe file delivery.
- Rate limiting / spam controls for public submission endpoints.
- CSRF protection where relevant.
- Security headers and CSP appropriate to the deployed architecture.
- Secrets stored in hosting/provider secret settings.
- Never expose service-role keys or privileged credentials in NEXT_PUBLIC variables.
- No sensitive customer site layouts, security feeds or credentials in public assets.
- Privacy notice, retention and contact ownership approved by Teedee.

## 12. Testing and CI

Required automated checks should include:
- dependency installation from lockfile;
- lint;
- type checking;
- production build;
- unit tests for validation and business rules;
- integration tests for data access and publishing;
- CMS access-control and role matrix tests;
- end-to-end website and CMS journeys;
- link and media checks;
- responsive and accessibility verification;
- security tests for unauthorised access and draft leakage.

CI must fail on required checks. Use npm ci rather than npm install in CI where the committed lockfile supports it. The current workflow should be reviewed and improved rather than assumed complete.

## 13. Environments and configuration

Target environments:
- Local development.
- Preview / staging (with non-production data and credentials).
- Production.

If budget or plan limits prevent fully separate services initially, document the reduced isolation, prohibit test data in production, and agree the risk with Teedee.

Provide .env.example with variable names and safe placeholders only. Production values belong in approved platform secret settings. Rotate credentials if they are ever exposed.

## 14. Technical acceptance

The system is technically ready only after:
- the chosen deployment mode is proven;
- production build and CI pass;
- CMS authentication and authorisation tests pass;
- published content renders correctly and drafts remain private;
- forms and uploads have safe, working server-side paths;
- performance/accessibility checks are recorded;
- backups and recovery are documented and tested to the agreed level;
- no production secret is committed to Git;
- a second developer can follow the setup documentation.
