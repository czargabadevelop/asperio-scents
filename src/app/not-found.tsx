import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return <div className="not-found"><span className="eyebrow">404 / A little detour</span><h1>Let’s get you<br /><i>back on the road.</i></h1><p className="mb-7 text-muted">The page you’re looking for isn’t here.</p><Link href="/collection" className="button button-dark">Explore the collection<ArrowRight size={17} aria-hidden="true" /></Link></div>;
}
