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

- Replace placeholder support/legal emails as needed.
- Add App Store URL on the home page when iOS listing is live.
- Domain target is `sopagame.com`.
