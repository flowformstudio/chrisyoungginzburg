# chrisyoungginzburg.com — notes for AI coding agents (Codex, Claude Code)

Chris Young-Ginzburg's personal site ("Fluidgirl": Bay Area hip hop dancer and sound healer). Plain HTML/CSS/JS. Her healing practice has its own site, grovecirclehealing.com (separate repo).
Two people edit this repo (Chris and Igor), so always sync first.

## Before you change anything

1. `git pull --rebase origin main` and confirm it succeeded.
2. If there are uncommitted local changes, commit or stash them first; never discard someone else's work.

## When you are done

1. Preview locally: `python3 -m http.server 8813` → http://localhost:8813. Show Chris and get her OK.
2. `git pull --rebase origin main` again, commit with a clear message, `git push origin main`.
3. Deploy: if the Vercel project `chrisyoungginzburg-i42v` is connected to this GitHub repo, the push deploys. If not, run `vercel --prod` from the repo root. Check the live page afterwards.
4. Never `git push --force`, `git reset --hard origin/...`, or overwrite files from an older copy.

## Search / AI-search data: update it every time

After ANY visible change, update these in the same commit without being asked:
- the JSON-LD `@graph` in `index.html` `<head>` (WebSite, ProfilePage, Person; Person links to `https://www.grovecirclehealing.com/#business`),
- the FAQ section (`#faq`) and its matching `FAQPage` JSON-LD,
- `llms.txt` (what AI assistants read),
- `<title>`, meta description, canonical and `og:`/`twitter:` tags.
Leave `robots.txt` and `sitemap.xml` as they are unless you add a public page (then add it to `sitemap.xml` and `llms.txt`).

## Never delete or rename

- `google0524b0f58688f237.html` (Google Search Console verification),
- `820c2d0b42b0d1c2b1331fb1c978cd61.txt` (IndexNow key),
- `vercel.json` (security/cache headers and the noindex header for the private pages).

## Temple of Expression page

`temple-of-expression/index.html` (URL `/temple-of-expression/`) is Chris's community talent showcase page. It moved here from grovecirclehealing.com on 2026-11-25; the old address there forwards to it. When the next Temple date is set, update in the same commit: the "Upcoming Event" section, the page's JSON-LD (`EventSeries`, add a `subEvent` with the date), the home page Temple section and FAQ answer (+ `FAQPage` JSON-LD), and the "Upcoming events" list in `llms.txt`. On grovecirclehealing.com the Events page still lists the Temple; keep that entry in step too.

## Private pages

- `/save-the-date/` and `/birthday-video/` stay hidden from search (noindex header in `vercel.json`). Don't link them from the main page or the sitemap.
- `/birthday-video/` is built from `tribute-app/` (Next.js, static export):
  `cd tribute-app && npm install && npx next build && cd .. && rm -rf birthday-video && cp -R tribute-app/out birthday-video`, then deploy. `tribute-app/` itself is excluded from the upload by `.vercelignore`.

## Styles, images

- Every page links `styles.css?v=N`. When you change `styles.css`, bump `N` everywhere in the same commit.
- Fonts are self-hosted in `fonts/`. Portrait images come in several sizes (`img/chris-portrait-*.{avif,webp,jpg}`); if you replace the portrait, regenerate all sizes.
- Resize new photos before adding: max ~2400px long edge, JPEG ~80, ideally under 500 KB. Lining numerals, readable contrast (WCAG AA).
