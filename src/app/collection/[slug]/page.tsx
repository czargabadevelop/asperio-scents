import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import { catalogEntries, site, formatPrice } from "@/data/catalog";
import { ShopLink } from "@/components/shop-link";
import { Faq } from "@/components/faq";
import { PriceNote } from "@/components/price-note";

export const dynamicParams = false;
export function generateStaticParams() { return catalogEntries.map(product => ({ slug: product.slug })); }
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = catalogEntries.find(item => item.slug === slug);
  if (!product) return {};
  return { title: product.name, description: product.description, alternates: { canonical: `/collection/${product.slug}` }, openGraph: { title: product.name, description: product.description, url: `/collection/${product.slug}`, images: [{ url: product.images[0].src, alt: product.images[0].alt }] } };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = catalogEntries.find(item => item.slug === slug);
  if (!product) notFound();
  return <><div className="page-width">
    <nav aria-label="Breadcrumb" className="breadcrumb"><Link href="/">Home</Link><ChevronRight size={12} aria-hidden="true" /><Link href="/collection">The collection</Link><ChevronRight size={12} aria-hidden="true" /><span aria-current="page">{product.name}</span></nav>
    <div className="product-detail"><div><div className={`product-gallery-main ${product.kind ? "product-artwork" : ""}`}><Image src={product.images[0].src} alt={product.images[0].alt} fill preload sizes="(max-width: 900px) 100vw, 50vw" className={product.kind ? "object-contain" : "object-contain p-8"} /></div>{product.images.length > 1 && <div className="product-gallery-small">{product.images.slice(1).map(photo => <div key={photo.src}><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 900px) 45vw, 25vw" className="object-cover" /></div>)}</div>}</div>
      <div className="product-copy"><span className="eyebrow">{product.category}</span><h1>{product.name}</h1>{product.price !== undefined && <p className="detail-price">{formatPrice(product.price)}{product.size && <span> / {product.size}</span>}</p>}<p>{product.description}</p><dl>{product.details.map(detail => <div key={detail.label}><dt>{detail.label}</dt><dd>{detail.value}</dd></div>)}</dl><ShopLink href={product.purchaseUrl}>{product.kind === "bundle" ? "View offer on Shopee" : product.kind === "scent" ? "Shop this scent on Shopee" : "Choose your scent on Shopee"}</ShopLink>{product.price !== undefined ? <PriceNote /> : <p className="purchase-note">Current fragrances, prices, availability, and delivery options are shown on Shopee.</p>}<div className="mt-10 border-t border-line pt-6"><span className="eyebrow">More than a scent. A better drive.</span><p>{product.kind === "bundle" ? "This offer covers selected fragrances. Review the listing’s current choices and terms before ordering." : "A small addition to your car, made to bring a little more pleasure to the everyday journey."}</p><Link href="/collection" className="text-link">Explore the full collection<ChevronRight size={16} aria-hidden="true" /></Link></div></div>
    </div>
  </div><div className="border-t border-line"><Faq /></div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Product", name: product.name, description: product.description, image: product.images.map(photo => `${site.url}${photo.src}`), brand: { "@type": "Brand", name: site.name }, url: `${site.url}/collection/${product.slug}`, ...(product.size ? { size: product.size } : {}), ...(product.price !== undefined ? { offers: { "@type": "Offer", url: product.purchaseUrl, priceCurrency: "PHP", price: product.price, seller: { "@type": "Organization", name: site.name } } } : {}) }).replace(/</g, "\\u003c") }} />
  </>;
}
