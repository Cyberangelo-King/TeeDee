# Quality Assurance and Acceptance Plan

**Version:** 0.1 | **Date:** 24 November 2026 | **Status:** Proposed test baseline

## 1. Quality objective

Verify that the delivered website and CMS are useful, correct, secure enough for the agreed risk, accessible, responsive, performant, discoverable and operationally maintainable.

A successful build alone does not prove product quality. Acceptance requires functional evidence and company review.

## 2. Test levels

- **Static checks:** lint, type checking, formatting and dependency checks.
- **Unit tests:** schema validation, content rules, permission helpers and utilities.
- **Integration tests:** database policies, CMS actions, media upload and enquiry delivery.
- **End-to-end tests:** visitor journeys and editor/publisher journeys.
- **Manual tests:** visual review, keyboard operation, screen-reader semantics and real-device checks.
- **Operational tests:** deploy, rollback, backup/export, restore and access recovery.

## 3. Website test matrix

| ID | Test | Expected result |
|---|---|---|
| WEB-T01 | Open every approved route | Correct content and status; no broken route |
| WEB-T02 | Desktop and mobile navigation | Links and menus work with pointer, touch and keyboard |
| WEB-T03 | Main CTA | Correct approved destination |
| WEB-T04 | Contact form invalid input | Useful errors; no false success |
| WEB-T05 | Contact form valid submission | Approved destination confirms receipt |
| WEB-T06 | Contact delivery failure | Clear failure state and reliable fallback |
| WEB-T07 | Media loading | No broken assets; appropriate dimensions and fallbacks |
| WEB-T08 | Reduced motion | Essential content remains available; nonessential motion is reduced |
| WEB-T09 | Responsive layout | No horizontal overflow at agreed test widths |
| WEB-T10 | Page metadata | Unique title, description and canonical value |
| WEB-T11 | Sitemap and robots | Correct production routes; private routes excluded |
| WEB-T12 | Structured data | Valid, matches visible facts and contains no invented claims |
| WEB-T13 | Not-found route | Useful 404 with route back to site |
| WEB-T14 | Browser coverage | Current stable Chrome, Edge, Firefox and Safari behave acceptably |

## 4. CMS test matrix

| ID | Test | Expected result |
|---|---|---|
| CMS-T01 | Unauthenticated access to CMS route | Redirect or deny; no protected data returned |
| CMS-T02 | Editor attempts publish | Denied unless role explicitly grants permission |
| CMS-T03 | Publisher publishes approved content | Content becomes public and current |
| CMS-T04 | Draft URL or API queried publicly | Draft remains inaccessible |
| CMS-T05 | Editor saves invalid content | Validation errors; invalid record not published |
| CMS-T06 | Slug collision | Rejected safely with clear message |
| CMS-T07 | Media upload with disallowed type/size | Rejected |
| CMS-T08 | Media with missing alt text | Required handling enforced for meaningful imagery |
| CMS-T09 | Failed publish/cache refresh | Visible error and safe recovery |
| CMS-T10 | Revision/rollback | Previous approved content can be restored at agreed level |
| CMS-T11 | Disabled user tries to access | Access denied and sessions revoked as designed |
| CMS-T12 | User changes record ID in request | Cannot access or modify unauthorised records |
| CMS-T13 | Publisher previews before release | Preview is protected and not indexed |
| CMS-T14 | CMS on mobile/tablet | Core editing/review actions remain usable |

## 5. Security tests

- Authentication bypass and session handling.
- Role escalation and IDOR/BOLA.
- Draft/publication leakage.
- Cross-user/cross-role data access.
- Input validation and output encoding.
- File upload type, size and access.
- Rate limiting and spam mitigation.
- Exposed secret and dependency checks.
- Security headers and HTTPS.
- Database policy tests if RLS is used.

This is a planned test baseline, not a claim that a penetration test or formal certification has been performed.

## 6. Accessibility tests

- Keyboard-only navigation.
- Visible focus state.
- Semantic landmarks and heading order.
- Accessible names for controls.
- Form labels, instructions and error announcements.
- Text and interface contrast.
- Reduced-motion mode.
- Screen-reader review of navigation, dialogs and CMS forms.
- Touch target usability.
- No essential content hidden behind hover or animation.

Target WCAG 2.2 AA, with any unresolved exceptions recorded.

## 7. Performance checks

- Measure representative routes on mobile and desktop.
- Review LCP, INP and CLS where measurement tools support them.
- Check hero video and poster size.
- Check image formats, dimensions and responsive sizes.
- Review font loading and third-party scripts.
- Inspect JavaScript bundles and expensive animation modules.
- Verify no layout shift from image/video containers.
- Record test environment and results; do not state scores without evidence.

## 8. Release acceptance gates

Production release requires:
1. Scope and content approval.
2. Website route and navigation tests passed.
3. Contact/enquiry delivery verified end-to-end.
4. CMS role and draft-isolation tests passed.
5. Domain, HTTPS and production routing verified.
6. Accessibility and responsive review completed.
7. SEO metadata, indexing rules and structured data checked.
8. Security and dependency review completed.
9. Backup/recovery and account ownership documented.
10. Critical defects resolved or explicitly accepted by Teedee.
11. Written launch approval.

## 9. Evidence record

For each test cycle, record:
- Test ID.
- Date and environment.
- Tester.
- Build/commit reference.
- Steps and expected result.
- Actual result.
- Pass/fail/blocked.
- Screenshot, log or other evidence where useful.
- Defect reference and retest result.

The final handover will contain the actual completed test report, not merely this plan.
