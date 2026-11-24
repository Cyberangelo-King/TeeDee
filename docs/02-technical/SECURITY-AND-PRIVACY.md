# Security, Privacy and Data Governance Baseline

**Version:** 0.1 | **Date:** 24 November 2026 | **Status:** Proposed control baseline

## 1. Security objective

Protect Teedee's infrastructure, staff identities, unpublished content, enquiry data and media while ensuring the company can independently operate and recover its own systems.

Security is an engineering and operational process. No system should be described as unhackable or absolutely secure.

## 2. Identity and access principles

- No shared administrator identity.
- Every human operator uses an individual account.
- Company Owner and CMS Administrator are separate from hosting/database infrastructure roles.
- Enforce permissions on the server and data layer, not only by hiding UI controls.
- Deny access by default.
- Apply least privilege and review access at milestones.
- Require MFA for privileged company and developer accounts where supported.
- Ensure company-controlled recovery is available.
- Remove or reduce developer access at project closeout according to the support agreement.
- Never create a hidden developer backdoor or undocumented superuser.

## 3. Proposed CMS role controls

| Capability | Owner | Administrator | Editor | Publisher |
|---|---:|---:|---:|---:|
| View public site content in CMS | Yes | Yes | Yes | Yes |
| Create/edit drafts | Yes | Yes | Yes | Yes |
| Preview drafts | Yes | Yes | Yes | Yes |
| Publish/unpublish | Yes | Configurable | No by default | Yes |
| Manage CMS users | Yes | Configurable | No | No |
| Change infrastructure settings | No, unless separately authorised outside CMS | No | No | No |
| Access secrets / database service role | No through CMS UI | No | No | No |

The final role matrix must be approved. A business Owner role must not automatically become a cloud infrastructure superuser.

## 4. Credential and secret handling

- Do not commit .env, private keys, API tokens, database passwords or recovery codes.
- Store production secrets in the selected platform's encrypted environment/secret manager.
- Public environment variables may contain only values designed for browser exposure.
- Never put service-role or database-owner credentials in a NEXT_PUBLIC variable.
- Use separate credentials for preview and production where possible.
- Rotate any credential accidentally committed, pasted into an untrusted channel or exposed in logs.
- Keep recovery codes in a company-controlled password manager or approved secure store.

## 5. Database and storage controls

If Supabase or another PostgreSQL-backed platform is selected:
- Enable Row Level Security on exposed tables.
- Write explicit allow/deny policies and test them.
- Do not use user-editable profile metadata as an authorisation source.
- Apply least-privilege database grants.
- Use server-side privileged keys only in trusted server environments.
- Restrict Storage upload MIME types and sizes.
- Use private buckets for non-public material and signed access where appropriate.
- Ensure public media contains no sensitive site data.
- Apply constraints and transactions for content state changes.
- Test cross-account access and direct API access, not only screen-level permissions.

## 6. Authentication and account recovery

- Use a maintained authentication provider.
- Apply secure session/cookie defaults appropriate to the chosen architecture.
- Rate-limit sign-in and recovery attempts.
- Avoid revealing whether an email address exists in recovery flows.
- Require company-approved identity proof and recovery contact ownership.
- Ensure the company can recover the CMS if the developer is unavailable.
- Document how to disable a departed staff member and revoke active sessions.

## 7. Public enquiry controls

- Collect only the information needed to respond.
- Validate server-side, not only in the browser.
- Apply spam/rate-limiting controls appropriate to traffic and provider.
- Do not store enquiries in a publicly readable table.
- Identify the accountable company recipient.
- Document retention, export and deletion expectations.
- Do not claim a request was received unless the destination confirms acceptance.
- Avoid sending sensitive customer site information through public form fields.

## 8. Privacy governance

Teedee must approve:
- What personal information the website collects.
- Why each field is needed.
- Where submissions are stored or routed.
- Who can access them.
- How long they are retained.
- Which service providers process the data.
- How a person can contact the company about their information.
- Whether analytics/cookies are used and what consent or notice is required.

The privacy page in the repository is not automatically legally approved. The company should obtain appropriate legal/privacy review before production publication.

## 9. Media and physical security

Never publish:
- live camera views or recordings;
- device passwords, IP addresses, network diagrams or access codes;
- detailed floor plans or camera coverage maps;
- customer site addresses or identifiable sensitive layouts;
- staff personal contact data without authorisation.

Review and remove sensitive metadata from project photographs and videos.

## 10. Operational controls

- Separate preview from production.
- Protect the main branch and require checks/reviews as the repository and team mature.
- Review dependencies and keep lockfiles committed.
- Monitor build and deployment failures.
- Maintain database and media backups appropriate to the chosen provider.
- Test restoration; a successful backup job alone is not proof of recoverability.
- Record account owners, billing owners, recovery custodians and technical operators.
- Maintain an incident contact and credential-revocation procedure.

## 11. Release security checklist

- [ ] Privileged accounts have MFA.
- [ ] Production secrets are not in Git.
- [ ] CMS endpoints enforce server-side permissions.
- [ ] Draft content is not public or indexable.
- [ ] Upload types, sizes and access policies are restricted.
- [ ] Enquiry data is private and delivered to an approved destination.
- [ ] Dependency and build checks pass.
- [ ] HTTPS and security headers are configured.
- [ ] Privacy copy and retention are approved.
- [ ] Backup/export and recovery procedure is documented.
- [ ] Teedee can recover its own accounts without relying on the developer's personal phone or email.
