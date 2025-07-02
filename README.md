# Personal Blog

This repository contains a minimal personal blog powered by [Eleventy](https://www.11ty.dev/).

## Setup

```bash
npm install
npm run build   # builds the site to the `_site` directory
npm start       # builds and serves with live reload
```

Blog posts are written in Markdown inside `src/posts/`.

## GitHub Pages

This project ships with a workflow that builds the site on every push to
`main` and deploys it using [GitHub Pages](https://pages.github.com/). To
enable automatic deployments:

1. Open the repository settings and enable **GitHub Pages** with the
   **GitHub Actions** option.
2. The site will be available at `https://<username>.github.io/` after the
   first successful workflow run.
