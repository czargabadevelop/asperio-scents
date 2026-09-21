import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { diffuser, type Product } from "@/data/catalog";
import { ShopLink } from "@/components/shop-link";

export function ProductFeature({ product = diffuser }: { product?: Product }) {
  return <div className="product-feature">
    <Link href={`/collection/${product.slug}`} className="product-picture group" aria-label={`Discover ${product.name}`}>
      <span className="image-overline">The signature diffuser</span>
      <Image src={product.images[0].src} alt={product.images[0].alt} fill sizes="(max-width: 767px) 100vw, 50vw" className="object-contain p-7 transition-transform duration-700 group-hover:scale-[1.035]" />
      <span className="picture-caption">A small detail. A different atmosphere.<ArrowUpRightSmall /></span>
    </Link>
    <div className="product-copy"><span className="eyebrow">ASPERIO ESSENTIALS / 01</span><h3>{product.name}</h3><p>{product.description}</p>
      <dl>{product.details.map(detail => <div key={detail.label}><dt>{detail.label}</dt><dd>{detail.value}</dd></div>)}</dl>
      <div className="flex flex-wrap items-center gap-x-7 gap-y-5"><ShopLink href={product.purchaseUrl}>Discover scents on Shopee</ShopLink><Link className="text-link" href={`/collection/${product.slug}`}>Take a closer look<ArrowRight size={16} aria-hidden="true" /></Link></div>
      <p className="purchase-note">Choose your scent. Check current prices and availability on Shopee.</p>
    </div>
  </div>;
}
function ArrowUpRightSmall() { return <ArrowRight size={17} className="-rotate-45" aria-hidden="true" />; }
