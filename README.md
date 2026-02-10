# SOPA Website

Minimal marketing/support website for **SOPA**, a puzzle game.

## Stack

- [Astro](https://astro.build/)
- TypeScript
- Plain CSS
- Static site output

## Pages

- `/` Home
- `/support` Support
- `/privacy` Privacy Policy
- `/terms` Terms of Use

## Development

```bash
npm install
npm run dev
```

Site runs locally at `http://localhost:4321` by default.

## Build

```bash
npm run build
npm run preview
```

Build output is generated in `dist/`.

## Deploy to GitHub Pages

1. In GitHub, open this repository: [https://github.com/djschilling/sopa-website](https://github.com/djschilling/sopa-website)
2. Go to `Settings` -> `Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Push to `main` (or run the `Deploy to GitHub Pages` workflow manually).
5. After deploy completes, the site will be available on your Pages URL.

Notes:
- The workflow file is `.github/workflows/deploy.yml`.
- `astro.config.mjs` auto-sets the correct base path in GitHub Actions for project pages (`/sopa-website`).
- If you later attach a custom domain in GitHub Pages, keep `site` and DNS aligned with that domain.

## Project Structure

```text
src/
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    support.astro
    privacy.astro
    terms.astro
  styles/
    global.css
public/
  images/
```

## Content Notes

- Add App Store URL on the home page when iOS listing is live.
