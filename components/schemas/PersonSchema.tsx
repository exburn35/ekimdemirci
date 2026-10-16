import { SITE_CONFIG } from "@/lib/siteConfig";

export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_CONFIG.url}/#person`,
        "name": SITE_CONFIG.name,
        "jobTitle": "SEO ve GEO Danışmanı",
        "url": SITE_CONFIG.url,
        "telephone": SITE_CONFIG.phone,
        "email": SITE_CONFIG.email,
        "birthDate": "1991-11-02",
        "sameAs": SITE_CONFIG.sameAs,
        "description": "İşletmelerin organik arama motorlarında ve yapay zeka (GEO) yanıtlarında üst sıralara çıkmasını sağlayan bağımsız SEO ve GEO Danışmanı.",
        "knowsAbout": [
          "SEO",
          "GEO (Generative Engine Optimization)",
          "Arama Motoru Optimizasyonu",
          "Teknik SEO",
          "Semantik SEO",
          "Yapay Zeka SEO",
          "Site İçi SEO",
          "Site Dışı SEO"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": SITE_CONFIG.addressLocality,
          "addressCountry": SITE_CONFIG.addressCountry
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_CONFIG.url}/#organization`,
        "name": `${SITE_CONFIG.name} - SEO & GEO Danışmanlığı`,
        "url": SITE_CONFIG.url,
        "telephone": SITE_CONFIG.phone,
        "email": SITE_CONFIG.email,
        "priceRange": "$$$",
        "image": `${SITE_CONFIG.url}/ekim-demirci.webp`,
        "sameAs": SITE_CONFIG.sameAs,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": SITE_CONFIG.addressLocality,
          "addressCountry": SITE_CONFIG.addressCountry
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
