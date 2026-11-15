# Visual Direction and Design System

**Project:** TeeDee Edge Automations LTD  
**Tagline:** Secure. Power. Automate.  
**Version:** 1.0

---

## 1. Brand Identity & Design Tokens

### 1.1 Color Tokens
```css
:root {
  /* Brand Primary */
  --td-red: #B32632;          /* Signal Red: Primary CTAs, active indicators, alert borders */
  --td-red-hover: #961E28;    /* Signal Red Hover */
  --td-orange: #E57A2F;       /* Signal Orange: Secondary accents, diagrams, technical badges */
  --td-orange-hover: #C96620; /* Signal Orange Hover */

  /* Neutral Dark Surfaces */
  --td-graphite: #17191D;     /* Deep Graphite: Hero backgrounds, dark section blocks, headers, footers */
  --td-graphite-dark: #0F1114;/* Deepest carbon black for contrast layers */
  --td-graphite-card: #202329;/* Card backgrounds on dark surfaces */
  --td-graphite-border: rgba(255, 255, 255, 0.08);

  /* Light Surfaces */
  --td-paper: #F4F2ED;        /* Warm Paper: Alternating section backgrounds */
  --td-white: #FFFFFF;        /* Pure white for crisp contrast */
  --td-slate-50: #F8FAFC;
  --td-slate-100: #F1F5F9;
  --td-slate-200: #E2E8F0;
  --td-slate-600: #475569;
  --td-slate-800: #1E293B;

  /* Typography Colors */
  --td-text-primary-dark: #FFFFFF;
  --td-text-secondary-dark: #94A3B8;
  --td-text-primary-light: #17191D;
  --td-text-secondary-light: #475569;
}
```

### 1.2 Typography Hierarchy
- **Display & Headings:** `Manrope`, sans-serif (Weights: 600 SemiBold, 700 Bold, 800 ExtraBold). Responsive scale with `clamp()`.
- **Body & Interface:** `Inter`, sans-serif (Weights: 400 Regular, 500 Medium, 600 SemiBold). Clean, highly legible UI copy.
- **Technical & Eyebrows:** `IBM Plex Mono`, monospace (Weights: 500 Medium, 600 SemiBold). Used for section indices, CAC registration badges (`RC: 8231485`), and technical specifications.

### 1.3 Motion Tokens (Framer Motion)
```typescript
export const motionTokens = {
  transition: {
    micro: { duration: 0.18, ease: [0.16, 1, 0.3, 1] },
    standard: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
    reveal: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
  stagger: {
    cards: 0.08,
    nav: 0.05,
  },
  reducedMotion: {
    duration: 0.01,
  }
};
```

---

## 2. Layout & Spacing Rules
- **Container Max-Width:** `1280px` (`max-w-7xl` in Tailwind) with responsive side padding (`px-4 sm:px-6 lg:px-8`).
- **Section Padding:**
  - Desktop: `py-20 lg:py-24` (~80px - 100px vertical padding).
  - Mobile: `py-14 sm:py-16` (~56px - 64px vertical padding).
- **Cards & Grids:**
  - Service grid: 3-column desktop (`lg:grid-cols-3 md:grid-cols-2 grid-cols-1`).
  - Feature highlights: 2-column split with 50:50 ratio.
  - Border radius: `rounded-xl` (12px) to `rounded-2xl` (16px) for approachable yet sharp engineering lines.

---

## 3. UI Component Inventory
1. **Header:** Sticky glassmorphic bar (transparent on hero $\rightarrow$ solid graphite with backdrop-blur on scroll).
2. **Hero:** Full-screen video background, dark overlay, Signal Red glowing status dot, Manrope H1, dual CTAs ("Request Site Assessment" + "WhatsApp Instant Chat").
3. **Brand Banner:** "Secure. Power. Automate." with CAC RC badge and core engineering pillars.
4. **Service Cards:** High-contrast cards with equipment image preview, service title, outcome summary, and arrow link.
5. **Process Flow:** 5-step numbered interactive installation sequence.
6. **Sector Grid:** Residential, Commercial, Industrial, Hospitality.
7. **FAQ Accordion:** Expandable answers with accessible ARIA states.
8. **Contact Section:** Dual column (Lagos & Abuja addresses + interactive assessment request form).
9. **Footer:** Dark 4-column layout with certified company info and quick access links.
