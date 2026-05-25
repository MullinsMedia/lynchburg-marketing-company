# Lynchburg Marketing Company — Claude Context

This file is read automatically by Claude Code at session start. Keep it current when making significant changes.

---

## What this project is

**LynchburgMarketingCompany.com** is a live SEO experiment built by Mullins Media Co. — a real marketing agency in Lynchburg, VA. The site was built over a weekend using AI (Claude) to prove it could rank on Google organically for "Lynchburg marketing company" and related terms. Zero paid ads. Zero hacks. It worked.

The site is also a lead generation tool for **Mullins Media Co.** — the real agency behind the brand. Every page, blog post, and service page is optimized for a specific keyword cluster.

---

## The real business

**Mullins Media Co.**
- Owner: Adam Mullins (hello@mullinsmediaco.com)
- Phone: **(434) 204-4226** ← use this number everywhere — must match BrightLocal citations
- Website: mullinsmediaco.com
- Founded: 2013
- Team: 9 people (Adam, Paige, Delaney, Elisa, Bradley, Isaac, Ollie + 2 more)

---

## Tech stack

- **Framework**: Next.js 15 App Router (NOT pages router — use async params, async generateMetadata)
- **Hosting**: Vercel (auto-deploys from `main` branch)
- **Styling**: Tailwind CSS
- **Fonts**: Playfair Display (serif, `font-serif`), Poppins (sans, `font-sans`) via `next/font/google`
- **CMS/Blog**: **Google Sheets** — posts are fetched directly via `src/lib/sheets.ts` (Google Sheets API + service account). There is no Supabase.
- **Blog publishing**: Cron at `0 8 * * *` hits `/api/publish-posts` → sets rows with `status=ready` and past `scheduledDate` to `published`
- **Analytics**: GA4 — ID is `G-DKPY06TXS1` (must be set as `NEXT_PUBLIC_GA4_ID` in Vercel — see below)
- **Repo**: github.com/MullinsMedia/lynchburg-marketing-company

---

## Vercel environment variables

All must be set in **Vercel → Project Settings → Environment Variables** and in `.env.local` locally:

| Variable | Notes |
|---|---|
| `GOOGLE_SHEET_ID` | ID of the Google Sheet used as blog CMS. Server-side only. |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Service account email for Sheets API. Server-side only. |
| `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` | Private key (literal `\n` in string). Server-side only. |
| `NEXT_PUBLIC_GA4_ID` | **GA4 Measurement ID: `G-DKPY06TXS1`** — ⚠️ must be set in Vercel for tracking to appear |
| `NEXT_PUBLIC_SITE_URL` | `https://lynchburgmarketingcompany.com` — used for canonicals, sitemap, OG tags |
| `NEXT_PUBLIC_PHONE` | Optional. Code falls back to `(434) 204-4226` if not set. |
| `CRON_SECRET` | Auth token checked in `x-cron-secret` header on `/api/publish-posts` |
| `ADMIN_PASSWORD` | Password for `/admin` dashboard (client-side check) |
| `UNSPLASH_ACCESS_KEY` | Unsplash API key for image search in admin. Optional. |

> **⚠️ GA4 action required:** `NEXT_PUBLIC_GA4_ID=G-DKPY06TXS1` must be added to Vercel env vars. The tracking script is already in `src/app/layout.tsx` but is gated on this env var — without it, no GA code appears in the HTML.

---

## Color palette (use these exactly)

| Role | Value |
|---|---|
| Dark background / header text | `#2C3539` |
| Accent / links | `#61717A` |
| Body text | `#4C4C4C` |
| Muted text | `#97a8b0` |
| Light background | `#F5F6F6` |
| Borders | `#CBD4D7` |
| White | `#ffffff` |

---

## Key image assets (Squarespace CDN)

All images are hosted on Squarespace CDN. Base URL:
`https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/`

| Asset | URL suffix |
|---|---|
| Team group photo | `f58712e1-0f03-48de-9477-45fc64342dde/Mullins+Media+2024-79_websize.jpg` |
| Adam Mullins headshot | `a3fe5367-fd6b-48f6-8db1-217abf513504/Mullins+Media+Headshots+2025-16.jpg` |
| Adam headshot (portrait) | `316edfad-b9e9-4388-844e-3d6920f3b821/Mullins+Media+Headshots+2025-2.jpg?format=2500w` |
| Paige Howell headshot | `65c3410f-cef7-4c05-9b25-78d99c139942/Mullins+Media+Headshots+2025-10.jpg` |
| Delaney Poff headshot | `5948e93a-c4b8-4fab-add1-3701c2b3615f/Mullins+Media+Headshots+2025.jpg` |
| Elisa Forshey headshot | `58948c6a-8615-414b-b162-c0f1fa639320/Mullins+Media+Headshots+2025-5.jpg` |
| Bradley Mejia headshot | `2af41cda-67c5-4a94-a622-b8ecb513ab29/Mullins+Media+Headshots+2025-14.jpg` |
| Isaac Gibson headshot | `f415a90a-31e1-4426-bb9c-97859e4c72fb/Mullins+Media+Headshots+2025-19.jpg` |
| Ollie Mullins headshot | `7bd1b5c9-2cf2-457d-afbc-b180567bbc32/Ollie+Headshot-2.jpg` |
| Behind the scenes | `dfabac6d-d57a-4f13-ba2e-76a484b7043b/Mullins+Media+Co.+Branding+Images+-7.jpg` |
| LM monogram logo | `b2c5f66a-2700-4d6c-a9b8-a5e31d234e25/LM.png?format=750w` |
| Horizontal logo | `b2938e5c-2c27-489f-ac2e-12d5b7e721aa/Lynchburg_Marketing_Company.png?format=750w` |

---

## Team members

| Name | Role | Notes |
|---|---|---|
| Adam Mullins | Founder | Full-time marketer since 2013, owns multiple businesses |
| Paige Howell | Strategic Growth Manager | Former Lynchburg business owner |
| Delaney Poff | Project Manager | Born/raised Bedford VA, Liberty University grad 2023 |
| Elisa Forshey | Social Media Manager | 8 years graphic design, copywriting, social media |
| Bradley Mejia | Multimedia Specialist | Photography, videography, marketing, design |
| Isaac Gibson | Multimedia Specialist | 15+ years digital media, former Liberty ski coach |
| Ollie Mullins | Drone Pilot | Adam's son, skilled FPV and cinema drone |

---

## Site structure

```
src/app/
├── page.tsx                   Homepage — LocalBusiness JSON-LD schema lives here
├── about/page.tsx             Team, philosophy, why this site exists
├── contact/page.tsx           Form (Squarespace embed) + phone + address
├── the-experiment/page.tsx    Full breakdown of how/why this site was built with AI
├── services/page.tsx          Services hub
├── services/seo/
├── services/advertising/
├── services/social-media/
├── services/website-design/
├── services/content-marketing/
├── blog/page.tsx              Paginated blog index (/blog?page=N — noindex on N>1)
├── blog/[slug]/page.tsx       Individual posts (Google Sheets CMS)
├── blog/category/[category]/  Category pages
├── forest-va-marketing/       Location pages (×6 total)
├── bedford-va-marketing/
├── roanoke-marketing-agency/
├── smith-mountain-lake-marketing/
├── amherst-va-marketing/
├── central-virginia-marketing/
├── admin/page.tsx             ⚠️ 'use client' — CMS dashboard. Noindex + disallowed in robots.txt
├── api/publish-posts/         Cron endpoint — publishes ready posts from Google Sheets
├── api/admin/                 Admin API routes (posts, publish, schedule, image, revalidate)
├── robots.ts                  Disallows /api/ and /admin
└── sitemap.ts                 Auto-generates sitemap from Sheets posts + static pages
```

---

## Blog CMS (Google Sheets)

Posts are read from a Google Sheet (`GOOGLE_SHEET_ID`). Column mapping — Sheet1, starting row 2:

| Col | Field | Notes |
|---|---|---|
| A | `title` | |
| B | `slug` | URL slug |
| C | `targetKeyword` | Primary SEO keyword |
| D | `metaDescription` | |
| E | `featuredImageUrl` | Any image URL (Unsplash etc.) |
| F | `content` | Markdown |
| G | `status` | `draft` / `ready` / `published` |
| H | `scheduledDate` | YYYY-MM-DD |
| I | `publishedDate` | Set by cron when published |
| J | `category` | |
| K | `internalLinks` | |
| L | `secondaryKeywords` | |
| M | `faqQuestions` | Format: `Q: question?\n A: answer\n Q: ...` |
| N | `ctaUrl` | |
| O | `author` | Default: Adam Mullins |

**Cache:** Posts are cached with `unstable_cache` (24h revalidation, tagged `['blog']`).
**Cache bust:** Call `/api/admin/revalidate` to flush `revalidateTag('blog')` immediately after publishing.
**Admin dashboard** at `/admin` — password-protected client-side. Add metadata to this page via `src/app/admin/layout.tsx` (not page.tsx, which is `'use client'`).

---

## NAP (Name / Address / Phone) — must be exactly consistent sitewide for local SEO

- **Name:** Lynchburg Marketing Company
- **Address:** Lynchburg, VA 24501, USA
- **Phone:** (434) 204-4226 → E.164: `+14342044226`
- **Email:** hello@mullinsmediaco.com
- **Website:** https://lynchburgmarketingcompany.com

The footer (`src/components/Footer.tsx`) is the canonical NAP block, wrapped in:
- `itemScope itemType="https://schema.org/LocalBusiness"` on the outer div
- `itemProp="name"` on the visible "Lynchburg Marketing Company" text
- Nested `itemScope itemType="https://schema.org/PostalAddress"` on the address block
- `itemProp="telephone"` on the phone link (sibling of the address, not inside PostalAddress)

---

## Schema.org (Homepage JSON-LD)

Lives in `src/app/page.tsx` as `const jsonLd`. Current shape:

```js
{
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',   // extends LocalBusiness — more specific
  name: 'Lynchburg Marketing Company',
  alternateName: 'Mullins Media Co.',
  telephone: '+14342044226',         // E.164 format
  email: 'hello@mullinsmediaco.com',
  image: '...team photo URL...',
  logo: '...wordmark URL...',
  priceRange: '$$',
  address: { '@type': 'PostalAddress', addressLocality: 'Lynchburg', addressRegion: 'VA', postalCode: '24501', ... },
  areaServed: [6 cities],
  sameAs: [mullinsmediaco.com, Instagram, Facebook],
  founder: { '@type': 'Person', name: 'Adam Mullins' },
  foundingDate: '2013',
}
```

Location pages (forest, bedford, amherst, roanoke, SML, central-va) also each have their own `LocalBusiness` JSON-LD targeting that specific city.

---

## BrightLocal SEO Audit — Status (as of May 2025)

A BrightLocal audit flagged 8 on-site SEO issues. Current status:

| # | Issue | Status | Notes |
|---|---|---|---|
| 1 | Google Analytics not found | ⚠️ **Action required** | Set `NEXT_PUBLIC_GA4_ID=G-DKPY06TXS1` in Vercel. Code is wired and ready. |
| 2 | 4 pages on HTTP | ✅ Fixed | HTTP→HTTPS redirect added to `next.config.ts`. Vercel CDN also handles at edge. |
| 3 | No NAP on most pages | ✅ Fixed | Footer now has business name as visible text + correct Schema microdata |
| 4 | Schema.org incomplete | ✅ Fixed | Added `image`, `logo`, `priceRange`, `alternateName`, E.164 phone, `ProfessionalService` type |
| 5 | 11 sparse content pages | ⚠️ Flagged | `/blog` static UI text is thin; contact page; borderline location pages. Need to add prose. |
| 6 | 3 duplicate titles/descriptions | ⚠️ Partial | `/admin` disallowed in robots.txt + X-Robots noindex added. Need BrightLocal report to ID remaining 2. |
| 7 | 2 dynamic URLs | ⚠️ Known | `/blog?page=N` pagination — already `noindex`-ed correctly. No code change needed. |
| 8 | Mobile PageSpeed 71/100 | ✅ Partial | Preconnect for Squarespace CDN + GTM added to `layout.tsx`; immutable cache on `/_next/static/`. Biggest remaining win: move hero images to `/public` for Next.js image optimization. |

---

## Key rules for all code changes

1. **NEVER push to main directly.** Always branch → PR → merge. Non-negotiable.
2. **Branch naming**: `feature/description`, `fix/description`
3. **Always run `npm run build` (or `yarn tsc --noEmit`) before committing** — must pass with zero TypeScript errors.
4. **Next.js 15 App Router** — route params are `Promise<{...}>`, use `generateMetadata` (async) for dynamic pages. Never use the pages router.
5. **Phone number is (434) 204-4226** — must be consistent everywhere: footer, JSON-LD, metadata descriptions, `tel:` links. Must match BrightLocal citation data exactly.
6. **Business name is "Lynchburg Marketing Company"** — consistent everywhere for citation consistency.
7. **Admin page is `'use client'`** — cannot export `metadata` directly. To add/change metadata for `/admin`, use `src/app/admin/layout.tsx`.
8. **Never add `<meta>` tags manually** — always use Next.js `metadata` / `generateMetadata` exports.

---

## SEO approach

- Every page has `generateMetadata` (or static `metadata`) with title, description, canonical URL, OG, and Twitter card
- `metadataBase` set in `src/app/layout.tsx` → all relative OG/Twitter image URLs resolve correctly
- Schema.org JSON-LD on homepage (`ProfessionalService`), services hub, and location pages (`LocalBusiness`)
- `Article` schema on blog posts
- Blog paginated pages (page 2+) are `noindex, follow`
- Sitemap auto-generated at `/sitemap.xml`
- `src/app/robots.ts` disallows `/api/` and `/admin`
- Default OG image: team photo; favicon: LM monogram

---

## The self-aware voice

The site openly acknowledges it was built by AI. This is intentional brand positioning — lean into it, never soften it:
- "We built this site over a weekend. Zero ads. You found it on Google anyway."
- "Not a single paid ad. Not a single SEO hack."
- "Yes, we know: some blog images are off, the posts are long..." (acknowledgment bar)
- The `/the-experiment` page documents the full build — it's a core conversion asset

---

## What Mullins Media Co. actually does (for copy/content)

SEO · Google Ads / PPC · Social media (FB, IG, TikTok, YouTube) · TV (WSET) · Radio (WLNI) · Billboards · Website design (WordPress / Shopify / custom) · Content marketing · Brand identity / graphic design · Photography & videography (in-house) · Drone (Ollie) · Email marketing · Reputation management

**Key differentiators:** Custom strategy per client · Honest recommendations (will say if SEO isn't right) · Dedicated channel specialists (not generalists) · Measure by profitability, not vanity metrics · Long-term relationships · In-house production · Media partners with WSET, WLNI, Central Virginia Home Magazine

---

## Git workflow

```bash
git checkout main && git pull
git checkout -b feature/your-description
# make changes
npm run build        # must pass
git add <specific files — never git add -A blindly>
git commit -m "Short imperative message"
git push -u origin feature/your-description
gh pr create --title "..." --body "..."
# review Vercel preview URL, then merge via GitHub UI
```
