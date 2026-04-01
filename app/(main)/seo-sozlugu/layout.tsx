import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Sözlüğü - Tüm Terimler ve Anlamları | Ekim Demirci",
  description: "Dijital pazarlama ve arama motoru optimizasyonu dünyasında sıkça karşılaştığınız terimlerin detaylı açıklamaları. Kapsamlı SEO Sözlüğü.",
  alternates: {
    canonical: "/seo-sozlugu",
  },
};

export default function SEOSozluguLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
