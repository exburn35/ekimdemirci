export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ekim Demirci",
    "jobTitle": "SEO Uzmanı ve Danışmanı",
    "url": "https://ekimdemirci.com",
    "telephone": "+90 507 047 47 02",
    "email": "ekmdmrci@gmail.com",
    "birthDate": "1991-11-02",
    "sameAs": [
      "https://www.linkedin.com/in/ekim-demirci/",
      "https://www.instagram.com/ekimdemircii/",
      "https://tr.pinterest.com/ekimdemirciseo/",
      "https://www.youtube.com/@ekimdemirciseo",
      "https://medium.com/@ekimdemirci"
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
