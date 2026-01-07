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
    default: "Ekim Demirci | SEO Specialist | High-Performance SEO Solutions",
    template: "%s | Ekim Demirci"
  },
  description: "Expert SEO Specialist helping businesses achieve top search rankings and drive organic growth. Proven results with data-driven SEO strategies.",
  keywords: ["SEO Specialist", "Search Engine Optimization", "SEO Consultant", "Organic Traffic", "SEO Services"],
  authors: [{ name: "Ekim Demirci" }],
  creator: "Ekim Demirci",
  publisher: "Ekim Demirci",
  metadataBase: new URL("https://ekimdemirci.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ekimdemirci.com",
    siteName: "Ekim Demirci - SEO Specialist",
    title: "Ekim Demirci | SEO Specialist | High-Performance SEO Solutions",
    description: "Expert SEO Specialist helping businesses achieve top search rankings and drive organic growth.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ekim Demirci | SEO Specialist",
    description: "Expert SEO Specialist helping businesses achieve top search rankings and drive organic growth.",
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
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}





