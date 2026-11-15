# Presentation and Production Handoff

## Presentation build

The active website is served from the root `app/` directory. The current design uses TeeDee's official SVG logo, Signal Red / Signal Orange / Graphite palette, responsive typography, industry illustrations, reduced-motion handling and a cinematic hero treatment.

### What works in the presentation build

- Main page navigation and section anchors.
- Service capability overview and industry pathways.
- Responsive mobile navigation and FAQ disclosures.
- Direct phone, email and WhatsApp links.
- Project enquiry form markup configured for Netlify Forms.
- Static confirmation, privacy and not-found routes.
- Search indexing disabled by default.
- Local SVG poster and CSS visual fallback for the presentation hero video.

### Before the presentation

1. Run `npm ci` and `npm run build`.
2. Deploy the static `out/` directory to the connected Netlify site.
3. Confirm the deployed form appears in Netlify Forms.
4. Configure notification delivery to the approved TeeDee inbox.
5. Submit one real test enquiry and verify the submission arrives.
6. Test phone, email and WhatsApp links on a phone.
7. Test the hero on desktop and mobile. The video is intentionally hidden on mobile.

A successful local build does not prove Netlify form delivery. Only a real deployed test submission does.

## Temporary presentation media

The hero currently references the Ucam demo MP4 through `NEXT_PUBLIC_HERO_VIDEO_URL`. It is retained for the presentation only. Production rights have not been established. Replace it with TeeDee-owned or properly licensed footage before a public commercial launch.

## Production release gates

- Replace temporary hero footage and verify rights.
- Set `NEXT_PUBLIC_SITE_URL` to the final canonical domain.
- Set `NEXT_PUBLIC_INDEX_SITE=true` only after launch approval.
- Confirm Netlify form notification delivery, spam controls and data access.
- Review the privacy notice against real data-handling practices.
- Verify service scope, phone numbers, email, address, hours and service areas.
- Replace generated SVG illustrations with approved real installation photography where available.
- Add case studies, testimonials, certifications, client logos or performance claims only when evidence and permissions exist.
- Run keyboard, screen-reader, reduced-motion, mobile-network and browser checks.

## Integrity note

The vector illustrations are representative category artwork. They are not photographs of completed TeeDee installations. The website intentionally avoids invented client logos, testimonials, project results, warranties and response-time promises.
