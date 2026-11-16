# TeeDee Architecture Decision Records — Initial Set

## ADR-001 — Modular monolith first
**Status:** Proposed. Start with explicit domain modules in one deployable application. This minimises operational overhead while keeping boundaries clear. Extract services only when scale, independent deployment or team ownership justifies it.

## ADR-002 — PostgreSQL as system of record
**Status:** Proposed. PostgreSQL is the authoritative transactional store. Supabase is a candidate managed platform, subject to cost, region, security, support and exit review. Use migrations, constraints, transactions, RLS and restore tests.

## ADR-003 — Offline-first field capture
**Status:** Proposed; proof required. Use persistent local storage for field workflows. Server remains authoritative for approvals, financial posting, stock adjustments and irreversible transitions. PowerSync is a candidate after platform and cost validation.

## ADR-004 — Shared communication through APIs and events
**Status:** Proposed. Products communicate through authenticated APIs and versioned events, never cross-product table writes. Use transactional outbox, idempotent consumers, retries, dead-letter queues and observability.

## ADR-005 — Separate business administration from platform privilege
**Status:** Proposed. Owner is highest business authority; developer is a distinct, disclosed Platform Operator using just-in-time access. No hidden backdoor or shared superuser. Require MFA, time-limited grants, audit, break-glass and revocation.

## ADR-006 — RBAC + ABAC with database enforcement
**Status:** Proposed. Combine roles with organisation/project/customer scope and contextual attributes. Deny by default; enforce in APIs, PostgreSQL RLS and storage policies. UI visibility is not a security boundary.

## ADR-007 — Structured, versioned CMS
**Status:** Proposed. Public CMS and Operations CMS share publishing infrastructure but use distinct content types, roles and workflows. Templates are versioned; active projects retain the version used at execution.

## ADR-008 — Fault tolerance through idempotency and recovery
**Status:** Proposed. Retry transient faults, isolate poison jobs, monitor queue lag, back up database and object storage separately, and test restores. Define RPO/RTO before production.

## ADR-009 — Selective abstraction and polymorphism
**Status:** Proposed. Use interfaces/adapters for service-specific surveys, QA, notifications, document rendering and inventory behaviours. Prefer composition and discriminated unions to deep inheritance. Abstractions must map to real variation and have contract tests.

## ADR-010 — Security assurance baseline
**Status:** Proposed. OWASP ASVS 5.0.0 as verification baseline, Level 2 target and selected Level 3 controls for privileged operations; NIST SSDF in delivery; independent penetration test before broad production use.
