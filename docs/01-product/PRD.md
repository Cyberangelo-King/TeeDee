# Product Requirements Document — Corporate Website and Website CMS

**Version:** 0.1 | **Date:** 24 November 2026 | **Status:** Draft for product-owner review

## 1. Product definition

The product has two connected surfaces:

1. **Public website:** the company-facing digital presence used by prospective customers, partners and other visitors.
2. **Website CMS:** the authenticated publishing application used by authorised Teedee personnel to manage the agreed public website content.

The CMS is not Teedee Ops, not an ERP and not a customer portal. It manages the public website only.

## 2. Product vision

Help the right visitors understand Teedee's verified capabilities, build confidence through clear information and genuine evidence, and make a useful enquiry. Give the company a safe and practical way to keep that information current.

## 3. Goals

- Communicate approved company identity, positioning and services.
- Explain service value and relevant use cases in understandable language.
- Provide accessible, responsive and distinctive digital experience.
- Convert relevant visitor interest into a working enquiry path.
- Improve technical and content discoverability.
- Give authorised users control over approved website content.
- Keep implementation maintainable and transferable to another developer.

## 4. Non-goals

- Ecommerce, payment or automated quotation.
- Customer accounts or customer project dashboards.
- Staff scheduling, inventory, procurement, job cards or field reporting.
- CRM replacement or full lead-pipeline automation.
- AI chatbot or autonomous sales agent.
- Unapproved marketing claims, case studies, testimonials or quantified performance claims.
- Guarantee of search rankings or appearance in AI-generated answers.

## 5. Users and jobs-to-be-done

| User | Job to be done |
|---|---|
| Prospective residential customer | Understand relevant services and contact Teedee without technical confusion |
| Business / operations buyer | Assess relevance, understand engagement and initiate a project conversation |
| Property / facility manager | Identify likely system needs and ask for a suitable assessment |
| Institution / contractor / partner | Review verified capability and request a business discussion |
| CMS administrator | Manage staff access and maintain website publishing settings within authority |
| CMS editor | Create and revise content without needing code or production credentials |
| CMS publisher / approver | Review content and control what is made public |

The exact customer segments and internal roles require company confirmation.

## 6. Functional requirements

Priority definitions: **Must** = required for the approved MVP; **Should** = expected if schedule and approved scope permit; **Later** = candidate for a separately approved enhancement.

### 6.1 Public website

| ID | Requirement | Priority | Acceptance condition |
|---|---|---|---|
| WEB-01 | Responsive global layout and navigation | Must | Navigation works at agreed mobile, tablet and desktop sizes |
| WEB-02 | Home page clearly explains Teedee's approved proposition | Must | Company approves copy and the first-screen message |
| WEB-03 | About page presents verified company information | Must | No unverified company claims are published |
| WEB-04 | Services overview | Must | Only approved services appear |
| WEB-05 | Service detail pages | Must | Each approved service has clear scope, outcome and enquiry route |
| WEB-06 | Contact page and enquiry pathway | Must | Contact destinations and form delivery are verified end-to-end |
| WEB-07 | Privacy information | Must | Company/legal review completed before production use |
| WEB-08 | Custom not-found and enquiry-success states | Must | States are branded, useful and navigable |
| WEB-09 | Industries/environment page | Should | Published only if the company validates target segments |
| WEB-10 | Projects/case studies | Conditional | Only approved project evidence with publication permission |
| WEB-11 | Insights/resources | Later | Requires approved content ownership and publication plan |
| WEB-12 | Motion and interaction | Must | Purposeful, responsive, keyboard-compatible and reduced-motion aware |
| WEB-13 | Approved images and video | Must | Rights, factual context, fallbacks and optimisation documented |
| WEB-14 | SEO/social metadata | Must | Each indexable route has appropriate metadata and canonical treatment |
| WEB-15 | Analytics/search measurement hooks | Should | Only approved tools and privacy configuration are enabled |

### 6.2 Website CMS

| ID | Requirement | Priority | Acceptance condition |
|---|---|---|---|
| CMS-01 | Authenticated staff access | Must | Unauthenticated visitors cannot access CMS pages or APIs |
| CMS-02 | Role-based CMS permissions | Must | Editor permissions are distinct from administrator/publisher privileges |
| CMS-03 | Dashboard and content overview | Must | User can see relevant content and status without exposing sensitive data |
| CMS-04 | Manage agreed page content | Must | Authorised user can create/edit/save approved page fields |
| CMS-05 | Manage services and FAQs | Must | Approved entities can be created, edited and safely displayed |
| CMS-06 | Preview before publication | Must | Draft content can be reviewed without becoming public |
| CMS-07 | Publish/unpublish workflow | Must | Only authorised publisher can change public publication state |
| CMS-08 | SEO fields | Must | Editor can manage approved metadata with validation |
| CMS-09 | Media library / upload handling | Must | Allowed file types, size limits, alt text and access controls are enforced |
| CMS-10 | Revision safeguards | Should | Previous content state can be inspected or recovered at agreed level |
| CMS-11 | Navigation/site settings editor | Should | Exposed only if included in approved scope and designed safely |
| CMS-12 | Enquiry inbox/lead management | Later / scope confirmation | Not assumed as included; requires retention, access and workflow requirements |
| CMS-13 | Scheduled publishing | Later | Add only if operational need and timeline justify it |
| CMS-14 | Advanced block/page builder | Later | Not a baseline requirement |
| CMS-15 | Audit export and granular approval workflow | Later | Must be separately estimated if required |

### 6.3 CMS role baseline — proposed

- **Company Owner / CMS Owner:** company-designated authority; can manage CMS administrators and content privileges.
- **CMS Administrator:** manages agreed CMS users and site content settings; cannot silently change infrastructure ownership.
- **Editor:** creates and edits drafts and media metadata.
- **Publisher / Approver:** reviews and publishes approved content.

The actual role names, whether one person holds multiple roles, and who may invite/remove CMS users require CEO approval. CMS roles must not be confused with Netlify, GitHub, database or domain privileges.

### 6.4 Enquiry requirements

The form should request only useful information. Candidate fields are name, one reliable contact method, organisation (optional), service interest, location/area and a short project description. Consent wording, data recipient, storage location, retention and notification method must be confirmed before production.

The system must not display a success claim until the submission has been accepted by the configured destination. Spam controls and server-side validation are required for any production-connected form.

## 7. Content and truth requirements

- Company legal name and public name must be confirmed.
- Service claims must be technically reviewed.
- Contact numbers, email, address, social URLs and business hours must be supplied or verified by Teedee.
- Certifications, years in operation, number of installations, client names, testimonials, warranties and service-level claims require evidence and approval.
- Project imagery must have permission and must not expose customer-sensitive camera views, access credentials, addresses or security layouts.
- Placeholder copy or placeholder imagery must not be mistaken for real company evidence.

## 8. User experience requirements

Public experience:
- Distinctive art direction and strong hierarchy.
- Clear primary action and sensible secondary actions.
- Mobile-first layout and readable content.
- Fast access to contact methods.
- Motion enhances understanding but never blocks it.
- Meaningful content remains available when motion/video is disabled.

CMS experience:
- Clear information architecture and navigation.
- Calm, legible, task-oriented admin UI.
- Destructive actions have confirmation and recovery where practical.
- Autosave or explicit save states are clear and trustworthy.
- Form validation explains how to correct errors.
- Content status and publication state are obvious.
- Keyboard and assistive technology use are supported.

## 9. Non-functional requirements

| Area | Requirement |
|---|---|
| Accessibility | WCAG 2.2 AA as the project target |
| Performance | Optimise images, video, fonts and client JavaScript; record measured results |
| SEO | Meaningful crawlable content, metadata, canonical URLs, sitemap and correct indexing controls |
| Security | Least privilege, secure authentication, validation, server-side authorisation and secret hygiene |
| Privacy | Data minimisation, approved privacy notice, documented enquiry handling and retention |
| Reliability | Production changes are deployable and recoverable; backups and restore approach documented |
| Maintainability | Typed code, modular components, migrations where applicable, clear repository conventions |
| Portability | Code, database schema and assets documented; avoid undocumented provider-only logic |
| Compatibility | Current stable major browsers on desktop and mobile, with graceful fallbacks |

## 10. Analytics and success measurement

Potential measures:
- Qualified enquiry volume and source.
- Form completion and failure rate.
- Clicks to approved phone, email and WhatsApp channels.
- Service-page engagement and navigation.
- Organic impressions, clicks and branded/non-branded query coverage.
- CMS editing time and support requests.
- CMS publishing errors and rollback frequency.
- Core Web Vitals and accessibility defects.

Set baselines first. Do not invent numeric targets before Teedee has data.

## 11. MVP release gates

The public site and CMS may launch only after:
- scope and content approvals;
- CMS authentication and permission tests;
- protected draft/publication behaviour;
- working enquiry delivery;
- production domain and HTTPS checks;
- responsive, keyboard and reduced-motion checks;
- SEO and structured-data validation;
- security and dependency review;
- backup/recovery and administrator access review;
- company launch sign-off.

## 12. Open product decisions

The CEO must confirm CMS users and roles, editable content types, publication workflow depth, whether the CMS manages enquiries, whether projects/insights are launch pages, privacy and retention, domain, media production, and recurring infrastructure budget.
