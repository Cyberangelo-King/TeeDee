# Information Architecture and Core User Journeys

**Version:** 0.1 | **Date:** 24 November 2026 | **Status:** Proposed

## 1. Public website sitemap

The structure below is a proposed target based on the current repository and the archived planning material. The final navigation is conditional on approved content; empty or unsupported sections must not be published.

| Route | Purpose | Status |
|---|---|---|
| / | Company introduction, value and key routes | Existing; refine |
| /about | Verified company story, approach and capability | Existing; refine |
| /services | Overview of approved service categories | Existing; refine |
| /services/[slug] | Detail page for each approved service | Existing dynamic route; audit |
| /industries | Relevant environments or customer contexts | Existing; publish after validation |
| /projects | Approved project evidence | Optional; only when evidence and permission exist |
| /projects/[slug] | Individual case study | Optional |
| /insights | Educational resources | Later / content dependent |
| /contact | Contact information and project enquiry | Existing; verify end-to-end |
| /privacy | Approved privacy notice | Existing draft; review |
| /thank-you | Submission acknowledgement | Existing or equivalent; verify flow |
| not-found | Branded 404 state | Existing; verify |

A terms page, accessibility statement, redirects or other legal pages may be added if Teedee's legal review or operating requirements call for them.

## 2. Primary navigation

Proposed: Home, About, Services, Industries (if approved), Projects (conditional), Insights (conditional), Contact.

Primary CTA wording should be selected with Teedee. Candidate wording includes “Discuss a project” or “Request an assessment”. It must not imply a guaranteed response time or free service unless the company approves that promise.

## 3. Home page content sequence

1. Header and primary navigation.
2. Hero with clear proposition, support copy and enquiry CTA.
3. Brand promise / short positioning statement.
4. Approved service categories.
5. Company introduction and approach.
6. Integrated capabilities or systems explanation, if factually supported.
7. Industries / environments, if validated.
8. Delivery process, approved by management.
9. Genuine project evidence, only where permission exists.
10. Educational content or FAQ, where technically reviewed.
11. Final enquiry CTA.
12. Footer with verified contact and legal links.

The exact sequence will be informed by design exploration and actual content inventory. This order is not a mandate to include empty sections.

## 4. Service detail template

Each published service page should answer:
- What customer need does this service address?
- What does the service involve?
- What is and is not included?
- Which environments or situations may be suitable?
- What information helps Teedee assess a request?
- What are the relevant planning considerations?
- What is the next step?

A service page should not list unverified brands, detailed specifications, certification, warranty or guaranteed results.

## 5. CMS information architecture

Proposed CMS navigation:

- Overview
- Website Content
  - Pages
  - Services
  - FAQs
  - Industries (if approved)
  - Projects / Case Studies (conditional)
  - Insights (later)
- Media Library
- SEO / Site Metadata (scope dependent)
- Users and Roles (administrator/owner only)
- Activity / Revisions (scope dependent)
- Settings

This is a conceptual navigation model. The final menu should reflect the approved CMS feature set, not create controls that have no implemented behaviour.

## 6. Proposed content entities

| Entity | Key content | Notes |
|---|---|---|
| Page | Title, slug, sections/content blocks, status, SEO metadata | Structured blocks preferred to arbitrary HTML |
| Service | Name, slug, summary, outcomes, approved scope, media, FAQs | Company technical review required |
| FAQ | Question, approved answer, related service, status | Do not publish unreviewed technical advice |
| Industry / Environment | Name, context, needs, related services | Optional; validate actual markets |
| Project / Case Study | Context, scope, approved evidence, result, permissions | Only with written publication permission |
| Insight / Article | Title, author/reviewer, body, status, SEO fields | Later unless content owner and schedule exist |
| Media | File, type, alt text, caption, owner/source, licence/permission | Must be access-controlled |
| Navigation / Site Settings | Approved links, contact settings, global metadata | Limit editing and validate destinations |

## 7. Main public user journeys

### Visitor to enquiry
Landing page → understand relevant service → review detail / process / FAQ → choose contact action → submit enquiry or use verified direct channel → see confirmation or useful failure fallback.

### Visitor uncertain about service
Landing page → service categories → “not sure” or general enquiry → describe need → company receives request through approved channel.

### Repeat visitor
Search result or direct URL → service or about page → contact CTA. Ensure page titles, internal links and canonical URLs support this route.

## 8. Main CMS user journeys

### Editor creates a draft
Sign in → open content type → create or edit record → enter validated content and metadata → save draft → preview → submit for approval or notify publisher.

### Publisher releases content
Sign in with publish permission → review preview and content status → publish → verify public URL → check page metadata and media rendering.

### Administrator manages access
Sign in with admin permission → invite or deactivate CMS user through the approved process → assign minimum role → confirm the user can only access permitted functions.

### Media management
Open media library → upload allowed file → validate file type/size → enter alt text and descriptive metadata → associate with approved content → verify public delivery and permissions.

## 9. Navigation and content governance rules

- Do not display links to unpublished or empty content.
- Do not allow draft content to appear in public page queries, API responses or search indexes.
- Avoid duplicate or conflicting slugs.
- Redirect changed public URLs where needed.
- Do not allow arbitrary external links or HTML without appropriate validation and sanitisation.
- Keep CMS navigation limited to implemented capabilities.
