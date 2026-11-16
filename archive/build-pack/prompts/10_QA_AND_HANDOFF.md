# Prompt 10 — Full QA, Performance and GitHub Handoff

Perform a production-minded audit against the PRD and TRD.

Run:
- install from clean lockfile;
- lint;
- TypeScript check;
- unit tests if configured;
- production build;
- route smoke tests;
- broken-link and missing-asset checks;
- desktop/tablet/mobile responsive review;
- keyboard-only navigation;
- reduced-motion review;
- form validation and submission test;
- metadata/Open Graph/sitemap/robots review;
- Lighthouse or equivalent performance/accessibility/SEO checks;
- cross-browser review.

Fix issues, do not merely list them.

Prepare:
- `README.md` with prerequisites, install, dev, lint, typecheck, build and deploy;
- `.env.example` with variable names only;
- `docs/BUILD_LOG.md`;
- `docs/DECISIONS.md`;
- `docs/OPEN_QUESTIONS.md`;
- `docs/ASSET_REGISTER.md`;
- `docs/QA_REPORT.md`;
- `docs/DEPLOYMENT.md`;
- final screenshots at desktop and mobile;
- a short CEO presentation walkthrough.

Do not claim production-ready if contact form, domain, legal copy, assets or company facts remain unapproved. Label the build accurately as presentation-ready, staging-ready or production-ready.
