# TeeDee Digital Operations Ecosystem
**Strategic Product & Technology Proposal | v0.1 | 9 November 2026**  
Prepared for TeeDee Edge Automations LTD  
Status: Discovery proposal — subject to owner validation.

> **Decision requested:** Approve a time-boxed discovery and pilot, not a full-scale build commitment. Validate workflows, user needs, vendor costs, data ownership and measurable benefits before production rollout.

## 1. Executive summary
TeeDee should establish a connected digital operating environment across three products: a public corporate website with its own CMS, an internal operations application with its own CMS/configuration studio, and a customer portal. They share governed identity, APIs, permission policies, domain events, files, notifications, audit history and reporting.

The purpose is to reduce undocumented work, improve survey and installation quality, account for tools and materials, make approvals traceable, shorten reporting cycles and create a stronger customer experience. It may later support recurring maintenance revenue and a vertical SaaS opportunity, but commercialisation comes only after internal proof.

This is not a proposal to replace every ERP, accounting or HR product immediately. Start with field delivery and resource accountability.

## 2. Product ecosystem
### Public website + Website CMS
Marketing, verified company information and qualified lead capture.
- Structured pages, services, industries, case studies, insights, team, FAQs, navigation, redirects, media, metadata and enquiry forms.
- CMS workflow: Draft → Review → Approved → Scheduled → Published → Archived.
- Version history, preview, rollback, scheduled publishing, SEO fields, canonical URLs, sitemap and alt-text governance.
- Enquiries enter the shared intake service through a versioned API. No manual re-keying.
- Content roles are distinct from operational roles. Claims, credentials, project photos and client logos require configured approvals.

### TeeDee Ops — internal application / PWA
The operational system for customers, sites, projects, surveys, assignments, reports, inventory, tools, procurement, QA, handover and maintenance.
- Owner command centre and exception inbox.
- Customers, leads, sites, projects and work orders.
- Service-specific survey templates, measurements, annotated evidence and PDF reports.
- Staff assignments, schedules, daily reports and blockers.
- Materials ledger, procurement requests, stock reservations and reconciliation.
- Tool register, QR custody, return condition, repair and overdue alerts.
- QA checklists, commissioning evidence, corrective actions and handover.
- Operations CMS for SOPs, field forms, survey schemas, safety and inspection templates, report layouts, service catalogues and notification templates.
- Versioned forms: active projects retain the exact template version used when work began.

### Customer portal
Secure customer access to their own projects, approved milestones, released documents, quotation/variation approvals, handover records and service requests. Customers must never see internal notes, staff records, margins, procurement or other customers.

## 3. Shared communication and integration layer
Products must not directly write into one another's tables. They communicate through authenticated APIs and versioned event contracts.

Shared services:
1. Identity and session service.
2. Organisation, team, site and project directory.
3. Permission and policy evaluation.
4. API gateway / backend-for-frontend boundaries.
5. Domain event bus and transactional outbox.
6. Notification orchestration: in-app and email first; SMS/WhatsApp only after provider, consent and cost review.
7. File/media service with metadata, access policy, retention and signed delivery.
8. Audit/activity timeline.
9. Search and reporting read models.
10. Observability, background jobs, retries and dead-letter handling.

Example flow: a public enquiry is validated and committed; the same transaction writes an outbox event; a worker publishes lead.created.v1; operations creates an intake task; a coordinator is notified; the audit timeline records the transition. Delivery is at-least-once, therefore consumers must be idempotent. Do not assume exactly-once delivery.

## 4. Recommended architecture
### Modular monolith first
A modular monolith is the practical default for one operating company and a small engineering team. It gives clear domain boundaries without premature microservice deployment, tracing and data-consistency overhead.

Proposed stack, subject to proof and cost review:
- TypeScript + Next.js for public website, authenticated operations UI and customer portal.
- PostgreSQL as authoritative transactional database.
- Supabase as a candidate managed Postgres/Auth/Storage/Realtime platform, subject to region, pricing, security, support and exit review.
- Typed domain services and contracts isolate business rules from UI and vendor SDKs.
- Background worker for notifications, PDF rendering, imports, scheduled tasks and event delivery.
- Object storage for photos, video, drawings and generated reports.
- PowerSync as a candidate local SQLite/offline sync engine, subject to a technical proof of concept and pricing/platform review.
- Reproducible infrastructure configuration, staging and production separation.

### Abstraction and polymorphism
Use abstractions where they reduce coupling and represent genuine variation—not as an exercise in overengineering.
- SurveyTemplate and SurveyResponse with service-specific sections and typed questions.
- ServiceAdapter interface for CCTV, solar, networking, electrical and access-control workflows; each adapter supplies validation, checklists, BoQ mapping and handover requirements.
- InventoryItem with explicit consumable, serialized asset and tool behaviours.
- ApprovalPolicy interface for publishing, procurement, variations, stock adjustments and project closure.
- NotificationChannel interface; implement in-app/email first, add providers without rewriting workflows.
- DocumentRenderer interface for surveys, daily reports, inspections and handover.
- Typed SyncCommand envelope with schema version and idempotency key.

Prefer composition and discriminated unions over deep inheritance. Validate type discriminators at API boundaries. Avoid a generic catch-all table that erases domain constraints.

### Domain modules
Identity & Access; CRM Intake; Content Management; Projects & Work Orders; Surveys & Evidence; Inventory & Procurement; Tools & Asset Custody; Workforce & Competency; Quality & Safety; Customer Portal; Notifications; Documents & Reporting; Audit & Platform Operations.

## 5. Synchronisation and fault tolerance
Offline operation is a field requirement, not a claim that every feature works offline.
- Local persistent support for assigned project packs, survey drafts, notes, checklists, material-use drafts and photo queues.
- Server remains authoritative for permissions, approvals, financial posting, stock adjustments and irreversible transitions.
- Each client command includes UUID, actor, device/session reference, entity reference, schema version, timestamp and idempotency key.
- Append-only operational events for stock movements, tool custody, approvals and audit actions; derive balances/status from validated transactions.
- Optimistic concurrency/version checks for mutable documents; preserve conflicting edits rather than last-write-wins.
- Photos upload independently with retry/resume; reports expose attachment upload state.
- Visible states: Local draft, Queued, Syncing, Synced, Rejected, Conflict, Retry required.
- Retry transient failures with bounded exponential backoff and jitter. Poison jobs go to a dead-letter queue with an operator replay workflow.
- Transactional outbox prevents database commit/event publish gaps.
- Background jobs must be safe to retry; consumers deduplicate.
- Monitor sync lag, queue age, failed jobs, storage failures, uptime and backup status.
- Agree recovery point objective (RPO) and recovery time objective (RTO) with the owner; test restores, not just backup creation.

## 6. Security: high assurance, never “unhackable”
No internet-connected system can honestly be guaranteed unhackable. The goal is to reduce attack surface, prevent common vulnerabilities, detect abuse and recover quickly.

### Authority separation
- **Organisation Owner:** highest business authority; controls staff, business roles, approvals, customers, operations and company configuration.
- **Company Administrator:** delegated operational administration, bounded by owner policy.
- **Platform Operator (developer):** distinct, disclosed technical maintenance identity. Not a concealed backdoor.
- Developer elevation is just-in-time, time-limited, MFA/passkey protected, reason/ticket-linked, audited and revocable.
- Production data access is denied by default; support access is explicit and logged. Break-glass access requires reason and post-event review.
- No shared admin accounts, hidden bypass routes, hard-coded secrets or client-side super-admin flags.

### RBAC + ABAC
Roles: Owner, Company Admin, Operations Manager, Project Manager, Site Manager, Surveyor, Technician, Storekeeper, Procurement, Finance, QA/Safety, Content Editor, Publisher, Customer Contact, Subcontractor and Platform Operator.

Policy attributes: organisation, department, assigned project/site, customer relationship, record classification, approval limit, employment status and time-limited support grant.

Enforce policies on server and database/storage layers (e.g. PostgreSQL Row Level Security). Frontend visibility is UX, never a security boundary. Deny by default; prevent IDOR/BOLA through object-level ownership checks. Sensitive actions require step-up authentication and/or dual approval. Owner can grant business roles but not infrastructure superuser privileges.

### Security controls
- OWASP ASVS 5.0.0 verification baseline; target Level 2 for the application, selected Level 3 controls for privileged operations and sensitive data.
- NIST SSDF integrated into delivery: protect source/build pipeline, review dependencies, produce hardened releases and maintain vulnerability response.
- MFA/passkeys for privileged users, secure session rotation, rate limits, bot protection and safe account recovery.
- TLS in transit, encryption at rest, managed secrets, least-privilege database roles; never expose service-role secrets in browser bundles.
- Input validation, output encoding, CSRF protection where applicable, CSP, secure cookies, CORS allowlists, SSRF protection, upload scanning and file limits.
- RLS on every exposed tenant-scoped table and Storage bucket; automated policy tests.
- Tamper-evident audit logs for privileged and financial/inventory events.
- Dependency/secret scanning, SAST, DAST, SBOM, protected branches and mandatory review.
- Independent penetration test before broad production use; remediate critical/high findings.
- Incident response playbook, access revocation and restore drills.

## 7. Data governance and record integrity
Company owns its business data. Agree export, retention and deletion rules.
- Stable IDs and explicit relationships for organisations, users, customers, sites, projects and assets.
- Quantities include units of measure and conversions. Distinguish required, purchased, issued, installed, returned, damaged, wasted and unexplained variance.
- Serialized equipment tracks model, serial, warranty, location, installation and maintenance.
- Inventory is transaction-ledger based; never silently overwrite stock quantity. Corrections are compensating transactions with reason and approver.
- Version surveys, quotations, reports, approvals and CMS content.
- Define retention, privacy notice, consent, export and deletion processes.
- Store UTC timestamps and display local time.
- Do not store card data; use a reputable payment provider only if payment collection becomes a confirmed need.

## 8. CMS design
**Website CMS:** Page, Service, Industry, Case Study, Article, Team Profile, FAQ, Media, Navigation, Redirect and Form. Structured editor, approved blocks, revision history, preview, publishing workflow, scheduled publishing, SEO and media governance.

**Operations CMS:** SOPs, field templates, survey schemas, safety checklists, inspection templates, report layouts, service catalogues and notification templates. Templates are versioned and published with effective dates. Never silently mutate a template already used by an active project. Workflow rules are validated configuration, not arbitrary user-authored executable code.

## 9. Screen inventory and UX direction
Visual direction: calm, precise, technical and professional. Light operational canvas, deep graphite/navy navigation, restrained teal primary actions, amber warnings and red only for exceptions. Avoid decorative 3D that harms speed or legibility. Use design tokens, responsive layouts, keyboard navigation, visible focus and accessible contrast. Target WCAG 2.2 AA.

Priority screens:
1. Owner Command Centre — KPI cards, active projects, exception inbox, recent activity and restricted financial summary.
2. Project Workspace — overview, timeline, scope, team, documents, materials, tools, daily logs, inspections and handover.
3. Site Survey Builder — service template, step progress, measurements, floor-plan/photo evidence, autosave/sync and review.
4. Material Ledger — stock by location, reservations, issue/return transactions and variance reconciliation.
5. Tool Custody — QR scan, custodian, checkout/return condition, overdue alerts and repairs.
6. Daily Site Report — personnel, completed work, blockers, quantities, evidence, next-day plan and supervisor review.
7. QA / Commissioning — service checklist, pass/fail, test evidence, corrective action and sign-off.
8. CMS Studio — content tree, structured editor, preview, versions and publish controls.
9. RBAC Administration — role matrix, scopes, privileged grants and audit history.
10. Sync & System Health — device sync state, queue health, failed jobs, storage and backups (platform operator only).
11. Customer Portal — project timeline, released documents, approvals and service requests.
12. Mobile Field Workspace — assigned jobs, offline badge, camera capture, QR scan and quick report.

Mobile rules: one-handed touch-friendly controls; no dense desktop tables; save locally immediately; show queued/synced states; make camera and QR actions first-class; keep forms progressive; do not block drafting on remote validation.

## 10. Pilot and acceptance criteria
Pilot one real CCTV or networking project from enquiry/survey through material issue, daily reporting, QA and handover.

Acceptance:
- Survey works offline, survives app close/reopen, then syncs without losing fields or evidence.
- Replaying a command does not duplicate reports or stock transactions.
- Two-device edits preserve contributions and expose conflicts.
- Unauthorized users cannot access another project by changing IDs or calling APIs directly.
- RLS tests cover exposed tables and Storage paths.
- Stock and custody transactions include actor, timestamp, source and project.
- Owner can view all company projects and delegate business roles without infrastructure superuser access.
- CMS draft/publish/rollback and approval history work.
- Failed notification delivery retries and is visible to operators.
- Database and object-storage restore is tested.
- Core flows pass responsive, keyboard and WCAG 2.2 AA checks.
- Daily report target under five minutes after training is measured during pilot, not assumed.

## 11. Delivery plan
Planning ranges only; confirm after discovery.
- **Phase 0 — Discovery (1–2 weeks):** interviews, process maps, service line, forms, roles, data inventory, risk, success metrics, cost and vendor validation.
- **Phase 1 — Foundation (2–3 weeks):** architecture, environments, auth, tenant model, audit, design system, CI/CD, monitoring and backup/restore baseline.
- **Phase 2 — Pilot workflow (3–5 weeks):** customer/site/project, survey templates, offline proof, assignments, daily reports and evidence.
- **Phase 3 — Resources & QA (3–5 weeks):** inventory ledger, tools, custody, reconciliation, inspections, commissioning and handover.
- **Phase 4 — CMS & website integration (2–4 weeks):** website, Website CMS, Operations CMS, enquiry integration and publishing.
- **Phase 5 — Hardening & rollout (2–3 weeks):** security/load tests, restore drills, training, pilot review, fixes and staged rollout.

## 12. Commercial value and cost model
Measure material variance, overdue tools, reporting time, rework, first-pass inspection rate, survey-to-quotation conversion, on-time completion, maintenance renewals and project profitability.

Cost model includes hosting, database, sync service, storage/egress, email/SMS/WhatsApp provider, PDF processing, monitoring, backups, security testing and support. Start with a costed pilot and usage budgets. Do not promise prices before requirements and vendor quotes are known.

Potential SaaS expansion only after 2–3 internal operating cycles prove adoption, reliability and ROI; validate external contractor demand before multi-tenant investment.

## 13. Risks and mitigations
| Risk | Mitigation |
|---|---|
| Scope explosion | One pilot service line; phase gates |
| Low staff adoption | Field co-design, short forms, training |
| Weak connectivity | Offline proof, local persistence, visible queue |
| Data conflicts | Idempotency, versions, conflict UX, append-only ledgers |
| Privilege misuse | Separate identities, JIT, audit, revocation |
| Vendor lock-in | PostgreSQL, exportable files, documented interfaces |
| Poor data quality | Validation and controlled vocabularies |
| Security incident | ASVS, automated tests, monitoring, incident plan |
| Cost creep | Usage budgets and monthly review |
| Developer bottleneck | Documentation, runbooks, backup and handover |

## 14. Decisions required
1. Select pilot service and nominate a real project.
2. Name owner sponsor and operational process owners.
3. Confirm staff roles, approval limits and stock custody.
4. Share survey forms, reports, quotations, BoQs, handover packs and stock records.
5. Confirm verified company details, services, project evidence, brand assets, domain and hosting ownership.
6. Agree data ownership and developer support/break-glass policy.
7. Confirm users, devices, connectivity and locations.
8. Agree baseline KPIs and pilot budget.
9. Keep full accounting/payroll out of MVP unless discovery proves a dependency.
10. Approve discovery before fixed-price implementation.

## 15. Research references
- OWASP ASVS 5.0.0 — https://asvs.owasp.org/
- NIST SP 800-218 SSDF — https://csrc.nist.gov/pubs/sp/800/218/final
- Supabase production security — https://supabase.com/docs/guides/security/production-checklist
- Supabase production readiness — https://supabase.com/docs/guides/deployment/going-into-prod
- PowerSync — https://powersync.com/
- Next.js production checklist — https://nextjs.org/docs/pages/guides/production-checklist
- WCAG 2.2 — https://www.w3.org/TR/WCAG22/
- PostgreSQL documentation — https://www.postgresql.org/docs/

## Recommendation
Approve Phase 0 discovery and a narrow pilot. Do not approve a full ERP, premature microservices, AI-heavy feature set or SaaS expansion yet. The first proof must show that TeeDee can capture field work offline, reconcile resources, enforce permissions and produce trustworthy reports.
