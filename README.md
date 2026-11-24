# Teedee Edge Automations LTD — Corporate Website and Website CMS

The public website is the first digital delivery surface for Teedee. The current engagement extends the existing corporate website with a custom Website CMS and the infrastructure, quality and operational controls needed to run it.

**Current documentation baseline:** 24 November 2026  
**Project status:** Initial requirements and engineering foundation  
**Current scope:** Corporate website + Website CMS  
**Future roadmap only:** Teedee Ops and Teedee Connect are separate future products and are not included in this engagement.

## Project references

- Existing website reference: https://teedeeedge.netlify.app
- Existing Netlify project reference: https://app.netlify.com/projects/teedeeedge
- Initial project documentation: [docs/README.md](docs/README.md)
- Build journal: [Build-Journal.md](Build-Journal.md)

## Documentation

Start with [the documentation index](docs/README.md).

Key documents:
- [Project Charter](docs/00-foundation/PROJECT-CHARTER.md)
- [Project Brief](docs/00-foundation/PROJECT-BRIEF.md)
- [Scope and Deliverables](docs/00-foundation/SCOPE-AND-DELIVERABLES.md)
- [Product Requirements Document](docs/01-product/PRD.md)
- [Technical Requirements Document](docs/02-technical/TRD.md)
- [Existing Repository Baseline and Gap Assessment](docs/02-technical/EXISTING-BASELINE-AND-GAPS.md)
- [Architecture Overview](docs/02-technical/ARCHITECTURE-OVERVIEW.md)
- [Roadmap](docs/04-delivery/ROADMAP.md)
- [Master Project To-do](docs/04-delivery/MASTER-TODO.md)
- [Ownership and Infrastructure Setup](docs/05-infrastructure/OWNERSHIP-AND-SETUP-CHECKLIST.md)
- [Final Handover Plan](docs/90-final-handover/README.md)

The initial documentation is a planning baseline and must be reviewed by Teedee. It does not claim that proposed features have been implemented. Final handover documentation will be produced after the software is built and tested.

## Existing technology baseline

The existing website repository currently uses:
- Next.js 15 and React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide icons
- Netlify deployment configuration

The current Next.js configuration uses static export and the Netlify build publishes the generated out directory. This is suitable for the current static website features but is a material design constraint for the custom CMS. The CMS hosting, authentication, data and publication architecture must be proven before implementation. See the [TRD](docs/02-technical/TRD.md) and [Architecture Overview](docs/02-technical/ARCHITECTURE-OVERVIEW.md).

## Local development

Prerequisites: a compatible Node.js version (the current Netlify configuration specifies Node.js 22) and npm.

Install dependencies:

    npm install

Start the development server:

    npm run dev

Build the current static website:

    npm run build

Run lint:

    npm run lint

The commands above describe the current repository scripts. The test, typecheck and CI quality gates will be expanded as part of the engineering work.

## Repository and account ownership

The repository currently belongs to a personal GitHub account and is public. The intended production model is for Teedee to own its GitHub organisation/repository, Netlify team, domain, DNS, database and billing, with individual named developer access. See the ownership checklist before transferring or provisioning production infrastructure.

## Project truth rules

- Do not invent company facts, service capabilities, credentials, client references, case studies, warranties or metrics.
- Do not publish media without the required rights and company permission.
- Do not commit secrets, production credentials or recovery codes.
- Do not mark a task complete without evidence.
- Do not imply that a form has been received unless the configured destination confirms delivery.
- Do not add future Ops or Connect functionality to the current engagement without written scope approval.
