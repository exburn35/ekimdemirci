import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ekim Demirci | SEO Uzmanı | Yüksek Performanslı SEO Çözümleri",
    template: "%s | Ekim Demirci"
  },
  description: "İşletmelerin arama sıralamalarını yükseltmelerine ve organik büyüme sağlamalarına yardımcı olan uzman SEO Danışmanı. Veri odaklı SEO stratejileri ile kanıtlanmış sonuçlar.",
  keywords: ["SEO Uzmanı", "Arama Motoru Optimizasyonu", "SEO Danışmanı", "Organik Trafik", "SEO Hizmetleri"],
  authors: [{ name: "Ekim Demirci" }],
  creator: "Ekim Demirci",
  publisher: "Ekim Demirci",
  metadataBase: new URL("https://ekimdemirci.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://ekimdemirci.com",
    siteName: "Ekim Demirci - SEO Uzmanı",
    title: "Ekim Demirci | SEO Uzmanı | Yüksek Performanslı SEO Çözümleri",
    description: "İşletmelerin arama sıralamalarını yükseltmelerine ve organik büyüme sağlamalarına yardımcı olan uzman SEO Danışmanı.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ekim Demirci | SEO Uzmanı",
    description: "İşletmelerin arama sıralamalarını yükseltmelerine ve organik büyüme sağlamalarına yardımcı olan uzman SEO Danışmanı.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} font-sans antialiased text-gray-200 bg-[#0a0f25]`}>
        {children}
      </body>
    </html>
  );
}





