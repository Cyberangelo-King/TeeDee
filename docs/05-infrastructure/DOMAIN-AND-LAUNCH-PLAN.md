# Domain, DNS and Production Launch Plan

**Version:** 0.1 | **Date:** 24 November 2026 | **Status:** Proposed runbook

## 1. Objective

Acquire a suitable domain under Teedee's ownership, connect it to the approved hosting environment, secure it with HTTPS, establish a canonical host and launch only after functional and content acceptance.

## 2. Domain selection

Before purchase:
- Confirm exact public company/brand naming with the CEO.
- Generate a shortlist of domain variants.
- Check availability, spelling, memorability and renewal fees.
- Check that no confusing or infringing naming conflict is known.
- Confirm whether a .com, .com.ng, .ng or other extension best suits the company's market and budget.
- Confirm registration and renewal cost in writing.
- Obtain company approval.

A candidate domain visible in a code or example file must not be treated as registered or approved.

## 3. Registration and ownership

- Register using a Teedee-controlled registrar account.
- Use company-controlled email and recovery details.
- Enable MFA and domain/transfer lock.
- Keep renewal billing under company control.
- Record registrar, registration date, expiry/renewal date and authorised users in the private account inventory.
- Do not allow the developer's personal email or phone to become the only renewal/recovery contact.

## 4. DNS provider and records

Cloudflare may be evaluated as the DNS provider; it is not mandatory. Keep the domain registrar and DNS roles clear.

After the hosting architecture is finalised:
1. Add the domain to the chosen DNS provider.
2. Complete provider ownership verification.
3. Add the exact A/AAAA/CNAME/TXT records required by the selected host.
4. Confirm apex and www behaviour.
5. Select the canonical public host.
6. Redirect the alternate host to the canonical host.
7. Verify DNS propagation and HTTPS certificate issuance.
8. Test all key routes and assets using the custom domain.
9. Record the final DNS zone and change owner.

Do not copy example IP addresses or CNAME targets from another project. Use the values presented by the actual hosting provider.

## 5. Business email DNS

If Teedee establishes domain-based email, configure its mail provider's records separately:
- MX.
- SPF.
- DKIM.
- DMARC.
- Provider verification records, if required.

Do not publish a broad SPF policy or create multiple conflicting SPF TXT records. Use the provider's current instructions and verify message delivery and authentication.

## 6. Hosting connection

The existing repository contains Netlify configuration for a static export. Because the CMS may require dynamic server capabilities, select and test the hosting mode before domain cutover.

Launch prerequisites:
- Company-owned Netlify team/site or approved alternative.
- Company-owned repository connected to production.
- Reproducible build.
- Approved production environment variables.
- Correct canonical domain.
- HTTPS.
- Correct redirects.
- Working forms and CMS operations.
- Protected admin and preview routes.
- Sitemap, robots and metadata aligned with the production domain.

## 7. Domain cutover plan

1. Confirm launch approval and a release freeze.
2. Record the current production deployment and rollback target.
3. Confirm final DNS records and canonical host.
4. Deploy the release candidate.
5. Connect domain and verify HTTPS.
6. Test Home, About, Services, service detail, Contact, Privacy, not-found and any approved optional pages.
7. Submit a test enquiry to the company-controlled destination.
8. Sign in to CMS and publish a controlled content update.
9. Verify public content, metadata and sitemap after publishing.
10. Check www/apex redirect and no mixed-content warnings.
11. Verify Search Console ownership and sitemap submission after company approval.
12. Obtain final company acknowledgement.

## 8. Post-launch checks

- Confirm site availability from more than one network/device.
- Confirm form and notification delivery.
- Confirm CMS authentication and publishing.
- Check logs and deployment status.
- Check for broken links, missing assets and indexing mistakes.
- Confirm no preview or admin route is indexed.
- Monitor costs and service usage.
- Retain a known-good deployment for rollback.

## 9. Rollback

Rollback trigger examples: critical content defect, broken enquiry delivery, exposed private content, CMS privilege failure, domain routing failure or serious performance regression.

Rollback should restore the last known-good deploy, preserve the database unless a separate data rollback is required, correct DNS only when necessary, and record the incident and follow-up actions. Database schema rollbacks must use an explicit migration/recovery plan rather than an unreviewed destructive reversal.

## 10. Approval record

Domain purchase, recurring hosting costs, DNS provider, production migration and public launch require company approval. Record approver, date, chosen provider, selected domain and launch decision in the project decision log.
