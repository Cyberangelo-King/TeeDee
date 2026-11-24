# Platform Reference Notes and Verification Sources

**Prepared:** 24 November 2026  
**Purpose:** Record official technical documentation used to inform initial architecture planning.  
**Status:** Reference snapshot — re-check before implementation.

## 1. Next.js static export

Official guide: https://nextjs.org/docs/app/guides/static-exports

The current repository sets output: export. The Next.js static export documentation explains that the app is generated as static HTML/assets and does not have a Next.js runtime server. Server-dependent features are unsupported in static export, including Server Actions, cookies, request-dependent Route Handlers, Draft Mode and Incremental Static Regeneration.

This is why CMS authentication, protected server-side mutations, draft preview and publication revalidation cannot be assumed to work inside the current static-export configuration. Any alternative architecture must be tested against the actual selected hosting integration.

## 2. Next.js deployment options

Official guide: https://nextjs.org/docs/app/getting-started/deploying

Next.js documents Node.js server, Docker, static export and platform-adapter approaches with differing feature support. The guide notes that platform integration support varies. The team must verify the current Netlify integration documentation and the exact Next.js features needed by the CMS before choosing the final deployment mode.

## 3. Supabase production readiness

Official checklist: https://supabase.com/docs/guides/deployment/going-into-prod

The production checklist covers security, performance and availability. It should inform the production gate if Supabase is selected.

Official security checklist: https://supabase.com/docs/guides/security/production-checklist

The implementation must review authentication, access policies, exposed tables, network settings, storage and other security controls against the current official requirements.

## 4. Supabase Free Plan operational considerations

Official project pausing guide: https://supabase.com/docs/guides/platform/free-project-pausing  
Official database backups guide: https://supabase.com/docs/guides/platform/backups

As checked on 24 November 2026, Supabase documentation states that low-activity Free Plan projects may be paused and that automated database backup availability and retention depend on the selected plan. The company must review current plan details, backup retention, export and restoration options before using a project for business-critical content.

This reference is not a blanket recommendation to buy a specific plan. The plan decision should follow Teedee's expected usage, recovery requirements and budget.

## 5. Re-verification requirement

Software platforms change. Before provisioning or changing a production service:
- check current official changelogs and product documentation;
- confirm feature support for the chosen framework/runtime;
- confirm current plan limits, pricing, region and data handling;
- test the required behaviour in a non-production environment;
- record the verified version/date and decision in the project documents.

Third-party documentation links are references, not proof that this project has provisioned or configured the referenced service.
