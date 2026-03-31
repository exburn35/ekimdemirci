export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ekim Demirci",
    "jobTitle": "SEO Uzmanı ve Danışmanı",
    "url": "https://ekimdemirci.com",
    "sameAs": [
      "https://linkedin.com",
      "https://twitter.com",
      "https://github.com"
    ],
    "description": "Markaların potansiyeline ulaşmasına yardımcı olan, 5+ yıllık deneyime sahip Uzman SEO Uzmanı ve Danışmanı.",
    "knowsAbout": ["SEO", "Arama Motoru Optimizasyonu", "Teknik SEO", "İçerik Stratejisi", "Yapay Zeka SEO", "Site İçi SEO", "Site Dışı SEO"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "İstanbul",
      "addressCountry": "Türkiye"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
