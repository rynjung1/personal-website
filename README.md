# Personal Portfolio Site

A minimal, content-first portfolio built with Next.js (App Router), TypeScript, Tailwind CSS,
and Framer Motion. This is a skeleton — no personal content has been filled in yet.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Filling in your content

Every placeholder is marked `FILL IN` — search the project for that string
(`grep -rn "FILL IN" src`) to find all of them. They live in two kinds of places:

### Data files (`src/data/`)

| File | What it controls |
| --- | --- |
| `src/data/site.ts` | Your name, bio, avatar image path, GitHub/LinkedIn URLs, contact tagline, email (split into `emailUser`/`emailDomain`), and location. |
| `src/data/skills.ts` | The technical skills icon grid. Each entry is `{ name, slug }`, where `slug` is a [Simple Icons](https://simpleicons.org/) slug (e.g. `"python"`, `"typescript"`, `"docker"`). Add or remove entries freely. |
| `src/data/experience.ts` | Work experience cards, ordered most recent first. Three slots are pre-labeled (Statistics Canada, 20/20 Vision, VLS Group Inc) — fill in the `tag`, `location`, `dates`, and `bullets` for each. |
| `src/data/projects.ts` | Project cards. Each has a `title`, `link` (GitHub URL), `description`, optional `imgUrl` (path under `public/`, e.g. `/projects/my-project.png`), `alt`, and `chips` (`{ text, color }`, where `color` is a hex string without `#` used for the chip's border/glow/text). One example object is included — duplicate it for each project you want to show. |
| `src/data/education.ts` | Education cards, ordered most recent first. One example object is included — duplicate it for additional degrees. |

### Inline placeholders

A few spots are filled in directly in JSX rather than data files (e.g. `layout.tsx`'s SEO
metadata, the favicon). These are marked with `{/* FILL IN: ... */}` comments right above the
line to edit.

- **SEO metadata**: `src/app/layout.tsx` — page title, description, Open Graph tags, and site URL.
- **Favicon**: replace `src/app/favicon.ico` with your own. Optionally add an Open Graph image at
  `public/og-image.png` (1200x630) and uncomment the `images` field in `layout.tsx`.
- **Avatar photo**: set `avatarSrc` in `src/data/site.ts` to an image path under `public/`
  (e.g. `/avatar.jpg`), then drop the file in `public/`. Until set, the hero shows an empty
  placeholder box.

## Project structure

```
src/
  app/
    layout.tsx      # root layout, fonts, SEO metadata
    page.tsx         # assembles all sections
    globals.css       # Tailwind + accent color variable
  components/
    Nav.tsx          # sticky header
    Hero.tsx          # intro, bio, avatar, socials
    Experience.tsx      # work experience cards
    Projects.tsx        # project cards
    Skills.tsx            # animated icon grid
    Education.tsx           # education cards
    Contact.tsx               # contact / footer
    FadeIn.tsx                  # shared scroll fade-in wrapper (Framer Motion)
  data/
    site.ts          # name, bio, socials, contact info
    experience.ts      # work experience list
    projects.ts          # project list
    skills.ts               # skills icon list
    education.ts              # education list
  lib/
    types.ts          # shared TypeScript types for the data files
```

## Design

- Colors: black/white/gray with a single accent color, controlled by the `--accent` CSS
  variable in `src/app/globals.css`. Change that one value to re-theme the whole site.
- Font: [Inter](https://fonts.google.com/specimen/Inter), loaded via `next/font/google`.
- Motion: subtle fade/slide-in on scroll (`FadeIn` component, and `whileInView` on the skills
  grid) plus hover states on cards and icons, via [Framer Motion](https://www.framer.com/motion/).

## Deploying

### Vercel (zero config)

Push to a GitHub repo and [import it on Vercel](https://vercel.com/new) — no configuration
needed.

### GitHub Pages (static export)

Add `output: "export"` to `next.config.mjs`, then:

```bash
npm run build
```

The static site will be output to `out/`, which you can deploy to GitHub Pages. Note: static
export doesn't support Next.js image optimization or the `metadataBase`-relative OG image path
as-is — double check those if you go this route.
