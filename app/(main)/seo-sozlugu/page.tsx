import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import SEOGlossaryPage from "./SeoSozluguClient";

export const metadata: Metadata = {
  title: "SEO Sözlüğü: A-Z Tüm Kapsamlı SEO ve GEO Terimleri | Ekim Demirci",
  description: "Arama motoru optimizasyonu, teknik SEO, GEO ve yapay zeka arama kavramlarını içeren A'dan Z'ye güncel SEO terimleri sözlüğü.",
  alternates: {
    canonical: "/seo-sozlugu",
  },
  openGraph: {
    title: "SEO Sözlüğü: A-Z Tüm Kapsamlı SEO ve GEO Terimleri | Ekim Demirci",
    description: "Arama motoru optimizasyonu, teknik SEO, GEO ve yapay zeka arama kavramlarını içeren A'dan Z'ye güncel SEO terimleri sözlüğü.",
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumb items={[{ name: "SEO Sözlüğü", href: "/seo-sozlugu" }]} />
      <SEOGlossaryPage />
    </>
  );
}
