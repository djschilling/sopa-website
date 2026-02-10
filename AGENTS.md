# AGENTS.md

Guidance for coding agents working in this repository.

## Scope

These instructions apply to the entire `website/` project.

## Goals

- Keep the site minimal, fast, and static-first.
- Prefer clear, maintainable code over abstractions.
- Preserve the existing visual style unless explicitly asked to redesign.

## Tech Constraints

- Framework: Astro
- Language: TypeScript + Astro components
- Styling: plain CSS in `src/styles/global.css`
- Output: static build

## Editing Rules

- Do not add heavy runtime dependencies unless necessary.
- Reuse `BaseLayout.astro` for shared header/footer/meta.
- Keep routes simple and file-based in `src/pages/`.
- Use semantic HTML and accessible labels/alt text.
- Ensure mobile layout remains functional after changes.

## Validation

Before finishing, run:

```bash
npm run build
```

If build fails, fix errors before returning.

## Content/Legal

- Keep privacy and terms pages present.
- Use concrete effective dates when updating legal text.
- Do not invent store links; add placeholders if missing.

## Assets

- Put static files in `public/`.
- Optimize image size when adding new screenshots.

## Out of Scope (unless requested)

- Backend/API work
- CMS integration
- User accounts/auth
