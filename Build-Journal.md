# Teedee — Build Journal

**Project:** Teedee Corporate Website and Custom Website CMS  
**Developer:** Angëlo  
**Started:** 24 November 2026  
**Status:** Project foundation / initial documentation  
**Repository:** Cyberangelo-King/TeeDee  
**Working branch:** docs/initial-project-foundation

This journal records actual work, decisions, discoveries, verification, failures and next steps in chronological order. It is not a planning wishlist. Planned work belongs in the roadmap and master to-do register.

---

## 24 November 2026 — Repository Review and Initial Project Foundation

### 1. Purpose of today's work

Today I began establishing the project baseline before moving further into implementation. The aim was to make the engagement understandable and governable: what we are building, why we are building it, what is included, what depends on Teedee, how the system should be engineered and how another developer can eventually take over.

### 2. Repository inspection

I inspected the existing GitHub repository and its main branch rather than treating the work as a blank project.

The repository already contains a Next.js 15 / React 19 / TypeScript corporate website, route-based pages, reusable components, local content modules, existing brand and service assets, a GitHub Actions build workflow and Netlify static-export configuration.

I also reviewed the older project build pack and reference documents under archive/. Those documents contain useful brand, content, website and wider digital-ecosystem thinking. I treated them as historical reference material because some earlier scope assumptions differ from the current agreement.

### 3. Important technical finding

The current application is configured for static export. Its Next.js configuration uses output: export, while Netlify publishes the generated out directory.

That is a significant architecture constraint for the custom CMS. The CMS needs secure authentication, protected content changes, a publication mechanism and a reliable way to make published content available to the public website. I therefore recorded a required proof of concept before committing to the CMS hosting and rendering approach.

### 4. Important functional finding — enquiry flow

While inspecting the contact form, I found that the current submit handler changes the interface to a success state after a short client-side timeout. The observed handler does not send the submitted data to a server, database or form provider. The WhatsApp action is a separate step that the visitor must choose.

This creates a risk that a visitor may believe an enquiry has been received when no company-side delivery has occurred. I recorded it as a P0 launch blocker. The production enquiry path must be implemented and tested end-to-end, or the interface must transparently tell the visitor that they still need to send the WhatsApp message.

### 5. Ownership and governance finding

The current repository is public and is owned by my personal GitHub account. The agreed target is for Teedee to own the production infrastructure and for me to work through named, authorised access. Repository transfer, visibility, Netlify ownership, domain ownership and database ownership remain tasks; they have not been completed by this documentation pass.

### 6. Documentation prepared

I prepared the initial documentation set in the working branch. It includes:
- project charter, brief, scope, assumptions and governance;
- PRD and information architecture;
- content and asset production plan;
- TRD, architecture overview, security/privacy baseline and decision log;
- existing-state and gap assessment;
- SEO/AEO/GEO and design/motion direction;
- roadmap, master to-do, risk register and acceptance plan;
- infrastructure ownership, domain/launch and environment configuration plans;
- content approval register;
- separate final-handover documentation index.

The documents distinguish confirmed facts from proposals and pending company decisions. They do not represent unimplemented features as complete.

### 7. Verification completed today

- Confirmed repository name, visibility, owner and default branch.
- Inspected the recursive main-branch file tree.
- Read the current README, package manifest, Netlify configuration, Next.js configuration, CI workflow and representative route/form files.
- Reviewed existing archived project specifications and strategic proposal.
- Created a dedicated documentation working branch from main.
- Created the initial documentation files as Git objects for a single documentation commit.

### 8. Outstanding items

- The initial documentation branch still requires its commit and pull-request review/merge.
- CEO approval of the project charter, scope and PRD is pending.
- Official company facts and content approvals are pending.
- Company administrative email and recovery custodians are pending.
- GitHub organisation/repository ownership decision is pending.
- Domain selection and purchase approval are pending.
- Netlify team ownership and CMS deployment proof of concept are pending.
- Database/Auth/Storage provider and budget are pending.
- The enquiry submission defect remains unresolved.
- CMS roles, content types and workflow require approval.

### 9. Next steps

1. Commit the initial documentation set and open a pull request for review.
2. Review the scope and requirements with Teedee's authorised representative.
3. Confirm the company account owner, content approver and CMS owner.
4. Prioritise the enquiry flow and prove the CMS deployment architecture.
5. Build the content, domain and media workstreams into the delivery plan.

---

## Journal rules

- Date every entry.
- Write in first person and describe what actually happened.
- Record technical decisions with reasons and consequences.
- Record failed attempts and corrections honestly.
- Include tests and verification evidence.
- Keep outstanding work visible.
- Do not rewrite earlier entries to make the project appear smoother than it was.
