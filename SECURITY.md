# Security Policy

## Supported Versions

Floravu is in early repository setup. No production website version has been released yet.

Security review will apply to the current active version once website implementation begins.

## Reporting a Vulnerability

If you discover a security issue, report it privately to the repository owner through an appropriate GitHub channel. Do not publish exploit details in public issues or discussions before the owner has had a reasonable chance to review the report.

Please include:

- A concise description of the issue.
- Steps to reproduce the issue.
- Affected files, pages, or dependencies if known.
- Potential impact.
- Suggested remediation if available.

## Security Expectations

Future website code should follow these principles:

- Avoid unnecessary third-party scripts.
- Keep dependencies intentional and current.
- Do not commit secrets, credentials, tokens, or private configuration.
- Validate and sanitize any user-controlled data if forms or integrations are added later.
- Prefer static, minimal, auditable front-end behavior when possible.
