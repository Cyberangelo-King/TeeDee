# Architecture and Project Decision Log

**Version:** 0.1 | **Date:** 24 November 2026 | **Status:** Initial decisions and proposals

Use this log for decisions that materially affect project scope, architecture, cost, security, ownership or delivery. Each decision should include context, options, choice, consequences, approver and date.

## Decision status vocabulary

- **Accepted:** approved and applicable.
- **Proposed:** recommended but awaiting approval.
- **Superseded:** replaced by a later decision.
- **Rejected:** considered and not selected.

## ADR-001 — Company-owned production infrastructure

**Status:** Proposed  
**Context:** Production assets must remain under Teedee's control after the engagement.  
**Decision:** Teedee should own its company email, domain registrar account, GitHub organisation/repository, Netlify team, database organisation/project and analytics properties. The developer should use a personal named account invited with the minimum required access.  
**Consequences:** Cleaner accountability, easier developer replacement and independent account recovery. Initial setup requires company action and role management.  
**Approval:** CEO / authorised account owner pending.

## ADR-002 — Modular monolith first

**Status:** Proposed  
**Context:** The present scope is a website and CMS, and the wider operations/customer products are future ideas.  
**Decision:** Keep the current delivery as a modular application with clear content, identity, media and enquiry boundaries. Do not introduce microservices for the current scope.  
**Consequences:** Lower operational overhead and simpler delivery, while retaining clear boundaries for later extension. Future service extraction is a separate evidence-led decision.

## ADR-003 — GitHub is code source of truth; database is content source of truth

**Status:** Proposed  
**Context:** CMS content should be managed without exposing code workflows or creating a Git commit for every ordinary content edit.  
**Decision:** GitHub stores code, migrations, tests and documents. A selected database stores structured CMS content. Object storage stores managed media.  
**Consequences:** Code and content lifecycles remain separate. Backup/export and migration procedures are required.  
**Approval:** Confirm database provider and ownership before implementation.

## ADR-004 — CMS deployment and public rendering model

**Status:** Open  
**Context:** Current Next.js configuration uses static export. A custom CMS needs authenticated writes and timely public content updates.  
**Decision required:** Select dynamic Next.js hosting, static/hybrid publishing with a secure backend, or another supported pattern after proof of concept.  
**Acceptance evidence:** CMS authentication, server-side secret safety, content publishing, public SEO rendering, cache invalidation, preview protection and deployment must be demonstrated.

## ADR-005 — Supabase as a candidate backend

**Status:** Proposed, not provisioned  
**Context:** A CMS may need PostgreSQL, authentication and media storage.  
**Decision:** Evaluate Supabase as the first managed-backend candidate. Compare project region, pricing, backups, RLS, usage limits, restore options and exit strategy before Teedee approves an account and plan.  
**Consequences:** Fast integrated delivery is possible, but correct policies, migrations, backups and plan selection remain implementation responsibilities.

## ADR-006 — No unverified company claims

**Status:** Accepted project rule  
**Context:** Trust and accuracy are essential for a technical services company.  
**Decision:** Do not publish unverified service claims, credentials, staff biographies, customer logos, case studies, metrics, warranties or guarantees.  
**Consequences:** Content approval and evidence tracking are release dependencies.

## ADR-007 — No silent scope expansion

**Status:** Accepted project rule  
**Context:** The current fee and delivery window apply to the website and Website CMS.  
**Decision:** Ops, Connect, complex CRM, ecommerce, AI agents and unrelated automations remain outside the current scope unless added in writing.  
**Consequences:** Any change requires impact assessment and approval.

## Future decisions to record

- Final CMS role matrix and publishing workflow.
- Database/auth/storage provider and region.
- Domain and DNS provider.
- Hosting and Next.js runtime mode.
- Enquiry delivery provider and retention model.
- Backup frequency and recovery objectives.
- Analytics and consent approach.
- Final launch and support ownership.
