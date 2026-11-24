# Scope and Deliverables Baseline

**Version:** 0.1 | **Date:** 24 November 2026 | **Status:** Draft for CEO confirmation

## 1. Current contracted product boundary

The current project is the **Teedee corporate website and custom Website CMS**. Website and CMS are treated as one connected delivery. The wider digital roadmap is documented for planning, but it is not silently included in this engagement.

## 2. In-scope workstreams

### A. Discovery and project foundation
- Inspect and preserve the existing repository and deployment configuration.
- Confirm goals, target audiences, service catalogue, public facts and content approvers.
- Establish the project charter, PRD, TRD, roadmap, decisions, risks and execution checklist.
- Confirm client ownership and access governance for infrastructure.

### B. Corporate website
- Review and improve the existing Next.js site.
- Confirm the page and navigation structure.
- Develop the visual system and responsive interaction patterns.
- Build or refine approved page content and service-detail content.
- Integrate approved brand files, photos, illustrations and video.
- Implement working navigation, calls to action and enquiry experience.
- Provide custom states and supporting pages where agreed, including not-found and form-success states.

### C. Custom Website CMS
The precise feature set must be signed off in the PRD before implementation. The initial proposed MVP includes:

- Secure staff sign-in and sign-out.
- Company-approved administrator/editor/publisher permissions.
- A usable dashboard and content overview.
- Manage agreed content entities such as pages, services, FAQs, navigation or shared site content.
- Create, edit, preview, save draft and publish/unpublish content, where approved.
- Manage page-specific SEO fields and social metadata.
- Upload/select approved media with appropriate alt text and descriptive metadata.
- Basic revision/history safeguards appropriate to the approved CMS complexity.
- Safe public rendering of published content only.
- Clear validation, empty, loading, success and failure states.

Features such as a sophisticated visual page builder, multi-stage approvals, scheduled publishing, advanced version diffing, granular audit exports, multilingual publishing, CRM, analytics dashboards or a complex lead-management pipeline must be explicitly prioritised and approved before being treated as included.

### D. Discoverability and optimisation
- Technical SEO foundations.
- Page-specific titles and descriptions.
- Canonical URLs, sitemap and robots directives.
- Structured data based only on verified facts.
- Semantic page structure and internal linking.
- AEO-friendly answers and useful question/answer content where approved.
- GEO-friendly, sourceable and clearly structured company information.
- Image/video metadata and performance optimisation.

No search ranking or generative-answer placement is guaranteed.

### E. Domain, infrastructure and launch
- Plan and document company-owned administrative accounts.
- Support approved domain selection and registration.
- Configure DNS, HTTPS and canonical host after domain access is provided.
- Configure the approved hosting and database services.
- Configure deployment and required environment variables without exposing secrets.
- Validate form delivery and production paths.
- Prepare release checks, launch and rollback steps.

Domain registration, subscription fees, paid storage, media purchases and other third-party expenses are company costs unless a written agreement explicitly states otherwise.

### F. Quality, training and handover
- Run functional, responsive, accessibility, performance, SEO and security checks proportionate to the product.
- Record results and unresolved limitations.
- Prepare CMS administrator/editor orientation and a practical user guide as agreed.
- Prepare the separate final technical handover after the built system is known and verified.

## 3. Out of scope for the current engagement

Unless added through a written change request:

- Teedee Ops application and Operations CMS.
- Teedee Connect customer portal.
- CRM, ERP, HR, payroll, procurement or full accounting system.
- Offline-first field application, mobile app or PWA for technicians.
- Customer login, customer project tracking or customer document portal.
- E-commerce, payment collection, online quotation calculator or automated pricing.
- AI chatbot, AI agent or automated pricing/commitment system.
- Multi-tenant SaaS productisation for external customers.
- Custom email hosting or full email migration.
- Ongoing content-writing retainer or continuous social media management.
- Paid advertising, SEO retainer or guaranteed ranking.
- Professional photography/video crew, travel, actors, voiceover or licensed stock purchases unless separately approved.
- Ongoing maintenance, managed hosting, support SLA or unlimited revisions beyond the written agreement.
- New features not represented in the approved PRD.

## 4. Deliverables and evidence

| ID | Deliverable | Evidence of completion |
|---|---|---|
| D-01 | Initial project documentation | Versioned documents in repository |
| D-02 | Approved scope and requirements | Written approval / accepted PRD baseline |
| D-03 | Website experience | Reviewed production candidate and route checklist |
| D-04 | CMS application | Approved CMS flows demonstrated and tested |
| D-05 | Enquiry path | End-to-end test with approved recipient/destination |
| D-06 | Domain and deployment | DNS, HTTPS, deploy and smoke-test evidence |
| D-07 | Discoverability foundations | Metadata, structured data and indexing checks |
| D-08 | QA and release evidence | Completed test matrix and known-issues register |
| D-09 | CMS orientation | Attendance/acceptance record and user material |
| D-10 | Final handover package | Verified technical and operational documentation |

## 5. Scope control

A request is a scope change if it adds a new product, route, CMS entity, integration, user class, approval process, external service, significant visual system, automation, data migration or support obligation that changes effort or risk.

For each change:
1. Record the request and business reason.
2. Identify functional, technical, content, security and operational effects.
3. Estimate additional time and external costs.
4. State whether existing work or delivery dates are affected.
5. Obtain written approval before implementation.

No feature is added merely because it appears in the wider strategic roadmap or archived proposal.

## 6. Dependencies and client responsibilities

Teedee is responsible for timely access to company information, brand assets, domain authority, media permissions, legal review, account ownership, purchase approvals and content decisions. The developer is responsible for documenting dependencies, raising blockers early and not publishing unverified information.

## 7. Acceptance and exclusions

Acceptance is measured against the approved PRD and test plan, not against features that were not approved. Any accepted limitation or deferred feature must be recorded. This document supplements, but does not replace, the signed commercial agreement.
