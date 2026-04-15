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

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
