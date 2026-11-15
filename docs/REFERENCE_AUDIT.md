# Reference Website Audit: Ucam Home 3

**Reference URL:** https://reactheme.com/products/wordpress/ucam/home-3/  
**Audit Date:** 15 November 2026  
**Auditor:** Antigravity AI Engine  
**Evidence Verified:** Live browser navigation to `https://reactheme.com` (verified by host) with full DOM and responsive audit.

---

## 1. Header and Navigation
- **Initial State:** Transparent overlay positioned directly over the video background hero.
- **Scroll Behavior:** Transitions smoothly to a fixed sticky header with a solid dark navy/black background (`#070c12` / `#0b121b`) and subtle bottom border/box-shadow.
- **Top Notice Bar:** Dark blue/graphite bar above header containing time-limited promotions and secondary contact details (Phone, Email, Business Hours).
- **Logo Placement:** Left-aligned, white uppercase text with high-voltage red circular dot.
- **Menu Hierarchy:** Desktop horizontal navigation (`Home`, `Service`, `Brands`, `Projects`, `Blog`, `Contact`) with dropdown sub-menus on hover.
- **Primary CTA:** Right-aligned prominent pill-shaped button in bright red (`#e80202` / `#ff0036`) with white uppercase text: `"GET A FREE QUOTE"`.
- **Mobile Menu:** Right-sliding offcanvas drawer triggered by hamburger icon, clean white background, high-contrast dark links, accordion submenus.

---

## 2. Hero Section
- **Dimensions:** 100vh full-viewport height on desktop.
- **Video Background:** Looping HTML5 video (`https://madebydesignesia.com/themes/ucam/video/2.mp4`) showing security control room operations and server infrastructure.
- **Overlay:** Deep dark blue/graphite gradient overlay (`rgba(7, 12, 18, 0.75)` to `0.85`), ensuring WCAG AAA text contrast.
- **Badge / Eyebrow:** Centered badge with glowing red dot: `● OFFICIALLY CERTIFIED`.
- **Typography:**
  - H1: Bold geometric all-caps display font (`Orbitron`, ~48px-56px on desktop, line-height 1.15).
  - Subtitle: Clean grotesque sans-serif (`Public Sans`, ~16px-18px, muted cool gray `#a0aab8`).
- **Feature Icon Cards:** 6 horizontal cards embedded at the bottom of the hero (Installation, System Design, Maintenance, Monitoring, Storage, Support) with red neon stroke icons and white uppercase titles.
- **Mobile Adaptation:** Video background disabled on mobile (`.elementor-hidden-mobile`) and replaced with an optimized static WebP poster (`hero-bg.webp`) to conserve bandwidth and reduce latency.

---

## 3. Section Order and Layout
1. **Top Notice Bar & Header:** Secondary contacts + Main navigation + CTA.
2. **Hero (Section 1):** Fullscreen video background + Headline + 6 Feature Icon Cards.
3. **About Us (Section 2):** Split layout (Left: Story, value proposition, "15 Years Experience" counter, "Get a Free Quote" button; Right: High-resolution cutout camera pole with tech glow).
4. **Industries Served (Section 3):** 4 vertical feature cards (Hotel, Property, Distribution, Schools) with photo thumbnails, dark containers, and hover elevation.
5. **Specialist CTA Banner (Section 4):** Full-bleed dark banner with mesh background, strong proposition statement, and right-aligned CTA button.
6. **Brand Accreditations (Section 5):** 6 partner cards with geometric chamfered corners showcasing hardware brand montages.
7. **Testimonials (Section 6):** Horizontal Swiper carousel with customer quotes, avatars, names, and titles.
8. **FAQ Accordion (Section 7):** 6-item dark accordion with smooth expandable answer panels and rotating chevron indicators.
9. **Emergency Contact Bar (Section 8):** 3-column banner highlighting emergency response, quote request, and latest projects.
10. **Gallery Grid (Section 9):** 8-image masonry grid featuring security hardware and technicians with hover zoom.
11. **Footer (Section 10):** 4-column rich dark footer with company overview, navigation links, services directory, operating hours/address, social links, and legal bottom bar.

---

## 4. Spacing, Grid and Visual Rhythm
- **Container Max-Width:** ~1280px to 1320px centered container.
- **Vertical Spacing:** Generous ~100px - 120px top/bottom padding per section.
- **Aesthetic:** 100% dark theme (`#070c12` to `#101924`) punctuated by vibrant neon red highlights.

---

## 5. Mapping Reference to TeeDee Edge Content

| Reference Section (Ucam Home 3) | TeeDee Adaptation | TeeDee Source Content |
|---|---|---|
| Top Notice Bar | Topbar with Lagos & Abuja office contact details | Flyer: Lagos & Abuja addresses, Tel: `0806 899 9442`, `0904 721 4125` |
| Header Nav + CTA | TeeDee Logo + Navigation + "Discuss a Project" CTA | Official TeeDee Logo (`public/brand/teedee-logo-original.jpg`) |
| Video Hero + Eyebrow | Cinematic Video Hero: "Secure. Power. Automate." + Eyebrow | Headline Option A: "Engineering that protects, powers and connects." |
| Hero Feature Cards | 6 Core Capability badges (Security, Solar, Access, Gates, Intercom, Automation) | 10 Services from verified flyer |
| About Us + Experience | Split layout: TeeDee Company Introduction + Engineering Standards | CAC Registration `RC: 8231485` trust badge, Nigerian context focus |
| Industries Served | 4 Sectors: Residential Estates, Commercial Premises, Industrial/Logistics, Hospitality/Hotels | Validated sectors from flyer ("Hotel door Locks", residential/commercial) |
| Specialist CTA Banner | Integrated Systems Proposition Banner: Power + Security + Automation | Core proposition: Continuous power for continuous security |
| Brand Accreditations | Hardware Standards: Supported industry-standard systems | Firman/Felicity, Hikvision, Dahua, ZKTeco compatible architectures |
| FAQ Accordion | 6 Practical Customer FAQs (Assessment, Cost factors, Power integration, Handover) | `specs/04_INFORMATION_ARCHITECTURE.md` FAQ dataset |
| Emergency / Quick Contact Bar | Fast Contact Bar: Direct Phone, WhatsApp Instant Link, Site Assessment Request | Flyer: Phone numbers + WhatsApp deep link + Email |
| Gallery / System Portfolio | System Hardware & Workmanship Showcase (Cameras, Inverters, Gates, Smart Locks) | Verified flyer hardware categories |
| 4-Column Footer | Rich dark footer: Lagos & Abuja offices, full service directory, RC number, social links | Verified company details, RC: 8231485, copyright 2026 |

---

## 6. What to Reproduce vs What to Improve

### Reproduce Structurally:
- Cinematic video background hero with high-contrast text overlay and responsive poster fallback.
- Transparent-to-solid sticky header transition with accessible keyboard navigation.
- Alternating content density: high-impact media heroes $\rightarrow$ structured feature grids $\rightarrow$ readable FAQs.
- Rich 4-column engineering footer with verified corporate credentials.

### Improve for TeeDee Edge:
- **Tone & Typography:** Replace Ucam's sci-fi gaming font (`Orbitron`) with **Manrope** for authoritative, humanized engineering precision; use **Inter** for crisp body UI and **IBM Plex Mono** for technical specs and eyebrows.
- **Palette Sophistication:** Replace neon red (`#e80202`) with TeeDee's **Signal Red (`#B32632`)** and **Signal Orange (`#E57A2F`)**, balanced with **Graphite (`#17191D`)** and **Warm Paper (`#F4F2ED`)** accents.
- **Conversion Paths:** Add prominent Nigerian communication channels (WhatsApp direct chat button + direct phone dials) alongside the assessment request form.
- **Truth Integrity:** Display real corporate credentials (`RC: 8231485`, physical addresses in Lagos and Abuja) and omit unverified claims or fake partner logos.
