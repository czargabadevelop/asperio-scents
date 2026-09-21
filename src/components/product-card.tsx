import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type Product, formatPrice } from "@/data/catalog";
import { ShopLink } from "@/components/shop-link";

export function ProductCard({ product, editorialImage }: { product: Product; editorialImage?: string }) {
  return <article className="catalog-item">
    <Link href={`/collection/${product.slug}`} className={`catalog-image${editorialImage ? " catalog-image-editorial" : ""}`} aria-label={`Explore ${product.name}`}>
      <Image src={editorialImage ?? product.images[0].src} alt={editorialImage ? `${product.name} Asperio diffuser in an editorial still life` : product.images[0].alt} fill sizes="(max-width: 479px) 100vw, (max-width: 900px) 50vw, 33vw" className={editorialImage ? "object-cover" : "object-contain"} />
    </Link>
    <div className="catalog-item-title"><h3><Link href={`/collection/${product.slug}`}>{product.name}</Link></h3>{product.price !== undefined && <span className="catalog-price">{formatPrice(product.price)}</span>}</div>
    <p className="catalog-profile">{product.profile}</p>
    <p className="catalog-size">{product.size} · Hanging car diffuser</p>
    <div className="catalog-actions"><Link href={`/collection/${product.slug}`} className="text-link">Explore scent<ArrowRight size={15} aria-hidden="true" /></Link><ShopLink href={product.purchaseUrl} variant="outline" className="catalog-shop">Shop on Shopee</ShopLink></div>
  </article>;
}
