# Design System, UI Direction and Motion Specification

## 1. Brand foundation
Brand idea: **Secure. Power. Automate.**

Positioning: a practical systems partner for safer, powered and better-connected spaces.

Character: capable, precise, assured, accessible.

## 2. Colour tokens
Use the established palette with restraint.

```css
:root {
  --td-red: #B32632;
  --td-orange: #E57A2F;
  --td-graphite: #17191D;
  --td-paper: #F4F2ED;
  --td-white: #FFFFFF;
  /* Add neutral slate tokens only after checking the existing design-system source. */
}
```

Rules:
- Red is the primary action/emphasis colour.
- Orange is a secondary accent for highlights, rules and diagrams.
- Graphite anchors dark surfaces and typography.
- Warm Paper and White provide breathing room.
- Do not use red and orange at equal intensity everywhere.
- Avoid routine gradients; a subtle red/orange blend is reserved for a special campaign/hero treatment if it supports the existing identity.

## 3. Typography
Proposed mapping to confirm against the existing system:
- Manrope: display and headings.
- Inter: body copy and interface.
- IBM Plex Mono: technical labels, indices and small metadata.

Use a responsive type scale with `clamp()`. Body text should remain comfortable on mobile. Avoid tiny uppercase labels as the only means of communicating meaning.

## 4. Layout
- Use a consistent max-width container.
- Strong editorial grid and deliberate asymmetry where the reference supports it.
- Large, intentional whitespace.
- Image crops should be planned per section.
- Use fine dividers and measured grids.
- Circular/target motifs can reference monitoring, direction, connection and feedback; they must remain secondary and never become a substitute logo.

## 5. Photography
Priority:
1. Actual TeeDee project photos/videos with written permission.
2. Company-owned equipment/technician footage.
3. Properly licensed stock media that accurately depicts the subject.
4. Clearly labelled temporary placeholders during development.

Show equipment in context: cameras, access readers, inverters, gate motors, network cabinets and finished environments. Natural colour grading. Avoid generic hacker visuals, fake CCTV rooms, excessive neon, stock photos implying a real TeeDee project, or unsafe electrical work.

## 6. Logo handling
- The supplied logo remains the recognised source identity.
- Preserve proportions, colour, clear space and legibility.
- Do not stretch, skew, bevel, glow, outline or add filters.
- Use only quiet backgrounds where the mark remains legible.
- Do not silently redraw the logo.
- A clean SVG/PDF vector master may be prepared only from an approved source or with company approval.
- Create light/dark lockups only as faithful approved derivatives.
- Favicon/symbol extraction must use an approved portion of the original mark.

## 7. Motion philosophy
Motion should clarify hierarchy, guide attention, provide feedback and make the brand feel considered. Do not animate for decoration alone.

### Motion tokens (initial values; tune after visual QA)
- Micro interaction: 120–220ms
- Standard transition: 240–420ms
- Section reveal: 500–850ms
- Stagger: 50–100ms
- Easing: use a small shared set; prefer natural ease-out for entrances and ease-in-out for state changes.
- Movement distance: small; avoid large distracting translations.

### Motion catalogue
1. Header: transparent-to-solid/compact transition on scroll.
2. Hero: video background with restrained overlay; headline line reveal; CTA hover response.
3. Section entrance: opacity + slight translate/clip reveal; once per section or carefully re-entered.
4. Image reveal: mask/clip-path reveal on scroll; no layout shift.
5. Service cards: image scale 1.02–1.05, overlay shift, arrow movement, border/underline response.
6. CTA buttons: subtle magnetic response only on pointer devices; clear hover, focus and pressed states.
7. FAQ: height/opacity transition; correct ARIA expanded state.
8. Counters: only real numbers; animate once, with static value available immediately.
9. Lottie: small technical diagrams for system relationships, not decorative loops everywhere.
10. Carousel: manual controls, keyboard support, no aggressive auto-advance.
11. Page transitions: short and non-blocking; do not delay navigation.
12. Loading: logo mark only if short and skippable; never make a preloader hide usable content for several seconds.

### Reduced motion
When `prefers-reduced-motion: reduce`:
- disable parallax and large translations;
- stop nonessential looping animations;
- replace autoplay hero video with poster or static image;
- remove smooth scrolling;
- preserve all content and controls;
- keep short state feedback if it is essential to understanding interaction.

## 8. Video art direction
Hero concept: cinematic, real-world infrastructure and environments. Possible shot sequence:
- wide modern building/environment;
- close detail of a security camera or access system;
- clean electrical/power equipment detail;
- technician hands preparing/connecting equipment safely;
- connected environment / finished installation;
- final wide establishing shot.

Do not show client-sensitive camera footage, access credentials, addresses or identifiable site layouts without explicit permission.

Avoid generic AI-looking footage. If AI-generated video is used, it must not imply a real TeeDee project, real staff member or actual customer site. Use conceptual footage only where that distinction is clear.

## 9. GIF, Lottie and video guidance
- Prefer Lottie for crisp vector diagrams and small UI illustrations.
- Prefer MP4/WebM for photographic loops.
- Use GIF only for simple short loops where transparency/compatibility or workflow requires it; optimise aggressively.
- Consider animated WebP/AVIF where supported.
- Do not use a GIF for a large full-screen hero.
- Each asset needs a named purpose, dimensions, format, file size and fallback.
