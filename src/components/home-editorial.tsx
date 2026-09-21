import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wind, PackageOpen, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";

const steps = [
  { icon: Wind, title: "Choose your scent", text: "Fresh, clean, soft or warm. Find a fragrance that feels like your kind of journey." },
  { icon: PackageOpen, title: "Make it yours", text: "Shop your favourite on Shopee. A glass bottle, wooden cap and braided cord await." },
  { icon: Sparkles, title: "Enjoy the everyday", text: "Set up using the product instructions, then make a little more of the road ahead." },
];

export function AtmosphereBanner() {
  return <section className="atmosphere-banner" aria-labelledby="atmosphere-heading">
    <Image src="/images/editorial/atmosphere.webp" alt="Asperio diffuser hanging inside a car overlooking a quiet, tree-lined road" fill sizes="100vw" className="object-cover" />
    <div className="page-width atmosphere-content"><Reveal>
      <span className="eyebrow">A space that feels like you</span>
      <h2 id="atmosphere-heading">Your car.<br /><i>Your atmosphere.</i></h2>
      <p>A familiar route. A different feeling. Bring a little calm and character to the place between where you are and where you’re going.</p>
      <Link href="/our-story" className="button button-light">The Asperio story<ArrowRight size={16} aria-hidden="true" /></Link>
    </Reveal></div>
  </section>;
}

export function EverydayRitual() {
  return <section className="ritual-section page-width section-space" aria-labelledby="ritual-heading"><Reveal>
    <div className="section-heading"><div><span className="eyebrow">A little ritual</span><h2 id="ritual-heading">Simple <i>by design.</i></h2></div><p className="section-aside">A considered detail.<br />An everyday pleasure.</p></div>
    <ol className="ritual-steps">{steps.map(({ icon: Icon, title, text }, index) => <li key={title}>
      <div className="ritual-step-mark"><span>0{index + 1}</span><Icon size={25} strokeWidth={1.25} aria-hidden="true" /></div>
      <div><h3>{title}</h3><p>{text}</p></div>
    </li>)}</ol>
  </Reveal></section>;
}

const moments = [
  { src: "/images/open-road.webp", alt: "A tree-lined drive with Asperio", caption: "A fresh perspective" },
  { src: "/images/editorial/marine-squash.webp", alt: "Asperio glass diffuser in a quiet stone still life", caption: "The little details" },
  { src: "/images/car-interior.webp", alt: "Asperio fragrance in a dark car interior", caption: "A space of your own" },
  { src: "/images/sunset-drive.webp", alt: "An Asperio diffuser in warm evening light", caption: "The long way home" },
];

export function LifeWithAsperio() {
  return <section className="life-section section-space" aria-labelledby="life-heading"><div className="page-width"><Reveal>
    <div className="section-heading"><div><span className="eyebrow">Life with Asperio</span><h2 id="life-heading">The everyday, <i>considered.</i></h2></div><span className="life-wordmark" aria-hidden="true">ASPERIO / ON THE ROAD</span></div>
    <div className="life-gallery">{moments.map((moment, index) => <figure key={moment.src}><div className="life-image"><Image src={moment.src} alt={moment.alt} fill sizes="(max-width: 600px) 50vw, 25vw" className="object-cover" /></div><figcaption><span>0{index + 1}</span>{moment.caption}</figcaption></figure>)}</div>
  </Reveal></div></section>;
}
