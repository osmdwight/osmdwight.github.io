# Repository Guidelines

Whatever action you can do yourself, please do yourself, this includes starting apps and verification.

## Project Structure & Module Organization

Use the Next.js App Router:

- `src/app/` holds routes, layouts, metadata, and styles.
- `src/components/` holds reusable UI and sections.
- `src/lib/` holds content, utilities, and integrations.
- [`public/assets/`](public/assets/) contains generated illustrations and website media served from `/assets/<filename>`.
- [`public/assets/README.md`](public/assets/README.md) catalogs asset usage, alt text, and source.
- Keep unit tests beside source files; use `tests/` for larger suites.

Separate booking, reputation, social-posting, and voice-agent logic.

## Build, Test, and Development Commands

- `pnpm install`: install dependencies.
- `pnpm dev`: start the development server.
- `pnpm lint`: run ESLint.
- `pnpm test`: run Vitest.
- `pnpm build`: create the production build.
- `pnpm start`: serve the production build.

Commit `pnpm-lock.yaml`; do not mix package managers.

## Coding Style & Naming Conventions

Use TypeScript, two-space indentation, and functional components. Use PascalCase for components (`ReviewCard.tsx`), `use` prefixes for hooks, camelCase for utilities, and kebab-case for routes. Prefer named exports; isolate server-only code.

Use Phosphor Icons via `@phosphor-icons/react`: `regular` for controls, `fill` for active or rating states, and `/dist/ssr` in Server Components. Avoid competing icon libraries or replacement SVGs.

## Asset Guidelines

Name files descriptively (`journey-booking.png`); add them to `public/assets/` and update its catalog. Use graphite, white, and lime illustrations; do not add stock photography without approval. Give meaningful images alt text; hide decorative images.

## Testing Guidelines

Use Vitest (`*.test.ts(x)`). Introduce Playwright (`*.spec.ts`) for end-to-end coverage. Test forms, booking handoffs, analytics, integration failures, and regressions.

## Commits, Pull Requests, and Security

Use imperative Conventional Commits (`feat: add review section`). Pull requests need a change summary, verification, linked issues, and screenshots for visual work. Store secrets in `.env.local`; document placeholders in `.env.example`. Never commit keys, customer data, recordings, or provider credentials.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
