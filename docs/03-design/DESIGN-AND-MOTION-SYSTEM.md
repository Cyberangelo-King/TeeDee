# Design, Interaction and Motion Direction

**Version:** 0.1 | **Date:** 24 November 2026 | **Status:** Direction to validate

## 1. Design ambition

The public site and CMS should look and feel like deliberate, professionally engineered products. The website should be visually memorable and immersive without relying on generic templates or excessive effects. The CMS should have its own coherent product interface rather than looking like an unstyled database panel.

The quality bar includes visual craft, usability, technical performance, accessibility, responsiveness and commercial clarity.

## 2. Brand source of truth

The repository contains supplied Teedee brand assets and an archived planning pack proposing:
- Brand line: “Secure. Power. Automate.”
- Signal red: #B32632.
- Signal orange: #E57A2F.
- Graphite: #17191D.
- Warm paper: #F4F2ED.
- Typography direction: Manrope, Inter and IBM Plex Mono.

These are starting references. The CEO or designated brand approver must confirm the official palette, typography, brand line and logo variants before final token lock.

## 3. Public website visual principles

- Editorial composition, deliberate grid and visual hierarchy.
- Strong typography and purposeful negative space.
- High-quality real-world technical photography.
- Controlled use of dark/light surface contrast.
- Service content presented as meaningful systems and outcomes, not a generic list of icons.
- Custom-designed components and transitions.
- Distinctive page rhythm without sacrificing navigation or clarity.
- Responsive layouts designed for phone first, then expanded intentionally for larger screens.

## 4. CMS design principles

- Task-oriented dashboard and clear content navigation.
- Clear status for draft, review and published items.
- Consistent form labels, helper text, validation and feedback.
- Safe destructive actions and recoverable edits where practical.
- Clear previews and publish confirmations.
- Permission-aware navigation that does not imply access the user does not have.
- Useful empty states and onboarding cues.
- Keyboard-accessible tables, dialogs, menus and editors.
- No decorative animation that slows routine work.

## 5. Motion system

Motion should clarify hierarchy, communicate state, direct attention or give interaction feedback.

Potential tools:
- CSS transitions for simple states.
- Framer Motion / Motion for component transitions and controlled reveals.
- GSAP only for complex scroll choreography that cannot be achieved cleanly with simpler tools.
- Lottie for selected vector diagrams or short explanatory sequences.
- Three.js / React Three Fiber for meaningful 3D scenes only when justified.

Do not load all these libraries by default. Each dependency needs a clear purpose and performance review.

## 6. Motion rules

- No scroll hijacking.
- No long blocking preloader.
- Do not delay headings or calls to action until animation/video loads.
- Avoid large parallax on mobile or reduced-motion settings.
- Prefer transform and opacity for animation.
- Avoid animating layout in ways that cause jank.
- All essential information remains available with motion disabled.
- Provide static fallback for decorative hero video.
- Respect prefers-reduced-motion.
- Keyboard and touch users must receive equivalent functionality to pointer effects.
- Do not use hover as the only way to reveal content.

## 7. 3D and immersive content

3D is optional and must earn its cost. Potential uses include a restrained system relationship visual, product/environment explanation or an interactive hero element. It must not:
- block the main message;
- obscure service information;
- create an inaccessible interaction;
- ship a large bundle to users who do not need it;
- degrade low-end Android devices or mobile networks;
- pretend to depict a real installation if it is conceptual.

Use static/poster alternatives and load heavy scenes on demand.

## 8. Responsive and accessibility baseline

Test at least:
- 360px and 390px mobile;
- 768px tablet;
- 1024px compact desktop;
- 1440px desktop;
- 1920px wide desktop.

Design for intermediate widths as well. No horizontal overflow. Use fluid type scales, correct image crops and intentional mobile navigation.

Target WCAG 2.2 AA. Validate keyboard use, focus, semantics, labels, contrast, reduced motion, screen-reader names and mobile touch usability.

## 9. Design review sequence

1. Confirm brand assets and audience.
2. Produce moodboard/reference review.
3. Approve homepage art direction and key layout.
4. Approve page templates and CMS navigation patterns.
5. Implement reusable design tokens/components.
6. Test real content and media in responsive layouts.
7. Review motion and interaction on mobile and desktop.
8. Conduct accessibility and performance review before release.

## 10. Quality principle

Awwwards-level ambition is a reference for craft, originality and detail—not a licence to sacrifice clarity, speed, accessibility or trust. The final design must make Teedee easier to understand and contact, while the CMS must make the company easier to maintain.
