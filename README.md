# Portfolio

Minimal, monospace, dark-mode personal site — Lore / Projects / Bookshelf.
Built with Next.js (App Router) + TypeScript + Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

All page text lives in **`content.json`** at the project root — nothing else
needs to change for routine updates:

- `site` — name, tagline, email, github/linkedin/resume links
- `lore` — the paragraphs on the home page
- `projects` — array of `{ title, year, description, link, tags }`
- `bookshelf.currentlyReading` / `bookshelf.favorites` — arrays of `{ title, author }`

To update: edit `content.json` directly in the GitHub web UI (pencil icon →
commit) or locally and push. Vercel rebuilds automatically — no other file
needs to change, and routes never break.

## Adding your resume PDF

Drop your resume file at `public/resume.pdf`. The nav's "resume" link already
points to `/resume.pdf`.

## Deploying (Vercel, free)

1. Push this folder to a new GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Leave all defaults (Vercel auto-detects Next.js) → Deploy.
4. Every push to `main` redeploys automatically. Editing `content.json` on
   GitHub alone is enough to trigger a redeploy.

## Structure

```
app/
  layout.tsx      — shared shell, fonts, nav
  nav.tsx         — top nav (client component, highlights active page)
  page.tsx        — Lore (home)
  projects/page.tsx
  bookshelf/page.tsx
  globals.css
content.json      — all editable text/data
public/
  resume.pdf      — add your own
```
