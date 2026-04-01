import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Danışmanlık Fiyatları | Ekim Demirci",
  description: "Bütçenize uygun SEO çözümleri ile dijital varlığınızı güçlendirin. Şeffaf fiyatlandırma ve esnek paketler.",
  alternates: {
    canonical: "/seo-danismanlik-fiyatlari",
  },
  openGraph: {
    title: "SEO Danışmanlık Fiyatları | Ekim Demirci",
    description: "Bütçenize uygun SEO çözümleri ile dijital varlığınızı güçlendirin.",
  },
};

export default function SEODanismanlikFiyatlariLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
