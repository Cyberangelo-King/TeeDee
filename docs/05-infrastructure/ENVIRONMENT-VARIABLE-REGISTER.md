# Environment Variable and Configuration Register

**Version:** 0.1 | **Date:** 24 November 2026 | **Status:** Initial inventory — values deliberately omitted

## 1. Purpose

Track configuration names, purpose, exposure level and ownership without storing production values or secrets in GitHub.

## 2. Current repository example inventory

The existing .env.example includes:
- site URL and site name;
- contact email recipient;
- primary and secondary contact numbers;
- WhatsApp number;
- commented optional form-provider integration examples.

The current values are not reproduced here. They require company verification and should be replaced with safe placeholders in the example file where appropriate. A value inside .env.example is not evidence that the value is current, approved or safe to publish.

## 3. Proposed configuration categories

| Category | Example variable name | Exposure | Owner / handling |
|---|---|---|---|
| Public site URL | NEXT_PUBLIC_SITE_URL | Public | Set per environment |
| Public site name | NEXT_PUBLIC_SITE_NAME | Public | Company-approved |
| Public contact details | NEXT_PUBLIC_* | Public | Publish only approved values |
| Database URL | DATABASE_URL | Secret | Server-side only |
| Supabase URL | NEXT_PUBLIC_SUPABASE_URL | Public endpoint | Verify provider's recommended client setup |
| Supabase publishable key | NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY | Public identifier | Only if required by approved architecture; RLS must enforce access |
| Supabase secret/service key | SUPABASE_SECRET_KEY or provider-defined server secret | Secret | Server-only; never expose to browser |
| Auth configuration | Provider-defined | Mixed | Separate public config from secrets |
| Email provider API key | EMAIL_PROVIDER_API_KEY | Secret | Server-only |
| Contact recipient | CONTACT_EMAIL_TO | Private config | Confirm recipient and handling |
| Form anti-spam secret | CAPTCHA_SECRET / provider equivalent | Secret | Server-only |
| Analytics ID | NEXT_PUBLIC_ANALYTICS_ID | Public identifier | Only after privacy approval |

Exact variable names must follow the selected provider's current documentation and actual code. This table is illustrative, not a final implementation contract.

## 4. Rules

- Commit .env.example, never .env.local or production .env files.
- Use obvious placeholders, not live phone numbers, personal addresses or passwords.
- Never expose privileged API keys through NEXT_PUBLIC variables.
- Keep preview and production values separate.
- Restrict who can view or edit production environment variables.
- Rotate credentials on exposure or owner changes.
- Document purpose, required/optional status and setup source for every variable.
- Do not paste secret values into GitHub issues, pull requests, Build Journal or public docs.

## 5. Final handover

The final handover should list actual variable names and explain where the company configures them. It must not disclose their values. Secret transfer/recovery should use the approved password manager or provider invitation mechanism.
