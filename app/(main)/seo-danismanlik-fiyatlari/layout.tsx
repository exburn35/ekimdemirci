import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO ve GEO Danışmanlık Fiyatları 2026 | Ekim Demirci",
  description: "En uygun SEO danışmanlık fiyatları ile dijital varlığınızı güçlendirin. 2026 yılı güncel ve şeffaf SEO paketleri ile organik büyüme elde edin.",
  alternates: {
    canonical: "/seo-danismanlik-fiyatlari",
  },
  openGraph: {
    title: "SEO ve GEO Danışmanlık Fiyatları 2026 | Ekim Demirci",
    description: "En uygun SEO danışmanlık fiyatları ile dijital varlığınızı güçlendirin.",
  },
};

export default function SEODanismanlikFiyatlariLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
