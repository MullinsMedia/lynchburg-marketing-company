# Lynchburg Marketing Company — Claude Context

## What this project is

**LynchburgMarketingCompany.com** is a live SEO experiment built by Mullins Media Co. — a real marketing agency in Lynchburg, VA. The site was built over a weekend using AI (Claude) to prove it could rank on Google organically for "Lynchburg marketing company" and related terms. Zero paid ads. Zero hacks. It worked.

The site is also a lead generation tool for **Mullins Media Co.** — the real agency behind the brand. Every page, blog post, and service page is optimized for a specific keyword cluster.

## The real business

**Mullins Media Co.**
- Owner: Adam Mullins (hello@mullinsmediaco.com)
- Phone: (434) 204-4226 ← use this number everywhere, it must match BrightLocal citations
- Website: mullinsmediaco.com
- Founded: 2013
- Team: 9 people (Adam, Paige, Delaney, Elisa, Bradley, Isaac, Ollie + 2 more)

## Tech stack

- **Framework**: Next.js 16 App Router (NOT pages router — use async params, async generateMetadata)
- **Hosting**: Vercel (auto-deploys from main branch)
- **Styling**: Tailwind CSS
- **Fonts**: Playfair Display (serif), Poppins (sans)
- **CMS/Blog**: Supabase (posts fetched via `src/lib/blog.ts`)
- **Blog pipeline**: Google Sheets → n8n webhook → Supabase (automated publishing)
- **Analytics**: GA4 — ID is `G-DKPY06TXS1` (set as `NEXT_PUBLIC_GA4_ID` in Vercel)
- **Repo**: github.com/MullinsMedia/lynchburg-marketing-company

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

## Fonts in code

- `font-serif` = Playfair Display (headings, pull quotes)
- `font-sans` = Poppins (body, nav, labels)

## Key image assets (Squarespace CDN)

All images are hosted on Squarespace CDN. The base URL pattern is:
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

## Team members

| Name | Role | Notes |
|---|---|---|
| Adam Mullins | Founder | Full-time content creator since 2013, owns multiple businesses |
| Paige Howell | Strategic Growth Manager | Former Lynchburg business owner |
| Delaney Poff | Project Manager | Born/raised Bedford VA, Liberty University grad 2023 |
| Elisa Forshey | Social Media Manager | 8 years graphic design, copywriting, social media |
| Bradley Mejia | Multimedia Specialist | Photography, videography, marketing, design |
| Isaac Gibson | Multimedia Specialist | 15+ years digital media, former Liberty ski coach |
| Ollie Mullins | Drone Pilot | Adam's son, skilled FPV and cinema drone |

## Site structure

```
/                          Homepage
/about                     Team, philosophy, why this site exists
/contact                   Contact form + phone + address
/services                  Services hub
/services/seo              SEO — from $750/mo
/services/advertising      Google Ads, TV (WSET), Radio (WLNI), Billboards
/services/social-media     Social media mgmt — from $2,000/mo
/services/website-design   Web design — from $3,000
/services/content-marketing Content strategy and blog
/the-experiment            Full breakdown of how/why this site was built
/blog                      Blog index (paginated, noindex on page 2+)
/blog/[slug]               Individual blog posts (from Supabase)
/blog/category/[slug]      Category pages
/forest-va-marketing       Location page — Forest, VA
/bedford-va-marketing      Location page — Bedford, VA
/roanoke-marketing-agency  Location page — Roanoke, VA
/smith-mountain-lake-marketing  Location page — Smith Mountain Lake
/amherst-va-marketing      Location page — Amherst, VA
/central-virginia-marketing Location page — Central Virginia
```

## Key rules for all code changes

1. **NEVER push to main directly.** Always branch → PR → merge. This is non-negotiable.
2. **Branch naming**: `feature/description`, `fix/description`
3. **Always run `yarn tsc --noEmit` before committing** — must pass with zero errors.
4. **Next.js 16 App Router** — route params are `Promise<{...}>`, `cookies()`/`headers()` are async, use `generateMetadata` (async) for dynamic pages.
5. **Phone number is (434) 204-4226** — must be consistent everywhere (footer, JSON-LD, metadata descriptions, tel: links). This must match BrightLocal citation data.
6. **Business name is "Lynchburg Marketing Company"** — must be consistent everywhere for citation consistency.

## Business NAP (Name, Address, Phone) — must be consistent sitewide

- **Name**: Lynchburg Marketing Company
- **Address**: Lynchburg, VA USA
- **Phone**: (434) 204-4226
- **Email**: hello@mullinsmediaco.com
- **Website**: https://lynchburgmarketingcompany.com

## Vercel environment variables

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://lynchburgmarketingcompany.com` |
| `NEXT_PUBLIC_GA4_ID` | `G-DKPY06TXS1` |
| `NEXT_PUBLIC_PHONE` | not set — code falls back to `(434) 204-4226` |

## SEO approach

- Every page has `generateMetadata` (or static `metadata`) with title, description, canonical URL, OG, and Twitter card
- LocalBusiness JSON-LD schema on homepage, services hub, and location pages
- Article schema on blog posts
- Blog paginated pages (page 2+) are `noindex`
- Sitemap auto-generated at `/sitemap.xml` via `src/app/sitemap.ts`
- Robots.txt at `src/app/robots.ts`
- Default OG image: team photo (set in `src/app/layout.tsx`)
- Favicon: LM monogram (set in `src/app/layout.tsx`)

## The self-aware voice

The site openly acknowledges it was built by AI. Key messaging throughout:
- "We built this site over a weekend. Zero ads. You found it on Google anyway."
- "Not a single paid ad. Not a single SEO hack."
- "Yes, we know: some blog images are off, the posts are long..." (acknowledgment bar)
- The `/the-experiment` page documents the full build
- This voice is intentional — lean into it, don't soften it

## What Mullins Media Co. actually does (for copy/content)

- SEO (local and national)
- Google Ads / PPC
- Social media management (Facebook, Instagram, TikTok, YouTube)
- TV advertising (WSET Lynchburg)
- Radio advertising (WLNI)
- Billboard / outdoor advertising
- Website design (WordPress, Shopify, custom)
- Content marketing / blogging
- Brand identity / graphic design
- Photography and videography (in-house)
- Drone photography (Ollie)
- Email marketing
- Reputation management

## Key differentiators (use in copy)

- Not cookie-cutter — every strategy is custom
- Learn your business before recommending anything
- Honest — will tell you if SEO isn't the right answer
- Measure success by profitability, not vanity metrics
- Long-term relationships (most clients stay for years)
- In-house content production (photo, video, drone) — no outside vendors
- Media partners with WSET, WLNI, Central Virginia Home Magazine
- AI tools + 15 years of real experience
- Limited client roster — intentionally small to stay focused

## Git workflow

```bash
git checkout main && git pull
git checkout -b feature/your-description
# make changes
yarn tsc --noEmit  # must pass
git add <specific files>
git commit -m "Short imperative message"
git push -u origin feature/your-description
gh pr create --title "..." --body "..."
# merge via GitHub UI after checking Vercel preview
```
