import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wind, Gem, Car, Heart } from "lucide-react";
import { ShopLink } from "@/components/shop-link";
import { ProductCard } from "@/components/product-card";
import { PriceNote } from "@/components/price-note";
import { featuredProducts, scentProducts } from "@/data/catalog";
import { Reveal } from "@/components/reveal";
import { Faq } from "@/components/faq";
import { ScentFinder } from "@/components/scent-finder";
import { AtmosphereBanner, EverydayRitual, LifeWithAsperio } from "@/components/home-editorial";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const moods = [
  { name: "Fresh", description: "Cool, bright & uplifting", image: "/images/open-road.webp", slugs: ["marine-squash", "lemon", "cucumber-melon"] },
  { name: "Clean", description: "Green, airy & effortless", image: "/images/diffuser.webp", slugs: ["fresh-bamboo", "green-tea-bamboo"] },
  { name: "Soft", description: "Gentle, calm & considered", image: "/images/editorial/shangri-la.webp", slugs: ["shangri-la", "green-tea-lavender"] },
  { name: "Warm", description: "Rich, smooth & comforting", image: "/images/sunset-drive.webp", slugs: ["coffee-bean", "white-tea-ginger"] },
].map(({ slugs, ...mood }) => ({ ...mood, scents: slugs.map(slug => {
  const product = scentProducts.find(product => product.slug === slug)!;
  return { name: product.name, slug: product.slug };
}) }));

export default function Home() {
  return <>
    <section className="hero page-width" aria-labelledby="hero-heading">
      <div className="hero-copy"><span className="eyebrow"><span className="short-rule" />Premium car fragrances</span><h1 id="hero-heading">A better drive,<br /><i>every day.</i></h1><p>Turn the everyday journey into a moment of your own. Considered car fragrances. A little luxury for the road ahead.</p><div className="hero-actions"><Link href="/collection" className="button button-dark">Explore the collection<ArrowRight size={17} aria-hidden="true" /></Link><ShopLink variant="outline" /></div><div className="hero-footnote"><span>PREMIUM FEEL.</span><span>EVERYDAY FRESHNESS.</span></div></div>
      <div className="hero-image"><Image src="/images/open-road.webp" alt="Asperio’s signature glass car diffuser on a sunlit, tree-lined journey" fill sizes="(max-width: 767px) 100vw, 56vw" preload className="object-cover" /><span className="hero-image-label">THE ART OF A BETTER DRIVE</span><div className="hero-image-caption"><span>Scents with your<br /><i>own journey.</i></span><span className="caption-index">AS / 01</span></div></div>
    </section>

    <div className="benefits page-width">{[
      { icon: Wind, title: "A lasting impression", text: "Fragrance for the everyday" },
      { icon: Gem, title: "Premium-inspired scents", text: "A little accessible luxury" },
      { icon: Car, title: "Made for your journey", text: "Your car. Your atmosphere." },
      { icon: Heart, title: "A thoughtful little detail", text: "For yourself or someone else" },
    ].map(({ icon: Icon, title, text }) => <div className="benefit" key={title}><Icon size={24} strokeWidth={1.25} aria-hidden="true" /><div><p>{title}</p><span>{text}</span></div></div>)}</div>

    <ScentFinder moods={moods} />
    <section className="signature-section section-space page-width" aria-labelledby="collection-heading"><Reveal><div className="section-heading"><div><span className="eyebrow">The fragrance collection</span><h2 id="collection-heading">Signature <i>scents.</i></h2></div><Link href="/collection" className="text-link">Explore all 10 scents<ArrowRight size={16} aria-hidden="true" /></Link></div><div className="catalog-grid">{featuredProducts.map(product => <ProductCard key={product.slug} product={product} />)}</div><PriceNote /></Reveal></section>
    <AtmosphereBanner />
    <EverydayRitual />
    <LifeWithAsperio />
    <Faq />
    <section className="closing-section page-width"><div><span className="eyebrow">Your next journey starts here</span><h2>Find your everyday <i>fragrance.</i></h2></div><ShopLink /></section>
  </>;
}
