import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/catalog";

export function Footer() {
  return <footer className="site-footer"><div className="page-width">
    <div className="footer-main">
      <div><Link href="/" aria-label="Asperio Scents home"><Image src="/images/logo.webp" width={174} height={58} alt="Asperio Scents" /></Link><p className="mt-5 max-w-60 text-sm leading-relaxed text-white/65">Premium feel. Everyday freshness.<br />A little luxury for the road ahead.</p></div>
      <div><p className="footer-label">Explore</p><nav aria-label="Footer navigation" className="footer-links"><Link href="/collection">The collection</Link><Link href="/our-story">Our story</Link><Link href="/#questions">Common questions</Link></nav></div>
      <div><p className="footer-label">Let’s talk</p><div className="footer-links"><Link href="/contact">Contact Asperio</Link><a href={site.shopee} target="_blank" rel="noopener noreferrer">Visit our Shopee store <ArrowUpRight size={14} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a></div></div>
      <div className="footer-signoff"><span className="eyebrow text-white/60">Enjoy the journey</span><p className="font-display text-4xl leading-tight">Good scents.<br /><i>Better drives.</i></p></div>
    </div>
    <div className="footer-bottom"><p>© {new Date().getFullYear()} Asperio Scents. All rights reserved.</p><p>Thoughtfully chosen. Made for the everyday.</p></div>
  </div></footer>;
}
