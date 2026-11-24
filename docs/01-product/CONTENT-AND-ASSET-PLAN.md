# Content, Brand and Media Production Plan

**Version:** 0.1 | **Date:** 24 November 2026 | **Status:** Working plan

## 1. Purpose

The website's credibility depends on accurate content and genuine, properly licensed visual material. This plan identifies what must be collected, written, reviewed, produced and approved before publication.

## 2. Company information pack

The company has supplied two 16-page company profiles: `Teedee Edge Profile.pdf` (February 2026; primary current editorial source) and `Company Profile Teedee_034241.pdf` (June 2024; historical corroboration). Their extracted content is organised in the [Company Source of Truth](../00-foundation/COMPANY-SOURCE-OF-TRUTH.md). The newer profile should take precedence where wording differs, while all contact details, service availability, manufacturer relationships, warranties, training claims and public-facing statements still require owner confirmation.

Teedee should provide or approve:

- Exact legal company name and approved public display name.
- Short company description and approved positioning statement.
- Service catalogue, scope boundaries and service-specific terminology.
- Priority customer groups and geographic service coverage.
- Company history, operating model and team details, only if intended for publication and supported by facts.
- Official telephone, WhatsApp, email, address and social links.
- Business hours, response expectations and aftercare/warranty language, only if confirmed.
- Certifications, registrations, memberships, partner status and product brands, with evidence.
- Project references, photos, outcomes and permissions.
- FAQ answers reviewed by a technically competent company representative.
- Privacy contact, form recipient and data retention instructions.

## 3. Copy production workflow

1. Gather source material from authorised company sources.
2. Create a content inventory and identify missing facts.
3. Draft page content in plain language with clear customer outcomes.
4. Have technical claims reviewed by the relevant company representative.
5. Have brand, legal and commercial claims approved by the authorised company approver.
6. Record approval date and source.
7. Enter approved copy into the site/CMS.
8. Check published page against the approved version.

No placeholder text, invented metrics, fake testimonials or imagined company history may reach production.

## 4. Asset categories to source

| Asset group | Required items | Preferred source |
|---|---|---|
| Brand | Logo master, approved light/dark variants, brand guide, flyer | Teedee |
| Hero video | Wide establishing footage, security/power/network details, safe work footage, final environment shot | Company footage or commissioned production |
| Service photography | CCTV, access control, power/solar, electrical, networking and other confirmed services | Real company work or licensed stock |
| Project evidence | Before/after, installation context, completed result and concise project notes | Real project with written permission |
| People | Approved staff portraits, team-at-work material | Company-approved photography |
| Graphics | System diagrams, process illustrations, icons | Original design based on approved facts |
| Social/share | Open Graph / social cover images | Approved brand and media assets |

## 5. Video production specification

The hero media must support the message rather than become a substitute for it.

Required considerations:
- Confirm whether Teedee has authentic usable footage.
- Establish the creative direction and shot list before production.
- Avoid showing sensitive camera feeds, access codes, alarm panels, customer addresses, floor plans or exploitable security layouts.
- Do not imply footage is a real Teedee project if it is stock or AI-generated.
- Capture both wide and portrait/vertical-safe framing where possible.
- Produce a compressed web version, appropriate mobile alternative if useful, and a poster image.
- Remove audio or ensure the experience never autoplays sound.
- Supply a static fallback for reduced-motion and constrained networks.
- Record source, licence, permission, editor, versions, dimensions and file size.

Actual filming, travel, voiceover, actors, specialised equipment, paid stock and editing costs must be approved separately before commitment.

## 6. Image production and optimisation

- Prefer authentic Teedee work where publication is authorised.
- Use licensed stock only when it accurately represents the service and does not masquerade as a company project.
- Use conceptual imagery only where it cannot reasonably be mistaken for documentary evidence.
- Avoid generic AI-looking industrial imagery, unsafe electrical practices and visually implausible equipment.
- Prepare responsive formats and sizes; use AVIF/WebP where supported.
- Provide intrinsic dimensions/aspect ratios to avoid layout shift.
- Lazy-load below-the-fold imagery; prioritise the hero poster where it is the largest contentful paint candidate.
- Write meaningful alt text for informative images; decorative images should not produce redundant screen-reader output.
- Remove location metadata from sensitive project imagery before publication.

## 7. Permission and rights register

Every non-original or project-specific asset needs a recorded source and right to use it.

Minimum fields:
- Asset ID and filename.
- Type and description.
- Source / creator.
- Owner or licence basis.
- Permission/consent reference.
- Permitted channels and duration.
- Whether editing or cropping is permitted.
- Whether the asset can be published publicly.
- Sensitive details reviewed/removed.
- Alt text, caption and intended route.
- Approval owner and date.

No customer-identifying asset is published without the required permission.

## 8. Current repository asset audit

The repository already contains brand assets and service imagery. Their presence in Git does not establish that they are final, approved, high-resolution, correctly licensed or factually representative. Every existing asset must be inventoried and reviewed before production use.

## 9. Asset checklist

- [ ] Obtain original logo source file and confirm approved variants.
- [ ] Obtain current brand guide and confirm palette/type direction.
- [x] Extract both supplied 16-page company profiles into the company source-of-truth register; record page-level sources, service details, contact details, visual observations and unverified claims.
- [ ] Obtain owner/technical approval for extracted company facts before publication.
- [ ] Audit original profile PDFs and transcribe any remaining approved facts for company sign-off.
- [ ] Collect genuine service photography.
- [ ] Collect project evidence and written permission.
- [ ] Confirm whether a hero video can be filmed or licensed.
- [ ] Prepare shot list and production budget if filming is needed.
- [ ] Prepare hero poster and mobile fallback.
- [ ] Optimise all images/video and record sizes.
- [ ] Complete alt text, captions and rights register.
- [ ] Remove sensitive metadata and site details.
- [ ] Obtain final company content and asset approval.

## 10. Publication gate

An asset or content item is production-ready only when its factual accuracy, permission, quality, accessibility metadata and intended use have been checked and its approver is recorded.
