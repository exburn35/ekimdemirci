import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE_CONFIG } from "@/lib/siteConfig";
import {
  Scale,
  FileCheck,
  ShieldAlert,
  Building2,
  AlertTriangle,
  FileText,
  Clock,
  ArrowRight,
  Mail,
  HelpCircle,
  Copyright,
  CheckCircle2,
  Ban,
  Globe2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kullanım Koşulları ve Hizmet Şartları | Ekim Demirci",
  description:
    "Ekim Demirci (ekimdemirci.com) web sitesi kullanım koşulları, telif hakları, sorumluluk reddi beyanı ve hizmet şartları. Sitemizi kullanmadan önce lütfen bu koşulları inceleyiniz.",
  alternates: {
    canonical: "https://ekimdemirci.com/kullanim-kosullari",
  },
  openGraph: {
    title: "Kullanım Koşulları ve Hizmet Şartları | Ekim Demirci",
    description:
      "ekimdemirci.com web sitesi kullanım koşulları, telif hakları ve sorumluluk reddi beyanı.",
    url: "https://ekimdemirci.com/kullanim-kosullari",
    type: "website",
    locale: "tr_TR",
    siteName: "Ekim Demirci",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kullanım Koşulları ve Hizmet Şartları | Ekim Demirci",
    description:
      "Ekim Demirci web sitesi kullanım koşulları ve telif hakları bilgisi.",
  },
};

const sections = [
  {
    id: "genel-kullanim",
    title: "1. Genel Hükümler ve Koşulların Kabulü",
    icon: Scale,
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">
          Bu web sitesi (<strong className="text-white">ekimdemirci.com</strong>), SEO ve GEO Danışmanı{" "}
          <strong className="text-white">Ekim Demirci</strong> tarafından işletilmektedir. Sitemizi ziyaret ederek, sayfalar arasında gezinerek, formları doldurarak veya yayınlanan blog, sözlük, araçlar ve ajans dizininden yararlanarak bu sayfada yer alan tüm Kullanım Koşulları&apos;nı kayıtsız şartsız kabul etmiş sayılırsınız.
        </p>
        <p className="text-gray-300 leading-relaxed text-sm">
          İşbu koşulların herhangi bir maddesini kabul etmiyorsanız lütfen web sitemizi kullanmayınız ve formlar aracılığıyla herhangi bir bilgi iletmeyiniz.
        </p>
      </>
    ),
  },
  {
    id: "hizmet-niteligi",
    title: "2. Hizmetlerin Niteliği ve Bilgilendirme Amacı",
    icon: FileText,
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">
          ekimdemirci.com sitesinde sunulan makaleler, rehberler, başarı hikayeleri (vaka analizleri), SEO sözlüğü tanımları ve hesaplayıcı araçlar genel bilgilendirme amacıyla paylaşılmaktadır.
        </p>
        <div className="bg-purple-950/20 border border-purple-500/20 rounded-xl p-4 sm:p-5 text-sm text-gray-300 space-y-2 mb-3">
          <p>
            <strong className="text-white">Sıralama ve Ciro Garantisi Beyanı:</strong> Arama motorları (Google, Bing vb.) ve yapay zeka sistemleri (ChatGPT, Gemini, Perplexity) kendi bağımsız algoritmalarıyla çalışan dinamik mekanizmalardır. Hiçbir SEO uzmanı veya ajansı üçüncü taraf arama sistemlerinde kesin 1. sıra garantisi veremez.
          </p>
          <p>
            Sitede paylaşılan taktik ve analizler tavsiye niteliğinde olup, her sitenin geçmişi, teknik altyapısı ve sektör rekabeti farklılık gösterir. Profesyonel danışmanlık hizmeti, taraflar arasında akdedilecek özel hizmet sözleşmesi şartlarına tabidir.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "fikri-mulkiyet",
    title: "3. Fikri ve Sınai Mülkiyet Hakları (Telif Hakları)",
    icon: Copyright,
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">
          ekimdemirci.com üzerinde yer alan tüm metinler, blog yazıları, grafikler, tablolar, vaka analizi verileri, tasarım ögeleri, logolar, yazılım kodları ve <strong className="text-white">&ldquo;Türkiye&apos;deki SEO Ajansları&rdquo;</strong> dizini derlemesi 5846 sayılı Fikir ve Sanat Eserleri Kanunu ve Türk Ceza Kanunu kapsamında korunmaktadır.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300 mb-4">
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-purple-300 font-semibold block mb-1">İzin Verilen Kullanım</span>
            İçeriklerden kısa paragraflar halinde makul alıntı yapılması, yalnızca ekimdemirci.com ilgili sayfasına <strong className="text-white">aktif, tıklanabilir ve dofollow bağlantı (link)</strong> verilmesi şartıyla serbesttir.
          </div>
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-rose-300 font-semibold block mb-1">Yasaklanan Kullanım</span>
            İçeriklerin tamamının veya önemli bir kısmının kopyalanması, otomatik botlarla çekilmesi (scraping), yapay zeka modelleriyle yeniden üretilerek kaynak gösterilmeden yayımlanması veya ticari amaçla satılması kesinlikle yasaktır.
          </div>
        </div>
      </>
    ),
  },
  {
    id: "ajanslar-dizini",
    title: "4. SEO Ajansları Dizini ve Harici Bağlantılar",
    icon: Building2,
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">
          <Link href="/seo-ajanslari" className="text-purple-400 hover:text-purple-300 underline font-semibold">
            /seo-ajanslari
          </Link>{" "}
          sayfasında sunulan Türkiye SEO Ajansları Dizini; Türkiye genelinde faaliyet gösteren ajansların taranması ve bilgilendirme amacıyla bir araya getirilmesiyle oluşturulmuştur.
        </p>
        <ul className="space-y-3 text-gray-300 text-sm mb-4">
          <li className="flex items-start gap-3 bg-white/[0.02] border border-white/5 p-3 rounded-xl">
            <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Tarafsız Bilgilendirme:</strong> Dizinde yer almak herhangi bir ajans için kefalet, kalite onayı, tavsiye veya sponsorluk anlamına gelmez. Benzer şekilde bir ajansın dizinde bulunmaması da yetersiz olduğu anlamına gelmez.
            </div>
          </li>
          <li className="flex items-start gap-3 bg-white/[0.02] border border-white/5 p-3 rounded-xl">
            <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Sorumluluk Sınırı:</strong> Ziyaretçilerin dizindeki ajanslarla veya web sitemizdeki harici bağlantılarla eriştiği üçüncü şahıslarla yapacağı görüşmeler, sözleşmeler, ödemeler ve hizmet süreçleri tamamen ilgili taraflar arasındadır. Ekim Demirci, üçüncü taraf ajansların hizmet kalitesi veya meydana gelebilecek ticari ihtilaflardan sorumlu tutulamaz.
            </div>
          </li>
          <li className="flex items-start gap-3 bg-white/[0.02] border border-white/5 p-3 rounded-xl">
            <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Güncelleme ve Kaldırma:</strong> Ajans bilgileri kamuya açık kaynaklardan derlenmiştir. Ajans yetkilileri, sayfa üzerindeki güncelleme formundan veya doğrudan e-posta ile iletişim kurarak bilgilerinin güncellenmesini veya dizinden çıkarılmasını talep edebilir.
            </div>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "kullanici-yukumlulukleri",
    title: "5. Kullanıcı Yükümlülükleri ve Yasaklanan Eylemler",
    icon: Ban,
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">
          Web sitemizi ziyaret eden tüm kullanıcılar aşağıdaki kurallara ve yasalara uymakla yükümlüdür:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300">
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <Ban className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <span>Formlara sahte, yanıltıcı veya üçüncü şahıslara ait izinsiz bilgiler girmemek.</span>
          </div>
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <Ban className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <span>Site altyapısını bozmaya yönelik siber saldırı, DDoS, exploit denemeleri yapmamak.</span>
          </div>
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <Ban className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <span>Otomatik botlar ve scraper&apos;lar ile sitenin bant genişliğini istismar etmemek.</span>
          </div>
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <Ban className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <span>Sitedeki içerik ve yazılımları tersine mühendislik (reverse engineering) işlemine tabi tutmamak.</span>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "sorumluluk-sinirlamasi",
    title: "6. Sorumluluğun Sınırlandırılması",
    icon: AlertTriangle,
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">
          Ekim Demirci, sitedeki bilgilerin doğruluğu ve güncelliğini sağlamak için azami gayreti göstermekle beraber;
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 mb-4 ml-2">
          <li>Arama motorlarının çekirdek algoritma güncellemelerinden (Core Update vb.) kaynaklanan sıralama değişimlerinden,</li>
          <li>Sitede yer alan genel tavsiyelerin üçüncü taraflarca hatalı uygulanmasından doğabilecek trafik veya ciro kayıplarından,</li>
          <li>Sunucu kesintileri, telekomünikasyon arızaları veya mücbir sebeplerden kaynaklanabilecek geçici erişim aksaklıklarından,</li>
        </ul>
        <p className="text-gray-300 leading-relaxed text-sm">
          doğrudan veya dolaylı hiçbir hukuki veya cezai sorumluluk kabul etmez.
        </p>
      </>
    ),
  },
  {
    id: "gizlilik-entegrasyonu",
    title: "7. Gizlilik ve Kişisel Verilerin Korunması",
    icon: FileCheck,
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">
          Web sitemizi kullanımınız sırasında kişisel verilerinizin toplanması ve işlenmesi, 6698 sayılı KVKK ve Gizlilik Politikamız çerçevesinde yürütülmektedir.
        </p>
        <p className="text-gray-300 text-sm">
          Detaylı bilgi için lütfen{" "}
          <Link href="/gizlilik-politikasi" className="text-purple-400 hover:text-purple-300 underline font-semibold">
            Gizlilik Politikası ve KVKK Aydınlatma Metni
          </Link>{" "}
          sayfamızı inceleyiniz. İşbu Kullanım Koşulları, Gizlilik Politikamızın ayrılmaz bir parçasıdır.
        </p>
      </>
    ),
  },
  {
    id: "degisiklik-hakki",
    title: "8. Koşullarda Değişiklik Yapma Hakkı",
    icon: Clock,
    content: (
      <>
        <p className="text-gray-300 leading-relaxed text-sm">
          Ekim Demirci, işbu Kullanım Koşulları&apos;nı, web sitesinde sunulan içerik ve hizmetleri önceden haber vermeksizin dilediği zaman güncelleme, değiştirme veya yayından kaldırma hakkını saklı tutar. Güncellenen koşullar sitemizde yayımlandığı tarihten itibaren geçerlilik kazanır. Kullanıcıların periyodik olarak bu sayfayı incelemesi tavsiye edilir.
        </p>
      </>
    ),
  },
  {
    id: "uygulanacak-hukuk",
    title: "9. Uygulanacak Hukuk ve Yetkili Mahkeme",
    icon: Scale,
    content: (
      <>
        <p className="text-gray-300 leading-relaxed text-sm">
          İşbu Kullanım Koşulları&apos;nın uygulanmasında, yorumlanmasında ve web sitesinin kullanımından doğabilecek her türlü ihtilaf ve uyuşmazlığın çözümünde <strong className="text-white">Türkiye Cumhuriyeti Kanunları</strong> geçerlidir. Uyuşmazlıkların hallinde <strong className="text-white">İstanbul (Çağlayan) Mahkemeleri ve İcra Daireleri</strong> münhasıran yetkilidir.
        </p>
      </>
    ),
  },
  {
    id: "iletisim-telif",
    title: "10. İletişim ve Telif Hakkı Bildirimleri",
    icon: Mail,
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4 text-sm">
          Kullanım koşulları, telif hakkı ihlali bildirimleri veya ajans dizini talepleri ile ilgili her türlü soru ve bildirim için aşağıdaki kanallar üzerinden doğrudan iletişime geçebilirsiniz:
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 text-sm text-gray-300 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <span className="text-gray-400 block text-xs uppercase tracking-wider mb-1">Yetkili</span>
            <span className="font-semibold text-white">{SITE_CONFIG.name}</span>
          </div>
          <div>
            <span className="text-gray-400 block text-xs uppercase tracking-wider mb-1">E-posta</span>
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-purple-400 hover:text-purple-300 font-medium">
              {SITE_CONFIG.email}
            </a>
          </div>
          <div>
            <span className="text-gray-400 block text-xs uppercase tracking-wider mb-1">Web Sitesi</span>
            <span className="text-white">https://ekimdemirci.com</span>
          </div>
          <div>
            <span className="text-gray-400 block text-xs uppercase tracking-wider mb-1">Konum</span>
            <span className="text-white">{SITE_CONFIG.address}</span>
          </div>
        </div>
      </>
    ),
  },
];

export default function TermsOfUsePage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Kullanım Koşulları", href: "/kullanim-kosullari" }]} />

      <main className="bg-[#0a0f25] text-white relative min-h-screen pb-24 overflow-hidden">
        {/* Glow ambient background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-96 left-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 sm:pt-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium mb-6">
              <Scale className="w-4 h-4 text-indigo-400" />
              <span>Kullanıcı Sözleşmesi &amp; Şartlar</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
              Web Sitesi Kullanım Koşulları
            </h1>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6">
              ekimdemirci.com web sitesini ziyaret ederek, sunduğum rehberlerden, vaka analizlerinden, ücretsiz SEO araçlarından ve SEO ajansları dizininden yararlanarak bu sayfadaki koşulları kabul etmiş sayılırsınız.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-gray-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <Clock className="w-3.5 h-3.5 text-indigo-400" /> Son Güncelleme: 2026
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <Globe2 className="w-3.5 h-3.5 text-indigo-400" /> Tüm Ziyaretçiler İçin Geçerli
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <Scale className="w-3.5 h-3.5 text-indigo-400" /> Yetkili Mahkeme: İstanbul
              </span>
            </div>
          </div>

          {/* Quick Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
            <div className="bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-indigo-500/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 text-indigo-400">
                <Copyright className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-white mb-2">Telif Hakları</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Sitedeki analizler, yazılar ve dizin verileri özgün içerik olup izinsiz kopyalanamaz veya scraping yapılamaz.
              </p>
            </div>

            <div className="bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-purple-500/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 text-purple-400">
                <Building2 className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-white mb-2">Ajanslar Dizini</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Dizinde yer alan üçüncü taraf ajanslar bilgilendirme amaçlıdır; hizmet süreçleri tarafların kendi sorumluluğundadır.
              </p>
            </div>

            <div className="bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-emerald-500/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-white mb-2">Sorumluluk Sınırı</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Arama motoru algoritmalarının bağımsız güncellemelerinden doğabilecek dalgalanmalardan sorumluluk doğmaz.
              </p>
            </div>
          </div>

          {/* Table of Contents Quick Nav */}
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-indigo-300 mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4" /> Koşul Maddeleri
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-sm">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-gray-400 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-indigo-400 group-hover:translate-x-1 transition-transform" />
                  <span className="truncate">{s.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Detailed Policy Sections */}
          <div className="space-y-8">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <article
                  key={section.id}
                  id={section.id}
                  className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md scroll-mt-28 hover:border-white/20 transition-all"
                >
                  <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-white/5">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">
                      {section.title}
                    </h2>
                  </div>
                  <div>{section.content}</div>
                </article>
              );
            })}
          </div>

          {/* Help & Contact Card */}
          <div className="mt-14 bg-gradient-to-r from-indigo-900/30 via-purple-900/20 to-indigo-900/30 border border-indigo-500/30 rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center mx-auto mb-5 text-indigo-300">
                <HelpCircle className="w-7 h-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Kullanım Şartlarıyla İlgili Bir Sorunuz mu Var?
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                İçerik alıntıları, iş birliği teklifleri, ajans dizini bildirimleri veya sözleşme şartları ile ilgili her türlü konuyu bana iletebilirsiniz.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-xl text-sm transition-all shadow-lg hover:shadow-indigo-500/25"
                >
                  <Mail className="w-4 h-4" />
                  {SITE_CONFIG.email}
                </a>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl text-sm border border-white/10 transition-all"
                >
                  İletişim Sayfası
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
