# Website Source and Asset Inventory

**Prepared:** 27 November 2026  
**Scope:** Teedee public website and website CMS only. Teedee Ops is excluded.  
**Status:** Working inventory; company claims and publication rights still require approval.

## Source-of-truth decision

The official Teedee logo is the standalone logo image supplied in this project as `IMG-20261112-WA0007.jpg` (1080 × 550). The user confirmed this is the logo to use. A copy is preserved in this branch at `public/brand/teedee-logo-official-source.jpg`.

The existing `public/brand/logo-primary.svg` and `logo-light.svg` are not the same artwork. They are recreated working variants, not authoritative logo masters. Do not use them as the official logo or overwrite the supplied artwork with a redraw. The source image is raster with a white background; request an official transparent SVG/PDF/AI/EPS master or prepare a carefully reviewed derivative while preserving this source file.

## Available source materials

| Material | What it provides | Website use | Cautions |
|---|---|---|---|
| `Company Profile Teedee_034241.pdf` | Company overview, services, service approach, industry references, contact details | Source for draft copy and content questions | Verify current facts, contacts, claims and rights before publication |
| `Teedee Edge Profile.pdf` | 16-page visual company profile with services, manufacturer logos, industry imagery, client and contact pages | Reference for content and possible asset extraction | Image-based; obtain individual originals and permission before reusing its embedded imagery/logos |
| `IMG-20261112-WA0006.jpg` | 574 × 744 services flyer, official logo, service list, Lagos/Abuja contact/location text | Reference for current service emphasis and contact verification | Flyer-composite image; not a hero asset; check text and contact accuracy |
| `IMG-20261112-WA0007.jpg` | 1080 × 550 standalone official logo artwork | Brand source; preserved at `public/brand/teedee-logo-official-source.jpg` | Raster, white background; not a production transparent/vector master |
| `143 FITNESS Revised 2.pdf` | Addressed introduction and detailed CCTV quote for a named customer | Private internal reference only; possible case-study lead after permission and redaction | Do not place the quote, customer details, prices or unredacted file in the public repository |

## Content we can build from

The supplied profile supports drafts about CCTV and video surveillance; access control and biometrics; alarm systems; electric fencing and wiring; solar and inverter installation; networking and intercoms; smart homes/building automation; and technical training. It also describes a customer-led process that includes understanding requirements, site survey, design, equipment selection, installation/testing, maintenance and warranty.

The profile mentions medical, education, financial, religious and manufacturing environments. Treat these as candidate audiences, not confirmed target-market priorities. Training appears in the company profile and flyer but not in the current website's core positioning; confirm whether it belongs in this site's navigation.

## Conflicts and verification needed

- The PDFs contain different address wording and email addresses; the flyer lists Lagos and Abuja, while the company profile lists Lagos only. Verify current official public contacts, addresses and service areas with Teedee.
- The current site contains detailed product, performance and scope statements that go beyond the general profile. A technical reviewer must approve each specific claim.
- The PDFs include manufacturer marks and client imagery. Their appearance in a profile does not grant permission for separate website use.
- The quote contains a named client, project scope, commercial prices and contact details. Keep it out of public source control unless Teedee authorizes a properly redacted case study.
- The uploaded flyer and profile are useful reference artifacts, but use responsive web content and original/approved images rather than placing a whole brochure page into the website.

## GitHub asset baseline

The repository already contains:
- `public/brand/logo-primary.svg`, `logo-light.svg`, and favicon assets;
- `teedee-logo-original.jpg` and `teedee-flyer-original.jpg` (their approval/source relationship should be checked);
- service illustrations and WebP files under `public/images/services/`.

The SVG wordmark artwork differs from the confirmed official logo. Keep it clearly labelled as a legacy/recreated working asset until replaced or removed after a visual implementation review. Do not delete it in this inventory change.

## Recommended repository organization

- Keep production-ready, approved website media under `public/brand/` and `public/images/`.
- Keep source PDFs, customer quotations, and private originals outside public asset paths. Store approved project references in a controlled non-public location.
- Add a small `docs/content-sources/` area for source register, claim approvals, content mapping and asset rights records; do not commit sensitive client material.
- Keep project planning docs in `docs/`, code in `src/`, and legacy material in `archive/`; avoid duplicate copies of the same source.
- Use descriptive filenames and record origin, approval, rights, intended use and alt text for every published photo or logo derivative.

## Suggested next sequence

1. Confirm official public contacts, service list, target audiences and whether training is in scope for the website.
2. Request the original vector logo and approved light/dark usage rules. Use the supplied JPG as the confirmed artwork meanwhile.
3. Inventory each existing brand/service image for source, accuracy, permission, resolution and intended page.
4. Ask for real CCTV and solar installation photos/video with written publication permission; screen for customer addresses, camera views, access codes and other sensitive security information.
5. Approve content and claims in the existing content approval register.
6. Replace the unrelated externally hosted homepage video with approved Teedee footage or an intentional static visual.
7. Fix and verify the enquiry flow before launch.
8. Prove the CMS publishing architecture against the current static-export setup before building the admin interface.

This inventory records what was observed in the supplied sources and repository. It does not approve unverified marketing claims, establish media licensing, or claim that a production asset replacement has been deployed.
