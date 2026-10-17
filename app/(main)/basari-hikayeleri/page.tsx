import type { Metadata } from "next";
import SuccessStoriesClient from "./SuccessStoriesClient";

export const metadata: Metadata = {
  title: "Başarı Hikayeleri",
  description: "Danışanlarımın SEO hizmetlerim ile elde ettiği başarılar ve gerçek sonuçlar.",
  alternates: {
    canonical: "/basari-hikayeleri",
  },
  openGraph: {
    title: "Başarı Hikayeleri | Ekim Demirci",
    description: "Danışanlarımın SEO hizmetlerim ile elde ettiği başarılar ve gerçek sonuçlar.",
  },
  twitter: {
    title: "Başarı Hikayeleri | Ekim Demirci",
    description: "Danışanlarımın SEO hizmetlerim ile elde ettiği başarılar ve gerçek sonuçlar.",
  },
};

export default function SuccessStoriesPage() {
  return <SuccessStoriesClient />;
}
