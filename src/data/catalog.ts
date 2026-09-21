export const site = {
  name: "Asperio Scents",
  url: "https://asperioscents.com",
  shopee: "https://ph.shp.ee/4ZUsjXs5",
  description: "Premium-inspired car fragrances for a better everyday drive. Discover Asperio Scents and find your next car fragrance on Shopee.",
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  images: { src: string; alt: string }[];
  purchaseUrl: string;
  details: { label: string; value: string }[];
  price?: number;
  size?: string;
  profile?: string;
  kind?: "scent" | "bundle";
};

// Keep the original diffuser overview available at its existing URL.
export const diffuser: Product = {
  slug: "car-diffuser",
  name: "The Asperio Car Diffuser",
  category: "Signature car fragrance",
  description: "A little detail that changes the whole drive. Discover premium-inspired fragrances in Asperio’s signature glass bottle, finished with a wooden cap and hanging cord.",
  images: [
    { src: "/images/diffuser.webp", alt: "Asperio glass car diffuser with a ribbed wooden cap and braided hanging cord" },
    { src: "/images/diffuser-box.webp", alt: "Asperio car fragrance bottle beside its black branded presentation box" },
    { src: "/images/open-road.webp", alt: "Asperio car diffuser photographed against a sunlit, tree-lined road" },
  ],
  purchaseUrl: site.shopee,
  details: [
    { label: "Designed for", value: "Your everyday drive" },
    { label: "The details", value: "Glass bottle · wooden cap · hanging cord" },
    { label: "Find your fragrance", value: "Ten individual scents · 8 ml each" },
  ],
};

export const catalogCheckedAt = "18 September 2026";
export const formatPrice = (price: number) => new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP", maximumFractionDigits: 0 }).format(price);

// Verified directly against the signed-in Shopee listings on 18 September 2026.
// Prices are snapshots, not live inventory. Scent profiles summarize listing
// descriptions; they are not ingredient declarations or invented note pyramids.
type ScentSource = { slug: string; name: string; price: number; profile: string; description: string; purchaseUrl: string };
const scents: ScentSource[] = [
  {
    slug: "marine-squash", name: "Marine Squash", price: 129,
    profile: "Cool · Aquatic · Crisp",
    description: "Cool aquatic freshness with a bright, crisp character. A clean, airy fragrance for everyday commutes and long drives.",
    purchaseUrl: "https://shopee.ph/Marine-Squash-Hanging-Car-Diffuser-Car-Air-Freshener-with-Long-Lasting-Fragrance-by-Asperio-Scents-i.1929157916.55967578179",
  },
  {
    slug: "shangri-la", name: "Shangri-La", price: 129,
    profile: "Fresh · Soft · Elegant",
    description: "A smooth, refined fragrance inspired by a peaceful luxury retreat. Fresh, soft notes bring a calm, welcoming atmosphere to your car.",
    purchaseUrl: "https://shopee.ph/Shangri-La-Hanging-Car-Diffuser-Car-Air-Freshener-with-Long-Lasting-Fragrance-by-Asperio-Scents-i.1929157916.40084317638",
  },
  {
    slug: "fruit-paradise", name: "Fruit Paradise", price: 139,
    profile: "Fresh · Fruity · Juicy",
    description: "Asperio’s own experimental blend, with fresh, fruity, juicy-inspired notes. A bright, distinctive fragrance that brings a lively character to the everyday drive.",
    purchaseUrl: "https://shopee.ph/Fruit-Paradise-Hanging-Car-Diffuser-Car-Air-Freshener-Long-Lasting-Fragrance-by-Asperio-Scents-i.1929157916.54817574417",
  },
  {
    slug: "cucumber-melon", name: "Cucumber Melon", price: 129,
    profile: "Crisp cucumber · Juicy melon",
    description: "Crisp cucumber meets juicy melon in a clean, fruity fragrance. Light and airy, with a cool, refreshing character for daily drives and weekend journeys.",
    purchaseUrl: "https://shopee.ph/Cucumber-Melon-Hanging-Car-Diffuser-Car-Air-Freshener-w-Long-Lasting-Fragrance-by-Asperio-Scents-i.1929157916.57917574264",
  },
  {
    slug: "white-tea-ginger", name: "White Tea Ginger", price: 129,
    profile: "Delicate white tea · Warm ginger",
    description: "Delicate white tea freshness balanced with the subtle warmth of ginger. Smooth, airy, and quietly elegant, for a clean and relaxing atmosphere.",
    purchaseUrl: "https://shopee.ph/White-Tea-Ginger-Hanging-Car-Diffuser-Car-Air-Freshener-Long-Lasting-Fragrance-by-Asperio-Scents-i.1929157916.56867578330",
  },
  {
    slug: "green-tea-bamboo", name: "Green Tea Bamboo", price: 129,
    profile: "Delicate green tea · Crisp bamboo",
    description: "The fresh harmony of delicate green tea and crisp bamboo. A light, balanced fragrance with a naturally clean character for a peaceful everyday journey.",
    purchaseUrl: "https://shopee.ph/Green-Tea-Bamboo-Hanging-Car-Diffuser-Car-Air-Freshener-Long-Lasting-Fragrance-by-Asperio-Scents-i.1929157916.56467574418",
  },
  {
    slug: "green-tea-lavender", name: "Green Tea Lavender", price: 129,
    profile: "Fresh green tea · Soft lavender",
    description: "Fresh green tea and soft lavender in a clean, gently floral fragrance. An airy, smoothly balanced scent for a comfortable and serene drive.",
    purchaseUrl: "https://shopee.ph/Green-Tea-Lavender-Hanging-Car-Diffuser-Car-Air-Freshener-Long-Lasting-Fragrance-by-Asperio-Scents-i.1929157916.50667574779",
  },
  {
    slug: "lemon", name: "Lemon", price: 129,
    profile: "Bright citrus · Crisp · Zesty",
    description: "A bright lemon fragrance with a clean, zesty character. Crisp and refreshing without feeling heavy, for an uplifting touch on the road.",
    purchaseUrl: "https://shopee.ph/Lemon-Hanging-Car-Diffuser-Car-Air-Freshener-Long-Lasting-Fragrance-by-Asperio-Scents-i.1929157916.48417600133",
  },
  {
    slug: "fresh-bamboo", name: "Fresh Bamboo", price: 129,
    profile: "Green · Clean · Airy",
    description: "A light, crisp fragrance inspired by fresh bamboo. Its green, airy character brings a touch of nature to your car and a refreshing atmosphere to each drive.",
    purchaseUrl: "https://shopee.ph/Fresh-Bamboo-Hanging-Car-Diffuser-Car-Air-Freshener-with-Long-Lasting-Fragrance-by-Asperio-Scents-i.1929157916.51467569604",
  },
  {
    slug: "coffee-bean", name: "Coffee Bean", price: 129,
    profile: "Rich coffee · Warm · Smooth",
    description: "The rich, inviting character of freshly brewed coffee. A warm, smooth fragrance for coffee lovers and anyone who enjoys a cozy atmosphere on the road.",
    purchaseUrl: "https://shopee.ph/Coffee-Bean-Car-Hanging-Diffuser-Car-Air-Freshener-with-Long-Lasting-Fragrance-by-Asperio-Scents-i.1929157916.53117574305",
  },
];

export const scentProducts: Product[] = scents.map(scent => ({
  ...scent,
  kind: "scent",
  category: "Hanging car diffuser",
  size: "8 ml",
  images: [{ src: `/images/products/${scent.slug}.webp`, alt: `Asperio ${scent.name} car diffuser — original product artwork from the Shopee listing` }],
  details: [
    { label: "Scent profile", value: scent.profile },
    { label: "Size", value: "8 ml" },
    { label: "Format", value: "Hanging car diffuser" },
  ],
}));

export const bundle: Product = {
  slug: "buy-2-get-1", name: "Buy 2 Get 1", kind: "bundle", category: "Selected-scent bundle", price: 359,
  description: "Three Asperio car diffusers in one selected-scent offer. Explore the available fragrance choices and confirm the current promotion details on Shopee.",
  purchaseUrl: "https://shopee.ph/BUY-2-GET-1-Hanging-Car-Diffuser-Car-Air-Fresheners-with-Long-Lasting-Fragrance-by-Asperio-Scents-i.1929157916.45167606070",
  images: [{ src: "/images/products/buy-2-get-1.webp", alt: "Asperio Buy 2 Get 1 promotional artwork showing three car diffusers" }],
  details: [
    { label: "The offer", value: "Buy 2 Get 1 on selected scents" },
    { label: "Selected scents", value: "Fresh Bamboo, Green Tea Bamboo, Lemon, Marine Squash, Coffee Bean, Cucumber Melon, Shangri-La, White Tea Ginger, Green Tea Lavender" },
    { label: "Before ordering", value: "Confirm fragrance choices and current promotion terms on Shopee" },
  ],
};

export const products: Product[] = [...scentProducts, bundle];
export const catalogEntries: Product[] = [diffuser, ...products];
export const featuredProducts = scentProducts.slice(0, 3);

export const faqs = [
  { question: "Where can I buy Asperio Scents?", answer: "Shop through our Shopee store. Every purchase link on this website takes you there, where you can select your fragrance, check availability, and place your order." },
  { question: "Which fragrances are available?", answer: "Explore Marine Squash, Shangri-La, Fruit Paradise, Cucumber Melon, White Tea Ginger, Green Tea Bamboo, Green Tea Lavender, Lemon, Fresh Bamboo, and Coffee Bean. Each individual diffuser is listed as 8 ml. Check Shopee for current availability and prices." },
  { question: "How do I use my car diffuser?", answer: "Follow the instructions supplied with your chosen product. Secure the diffuser upright, keep it clear of your view and vehicle controls, and avoid contact between fragrance oil and interior surfaces." },
  { question: "Where can I check delivery or ask about my order?", answer: "Delivery estimates, shipping options, and order support are available on Shopee. Contact Asperio through the store’s chat for help with choosing a scent or an existing order." },
];
