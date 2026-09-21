import type { MetadataRoute } from "next";
import { catalogEntries, site } from "@/data/catalog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/collection", "/our-story", "/contact", ...catalogEntries.map(product => `/collection/${product.slug}`)].map(path => ({ url: `${site.url}${path}`, changeFrequency: "monthly", priority: path === "" ? 1 : 0.7 }));
}
