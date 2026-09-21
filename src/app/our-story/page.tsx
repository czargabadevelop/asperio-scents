import type { Metadata } from "next";
import Image from "next/image";
import { ShopLink } from "@/components/shop-link";

export const metadata: Metadata = { title: "Our story", description: "A better atmosphere starts here. Meet Asperio Scents: premium-inspired car fragrances made for your everyday journey.", alternates: { canonical: "/our-story" } };

export default function OurStory() {
  return <article className="page-width"><header className="page-intro"><span className="eyebrow">Our story</span><h1>A better atmosphere<br /><i>starts here.</i></h1><p>Premium feel. Affordable price. Everyday freshness.</p></header><div className="story-wide"><Image src="/images/open-road.webp" alt="The Asperio car diffuser on a peaceful road surrounded by sunlit trees" fill preload sizes="100vw" className="object-cover object-[center_42%]" /></div><div className="long-copy"><h2>More than the destination.<br /><i>Enjoy the drive.</i></h2><p>Asperio Scents brings premium-inspired car fragrances to those who appreciate a clean, inviting atmosphere. A small addition to your car, made to bring a little more pleasure to the everyday journey.</p><p>Our collection explores fresh and invigorating notes alongside smooth, relaxing, and sophisticated aromas. Whether you prefer something crisp and refreshing or warm and comforting, there’s an atmosphere to match your mood and your ride.</p><p>We believe a premium feeling should be part of everyday life. Discover your signature scent, make your space your own, and make every journey smell better with Asperio Scents.</p><ShopLink>Find your Asperio scent</ShopLink></div></article>;
}
