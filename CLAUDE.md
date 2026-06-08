# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Cyanview Support Site

## Overview

Docusaurus v3 documentation and support portal for **Cyanview** — remote camera control solutions for broadcast professionals. Products include RCP, RIO, CI0, VP4, NIO, and RSBM.

- **Framework**: Docusaurus 3.9.2 with React 19, TypeScript
- **URL**: https://support.cyanview.cloud
- **Fonts**: Outfit (headings/body) + Source Code Pro (monospace) via Google Fonts
- **Design tokens**: CSS custom properties in `src/css/custom.css` (prefix `--cy-*`)

## Architecture

```
src/
  pages/index.tsx          ← Thin <Redirect to="/support"> — NOT the homepage
  pages/support.tsx        ← The real support portal homepage (service cards, scroll reveal)
  css/custom.css           ← Full design system: tokens, navbar, sidebar, docs, footer, homepage
  components/ScrubVideo.tsx   ← Drag-to-scrub <video> player (used in rio.mdx)
  components/EmbedPlayer.tsx  ← Injects a third-party <script> embed, client-only (system-examples.md)
  theme/Root.tsx           ← Docusaurus root swizzle, mounts AI chat widget (client-only)
  theme/ChatWidget.tsx     ← Floating bubble + deep-chat-react, streams clorag SSE
  theme/ChatWidget.module.css
docs/
  getting-started/   ← Quickstart, IP config
  guides/            ← Networking, tally, preview, workflows, advanced
  integrations/      ← Cameras (Sony/Canon/Panasonic/Blackmagic/ARRI/…), accessories, broadcast systems
  products/          ← RCP, RIO, CI0, VP4, NIO, RSBM
  reference/         ← Manuals, FAQ, troubleshooting, firmware, RMA, release notes
  resources/         ← Cable catalog, draw.io symbols
  restricted/        ← Unlisted internal docs (see below), excluded from sidebar
docusaurus.config.ts ← Site config, navbar, footer, plugins, SEO
sidebars.ts          ← Sidebar navigation (manually curated, not auto-generated)
```

**Routing note**: `/` redirects to `/support`. When editing the portal landing
page, edit `src/pages/support.tsx`, not `index.tsx`.

## Key Conventions

- **CSS class prefixes**: `sp-*` for support portal homepage, `cy-*` for design tokens
- **Color palette**: Deep navy (`#091428`) hero/footer, blue accents (`#3b82f6`, `#60a5fa`), cyan brand (`#00a8e8`)
- **Footer**: Always dark style, background matches hero. 4 columns: Support, Resources, Products, Cyanview
- **Dark mode**: Supported via `[data-theme='dark']` selectors. Footer contrast must work in both modes — use solid hex values, not low-opacity rgba
- **Scroll reveal**: `.reveal` class + IntersectionObserver in homepage, respects `prefers-reduced-motion`

## Development

```bash
npm run start     # Dev server with hot reload
npm run build     # Production build (validates links/images)
npm run serve     # Serve production build locally
npm run typecheck # TypeScript check (runs `tsc`)
```

Requires Node >= 20 (build image uses Node 22).

## Deployment

Multi-stage Docker build → static nginx. `Dockerfile` builds with Node, copies
`build/` into `nginx:alpine` using `nginx.conf`. `docker-compose.yml` exposes the
container on `127.0.0.1:8088` (reverse-proxied in production) with
`restart: unless-stopped`.

```bash
docker compose up -d --build   # build + serve the production site
```

## Restricted Docs

`docs/restricted/` holds internal hardware procedures and partner integration
notes. They are **deliberately omitted from `sidebars.ts`** so they don't appear
in navigation but remain browsable by direct URL (e.g. `/restricted/configuration/wic`).
There is no auth gate — obscurity only, reinforced by the site-wide `noIndex`.
When adding one, set a `slug:` in frontmatter and do **not** add it to the sidebar.

## Plugins

- `docusaurus-plugin-image-zoom` — click-to-zoom on doc images
- `@docusaurus/plugin-client-redirects` — legacy URL redirects from old site
- `@easyops-cn/docusaurus-search-local` — offline-capable local search

## AI Chat Widget

Floating support assistant on every page, wired to the Cyanview RAG backend
(clorag) at `POST https://cyanview.cloud/api/search/stream`.

- **Stack**: `deep-chat-react` inside a Docusaurus `Root` swizzle, rendered
  client-side only via `<BrowserOnly>` (web components do not SSR)
- **API contract**: `{query, source: "both", limit: 10}` → SSE stream of
  `{type: "session"|"text"|"sources"|"done"|"error", ...}` events
- **System prompt**: owned by clorag
  (`base.identity` + `base.product_reference` + `synthesis.web_layer` layers
  in `src/clorag/web/search/synthesis.py`) — do not duplicate in the widget
- **CORS**: `clorag/src/clorag/web/app.py` must list
  `https://support.cyanview.cloud` and `http://localhost:3000` in
  `allow_origins`. When adding a new origin, redeploy clorag
- **Disclaimer**: small-font footer "AI-generated answers may contain errors.
  Always verify critical information." lives at the bottom of the chat panel
- **Sources**: clorag may return entries with `url: null` (e.g. gmail cases) —
  the widget filters these out before rendering the markdown source list

## Important Notes

- `noIndex: true` is set — site is in test mode, not indexed by search engines
- Broken links/images are configured to **warn, not fail** the build
  (`onBrokenLinks: 'warn'`, `onBrokenMarkdownLinks`/`onBrokenMarkdownImages: 'warn'`).
  A green build does not guarantee all links/images resolve — check the warnings.
- Build warnings for missing images in `blackmagic-haivision.md` and `canon-ptz.md` are known
- Homepage links to external AI assistant at `https://cyanview.cloud`
- Footer and hero share the same deep navy background for visual continuity
- `headTags` in `docusaurus.config.ts` injects JSON-LD Organization structured data for SEO
