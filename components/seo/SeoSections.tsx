import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Clock,
  FileText,
  Link2,
  MapPin,
  PenLine,
  ShoppingBag,
  ShoppingCart,
  Stethoscope,
  Wrench,
  Building2,
  Plane,
  Bot,
  Sparkles,
} from "lucide-react";
import { caseStudies } from "@/lib/case-studies";

function Heading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="mb-8 md:mb-10">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-ink md:text-[40px] md:leading-[1.2]">{title}</h2>
      {intro ? <p className="mt-5 text-lg leading-relaxed text-ink-soft">{intro}</p> : null}
    </div>
  );
}

/* ---------------- Kapsam ---------------- */

const scopeItems = [
  {
    icon: Wrench,
    title: "Sitenizin teknik sağlığını düzeltiyorum",
    text: "Google sitenizi rahatça tarayamıyorsa, ne kadar iyi içerik yazarsanız yazın sıralama alamazsınız. Hız, mobil uyumluluk, indekslenme sorunları ve hatalı yönlendirmeler gibi görünmeyen engelleri tek tek temizliyorum.",
    href: "/seo-hizmetleri/teknik-seo",
    link: "Teknik SEO",
  },
  {
    icon: FileText,
    title: "Her sayfayı doğru kelimeyle eşleştiriyorum",
    text: "Müşterilerinizin Google'a gerçekte ne yazdığını araştırıyor, her önemli aramaya cevap veren bir sayfanız olmasını sağlıyorum. Başlıklar, açıklamalar ve sayfa içi bağlantılar bu plana göre düzenleniyor.",
    href: "/seo-hizmetleri/sayfa-ici-seo",
    link: "Site içi SEO",
  },
  {
    icon: Link2,
    title: "Markanızın otoritesini güçlendiriyorum",
    text: "Google, bir siteye ne kadar güveneceğine büyük ölçüde başka sitelerin o site hakkında ne söylediğine bakarak karar veriyor. Sektörünüzle ilgili, kaliteli sitelerden doğal bağlantılar kazanmanız için planlı bir çalışma yürütüyorum.",
    href: "/seo-hizmetleri/sayfa-disi-seo",
    link: "Site dışı SEO",
  },
  {
    icon: PenLine,
    title: "Okunan ve sıralama alan içerikler planlıyorum",
    text: "Hangi konularda içerik üretmeniz gerektiğini, rakiplerinizin boş bıraktığı alanları ve mevcut içeriklerinizin nasıl güncellenmesi gerektiğini belirliyorum. İsterseniz içerikleri de birlikte hazırlıyoruz.",
    href: "/icerik-yazimi",
    link: "İçerik yazımı",
  },
  {
    icon: MapPin,
    title: "Bulunduğunuz şehirde görünür olmanızı sağlıyorum",
    text: "\"Yakınımdaki\" ve şehir bazlı aramalarda Google Haritalar'da üst sıralarda çıkmak, yerel işletmeler için en hızlı müşteri kaynaklarından biri. Google İşletme profilinizi ve yerel sinyallerinizi düzenliyorum.",
    href: "/sektorel-seo-hizmetleri/yerel-isletme-seo",
    link: "Yerel SEO",
  },
  {
    icon: ShoppingCart,
    title: "E-ticaret sitenizi satışa göre kurguluyorum",
    text: "Kategori ve ürün sayfaları doğru kurgulanmayan e-ticaret siteleri, binlerce sayfaya rağmen az trafik alıyor. Kategori yapısını, filtre sayfalarını ve ürün açıklamalarını aramaya ve satışa göre düzenliyorum.",
    href: "/sektorel-seo-hizmetleri/e-ticaret-seo",
    link: "E-ticaret SEO",
  },
];

export function SeoScope() {
  return (
    <section className="border-t border-line bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Heading
          eyebrow="Kapsam"
          title="SEO danışmanlığında neler yapıyorum?"
          intro="SEO tek bir iş değil; birbirini tamamlayan birkaç alanın bir arada yürütülmesi. Her projede önce sitenizin hangi alanda tıkandığını buluyor, sadece gerçekten ihtiyacınız olan çalışmaları planlıyorum. Her kartın altından ilgili hizmetin detay sayfasına geçebilirsiniz."
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {scopeItems.map(({ icon: Icon, title, text, href, link }) => (
            <article key={title} className="flex flex-col rounded-3xl border border-line bg-canvas p-7">
              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand shadow-card">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-bold leading-snug text-ink">{title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{text}</p>
              <Link href={href} className="group mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-brand hover:text-brand-dark">
                {link} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Süreç ---------------- */

const steps = [
  {
    tag: "1. ve 2. hafta",
    tone: "brand",
    title: "Analiz ve yol haritası",
    paragraphs: [
      "Çalışmaya sitenizi baştan sona inceleyerek başlıyorum. Teknik altyapıyı tarıyor, hangi kelimelerde kaçıncı sırada olduğunuzu, rakiplerinizin hangi aramalarda öne çıktığını ve içeriklerinizin hangi soruları cevapsız bıraktığını tespit ediyorum. Google Search Console ve Analytics verileriniz bu analizin temelini oluşturuyor.",
      "Analizin sonunda elinizde, neyi hangi sırayla ve neden yapacağımızı anlatan yazılı bir yol haritası oluyor. Önceliği, en az emekle en hızlı sonuç verecek işlere veriyorum; böylece ilk aylardan itibaren somut bir ilerleme görebiliyoruz.",
    ],
  },
  {
    tag: "Paralel yürür",
    tone: "accent",
    title: "Teknik optimizasyon",
    paragraphs: [
      "Yol haritası çıkar çıkmaz teknik düzeltmelere başlıyorum, çünkü Google'ın sitenizi sorunsuz tarayamadığı bir durumda diğer çalışmaların etkisi sınırlı kalıyor. Sayfa hızı, mobil deneyim, indekslenme hataları, yönlendirmeler, site haritası ve yapılandırılmış veri bu aşamanın başlıca konuları.",
      "Bu düzenlemeleri ya doğrudan kendim yapıyorum ya da yazılım ekibinize uygulanabilir, net talimatlar halinde iletiyorum. Teknik çalışma, içerik ve bağlantı çalışmalarıyla aynı anda ilerliyor; birinin bitmesini beklemiyoruz.",
    ],
  },
  {
    tag: "1. aydan itibaren",
    tone: "brand",
    title: "İçerik ve sayfa optimizasyonu",
    paragraphs: [
      "Belirlediğimiz kelimelere göre mevcut sayfalarınızı yeniden düzenliyorum: başlıklar, açıklamalar, sayfa yapısı ve iç bağlantılar. Eksik kalan konular için yeni içerik planları hazırlıyor, rakiplerinizden daha net ve daha faydalı sayfalar oluşturmanıza yardımcı oluyorum.",
      "İçerik tarafında amacım yalnızca Google'ı memnun etmek değil; sayfaya gelen kişinin aradığını bulup size ulaşması. Sıralama kadar dönüşümü de önemsiyorum.",
    ],
  },
  {
    tag: "Ayrı bütçelendirilir",
    tone: "amber",
    title: "Backlink ve dijital PR çalışmaları",
    paragraphs: [
      "Rekabetçi kelimelerde üst sıralara çıkmak için sitenizin başka güvenilir sitelerden bağlantı alması gerekiyor. Sektörünüzle ilgili yayınlarda, haber sitelerinde ve bloglarda doğal biçimde yer almanızı sağlayacak bir bağlantı planı hazırlıyorum.",
      "Bu kalem danışmanlık ücretinden ayrı bütçelendiriliyor, çünkü yayın maliyetleri seçilen siteye ve sektöre göre ciddi farklılık gösteriyor. Hangi siteye neden ve ne kadar bütçe ayırdığımızı önceden şeffaf bir listeyle paylaşıyorum; siz onaylamadan hiçbir harcama yapılmıyor.",
    ],
  },
  {
    tag: "Her ay",
    tone: "brand",
    title: "Ölçüm, raporlama ve iyileştirme",
    paragraphs: [
      "Her ay sıralamalardaki değişimi, organik ziyaretçi sayısını ve bu ziyaretçilerin ne kadarının müşteriye dönüştüğünü raporluyorum. Raporları teknik terimlere boğmadan, ne anlama geldiğini açıklayarak paylaşıyorum.",
      "Sonuçlara göre planı güncelliyorum: işe yarayanı büyütüyor, beklentiyi karşılamayanı değiştiriyoruz. Google algoritmaları değiştikçe stratejiyi de güncel tutuyorum.",
    ],
  },
];

const tagStyles: Record<string, string> = {
  brand: "bg-brand-light text-brand",
  accent: "bg-accent-light text-accent-dark",
  amber: "bg-amber-100 text-amber-800",
};

export function SeoProcess() {
  return (
    <section className="border-t border-line bg-canvas py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">Çalışma süreci</p>
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-[40px] md:leading-[1.2]">
              SEO danışmanlığı adım adım nasıl ilerliyor?
            </h2>
            <p className="mt-5 leading-relaxed text-ink-soft">
              Birlikte çalışmaya başladığımızda önce sitenizi analiz edip bir yol haritası çıkarıyorum. Ardından teknik
              iyileştirmeler, içerik ve bağlantı çalışmaları paralel olarak ilerliyor. Bağlantı tarafı, maliyeti yayına
              göre değiştiği için ayrıca planlanıyor.
            </p>
            <Link
              href="/audit-talebi"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Ücretsiz ön analizle başlayalım
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <ol className="relative space-y-6 before:absolute before:bottom-6 before:left-[22px] before:top-6 before:w-px before:bg-line-strong lg:col-span-8">
          {steps.map((step, i) => (
            <li key={step.title} className="relative flex gap-5">
              <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-white text-sm font-bold text-brand shadow-card">
                {i + 1}
              </span>
              <div className="flex-1 rounded-3xl border border-line bg-white p-6 shadow-card md:p-8">
                <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${tagStyles[step.tone]}`}>{step.tag}</span>
                <h3 className="mt-3 text-xl font-bold text-ink">{step.title}</h3>
                <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-ink-soft">
                  {step.paragraphs.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Kimler için ---------------- */

const audiences = [
  { icon: ShoppingBag, sector: "E-ticaret siteleri", search: "kadın koşu ayakkabısı", why: "Ürün aramalarında ilk sayfada olmayan mağaza, reklam bütçesine mecbur kalıyor." },
  { icon: Stethoscope, sector: "Klinikler ve hekimler", search: "kadıköy ortodontist", why: "Hastalar randevu almadan önce Google'da arama yapıp ilk sıralardaki kliniklere bakıyor." },
  { icon: Briefcase, sector: "Avukatlar ve danışmanlar", search: "boşanma avukatı istanbul", why: "Hizmet aramalarında üst sırada olmak, güvenin ilk adımı oluyor." },
  { icon: Building2, sector: "Kurumsal ve B2B şirketler", search: "endüstriyel soğutma sistemleri", why: "Satın alma kararından önceki araştırmada görünür olmak, nitelikli teklif talebi getiriyor." },
  { icon: MapPin, sector: "Yerel işletmeler", search: "yakınımdaki güzellik merkezi", why: "Harita sonuçlarında ilk üçte yer almak, doğrudan telefon ve yol tarifi demek." },
  { icon: Plane, sector: "Turizm ve otelcilik", search: "kapadokya butik otel", why: "Rezervasyon sitelerine komisyon ödemeden doğrudan misafir kazanmanın yolu organik görünürlük." },
];

export function SeoAudience() {
  return (
    <section className="border-t border-line bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Heading
          eyebrow="Kimler için?"
          title="Müşteriniz sizi Google'da arıyorsa, SEO sizin için"
          intro="Aşağıdaki aramalar, insanların her gün Google'a yazdığı türden aramalar. Kendi sektörünüzde benzer bir arama yapıldığında ilk sayfada değilseniz, o müşteri sizi hiç görmeden bir rakibinize gidiyor olabilir."
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map(({ icon: Icon, sector, search, why }) => (
            <article key={sector} className="flex flex-col rounded-3xl border border-line bg-canvas p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand shadow-card">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-bold text-ink">{sector}</h3>
              </div>
              <p className="mt-5 flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-[15px] text-ink">
                <span className="text-ink-faint">🔍</span> {search}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{why}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Sonuçlar ---------------- */

function formatPercent(raw: string) {
  const n = parseFloat(raw.replace(/[^\d.]/g, ""));
  if (Number.isNaN(n)) return raw;
  return `+%${n.toLocaleString("tr-TR", { maximumFractionDigits: 1 })}`;
}

export function SeoProof() {
  const featured = caseStudies.slice(0, 3);
  return (
    <section className="bg-night py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Sonuçlar</p>
            <p className="text-6xl font-bold tracking-tight text-white md:text-7xl">+%250</p>
            <p className="mt-4 text-xl font-semibold text-white">organik trafik artışı</p>
            <p className="mt-4 leading-relaxed text-white/70">
              Altı aylık teknik SEO ve içerik mimarisi çalışmasının sonunda bir müşterimin organik ziyaretçi sayısı bu
              seviyede arttı.
            </p>
            <p className="mt-6 text-xs text-white/45">Kaynak: Ekim Demirci vaka çalışmaları, 2025</p>
          </div>
          <div className="lg:col-span-7">
            <p className="mb-4 text-sm font-semibold text-white/70">Vaka analizlerimden örnekler</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {featured.map((study) => (
                <Link
                  key={study.slug}
                  href={`/basari-hikayeleri/${study.slug}`}
                  className="group flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:bg-white/[0.08]"
                >
                  <span className="inline-flex items-center gap-1 text-xs text-white/50">
                    <Clock className="h-3.5 w-3.5" /> {study.duration}
                  </span>
                  <h3 className="mt-2 font-bold leading-snug text-white">{study.company}</h3>
                  <dl className="mt-4 grid grid-cols-2 gap-2 border-t border-white/10 pt-3">
                    <div>
                      <dt className="text-[11px] text-white/50">Tıklama</dt>
                      <dd className="text-lg font-bold text-accent">{formatPercent(study.clickIncrease)}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] text-white/50">Gösterim</dt>
                      <dd className="text-lg font-bold text-white">{formatPercent(study.impressionIncrease)}</dd>
                    </div>
                  </dl>
                  <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-accent">
                    İncele <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Alt hizmetler ve fiyat ---------------- */

const subServices = [
  { icon: Wrench, title: "Teknik SEO", href: "/seo-hizmetleri/teknik-seo", text: "Tarama, indekslenme, hız ve altyapı" },
  { icon: FileText, title: "Site içi SEO", href: "/seo-hizmetleri/sayfa-ici-seo", text: "Kelime planı, sayfa ve içerik düzeni" },
  { icon: Link2, title: "Site dışı SEO", href: "/seo-hizmetleri/sayfa-disi-seo", text: "Backlink, dijital PR ve otorite" },
  { icon: Sparkles, title: "Yapay zeka SEO", href: "/seo-hizmetleri/yapay-zeka-seo", text: "Platformlara özel stratejiler" },
  { icon: Bot, title: "GEO danışmanlığı", href: "/geo-danismanligi", text: "ChatGPT ve AI Overview görünürlüğü" },
  { icon: Building2, title: "Sektörel SEO", href: "/sektorel-seo-hizmetleri", text: "Sektörünüze özel yol haritası" },
];

const plans = [
  { name: "Başlangıç", price: "₺20.000", note: "Küçük işletmeler ve yeni başlayanlar için" },
  { name: "Profesyonel", price: "₺30.000", note: "Büyüyen işletmeler için kapsamlı çözüm", highlight: true },
  { name: "Kapsamlı", price: "₺40.000", note: "Büyük kuruluşlar için özelleştirilmiş çözüm" },
];

export function SeoServicesAndPricing() {
  return (
    <section className="border-t border-line bg-canvas py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Heading eyebrow="Hizmet detayları" title="Her alanı ayrı ayrı inceleyin" />
            <div className="-mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {subServices.map(({ icon: Icon, title, href, text }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-4 transition-all hover:border-brand/30 hover:shadow-card"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-semibold text-ink group-hover:text-brand">{title}</span>
                    <span className="block text-sm text-ink-muted">{text}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-ink-faint transition-transform group-hover:translate-x-1 group-hover:text-brand" />
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <Heading eyebrow="Fiyatlandırma" title="Aylık SEO danışmanlığı paketleri" />
            <div className="-mt-4 space-y-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`flex items-center justify-between rounded-2xl border p-5 ${
                    plan.highlight ? "border-brand bg-white shadow-card" : "border-line bg-white"
                  }`}
                >
                  <div>
                    <p className="font-bold text-ink">
                      {plan.name}
                      {plan.highlight ? <span className="ml-2 rounded-full bg-brand-light px-2 py-0.5 text-[11px] font-semibold text-brand">Önerilen</span> : null}
                    </p>
                    <p className="text-sm text-ink-muted">{plan.note}</p>
                  </div>
                  <p className="text-xl font-bold text-ink">
                    {plan.price}
                    <span className="text-xs font-medium text-ink-muted"> /ay</span>
                  </p>
                </div>
              ))}
              <p className="text-sm leading-relaxed text-ink-soft">
                Backlink ve dijital PR çalışmaları ayrıca bütçelendirilir. Kesin teklifi ön analizden sonra sitenizin
                ihtiyacına göre hazırlıyorum.
              </p>
              <Link href="/seo-danismanlik-fiyatlari" className="group inline-flex items-center gap-1 text-sm font-semibold text-brand">
                Paketlerin kapsamını inceleyin <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
