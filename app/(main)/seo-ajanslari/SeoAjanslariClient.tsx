"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  ExternalLink,
  Building2,
  MapPin,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ArrowDown,
  Send,
  Loader2,
  Calendar,
  Sparkles,
  ShieldCheck,
  Layers,
  TrendingUp,
  FileText,
  DollarSign,
  AlertCircle,
  Filter,
} from "lucide-react";

export interface Agency {
  slug: string;
  name: string;
  website: string;
  city: string;
  description: string;
  nofollow?: boolean;
}

export interface AgencyData {
  updatedAt: string;
  count: number;
  agencies: Agency[];
}

interface FaqItem {
  question: string;
  answer: string;
}

interface SeoAjanslariClientProps {
  agencyData: AgencyData;
  faqs: FaqItem[];
}

function formatDomain(url: string): string {
  try {
    const parsed = new URL(url.startsWith("http") ? url : `https://${url}`);
    return parsed.hostname.replace(/^www\./, "");
  } catch {
    return url.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/.*$/, "");
  }
}

function formatDate(dateStr: string): string {
  try {
    const [year, month, day] = dateStr.split("-").map(Number);
    const months = [
      "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
      "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
    ];
    if (day && month && year) {
      return `${day} ${months[month - 1]} ${year}`;
    }
    return dateStr;
  } catch {
    return dateStr;
  }
}

export default function SeoAjanslariClient({ agencyData, faqs }: SeoAjanslariClientProps) {
  const [selectedCity, setSelectedCity] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Form State
  const [formState, setFormState] = useState({
    agencyName: "",
    website: "",
    city: "",
    serviceUrl: "",
    email: "",
    note: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Extract cities with their counts from raw data
  const { cityList, cityGroups } = useMemo(() => {
    const counts: Record<string, number> = {};
    const groups: Record<string, Agency[]> = {};

    agencyData.agencies.forEach((agency) => {
      counts[agency.city] = (counts[agency.city] || 0) + 1;
      if (!groups[agency.city]) {
        groups[agency.city] = [];
      }
      groups[agency.city].push(agency);
    });

    // Custom city order: İstanbul, Ankara, İzmir first, then others alphabetically
    const priorityCities = ["İstanbul", "Ankara", "İzmir"];
    const otherCities = Object.keys(counts)
      .filter((c) => !priorityCities.includes(c))
      .sort((a, b) => a.localeCompare(b, "tr"));

    const sortedCities = [...priorityCities.filter((c) => counts[c]), ...otherCities];

    return {
      cityList: sortedCities.map((city) => ({ name: city, count: counts[city] })),
      cityGroups: groups,
    };
  }, [agencyData.agencies]);

  // Check matching condition for an individual agency
  const isAgencyMatch = (agency: Agency, cityFilter: string, query: string): boolean => {
    if (cityFilter !== "all" && agency.city !== cityFilter) {
      return false;
    }
    if (!query) return true;
    const q = query.toLocaleLowerCase("tr");
    return (
      agency.name.toLocaleLowerCase("tr").includes(q) ||
      agency.city.toLocaleLowerCase("tr").includes(q) ||
      agency.description.toLocaleLowerCase("tr").includes(q)
    );
  };

  // Live matching agency count
  const matchingCount = useMemo(() => {
    const q = searchQuery.trim();
    return agencyData.agencies.filter((agency) => isAgencyMatch(agency, selectedCity, q)).length;
  }, [agencyData.agencies, selectedCity, searchQuery]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.agencyName,
          email: formState.email,
          website: formState.website,
          phone: formState.city,
          formType: "directory",
          message: `Ajans Adı: ${formState.agencyName}\nWeb Sitesi: ${formState.website}\nŞehir: ${formState.city}\nSEO Hizmet Sayfası: ${formState.serviceUrl}\nİletişim E-posta: ${formState.email}\nNot: ${formState.note || "Belirtilmedi"}`,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setSubmitStatus("success");
        setFormState({
          agencyName: "",
          website: "",
          city: "",
          serviceUrl: "",
          email: "",
          note: "",
        });
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.error || "Talebiniz kaydedilirken bir hata oluştu.");
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Bağlantı hatası oluştu. Lütfen daha sonra tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isGroupedView = selectedCity === "all" && searchQuery.trim() === "";

  return (
    <div className="bg-[#050814] text-gray-200">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f25] via-[#0d153a] to-[#050814]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20">
                <Calendar className="w-3.5 h-3.5" />
                Son güncelleme: {formatDate(agencyData.updatedAt)}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
                <Building2 className="w-3.5 h-3.5" />
                {agencyData.count} Ajans · 18 İl
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                Doğrulanmış Dizin · Sıralamasız
              </span>
            </div>

            {/* H1 Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Türkiye&apos;deki SEO Ajansları
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mb-8">
              Türkiye&apos;de SEO hizmeti veren ajansların kapsamlı şehir dizini ve işletmeniz için en doğru ajansı seçme rehberi.
            </p>

            {/* Jump Button */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#ajans-dizini"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5"
              >
                Ajans Listesine Git
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>
              <a
                href="#dizine-ekleme"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-gray-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                Ajansınızı Ekleyin
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Guide & Content Section */}
      <section className="py-12 relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* TL;DR & Önemli Çıkarımlar */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-950/30 via-white/[0.02] to-blue-950/30 border border-purple-500/20 backdrop-blur-sm relative overflow-hidden shadow-xl">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-indigo-500" />
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">TL;DR & Önemli Çıkarımlar</h2>
          </div>

          <ul className="space-y-3.5 mb-6 text-gray-300">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
              <span>Bu sayfa, Türkiye&apos;de SEO hizmeti veren ajansların şehir bazlı listesini ve doğru ajansı seçmek için pratik bir rehberi bir arada sunar.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
              <span>Listede sıralama yoktur. Ajanslar şehre ve alfabetik sıraya göre dizilmiştir; hiçbir ajans listede yer almak için ücret ödemez.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
              <span>Dizindeki her ajansın web sitesi açılarak SEO hizmeti verdiği doğrulanmıştır.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
              <span>Doğru ajansı seçerken en belirleyici kriterler; sektör deneyimi, raporlama şeffaflığı, teknik SEO yetkinliği ve sözleşme şartlarıdır.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
              <span>Bilgileri eksik ya da hatalı olan ajanslar, sayfanın altındaki form üzerinden güncelleme talep edebilir.</span>
            </li>
          </ul>

          <div className="pt-6 border-t border-white/10 space-y-4 text-gray-300 leading-relaxed font-normal">
            <p>
              SEO ajansı, bir web sitesinin Google gibi arama motorlarında ve giderek artan biçimde ChatGPT, Gemini gibi yapay zekâ yanıtlarında daha görünür olması için teknik, içerik ve otorite çalışmalarını yürüten firmadır. Türkiye&apos;de bu hizmeti veren yüzlerce firma var. Ancak kim gerçekten SEO yapıyor, kim yalnızca hizmet listesine &quot;SEO&quot; yazmış; bunu ayırt etmek zor.
            </p>
            <p>
              Bu sayfayı iki ihtiyaç için hazırladım: Türkiye&apos;deki SEO ajanslarını tek bir yerde görmek ve aralarından işletmenize uygun olanı seçerken neye bakacağınızı bilmek. Sayfanın üst kısmı seçim rehberi, alt kısmı ise şehre göre filtreleyebileceğiniz ve isimle arayabileceğiniz ajans dizini.
            </p>
          </div>

          {/* Şeffaflık Notu */}
          <div className="mt-6 p-4 rounded-xl bg-purple-500/[0.07] border border-purple-500/20 text-sm text-purple-200/90 leading-relaxed flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
            <p>
              <strong className="text-white font-semibold">Şeffaflık notu:</strong> Ben de bağımsız bir SEO ve GEO danışmanıyım. Bu nedenle listede kimseyi öne çıkarmıyor, sıralama yapmıyor ve ajans tanıtımlarında yalnızca doğrulanabilir bilgilere yer veriyorum. Dizin düzenli olarak güncellenir; son güncelleme tarihi sayfanın üst kısmında yer alır.
            </p>
          </div>
        </div>

        {/* SEO Ajansı Nedir, Ne Yapar? */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Layers className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">SEO Ajansı Nedir, Ne Yapar?</h2>
          </div>

          <p className="text-gray-300 leading-relaxed">
            SEO ajansı, bir web sitesinin organik arama görünürlüğünü artırmak için teknik altyapıyı, içeriği ve site dışı otoriteyi birlikte yöneten hizmet firmasıdır. İyi bir ajans yalnızca sıralama takibi yapmaz; arama trafiğini iş sonuçlarına (form, satış, randevu) bağlar.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Bir SEO ajansının sunduğu hizmetler genellikle dört başlıkta toplanır:
          </p>

          {/* Table */}
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/[0.05] text-white border-b border-white/10">
                <tr>
                  <th className="p-4 font-semibold w-1/3">Hizmet Alanı</th>
                  <th className="p-4 font-semibold">Kapsadığı İşler</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-300">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-medium text-white">
                    <Link href="/seo-hizmetleri/teknik-seo" className="text-purple-400 hover:text-purple-300 hover:underline">
                      Teknik SEO
                    </Link>
                  </td>
                  <td className="p-4">Tarama ve indeksleme, site hızı ve Core Web Vitals, yapılandırılmış veri, site mimarisi, yönlendirmeler</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-medium text-white">
                    <Link href="/seo-hizmetleri/sayfa-ici-seo" className="text-purple-400 hover:text-purple-300 hover:underline">
                      Site içi SEO
                    </Link>
                  </td>
                  <td className="p-4">Anahtar kelime ve konu araştırması, içerik stratejisi, sayfa optimizasyonu, iç linkleme</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-medium text-white">
                    <Link href="/seo-hizmetleri/sayfa-disi-seo" className="text-purple-400 hover:text-purple-300 hover:underline">
                      Site dışı SEO
                    </Link>
                  </td>
                  <td className="p-4">Backlink ve dijital PR, marka bahsi, yerel SEO için dizin ve harita kayıtları</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-medium text-white">Ölçüm ve raporlama</td>
                  <td className="p-4">Search Console ve GA4 kurulumu, dönüşüm takibi, düzenli performans raporları</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-300 leading-relaxed">
            Son iki yılda bu listeye beşinci bir alan eklendi:{" "}
            <Link href="/blog/geo-nedir" className="text-purple-400 hover:text-purple-300 font-medium underline">
              GEO (Generative Engine Optimization)
            </Link>
            . Google AI Modu ve AI Bakışı&apos;nın Türkiye&apos;de kullanıma açılmasıyla birlikte, ajansların yapay zekâ yanıtlarındaki görünürlüğü de ölçüp yönetmesi beklenir hâle geldi.
          </p>
        </div>

        {/* SEO Ajansı Seçerken Nelere Dikkat Edilmeli? */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">SEO Ajansı Seçerken Nelere Dikkat Edilmeli?</h2>
          </div>

          <p className="text-gray-300 leading-relaxed">
            Doğru SEO ajansı; sektörünüzü tanıyan, ne yaptığını şeffaf biçimde raporlayan ve sonuçları sıralamayla değil iş hedeflerinizle ölçen ajanstır. Teklifleri karşılaştırırken şu yedi kritere bakın:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 text-xs flex items-center justify-center font-bold">1</span>
                Sektör Deneyimi
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                E-ticaret, sağlık, B2B ve yerel işletme SEO&apos;su birbirinden çok farklıdır. Ajanstan sizin sektörünüzdeki somut vaka örneklerini isteyin.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 text-xs flex items-center justify-center font-bold">2</span>
                Teknik Yetkinlik
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Ajansın sitenizin altyapısını (Next.js, WordPress, Shopify, özel yazılım) anlayıp anlamadığını ve geliştirici ekibinizle nasıl çalışacağını sorun.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 text-xs flex items-center justify-center font-bold">3</span>
                Strateji Önce, İş Listesi Sonra
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                İyi bir teklif &quot;ayda X içerik, Y backlink&quot; ile başlamaz; sitenizin durumuna dair bir analiz ve önceliklendirilmiş bir plan içerir.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 text-xs flex items-center justify-center font-bold">4</span>
                Raporlama Şeffaflığı
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Raporların neyi ölçtüğünü sorun. Yalnızca sıralama raporu yetersizdir; organik trafik, dönüşüm ve gelir etkisi de raporlanmalıdır.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 text-xs flex items-center justify-center font-bold">5</span>
                Garanti Vaadi Yok
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                &quot;İlk sıra garantisi&quot; veren ajanstan uzak durun. Google sıralamayı kimsenin garanti edemeyeceğini açıkça belirtir.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 text-xs flex items-center justify-center font-bold">6</span>
                Backlink Yöntemi
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Satın alınmış link ağları kısa vadede sonuç verse de cezaya yol açabilir. Ajansın link kazanma yöntemini ve örnek yayınları görmek isteyin.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all md:col-span-2">
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 text-xs flex items-center justify-center font-bold">7</span>
                Sözleşme ve Veri Sahipliği
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Asgari süreyi, fesih şartlarını ve Search Console, GA4, içerik gibi varlıkların size ait kalıp kalmayacağını yazılı olarak netleştirin.
              </p>
            </div>
          </div>
        </div>

        {/* SEO Ajansına Sorulması Gereken Sorular */}
        <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">SEO Ajansına Sorulması Gereken Sorular</h2>
          </div>

          <p className="text-gray-300">
            İlk görüşmede şu soruların cevabı, ajansın nasıl çalıştığını hızla gösterir:
          </p>

          <div className="space-y-3">
            {[
              "İlk 90 günde ne yapacaksınız ve neden bu sırayla?",
              "Benim sektörümde çalıştığınız bir projenin sonuçlarını paylaşabilir misiniz?",
              "Hesabımda kim çalışacak? Ekibin deneyimi ne?",
              "Hangi metrikleri raporlayacaksınız ve raporlar ne sıklıkla gelecek?",
              "Teknik değişiklikleri kim uygulayacak: siz mi, bizim ekibimiz mi?",
              "Yapay zekâ yanıtlarındaki (ChatGPT, Google AI Modu) görünürlüğümüzü nasıl ölçüyorsunuz?",
              "Sözleşme bittiğinde hangi hesaplar ve içerikler bizde kalır?",
            ].map((q, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-gray-300">
                <span className="w-6 h-6 rounded-full bg-indigo-500/10 text-indigo-400 text-xs flex items-center justify-center font-bold flex-shrink-0">
                  {idx + 1}
                </span>
                <span className="font-medium text-white">{q}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Ajansı mı, Freelance Danışman mı, Kurum İçi Ekip mi? */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Building2 className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              SEO Ajansı mı, Freelance Danışman mı, Kurum İçi Ekip mi?
            </h2>
          </div>

          <p className="text-gray-300 leading-relaxed">
            Ajans; geniş ekip ve çok kanallı hizmet ister, danışman; kıdemli bir uzmanla doğrudan çalışmak ister, kurum içi ekip ise SEO&apos;yu şirketin günlük işinin parçası yapmak isteyen işletmeler için uygundur. Doğru seçim bütçenize, sitenizin büyüklüğüne ve iç ekibinizin teknik kapasitesine bağlıdır.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/[0.05] text-white border-b border-white/10">
                <tr>
                  <th className="p-4 font-semibold">Kriter</th>
                  <th className="p-4 font-semibold">SEO Ajansı</th>
                  <th className="p-4 font-semibold">Freelance SEO Danışmanı</th>
                  <th className="p-4 font-semibold">Kurum İçi SEO Ekibi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-300">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-medium text-white">En uygun olduğu durum</td>
                  <td className="p-4">Çok kanallı büyüme, yoğun içerik ve link ihtiyacı</td>
                  <td className="p-4">Strateji, denetim ve kıdemli yön verme ihtiyacı</td>
                  <td className="p-4">Büyük ve sürekli değişen siteler, çok sayıda ürün veya sayfa</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-medium text-white">Kimle çalışırsınız</td>
                  <td className="p-4">Hesap yöneticisi ve uzman ekip</td>
                  <td className="p-4 text-purple-400 font-medium">Doğrudan uzmanın kendisi</td>
                  <td className="p-4">Kendi çalışanlarınız</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-medium text-white">Kapasite</td>
                  <td className="p-4">Yüksek; içerik, teknik ve link aynı çatı altında</td>
                  <td className="p-4">Sınırlı; uygulama genellikle sizin ekibinizde</td>
                  <td className="p-4">İşe alınan kişi sayısına bağlı</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-medium text-white">Maliyet yapısı</td>
                  <td className="p-4">Aylık hizmet bedeli</td>
                  <td className="p-4">Aylık veya proje bazlı ücret</td>
                  <td className="p-4">Maaş, araç ve eğitim giderleri</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-medium text-white">Dikkat edilecek nokta</td>
                  <td className="p-4">Projenizin deneyimsiz ekip üyelerine devredilmesi</td>
                  <td className="p-4">Tek kişiye bağımlılık</td>
                  <td className="p-4">Dış bakış açısının ve güncel sektör bilgisinin eksik kalması</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-300 leading-relaxed">
            Birçok işletme bu modelleri birleştirir. Örneğin strateji ve denetim için bir danışmanla, içerik ve uygulama için kurum içi ekip veya bir ajansla çalışılabilir.{" "}
            <Link href="/seo-hizmetleri" className="text-purple-400 hover:text-purple-300 font-medium underline">
              SEO danışmanlığı
            </Link>{" "}
            bu hibrit modelin en sık görülen parçasıdır.
          </p>
        </div>

        {/* SEO Ajansı Fiyatları Neye Göre Belirlenir? */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <DollarSign className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              SEO Ajansı Fiyatları Neye Göre Belirlenir?
            </h2>
          </div>

          <p className="text-gray-300 leading-relaxed">
            SEO ajansı fiyatları sabit bir tarifeye göre değil; sitenin büyüklüğüne, rekabet düzeyine, hedef pazar sayısına ve hizmetin kapsamına göre belirlenir. Aynı sektörde iki teklif arasında birkaç kat fark olması normaldir, çünkü teklifler genellikle farklı işleri kapsar.
          </p>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
            <h3 className="font-semibold text-white">Fiyatı belirleyen başlıca faktörler:</h3>
            <ul className="space-y-2.5 text-gray-300 text-sm">
              <li className="flex items-start gap-2.5">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong className="text-white">Sitenin büyüklüğü ve yapısı:</strong> 20 sayfalık bir kurumsal site ile on binlerce ürünlü bir e-ticaret sitesinin teknik iş yükü aynı değildir.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong className="text-white">Rekabet:</strong> Sağlık, finans ve hukuk gibi rekabetin yüksek olduğu sektörlerde daha fazla içerik ve otorite çalışması gerekir.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong className="text-white">Hedef pazar ve dil sayısı:</strong> Uluslararası SEO; her dil ve ülke için ayrı anahtar kelime, içerik ve teknik yapı (hreflang) ister.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong className="text-white">Kapsam:</strong> Fiyata içerik üretimi, backlink ve dijital PR, geliştirme desteği ve GEO çalışmasının dahil olup olmadığı.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong className="text-white">Ekip kıdemi:</strong> Projeye ayrılan uzmanların deneyimi ve aylık ayrılan saat.</span>
              </li>
            </ul>
          </div>

          <p className="text-gray-300 leading-relaxed">
            Teklifleri karşılaştırırken aylık ücrete değil, o ücretin karşılığında yapılacak işlere bakın. Her teklifteki iş kalemlerini aynı tabloya yazmak, hangi ajansın gerçekte ne sunduğunu netleştirir. Danışmanlık modelinde fiyatların nasıl oluştuğunu{" "}
            <Link href="/seo-danismanlik-fiyatlari" className="text-purple-400 hover:text-purple-300 font-medium underline">
              SEO danışmanlık fiyatları
            </Link>{" "}
            sayfamda ayrıntılı olarak anlattım.
          </p>
        </div>
      </section>

      {/* Directory Section Anchor */}
      <section id="ajans-dizini" className="py-16 relative bg-[#070b1a] border-t border-white/5 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Türkiye&apos;deki SEO Ajansları
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Dizinde 18 ilden 136 SEO ajansı yer alıyor: İstanbul&apos;da 76, Ankara&apos;da 12, İzmir&apos;de 8 ve diğer 15 ilde 40 ajans. Listede sıralama yoktur; ajanslar önce şehre, sonra alfabetik sıraya göre dizilmiştir. Her ajansın web sitesi açılarak SEO hizmeti verdiği kontrol edilmiştir.
            </p>
          </div>

          {/* Sticky Filter Bar */}
          <div className="sticky top-20 z-30 mb-10 p-4 rounded-2xl bg-[#0a0f25]/90 backdrop-blur-xl border border-white/10 shadow-2xl transition-all">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Left: City Select and Search Input */}
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto flex-1">
                {/* City Dropdown */}
                <div className="relative w-full sm:w-64">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-purple-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <select
                    id="city-filter-select"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 appearance-none cursor-pointer hover:bg-white/[0.08] transition-colors"
                  >
                    <option value="all" className="bg-[#0a0f25] text-white">
                      Tüm Şehirler ({agencyData.count} Ajans)
                    </option>
                    {cityList.map((c) => (
                      <option key={c.name} value={c.name} className="bg-[#0a0f25] text-white">
                        {c.name} ({c.count})
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>

                {/* Text Search Input */}
                <div className="relative w-full sm:flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <Search className="w-4 h-4" />
                  </div>
                  <input
                    id="agency-search-input"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Ajans adı veya açıklamasında ara..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-gray-400 hover:text-white"
                      title="Temizle"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              {/* Right: Live Counter Badge */}
              <div className="flex-shrink-0 flex items-center gap-2">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  <Building2 className="w-4 h-4 text-purple-400" />
                  <span>{matchingCount} ajans</span>
                </span>
                {(selectedCity !== "all" || searchQuery) && (
                  <button
                    onClick={() => {
                      setSelectedCity("all");
                      setSearchQuery("");
                    }}
                    className="text-xs text-gray-400 hover:text-purple-300 underline transition-colors px-2 py-1"
                  >
                    Filtreyi Sıfırla
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Cards Display */}
          {/* Note: Server-rendered requirement: All 136 cards are rendered directly in the markup. Visibility is toggled via CSS based on client state! */}
          {isGroupedView ? (
            /* Grouped by City when "all" is selected and no search */
            <div className="space-y-14">
              {cityList.map((cityObj) => {
                const cityAgencies = cityGroups[cityObj.name] || [];
                return (
                  <div key={cityObj.name} className="space-y-6">
                    <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                      <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                        <MapPin className="w-5 h-5 text-purple-400" />
                        <span>{cityObj.name} SEO Ajansları</span>
                        <span className="text-sm font-normal text-gray-400">· {cityAgencies.length} ajans</span>
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {cityAgencies.map((agency) => (
                        <AgencyCard key={agency.slug} agency={agency} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Flat grid view when filtered by city or search query */
            <div>
              {/* Selected city headline if specific city without search query */}
              {selectedCity !== "all" && !searchQuery && (
                <div className="mb-6 flex items-center justify-between pb-3 border-b border-white/10">
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <span>{selectedCity} SEO Ajansları</span>
                  </h2>
                  <span className="text-sm text-gray-400">{matchingCount} ajans listeleniyor</span>
                </div>
              )}

              {matchingCount > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {agencyData.agencies.map((agency) => {
                    const isMatch = isAgencyMatch(agency, selectedCity, searchQuery.trim());
                    return (
                      <div key={agency.slug} className={isMatch ? "block" : "hidden"}>
                        <AgencyCard agency={agency} />
                      </div>
                    );
                  })}
                </div>
              ) : (
                /* Empty state */
                <div className="py-16 text-center rounded-2xl bg-white/[0.02] border border-white/10 p-8 max-w-lg mx-auto">
                  <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mx-auto mb-4">
                    <Filter className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Aramanızla Eşleşen Ajans Bulunamadı</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    Farklı bir arama terimi deneyebilir ya da şehir filtresini &quot;Tüm Şehirler&quot; olarak değiştirebilirsiniz.
                  </p>
                  <a
                    href="#dizine-ekleme"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-white bg-purple-600 hover:bg-purple-500 transition-colors shadow-lg shadow-purple-600/20"
                  >
                    Ajansınız Listede Yok mu? Dizine Ekleyin
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Directory Submission / Edit Section */}
      <section id="dizine-ekleme" className="py-20 relative bg-[#050814] scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-purple-950/20 via-white/[0.02] to-blue-950/20 border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-4">
                <Building2 className="w-3.5 h-3.5" />
                Ücretsiz Dizin Kaydı
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                Ajansınız Listede Yok mu? Dizine Ekleme ve Güncelleme
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Türkiye&apos;de SEO hizmeti veren ve bu listede yer almayan bir ajanssanız, aşağıdaki form üzerinden eklenme talebinde bulunabilirsiniz. Mevcut bilgilerinizdeki bir hatayı düzeltmek için de aynı formu kullanabilirsiniz.
              </p>
            </div>

            {/* Conditions Card */}
            <div className="mb-8 p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-sm text-gray-300 space-y-2.5">
              <h3 className="font-semibold text-white flex items-center gap-2 text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Dizine eklenmek için üç koşul aranır:
              </h3>
              <ol className="list-decimal list-inside space-y-1.5 text-gray-400 text-xs sm:text-sm pl-1">
                <li>Türkiye&apos;de kayıtlı bir şirket veya Türkiye&apos;de ofisi bulunan bir ajans olmak.</li>
                <li>Aktif ve erişilebilir bir kurumsal web sitesine sahip olmak.</li>
                <li>Web sitesinde SEO hizmetini açıkça sunmak.</li>
              </ol>
              <p className="text-xs text-gray-400 pt-2 border-t border-white/5">
                Dizine eklenmek ücretsizdir ve listede herhangi bir sıralama yapılmaz. Talepler kontrol edildikten sonra bir sonraki güncellemede listeye eklenir.
              </p>
            </div>

            {/* Form Feedback */}
            {submitStatus === "success" && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-400" />
                <div>
                  <strong className="block font-semibold">Talebiniz başarıyla alındı!</strong>
                  Ajans bilgileri incelendikten sonra bir sonraki güncellemede dizine dahil edilecektir. Teşekkürler.
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm flex items-start gap-3">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-400" />
                <div>
                  <strong className="block font-semibold">Hata oluştu!</strong>
                  {errorMessage || "Form gönderilirken bir sorun meydana geldi."}
                </div>
              </div>
            )}

            {/* Interactive Form */}
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="agencyName" className="block text-xs font-medium text-gray-300 mb-1.5">
                    Ajans Adı <span className="text-purple-400">*</span>
                  </label>
                  <input
                    id="agencyName"
                    type="text"
                    required
                    value={formState.agencyName}
                    onChange={(e) => setFormState({ ...formState, agencyName: e.target.value })}
                    placeholder="Örn: Örnek SEO Ajansı"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  />
                </div>

                <div>
                  <label htmlFor="website" className="block text-xs font-medium text-gray-300 mb-1.5">
                    Web Sitesi <span className="text-purple-400">*</span>
                  </label>
                  <input
                    id="website"
                    type="url"
                    required
                    value={formState.website}
                    onChange={(e) => setFormState({ ...formState, website: e.target.value })}
                    placeholder="https://www.ajansadiniz.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="city" className="block text-xs font-medium text-gray-300 mb-1.5">
                    Şehir <span className="text-purple-400">*</span>
                  </label>
                  <input
                    id="city"
                    type="text"
                    required
                    value={formState.city}
                    onChange={(e) => setFormState({ ...formState, city: e.target.value })}
                    placeholder="Örn: İstanbul, Ankara, İzmir..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  />
                </div>

                <div>
                  <label htmlFor="serviceUrl" className="block text-xs font-medium text-gray-300 mb-1.5">
                    SEO Hizmet Sayfası Linki <span className="text-purple-400">*</span>
                  </label>
                  <input
                    id="serviceUrl"
                    type="url"
                    required
                    value={formState.serviceUrl}
                    onChange={(e) => setFormState({ ...formState, serviceUrl: e.target.value })}
                    placeholder="https://www.ajansadiniz.com/seo-hizmeti"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-300 mb-1.5">
                  İletişim E-postası <span className="text-purple-400">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="info@ajansadiniz.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
              </div>

              <div>
                <label htmlFor="note" className="block text-xs font-medium text-gray-300 mb-1.5">
                  Kısa Not (Opsiyonel)
                </label>
                <textarea
                  id="note"
                  rows={3}
                  value={formState.note}
                  onChange={(e) => setFormState({ ...formState, note: e.target.value })}
                  placeholder="Eklemek istediğiniz özel uzmanlık alanları veya güncelleme notları..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 resize-y"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-purple-500/25 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Dizine Ekleme Talebi Gönder
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* SSS (Sıkça Sorulan Sorular) Section */}
      <section className="py-20 relative bg-[#070b1a] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-3 tracking-tight">Sıkça Sorulan Sorular</h2>
            <p className="text-gray-400 text-sm sm:text-base">
              SEO ajansları ve seçim süreçleri hakkında merak edilen en temel soruların yanıtları.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden transition-all duration-200 hover:border-white/20"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-white text-base sm:text-lg">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-purple-400 transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-gray-300 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing / Son Adım Section */}
      <section className="py-20 relative bg-[#050814] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-purple-900/20 via-white/[0.02] to-blue-900/20 border border-white/10 backdrop-blur-md text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Doğru Ajansı Bulmak İçin Son Adım
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base">
              Bu dizinden 3–4 ajansı kısa listeye alın, her birine yukarıdaki soruları sorun ve gelen teklifleri iş kalemleri üzerinden yan yana koyun. Fiyattan önce yaklaşıma bakın: sitenizi gerçekten inceleyip öncelikli bir plan sunan ajans, hazır paket gönderen ajanstan her zaman bir adım öndedir.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto">
              Teklifleri birlikte değerlendirmek ya da ajansla çalışmadan önce sitenizin mevcut durumunu bağımsız bir gözle görmek isterseniz{" "}
              <Link href="/iletisim?audit=true" className="text-purple-400 hover:text-purple-300 font-semibold underline">
                ücretsiz SEO analizi
              </Link>{" "}
              talep edebilirsiniz. Yapay zekâ aramalarındaki görünürlüğünüz için ayrıca{" "}
              <Link href="/blog/turkiyenin-en-iyi-geo-ajanslari" className="text-purple-400 hover:text-purple-300 font-semibold underline">
                GEO ajansları
              </Link>{" "}
              listesine de göz atabilirsiniz.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/iletisim?audit=true"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-purple-500/25"
              >
                Ücretsiz SEO Analizi Talep Edin
              </Link>
              <Link
                href="/seo-danismanlik-fiyatlari"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-gray-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-200"
              >
                SEO Fiyatlandırma Rehberi
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Individual Agency Card Component
function AgencyCard({ agency }: { agency: Agency }) {
  const domain = formatDomain(agency.website);

  return (
    <div className="group h-full flex flex-col justify-between p-6 rounded-2xl bg-white/[0.025] hover:bg-white/[0.045] border border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-lg hover:shadow-purple-500/10">
      <div>
        {/* Top bar: Agency Name and City Badge */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors leading-snug">
            {agency.name}
          </h3>
          <span className="flex-shrink-0 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20">
            <MapPin className="w-3 h-3" />
            {agency.city}
          </span>
        </div>

        {/* Website Link */}
        <div className="mb-4">
          <a
            href={agency.website}
            target="_blank"
            rel="nofollow noopener"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-purple-400 hover:text-purple-300 transition-colors group/link"
          >
            <span>{domain}</span>
            <ExternalLink className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        </div>

        {/* Description clamped to 3 lines */}
        <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
          {agency.description}
        </p>
      </div>

      {/* Footer subtle highlight */}
      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
        <span className="flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          Doğrulanmış Ajans
        </span>
        <a
          href={agency.website}
          target="_blank"
          rel="nofollow noopener"
          className="text-gray-400 hover:text-white transition-colors"
        >
          Siteyi Ziyaret Et →
        </a>
      </div>
    </div>
  );
}
