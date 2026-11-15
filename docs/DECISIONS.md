# Architecture & Design Decisions Record

## Decision 1: Hybrid Dark/Warm Architectural Palette
- **Date:** 15 November 2026
- **Context:** The reference website (Ucam Home 3) is 100% dark, giving it a heavy security/surveillance tone. TeeDee Edge Automations operates across security, solar/inverter energy, building wiring, and smart automation.
- **Decision:** Implement a **hybrid dark/warm design system**. Use deep **Graphite (`#17191D`)** for the high-impact cinematic hero, header, and engineering footer, balanced with **Warm Paper (`#F4F2ED`)** and crisp white surfaces for service breakdowns, case studies, and FAQ sections.
- **Consequence:** Preserves the cinematic authority of Ucam while providing a humanized, accessible experience for diverse Nigerian and international clientele.

## Decision 2: Complete 10-Service Portfolio from Official Flyer
- **Date:** 15 November 2026
- **Context:** Initial PRD assumed 7 services. Inspection of the user-supplied official flyer revealed 10 explicit services.
- **Decision:** Incorporate all 10 verified services into the architecture:
  1. CCTV Systems
  2. Solar and Inverter Installation
  3. Access Control and Biometrics Solutions
  4. Fire/Burglar Alarm System
  5. Electric Wiring and Fencing
  6. Automated Gate System
  7. Smart Locks / Hotel Door Locks
  8. Networking and Intercoms Installation
  9. Smart Homes / Building Automation
  10. Technical Training
- **Consequence:** Full alignment with the company's real commercial flyer.

## Decision 3: Tech Stack & Styling Foundation
- **Date:** 15 November 2026
- **Decision:** Next.js 15 (App Router) + React 19 + TypeScript (Strict Mode) + Tailwind CSS + Framer Motion.
- **Rationale:** Standard modern production stack specified in TRD, supporting server components for maximum SEO, streaming video backgrounds, and responsive micro-interactions.

## Decision 4: Conversion Optimization for Nigerian & International Markets
- **Date:** 15 November 2026
- **Decision:** Provide dual conversion pathways:
  1. Structured interactive assessment inquiry form (`/contact` or modal).
  2. Direct one-click WhatsApp action (`https://wa.me/2348068999442`) and clickable telephone dials for Lagos and Abuja lines.
- **Rationale:** Nigerian B2B and residential clients heavily prefer instant WhatsApp and phone validation before booking on-site engineering surveys.
