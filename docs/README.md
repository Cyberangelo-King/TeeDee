# Teedee Digital Platform — Initial Project Documentation

**Document set:** Initial planning and engineering baseline  
**Version:** 0.1  
**Prepared:** 24 November 2026  
**Prepared by:** Angëlo — Delivery / Engineering  
**Status:** Draft for company review and approval

## 1. Purpose

This document set establishes the project baseline before substantial implementation work proceeds. It brings the business brief, product requirements, technical direction, scope, delivery plan, dependencies, risks, domain and infrastructure work, asset production, quality gates and decisions into one navigable source of truth.

It is an **initial** documentation set. It records what is known, distinguishes decisions from assumptions, and identifies information that Teedee must validate. It will evolve as the CEO approves content, requirements, architecture, costs and milestones.

This is not the final technical handover. Final handover documentation will be produced after implementation and verified against the actual deployed system. It will include the real architecture, setup and recovery procedures, CMS operating guide, training materials, test evidence and ownership transfer record.

## 2. Read in this order

1. [Project Charter](00-foundation/PROJECT-CHARTER.md)
2. [Project Brief](00-foundation/PROJECT-BRIEF.md)
3. [Scope and Deliverables](00-foundation/SCOPE-AND-DELIVERABLES.md)
4. [Governance and Stakeholders](00-foundation/GOVERNANCE-AND-STAKEHOLDERS.md)
5. [Assumptions, Dependencies and Constraints](00-foundation/ASSUMPTIONS-DEPENDENCIES-CONSTRAINTS.md)
6. [Product Requirements Document](01-product/PRD.md)
7. [Information Architecture](01-product/INFORMATION-ARCHITECTURE.md)
8. [Content and Asset Plan](01-product/CONTENT-AND-ASSET-PLAN.md)
9. [Technical Requirements Document](02-technical/TRD.md)
10. [Architecture Overview](02-technical/ARCHITECTURE-OVERVIEW.md)
11. [Existing Repository Baseline and Gap Assessment](02-technical/EXISTING-BASELINE-AND-GAPS.md)
12. [Security and Privacy Baseline](02-technical/SECURITY-AND-PRIVACY.md)
13. [Decision Log](02-technical/DECISION-LOG.md)
14. [Design and Motion Direction](03-design/DESIGN-AND-MOTION-SYSTEM.md)
15. [SEO, AEO and GEO Plan](03-discoverability/SEO-AEO-GEO-PLAN.md)
16. [Roadmap](04-delivery/ROADMAP.md)
17. [Master Project To-do](04-delivery/MASTER-TODO.md)
18. [Risk and Open Questions](04-delivery/RISK-AND-OPEN-QUESTIONS.md)
19. [Quality and Acceptance Plan](04-delivery/QUALITY-AND-ACCEPTANCE-PLAN.md)
20. [Content Approval Register](04-delivery/CONTENT-APPROVAL-REGISTER.md)
21. [Ownership and Infrastructure Setup](05-infrastructure/OWNERSHIP-AND-SETUP-CHECKLIST.md)
22. [Domain and Launch Plan](05-infrastructure/DOMAIN-AND-LAUNCH-PLAN.md)
23. [Environment Variable Register](05-infrastructure/ENVIRONMENT-VARIABLE-REGISTER.md)
24. [Platform Reference Notes](02-technical/PLATFORM-REFERENCE-NOTES.md)
25. [Final Handover Documentation Plan](90-final-handover/README.md)

The chronological project record is maintained separately in the repository-root [Build Journal](../Build-Journal.md).

## 3. Project boundary

### Current engagement

The current engagement is the **Teedee corporate website and its custom Website CMS**. The website is the public-facing company presence and enquiry channel. The CMS is the controlled internal product through which authorised Teedee personnel manage approved website content.

### Strategic roadmap beyond the current engagement

The wider digital direction may later include:

- **Teedee Ops:** internal operations and field-delivery platform.
- **Teedee Connect:** customer-facing portal and service relationship experience.
- Shared capabilities such as identity governance, notifications, document management, auditability and reporting.

These are strategic roadmap items only. They are **not deliverables under the current website/CMS engagement**, are not included in the current project fee, and require separate discovery, requirements, architecture, costing, approval and delivery agreements.

## 4. Evidence and status language

| Label | Meaning |
|---|---|
| Confirmed | Directly agreed in the project conversation or verified in the repository |
| Proposed | Recommended direction, not yet approved by Teedee |
| Pending confirmation | Company fact, requirement or choice requiring confirmation |
| Assumption | Temporary planning basis that must be tested |
| Out of scope | Not included unless formally added |
| Verified complete | Implemented and checked with evidence |

A requirement is not proof that it has already been implemented. A task marked complete must have evidence. A proposed vendor or architecture is not a commitment to purchase or provision it.

## 5. Existing repository baseline inspected on 24 November 2026

The existing repository is not a blank project. The default branch is main and contains an existing Next.js website.

Observed in the current repository:

- Next.js 15 and React 19 with TypeScript.
- Tailwind CSS 3, Framer Motion and Lucide icons.
- Main source areas include src/app, src/components, src/content, src/lib and src/types.
- Existing routes include Home, About, Services, Service detail, Industries, Contact and Privacy, plus a custom not-found route.
- Existing brand assets and service imagery are present under public.
- next.config.ts sets output: export; netlify.toml publishes out and sets NETLIFY_NEXT_PLUGIN_SKIP=true.
- The README identifies teedeeedge.netlify.app as the existing website address and references a Netlify project.
- No custom CMS application, authentication system, database migrations or Supabase configuration was found in the inspected main-branch tree.
- Earlier planning material exists under archive/. It has been reviewed as historical reference, not accepted wholesale as the current approved specification.
- The existing contact form handler was observed to display a success state without sending the form data to a backend/provider. This is recorded as a P0 launch blocker in the baseline assessment.

This baseline matters: a custom CMS will introduce requirements the current static-only website does not yet satisfy. The publishing, data and hosting approach must be decided and tested before CMS implementation is committed.

## 6. Documentation governance

- The CEO or designated company representative approves company facts, public claims, scope changes, paid services and launch.
- The developer maintains technical requirements, architecture records, implementation journal and evidence.
- Decisions that affect scope, cost, timeline, ownership, security or architecture are recorded before implementation.
- Material changes are reviewed for impact on cost, schedule, testing and support.
- The Build Journal is chronological and records actual work only.
- Final handover documents are separate and written from the completed, tested system.

## 7. Current review requests

Teedee should review and confirm:

1. Legal company name, public contact channels, service catalogue and service area.
2. Target customers and priority services.
3. Website page list and content approval workflow.
4. CMS users, roles and publishing permissions.
5. Domain name, registration budget and company account owner.
6. Whether Teedee will create and own the email, GitHub organisation, Netlify team and database organisation before provisioning.
7. Media available, media to be produced, usage permissions and any production budget.
8. Privacy notice, enquiry handling owner and data retention expectations.
9. The provisional launch window and company review/approval turnaround.

Until these are confirmed, the relevant requirements remain provisional.
