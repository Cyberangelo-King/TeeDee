# Existing Repository Baseline and Gap Assessment

**Inspected:** 24 November 2026  
**Repository:** Cyberangelo-King/TeeDee  
**Branch reviewed:** main  
**Purpose:** Record observed facts before changing architecture or implementing the CMS.

## 1. Summary

The repository already contains a working-in-progress corporate website built with Next.js, React and TypeScript. It includes page routes, reusable components, locally defined content, brand assets, service imagery, SEO metadata, a sitemap and Netlify build configuration.

It does **not** currently contain a custom CMS, a database migration set, a CMS identity model or a configured production database. The project should therefore be treated as an existing website that needs a controlled CMS extension—not as a completed CMS and not as a blank rewrite.

## 2. Observed technical baseline

| Area | Observation |
|---|---|
| Repository | Cyberangelo-King/TeeDee |
| Visibility | Public |
| Owner | Personal GitHub account Cyberangelo-King |
| Default branch | main |
| Branch protection | Not enabled on the inspected main branch |
| Framework | Next.js 15.5.x |
| UI runtime | React 19.1.x |
| Language | TypeScript |
| Styling | Tailwind CSS 3.4.x and custom global CSS |
| Motion | Framer Motion 12.x dependency |
| Routes | Home, About, Services, service detail, Industries, Contact, Privacy and not-found |
| Content | Typed/local modules under src/content |
| Components | Shared layout, home, UI and form components |
| Assets | Existing brand files, favicon and service imagery under public |
| Rendering | next.config.ts sets output: export |
| Hosting config | netlify.toml publishes out and skips the Next.js plugin |
| CI | GitHub Actions builds on pull requests and selected pushes |
| Test coverage | No test suite was identified in the inspected root package scripts |
| CMS | No CMS application found in main-branch tree |
| Database | No database migrations or Supabase configuration found in main-branch tree |

The repository contains an archive directory with older build packs, copy drafts, proposals, prompts and reference documents. These remain useful historical material, but the new top-level project documents supersede them where they conflict with the current agreement.

## 3. Critical enquiry-form finding — release blocker

The inspected ContactForm component currently handles submission in the browser by changing UI state and using a short timeout before displaying a success message. The observed handler does not submit the form data to a server, database, Netlify Forms endpoint or email provider.

The success screen then offers a separate button that constructs a WhatsApp message for the visitor to forward. That is not equivalent to the company receiving a form submission.

**Impact:** the current interface may tell a visitor that an assessment request has been received when no server-side delivery has occurred. This is a trust and conversion defect and must be corrected before production launch.

**Required action:**
1. Decide whether the primary path is a server-connected form, an approved hosted form provider, a secure CMS inbox, or a direct WhatsApp handoff.
2. If using a backend/provider, implement server-side validation and confirmed delivery status.
3. If using a WhatsApp handoff, clearly tell the user they still need to open WhatsApp and send the message.
4. Test the full path using a company-controlled recipient.
5. Ensure error states do not imply success.

Treat this as P0 / must resolve before launch.

## 4. Other observed concerns to verify

### 4.1 Public repository and personal ownership
The repository is currently public and belongs to a personal GitHub account. Teedee has expressed the intention to own its production infrastructure. The company must decide whether the repository should be transferred into a company GitHub organisation and whether its code should remain public or become private. This has not yet been done.

### 4.2 No branch protection
The inspected main branch is not protected. Before production CMS work, consider pull-request reviews, required build checks and restrictions on direct pushes.

### 4.3 CI coverage
The current GitHub Actions workflow runs dependency installation and a production build. It does not yet show separate lint, typecheck, unit, integration, accessibility or security checks. The current package scripts expose dev, build, start and lint, but no dedicated test or typecheck script was observed.

### 4.4 Environment example values
The existing .env.example contains candidate site and contact values. They must be checked against authoritative company information and replaced with safe placeholders where a variable is a secret. A value appearing in the repository is not proof that it is correct or approved.

### 4.5 Static-only build
Static export is explicitly configured. The CMS architecture must be proven before modifying this setting. See the TRD and Architecture Overview.

### 4.6 SEO claims and metadata
The current root metadata includes service and geographic keywords/claims. Verify every service and geographic statement with Teedee. Avoid broad keyword lists that are not reflected in visible page content.

### 4.7 Archived scope conflicts
Older archived project documents were prepared for earlier website-only or wider ecosystem planning. Some older specifications explicitly excluded a CMS from the initial release. The current project conversation establishes the corporate website and custom Website CMS as the current engagement. The new PRD and scope document are the working baseline, subject to CEO's written approval.

## 5. Recommended remediation order

1. Confirm enquiry destination and correct the false-success behaviour.
2. Confirm official company facts and verify all source content.
3. Decide repository ownership and visibility.
4. Decide client-owned Netlify and backend accounts.
5. Prove the chosen CMS hosting/rendering model.
6. Define CMS roles, entities and publication workflow.
7. Add automated quality checks and appropriate branch protection.
8. Implement CMS and connect the approved public content source.
9. Run security, privacy, accessibility, SEO and performance checks.

## 6. Assessment limits

This is a repository-level inspection, not a full application security audit, penetration test, live production health check or exhaustive browser QA. Runtime behaviour, deployed configuration, actual Netlify team ownership, service-account billing, domain control and live form delivery have not been independently verified. Those require dedicated checks and company access.
