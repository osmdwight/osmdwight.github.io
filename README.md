# Gomatic Website

Marketing website for Gomatic, a reputation management and customer-journey automation agency serving service-based businesses.

## Local development

```powershell
pnpm install
pnpm dev
```

The final booking button links directly to Calendly. Override `NEXT_PUBLIC_BOOKING_URL` only if the booking destination changes. Quality checks:

```powershell
pnpm lint
pnpm test
pnpm build
```

## Deployment

`next.config.ts` exports the site to `out/` for GitHub Pages. Pushes to `main` run `.github/workflows/deploy.yml`, which installs dependencies, checks the site, builds it, and publishes the static export. The GitHub Pages source must be set to **GitHub Actions**. The existing custom domain is `gomatic.today`; its DNS and Pages domain setting are managed in GitHub, not in this project.
