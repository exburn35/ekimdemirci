import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular | Ekim Demirci",
  description: "SEO hizmetleri hakkında merak ettiğiniz soruların cevaplarını burada bulabilirsiniz.",
  alternates: {
    canonical: "/sikca-sorulan-sorular",
  },
  openGraph: {
    title: "Sıkça Sorulan Sorular | Ekim Demirci",
    description: "SEO hizmetleri hakkında merak ettiğiniz soruların cevaplarını burada bulabilirsiniz.",
  },
};

export default function SikcaSorulanSorularLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
