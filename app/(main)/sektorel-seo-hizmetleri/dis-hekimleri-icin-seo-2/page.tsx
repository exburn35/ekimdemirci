import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Building2,
  CalendarCheck,
  ClipboardCheck,
  Eye,
  EyeOff,
  FileHeart,
  Globe2,
  HeartPulse,
  MapPin,
  Megaphone,
  MessageSquareWarning,
  MousePointerClick,
  PhoneCall,
  Scale,
  Search,
  ShieldCheck,
  Siren,
  Stethoscope,
  UserRound,
  Users,
  Wallet,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ServicePageLayout from "@/components/ServicePageLayout";
import LocalPackDemo from "@/components/service/LocalPackDemo";
import {
  DemoSection,
  DemoSide,
  DemoWindow,
  ExampleGrid,
  GuideDefinition,
  GuideH2,
  GuideLink,
  GuideShell,
  ProcessTimeline,
  ProofBand,
  RelatedBand,
  ScopeGrid,
  SectionHead,
  type Faq,
} from "@/components/service/ServiceBlocks";
import { seoPlans, tl } from "@/lib/pricing";

const PAGE_URL = "https://ekimdemirci.com/sektorel-seo-hizmetleri/dis-hekimleri-icin-seo-2";
const REGULATION_URL = "https://www.resmigazete.gov.tr/eskiler/2025/11/20251112-2.htm";
const startPrice = tl(seoPlans[0].price);

export const metadata: Metadata = {
  title: "Diş Hekimi ve Diş Kliniği SEO Hizmeti",
  description:
    "Diş klinikleri için 2025 tanıtım yönetmeliğine uygun SEO: tedavi ve şikâyet sayfaları, hekim profilleri, Google Haritalar, yorum kuralları ve yapay zeka görünürlüğü.",
  alternates: {
    canonical: "/sektorel-seo-hizmetleri/dis-hekimleri-icin-seo-2",
  },
  openGraph: {
    title: "Diş Hekimi ve Diş Kliniği SEO Hizmeti | Ekim Demirci",
    description:
      "Hasta “implant” ya da “kadıköy diş kliniği” diye aradığında kliniğinizin karşısına çıkması için yönetmeliğe uygun tedavi sayfaları, hekim profilleri ve yerel SEO.",
  },
  twitter: {
    title: "Diş Hekimi ve Diş Kliniği SEO Hizmeti | Ekim Demirci",
    description:
      "Hasta “implant” ya da “kadıköy diş kliniği” diye aradığında kliniğinizin karşısına çıkması için yönetmeliğe uygun tedavi sayfaları, hekim profilleri ve yerel SEO.",
  },
};

const faqItems: Faq[] = [
  {
    question: "Yeni tanıtım yönetmeliği diş klinikleri için SEO yapmayı yasaklıyor mu?",
    answer:
      "Hayır. 12 Kasım 2025'te yürürlüğe giren Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Faaliyetleri Hakkında Yönetmelik reklamı yasaklıyor ama bilgilendirmeye izin veriyor. Klinik adresi, iletişim bilgileri, çalışma saatleri, hekimlerin unvanları ve sağlığı koruyucu bilgiler yayımlanabiliyor. SEO, bu bilgilendirici içeriğin arama motorlarında doğru bulunmasını sağlıyor. Önemli olan fiyat, kampanya, üstünlük iddiası ve hasta teşekkürü gibi yasak unsurlara yer vermemek.",
  },
  {
    question: "Tedavi fiyatlarını sitemde yazabilir miyim?",
    answer:
      "Yurt içine yönelik tanıtımda hayır. Yönetmeliğin 5/1-m maddesine göre tanıtım ve bilgilendirme faaliyetlerinde ücret, indirim, kampanya veya promosyon bilgisine yer verilemiyor. Bunun yerine tedavinin nasıl ilerlediğini ve muayenede hangi etkenlerin netleştiğini anlatan bir bölüm öneriyorum. Yetki belgesi olan kliniklerin yurt dışına yönelik sağlık turizmi tanıtımında ise farklı kurallar geçerli.",
  },
  {
    question: "Hasta yorumlarını sitemde gösterebilir miyim?",
    answer:
      "Yurt içine yönelik sitede önermiyorum. Yönetmelik, hasta ya da yakınlarının teşekkür ve memnuniyet ifadelerinin internet sitelerinde reklam niteliğinde paylaşılmasını yasaklıyor. Ayrıca Google, bir işletmenin kendi sitesinde gösterdiği kendi yorumları için yıldızlı arama sonucu göstermiyor. Yorumların doğal yeri Google İşletme Profili.",
  },
  {
    question: "Hekim profilinde “implant uzmanı” yazabilir miyim?",
    answer:
      "Hayır. Yönetmeliğe göre yalnızca kanunla tanınan uzmanlık unvanları kullanılabiliyor; sertifika ve benzeri eğitim belgeleri unvan olarak yazılamıyor. Hekimin gerçek unvanını yazıp aldığı eğitimleri, sertifikaları ve ilgilendiği tedavileri ayrı bir bölümde göstermek hem kurallara uygun hem de hasta için daha açıklayıcı.",
  },
  {
    question: "Öncesi-sonrası görselleri kullanabilir miyim?",
    answer:
      "Sıkı şartlarla mümkün. Yönetmeliğin 7. maddesi hastanın yazılı onamını, görsellerin aynı ortam ve teknik koşullarda çekilmesini, işlem tarihlerinin belirtilmesini ve sonuçların kişiden kişiye değişebileceğini söyleyen uyarı metnini zorunlu tutuyor. Görseller sonradan değiştirilemiyor ve paylaşımlar yoruma kapatılmalı. Bu şartlar sağlanamıyorsa görsel kullanmamayı öneriyorum.",
  },
  {
    question: "Klinik ve hekimler için ayrı Google İşletme profili açılabilir mi?",
    answer:
      "Google'ın kurallarına göre bireysel hekimler kendi profillerine sahip olabiliyor. Ancak klinikte hastaya hizmet veren tek hekim sizseniz Google, klinik ve hekim için tek bir profil açılmasını ve adın “Klinik Adı: Dt. Ad Soyad” biçiminde yazılmasını öneriyor. Birden fazla hekim varsa hangi yapının uygun olduğuna kliniğin durumuna göre birlikte karar veriyoruz.",
  },
  {
    question: "Google Ads varken diş kliniği SEO'suna neden ihtiyaç var?",
    answer:
      "Yeni yönetmelik, sağlık kuruluşlarının arama motorlarında öne çıkmaya yönelik ücretli sponsorlu kayıtlar kullanmasını kısıtladı; yeni açılan tesisler için ilk bir ay istisna tanındı. Bu da organik sonuçları ve Google Haritalar'ı diş klinikleri için en önemli görünürlük kanalı haline getirdi. Reklam kanallarının daraldığı bir dönemde kalıcı görünürlük ancak SEO ile kuruluyor.",
  },
  {
    question: "Diş kliniği SEO'sunun sonuçları ne zaman görülür?",
    answer:
      "Google İşletme profili ve teknik düzenlemelerin etkisi genellikle ilk aylarda görülmeye başlıyor. Bir özel diş kliniğiyle yaptığım dört aylık çalışmada organik tıklamalar ve gösterimler iki katına çıktı; ama her kliniğin başlangıç noktası ve semtindeki rekabet farklı. İlk analizden sonra size kendi durumunuza göre gerçekçi bir takvim söylüyorum.",
  },
  {
    question: "Diş kliniği SEO hizmetinin ücreti ne kadar?",
    answer: `SEO danışmanlığım aylık ${startPrice}'den başlıyor; ücret, sitenin büyüklüğüne, tedavi sayısına ve şube sayısına göre değişiyor. Sözleşme yapmıyorum ve minimum çalışma süresi yok. Paketlerin içeriğini SEO fiyatları sayfamda açıkça yazdım.`,
  },
  {
    question: "Google'da ya da haritada ilk sıra garantisi veriyor musunuz?",
    answer:
      "Hayır, kimse veremez. Google'ın sıralamasını hiçbir danışman ya da ajans kontrol etmiyor; garanti veren bir teklif uyarı işareti olarak görülmeli. Ben size hangi çalışmaları yapacağımı, neyi ölçeceğimi ve her ay ne değiştiğini açıkça raporluyorum.",
  },
  {
    question: "Yurt dışından hasta için SEO yapıyor musunuz?",
    answer:
      "Evet. Yönetmelik, sağlık turizmi tanıtımının yetki belgesi olan kuruluşlar tarafından ayrı bir yabancı dilde site ya da platformda yapılmasını ve HealthTürkiye logosunun kullanılmasını şart koşuyor. Bu yapıyı kurup her hedef ülke için ayrı anahtar kelime araştırması yapıyorum; sayfaları birebir çevirmek çoğu zaman yeterli olmuyor.",
  },
];

/* ---------------- Yönetmelik bölümü ---------------- */

const rules = [
  {
    rule: "Fiyat ve kampanya",
    article: "md. 5/1-m",
    means: "Yurt içine yönelik tanıtımda ücret, indirim, kampanya veya promosyon bilgisi yer alamaz.",
    approach: "Fiyat listesi yerine tedavi sürecini ve fiyatın muayenede hangi etkenlere göre netleştiğini anlatıyorum.",
  },
  {
    rule: "Hasta teşekkürleri",
    article: "md. 5/1-e, 7/1-ğ",
    means: "Hasta ya da yakınlarının teşekkür ve memnuniyet ifadeleri reklam niteliğinde paylaşılamaz.",
    approach: "Sitede “hastalarımız ne diyor” bölümü ya da yorum duvarı kurmuyorum. Yorumlar Google İşletme Profili'nde kalıyor.",
  },
  {
    rule: "Unvanlar",
    article: "md. 5/1-d",
    means: "Yalnızca kanunla tanınan uzmanlık unvanları kullanılabilir; sertifikalar unvan yerine geçmez.",
    approach: "“İmplant uzmanı” gibi ifadeler yerine hekimin gerçek unvanını, eğitimlerini ve sertifikalarını ayrı ayrı yazıyorum.",
  },
  {
    rule: "Güncelleme tarihi ve editör",
    article: "md. 5/1-ı",
    means: "Sitedeki bilgilendirmenin son güncelleme tarihi ve editörün iletişim bilgisi açıkça belirtilmeli.",
    approach: "Her tedavi sayfasına güncelleme tarihi, içeriği kontrol eden hekim ve iletişim bilgisi ekliyorum. Bu aynı zamanda Google için güçlü bir güven sinyali.",
  },
  {
    rule: "Öncesi-sonrası görseller",
    article: "md. 7",
    means: "Yazılı onam, aynı çekim koşulları, işlem tarihleri ve zorunlu uyarı metniyle kullanılabilir.",
    approach: "Görsel kullanılacaksa bu şartları yayından önce kontrol ediyorum; sağlanamıyorsa görsel kullanmıyoruz.",
  },
  {
    rule: "Marka ve bağlantı",
    article: "md. 5/1-h",
    means: "Firma, ürün veya marka tanıtımı yapılamaz, internet bağlantısı verilemez.",
    approach: "İmplant ya da plak markalarını öne çıkaran ve onlara link veren içerikler yazmıyorum.",
  },
  {
    rule: "Yanıltıcı ve üstünlük iddiası",
    article: "md. 5/1-c, h",
    means: "Halkı yanıltan ya da kendini diğerlerinden üstün gösteren ifadeler kullanılamaz.",
    approach: "“En iyi”, “garantili”, “ağrısız” gibi ifadeleri hiçbir başlıkta, sayfada ve meta açıklamada kullanmıyorum.",
  },
  {
    rule: "Ücretli arama kayıtları",
    article: "md. 5/1-i",
    means: "Arama motorlarında öne çıkmaya yönelik ücretli sponsorlu kayıtlar kısıtlandı; anahtar kelimeler de yönetmeliğe uygun olmalı.",
    approach: "Görünürlüğü organik sonuçlar ve Google Haritalar üzerinden kuruyorum; hedef kelimeleri de kurallara göre seçiyorum.",
  },
];

function ComplianceSection() {
  return (
    <section id="yonetmelik" className="border-t border-line bg-canvas py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="2025 tanıtım yönetmeliği"
          title="Yeni tanıtım yönetmeliği diş kliniği SEO'sunu nasıl değiştirdi?"
          intro="12 Kasım 2025'te Resmî Gazete'de yayımlanan Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Faaliyetleri Hakkında Yönetmelik, bir diş kliniğinin web sitesinde neyi yazıp neyi yazamayacağını netleştirdi. Arama motorlarında öne çıkmaya yönelik ücretli kayıtlar da kısıtlandığı için organik görünürlüğün değeri arttı. Ben her içeriği yayından önce bu kurallara göre kontrol ediyorum."
        />

        {/* Masaüstü: tablo */}
        <div className="hidden overflow-hidden rounded-3xl border border-line bg-white md:block">
          <table className="w-full text-left text-[15px]">
            <thead className="bg-canvas-alt text-xs font-semibold uppercase tracking-wide text-ink-muted">
              <tr>
                <th className="px-5 py-4">Kural</th>
                <th className="px-5 py-4">Sitenizde ne anlama geliyor?</th>
                <th className="px-5 py-4">Benim yaklaşımım</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {rules.map((r) => (
                <tr key={r.rule} className="align-top">
                  <td className="w-[22%] px-5 py-4">
                    <p className="font-bold text-ink">{r.rule}</p>
                    <p className="mt-1 text-xs font-semibold text-brand">{r.article}</p>
                  </td>
                  <td className="px-5 py-4 leading-relaxed text-ink-soft">{r.means}</td>
                  <td className="px-5 py-4 leading-relaxed text-ink">{r.approach}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobil: kartlar */}
        <ul className="space-y-3 md:hidden">
          {rules.map((r) => (
            <li key={r.rule} className="rounded-2xl border border-line bg-white p-5">
              <div className="flex items-baseline justify-between gap-3">
                <p className="font-bold text-ink">{r.rule}</p>
                <p className="shrink-0 text-xs font-semibold text-brand">{r.article}</p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{r.means}</p>
              <p className="mt-3 rounded-xl bg-accent-light px-3 py-2 text-sm leading-relaxed text-accent-dark">
                <span className="font-semibold">Yaklaşımım: </span>
                {r.approach}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-5 flex items-start gap-2 text-sm leading-relaxed text-ink-muted">
          <Scale className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            Bu tablo yönetmeliği SEO açısından özetliyor, hukuki görüş değildir. Tam metni{" "}
            <a href={REGULATION_URL} target="_blank" rel="noopener" className="font-semibold text-brand underline-offset-2 hover:underline">
              Resmî Gazete&apos;de
            </a>{" "}
            okuyabilirsiniz. Sağlık turizmi tanıtımı için 8. maddedeki ayrı kurallar geçerli.
          </span>
        </p>
      </div>
    </section>
  );
}

/* ---------------- İki hasta tipi ---------------- */

const patientTypes = [
  {
    icon: Siren,
    tone: "amber" as const,
    label: "Acil hasta",
    title: "Gece başlayan diş ağrısı",
    text: "Kararı dakikalar içinde veriyor. Haritaya bakıyor, açık olan ve yakın bir kliniği arıyor.",
    queries: ["yakınımdaki diş hekimi", "acil diş hekimi", "kadıköy diş kliniği"],
    needs: ["Eksiksiz Google İşletme Profili", "Doğru çalışma saatleri", "Tek dokunuşla arama ve yol tarifi", "Güncel yorumlar"],
  },
  {
    icon: CalendarCheck,
    tone: "brand" as const,
    label: "Planlı hasta",
    title: "İmplant ya da ortodonti düşünen hasta",
    text: "Haftalarca araştırıyor. Tedaviyi okuyor, hekimleri inceliyor, yapay zekaya soruyor, birkaç kliniği karşılaştırıyor.",
    queries: ["implant mı köprü mü", "şeffaf plak kaç ay sürer", "zirkonyum kaç yıl dayanır"],
    needs: ["Soruları cevaplayan tedavi sayfaları", "Güçlü hekim profilleri", "Yapay zeka cevaplarında görünürlük", "Güven veren klinik bilgileri"],
  },
];

function PatientTypes() {
  return (
    <section className="border-t border-line bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Arama davranışı"
          title="Hastalarınız sizi iki farklı şekilde arıyor"
          intro="Diş kliniği aramalarını iki gruba ayırmadan doğru strateji kurulamıyor. Acil hasta harita ve telefonla, planlı hasta içerik ve güvenle karar veriyor. Çalışmayı iki yolu birlikte kapsayacak şekilde planlıyorum."
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {patientTypes.map((p) => {
            const Icon = p.icon;
            const chip = p.tone === "amber" ? "bg-amber-100 text-amber-800" : "bg-brand-light text-brand";
            return (
              <article key={p.label} className="flex flex-col rounded-3xl border border-line bg-canvas p-6 md:p-7">
                <div className="flex items-center gap-3">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${chip}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-wide ${p.tone === "amber" ? "text-amber-800" : "text-brand"}`}>{p.label}</p>
                    <h3 className="text-lg font-bold leading-snug text-ink">{p.title}</h3>
                  </div>
                </div>
                <p className="mt-4 leading-relaxed text-ink-soft">{p.text}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-ink-muted">Örnek aramalar</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {p.queries.map((q) => (
                    <li key={q} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1 text-sm text-ink">
                      <Search className="h-3.5 w-3.5 text-ink-faint" />
                      {q}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-ink-muted">Bu hastayı kazandıran</p>
                <ul className="mt-2 space-y-1.5">
                  {p.needs.map((n) => (
                    <li key={n} className="flex items-start gap-2 text-[15px] text-ink">
                      <ClipboardCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {n}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Site mimarisi ---------------- */

const architecture = [
  {
    step: "1",
    title: "Şikâyet sayfaları",
    text: "Hasta çoğu zaman tedavinin adını bilmez, belirtisini arar. Bu sayfalar o soruyu cevaplar ve ilgili tedaviye yönlendirir.",
    examples: ["diş eti kanaması", "diş hassasiyeti", "gece diş sıkma"],
  },
  {
    step: "2",
    title: "Tedavi sayfaları",
    text: "Her önemli tedavinin kendi sayfası: nedir, kime uygun, süreç, süre, olası riskler, bakım ve içeriği kontrol eden hekim.",
    examples: ["implant", "zirkonyum kaplama", "şeffaf plak", "kanal tedavisi"],
  },
  {
    step: "3",
    title: "Hekim profilleri",
    text: "Gerçek unvan, eğitim, sertifikalar, mesleki üyelikler ve ilgilendiği tedaviler. Profil, hekimin kontrol ettiği sayfalara bağlanır.",
    examples: ["unvan", "eğitim", "kontrol ettiği tedaviler"],
  },
  {
    step: "4",
    title: "Klinik ve konum",
    text: "Tek adres varsa tek konum sayfası. Şube varsa her şube için gerçek bilgilerle ayrı sayfa. Adresiniz olmayan semtler için sayfa açmıyorum.",
    examples: ["adres ve harita", "çalışma saatleri", "ulaşım"],
  },
];

function SiteArchitecture() {
  return (
    <section className="border-t border-line bg-canvas py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Site mimarisi"
          title="Bir diş kliniği sitesi nasıl kurgulanmalı?"
          intro="Hasta bir belirtiyle aramaya başlıyor, tedaviyi öğreniyor, hekimi inceliyor ve kliniğe ulaşıyor. Sitenin yapısı bu yolu takip ettiğinde hem hasta aradığını kolayca buluyor hem de Google hangi sayfayı hangi arama için göstereceğini anlıyor."
        />
        <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {architecture.map((a, i) => (
            <li key={a.title} className="relative flex flex-col rounded-3xl border border-line bg-white p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-sm font-bold text-white">{a.step}</span>
              <h3 className="mt-4 text-lg font-bold text-ink">{a.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{a.text}</p>
              <ul className="mt-auto flex flex-wrap gap-1.5 pt-4">
                {a.examples.map((e) => (
                  <li key={e} className="rounded-full bg-canvas px-2.5 py-0.5 text-xs font-medium text-ink-soft">
                    {e}
                  </li>
                ))}
              </ul>
              {i < architecture.length - 1 ? (
                <ArrowRight className="absolute -right-3.5 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 rounded-full bg-canvas p-1 text-brand lg:block" />
              ) : null}
            </li>
          ))}
        </ol>
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white p-5">
            <p className="text-sm font-bold text-ink">Yapılandırılmış veri</p>
            <p className="mt-1 text-sm leading-relaxed text-ink-soft">
              Kliniği <code className="rounded bg-canvas px-1">Dentist</code>, hekimleri <code className="rounded bg-canvas px-1">Person</code>, tedavi
              sayfalarını kontrol eden hekim ve güncelleme tarihiyle <code className="rounded bg-canvas px-1">MedicalWebPage</code> olarak işaretliyorum.
            </p>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-bold text-amber-900">Kaçındığım hata: semt sayfası çoğaltmak</p>
            <p className="mt-1 text-sm leading-relaxed text-amber-900/80">
              Tek adresi olan bir klinik için onlarca “X semti diş kliniği” sayfası açmak, Google&apos;ın yönlendirme sayfası (doorway) olarak
              gördüğü bir spam yöntemi. Konum sayfası yalnızca gerçek bir şube için açılmalı.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Ölçüm ve fiyat ---------------- */

const funnel = [
  { icon: Eye, title: "Görünürlük", text: "Arama gösterimleri, harita görüntülenmeleri, yapay zeka cevaplarında anılma" },
  { icon: MousePointerClick, title: "Etkileşim", text: "Telefon araması, yol tarifi, WhatsApp ve form tıklamaları" },
  { icon: PhoneCall, title: "Talep", text: "Kliniğe gerçekten ulaşan arama ve randevu talepleri" },
  { icon: CalendarCheck, title: "Randevu", text: "Kliniğin onayladığı ve gerçekleşen muayeneler" },
];

function MeasureAndPrice() {
  return (
    <section className="border-t border-line bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Ölçüm ve ücret"
          title="Neyi ölçüyorum, ne kadar tutuyor?"
          intro="Sıralama tek başına bir sonuç değil. Hangi aramanın telefona, hangi telefonun randevuya döndüğünü görmeden SEO'nun klinik için ne kazandırdığını bilemezsiniz. Bu yüzden ölçümü dört aşamada kuruyorum."
        />
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-8">
            {funnel.map((f, i) => {
              const Icon = f.icon;
              return (
                <li key={f.title} className="flex gap-4 rounded-2xl border border-line bg-canvas p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand shadow-card">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-ink-faint">{String(i + 1).padStart(2, "0")}</p>
                    <p className="font-bold text-ink">{f.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{f.text}</p>
                  </div>
                </li>
              );
            })}
            <li className="rounded-2xl border border-dashed border-line p-5 text-sm leading-relaxed text-ink-soft sm:col-span-2">
              Telefon, WhatsApp ve form tıklamalarını Google Analytics 4&apos;te ayrı olaylar olarak kuruyorum. Yapay zeka asistanlarından gelen
              ziyaretleri GA4&apos;ün AI Assistant kanalında, harita performansını Google İşletme Profili raporlarında izliyoruz.
            </li>
          </ol>
          <aside className="flex flex-col rounded-3xl bg-night p-6 text-white md:p-7 lg:col-span-4">
            <Wallet className="h-6 w-6 text-accent" />
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-white/60">Aylık ücret</p>
            <p className="mt-1 text-4xl font-bold tracking-tight">{startPrice}&apos;den</p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Ücret sitenin büyüklüğüne, tedavi sayısına ve şube sayısına göre değişiyor. Sözleşme yapmıyorum, minimum çalışma süresi yok.
            </p>
            <p className="mt-4 rounded-xl bg-white/10 px-4 py-3 text-sm leading-relaxed text-white/80">
              Kimse Google&apos;da ya da haritada belirli bir sırayı garanti edemez. Garanti veren tekliflere dikkat edin.
            </p>
            <Link
              href="/seo-danismanlik-fiyatlari"
              className="group mt-auto inline-flex items-center justify-between gap-2 rounded-xl bg-white px-4 py-3 pt-3 text-sm font-semibold text-ink transition-colors hover:bg-canvas"
              style={{ marginTop: "1.5rem" }}
            >
              SEO fiyatlarını inceleyin
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default function DentistsSEO() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Sektörel SEO Hizmetleri", href: "/sektorel-seo-hizmetleri" },
          { name: "Diş Hekimleri için SEO", href: "/sektorel-seo-hizmetleri/dis-hekimleri-icin-seo-2" },
        ]}
      />
      <ServicePageLayout
        title="Diş Hekimi ve Diş Kliniği SEO"
        subtitle="Tedavi ve semt aramalarında, kurallara uygun şekilde bulunan klinik"
        description="İmplant ya da zirkonyum yaptırmayı düşünen bir hasta önce Google'da araştırıyor: tedavinin nasıl yapıldığını okuyor, yakınındaki klinikleri haritada karşılaştırıyor, hekimlerin kim olduğuna bakıyor. Yeni tanıtım yönetmeliğiyle reklam kanalları daralırken bu araştırmada görünmek her zamankinden önemli. Ben kliniğinizin tedavi sayfalarını, hekim profillerini ve yerel görünürlüğünü yönetmeliğe uygun şekilde birlikte ele alıyorum."
        canonicalUrl={PAGE_URL}
        afterHeroNode={
          <DemoSection
            id="harita-gorunurlugu"
            eyebrow="Harita sonuçları"
            title="Hasta semtindeki kliniği arıyor. Sizi bulsun."
            intro="Diş kliniği aramalarının çoğu yerel: hasta, tedavi süresince rahatça gidip gelebileceği, yakın ve güvenilir bir klinik arıyor. Haritada ilk üçte yer almak, ilk muayeneye giden en kısa yol."
            window={
              <DemoWindow label="google.com/maps">
                <LocalPackDemo
                  query="kadıköy diş kliniği"
                  listings={[
                    { name: "Moda Ağız ve Diş Sağlığı", category: "Diş kliniği", rating: 4.7, reviews: 238 },
                    { name: "Gülümse Diş Polikliniği", category: "Diş polikliniği", rating: 4.5, reviews: 164 },
                    { name: "Dt. Ayşe Kaya Muayenehanesi", category: "Diş hekimi", rating: 4.8, reviews: 89 },
                    { name: "Kıyı Dental", category: "Diş kliniği", rating: 4.2, reviews: 71 },
                    { name: "Kliniğiniz", category: "Diş kliniği", rating: 4.4, reviews: 26, brand: true },
                  ]}
                />
              </DemoWindow>
            }
            side={
              <DemoSide
                title="İlk karşılaştırma haritada yapılıyor"
                text="Ben de bir diş hekimi ararken önce haritadaki seçeneklere, puanlara ve son yorumlara bakıyorum; hastalarınız da büyük ihtimalle öyle yapıyor. Haritada görünmeyen ya da az yorumu olan bir klinik, hekimleri ne kadar iyi olursa olsun bu karşılaştırmanın dışında kalıyor."
                points={[
                  "Google İşletme profilini doğru kategori ve tedavilerle eksiksiz doldurmak",
                  "Google'ın kurallarına uygun, düzenli bir yorum süreci kurmak",
                  "Her tedavi için hastanın sorularına cevap veren sayfalar",
                  "Hekimlerin gerçek unvan ve uzmanlığını net göstermek",
                ]}
                ctaTitle="Kliniğiniz semtinizde kaçıncı sırada?"
                ctaText="Kliniğinizin haritadaki ve Google'daki durumunu inceleyip en hızlı yükselebileceğiniz alanları raporlayayım."
                ctaLabel="Ücretsiz klinik analizi iste"
              />
            }
          />
        }
        icon="Brain"
        gradient="from-sky-500 via-cyan-500 to-teal-500"
        blogCategory="SEO Hizmetleri"
      >
        <ScopeGrid
          title="Diş hekimleri için SEO'da neler yapıyorum?"
          intro="Diş tedavisi hem pahalı hem de uzun süren bir karar; hasta güvenmeden randevu almıyor. Bu yüzden çalışmayı, hastanın araştırırken baktığı her yerde güçlü, güvenilir ve kurallara uygun görünmeniz üzerine kuruyorum."
          items={[
            { icon: FileHeart, title: "Tedavi ve şikâyet sayfalarını kuruyorum", text: "İmplant, zirkonyum, şeffaf plak, kanal tedavisi gibi tedavilerin ve diş eti kanaması, diş hassasiyeti gibi şikâyetlerin her biri için hastanın sorularını cevaplayan sayfalar planlıyorum." },
            { icon: UserRound, title: "Hekim profillerini güçlendiriyorum", text: "Hekimlerinizin gerçek unvanını, eğitimini, sertifikalarını ve mesleki üyeliklerini gösteren profiller hazırlıyor, tedavi içeriklerini bu profillere bağlıyorum." },
            { icon: MapPin, title: "Haritada ve semt aramalarında öne çıkarıyorum", text: "Google İşletme profilinizi doğru kategori ve tedavilerle eksiksiz hale getiriyor, klinik bilgilerinizin internetin her yerinde aynı yazılmasını sağlıyorum." },
            { icon: ShieldCheck, title: "Yönetmeliğe uygun içerik üretiyorum", text: "Fiyat, kampanya, üstünlük iddiası ve hasta teşekkürü içermeyen; güncelleme tarihi ve kontrol eden hekimi belli, bilgilendirici sayfalar hazırlıyorum." },
            { icon: Bot, title: "Yapay zekada görünürlük sağlıyorum", text: "Google AI Bakışı ve ChatGPT'nin tedavi sorularında kliniğinizi kaynak göstermesi için net cevaplı içerikler, yapılandırılmış veri ve tutarlı klinik bilgileri kuruyorum." },
            { icon: Globe2, title: "Sağlık turizmi için çok dilli yapı kuruyorum", text: "Yurt dışından hasta kabul ediyorsanız yönetmeliğin istediği ayrı yabancı dil yapısını ve hedef ülkelere göre tedavi sayfalarını hazırlıyorum." },
          ]}
        />

        <ComplianceSection />

        <PatientTypes />

        <SiteArchitecture />

        <ProcessTimeline
          title="Diş kliniği SEO çalışması nasıl ilerliyor?"
          intro="Önce kliniğinizin Google'daki ve haritadaki durumunu, semtinizdeki rakipleri ve mevcut içeriklerin yönetmeliğe uygunluğunu inceliyorum. Ardından teknik, harita ve içerik çalışmaları birbirini bekletmeden ilerliyor."
          ctaLabel="Ücretsiz klinik analiziyle başlayalım"
          steps={[
            {
              tag: "1. ve 2. hafta",
              title: "Analiz, uygunluk kontrolü ve yol haritası",
              paragraphs: [
                "Hastaların tedavilerinizi hangi kelimelerle ve hangi semt adlarıyla aradığını çıkarıyorum. Sitenizi Google'ın sağlık içeriklerinde aradığı güven kriterlerine ve tanıtım yönetmeliğine göre inceliyor; fiyat, hasta teşekkürü ya da hatalı unvan gibi riskli içerikleri listeliyorum.",
                "Haritadaki konumunuzu ve bölgenizdeki rakip klinikleri de analiz edip, hangi tedavilerde en hızlı yol alabileceğinizi gösteren bir yol haritası hazırlıyorum.",
              ],
            },
            {
              tag: "Paralel yürür",
              tone: "accent",
              title: "Teknik ve harita düzenlemeleri",
              paragraphs: [
                "Sitenin hızını, mobil görünümünü ve Google'ın sayfaları doğru okuyup okumadığını kontrol ediyorum. Acil hastalar telefondan aradığı için tek dokunuşla arama ve yol tarifi bu aşamanın öncelikleri arasında.",
                "Aynı dönemde Google İşletme profilinizi, klinik bilgilerinin tutarlılığını ve klinik ile hekimleri Google'a tanıtan yapılandırılmış verileri düzenliyorum.",
              ],
            },
            {
              tag: "1. aydan itibaren",
              title: "Tedavi, şikâyet ve hekim sayfaları",
              paragraphs: [
                "Tedavi sayfalarını hastaların gerçekten sorduğu sorulara göre yeniden yazıyorum: implant acıtır mı, zirkonyum kaç yıl dayanır, şeffaf plak tedavisi ne kadar sürer gibi. Şikâyet sayfalarını ilgili tedavilere bağlıyor, her içeriğin hangi hekim tarafından kontrol edildiğini ve ne zaman güncellendiğini gösteriyorum.",
                "Yayından önce her içeriği hem yönetmelik kontrol listesinden geçiriyor hem de hekimin son kontrolünü yapmasını sağlıyorum.",
              ],
            },
            {
              tag: "Ayrı bütçelendirilir",
              tone: "amber",
              title: "Backlink ve dijital PR",
              paragraphs: [
                "Sağlık portalları, yerel rehberler ve sektörel yayınlarda kliniğinizin ve hekimlerinizin doğru bilgilerle yer almasını sağlıyorum. Bu yayınların maliyeti siteden siteye değiştiği için ayrıca bütçelendiriliyor; her harcamayı önceden size soruyorum, onayınız olmadan hiçbir şey yapılmıyor.",
              ],
            },
            {
              tag: "Her ay",
              title: "Randevu odaklı ölçüm",
              paragraphs: [
                "Sıralamaların yanında asıl önemli olanı takip ediyorum: telefon aramaları, yol tarifi istekleri, WhatsApp, form ve randevu talepleri. Her ay bu sonuçlara bakıp planı birlikte güncelliyoruz.",
              ],
            },
          ]}
        />

        <ExampleGrid
          title="Bu cümleler size tanıdık geliyorsa, SEO zamanı gelmiş demektir"
          intro="Diş kliniklerinde görünürlük sorunu genellikle şu şikayetlerle kendini gösteriyor:"
          quoteStyle="speech"
          items={[
            { icon: EyeOff, title: "Haritada görünmemek", quote: "Aynı caddedeki klinik çıkıyor, biz çıkmıyoruz", text: "Google İşletme profili eksik ya da tutarsızsa, hastaya en yakın klinik siz olsanız bile haritada üstte yer almanız zorlaşıyor." },
            { icon: Wallet, title: "Sadece fiyat soran hastalar", quote: "Gelen herkes sadece implant fiyatı soruyor", text: "Tedavi sayfaları süreci ve muayenede neyin netleştiğini anlatmıyorsa, hasta sizi yalnızca fiyatla karşılaştırıyor." },
            { icon: Users, title: "Hekimlerin tanınmaması", quote: "Hastalar hekimlerimizi tanımadan geliyor", text: "Hekim profilleri zayıfsa hem hasta güveni hem de Google'ın içeriklerinize duyduğu güven düşüyor." },
            { icon: MessageSquareWarning, title: "Az ya da olumsuz yorum", quote: "Rakiplerin yüzlerce yorumu var, bizim birkaç tane", text: "Yorum sayısı ve güncelliği hem harita sıralamasını hem de hastanın klinik seçimini doğrudan etkiliyor." },
            { icon: Megaphone, title: "Reklam kısıtları", quote: "Yeni yönetmelikle reklam seçeneklerimiz daraldı", text: "Arama motorlarında öne çıkmaya yönelik ücretli kayıtlar kısıtlandı; kurallara uygun içerikle kazanılan organik görünürlük bu yüzden daha değerli." },
            { icon: Bot, title: "Yapay zekada görünmemek", quote: "ChatGPT'ye sorunca başka klinikleri öneriyor", text: "Hastalar artık yapay zekaya da soruyor. Net cevaplı tedavi sayfaları ve güçlü hekim profilleri bu cevaplarda görünmenizi destekliyor." },
          ]}
        />

        <ProofBand
          title="Bir diş kliniği projesinden sonuçlar"
          results={[
            { code: "Özel diş kliniği", metric: "+%100", label: "Organik tıklama artışı", detail: "Yerel SEO, tedavi sayfalarının geliştirilmesi ve uzmanlık şeması çalışmalarıyla organik tıklamaların iki katına çıkması.", source: "Vaka analizi, 4 ay" },
            { code: "Özel diş kliniği", metric: "+%100", label: "Gösterim artışı", detail: "Aynı çalışma sürecinde kliniğin Google arama sonuçlarında görünme sayısının iki katına çıkması.", source: "Vaka analizi, 4 ay" },
            { code: "Çalışma süresi", metric: "4 ay", label: "Sonuca kadar geçen süre", detail: "Google İşletme ve teknik düzenlemelerle başlayan, tedavi içerikleri ve uzmanlık şemasıyla devam eden çalışmanın toplam süresi.", source: "Vaka analizi, 4 ay" },
          ]}
        />

        <MeasureAndPrice />

        <RelatedBand
          eyebrow="Sağlık alanındaki diğer sayfalar"
          title="Kliniğinizin yapısına uygun sayfayı inceleyin"
          text="Sağlık sektörünün farklı alanları için ayrı sayfalarda daha detaylı bilgi veriyorum."
          links={[
            { icon: HeartPulse, title: "Sağlık ve klinik SEO", href: "/sektorel-seo-hizmetleri/saglik-ve-klinik-seo", text: "Güven odaklı klinik görünürlüğü" },
            { icon: Stethoscope, title: "Doktorlar için SEO", href: "/sektorel-seo-hizmetleri/doktorlar-icin-seo-2", text: "Hekim adı ve branşıyla bulunmak" },
            { icon: Building2, title: "Hastaneler için SEO", href: "/sektorel-seo-hizmetleri/hastaneler-icin-seo-2", text: "Çok branşlı yapılar için mimari" },
          ]}
        />

        <GuideShell
          id="dis-klinigi-seo-rehberi"
          eyebrow="Diş kliniği SEO rehberi"
          title="Diş hekimleri için SEO hakkında bilmeniz gerekenler"
          intro="Bir diş kliniğinin Google'da, haritada ve yapay zeka cevaplarında nasıl görünür hale geldiğini, yeni yönetmelikle nelere dikkat etmeniz gerektiğini sade bir dille anlattım."
          toc={[
            { id: "dis-klinigi-seo-nedir", label: "Diş kliniği SEO'su nedir?" },
            { id: "arama-davranisi", label: "Hastalar nasıl arıyor?" },
            { id: "tedavi-sayfasi", label: "Tedavi ve şikâyet sayfaları" },
            { id: "hekim-profili", label: "Hekim profilleri ve unvanlar" },
            { id: "isletme-profili", label: "Google İşletme Profili: klinik mi, hekim mi?" },
            { id: "yorumlar", label: "Hasta yorumlarının kuralları" },
            { id: "yapilandirilmis-veri", label: "Yapılandırılmış veri" },
            { id: "yapay-zeka", label: "Yapay zeka aramaları" },
            { id: "saglik-turizmi", label: "Sağlık turizmi ve çok dilli SEO" },
            { id: "hatalar", label: "Sık yapılan hatalar" },
          ]}
          cta={{ eyebrow: "Ücretsiz klinik analizi", title: "Hastalar sizi Google'da bulabiliyor mu?", text: "Kliniğinizin Google ve haritadaki durumunu inceleyip fırsatları raporlayayım.", label: "Ücretsiz analiz isteyin" }}
          faqTitle="Diş hekimleri için SEO hakkında sıkça sorulan sorular"
          faqItems={faqItems}
        >
          <div className="space-y-5">
            <GuideH2 id="dis-klinigi-seo-nedir">Diş kliniği SEO&apos;su nedir?</GuideH2>
            <GuideDefinition>
              Diş kliniği SEO&apos;su; diş hekimi muayenehaneleri, diş klinikleri ve ağız ve diş sağlığı polikliniklerinin, tedavi ve semt
              aramalarında Google&apos;da, Google Haritalar&apos;da ve yapay zeka cevaplarında güvenilir bir seçenek olarak görünmesi için yapılan,
              sağlık tanıtım kurallarına uygun arama motoru optimizasyonu çalışmalarıdır.
            </GuideDefinition>
            <p>
              Diş tedavileri çoğu zaman pahalı, birkaç seans süren ve hastayı biraz da korkutan kararlar. Bu yüzden hasta randevu almadan önce
              uzun uzun araştırıyor. Diş kliniği SEO&apos;sunun amacı, bu araştırmanın her aşamasında kliniğinizin hem görünür hem de güven
              veren bir şekilde karşısına çıkması. 2025 yönetmeliğiyle reklam seçenekleri daraldığı için bu görünürlüğün büyük kısmı artık
              organik sonuçlardan ve haritadan geliyor.
            </p>
            <p>
              Konuya daha geniş bir giriş için{" "}
              <GuideLink href="/blog/dis-klinigi-seo-nedir-dis-hekimleri-icin-neden-onemlidir">diş kliniği SEO&apos;su nedir</GuideLink> yazıma göz
              atabilirsiniz. Bir özel diş kliniğiyle yaptığım dört aylık çalışmanın detaylarını ise{" "}
              <GuideLink href="/basari-hikayeleri/hizmet-klinik-seo">bu vaka analizinde</GuideLink> anlattım.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="arama-davranisi">Hastalar diş kliniğini nasıl arıyor?</GuideH2>
            <p>
              Aramaların bir kısmı doğrudan klinik arayışı: &ldquo;kadıköy diş kliniği&rdquo;, &ldquo;yakınımdaki diş hekimi&rdquo;, &ldquo;acil
              diş hekimi&rdquo; gibi. Bir kısmı tedaviyle ilgili: &ldquo;implant mı köprü mü&rdquo;, &ldquo;zirkonyum mu lamine mi&rdquo;,
              &ldquo;şeffaf plak kaç ay sürer&rdquo;. Bir kısmı ise belirtiyle başlıyor: &ldquo;diş eti kanaması neden olur&rdquo;, &ldquo;soğuk
              içince diş sızlaması&rdquo;. İlki randevuya çok yakın, diğer ikisi hastanın henüz karar vermediği araştırma aşaması.
            </p>
            <p>
              İyi bir çalışma üç aşamayı da kapsıyor. Klinik aramalarında harita ve semt sinyalleriyle, tedavi ve belirti aramalarında ise
              soruları açıkça cevaplayan sayfalarla görünüyorsunuz. Hangi kelimelere odaklanmanız gerektiğini anlamak için{" "}
              <GuideLink href="/blog/anahtar-kelime-nedir">anahtar kelime nedir</GuideLink> yazıma da bakabilirsiniz.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="tedavi-sayfasi">Tedavi ve şikâyet sayfaları nasıl yazılmalı?</GuideH2>
            <p>
              Hasta bir tedaviyi araştırırken hep benzer soruları soruyor. İyi bir tedavi sayfası bu soruların hepsine açık ve anlaşılır bir
              cevap veriyor. Benim tedavi sayfalarında kullandığım kontrol listesi:
            </p>
            <ul className="list-disc space-y-1.5 pl-6">
              <li>Tedavi nedir ve hangi durumlarda uygulanır?</li>
              <li>Kimler için uygun, kimler için değil?</li>
              <li>Süreç nasıl ilerler, kaç seans ve ne kadar sürer?</li>
              <li>Olası riskler, iyileşme dönemi ve bakım</li>
              <li>Fiyatın muayenede hangi etkenlere göre netleştiği (fiyat yazmadan)</li>
              <li>İçeriği kontrol eden hekim, son güncelleme tarihi ve editör iletişim bilgisi</li>
            </ul>
            <p>
              Şikâyet sayfaları ise hastanın tedavinin adını bilmediği anı yakalıyor. &ldquo;Diş eti kanaması&rdquo; sayfası olası nedenleri
              anlatıp diş taşı temizliği ya da diş eti tedavisi sayfasına, &ldquo;diş hassasiyeti&rdquo; sayfası ilgili tedavilere yönlendiriyor.
              Her önemli tedavinin kendi sayfası olmalı; hepsini tek sayfada toplamak Google&apos;ın sizi hangi tedavi için göstereceğini
              anlamasını zorlaştırıyor.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="hekim-profili">Hekim profilleri ve unvanlar neden bu kadar önemli?</GuideH2>
            <p>
              Google, sağlık gibi insanların hayatını doğrudan etkileyebilecek konularda içeriği kimin hazırladığına ve bu kişinin gerçekten
              uzman olup olmadığına çok dikkat ediyor. Hekimin eğitimi, uzmanlık alanı, sertifikaları ve mesleki üyelikleri net şekilde
              gösterildiğinde hem hasta hem de Google kliniğe daha çok güveniyor.
            </p>
            <p>
              Burada yönetmeliğin unvan kuralı kritik: yalnızca kanunla tanınan uzmanlık unvanları kullanılabiliyor, sertifikalar unvan
              yerine geçmiyor. &ldquo;Dt.&rdquo; ile ortodonti ya da periodontoloji gibi bir alanda uzmanlık eğitimi almış hekimin unvanı aynı
              yazılmamalı; &ldquo;implant uzmanı&rdquo;, &ldquo;estetik diş uzmanı&rdquo; gibi ifadeler kullanılmamalı. Hekim profilini, hekimin
              kontrol ettiği tedavi sayfalarına bağlamak güveni güçlendiriyor. Bu konuyu{" "}
              <GuideLink href="/blog/google-raters-guideline-nedir">Google Raters Guideline nedir</GuideLink> ve{" "}
              <GuideLink href="/blog/yazar-otoritesi-nedir-seodaki-onemi-nedir">yazar otoritesi nedir</GuideLink> yazılarımda daha detaylı
              anlattım.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="isletme-profili">Google İşletme Profili: klinik için mi, hekim için mi?</GuideH2>
            <p>
              Semt adıyla yapılan aramalarda Google çoğu zaman en üstte bir harita ve üç klinik gösteriyor. Bu alanda yer almak için Google
              İşletme profilinin doğru kategori ve tedavilerle eksiksiz doldurulması, klinik bilgilerinin her yerde aynı yazılması ve gerçek,
              güncel hasta yorumları gerekiyor.
            </p>
            <p>
              Sık sorulan bir soru, klinik ve hekimler için ayrı profil açılıp açılamayacağı. Google&apos;ın kurallarına göre bireysel hekimler
              kendi profillerine sahip olabiliyor. Ancak klinikte hastaya hizmet veren tek hekim sizseniz, Google tek bir profil açılmasını ve
              adın &ldquo;Klinik Adı: Dt. Ad Soyad&rdquo; biçiminde yazılmasını öneriyor. Profil adına semt ya da tedavi adı eklemek ise
              Google&apos;ın kurallarına aykırı ve profilin askıya alınmasına yol açabiliyor. Detaylar için{" "}
              <GuideLink href="/blog/yerel-seo-nedir">yerel SEO nedir</GuideLink> ve{" "}
              <GuideLink href="/blog/google-my-business-nedir">Google İşletme profili</GuideLink> yazılarıma göz atabilirsiniz.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="yorumlar">Hasta yorumlarında hangi kurallara uymak gerekiyor?</GuideH2>
            <p>Yorumlar harita sıralamasında ve hastanın kararında belirleyici, ama iki ayrı kural setine uymanız gerekiyor:</p>
            <ul className="list-disc space-y-1.5 pl-6">
              <li>
                <strong className="text-ink">Google&apos;ın kuralları:</strong> Yorum karşılığında indirim, hediye ya da ücretsiz hizmet sunmak,
                olumsuz yorumları engellemek ve yalnızca memnun hastalardan seçerek yorum istemek yasak. Hastadan yorumda belirli bir içerik
                yazmasını istemek de kurallara aykırı.
              </li>
              <li>
                <strong className="text-ink">Yönetmelik:</strong> Hasta teşekkür ve memnuniyet ifadeleri internet sitelerinde reklam niteliğinde
                paylaşılamıyor. Bu yüzden Google yorumlarını sitenizde bir vitrin gibi göstermeyi önermiyorum.
              </li>
            </ul>
            <p>
              Benim önerdiğim süreç basit: tedavisi tamamlanan her hastaya aynı nazik mesajla Google profilinizin linkini göndermek ve gelen
              her yoruma cevap vermek. Cevaplarda hastanın hangi tedaviyi aldığını doğrulamamak da önemli; hasta mahremiyeti yönetmelikte ayrıca
              korunuyor. Olumsuz bir yoruma sakin ve özenli bir cevap, sizi inceleyen yeni hastaya çok şey anlatıyor.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="yapilandirilmis-veri">Diş kliniği için hangi yapılandırılmış veri kullanılmalı?</GuideH2>
            <p>
              Yapılandırılmış veri, kliniğinizi ve hekimlerinizi Google&apos;a makine diliyle tanıtıyor. Kliniğin kendisi için schema.org&apos;daki{" "}
              <code className="rounded bg-canvas px-1 text-[15px]">Dentist</code> türü, hekimler için{" "}
              <code className="rounded bg-canvas px-1 text-[15px]">Person</code>, tedavi sayfaları için kontrol eden hekim ve son kontrol
              tarihini içeren <code className="rounded bg-canvas px-1 text-[15px]">MedicalWebPage</code> kullanıyorum.
            </p>
            <p>
              Bir uyarı: Google, bir işletmenin kendi sitesinde gösterdiği kendi yorumları için yıldızlı arama sonucu göstermiyor. Bu yüzden
              sitenize puan ve yorum şeması eklemek beklenen etkiyi yaratmıyor. Temeller için{" "}
              <GuideLink href="/blog/yapilandirilmis-veri-nedir">yapılandırılmış veri nedir</GuideLink> yazıma bakabilirsiniz.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="yapay-zeka">Yapay zeka aramalarında diş kliniği nasıl görünür?</GuideH2>
            <p>
              Google AI Modu ve AI Bakışı Şubat 2026&apos;dan beri Türkiye&apos;de kullanılıyor. &ldquo;İmplant kaç yıl dayanır&rdquo; gibi bir
              soruda hasta artık önce yapay zekanın yazdığı özeti görüyor ve bu özetin altında kaynak olarak birkaç klinik sitesi yer alıyor.
              Bu kaynaklardan biri olmak için ayrı bir teknik gerekmiyor; Google, temel SEO uygulamalarının yapay zeka özellikleri için de
              geçerli olduğunu söylüyor.
            </p>
            <p>
              Pratikte fark yaratan şeyler şunlar: her başlığın altında soruyu ilk cümlede cevaplayan tedavi sayfaları, gerçek hekim bilgisi,
              tutarlı klinik bilgileri ve başka güvenilir sitelerde doğru bilgilerle anılmak. Bu konuyu{" "}
              <GuideLink href="/blog/geo-nedir">GEO nedir</GuideLink> ve{" "}
              <GuideLink href="/seo-hizmetleri/yapay-zeka-seo">yapay zeka SEO</GuideLink> sayfalarımda ayrıntılı anlattım.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="saglik-turizmi">Sağlık turizmi ve çok dilli SEO</GuideH2>
            <p>
              Yurt dışından hasta kabul eden klinikler için yönetmeliğin 8. maddesi ayrı bir çerçeve çiziyor. Sağlık turizmi tanıtımı, Bakanlık
              yetki belgesi olan kuruluşlar tarafından ayrı bir yabancı dilde site ya da platformda yapılıyor; yetki belgesinin sitede
              yayımlanması ve HealthTürkiye logosunun kullanılması gerekiyor. Türkiye&apos;de yaşayanlara yönelik hedefleme ise yasak.
            </p>
            <p>
              SEO tarafında her hedef ülke için ayrı anahtar kelime araştırması yapıyorum. Bir İngiliz hastanın &ldquo;dental implants
              Turkey&rdquo; aramasıyla bir Alman hastanın sorduğu sorular farklı; sayfaları birebir çevirmek bu farkı yakalamıyor. Konaklama,
              tedavi süresi, kontrol süreci ve iletişim gibi konular yabancı hasta için yerli hastadan çok daha önemli.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="hatalar">Diş kliniği SEO&apos;sunda sık yapılan hatalar</GuideH2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-ink">Sitede fiyat listesi ya da kampanya yayımlamak:</strong> Yurt içine yönelik tanıtımda yönetmeliğe
                aykırı.
              </li>
              <li>
                <strong className="text-ink">&ldquo;Hastalarımız ne diyor&rdquo; bölümü:</strong> Hasta teşekkürlerini sitede vitrine koymak hem
                yönetmeliğe aykırı hem de Google&apos;da yıldız getirmiyor.
              </li>
              <li>
                <strong className="text-ink">Sertifikayı unvan gibi yazmak:</strong> &ldquo;İmplant uzmanı&rdquo; gibi ifadeler kullanılamıyor.
              </li>
              <li>
                <strong className="text-ink">Her semt için kopya sayfa açmak:</strong> Tek adresli klinikte onlarca semt sayfası Google&apos;ın
                spam olarak gördüğü bir yöntem.
              </li>
              <li>
                <strong className="text-ink">Bütün tedavileri tek sayfada toplamak:</strong> Google hangi tedavi için sizi göstereceğini
                anlayamıyor.
              </li>
              <li>
                <strong className="text-ink">Profil adına anahtar kelime eklemek:</strong> &ldquo;Kadıköy İmplant Diş Kliniği&rdquo; gibi gerçek
                ad olmayan profil adları askıya alınma riski taşıyor.
              </li>
              <li>
                <strong className="text-ink">Sıralama garantisi veren tekliflere güvenmek:</strong> Kimse Google&apos;da belirli bir sırayı
                garanti edemez.
              </li>
            </ul>
          </div>
        </GuideShell>
      </ServicePageLayout>
    </>
  );
}
