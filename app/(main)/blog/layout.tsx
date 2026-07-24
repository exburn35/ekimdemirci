import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO ve Dijital Pazarlama Blogu | Ekim Demirci",
  description: "SEO, dijital pazarlama ve web geliştirme hakkında güncel makaleler, ipuçları ve rehberler.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "SEO ve Dijital Pazarlama Blogu | Ekim Demirci",
    description: "SEO, dijital pazarlama ve web geliştirme hakkında güncel makaleler, ipuçları ve rehberler.",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
