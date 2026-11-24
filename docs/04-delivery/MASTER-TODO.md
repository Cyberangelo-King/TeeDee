# Master Project To-do and Execution Register

**Version:** 0.1 | **Prepared:** 24 November 2026 | **Status:** Initial task baseline

This is the cross-workstream checklist for the current website/CMS engagement and its required setup. It deliberately includes domain, accounts, content, brand/media production, testing, launch and handover—not just coding.

**Status at creation:** Items are not marked complete unless evidence exists. Update this file as work is performed.

## Status legend

- [ ] Not started
- [~] In progress
- [B] Blocked / awaiting external input
- [x] Done and verified
- [>] Deferred to a future phase

## A. Project initiation and governance

- [ ] A-01 Confirm the authorised Teedee executive sponsor.
- [ ] A-02 Confirm the company representative who will own and recover production accounts.
- [ ] A-03 Confirm the person authorised to approve public copy and company facts.
- [ ] A-04 Confirm the technical reviewer for service descriptions and FAQs.
- [ ] A-05 Confirm the CMS owner and intended editor/publisher users.
- [ ] A-06 Reconcile this charter and scope with the accepted written agreement.
- [ ] A-07 Record the ₦120,000 fee and agreed payment milestones in the commercial record.
- [ ] A-08 Record the ₦60,000 initial payment once received and verified.
- [ ] A-09 Confirm the target launch window and realistic feedback turnaround.
- [ ] A-10 Confirm how scope changes, defects and approvals will be communicated.
- [ ] A-11 Maintain the Build Journal and decision log.

## B. Company identity and administrative email

- [ ] B-01 Agree the official company-controlled administrative email address.
- [ ] B-02 Create the email account using Teedee-authorised ownership details.
- [ ] B-03 Set the primary password in a company-controlled password manager.
- [ ] B-04 Configure company-controlled recovery email.
- [ ] B-05 Configure company-controlled recovery phone.
- [ ] B-06 Enable MFA and store recovery codes securely under company control.
- [ ] B-07 Identify at least two authorised company recovery custodians where practical.
- [ ] B-08 Record account owner, recovery method and billing responsibility in the private handover register (never commit passwords or recovery codes to Git).
- [ ] B-09 Decide whether a domain-based business mailbox is required after domain registration.
- [ ] B-10 If a business mailbox is selected, configure MX, SPF, DKIM and DMARC with the provider's verified instructions.
- [ ] B-11 Test sending, receiving and recovery before using the address to register production services.

## C. GitHub ownership and source control

- [ ] C-01 Decide whether the existing repository will be transferred to a Teedee GitHub organisation.
- [ ] C-02 Decide whether the repository remains public or becomes private.
- [ ] C-03 Create the company GitHub organisation using company-controlled ownership.
- [ ] C-04 Add at least two authorised company organisation owners where practical.
- [ ] C-05 Invite the developer's existing GitHub account with appropriate access.
- [ ] C-06 Transfer the existing repository without creating a duplicate.
- [ ] C-07 Verify issues, branches, tags, actions, deploy integrations and repository links after transfer.
- [ ] C-08 Confirm the repository's default branch and branch naming policy.
- [ ] C-09 Add branch protection / rulesets for main when ownership and team access are ready.
- [ ] C-10 Require production build checks before merge.
- [ ] C-11 Add lint, typecheck and test checks as they become available.
- [ ] C-12 Review repository secrets and remove any accidental secret exposure; rotate exposed credentials.
- [ ] C-13 Confirm public assets are owned/licensed for repository distribution.
- [ ] C-14 Maintain descriptive commits and pull-request history.

## D. Domain research, purchase and DNS

- [ ] D-01 Confirm the exact public brand/domain naming preference with the CEO.
- [ ] D-02 Check availability of preferred domain variants.
- [ ] D-03 Check spelling, memorability, renewal cost and ownership history where relevant.
- [ ] D-04 Confirm registrar, registration period and renewal budget.
- [ ] D-05 Obtain written company purchase approval.
- [ ] D-06 Register the domain in the Teedee-owned registrar account.
- [ ] D-07 Enable registrar MFA, domain lock and company-controlled recovery.
- [ ] D-08 Record renewal date and billing owner.
- [ ] D-09 Decide authoritative DNS provider; evaluate Cloudflare if appropriate.
- [ ] D-10 Add the domain to DNS provider under Teedee ownership.
- [ ] D-11 Add provider verification records.
- [ ] D-12 Configure apex and www records to the approved hosting target.
- [ ] D-13 Choose canonical host (www or apex) and redirect the alternate.
- [ ] D-14 Configure HTTPS and verify certificate issuance.
- [ ] D-15 Configure HSTS only after HTTPS and subdomain behaviour are verified.
- [ ] D-16 If business email is selected, configure mail DNS separately from web records.
- [ ] D-17 Check DNS propagation and confirm correct host routing.
- [ ] D-18 Document the DNS zone and rollback/recovery procedure.
- [ ] D-19 Configure domain renewal reminders and payment responsibility.

A domain value currently present in a repository example file is not proof of registration, ownership or approval.

## E. Netlify and hosting

- [ ] E-01 Identify the currently connected Netlify site and its current owning team.
- [ ] E-02 Confirm current production deployment status and build logs.
- [ ] E-03 Create the Teedee-owned Netlify team if required.
- [ ] E-04 Add at least one company owner/admin and invite the developer as a named user.
- [ ] E-05 Transfer the existing site to the company team or reconnect it using the approved process.
- [ ] E-06 Connect the company-owned GitHub repository.
- [ ] E-07 Confirm deploy previews and production branch behaviour.
- [ ] E-08 Select the hosting/runtime model compatible with the CMS.
- [ ] E-09 Remove static-export settings only after the replacement deployment path is tested.
- [ ] E-10 Configure production and preview environment variables safely.
- [ ] E-11 Connect the custom domain and configure redirects.
- [ ] E-12 Verify HTTPS, build output, routes, headers and form delivery.
- [ ] E-13 Review plan limits, bandwidth, functions/runtime limits and expected recurring costs.
- [ ] E-14 Document deployment rollback and team access.

## F. Database, authentication and media platform

- [ ] F-01 Confirm whether the CMS requires managed PostgreSQL/Auth/Storage.
- [ ] F-02 Evaluate Supabase against cost, region, project ownership, plan limits, backups and exit options.
- [ ] F-03 Obtain company approval before provisioning a paid plan or production project.
- [ ] F-04 Create the database organisation/project under Teedee ownership if Supabase is selected.
- [ ] F-05 Invite the developer with a named, least-privilege role.
- [ ] F-06 Configure project region and environment separation.
- [ ] F-07 Define data model after the CMS PRD is approved.
- [ ] F-08 Add version-controlled migrations and seed data that contains no real personal data.
- [ ] F-09 Define authentication and CMS role policies.
- [ ] F-10 Enable and test Row Level Security for exposed data if applicable.
- [ ] F-11 Define media buckets, upload restrictions and public/private access.
- [ ] F-12 Configure backups/export and test restoration.
- [ ] F-13 Record billing owner, project owner and recovery custodians.
- [ ] F-14 Document database connection and secret rotation without including secrets.

## G. Company information and copy

- [ ] G-01 Confirm legal company name and exact public spelling.
- [ ] G-02 Confirm official logo and approved brand line.
- [ ] G-03 Confirm official brand colours and typography.
- [ ] G-04 Collect current company profile and source documents.
- [ ] G-05 Confirm service catalogue and scope for each service.
- [ ] G-06 Confirm which service categories should be prioritised.
- [ ] G-07 Confirm target customers and service area.
- [ ] G-08 Verify telephone, WhatsApp, email and public address.
- [ ] G-09 Verify social media handles and URLs.
- [ ] G-10 Confirm business hours and response language, if displayed.
- [ ] G-11 Confirm project process and quality/aftercare descriptions.
- [ ] G-12 Collect certifications/registrations only if company wants them published and evidence exists.
- [ ] G-13 Collect testimonials and written consent.
- [ ] G-14 Collect project case study facts and customer publication permissions.
- [ ] G-15 Draft homepage, About, Services, service details, Industries and Contact content.
- [ ] G-16 Draft technical FAQ answers and obtain company review.
- [ ] G-17 Prepare privacy notice and obtain appropriate approval.
- [ ] G-18 Record every content approval and source in the content register.
- [ ] G-19 Remove claims that cannot be substantiated.

## H. Brand and media production

- [ ] H-01 Inventory the existing repository brand assets.
- [ ] H-02 Obtain original logo source/vector file if available.
- [ ] H-03 Confirm approved logo variants and favicon.
- [ ] H-04 Audit existing service images for quality, relevance, rights and factual context.
- [ ] H-05 Collect authentic Teedee installation photos.
- [ ] H-06 Collect approved technician/team images if appropriate.
- [ ] H-07 Collect project photos and written publication permission.
- [ ] H-08 Confirm hero video approach: company footage, licensed stock or conceptual media.
- [ ] H-09 Approve hero video shot list and production budget before filming.
- [ ] H-10 Record video footage in wide framing with mobile-safe crop where possible.
- [ ] H-11 Edit hero video and produce compressed web versions.
- [ ] H-12 Produce hero poster / still fallback and mobile fallback if needed.
- [ ] H-13 Create approved service image crops and social/Open Graph imagery.
- [ ] H-14 Optimise image/video payload and dimensions.
- [ ] H-15 Write alt text and captions.
- [ ] H-16 Record source, licence, consent, usage and approval for every asset.
- [ ] H-17 Remove sensitive site details and location metadata before public use.

## I. Product design and CMS workflow

- [ ] I-01 Validate public audiences and primary enquiry goals.
- [ ] I-02 Confirm sitemap and page priorities.
- [ ] I-03 Confirm CMS users, role names and access boundaries.
- [ ] I-04 Confirm editable content types and fields.
- [ ] I-05 Confirm draft/preview/publish workflow.
- [ ] I-06 Confirm whether review/approval is mandatory before publishing.
- [ ] I-07 Confirm whether the CMS includes enquiry inbox management.
- [ ] I-08 Map website visitor and CMS editor journeys.
- [ ] I-09 Prepare website visual direction and responsive page templates.
- [ ] I-10 Design the CMS dashboard and common editing flows.
- [ ] I-11 Approve brand tokens and interaction/motion rules.
- [ ] I-12 Validate design with real approved content before detailed implementation.

## J. Architecture and engineering

- [ ] J-01 Audit current application, package scripts, routing, content modules and deployment config.
- [ ] J-02 Record current static-export constraint and its effect on CMS design.
- [ ] J-03 Prototype the selected CMS hosting and publishing model.
- [ ] J-04 Approve architecture decision record for rendering and deployment.
- [ ] J-05 Select backend/database/Auth/Storage provider.
- [ ] J-06 Define modular application boundaries.
- [ ] J-07 Define CMS content schemas and validation.
- [ ] J-08 Define database schema, constraints, indexes and migrations.
- [ ] J-09 Define identity and permission model.
- [ ] J-10 Define secure media upload and delivery.
- [ ] J-11 Implement CMS sign-in, sign-out and recovery.
- [ ] J-12 Implement CMS dashboard and role-aware navigation.
- [ ] J-13 Implement approved content CRUD.
- [ ] J-14 Implement preview and publish/unpublish behaviour.
- [ ] J-15 Implement revision/rollback safeguards at agreed level.
- [ ] J-16 Implement SEO metadata editing and output.
- [ ] J-17 Implement media library and alt-text workflow.
- [ ] J-18 Migrate approved local content into the selected content store.
- [ ] J-19 Integrate public page rendering with published content.
- [ ] J-20 Add cache invalidation/revalidation or rebuild trigger.
- [ ] J-21 Correct contact form and establish verified delivery.
- [ ] J-22 Add server-side validation, rate limiting and spam mitigation.
- [ ] J-23 Improve error, loading, empty and success states.
- [ ] J-24 Add logging and operational visibility appropriate to the system.
- [ ] J-25 Review package versions and remove unused dependencies.
- [ ] J-26 Add lint, typecheck, unit/integration and end-to-end coverage.
- [ ] J-27 Review code for maintainability, accessibility and security.
- [ ] J-28 Document technical decisions and deviations.

## K. SEO, AEO and GEO

- [ ] K-01 Confirm target geographic coverage and service terminology.
- [ ] K-02 Build keyword/topic research from actual search intent.
- [ ] K-03 Map primary topics to the correct pages.
- [ ] K-04 Write unique page titles and meta descriptions.
- [ ] K-05 Configure canonical URLs and redirects.
- [ ] K-06 Validate sitemap and robots rules.
- [ ] K-07 Exclude CMS, preview, draft and staging pages from indexing.
- [ ] K-08 Add structured data only for verified visible facts.
- [ ] K-09 Prepare useful answer-led FAQs and service explanations.
- [ ] K-10 Add clear internal links and descriptive headings.
- [ ] K-11 Optimise image alt text and social metadata.
- [ ] K-12 Configure Search Console and Bing Webmaster Tools under company ownership.
- [ ] K-13 Evaluate Google Business Profile only if eligible and company-approved.
- [ ] K-14 Establish analytics and privacy/consent decision.
- [ ] K-15 Record search and performance baselines after launch.

## L. Quality assurance and security

- [ ] L-01 Verify all routes and navigation links.
- [ ] L-02 Test forms end-to-end, including failure cases.
- [ ] L-03 Test CMS roles and direct unauthorised API access.
- [ ] L-04 Test draft isolation and publication behaviour.
- [ ] L-05 Test media uploads, file restrictions and permissions.
- [ ] L-06 Test responsive widths and browsers.
- [ ] L-07 Test keyboard navigation, focus and screen-reader labels.
- [ ] L-08 Test reduced-motion behaviour.
- [ ] L-09 Measure page performance and asset payloads.
- [ ] L-10 Review metadata, structured data, sitemap and robots rules.
- [ ] L-11 Check links, spelling, factual consistency and contact details.
- [ ] L-12 Run dependency and secret checks.
- [ ] L-13 Verify HTTPS and security headers.
- [ ] L-14 Test backup/export and restore procedure.
- [ ] L-15 Prepare a defects and known-limitations register.
- [ ] L-16 Obtain CEO/content approval for release candidate.

## M. Launch, training and handover

- [ ] M-01 Confirm production domain and canonical host.
- [ ] M-02 Confirm company owners can sign in to GitHub, Netlify, registrar/DNS and database provider.
- [ ] M-03 Confirm production build and deployment from company repository.
- [ ] M-04 Configure domain, DNS, HTTPS and redirects.
- [ ] M-05 Run production smoke tests.
- [ ] M-06 Verify contact delivery with the company recipient.
- [ ] M-07 Verify CMS publishing against the live site.
- [ ] M-08 Obtain explicit launch approval.
- [ ] M-09 Conduct CMS owner/editor training.
- [ ] M-10 Provide CMS quick-start guide and training record.
- [ ] M-11 Produce final as-built technical documentation.
- [ ] M-12 Produce deployment, backup, restore and incident runbooks.
- [ ] M-13 Produce architecture, data dictionary, ERD and migration guide based on actual implementation.
- [ ] M-14 Produce test evidence and known-issues register.
- [ ] M-15 Review access, billing and recovery ownership with Teedee.
- [ ] M-16 Agree whether developer access continues, is reduced or is revoked.
- [ ] M-17 Record final acceptance and project closeout.

## N. Future products — not part of the current project

- [>] N-01 Conduct Teedee Ops discovery and process mapping.
- [>] N-02 Define Ops PRD, TRD, data model and pilot.
- [>] N-03 Conduct Teedee Connect discovery and customer journey mapping.
- [>] N-04 Define Connect PRD, TRD and security model.
- [>] N-05 Evaluate shared identity, integrations and event contracts.
- [>] N-06 Estimate infrastructure, staffing, security and ongoing support.
- [>] N-07 Approve separate commercial scope before implementation.

## Current immediate priorities

1. Confirm the scope, CEO sponsor, content approver and company account owner.
2. Resolve company email and infrastructure ownership plan.
3. Correct and verify the enquiry path before any production launch.
4. Confirm content and media requirements.
5. Decide the CMS MVP and prove the hosting/rendering approach.
