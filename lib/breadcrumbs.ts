export interface BreadcrumbItem {
  name: string;
  href?: string;
}

export const ROUTE_LABELS: Record<string, string> = {
  // Intermediate levels
  "blog": "Blog",
  "kategori": "Blog",
  "seo-hizmetleri": "SEO Hizmetleri",
  "sektorel-seo-hizmetleri": "Sektörel SEO Hizmetleri",
  "basari-hikayeleri": "Başarı Hikayeleri",

  // Services
  "geo-danismanligi": "GEO Danışmanlığı",
  "yapay-zeka-seo": "Yapay Zeka SEO",
  "teknik-seo": "Teknik SEO",
  "sayfa-ici-seo": "Site İçi SEO",
  "sayfa-disi-seo": "Site Dışı SEO",

  // Sectoral services
  "dis-hekimleri-icin-seo-2": "Diş Hekimleri için SEO",
  "e-ticaret-seo": "E-Ticaret SEO",
  "avukatlar-icin-seo-hizmeti": "Avukatlar için SEO",
  "guzellik-merkezleri-icin-seo-2": "Güzellik Merkezleri için SEO",
  "doktorlar-icin-seo-2": "Doktorlar için SEO",
  "hastaneler-icin-seo-2": "Hastaneler için SEO",
  "kurumsal-b2b-seo": "Kurumsal B2B SEO",
  "saglik-ve-klinik-seo": "Sağlık ve Klinik SEO",
  "yerel-isletme-seo": "Yerel İşletme SEO",

  // Other static pages
  "seo-danismanlik-fiyatlari": "Fiyatlar",
  "icerik-yazimi": "İçerik Yazımı",
  "audit-talebi": "Audit Talebi",
  "sikca-sorulan-sorular": "SSS",
  "hakkimda": "Hakkımda",
  "iletisim": "İletişim",
  "seo-sozlugu": "SEO Sözlüğü",
  "gizlilik-politikasi": "Gizlilik Politikası",
  "kullanim-kosullari": "Kullanım Koşulları",
  "cerez-politikasi": "Çerez Politikası",
};

export function decodeHtmlEntities(str: string): string {
  if (!str) return "";
  return str
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

export function getBreadcrumbItems(pathname: string, currentTitle?: string): BreadcrumbItem[] {
  const segments = pathname.split("/").filter(Boolean);
  const items: BreadcrumbItem[] = [];

  if (segments.length === 0) return [];

  // Special handling for category pages: /kategori/[slug] -> parent is Blog (/blog)
  if (segments[0] === "kategori") {
    items.push({ name: "Blog", href: "/blog" });
    const catName = currentTitle || (ROUTE_LABELS[segments[1]] ?? "");
    if (!catName && process.env.NODE_ENV !== "production") {
      console.warn(`[Breadcrumb Warning] Missing category title for segment: "${segments[1]}" at "${pathname}"`);
    }
    items.push({ name: catName || segments[1], href: pathname });
    return items;
  }

  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    const isLast = i === segments.length - 1;
    const currentPath = `/${segments.slice(0, i + 1).join("/")}`;

    let label: string | undefined;

    if (isLast && currentTitle) {
      label = currentTitle;
    } else if (ROUTE_LABELS[segment]) {
      label = ROUTE_LABELS[segment];
    } else {
      if (process.env.NODE_ENV !== "production") {
        console.warn(`[Breadcrumb Warning] Missing route mapping for segment: "${segment}" at "${pathname}"`);
      }
      label = ""; // Do not fall back to slug
    }

    if (label) {
      items.push({
        name: label,
        href: currentPath,
      });
    }
  }

  return items;
}
