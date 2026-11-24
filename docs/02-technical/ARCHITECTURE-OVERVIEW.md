# Architecture Overview and Technical Boundaries

**Version:** 0.1 | **Date:** 24 November 2026 | **Status:** Proposed; implementation decision pending

## 1. Architecture objective

Build the current website and CMS as one cohesive, maintainable product. Keep public content, CMS administration, identity, media and enquiry responsibilities clear without introducing infrastructure that the current scale does not need.

## 2. Recommended default

Use a **modular monolith** as the starting architecture. The website and CMS can be separate route groups or application surfaces while sharing a deliberately designed codebase and backend. Keep domain modules and service boundaries explicit. Extract separate services only when independent scaling, security isolation, team ownership or deployment requirements justify the operational cost.

Do not build microservices for the current engagement.

## 3. Logical components

1. Public website presentation.
2. CMS presentation and navigation.
3. Identity and access management.
4. Content management domain.
5. Media management domain.
6. Enquiry intake (only the approved capture and delivery scope).
7. SEO/metadata generation.
8. Data-access and persistence layer.
9. Deployment, monitoring and recovery configuration.

## 4. Conceptual request flows

### Public content read
Visitor → DNS/CDN/hosting → public page rendering → published-content query or generated output → browser.

Public users must receive only published, public-safe content and media.

### CMS content write
Staff member → authenticated CMS → server-side authorisation → validated content command → persistence layer → revision/audit record → cache/revalidation or static rebuild → public page.

The publishing path must ensure that a draft cannot become public merely because a URL or record identifier is known.

### Enquiry
Visitor → validated form → approved server/provider destination → acknowledgement → responsible Teedee recipient or inbox.

The destination, data store, notification and retry behaviour must be chosen and tested. A visual success state is not evidence of delivery.

### Media
Authorised CMS user → upload validation → object storage → media metadata and permission record → content association → approved public delivery.

## 5. Data ownership

- GitHub: source code, migrations, tests and technical documentation.
- PostgreSQL/database service, if selected: structured CMS content and related application records.
- Object storage: media originals and optimised derivatives.
- Identity provider: staff identities and authentication state.
- Netlify or chosen host: deployable application and environment configuration.
- Domain registrar/DNS provider: domain registration and DNS records.

Teedee should own each production account and its billing/recovery. The developer receives individual collaborator access.

## 6. Provider direction

Netlify is the current hosting candidate because the existing repository is configured for it. Supabase is a candidate for PostgreSQL, Auth and Storage because it can provide an integrated backend for a bounded CMS. Neither should be provisioned or treated as approved until Teedee confirms account ownership, budget, region, service limits and the deployment pattern.

If Supabase is selected, use PostgreSQL as the durable data model and keep schema changes in migrations. Avoid embedding provider-specific code throughout every UI component; isolate it behind data-access adapters where this creates meaningful portability.

## 7. The static-export decision

The current static export is a major design constraint. The CMS requires secure server-side operations and a strategy for public content freshness. The team must run a focused proof of concept before finalising architecture:

- Can the chosen host serve authenticated CMS routes and APIs?
- Can server-side code safely access privileged database credentials?
- How does publishing invalidate or rebuild public routes?
- Will public page content be crawlable after a publish?
- How are preview URLs protected?
- How are uploads stored, delivered and permissioned?
- What are the cost and usage implications?

The answer becomes a recorded Architecture Decision Record. No production CMS schema or UI should be built around an untested assumption.

## 8. Domain boundaries

For this engagement:
- Website Content owns pages, services, FAQs, navigation and other approved public content.
- Identity & Access owns user accounts and CMS role assignments.
- Media owns uploads, metadata and usage permissions.
- Enquiry owns the limited public submission flow agreed in the PRD.
- Platform Operations owns deployment, secrets, backups and monitoring.

Future Teedee Ops and Teedee Connect domains are not implemented here. If built later, they should consume documented interfaces rather than depend on direct writes to Website CMS tables.

## 9. Future-aware architecture

The current CMS should not contain hidden assumptions that prevent future expansion, but future products do not justify building a generic enterprise platform now. Keep stable identifiers, documented contracts, migrations and domain boundaries. Reassess shared identity, eventing and service separation during future product discovery.

## 10. Architecture risks

- Keeping static export while building an authenticated CMS may cause awkward client-only data fetching and harm SEO.
- A premature monorepo migration may add risk without immediate value.
- A CMS can exceed the fee and timeline if advanced workflows are not controlled.
- A free or hobby-tier database may be unsuitable for business-critical production due to service limits, pause behaviour or backup limitations.
- A public form that merely displays success without delivering data is a business-critical defect.

## 11. Required technical decisions

- Next.js static/hybrid/dynamic deployment model.
- Host/runtime compatibility and Netlify adapter configuration.
- Database, Auth and Storage provider.
- CMS content entities and publishing workflow.
- Role model and invitation/recovery model.
- Enquiry destination, data retention and notifications.
- Media hosting and upload restrictions.
- Backup, restore, monitoring and operational cost.
