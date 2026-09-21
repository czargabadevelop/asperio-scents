import { catalogCheckedAt } from "@/data/catalog";

export function PriceNote() {
  return <p className="price-note">Shopee listing prices checked {catalogCheckedAt}. Current prices, promotions, and availability are confirmed on Shopee.</p>;
}
