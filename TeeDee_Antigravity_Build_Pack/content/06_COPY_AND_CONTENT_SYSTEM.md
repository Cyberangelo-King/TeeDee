# Copy and Content System

## 1. Voice
Clear, capable, calm, precise and accessible.

Write for a person who has a problem to solve, not for an engineer trying to impress another engineer.

### Do
- name the service;
- explain the customer outcome;
- use concrete language;
- explain what happens next;
- be honest about what depends on site conditions;
- use short paragraphs and useful headings.

### Avoid
- empty claims (“best”, “number one”, “world-class”) without evidence;
- fear marketing;
- unexplained jargon;
- absolute guarantees;
- generic AI phrases;
- fake urgency;
- unapproved prices, timelines or warranties;
- em-dash-heavy or robotic copy.

## 2. Working homepage copy direction
These are draft options, not final approved claims.

**Eyebrow:** SECURITY / POWER / CONNECTIVITY / AUTOMATION

**Headline option A:** Engineering that protects, powers and connects.

**Headline option B:** Better-connected spaces begin with better systems.

**Headline option C:** The systems behind safer, smarter spaces.

**Supporting copy direction:** TeeDee Edge brings security, power, electrical and automation solutions together around the needs of your property or business. Tell us what you need to protect, power or connect, and let's work out the right next step.

**Primary CTA:** Discuss a project

**Secondary CTA:** Explore our services

**Brand strip:** Secure. Power. Automate.

Final wording must be reviewed by TeeDee management.

## 3. Service copy template
For every service:
1. Customer problem;
2. Desired outcome;
3. What TeeDee actually provides;
4. What affects planning/scope;
5. How to start.

Example framing only:
“Plan a CCTV installation around the areas that matter. The right setup depends on the property, coverage requirements, lighting, recording needs, network and available power. Start with a site assessment so the system can be scoped properly.”

## 4. FAQ draft topics
- What information should I prepare before requesting a CCTV assessment?
- What affects the cost of an installation?
- Can an existing system be assessed or upgraded?
- What should I consider before choosing a solar or inverter system?
- Can security, access and networking systems work together?
- What happens after installation and testing?

All technical answers need review by a qualified TeeDee representative.

## 5. Content approval matrix
| Content type | Source | Approval |
|---|---|---|
| Company name/logo | supplied assets | confirm exact legal styling |
| Services | flyer + company confirmation | technical/management |
| Contact details | flyer | management |
| Company history | company records | management |
| Certifications | certificates/records | management |
| Project stories | project records + permission | client and management |
| Testimonials | original customer statement | customer and management |
| Warranty/maintenance | company policy | management |
| Team bios | supplied biographies | each person/management |
| Service areas | company confirmation | management |

## 6. Content data model
Store page copy in typed content files rather than embedding it in complex components. Each service record should have:
- `slug`
- `title`
- `shortDescription`
- `customerOutcome`
- `overview`
- `scopeItems`
- `planningFactors`
- `useCases`
- `image`
- `alt`
- `relatedServices`
- `ctaLabel`
- `approvalStatus`

Use `approvalStatus: "draft" | "approved" | "needs-confirmation"` internally. Only approved content should appear on production pages.
