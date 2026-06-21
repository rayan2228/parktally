# ParkTally — Next.js Marketing Site

Production-grade Next.js 14 (App Router) implementation of the ParkTally
landing page, converted from the static HTML/Figma build.

## Stack

- **Next.js 14** (App Router, React Server Components by default)
- **TypeScript** (strict mode)
- **CSS Modules** per-component (no global class collisions, no runtime CSS-in-JS cost)
- Zero UI dependencies — hand-rolled icons/components to keep the bundle lean

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Architecture

```
src/
  app/
    layout.tsx        Root layout: fonts, global <head> metadata, JSON-LD, Header/Footer
    page.tsx           Home page — composes section components only
    globals.css         Design tokens (CSS custom properties) + resets
    sitemap.ts           Dynamic sitemap.xml (MetadataRoute.Sitemap)
    robots.ts             Dynamic robots.txt (MetadataRoute.Robots)
    manifest.ts            Web app manifest (PWA-ready)
    loading.tsx              Route-level Suspense fallback
    error.tsx                 Route-level error boundary (client component)
    not-found.tsx               Custom 404
  components/
    layout/             Header (client — needs scroll/menu state), Footer (server)
    sections/            One file per landing-page section + matching .module.css
    ui/                   Reusable primitives: Button, Reveal (scroll animation)
    icons.tsx              Inline SVG icon set (no icon library dependency)
    JsonLd.tsx              Structured data (Organization, SoftwareApplication, WebPage)
  lib/
    site-config.ts      Single source of truth for SEO (title, description, OG, etc.)
    content.ts            All page copy, structured as typed objects
```

### Why this structure

- **Server Components by default.** Only `Header` and `CtaForm` are client
  components (`"use client"`) because they need browser APIs (scroll
  listener, form state). Everything else — including all section
  components — renders on the server, which keeps the JS bundle small and
  ensures content is in the initial HTML for crawlers.
- **`Reveal` wraps content, never hides it from no-JS/bots.** The
  fade-up-on-scroll effect is implemented with CSS transitions driven by a
  client-side `IntersectionObserver`; the underlying content is always
  present in the server-rendered markup, so disabling JS or running a
  crawler still sees full content (and `prefers-reduced-motion` is
  respected).
- **Content/config separated from markup.** `lib/content.ts` and
  `lib/site-config.ts` hold all copy and SEO metadata respectively. This
  makes it trivial to localize, hand off content edits to non-engineers, or
  swap in a CMS later without touching component code.
- **CSS Modules, not a global stylesheet.** Each section owns its styles,
  scoped automatically by the build — no naming collisions, no unused CSS
  shipped to a page that doesn't use it.
- **Shared `InfoBlock` layout.** Sections 01 (Revenue Loss) and 02
  (Features) share an identical two-column layout in the original design;
  rather than duplicating that markup/CSS, both consume a single
  `InfoBlock` component and only pass in the parts that differ.

## SEO checklist implemented

- [x] Per-page `<title>` template + meta description via the Metadata API
- [x] Open Graph + Twitter Card tags with a dedicated OG image
- [x] Canonical URL
- [x] `robots.ts` → `/robots.txt`
- [x] `sitemap.ts` → `/sitemap.xml`
- [x] `manifest.ts` → installable web app manifest
- [x] JSON-LD structured data (Organization, SoftwareApplication, WebPage)
- [x] Semantic HTML (`<nav>`, `<main>`, `<header>`, `<footer>`, heading
      hierarchy starting at a single `<h1>`)
- [x] All images use `next/image` with explicit `alt` text, responsive
      `sizes`, and `priority` on the above-the-fold hero image only
- [x] Skip-to-content link for keyboard/screen-reader users
- [x] `aria-label`/`aria-labelledby` on all major landmark sections

## Before deploying to production

1. **Replace placeholder Figma asset URLs.** All images currently point at
   `https://www.figma.com/api/mcp/asset/...` URLs, which are temporary. Run
   them through `next/image`-compatible permanent storage (e.g. your own
   `/public` directory, an S3 bucket, or a CDN) and update `src/lib/content.ts`.
2. **Add real OG image** at `public/images/og-cover.jpg` (1200×630).
3. **Add real favicons**: `favicon.ico`, `apple-touch-icon.png`,
   `icon-192.png`, `icon-512.png` in `public/`.
4. **Wire the CTA form** in `src/components/sections/CtaForm.tsx` to a real
   endpoint (currently stubbed with a `setTimeout`).
5. **Update `siteConfig.url`** in `src/lib/site-config.ts` to the real
   production domain (used in canonical URLs, OG tags, sitemap, JSON-LD).
6. **Set `metadataBase`** is already derived from `siteConfig.url` — just
   updating that one value propagates everywhere.
