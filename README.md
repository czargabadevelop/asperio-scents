# Asperio Scents

A premium, mobile-first car-fragrance catalog built with Next.js 16 App Router, TypeScript, Tailwind CSS 4, Lucide, Motion, next/font, and a shadcn-style Radix Sheet. No database, CMS, authentication, cart, checkout, or application API.

## Run locally

Requires Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Open http://localhost:3002. Both development and production preview use port 3002.

## Validate

```sh
npm run lint
npm run typecheck
npm run build
```

## Deploy to Vercel

Import this repository into Vercel, use the automatically detected Next.js preset, and deploy. No environment variables or external services are needed. Build command: `npm run build`. Use the default Next.js output settings. The production domain used in canonical URLs is `https://asperioscents.com`; update `src/data/catalog.ts` if the final domain changes.

All content routes are prerendered at build time. The standard Vercel image optimizer serves responsive WebP/AVIF through `next/image`; there is no custom backend. This deliberately uses Next's normal static prerendering rather than `output: 'export'`, so optimized images work on Vercel without an external image service.

## Content

- `src/data/catalog.ts`: verified catalog data, FAQs, brand URL, and purchase links.
- `src/app`: home, collection, static product details, story, contact, metadata, sitemap, robots, and not-found pages.
- `src/components`: shared navigation, product feature, Shopee link, FAQ, footer, and subtle motion.
- `public/images`: optimized local copies of Asperio's original photography and logo.
- `docs/content-audit.md`: original content findings and provenance.

To add a confirmed product, add its data and local images to the catalog array. The collection listing, static detail routes, and sitemap are generated from that data.

Google fonts are fetched at build time by `next/font` and self-hosted; visitors do not contact Google Fonts. The app includes no analytics, tracking, cookies, forms, or embedded third-party media.

## Verified catalog

The signed-in Shopee store was verified on 18 September 2026: 10 individual 8 ml fragrances and one Buy 2 Get 1 bundle. Nine scents were listed at ₱129, Fruit Paradise at ₱139, and the bundle at ₱359. Each product has its own verified artwork, summarized scent description, static detail route, and direct Shopee link. The original `/collection/car-diffuser` overview remains available.

Prices are dated snapshots, not live inventory. Update `catalogCheckedAt`, the product data, and source notes when rechecking listings. Stock counts, ratings, longevity guarantees, and unverified fragrance ingredients are not published. The bundle listing contains contradictory promotional wording; the site preserves its Buy 2 Get 1 title and listed price, but directs shoppers to confirm current choices and terms on Shopee.
