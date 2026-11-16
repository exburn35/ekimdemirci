import type { Metadata } from "next";
import SuccessStoriesClient from "./SuccessStoriesClient";

const description =
  "E-ticaret, eğitim, sağlık ve yeni açılan sitelerde yürüttüğüm SEO ve GEO projeleri: başlangıç noktası, attığım adımlar ve Search Console verisiyle tıklama ve gösterim artışları.";

export const metadata: Metadata = {
  title: "Başarı Hikayeleri: Gerçek SEO Vaka Çalışmaları",
  description,
  alternates: {
    canonical: "/basari-hikayeleri",
  },
  openGraph: {
    title: "Başarı Hikayeleri | Ekim Demirci",
    description,
  },
  twitter: {
    title: "Başarı Hikayeleri | Ekim Demirci",
    description,
  },
};

export default function SuccessStoriesPage() {
  return <SuccessStoriesClient />;
}
