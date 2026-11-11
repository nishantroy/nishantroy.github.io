# nishantroy.github.io

Personal site. Astro + TypeScript + Tailwind, static output, deployed to GitHub Pages.

## Develop

```sh
npm install
npm run dev      # http://localhost:8004 (also on your LAN IP, port 8004)
npm run build    # astro check + static build into dist/
npm run preview  # serve dist/ on port 8004
```

## Edit content (no component changes needed)

| What | File |
| --- | --- |
| Name, positioning line, intro, links, résumé | `src/data/profile.ts` |
| Jobs and roles | `src/content/experience.yaml` |
| Projects (one file each) | `src/content/projects/*.md` |
| Articles, talks, podcasts | `src/content/writing.yaml` |
| Education | `src/content/education.yaml` |

- **Add a talk or article:** append an entry to `writing.yaml` (`kind`: talk, podcast or article; `date`: `YYYY` or `YYYY-MM`). Set `featured: true` to show it on the home page; everything appears on `/writing`.
- **Add a project:** copy a file in `src/content/projects/`, put its screenshot in `src/assets/projects/<name>/`, set `order`.
- **Headshot:** save a square photo as `src/assets/headshot.jpg` (or .png/.webp). It replaces the NR monogram automatically.
- **Résumé:** put the public PDF at `public/resume.pdf` and set `resume: '/resume.pdf'` in `profile.ts`.
- **Link preview image:** `src/assets/og.png` (1200×630).

Schemas live in `src/content.config.ts`; `npm run build` fails on a malformed entry.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml` (`withastro/action`), which builds and publishes to GitHub Pages.

One-time setup: in the repo on GitHub, **Settings → Pages → Build and deployment → Source: GitHub Actions**.

Nothing is host-specific. To use a custom domain, change `site` in `astro.config.mjs` and add `public/CNAME`. To move to Vercel or Netlify, point them at `npm run build` with output `dist/`.
