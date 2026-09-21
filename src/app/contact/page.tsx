import type { Metadata } from "next";
import Image from "next/image";
import { ShopLink } from "@/components/shop-link";

export const metadata: Metadata = { title: "Contact Asperio", description: "Questions about an Asperio fragrance or your order? Reach our team through the Asperio Scents Shopee store.", alternates: { canonical: "/contact" } };
export default function Contact() {
  return <div className="page-width"><header className="page-intro"><span className="eyebrow">Get in touch</span><h1>A little help,<br /><i>along the way.</i></h1></header><div className="contact-layout"><div><h2>Let’s find your scent.</h2><p>Choosing your first fragrance? Have a question about an order? Send us a message using the chat in our Shopee store.</p><ShopLink>Visit Asperio on Shopee</ShopLink><p className="text-sm!">You can also find current prices, available fragrances, shipping options, and order updates there.</p></div><div className="contact-image"><Image src="/images/diffuser-box.webp" alt="Asperio diffuser with its branded presentation box" fill sizes="(max-width: 767px) 100vw, 45vw" className="object-contain p-6" /></div></div></div>;
}
