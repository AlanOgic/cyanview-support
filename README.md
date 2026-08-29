# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## AI Chat Widget

A floating AI assistant is embedded on every page (bottom-right). It uses
[deep-chat-react](https://github.com/OvidijusParsiunas/deep-chat) and streams
answers from the Cyanview RAG backend at
`https://cyanview.cloud/api/search/stream` (clorag).

- **Component**: `src/theme/Root.tsx` + `src/theme/ChatWidget.tsx`
- **Styles**: `src/theme/ChatWidget.module.css`
- **Transport**: SSE (`text/event-stream`) with `text`/`sources`/`error` events
- **CORS**: clorag must allow `https://support.cyanview.cloud` and
  `http://localhost:3000` for local dev

## Deployment

The site runs at https://support.cyanview.cloud, behind the host nginx on
`cyanview.cloud`, which proxies to the `cyanview-support` container on
`127.0.0.1:8088`. The container mounts `/opt/cyanview-support/build` read-only
as its docroot, so deploying is a build plus an rsync:

```bash
npm run build
rsync -azP --delete build/ root@cyanview.cloud:/opt/cyanview-support/build/
```

nginx picks the new files up immediately. No image rebuild, no restart.

**Do not rebuild the image on the server.** `static/**` is git-lfs tracked and
git-lfs is not installed on that host, so `docker compose up -d --build` there
would bake LFS pointer files in place of every image on the site. Always build
locally, where LFS resolves, and ship the result.

After deploying, check that the new build is really live - the container served
a stale baked-in image for seven weeks before this was found:

```bash
curl -sSI https://support.cyanview.cloud/ | grep last-modified
```
