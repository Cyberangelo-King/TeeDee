# Project Governance, Stakeholders and Approvals

**Version:** 0.1 | **Date:** 24 November 2026 | **Status:** Draft

## 1. Governance model

The project uses a client-sponsor / delivery-lead model. Teedee owns business decisions and production assets. The developer is responsible for engineering and delivery within the approved scope.

No shared credentials or informal verbal instructions should substitute for documented access and approval.

## 2. Stakeholder register

| Role | Expected responsibility | Named person |
|---|---|---|
| Executive sponsor | Approves scope, budget, public positioning and launch | CEO — name to confirm |
| Company account owner | Owns company email, domain, billing, recovery and platform organisations | To confirm |
| Content approver | Confirms company facts, service descriptions, contact details, claims and media | To confirm |
| Technical reviewer | Validates technical accuracy of service copy and FAQs | To confirm |
| CMS owner | Owns day-to-day website publishing and staff access requests | To confirm |
| Delivery / engineering lead | Architecture, implementation, technical decisions, testing, documentation and delivery coordination | Angëlo |
| Future support developer | May be appointed by Teedee after delivery | Not yet appointed |

One individual may hold multiple company roles, but access should still follow role-specific permissions.

## 3. Decision rights

| Decision | Teedee approval required? |
|---|---|
| Legal company name and public claims | Yes |
| Service catalogue and technical statements | Yes, with technical reviewer |
| Brand/visual direction | Yes |
| Domain name and purchase | Yes |
| Creation of paid accounts/plans | Yes |
| Production database region and billing | Yes |
| CMS roles and publisher authority | Yes |
| Privacy notice and data retention | Yes |
| Release candidate acceptance | Yes |
| Production launch | Yes |
| Code structure within approved TRD | Developer |
| Dependency selection and implementation detail | Developer, with rationale |
| Scope change, new product or additional integrations | Yes, written approval |

## 4. Approval workflow

1. Developer prepares a decision, content item or review build.
2. The responsible Teedee approver reviews it and sends consolidated feedback.
3. Developer records approval, requested correction or unresolved question.
4. Material decisions are entered in the decision log.
5. Approved content is marked approved in the content register.
6. Only approved material is published to production.

Silence should not be treated as approval for legal content, public claims, account purchases or production launch.

## 5. Communication protocol

- Use one agreed primary communication channel for project decisions.
- Summarise important verbal decisions in writing.
- Group feedback by page, feature or document and identify priority.
- Report blockers as soon as they affect schedule or quality.
- Keep scope changes separate from defect reports.
- Record major demonstrations and approval outcomes in the Build Journal or decision log.

Suggested feedback categories: Blocker, Required for launch, Important, Enhancement, Future phase.

## 6. Account access and identity

- Teedee owns the company email, domain, billing and production organisations.
- Each person uses an individual account and named access.
- The developer is invited to company-owned organisations with the minimum permission needed.
- MFA should be enabled for privileged identities.
- Company-controlled recovery and at least two authorised company custodians are preferred.
- No shared password should be sent through chat or stored in the repository.
- Access should be reviewed at milestones and adjusted at handover.

## 7. Change and issue management

Every material change must include an ID, requester, description, reason, impact, decision, owner and status. Defects must include reproduction steps and expected versus actual behaviour. Security incidents or suspected credential exposure must be escalated immediately, not left in the routine task queue.

## 8. Project closeout

Closeout requires an agreed release decision, outstanding-issues list, final payment/contract status, final documentation, training record, account-access review and confirmation that Teedee can operate its own infrastructure. Developer access may be reduced or revoked by Teedee after support responsibilities are agreed.
