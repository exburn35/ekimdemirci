import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sektörel SEO Hizmetleri | Ekim Demirci",
  description: "Her sektörün kendine özgü ihtiyaçları vardır. Sektörünüze özel SEO stratejileri ile dijital varlığınızı güçlendirin.",
  alternates: {
    canonical: "/sektorel-seo-hizmetleri",
  },
  openGraph: {
    title: "Sektörel SEO Hizmetleri | Ekim Demirci",
    description: "Sektörünüze özel SEO stratejileri ile dijital varlığınızı güçlendirin.",
  },
};

export default function SektorelSEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
