import { Plus } from "lucide-react";
import { faqs } from "@/data/catalog";

export function Faq() {
  return <section id="questions" className="section-space page-width faq-section">
    <div><span className="eyebrow">A few things to know</span><h2>Before your<br /><i>next drive.</i></h2><p className="mt-5 max-w-72 text-muted">A little guidance to help you find your everyday fragrance.</p></div>
    <div className="faq-list">{faqs.map(item => <details key={item.question}><summary>{item.question}<Plus size={18} aria-hidden="true" /></summary><p>{item.answer}</p></details>)}</div>
  </section>;
}
