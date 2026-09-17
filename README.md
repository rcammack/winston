# Winston

A sitter-friendly resume website for Winston, built with React, TypeScript, and Vite.

## Development

```bash
npm install
npm run dev
```

Run `npm run build` to create a production build and `npm run lint` to check the source.

## Deployment

Pushes to the `main` branch automatically build and deploy the site to GitHub
Pages via the workflow in `.github/workflows/deploy.yml`. In the repository
settings, under **Settings > Pages**, set the source to **GitHub Actions**
(one-time setup). Once enabled, the site will be available at
`https://rcammack.github.io/winston/`.
