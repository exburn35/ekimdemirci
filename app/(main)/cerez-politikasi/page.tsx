import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE_CONFIG } from "@/lib/siteConfig";
import {
  Cookie,
  ShieldCheck,
  Sliders,
  Settings,
  Eye,
  CheckCircle2,
  Mail,
  ArrowRight,
  Clock,
  HelpCircle,
  BarChart3,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Çerez Politikası (Cookie Policy) | Ekim Demirci",
  description:
    "Ekim Demirci (ekimdemirci.com) web sitesinde kullanılan çerez türleri, kullanım amaçları ve çerez tercihlerinizi nasıl yönetebileceğinize dair detaylı bilgilendirme.",
  alternates: {
    canonical: "https://ekimdemirci.com/cerez-politikasi",
  },
  openGraph: {
    title: "Çerez Politikası | Ekim Demirci",
    description: "ekimdemirci.com çerez kullanım ilkeleri ve tarayıcı yönetimi rehberi.",
    url: "https://ekimdemirci.com/cerez-politikasi",
    type: "website",
    locale: "tr_TR",
    siteName: "Ekim Demirci",
  },
  twitter: {
    card: "summary_large_image",
    title: "Çerez Politikası | Ekim Demirci",
    description: "ekimdemirci.com web sitesi çerez kullanım rehberi.",
  },
};

const cookieTypes = [
  {
    title: "Zorunlu ve Güvenlik Çerezleri",
    badge: "Her Zaman Aktif",
    icon: Lock,
    desc: "Sitenin temel işlevlerini yerine getirebilmesi, güvenli oturum yönetimi ve formların güvenle iletilmesi için elzemdir. Bu çerezler olmadan web sitesi düzgün çalışamaz.",
  },
  {
    title: "Performans ve Analitik Çerezleri",
    badge: "Anonim İstatistik",
    icon: BarChart3,
    desc: "Ziyaretçilerin siteyi nasıl kullandığını, hangi blog ve sayfaların daha çok okunduğunu anonim olarak ölçümlememi sağlar (Google Analytics 4). Kimliğinizi doğrudan belirlemez.",
  },
  {
    title: "İşlevsellik ve Tercih Çerezleri",
    badge: "Kullanıcı Deneyimi",
    icon: Sliders,
    desc: "Ziyaretçilerin site üzerindeki tercihlerini (örneğin tema, dil veya daha önce kapatılan uyarı bildirimlerini) hatırlayarak daha akıcı bir deneyim sunar.",
  },
];

export default function CookiesPolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Çerez Politikası", href: "/cerez-politikasi" }]} />

      <main className="bg-canvas text-ink relative min-h-screen pb-24 overflow-hidden">
        {/* Glow ambient background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#161b2e08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 sm:pt-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-700 text-xs sm:text-sm font-medium mb-6">
              <Cookie className="w-4 h-4 text-purple-600" />
              <span>Çerez Kullanım İlkeleri</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 text-ink">
              Çerez (Cookie) Politikası
            </h1>
            <p className="text-ink-muted text-base sm:text-lg leading-relaxed mb-6">
              ekimdemirci.com olarak, kullanıcı deneyiminizi iyileştirmek, sitenin güvenliğini sağlamak ve analizler gerçekleştirmek için çerezlerden yararlanıyorum.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-ink-muted">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-line">
                <Clock className="w-3.5 h-3.5 text-purple-600" /> Son Güncelleme: 2026
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-line">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-600" /> KVKK &amp; GDPR İlkelerine Uyumlu
              </span>
            </div>
          </div>

          {/* Intro Section */}
          <div className="bg-white border border-line rounded-2xl p-6 sm:p-8 backdrop-blur-md mb-8">
            <h2 className="text-xl font-bold text-ink mb-3">Çerez (Cookie) Nedir?</h2>
            <p className="text-ink-soft text-sm leading-relaxed mb-4">
              Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza (bilgisayar, tablet veya akıllı telefon) kaydedilen küçük metin dosyalarıdır. Çerezler web sitesinin verimli çalışmasını sağlar, oturum güvenliğini korur ve ziyaretçilerin kullanım alışkanlıklarına ilişkin anonim istatistiki veriler sunar.
            </p>
            <p className="text-ink-soft text-sm leading-relaxed">
              ekimdemirci.com üzerinde kullanılan çerezler hiçbir surette kişisel şifrelerinizi depolamaz veya cihazınızdaki özel dosyalarınıza erişim sağlamaz.
            </p>
          </div>

          {/* Types of Cookies */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {cookieTypes.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white border border-line rounded-2xl p-6 backdrop-blur-md hover:border-purple-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-white border border-line text-ink-soft">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-ink mb-2">{item.title}</h3>
                    <p className="text-ink-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Cookie Management */}
          <div className="bg-white border border-line rounded-2xl p-6 sm:p-8 backdrop-blur-md mb-8">
            <h2 className="text-xl font-bold text-ink mb-4 flex items-center gap-2">
              <Settings className="w-5 h-5 text-purple-600" />
              Çerezleri Nasıl Yönetebilir veya Silebilirsiniz?
            </h2>
            <p className="text-ink-soft text-sm leading-relaxed mb-4">
              Çoğu internet tarayıcısı çerezleri varsayılan olarak kabul edecek şekilde yapılandırılmıştır. Ancak dilediğiniz zaman tarayıcı ayarlarınızı değiştirerek çerezleri engelleyebilir veya cihazınıza kaydedilen mevcut çerezleri silebilirsiniz:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs sm:text-sm text-ink-soft">
              <div className="p-3 rounded-xl bg-white border border-line">
                <strong className="text-ink block mb-1">Google Chrome</strong>
                Ayarlar &gt; Gizlilik ve Güvenlik &gt; Çerezler ve Diğer Site Verileri
              </div>
              <div className="p-3 rounded-xl bg-white border border-line">
                <strong className="text-ink block mb-1">Mozilla Firefox</strong>
                Seçenekler &gt; Gizlilik ve Güvenlik &gt; Çerezler ve Site Verileri
              </div>
              <div className="p-3 rounded-xl bg-white border border-line">
                <strong className="text-ink block mb-1">Apple Safari</strong>
                Tercihler &gt; Gizlilik &gt; Tüm Çerezleri Engelle
              </div>
              <div className="p-3 rounded-xl bg-white border border-line">
                <strong className="text-ink block mb-1">Microsoft Edge</strong>
                Ayarlar &gt; Tanımlama Bilgileri ve Site İzinleri
              </div>
            </div>
            <p className="text-ink-muted text-xs mt-4">
              * Not: Zorunlu çerezlerin tarayıcı üzerinden engellenmesi halinde sitenin bazı formları veya işlevleri beklenen performansta çalışmayabilir.
            </p>
          </div>

          {/* Contact Box */}
          <div className="bg-gradient-to-r from-purple-900/30 via-indigo-900/20 to-purple-900/30 border border-purple-500/30 rounded-3xl p-8 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-ink mb-2">
              Çerez Politikası Hakkında Sorularınız mı Var?
            </h2>
            <p className="text-ink-soft text-sm max-w-xl mx-auto mb-6">
              Çerezler veya gizlilik esaslarıyla ilgili her türlü konu için doğrudan benimle iletişime geçebilirsiniz.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 text-white font-semibold rounded-xl text-sm transition-all shadow-lg"
              >
                <Mail className="w-4 h-4" />
                {SITE_CONFIG.email}
              </a>
              <Link
                href="/gizlilik-politikasi"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink/[0.04] hover:bg-ink/5 text-ink font-semibold rounded-xl text-sm border border-line transition-all"
              >
                Gizlilik Politikası
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
