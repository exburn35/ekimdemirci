/**
 * Site-wide configuration and metadata constants.
 * E-posta, telefon, adres, sosyal medya ve içerik alanları buradan merkezi olarak yönetilir.
 */
export const SITE_CONFIG = {
  name: "Ekim Demirci",
  title: "SEO ve GEO Danışmanı Ekim Demirci",
  email: "ekmdmrci@gmail.com", // Sabit: Alan adlı e-postaya geçildiğinde buradan tek noktadan güncellenir
  phone: "+90 507 047 47 02",
  phoneFormatted: "+90 507 047 47 02",
  whatsappUrl: "https://wa.me/905070474702",
  url: "https://ekimdemirci.com",
  address: "İstanbul, Türkiye",
  addressLocality: "İstanbul",
  addressCountry: "Türkiye",
  sameAs: [
    "https://www.linkedin.com/in/ekim-demirci/",
    "https://www.instagram.com/ekimdemircii/",
    "https://tr.pinterest.com/ekimdemirciseo/",
    "https://www.youtube.com/@ekimdemirciseo",
    "https://medium.com/@ekmdmrci"
  ],
  // Placeholder alanları (boş bırakıldığında ilgili alanlar canlı sitede render edilmez):
  proofNote: "", // Kanıt bandı altındaki açıklama
  geoMeasurement: "", // Vaka analizleri GEO kartı ölçüm bilgisi
  bioText: "" // Ekim Demirci Kimdir bölümü biyografi metni
};
