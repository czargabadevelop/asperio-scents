"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export type ScentMood = {
  name: string;
  description: string;
  image: string;
  scents: { name: string; slug: string }[];
};

export function ScentFinder({ moods }: { moods: ScentMood[] }) {
  const [selected, setSelected] = useState(0);
  const current = moods[selected];

  return <section className="scent-finder page-width section-space" aria-labelledby="finder-heading">
    <div className="section-heading">
      <div><span className="eyebrow">Start with a feeling</span><h2 id="finder-heading">Find <i>your scent.</i></h2></div>
      <p className="section-aside">A fresh start or a softer mood.<br />Choose the feeling. Find your fragrance.</p>
    </div>
    <div className="scent-moods" role="group" aria-label="Choose a scent mood">
      {moods.map((mood, index) => <button key={mood.name} type="button" className="scent-mood" aria-pressed={selected === index} aria-controls="scent-suggestions" onClick={() => setSelected(index)}>
        <span className="scent-mood-image"><Image src={mood.image} alt="" fill sizes="(max-width: 600px) 50vw, 25vw" className="object-cover" /></span>
        <span className="scent-mood-label"><span><span className="scent-mood-name">{mood.name}</span><span className="scent-mood-description">{mood.description}</span></span><span className="scent-mood-indicator">{selected === index ? <Check size={16} aria-hidden="true" /> : <ArrowRight size={16} aria-hidden="true" />}</span></span>
      </button>)}
    </div>
    <div id="scent-suggestions" className="scent-suggestions" aria-live="polite" aria-atomic="true">
      <span className="scent-suggestions-label">Your {current.name.toLowerCase()} edit</span>
      <ul>{current.scents.map(scent => <li key={scent.slug}><Link href={`/collection/${scent.slug}`} className="text-link">{scent.name}<ArrowRight size={14} aria-hidden="true" /></Link></li>)}</ul>
    </div>
  </section>;
}
