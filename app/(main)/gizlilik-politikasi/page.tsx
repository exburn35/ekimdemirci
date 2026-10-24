import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE_CONFIG } from "@/lib/siteConfig";
import {
  ShieldCheck,
  Lock,
  FileText,
  Eye,
  UserCheck,
  Server,
  CheckCircle2,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Database,
  Share2,
  Cookie,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Gizlilik Politikası ve KVKK Aydınlatma Metni | Ekim Demirci",
  description:
    "Ekim Demirci (ekimdemirci.com) Gizlilik Politikası ve 6698 sayılı KVKK aydınlatma metni. Kişisel verilerinizin toplanması, işlenmesi, korunması ve yasal haklarınız hakkında detaylı bilgi edinin.",
  alternates: {
    canonical: "https://ekimdemirci.com/gizlilik-politikasi",
  },
  openGraph: {
    title: "Gizlilik Politikası ve KVKK Aydınlatma Metni | Ekim Demirci",
    description:
      "Ekim Demirci (ekimdemirci.com) Gizlilik Politikası ve 6698 sayılı KVKK aydınlatma metni. Kişisel verilerinizin korunması ve haklarınız.",
    url: "https://ekimdemirci.com/gizlilik-politikasi",
    type: "website",
    locale: "tr_TR",
    siteName: "Ekim Demirci",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gizlilik Politikası ve KVKK Aydınlatma Metni | Ekim Demirci",
    description:
      "Ekim Demirci web sitesi gizlilik politikası, çerez ilkeleri ve KVKK aydınlatma metni.",
  },
};

const sections = [
  {
    id: "veri-sorumlusu",
    title: "1. Veri Sorumlusu Bilgilendirmesi",
    icon: ShieldCheck,
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">
          6698 sayılı Kişisel Verilerin Korunması Kanunu (&ldquo;KVKK&rdquo;) ve ilgili mevzuat uyarınca,{" "}
          <strong className="text-white">ekimdemirci.com</strong> alan adlı web sitesi üzerinden toplanan kişisel verileriniz, &ldquo;Veri Sorumlusu&rdquo; sıfatıyla{" "}
          <strong className="text-white">Ekim Demirci</strong> tarafından işlenmektedir.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300">
          <div>
            <span className="text-gray-400 block text-xs uppercase tracking-wider mb-1">Veri Sorumlusu</span>
            <span className="font-semibold text-white">{SITE_CONFIG.name}</span>
          </div>
          <div>
            <span className="text-gray-400 block text-xs uppercase tracking-wider mb-1">Unvan / Rol</span>
            <span className="text-white">{SITE_CONFIG.title}</span>
          </div>
          <div>
            <span className="text-gray-400 block text-xs uppercase tracking-wider mb-1">İletişim E-posta</span>
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-purple-400 hover:text-purple-300 transition-colors">
              {SITE_CONFIG.email}
            </a>
          </div>
          <div>
            <span className="text-gray-400 block text-xs uppercase tracking-wider mb-1">Konum / Yerleşim</span>
            <span className="text-white">{SITE_CONFIG.address}</span>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "toplanan-veriler",
    title: "2. Toplanan Kişisel Veriler ve Veri Kategorileri",
    icon: Database,
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">
          Sitemizi ziyaret ettiğinizde, iletişim ve ücretsiz analiz formlarını doldurduğunuzda veya SEO ajansları dizinine başvuru yaptığınızda aşağıdaki kategorilerde kişisel veriler toplanabilmektedir:
        </p>
        <ul className="space-y-3 text-gray-300 text-sm">
          <li className="flex items-start gap-3 bg-white/[0.02] border border-white/5 p-3.5 rounded-xl">
            <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Kimlik ve İletişim Bilgileri:</strong> İletişim formu, ücretsiz SEO analiz/audit talebi veya ajans dizini başvurusu doldururken paylaştığınız ad, soyad, e-posta adresi ve telefon numarası.
            </div>
          </li>
          <li className="flex items-start gap-3 bg-white/[0.02] border border-white/5 p-3.5 rounded-xl">
            <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Web Sitesi ve Proje Bilgileri:</strong> SEO analizi veya danışmanlık teklifi için iletilen web sitesi adresi (URL), sektör, şirket adı ve hedeflenen organik büyüme beklentileri.
            </div>
          </li>
          <li className="flex items-start gap-3 bg-white/[0.02] border border-white/5 p-3.5 rounded-xl">
            <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">İşlem ve Kullanım Verileri:</strong> IP adresi, cihaz ve tarayıcı bilgisi, işletim sistemi, ziyaret edilen sayfalar, sitede kalma süresi ve yönlendiren kaynak (referral URL) gibi teknik gezinme verileri.
            </div>
          </li>
          <li className="flex items-start gap-3 bg-white/[0.02] border border-white/5 p-3.5 rounded-xl">
            <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Mesaj ve Talep İçerikleri:</strong> İletişim kutuları, WhatsApp veya e-posta yoluyla ilettiğiniz özel mesajlar, sorular ve geri bildirimler.
            </div>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "isleme-amaclari",
    title: "3. Kişisel Verilerin İşlenme Amaçları",
    icon: FileText,
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">
          Toplanan kişisel verileriniz KVKK&apos;nın 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları dahilinde aşağıdaki amaçlarla işlenmektedir:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-300">
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-purple-300 font-semibold block mb-1">Danışmanlık Hizmetleri</span>
            SEO Danışmanlığı, GEO (Generative Engine Optimization), Teknik SEO ve İçerik Stratejisi süreçlerinin yürütülmesi ve tekliflendirilmesi.
          </div>
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-purple-300 font-semibold block mb-1">Analiz ve Audit Talepleri</span>
            Ücretsiz site analizi taleplerinizin teknik olarak incelenmesi ve hazırlanan raporun tarafınıza ulaştırılması.
          </div>
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-purple-300 font-semibold block mb-1">İletişim ve Destek</span>
            İlettiğiniz soru, öneri ve taleplere hızlı ve etkili geri dönüş sağlanması.
          </div>
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-purple-300 font-semibold block mb-1">Ajans Dizini Doğrulaması</span>
            Türkiye&apos;deki SEO Ajansları dizinine iletilen ekleme ve güncelleme taleplerinin kontrol edilmesi.
          </div>
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-purple-300 font-semibold block mb-1">Site Güvenliği ve Performans</span>
            Web sitesinin teknik altyapısının korunması, siber tehditlerin önlenmesi ve kullanıcı deneyiminin optimize edilmesi.
          </div>
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-purple-300 font-semibold block mb-1">Yasal Yükümlülükler</span>
            Yetkili kamu kurum ve kuruluşları tarafından talep edilen yasal bildirimlerin mevzuata uygun şekilde yerine getirilmesi.
          </div>
        </div>
      </>
    ),
  },
  {
    id: "hukuki-sebepler",
    title: "4. Veri Toplamanın Yöntemi ve Hukuki Sebepleri",
    icon: Lock,
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">
          Kişisel verileriniz; web sitemiz üzerindeki iletişim ve analiz formları, e-posta iletileri, telefon görüşmeleri, mesajlaşma araçları ve sunucu günlükleri aracılığıyla tamamen veya kısmen otomatik yollarla elektronik ortamda toplanmaktadır.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          Bu veriler, KVKK&apos;nın 5. maddesinde yer alan aşağıdaki hukuki sebeplere dayanılarak işlenmektedir:
        </p>
        <div className="space-y-2.5 text-sm text-gray-300">
          <div className="p-3 rounded-xl bg-purple-950/20 border border-purple-500/20">
            <strong className="text-white">a) Sözleşmenin Kurulması ve İfası:</strong> Doğrudan doğruya bir danışmanlık veya analiz hizmeti talebinize yanıt verilmesi ve teklif süreçlerinin yürütülmesi.
          </div>
          <div className="p-3 rounded-xl bg-purple-950/20 border border-purple-500/20">
            <strong className="text-white">b) Veri Sorumlusunun Meşru Menfaati:</strong> Temel hak ve özgürlüklerinize zarar vermemek kaydıyla, sitemizin güvenliğinin sağlanması ve sunulan hizmet kalitesinin artırılması.
          </div>
          <div className="p-3 rounded-xl bg-purple-950/20 border border-purple-500/20">
            <strong className="text-white">c) Açık Rıza:</strong> Pazarlama iletişimi veya isteğe bağlı analiz formları vasıtasıyla onayladığınız durumlar.
          </div>
          <div className="p-3 rounded-xl bg-purple-950/20 border border-purple-500/20">
            <strong className="text-white">ç) Hukuki Yükümlülük:</strong> Kanunlarda açıkça öngörülen resmi bilgi paylaşımı zorunlulukları.
          </div>
        </div>
      </>
    ),
  },
  {
    id: "veri-aktarimi",
    title: "5. Kişisel Verilerin Aktarılması",
    icon: Share2,
    content: (
      <>
        <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-4 mb-4 text-emerald-200 text-sm flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>
            <strong>Kesin Gizlilik İlkesi:</strong> Kişisel verileriniz hiçbir koşulda ticari reklam, veri simsarlığı veya pazarlama amacıyla 3. şahıslara satılmaz, kiralanmaz veya devredilmez.
          </span>
        </div>
        <p className="text-gray-300 leading-relaxed text-sm mb-3">
          Verileriniz yalnızca hizmetin teknik olarak yürütülebilmesi amacıyla asgari düzeyde ve gizlilik sözleşmeleri altında şu taraflarla paylaşılabilir:
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 ml-2">
          <li>
            <strong className="text-white">Teknik Altyapı Sağlayıcıları:</strong> Güvenli sunucu barındırma (hosting), SSL altyapısı ve kurumsal e-posta servis sağlayıcıları.
          </li>
          <li>
            <strong className="text-white">Analitik Servisleri:</strong> Sitemizin ziyaretçi istatistiklerini anonim olarak derleyen analiz servisleri (örn. Google Analytics 4).
          </li>
          <li>
            <strong className="text-white">Yetkili Makamlar:</strong> Kanunen yetkili adli merciler, mahkemeler ve kolluk kuvvetlerinin usulüne uygun talepleri doğrultusunda yasal zorunluluk gereği.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "cerezler",
    title: "6. Çerezler (Cookies) ve İzleme Teknolojileri",
    icon: Cookie,
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">
          ekimdemirci.com, kullanıcı deneyimini zenginleştirmek, sayfa açılış hızlarını artırmak ve ziyaretçi istatistiklerini anlamak için çerezlerden yararlanır:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300 mb-4">
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-white font-semibold block mb-1">Zorunlu Çerezler</span>
            Sitenin düzgün çalışması, güvenli form iletimi ve navigasyon için elzem çerezlerdir.
          </div>
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-white font-semibold block mb-1">Analitik Çerezler</span>
            Ziyaretçi sayısı, hemen çıkma oranı ve en çok okunan blog içeriklerini anonim olarak ölçümlemeye yarar.
          </div>
        </div>
        <p className="text-gray-300 text-sm">
          Tarayıcınızın ayarlarından dilediğiniz zaman çerezleri devre dışı bırakabilir veya silebilirsiniz. Çerezlerin kapatılması sitenin temel kullanımını engellemez. Ayrıntılı bilgi için{" "}
          <Link href="/cerez-politikasi" className="text-purple-400 hover:text-purple-300 underline font-medium">
            Çerez Politikası
          </Link>{" "}
          sayfamızı inceleyebilirsiniz.
        </p>
      </>
    ),
  },
  {
    id: "veri-guvenligi",
    title: "7. Veri Güvenliği ve Saklama Süresi",
    icon: Server,
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">
          Kişisel verilerinizin yetkisiz erişime, kaybolmaya, çalınmaya veya değiştirilmeye karşı korunması için 256-bit SSL şifreleme sertifikası ve modern güvenlik duvarı korumaları uygulanmaktadır.
        </p>
        <p className="text-gray-300 leading-relaxed text-sm mb-4">
          Verileriniz, işleme amacının gerektirdiği süre boyunca ve Türk Ticaret Kanunu, Vergi Usul Kanunu ile KVKK hükümleri uyarınca belirlenen yasal zamanaşımı süreleri saklanır. Sürenin dolması veya veri işleme şartlarının ortadan kalkması halinde verileriniz resen veya talebiniz üzerine güvenli biçimde silinir, yok edilir ya da anonimleştirilir.
        </p>
      </>
    ),
  },
  {
    id: "kvkk-haklari",
    title: "8. KVKK Madde 11 Kapsamındaki Haklarınız",
    icon: UserCheck,
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">
          6698 sayılı Kanun&apos;un 11. maddesi gereğince, veri sahibi olarak Ekim Demirci&apos;ye başvurarak şu hakları kullanabilirsiniz:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-300 mb-4">
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <span>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</span>
          </div>
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <span>İşlenmişse buna ilişkin ayrıntılı bilgi talep etme,</span>
          </div>
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <span>İşlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme,</span>
          </div>
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <span>Yurt içinde veya yurt dışında verilerin aktarıldığı 3. kişileri bilme,</span>
          </div>
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <span>Eksik veya yanlış işlenmişse düzeltilmesini isteme,</span>
          </div>
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <span>KVKK 7. madde uyarınca verilerin silinmesini veya yok edilmesini isteme,</span>
          </div>
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <span>Düzeltme veya silme işlemlerinin aktarılan üçüncü kişilere bildirilmesini isteme,</span>
          </div>
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <span>Kanuna aykırı işleme sebebiyle zarara uğranması halinde zararın giderilmesini talep etme.</span>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "basvuru-iletisim",
    title: "9. Başvuru Yolu ve İletişim",
    icon: Mail,
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">
          Kişisel Verilerin Korunması Kanunu kapsamındaki haklarınızı kullanmak üzere taleplerinizi; kimliğinizi tevsik edici belgelerle birlikte doğrudan{" "}
          <a href={`mailto:${SITE_CONFIG.email}`} className="text-purple-400 hover:text-purple-300 font-semibold underline">
            {SITE_CONFIG.email}
          </a>{" "}
          e-posta adresime iletebilirsiniz.
        </p>
        <p className="text-gray-300 leading-relaxed text-sm">
          Başvurularınız, talebin niteliğine göre en kısa sürede ve en geç <strong className="text-white">30 (otuz) gün</strong> içerisinde ücretsiz olarak sonuçlandırılacaktır. İşlemin ayrıca bir maliyet gerektirmesi halinde Kişisel Verileri Koruma Kurulu tarafından belirlenen tarifedeki ücret alınabilir.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Gizlilik Politikası", href: "/gizlilik-politikasi" }]} />

      <main className="bg-[#0a0f25] text-white relative min-h-screen pb-24 overflow-hidden">
        {/* Glow ambient background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-96 right-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 sm:pt-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4 text-purple-400" />
              <span>KVKK &amp; Gizlilik Güvencesi</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
              Gizlilik Politikası ve KVKK Aydınlatma Metni
            </h1>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6">
              ekimdemirci.com ziyaretçilerimin ve danışanlarımın kişisel verilerinin korunması, gizliliği ve güvenliği önceliğimdir. Verilerinizin toplanma amacı, saklanması ve haklarınız hakkında detaylı bilgilere buradan ulaşabilirsiniz.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-gray-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <Clock className="w-3.5 h-3.5 text-purple-400" /> Son Güncelleme: 2026
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <Lock className="w-3.5 h-3.5 text-purple-400" /> 256-Bit SSL Koruması
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-purple-400" /> İstanbul, Türkiye
              </span>
            </div>
          </div>

          {/* Quick Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
            <div className="bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-purple-500/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 text-purple-400">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-white mb-2">Şeffaf Veri İşleme</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Yalnızca hizmet süreçleri ve analizler için gerekli asgari veriler toplanır; verileriniz asla 3. taraflara satılmaz.
              </p>
            </div>

            <div className="bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-purple-500/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 text-indigo-400">
                <Lock className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-white mb-2">Yüksek Güvenlik</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Form iletileri ve web trafiği SSL şifreleme ve modern güvenlik protokolleriyle yetkisiz erişimlere karşı korunur.
              </p>
            </div>

            <div className="bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-purple-500/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400">
                <UserCheck className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-white mb-2">KVKK 11 Hakları</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Kişisel verilerinizi dilediğiniz zaman tek bir e-posta ile sorgulayabilir, güncelleyebilir veya silinmesini talep edebilirsiniz.
              </p>
            </div>
          </div>

          {/* Table of Contents Quick Nav */}
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-purple-300 mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4" /> Politika Başlıkları
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-sm">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-gray-400 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-1 transition-transform" />
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
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
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
          <div className="mt-14 bg-gradient-to-r from-purple-900/30 via-indigo-900/20 to-purple-900/30 border border-purple-500/30 rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center mx-auto mb-5 text-purple-300">
                <HelpCircle className="w-7 h-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Gizlilik veya Verilerinizle İlgili Bir Sorunuz mu Var?
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                Kişisel verilerinizin korunması, KVKK kapsamındaki talepleriniz veya bu politika hakkında her türlü soru için doğrudan benimle iletişime geçebilirsiniz.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold rounded-xl text-sm transition-all shadow-lg hover:shadow-purple-500/25"
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
