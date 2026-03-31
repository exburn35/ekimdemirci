import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
    google: "nbkKHTktVZw9X16DcSH-UIakANWBTf-8REosqWDYP5g",
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-TK265G38"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        
        {/* Google Tag Manager Head */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TK265G38');
          `}
        </Script>
        
        {/* Google Analytics (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XB33DY9P30" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XB33DY9P30');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}





