"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Brain, Settings, FileText, Link2, TrendingUp, Users, Target, Award, Search, HelpCircle, FileEdit } from "lucide-react";

const allPages = [
  // Ana Hizmetler
  {
    title: "GEO Danışmanlığı",
    path: "/geo-danismanligi",
    category: "Hizmetler",
    icon: Target,
    description: "ChatGPT ve Google AI Overview cevaplarında önerilen marka olun.",
    gradient: "",
    className: "",
  },
  {
    title: "Yapay Zeka SEO",
    path: "/seo-hizmetleri/yapay-zeka-seo",
    category: "Hizmetler",
    icon: Brain,
    description: "Yapay zeka araçları ile rakiplerinizi geride bırakacak modern SEO teknikleri.",
    gradient: "from-blue-500 to-cyan-500",
    className: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    title: "Teknik SEO",
    path: "/seo-hizmetleri/teknik-seo",
    category: "Hizmetler",
    icon: Settings,
    description: "Sitenizin arama motorları tarafından kusursuz taranması için teknik altyapı iyileştirmeleri.",
    gradient: "from-purple-500 to-pink-500",
    className: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    title: "Sayfa İçi SEO",
    path: "/seo-hizmetleri/sayfa-ici-seo",
    category: "Hizmetler",
    icon: FileText,
    description: "İçeriklerinizi ve anahtar kelimelerinizi optimize ederek sıralamanızı yükseltin.",
    gradient: "from-orange-500 to-red-500",
    className: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    title: "Sayfa Dışı SEO",
    path: "/seo-hizmetleri/sayfa-disi-seo",
    category: "Hizmetler",
    icon: Link2,
    description: "Kaliteli backlinkler ile alan adı otoritenizi güvenli bir şekilde artırın.",
    gradient: "from-green-500 to-emerald-500",
    className: "col-span-1 md:col-span-2 row-span-1",
  },
  
  // Sektörel Sayfalar
  {
    title: "E-Ticaret SEO",
    path: "/sektorel-seo-hizmetleri/e-ticaret-seo",
    category: "Sektörel",
    icon: TrendingUp,
    description: "Online mağazanızın trafiğini ve satışlarını artıracak e-ticaret odaklı stratejiler.",
    gradient: "from-blue-600 to-indigo-600",
    className: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    title: "Sektörel SEO",
    path: "/sektorel-seo-hizmetleri", 
    category: "Kurumsal",
    icon: Target,
    description: "Farklı sektörlere özel niş SEO çalışmaları.",
    gradient: "from-slate-500 to-slate-700",
    className: "col-span-1 md:col-span-1 row-span-1",
  },
  
  // Diğer Sayfalar
  {
    title: "Başarı Hikayeleri",
    path: "/basari-hikayeleri",
    category: "Kurumsal",
    icon: Award,
    description: "Geçmiş projelerimdeki başarılar ve elde ettiğim sonuçlar.",
    gradient: "from-yellow-500 to-orange-500",
    className: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    title: "SEO Fiyatları",
    path: "/seo-danismanlik-fiyatlari",
    category: "Kurumsal",
    icon: Search,
    description: "Bütçenize ve hedeflerinize uygun şeffaf SEO paketleri.",
    gradient: "from-pink-500 to-rose-500",
    className: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    title: "İçerik Yazımı",
    path: "/icerik-yazimi",
    category: "Hizmetler",
    icon: FileEdit,
    description: "SEO uyumlu, uzmanlıkla hazırlanmış profesyonel metinler.",
    gradient: "from-indigo-500 to-purple-500",
    className: "col-span-1 md:col-span-1 row-span-2",
  },
  {
    title: "Sıkça Sorulan Sorular",
    path: "/sikca-sorulan-sorular",
    category: "Bilgi",
    icon: HelpCircle,
    description: "Çalışma sürecim ve SEO hakkında aklınıza takılan soruların cevapları.",
    gradient: "from-teal-500 to-green-500",
    className: "col-span-1 md:col-span-1 row-span-1",
  },
];

export default function RelatedPages() {
  const pathname = usePathname();

  // Mevcut sayfayı hariç tut
  const filteredPages = allPages.filter(page => page.path !== pathname);
  
  const currentCategory = allPages.find(p => p.path === pathname)?.category;
  
  let relatedPages = [];
  
  if (currentCategory === "Hizmetler") {
    relatedPages = [
      filteredPages.find(p => p.category === "Sektörel"),
      filteredPages.find(p => p.path === "/seo-hizmetleri/sayfa-ici-seo"),
      filteredPages.find(p => p.path === "/seo-danismanlik-fiyatlari"),
      filteredPages.find(p => p.path === "/basari-hikayeleri"),
    ].filter(Boolean);
  } else if (currentCategory === "Sektörel") {
    relatedPages = [
      filteredPages.find(p => p.path === "/seo-hizmetleri/yapay-zeka-seo"),
      filteredPages.find(p => p.path === "/seo-hizmetleri/teknik-seo"),
      filteredPages.find(p => p.path === "/icerik-yazimi"),
      filteredPages.find(p => p.path === "/seo-danismanlik-fiyatlari"),
    ].filter(Boolean);
  } else {
    // Karma
    relatedPages = filteredPages.slice(0, 4);
  }

  // Eksik varsa sıradaki sayfalarla tamamla (rastgele seçim hydration uyumsuzluğu yaratıyordu)
  for (const page of filteredPages) {
    if (relatedPages.length >= 4) break;
    if (!relatedPages.includes(page)) relatedPages.push(page);
  }

  return (
    <section className="border-t border-line bg-canvas py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">Bunlar da ilginizi çekebilir</h2>
          <Link href="/seo-hizmetleri" className="hidden text-sm font-semibold text-brand hover:text-brand-dark sm:inline">
            Tüm hizmetler →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {relatedPages.map((page) => {
            if (!page) return null;
            const Icon = page.icon || Link2;
            return (
              <Link
                key={page.path}
                href={page.path}
                className="group flex items-start gap-3 rounded-2xl border border-line bg-white p-4 transition-all hover:border-brand/30 hover:shadow-card"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-light text-brand">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-2 text-[15px] font-semibold text-ink group-hover:text-brand">
                    {page.title}
                    <ArrowRight className="h-4 w-4 shrink-0 text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:text-brand" />
                  </span>
                  <span className="mt-0.5 line-clamp-2 block text-xs leading-relaxed text-ink-muted">{page.description}</span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
