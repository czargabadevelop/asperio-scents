import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { PriceNote } from "@/components/price-note";
import { ShopLink } from "@/components/shop-link";
import { Faq } from "@/components/faq";
import { scentProducts, bundle, formatPrice } from "@/data/catalog";

export const metadata: Metadata = {
  title: "The collection",
  description: "Explore 10 Asperio car fragrance scents, from Marine Squash to Coffee Bean. 8 ml hanging diffusers from ₱129, with direct Shopee product links.",
  alternates: { canonical: "/collection" },
};

export default function Collection() {
  return <><div className="page-width"><header className="page-intro"><span className="eyebrow">The Asperio collection</span><h1>A little luxury.<br /><i>For every journey.</i></h1><p>Ten scents. One everyday ritual. From crisp citrus and fresh green tea to warm coffee, find a fragrance that feels like you.</p></header><section className="pb-16" aria-label="Car fragrance collection"><div className="catalog-caption"><span>{scentProducts.length} individual scents</span><span>8 ml hanging car diffusers</span></div><div className="catalog-grid">{scentProducts.map(product => <ProductCard key={product.slug} product={product} />)}</div><PriceNote /></section>
      <section className="bundle-feature" aria-labelledby="bundle-heading"><Link href={`/collection/${bundle.slug}`} className="bundle-image" aria-label="Explore the Buy 2 Get 1 bundle"><Image src={bundle.images[0].src} alt={bundle.images[0].alt} fill sizes="(max-width: 600px) 100vw, 35vw" className="object-contain" /></Link><div><span className="eyebrow">A little more for the road</span><h2 id="bundle-heading">Buy 2.<br /><i>Get 1.</i></h2><p className="bundle-price">{formatPrice(bundle.price!)}</p><p>{bundle.description}</p><div className="flex flex-wrap items-center gap-5"><ShopLink href={bundle.purchaseUrl}>View offer on Shopee</ShopLink><Link href={`/collection/${bundle.slug}`} className="text-link">See selected scents<ArrowRight size={16} aria-hidden="true" /></Link></div><PriceNote /></div></section>
    </div><div className="border-t border-line"><Faq /></div></>;
}
