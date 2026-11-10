# TeeDee Website — Design & Implementation Blueprint

**Version:** 0.1  
**Date:** 10 November 2026  
**Status:** Implementation plan. Website-first sequence confirmed; company facts, assets, domain and platform access still require owner validation.

## 1. Product direction

The public website is the first delivery surface of a connected digital operating environment. It must establish trust, explain verified capabilities, capture qualified enquiries and create foundations for TeeDee Connect (customer portal) and TeeDee Ops (internal operations platform).

Primary conversion: request a consultation or site assessment. Secondary conversion: ask a service question. Avoid invented credentials, clients, case studies, metrics, service claims or team biographies.

## 2. Information architecture

- Home
- About
- Services (index + individual service pages)
- Industries (only validated segments)
- Projects / Case Studies (approved evidence only)
- Insights
- Contact
- Privacy, Terms, Accessibility, 404 and search utility pages

Home sequence: positioning hero → validated capabilities → proof → delivery process → industry use cases → insights → enquiry CTA. Enquiry form should request only name, organisation, email/phone, service interest, location, brief and consent. Store submissions privately; notify the responsible team via retryable jobs.

## 3. Design research and direction

Reference library:
- 21st.dev and docs.21st.dev: adaptable React/Tailwind patterns for heroes, cards, navigation, galleries and motion. Use selectively; do not compose unrelated components into a generic template.
- Awwwards: quality bar for concept, craft, usability and content, not a mandate for excessive animation.
- Webisoft / Locomotive case study: distinctive technology-company identity with controlled motion.
- Q Industrial case study: industrial brand storytelling with strong art direction and technical information access.
- MATECH Integrated Services and Sere Integrated Electrics: regional category references for engineering service taxonomy and project evidence.

Proposed art direction (not yet approved brand identity): graphite/ink surfaces, warm off-white fields, restrained amber or teal accent, large precise typography, real installation photography, technical diagrams and restrained grid motifs. Motion should explain or guide, not distract. No scroll-jacking, long preloader or heavy WebGL by default. Mobile-first, reduced-motion, visible focus and WCAG 2.2 AA target.

## 4. Architecture

Recommend a TypeScript monorepo with independently deployable surfaces:

- apps/website — public site + Website CMS
- apps/ops — internal operations app + Operations CMS (later)
- apps/portal — customer portal (later)
- packages/ui — accessible design system
- packages/domain — domain types, validation and business rules
- packages/contracts — versioned API/event schemas
- packages/auth — identity and policy adapters
- packages/database — migrations, typed access and test fixtures
- packages/config — shared tooling
- docs — PRD, TRD, ADRs, threat model, runbooks

Framework recommendation: Next.js App Router + TypeScript; server components by default, client components only where needed. Start as a modular monolith with explicit domain boundaries. Do not introduce microservices until scale, team ownership or independent deployment justifies them.

Infrastructure:
- GitHub source of truth, protected main, PR checks, dependency/secret scanning and tagged releases.
- Netlify Git-based continuous deployment, deploy previews and separate environment variables.
- Supabase PostgreSQL/Auth/Storage/Realtime is a candidate, not yet provisioned for TeeDee. Confirm organisation, region, ownership, data residency and budget before creation.
- Separate dev/staging/production environments.
- Investigate the previously paid website, domain, hosting and assets before replacing anything.
- Monitoring, structured logs, uptime checks, backups and tested restore procedures are release requirements.

Request path: browser → Netlify CDN/edge → Next.js rendering/API → typed server-side services → PostgreSQL/Storage. Public reads expose only published fields. Mutations use authenticated server actions/API routes, validation, rate limits, policy checks and audit events.

## 5. CMS boundaries

### Website CMS — Phase 1
Content types: Page, Service, Industry, Case Study, Article, Team Profile, FAQ, Navigation, Redirect, Media and Form Configuration.

Capabilities: structured block editor; Draft → Review → Approved → Scheduled → Published → Archived; preview; revision history; rollback; SEO metadata; canonical/OG fields; alt-text governance; sitemap; redirects; media library and approval trail.

### Operations CMS — later phase
Versioned SOPs, survey schemas, field forms, safety/inspection checklists, report layouts, service catalogues and notification templates. Active projects pin the template version used. Configurations are validated data, never arbitrary executable code.

### Customer portal
No CMS authoring. Portal receives only approved/released project milestones and documents through customer-scoped APIs.

## 6. Identity and security

One identity foundation, application-specific permissions:
- Organisation Owner: highest business authority.
- Company Admin: delegated business administration.
- Website Editor / Reviewer / Publisher: content-specific grants.
- Operations roles: project/site-scoped grants.
- Customer Contact: linked customer records and released content only.
- Platform Operator (developer): separate, disclosed technical identity; just-in-time, time-limited, MFA-protected, reason-linked, audited and revocable elevation. No hidden backdoor or shared superuser.

Use RBAC + ABAC; deny by default; enforce at server and database/storage layers. RLS on exposed tenant-scoped tables. Never use user-editable metadata for authorization or expose service-role keys to browsers. Require MFA for privileged users, secure sessions, rate limits, CSP, validation, upload limits/scanning, audit logs, dependency/secret scanning and tested recovery.

## 7. Phase sequence

| Phase | Deliverable | Exit gate |
|---|---|---|
| 0 — Recovery & discovery | Recover existing website/domain/assets; verify services, claims, contacts, target customers and owner approvals | Ownership and factual content pack confirmed |
| 1 — Website | Design system, responsive site, SEO, accessibility, enquiry capture, Website CMS and publishing workflow | Owner content approval; form, mobile, accessibility and performance tests |
| 2 — Customer portal | Customer identity, project visibility, released documents, approvals and service requests | Customer isolation and permission tests pass |
| 3 — TeeDee Ops + Operations CMS | Projects/sites, survey builder, field reports, resource ledger, tools, QA and versioned templates | One live pilot job completes with audit and reconciliation |
| 4 — Integration & intelligence | Events, reporting, maintenance automation and carefully selected AI | Proven operational ROI and observable failure/recovery |

Website-first does not mean isolated: design stable API/content/identity boundaries now, implement only Phase 1 requirements first.

## 8. Release tests

- Unit: validation, publishing transitions and domain rules.
- Integration: DB constraints, RLS, storage policies and enquiry delivery.
- E2E: editor → review → publish → public render; enquiry → intake.
- Security: IDOR/BOLA, role escalation, draft leakage, file access and rate limits.
- Visual/responsive checks across mobile, tablet and desktop.
- Accessibility: keyboard, focus, contrast, landmarks, labels, reduced motion and screen-reader paths.
- Performance: image optimisation, font discipline, route bundles, caching and Core Web Vitals.
- Deploy previews for review; production only after owner approval.

## 9. Current blockers

1. ProductOS cannot import Cyberangelo-King/TeeDee because GitHub is not connected to the ProductOS account. Connect GitHub at https://beta.productos.dev/settings/connectors, then import the existing repository; do not create a duplicate.
2. No TeeDee Netlify site was found in the connected account. Create/connect after repo and team ownership are confirmed.
3. No TeeDee Supabase project was found. Two unrelated existing projects must not be reused.
4. No TeeDee-specific Gmail thread was returned by search. Obtain the existing website/domain/developer/hosting details directly.
5. Confirm official company contacts, services, industries, project evidence, approved images, brand assets, domain, current website and content approver.
6. Confirm GitHub, Netlify and Supabase ownership, region and budget.

## 10. Immediate checklist

- [ ] Connect GitHub to ProductOS and import this repository.
- [ ] Recover existing paid website/domain/hosting before replacing anything.
- [ ] Run owner/staff content and workflow discovery.
- [ ] Approve brand direction, service taxonomy and factual content pack.
- [ ] Design and review responsive wireframes/tokens.
- [ ] Implement website shell, Website CMS and enquiry flow.
- [ ] Provision Supabase only after owner/budget/region approval.
- [ ] Connect Netlify Git deployment and preview/production contexts.
- [ ] Complete content, accessibility, security and performance gates.
- [ ] Launch with owner sign-off; then begin portal and Ops discovery.

## Research links

- https://21st.dev/
- https://docs.21st.dev/
- https://www.awwwards.com/
- https://locomotive.ca/en/work/webisoft
- https://codewebbarcelona.com/en/industrial-web-design-q-industrial-3d/
- https://www.matechintegrated.com/
- https://siel.com.ng/
- https://asvs.owasp.org/
- https://www.w3.org/TR/WCAG22/
- https://supabase.com/docs/guides/security/production-checklist
- https://nextjs.org/docs/app
