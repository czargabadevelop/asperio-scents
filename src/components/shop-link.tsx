import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/catalog";
import { cn } from "@/lib/utils";

export function ShopLink({ children = "Shop on Shopee", className, href = site.shopee, variant = "dark" }: {
  children?: React.ReactNode; className?: string; href?: string; variant?: "dark" | "light" | "outline";
}) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={cn("button", `button-${variant}`, className)}>
    {children}<ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span>
  </a>;
}
