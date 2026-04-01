import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Audit Talebi | Ekim Demirci",
  description: "Web sitenizin SEO durumunu ücretsiz analiz edin. Detaylı rapor ve öncelikli öneriler ile iyileştirme fırsatlarını keşfedin.",
  alternates: {
    canonical: "/audit-talebi",
  },
  openGraph: {
    title: "SEO Audit Talebi | Ekim Demirci",
    description: "Web sitenizin SEO durumunu ücretsiz analiz edin.",
  },
};

export default function AuditTalebiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
