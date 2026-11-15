# TeeDee Edge Automations — Public Website

The public website is the first delivery surface in the TeeDee digital operations programme.

## Live preview
- Production: https://teedeeedge.netlify.app
- Netlify project: https://app.netlify.com/projects/teedeeedge

## Technology
- Next.js 15 static export
- React 19
- TypeScript
- Lucide icons
- Netlify hosting and form handling

## Website experience
- Responsive public-facing company website
- Capability overview: security and surveillance, network infrastructure, power and energy systems, and integrated technology
- Delivery approach and project enquiry journey
- FAQ content and accessible native disclosure interactions
- Netlify Forms-compatible project enquiry form
- Metadata, Open Graph and search indexing defaults
- Reduced-motion support and keyboard focus states
- Dedicated static thank-you and not-found pages

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Next.js writes the complete static site to `out/`. Netlify publishes that directory. The application does not require a Next.js server runtime for its current public-site feature set.

## Deployment
Netlify Forms processing is enabled for the project enquiry form. The project is configured for Netlify static export in `netlify.toml`; `NETLIFY_NEXT_PLUGIN_SKIP=true` prevents a server adapter from being injected into this static-only build.

## Important launch checks
The current public copy is intentionally conservative. Before treating the website as the final approved company profile, TeeDee should confirm:
- Exact service catalogue and technical scope
- Company contact details and official business address
- Approved project photographs, case studies, certifications and client permissions
- Privacy notice, data controller contact and enquiry retention process
- Domain ownership and preferred primary domain

Do not add unverified credentials, project claims, testimonials, client logos or performance statistics.
