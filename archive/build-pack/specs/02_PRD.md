# Product Requirements Document (PRD)

**Product:** TeeDee Edge Automations LTD Website  
**Version:** 1.0  
**Status:** Build specification for Antigravity

## 1. Product vision
The website is TeeDee's primary digital introduction and enquiry platform. It should communicate the company's real capabilities through a coherent story: understand the customer's environment, identify the requirement, plan a suitable system, install and test it, then explain handover and any approved aftercare.

The website should be visually memorable but commercially useful. The visitor must understand the company and find a next step without needing to decode technical jargon.

## 2. User problems
1. Visitors may not know which service category matches their problem.
2. Technical service providers often describe equipment rather than customer outcomes.
3. Buyers need confidence that the company understands site conditions and installation process.
4. Prospective clients need an easy way to ask a question or request an assessment.
5. A visually attractive site can still fail if it is slow, unclear or difficult on mobile.

## 3. Product goals
- Explain TeeDee's approved service portfolio.
- Establish trust through genuine evidence and clear process.
- Make enquiry paths visible and friction-light.
- Communicate across residential, commercial and institutional audiences.
- Deliver a premium, distinctive motion-led experience without sacrificing accessibility or speed.

## 4. Non-goals
- Do not create an ecommerce store.
- Do not publish fixed prices unless supplied and approved.
- Do not imply instant quotes or guaranteed response times.
- Do not invent service-level agreements, warranties or certifications.
- Do not create a customer portal in release one.
- Do not create fabricated case studies to fill empty space.

## 5. Personas and jobs-to-be-done

### Persona 1: Homeowner
**JTBD:** When I need security, backup power or electrical work, help me understand the right next step and contact a credible provider.
Acceptance: services are understandable; mobile contact action is obvious; form asks only useful questions.

### Persona 2: Business owner / operations lead
**JTBD:** When a business system needs to be installed or improved, help me assess whether TeeDee can handle the requirement and how the process works.
Acceptance: business-relevant use cases, scope explanation, process and enquiry path are clear.

### Persona 3: Facility/property manager
**JTBD:** When I manage a building or multiple sites, help me understand the company's relevant capabilities and request a project discussion.
Acceptance: capability information, service groupings, project evidence (when approved), and a structured enquiry form.

### Persona 4: Contractor / institutional partner
**JTBD:** When I need a technical delivery partner, help me review relevant capability and make contact with enough project context.
Acceptance: capability summary, sectors served (only if confirmed), contact details and project enquiry route.

## 6. Information architecture

### Required pages
1. **Home** `/`
2. **About** `/about`
3. **Services overview** `/services`
4. **Service detail pages** `/services/[slug]`
5. **Industries / environments** `/industries`
6. **Projects / work** `/projects`
7. **Project detail** `/projects/[slug]` (only when verified content exists)
8. **Insights / resources** `/insights` (can be phase 1.1 if no approved articles)
9. **Contact / request an assessment** `/contact`
10. **Privacy policy** `/privacy` (draft only; company/legal review required)
11. **404** custom not-found page.

### Header navigation
- Home
- About
- Services (dropdown)
- Industries (if validated)
- Projects (only if there is approved work)
- Insights (only if content exists)
- Contact
- Primary CTA: “Discuss a project” or “Request an assessment” (final CTA wording to approve).

Do not show empty navigation links. If no verified case studies or articles are ready, hide those links rather than populate them with invented content.

## 7. Home page requirements

### 7.1 Header
- Logo uses the supplied official mark.
- Transparent/overlay state on hero if it preserves contrast.
- Sticky or compact state after scroll.
- Desktop navigation and mobile menu.
- Visible keyboard focus and accessible menu semantics.
- CTA available without competing with the logo.

### 7.2 Cinematic hero
- Full-width video background based on the selected Ucam video-background variant.
- Use an approved video asset or temporary clearly-labelled placeholder.
- Provide poster image, fallback image, and mobile fallback.
- Text overlay with sufficient contrast.
- Content:
  - concise eyebrow (e.g. “SECURITY / POWER / CONNECTIVITY / AUTOMATION”);
  - headline (working direction: “Engineering that protects, powers and connects.”);
  - short support copy;
  - primary CTA;
  - secondary CTA if useful.
- Do not autoplay audio.
- Respect reduced motion and data-saving preferences where possible.
- Ensure hero message is visible immediately; do not delay text until video loads.
- Hero video should be compressed, muted, inline, looped and decorative (`aria-hidden` where appropriate).

### 7.3 Intro / positioning strip
- Brand line: “Secure. Power. Automate.”
- One short explanation of integrated services.

### 7.4 Service showcase
Use image-led cards and/or a more editorial composition inspired by Ucam.
Initial categories, subject to flyer and company confirmation:
- Electronic security / CCTV;
- Solar and inverter systems;
- Electrical installations;
- Access control and smart locks;
- Networking and connectivity;
- Building automation;
- Technical training (confirm whether it is a public-facing commercial service).

Each card includes:
- category;
- clear outcome-led sentence;
- appropriate real/licensed image;
- link to service detail;
- deliberate hover/focus state.

### 7.5 About / company introduction
- Explain what TeeDee does and how it approaches projects.
- Use approved company story and facts only.
- No invented founding year, team size, experience, certifications or project counts.
- Pair copy with genuine company/team/work imagery when supplied.

### 7.6 Process section
Illustrate a practical process, subject to management approval:
1. Understand the requirement.
2. Assess the site and context.
3. Recommend and define scope.
4. Install and configure.
5. Test, explain and hand over.
Do not imply every service always follows an identical process if it does not.

### 7.7 Industries / environments
Potential segments: residential, commercial premises, property/facility, institutions/contractors. Publish only the segments management confirms.

### 7.8 Proof / projects
- Use approved projects only.
- Each project should include context, requirement, scope, solution, evidence and result where known.
- Do not expose client names, addresses, camera views, credentials, access details or identifiable layouts without written permission.
- If no approved projects exist, use a process/equipment section rather than fake case studies.

### 7.9 Testimonials / trust
- Only genuine approved testimonials.
- If unavailable, omit the section or replace it with a factual “How we work” section.
- Never create placeholder testimonials that could be mistaken for real reviews.

### 7.10 FAQ
Include useful questions such as:
- What information should I prepare before requesting a CCTV assessment?
- What affects the cost of an installation?
- Can existing systems be assessed or upgraded?
- What should I consider before choosing an inverter or solar setup?
- What happens after installation?
Answers must be reviewed by a technical representative. Avoid unapproved price or warranty promises.

### 7.11 Final CTA and footer
- Clear enquiry invitation.
- Approved phone, email, WhatsApp, address and social links only.
- Footer service links and legal links.
- No fabricated business hours.

## 8. Service detail page requirements
Each service detail page should include:
- service title;
- customer problem/outcome;
- short overview;
- what the service may include (approved scope only);
- typical environments/use cases;
- key planning considerations;
- process;
- relevant media;
- related services;
- CTA to discuss the requirement.

Do not publish detailed technical specifications or product brands unless confirmed.

## 9. Contact and enquiry requirements
Form fields should be proportionate:
- Name (required);
- Email or phone (at least one required);
- Organisation (optional);
- Service of interest (select; allow “Not sure”);
- Property/project type (optional);
- Location/area (optional);
- Brief description (required);
- Preferred contact method (optional).
Add clear consent/privacy language reviewed by the company. Validate inputs and provide success/error states. Do not claim a message was sent unless a working backend or form provider confirms it.

If no backend is configured in the first build, create a clearly documented form integration placeholder and a working direct contact fallback using verified channels.

## 10. Interaction requirements
- Navigation dropdowns and mobile drawer;
- service card hover/focus states;
- image reveal transitions;
- scroll-triggered section entrances;
- subtle parallax only where it does not hurt usability;
- animated counters only for verified numbers;
- carousels only when there is enough real content;
- accordion FAQ;
- magnetic or cursor-responsive buttons only if keyboard/touch equivalents remain excellent;
- form validation and feedback;
- loading states for any real async actions.

All interactions must have a meaningful purpose and a non-motion fallback.

## 11. Responsive requirements
Breakpoints should be content-driven, not tied to a single device list. Test at minimum:
- 360px mobile;
- 390px mobile;
- 768px tablet;
- 1024px small desktop;
- 1440px desktop;
- 1920px wide desktop.

No horizontal overflow. Video, navigation, type scale, card layouts and motion must adapt deliberately.

## 12. Content management
For release one, content may be stored in typed local data/config files. Keep service content, contact details, navigation and metadata separate from page components. Structure the project so a CMS can be introduced later without rewriting the UI.

## 13. Analytics events
Prepare event hooks, but do not install invasive analytics without approval.
Suggested events:
- `primary_cta_click`
- `service_card_click`
- `contact_form_start`
- `contact_form_submit`
- `contact_form_success`
- `whatsapp_click`
- `phone_click`
- `email_click`
- `project_open`
Track no sensitive site/security information.

## 14. Acceptance criteria
The product is accepted for presentation when:
- all approved pages are implemented;
- content is grounded in company-approved information;
- original logo is used correctly;
- hero video has fallback and does not block content;
- all nav items and CTAs work;
- contact route has a working, tested destination or clearly identified integration requirement;
- responsive tests pass at listed widths;
- reduced-motion mode is respected;
- keyboard navigation and focus states work;
- no obvious console errors or broken assets;
- SEO metadata and social cards are present;
- build and deployment instructions are documented.
