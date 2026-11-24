# Risk Register and Open Questions

**Version:** 0.1 | **Date:** 24 November 2026 | **Status:** Living register

## 1. Risk rating

Likelihood and impact are qualitative planning assessments: Low, Medium or High. Review them as evidence changes.

## 2. Risk register

| ID | Risk | Likelihood | Impact | Mitigation / response | Owner |
|---|---|---|---|---|---|
| R-01 | Static export architecture conflicts with secure CMS and live publishing needs | High | High | Run a deployment/rendering proof of concept before CMS build; record ADR | Developer |
| R-02 | Current contact form may report success without actually delivering the enquiry | High | High | Implement and test real delivery or a transparent WhatsApp handoff; block launch until fixed | Developer + Teedee |
| R-03 | Repository and current deployment may remain under personal accounts | Medium | High | Create company-owned organisation/team and transfer/reconnect with verified permissions | CEO / account owner |
| R-04 | Company facts, service scopes or contact details may be incorrect or incomplete | Medium | High | Maintain approval register; no unverified claims in production | Content approver |
| R-05 | Real project imagery/video may not be available or permitted | High | Medium | Use approved alternatives; do not imply stock/AI media is a real project | Teedee |
| R-06 | Custom CMS scope grows beyond the agreed budget/time | High | High | Lock MVP, defer advanced features and use written change control | CEO + developer |
| R-07 | Domain or third-party accounts are created under the wrong owner | Medium | High | Teedee owns accounts, recovery and billing from the beginning | CEO / account owner |
| R-08 | Delayed company feedback disrupts the end-of-year target | Medium | High | Agree approvers and review windows; re-baseline schedule when approvals slip | CEO |
| R-09 | Privacy and enquiry retention are not defined | Medium | High | Minimise data, approve notice/retention/recipient before enabling production capture | Teedee |
| R-10 | Video, 3D or motion degrades performance/accessibility | Medium | Medium | Use progressive enhancement, fallbacks, budgets and device testing | Developer |
| R-11 | Search visibility expectations are interpreted as ranking guarantees | Medium | Medium | Set realistic measures; explain SEO/AEO/GEO limitations | Developer + CEO |
| R-12 | Provider plan limits or recurring cost make production unsuitable | Medium | High | Review billing, backups, region and usage before launch; avoid business-critical free-tier assumptions | CEO + developer |
| R-13 | Draft/private content or media is exposed publicly | Medium | High | Server-side authorisation, policy tests, noindex preview and access controls | Developer |
| R-14 | Knowledge transfer is insufficient for a replacement developer | Medium | Medium | Produce final as-built docs, runbooks, training and verified handover checklist | Developer |

## 3. Open questions register

| ID | Question | Decision owner | Priority |
|---|---|---|---|
| Q-01 | What is the exact legal company name and approved public brand spelling? | CEO | P0 |
| Q-02 | Who is the company account owner and recovery custodian? | CEO | P0 |
| Q-03 | What exact services are currently offered, and what is excluded from each? | CEO / technical reviewer | P0 |
| Q-04 | Which customer segments and geographic locations should the site target? | CEO | P1 |
| Q-05 | Which domain should be registered, and what is the approved budget? | CEO | P0 |
| Q-06 | Should the GitHub repository be transferred to a company organisation? Should it be public or private? | CEO | P0 |
| Q-07 | Who owns the current Netlify team/site and can it be transferred? | Account owner | P0 |
| Q-08 | Which database/Auth/Storage provider and production plan are approved? | CEO + developer | P0 |
| Q-09 | Which pages and CMS content types must be editable at launch? | CEO / CMS owner | P0 |
| Q-10 | Who can create drafts, review and publish? | CEO | P0 |
| Q-11 | Does the CMS need to store/manage enquiries, or should enquiries go directly to an existing company channel? | CEO | P0 |
| Q-12 | What is the approved form recipient and expected handling process? | CEO | P0 |
| Q-13 | What genuine photos and videos are available, and who owns usage permission? | Company approver | P1 |
| Q-14 | Is a hero video shoot required, and is a separate production budget available? | CEO | P1 |
| Q-15 | Are projects, testimonials, clients and team profiles approved for public display? | CEO | P1 |
| Q-16 | Who approves privacy wording, consent language and enquiry data retention? | CEO / legal adviser | P0 |
| Q-17 | Is Google Business Profile available and eligible for the company's business model? | CEO | P2 |
| Q-18 | What training format and number of CMS users are required? | CMS owner | P1 |
| Q-19 | What recurring hosting, database, email and maintenance budget is acceptable? | CEO | P0 |
| Q-20 | What is the agreed response window for review and approvals? | CEO | P1 |

## 4. Issue escalation

A risk becomes a blocker when work cannot safely proceed without a decision, access or approval. Record blocker owner, date raised, affected work, last follow-up and schedule impact. Security, privacy and account-recovery concerns should be escalated immediately.

## 5. Risk review cadence

Review this register at each milestone, after any scope change, when a third-party service is selected and before production launch.
