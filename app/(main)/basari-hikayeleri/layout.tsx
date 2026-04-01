import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Başarı Hikayeleri | Ekim Demirci",
  description: "Müşterilerimizin SEO hizmetlerimiz ile elde ettiği başarılar ve gerçek sonuçlar.",
  alternates: {
    canonical: "/basari-hikayeleri",
  },
  openGraph: {
    title: "Başarı Hikayeleri | Ekim Demirci",
    description: "Müşterilerimizin SEO hizmetlerimiz ile elde ettiği başarılar ve gerçek sonuçlar.",
  },
};

export default function BasariHikayeleriLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
