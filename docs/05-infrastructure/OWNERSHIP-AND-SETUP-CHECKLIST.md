# Infrastructure Ownership and Account Setup Standard

**Version:** 0.1 | **Date:** 24 November 2026 | **Status:** Proposed ownership model

## 1. Governing principle

**Teedee owns the infrastructure. Angëlo engineers and maintains the implementation through authorised, individual access.**

The company should not depend on the developer's personal email, phone number, GitHub account, Netlify account, database account or payment method to recover or operate production systems.

## 2. Company administrative email

Create a dedicated company-controlled administrative mailbox first. It should be owned and recoverable by Teedee.

The account should have:
- Company-approved display name and mailbox address.
- Strong unique password stored in a company-controlled password manager.
- Company-controlled recovery email.
- Company-controlled recovery phone number.
- MFA enabled.
- At least two authorised company recovery custodians where practical.
- A documented billing and account-owner contact.

The developer may be given access only where needed and authorised. Do not make the developer's personal phone or email the permanent recovery path. Do not store passwords, MFA seeds or recovery codes in this repository.

Once the domain is registered, Teedee may choose a domain-based business mailbox. Web hosting DNS and email DNS must be configured deliberately and separately.

## 3. Platform ownership matrix

| Asset / platform | Legal / operational owner | Developer access | Notes |
|---|---|---|---|
| Administrative email | Teedee | As authorised | Company-controlled recovery |
| Domain registrar | Teedee | Technical administrator as needed | Company pays and renews |
| DNS / Cloudflare, if selected | Teedee | DNS administrator | Company retains owner role |
| GitHub organisation | Teedee | Developer / maintainer | Each person uses an individual GitHub account |
| Source repository | Teedee | Write/admin access as needed | Transfer existing repository; do not create a duplicate |
| Netlify team/site | Teedee | Developer | Company controls billing and team owners |
| Database/Auth/Storage organisation | Teedee | Developer role | Supabase is a candidate, subject to approval |
| Analytics/Search Console | Teedee | Analyst/admin as needed | Use company-controlled property ownership |
| Transactional email provider | Teedee | Developer integration access | Separate service credentials |
| Media licences / original files | Teedee or explicitly licensed owner | Access as authorised | Preserve evidence of rights |

## 4. GitHub setup

Current state: the repository is Cyberangelo-King/TeeDee, public, and owned by the developer's personal GitHub account. The company has not yet taken ownership.

Recommended sequence:
1. Teedee creates a GitHub organisation using its company-controlled email.
2. At least one company representative is an organisation owner; a second trusted owner is recommended.
3. The developer's existing GitHub user is invited with the permissions needed for the project.
4. The repository is transferred into the organisation, rather than copied into a duplicate repository.
5. Review repository visibility with the CEO: public code is convenient for transparency, but it should be an explicit company choice.
6. Verify GitHub Actions, deploy integrations, branches, tags, issues and links after transfer.
7. Protect main with required checks and review rules appropriate to the team.
8. Keep secrets out of Git; use repository/environment secrets only for approved automation.

Do not create a shared company GitHub personal account. GitHub organisations are designed to own repositories while individual users retain accountable identities.

## 5. Netlify setup

1. Identify the current Netlify site and team owner.
2. Teedee creates or selects the company-owned Netlify team.
3. Add a company owner and invite the developer's individual account.
4. Transfer the existing site or reconnect the company-owned repository to the company team.
5. Verify build settings, environment variables, deploy previews, domains and form/runtime behaviour.
6. Confirm plan pricing and the capabilities required by the selected Next.js/CMS architecture.
7. Ensure Teedee can independently access billing, deployments, logs, domain configuration and account recovery.

Transfer/reconnection can affect features, pricing or user access. Verify the destination team's plan before any transfer.

## 6. Database/Auth/Storage setup

Supabase is a candidate, not a provisioned or approved production dependency.

If selected:
1. Teedee creates the organisation and remains its Owner.
2. Teedee selects region and plan after reviewing cost, performance, backups and data requirements.
3. The developer is invited as an individual member with the least privileges needed.
4. Create the project under the company organisation.
5. Store migrations, schema documentation and seed scripts in GitHub.
6. Apply RLS and Storage policies and test them.
7. Keep service-role and secret keys server-side.
8. Configure database and media backups/export and test recovery.
9. Confirm that billing and recovery remain with Teedee.

Current Supabase production documentation warns that Free Plan projects with low activity may be paused and Free Plan projects do not have downloadable automated database backups. Paid plans provide scheduled backups according to plan-specific retention. Re-check current pricing and backup terms immediately before purchase; a production CMS should not depend on a tier whose recovery characteristics are unsuitable for the company's needs.

## 7. Account security

- MFA for privileged accounts.
- Individual user identities; no shared logins.
- Company-owned recovery email and phone.
- Company-controlled password manager.
- Two authorised company custodians where practical.
- Least-privilege invitations.
- Access review at project milestones.
- Credential rotation after exposure or personnel changes.
- Documented recovery and revocation.
- No passwords, tokens or recovery codes in GitHub, the Build Journal or public project documents.

## 8. Private account inventory

Maintain a separate company-controlled private inventory with:
- platform name and account URL;
- company owner;
- billing owner and method;
- recovery custodians;
- named users and roles;
- MFA status;
- renewal dates;
- support/contact route;
- transfer status;
- last access review date.

The repository may document account names, roles and setup procedures, but must never contain secrets or recovery codes.

## 9. Project closeout access test

Before handover, an authorised Teedee representative should independently:
- sign in to the GitHub organisation and access the repository;
- access Netlify and inspect the production deployment;
- access the domain registrar and DNS;
- access the production database/storage service;
- manage CMS users and content;
- locate billing and renewal settings;
- follow the recovery procedure.

The developer must not remain the sole owner or sole recovery route for any production asset.
