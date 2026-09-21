import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/data/catalog";
import "./globals.css";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-editorial", display: "swap" });
const sans = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Asperio Scents — A better drive, every day", template: "%s | Asperio Scents" },
  description: site.description,
  openGraph: { type: "website", locale: "en_PH", siteName: site.name, title: "Asperio Scents — A better drive, every day", description: site.description, images: [{ url: "/images/open-road.webp", width: 1371, height: 1147, alt: "Asperio car fragrance on a sunlit road" }] },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#f8f7f3" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${display.variable} ${sans.variable}`}><body>
    <a href="#main" className="skip-link">Skip to content</a>
    <Header /><main id="main" tabIndex={-1}>{children}</main><Footer />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: site.name, url: site.url, logo: `${site.url}/images/logo.webp`, sameAs: ["https://shopee.ph/shop/1929157916"] }).replace(/</g, "\\u003c") }} />
  </body></html>;
}
