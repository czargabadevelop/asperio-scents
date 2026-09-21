# Content and asset audit

Inspected 18 September 2026.

## Preserved

- Brand: Asperio Scents, original Asperio mark and wordmark.
- Positioning: premium-inspired car fragrances, an inviting everyday atmosphere, accessible luxury.
- Core copy: “A better atmosphere starts here”, “Premium feel. Affordable price. Everyday freshness”, and the idea of scents accompanying your own journey.
- Existing purchase URL: https://ph.shp.ee/4ZUsjXs5. During inspection it redirected to https://shopee.ph/shop/1929157916 (tracking parameters omitted).
- The Shopee store identifies itself as “Asperio Scent, Online Shop | Shopee Philippines” but shows “Login Required” in the available browser session. Product listings could not be inspected without authentication.
- Brand-owned website imagery: glass diffuser with a ribbed wood cap and hanging cord, boxed diffuser, and three car/lifestyle scenes.

## Source verification

- Homepage: https://asperioscents.com/
- Public products endpoint: https://asperioscents.com/index.php?rest_route=/wc/store/v1/products&per_page=100 returned `[]`.
- Public media endpoint: https://asperioscents.com/index.php?rest_route=/wp/v2/media&per_page=100.
- `/about/` returned homepage content, not a separate brand story.
- The supplied reference was inspected as a visual direction only. Its mockup fragrance names, prices, reviews, ingredient notes, and claims are not evidence of real Asperio products.

## Local asset provenance

All originals are under `https://asperioscents.com/wp-content/uploads/2026/09/`:

- `logo.webp`: `ChatGPT-Image-Sep-16-2026-08_54_27-PM.png` (media 23).
- `diffuser.webp`: `ChatGPT-Image-Sep-7-2026-12_00_44-PM.png` (media 84).
- `diffuser-box.webp`: `ChatGPT-Image-Sep-17-2026-12_44_06-AM-1.png` (media 87).
- `car-interior.webp`: `ChatGPT-Image-Sep-17-2026-01_12_48-AM.png` (media 110).
- `open-road.webp`: `ChatGPT-Image-Sep-17-2026-01_22_33-AM.png` (media 118).
- `sunset-drive.webp`: `ChatGPT-Image-Sep-17-2026-01_26_06-AM.png` (media 121).
- `brand-mark.webp`: `ChatGPT-Image-Sep-16-2026-08_49_20-PM.png` (media 21).

Original source filenames indicate some existing brand imagery was AI-generated. The rebuild reuses the brand's supplied visuals; it does not invent new product photographs. Files are resized and encoded to WebP for delivery.

## Removed

Unrelated “Wear / Live / Carry” template categories, Quarkora attribution and generic copy, unused account/cart/checkout flows, WordPress/WooCommerce payloads, placeholder pages, and unsupported dispatch/returns promises.

## Verified Shopee catalog — follow-up inspection

After the user signed in on 18 September 2026, https://shopee.ph/asperioscent#product_list exposed 11 listings. Each listing's Product Specifications and Product Description was read. All individual scents specify 8 ml.

- Marine Squash — ₱129 — item 55967578179 — cool aquatic freshness, bright and crisp.
- Shangri-La — ₱129 — item 40084317638 — fresh, soft, elegant; retreat-inspired.
- Fruit Paradise — ₱139 — item 54817574417 — Asperio's experimental fresh, fruity, juicy-inspired blend.
- Cucumber Melon — ₱129 — item 57917574264 — crisp cucumber and juicy melon.
- White Tea Ginger — ₱129 — item 56867578330 — delicate white tea, subtle ginger warmth.
- Green Tea Bamboo — ₱129 — item 56467574418 — delicate green tea and crisp bamboo.
- Green Tea Lavender — ₱129 — item 50667574779 — fresh green tea and soft lavender.
- Lemon — ₱129 — item 48417600133 — bright, crisp, zesty citrus.
- Fresh Bamboo — ₱129 — item 51467569604 — clean, green, light, and airy.
- Coffee Bean — ₱129 — item 53117574305 — rich, warm, smooth coffee-inspired character.
- Buy 2 Get 1 — ₱359 — item 45167606070 — selected scents; Fruit Paradise is not in the listed selection.

The seller/shop ID is 1929157916. Exact product links are preserved in `src/data/catalog.ts`, with optional Shopee selection/tracking query parameters removed. Each original product image was downloaded from the `down-ph.img.susercontent.com/file/` URL observed on that product page and optimized locally to `public/images/products/<slug>.webp`.

The bundle description contradicts its title by saying “THREE car diffusers for the price of ONE”. This wording is not copied. The site shows the Buy 2 Get 1 title, the observed ₱359 listing price, and asks shoppers to confirm available choices and promotion terms on Shopee.

Prices are explicitly dated snapshots. No stock counts, ratings, ingredient claims, exact scent durations, or automated price synchronization are published. Fragrance profiles are summaries of seller descriptions, not independently verified ingredient lists. No account identifiers, cart contents, cookies, or authentication details were retained in the website.
