# GitHub, Deployment and Continuation Plan

## Before pushing
- Review all changed files.
- Confirm no credentials or `.env` files are tracked.
- Confirm licensed media is allowed to be committed.
- Ensure large video assets are optimised. If a file is too large, use an approved asset host/CDN and document the URL/configuration.
- Include lockfile and build documentation.
- Ensure `npm run build` succeeds.
- Add screenshots of homepage desktop and mobile.

## Suggested GitHub workflow
1. Create a private repository initially if company approval/access policy requires it.
2. Push the Antigravity-generated project.
3. Keep `main` as stable branch.
4. Use feature branches for major improvements.
5. Commit with descriptive messages.
6. Add README, PRD, TRD and asset register.
7. Do not commit `.env.local`, API secrets or credentials.
8. Grant repository access through GitHub's normal collaborator controls.

## Suggested commit sequence
- `chore: scaffold TeeDee website`
- `feat: add brand tokens and shared layout`
- `feat: implement cinematic homepage`
- `feat: add service and company pages`
- `feat: add contact journey`
- `feat: add motion and interaction system`
- `fix: responsive and accessibility polish`
- `docs: add build and deployment handoff`

## Deployment
Select a host after the code and domain ownership are known. Vercel and Netlify are both possible for a Next.js project, but confirm the target and adapter/runtime requirements before finalising.

Required:
- production domain;
- DNS access;
- hosting account;
- environment variables;
- form provider destination;
- analytics decision;
- privacy policy approval.

## Continuation with ChatGPT
When the repository is ready, provide:
- GitHub repository URL;
- branch to inspect;
- preview/deployment URL if available;
- any build/deploy errors;
- exact next priority.

The next developer should first inspect the repository, docs, build status and preview before changing code. They should not restart the project or overwrite the existing design.
