"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { site } from "@/data/catalog";

const links = [{ href: "/", label: "Home" }, { href: "/collection", label: "The collection" }, { href: "/our-story", label: "Our story" }, { href: "/#questions", label: "FAQs" }];

export function Header() {
  const pathname = usePathname();
  return <>
    <div className="announcement">A better atmosphere, wherever you go.<span>Discover Asperio Scents</span></div>
    <header className="site-header">
      <div className="page-width flex h-[88px] items-center justify-between gap-6">
        <Link href="/" aria-label="Asperio Scents home" className="brand-link"><Image src="/images/logo.webp" width={174} height={58} alt="Asperio Scents" className="brand-logo" priority /></Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-9 lg:flex">
          {links.map(link => <Link key={link.href} href={link.href} className="nav-link" aria-current={pathname === link.href ? "page" : undefined}>{link.label}</Link>)}
        </nav>
        <a className="header-shop hidden sm:inline-flex" href={site.shopee} target="_blank" rel="noopener noreferrer">Shop on Shopee<ArrowUpRight size={15} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
        <div className="lg:hidden"><Sheet>
          <SheetTrigger asChild><button className="flex size-11 items-center justify-center" aria-label="Open navigation menu"><Menu size={24} aria-hidden="true" /></button></SheetTrigger>
          <SheetContent>
            <SheetTitle className="font-display text-3xl">Asperio Scents</SheetTitle>
            <SheetDescription className="mt-2 text-sm text-muted">Made for your everyday journey.</SheetDescription>
            <nav aria-label="Mobile navigation" className="mt-10 flex flex-col">{links.map(link => <SheetClose asChild key={link.href}><Link href={link.href} className="border-b border-line py-5 text-lg" aria-current={pathname === link.href ? "page" : undefined}>{link.label}</Link></SheetClose>)}</nav>
            <a className="button button-dark mt-auto" href={site.shopee} target="_blank" rel="noopener noreferrer">Shop on Shopee<ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
          </SheetContent>
        </Sheet></div>
      </div>
    </header>
  </>;
}
