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
  pages/index.tsx    ← Support portal homepage (entry page with service cards)
  css/custom.css     ← Full design system: tokens, navbar, sidebar, docs, footer, homepage
docs/
  getting-started/   ← Quickstart, IP config
  guides/            ← Networking, tally, preview, workflows, advanced
  integrations/      ← Cameras (Sony/Canon/Panasonic/Blackmagic/ARRI/…), accessories, broadcast systems
  products/          ← RCP, RIO, CI0, VP4, NIO, RSBM
  reference/         ← Manuals, FAQ, troubleshooting, firmware, RMA, release notes
  resources/         ← Cable catalog, draw.io symbols
docusaurus.config.ts ← Site config, navbar, footer, plugins, SEO
sidebars.ts          ← Sidebar navigation
```

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
npm run typecheck # TypeScript check
```

## Plugins

- `docusaurus-plugin-image-zoom` — click-to-zoom on doc images
- `@docusaurus/plugin-client-redirects` — legacy URL redirects from old site
- `@easyops-cn/docusaurus-search-local` — offline-capable local search

## Important Notes

- `noIndex: true` is set — site is in test mode, not indexed by search engines
- Build warnings for missing images in `blackmagic-haivision.md` and `canon-ptz.md` are known
- Homepage links to external AI assistant at `https://cyanview.cloud`
- Footer and hero share the same deep navy background for visual continuity
