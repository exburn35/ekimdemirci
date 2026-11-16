import Link from "next/link";
import { ArrowRight, Check, Gem, Layers, Plus, Scale, Search, Sliders, Sparkles, Target } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { GuideDefinition, GuideH2, GuideLink, GuideShell, SectionHead } from "@/components/service/ServiceBlocks";
import { comboPlans, geoPlans, seoPlans, tl, type PricePlan } from "@/lib/pricing";

function PlanCard({ plan, tone, ctaLabel }: { plan: PricePlan; tone: "brand" | "accent"; ctaLabel: string }) {
  const ring = tone === "brand" ? "border-brand" : "border-accent";
  const badge = tone === "brand" ? "bg-brand" : "bg-accent-dark";
  const check = tone === "brand" ? "bg-brand-light text-brand" : "bg-accent-light text-accent-dark";
  return (
    <div
      className={`relative flex flex-col rounded-3xl bg-white p-6 md:p-8 ${
        plan.popular ? `border-2 ${ring} shadow-lift` : "border border-line"
      }`}
    >
      {plan.popular ? (
        <span className={`absolute -top-3 left-6 rounded-full ${badge} px-3 py-1 text-xs font-semibold text-white`}>
          En çok tercih edilen
        </span>
      ) : null}
      <h3 className="text-xl font-bold text-ink">{plan.name}</h3>
      <p className="mt-1 text-sm leading-relaxed text-ink-muted">{plan.description}</p>
      <p className="mt-6 flex items-baseline gap-1.5">
        <span className="text-4xl font-bold tracking-tight text-ink">{tl(plan.price)}</span>
        <span className="text-sm text-ink-muted">/ ay</span>
      </p>
      {plan.profile ? (
        <p className="mt-4 rounded-xl bg-canvas px-3.5 py-2.5 text-sm leading-relaxed text-ink-soft">{plan.profile}</p>
      ) : null}
      <ul className="mb-8 mt-6 space-y-3 border-t border-line pt-6">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
            <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${check}`}>
              <Check className="h-3 w-3" />
            </span>
            {f}
          </li>
        ))}
      </ul>
      <Link
        href="/iletisim"
        className={`group mt-auto flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
          plan.popular
            ? "bg-brand text-white hover:bg-brand-dark"
            : "border border-line-strong text-ink hover:border-ink/30"
        }`}
      >
        {ctaLabel}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}

const factors = [
  {
    icon: Sliders,
    title: "Sitenizin teknik durumu",
    text: "Taranma ve indeksleme sorunları olan bir sitede ilk aylar ağırlıklı olarak teknik düzeltmelerle geçer. Altyapı sağlamsa doğrudan içerik ve otorite tarafına geçebilirim.",
  },
  {
    icon: Target,
    title: "Hedef kelimelerin rekabeti",
    text: "Mahallenizdeki bir hizmet için sıralama almak ile ulusal bir e-ticaret kategorisinde öne çıkmak aynı emeği gerektirmiyor. Rekabet arttıkça iş yükü ve bütçe de artıyor.",
  },
  {
    icon: Scale,
    title: "Rakiplerinizin gücü",
    text: "Rakiplerinizin ne kadar süredir SEO'ya yatırım yaptığı ve ne kadar güçlü bağlantılara sahip olduğu, aradaki farkı kapatmak için atılacak adımların büyüklüğünü belirliyor.",
  },
  {
    icon: Gem,
    title: "İçerik ihtiyacı",
    text: "Sitenin büyüklüğüne ve hedeflenen konu sayısına göre üretilmesi ya da düzenlenmesi gereken içerik hacmi değişiyor. Bu da paketi belirleyen ana etkenlerden biri.",
  },
];

const scenarios = [
  {
    badge: "Daha düşük rekabet",
    title: "Yerel hizmet işletmeleri",
    text: "Bir diş kliniği, güzellik merkezi ya da avukatlık bürosu genellikle kendi şehrinde ya da semtinde rekabet ediyor. Bu tür projelerde Başlangıç paketi çoğu zaman yeterli oluyor.",
    plan: "Başlangıç",
  },
  {
    badge: "Orta ve yüksek rekabet",
    title: "Ulusal e-ticaret siteleri",
    text: "Yüzlerce ya da binlerce ürünün olduğu sitelerde teknik SEO ve kategori yapısı öne çıkıyor. Burada Profesyonel ya da Kapsamlı paket daha gerçekçi bir seçim.",
    plan: "Profesyonel / Kapsamlı",
  },
  {
    badge: "Çok yüksek rekabet",
    title: "Finans, sağlık ve benzeri sektörler",
    text: "Reklam tıklama maliyetlerinin çok yüksek olduğu sektörlerde kalıcı sıralama, uzun soluklu ve yoğun bir çalışma gerektiriyor. Kapsamlı paketle ve GEO desteğiyle planlamayı öneririm.",
    plan: "Kapsamlı + Otorite",
  },
];

const faqItems = [
  {
    question: "SEO fiyatları neden firmadan firmaya bu kadar farklı?",
    answer:
      "Çünkü “SEO hizmeti” adı altında çok farklı işler satılıyor. Bazı teklifler yalnızca otomatik rapor göndermeyi kapsarken bazıları teknik düzeltme, içerik planı ve otorite çalışmasını birlikte içeriyor. Teklifleri karşılaştırırken fiyattan önce her ay tam olarak hangi işlerin yapılacağını sormanızı öneririm.",
  },
  {
    question: "GEO fiyatları SEO fiyatlarından neden daha yüksek?",
    answer:
      "GEO, SEO'nun üzerine eklenen ayrı bir iş yükü. Markanızın ChatGPT, Perplexity, Gemini ve Google AI Overview'da düzenli olarak test edilmesi, içeriklerin yapay zekanın alıntılayabileceği biçimde yeniden kurgulanması ve markanızın başka kaynaklarda doğru bağlamda anılması için ek zaman ve araç gerekiyor.",
  },
  {
    question: "SEO + GEO paketinde fiyat nasıl hesaplanıyor?",
    answer:
      "SEO paketinin fiyatına, eşleştiği GEO paketinin fiyatının yarısını ekliyorum. Örneğin Profesyonel SEO paketi 30.000 TL, Referans GEO paketi 45.000 TL; ikisini birlikte aldığınızda 30.000 + 22.500 = 52.500 TL ödüyorsunuz. İki çalışma aynı temeli (teknik altyapı, içerik, otorite) paylaştığı için bu indirimi yapabiliyorum.",
  },
  {
    question: "Bağlantı ve tanıtım yazısı bedelleri pakete dahil mi?",
    answer:
      "Hayır. Otorite çalışmasının planlanması ve takibi pakete dahil; ancak sitelerde yayınlanacak tanıtım yazılarının ve dijital PR yayınlarının bedeli ayrı bütçelendiriliyor. Hangi sitede yayın yapılacağına sizin onayınızla birlikte karar veriyoruz.",
  },
  {
    question: "Sözleşme ya da minimum çalışma süresi var mı?",
    answer:
      "Sözleşme yapmıyorum ve minimum çalışma süresi yok. Fiyatlar da süreye göre değişmiyor: üç ay çalışsak da bir yıl çalışsak da aylık ücret aynı. Her ay ne yaptığımı ve neyin değiştiğini raporluyorum; devam edip etmemek tamamen sizin kararınız.",
  },
  {
    question: "Sonuçları ne zaman görmeye başlarım?",
    answer:
      "Teknik düzeltmelerin etkisi çoğu zaman ilk haftalarda Search Console'a yansımaya başlıyor. Rekabetçi aramalarda kalıcı sıralama artışı ise genellikle üç ila altı ay sürüyor. Süre; sitenizin başlangıç durumuna, sektörünüze ve değişikliklerin ne kadar hızlı uygulandığına bağlı.",
  },
  {
    question: "Paketler arasında geçiş yapabilir miyim?",
    answer:
      "Evet. İşinizin büyüme hızına ya da değişen ihtiyaçlarınıza göre paketler arasında geçiş yapabilirsiniz. SEO ile başlayıp ilerleyen aylarda GEO'yu eklemek de mümkün.",
  },
];

const toc = [
  { id: "seo-fiyatlari-nasil-belirlenir", label: "SEO fiyatları nasıl belirlenir?" },
  { id: "geo-fiyatlari-neyi-kapsar", label: "GEO fiyatları neyi kapsar?" },
  { id: "ucuz-seo-teklifleri", label: "Çok ucuz SEO tekliflerine dikkat" },
  { id: "hangi-paket", label: "Hangi paketi seçmelisiniz?" },
];

export default function PricingPage() {
  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO ve GEO Danışmanlığı",
    serviceType: "SEO Danışmanlığı",
    provider: { "@type": "Person", name: "Ekim Demirci", url: "https://ekimdemirci.com" },
    areaServed: "TR",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "SEO ve GEO fiyatları",
      itemListElement: [
        ...seoPlans.map((p) => ({ name: `SEO ${p.name}`, price: p.price })),
        ...geoPlans.map((p) => ({ name: `GEO ${p.name}`, price: p.price })),
        ...comboPlans.map((c) => ({ name: `SEO + GEO ${c.name}`, price: c.total })),
      ].map((o) => ({
        "@type": "Offer",
        name: o.name,
        priceCurrency: "TRY",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: o.price,
          priceCurrency: "TRY",
          unitText: "ay",
                  },
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }} />

      <div className="bg-canvas">
        <Breadcrumb items={[{ name: "SEO Danışmanlık Fiyatları", href: "/seo-danismanlik-fiyatlari" }]} />

        {/* Hero */}
        <section className="relative overflow-hidden pb-12 pt-6 md:pb-16">
          <div className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[620px] rounded-full bg-brand/10 blur-[120px]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">Fiyatlar · 2026</p>
            <h1 className="text-4xl font-bold tracking-tight text-ink md:text-5xl lg:text-6xl">
              SEO fiyatları ve GEO fiyatları
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              “Fiyat için bize ulaşın” demek yerine paketlerimi ve fiyatlarımı açıkça yazıyorum. Aşağıda Google için SEO
              danışmanlığı, ChatGPT ve Google AI Overview gibi yapay zeka araçları için GEO danışmanlığı ve ikisini
              birlikte aldığınızda geçerli olan indirimli SEO + GEO paketlerini bulabilirsiniz. Tüm fiyatlar aylıktır.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { href: "#seo-fiyatlari", label: "SEO fiyatları", from: seoPlans[0].price, icon: Search, tone: "text-brand bg-brand-light" },
                { href: "#geo-fiyatlari", label: "GEO fiyatları", from: geoPlans[0].price, icon: Sparkles, tone: "text-accent-dark bg-accent-light" },
                { href: "#seo-geo-paketleri", label: "SEO + GEO paketleri", from: comboPlans[0].total, icon: Layers, tone: "text-ink bg-canvas-alt" },
              ].map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.href}
                    href={c.href}
                    className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
                  >
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${c.tone}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="flex-1">
                      <span className="block font-semibold text-ink">{c.label}</span>
                      <span className="text-sm text-ink-muted">aylık {tl(c.from)}&apos;den başlayan</span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-ink-faint transition-transform group-hover:translate-x-1" />
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* SEO fiyatları */}
      <section id="seo-fiyatlari" className="scroll-mt-24 bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="SEO danışmanlığı"
            title="SEO fiyatları: aylık danışmanlık paketleri"
            intro="Google'da daha üst sıralarda görünmek isteyen siteler için üç paket hazırladım. Aradaki fark, sitenin büyüklüğü ve rekabetin yoğunluğuna göre her ay ayırdığım zaman ve yaptığım işlerin kapsamı."
          />
          <div className="grid grid-cols-1 gap-6 pt-3 lg:grid-cols-3">
            {seoPlans.map((p) => (
              <PlanCard key={p.name} plan={p} tone="brand" ctaLabel="Bu paket için teklif alın" />
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            Hizmetin ayrıntıları için <GuideLink href="/seo-danismanligi">SEO danışmanlığı</GuideLink> sayfama göz atabilirsiniz.
          </p>
        </div>
      </section>

      {/* GEO fiyatları */}
      <section id="geo-fiyatlari" className="scroll-mt-24 border-t border-line bg-canvas py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="GEO danışmanlığı"
            title="GEO fiyatları: yapay zeka görünürlük paketleri"
            intro="Müşterileriniz artık bir öneri istediğinde yalnızca Google'a değil, ChatGPT'ye, Perplexity'ye ve Gemini'ye de soruyor. GEO paketleri, markanızın bu cevaplarda anılması ve kaynak olarak gösterilmesi için yaptığım çalışmayı kapsıyor."
          />
          <div className="grid grid-cols-1 gap-6 pt-3 lg:grid-cols-3">
            {geoPlans.map((p) => (
              <PlanCard key={p.name} plan={p} tone="accent" ctaLabel="GEO teklifi alın" />
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            GEO&apos;nun nasıl işlediğini <GuideLink href="/geo-danismanligi">GEO danışmanlığı</GuideLink> sayfamda adım adım anlattım.
          </p>
        </div>
      </section>

      {/* SEO + GEO */}
      <section id="seo-geo-paketleri" className="scroll-mt-24 border-t border-line bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="İkisi birlikte"
            title="SEO + GEO paketleri: GEO bedelinin yarısını ödersiniz"
            intro="SEO ve GEO aynı temelin üzerinde yükseliyor: iyi taranan bir site, net içerikler ve güvenilir bir marka. İki çalışmayı birlikte yürüttüğümde bu temeli bir kez kuruyorum. Bu yüzden ikisini birlikte alırsanız SEO paketinin fiyatına, eşleşen GEO paketinin yalnızca yarısını ekliyorum."
          />

          <div className="grid grid-cols-1 gap-6 pt-3 lg:grid-cols-3">
            {comboPlans.map((c) => (
              <div
                key={c.name}
                className={`relative flex flex-col rounded-3xl p-6 md:p-8 ${
                  c.popular ? "bg-night text-white shadow-lift" : "border border-line bg-canvas"
                }`}
              >
                {c.popular ? (
                  <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                    En çok tercih edilen
                  </span>
                ) : null}
                <h3 className={`text-xl font-bold ${c.popular ? "text-white" : "text-ink"}`}>{c.name}</h3>
                <div className={`mt-5 space-y-2 text-sm ${c.popular ? "text-white/70" : "text-ink-soft"}`}>
                  <p className="flex justify-between">
                    <span>SEO {c.seo.name}</span>
                    <span>{tl(c.seo.price)}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="inline-flex items-center gap-1">
                      <Plus className="h-3.5 w-3.5" /> GEO {c.geo.name} (yarı fiyat)
                    </span>
                    <span>{tl(c.geoShare)}</span>
                  </p>
                </div>
                <p className={`mt-5 border-t pt-5 ${c.popular ? "border-white/15" : "border-line"}`}>
                  <span className={`block text-sm line-through ${c.popular ? "text-white/40" : "text-ink-faint"}`}>
                    Ayrı ayrı {tl(c.separate)}
                  </span>
                  <span className="flex items-baseline gap-1.5">
                    <span className="text-4xl font-bold tracking-tight">{tl(c.total)}</span>
                    <span className={`text-sm ${c.popular ? "text-white/60" : "text-ink-muted"}`}>/ ay</span>
                  </span>
                </p>
                <p
                  className={`mt-4 inline-flex self-start rounded-full px-3 py-1 text-sm font-semibold ${
                    c.popular ? "bg-accent/20 text-accent-light" : "bg-accent-light text-accent-dark"
                  }`}
                >
                  Her ay {tl(c.saving)} daha az
                </p>
                <Link
                  href="/iletisim"
                  className={`group mt-8 flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                    c.popular ? "bg-white text-ink hover:bg-canvas" : "border border-line-strong text-ink hover:border-ink/30"
                  }`}
                >
                  SEO + GEO teklifi alın
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>

          {/* Karşılaştırma tablosu */}
          <div className="mt-10 overflow-x-auto rounded-3xl border border-line">
            <table className="w-full min-w-[640px] border-collapse text-left text-[15px]">
              <caption className="sr-only">SEO, GEO ve SEO + GEO aylık fiyat karşılaştırması</caption>
              <thead>
                <tr className="bg-canvas text-sm text-ink-muted">
                  <th scope="col" className="px-5 py-4 font-semibold">Seviye</th>
                  <th scope="col" className="px-5 py-4 font-semibold">SEO fiyatı</th>
                  <th scope="col" className="px-5 py-4 font-semibold">GEO fiyatı</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Ayrı ayrı toplam</th>
                  <th scope="col" className="px-5 py-4 font-semibold text-brand">SEO + GEO birlikte</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Aylık kazancınız</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line bg-white">
                {comboPlans.map((c) => (
                  <tr key={c.name}>
                    <th scope="row" className="px-5 py-4 font-semibold text-ink">{c.name}</th>
                    <td className="px-5 py-4 text-ink-soft">{tl(c.seo.price)}</td>
                    <td className="px-5 py-4 text-ink-soft">{tl(c.geo.price)}</td>
                    <td className="px-5 py-4 text-ink-faint line-through">{tl(c.separate)}</td>
                    <td className="px-5 py-4 font-bold text-brand">{tl(c.total)}</td>
                    <td className="px-5 py-4 font-semibold text-accent-dark">{tl(c.saving)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-ink-muted">
            Farklı seviyeleri de birleştirebilirsiniz (ör. Profesyonel SEO + Radar GEO). Hesap aynı: SEO fiyatı + GEO fiyatının yarısı.
          </p>
        </div>
      </section>

      {/* Fiyatı ne belirler + senaryolar */}
      <section className="border-t border-line bg-canvas py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Doğru paketi seçmek"
            title="Size uygun paketi ne belirliyor?"
            intro="İlk görüşmede sitenize bakıp hangi paketin yeterli olacağını açıkça söylüyorum; ihtiyacınız olmayan bir paketi önermem. Kararı genellikle şu dört etken belirliyor."
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {factors.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="flex gap-4 rounded-3xl border border-line bg-white p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-ink">{f.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{f.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <h3 className="mb-5 mt-12 text-2xl font-bold text-ink">Sektöre göre tipik senaryolar</h3>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {scenarios.map((s) => (
              <div key={s.title} className="flex flex-col rounded-3xl border border-line bg-white p-6">
                <span className="self-start rounded-full bg-canvas px-3 py-1 text-xs font-semibold text-ink-soft">{s.badge}</span>
                <h4 className="mt-4 text-lg font-bold text-ink">{s.title}</h4>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-soft">{s.text}</p>
                <p className="mt-5 border-t border-line pt-4 text-sm">
                  <span className="text-ink-muted">Genellikle: </span>
                  <span className="font-semibold text-brand">{s.plan}</span>
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/sektorel-seo-hizmetleri"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
          >
            Sektörel SEO hizmetlerini inceleyin <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Rehber + SSS */}
      <GuideShell
        id="rehber"
        eyebrow="Rehber"
        title="SEO ve GEO fiyatları hakkında bilmeniz gerekenler"
        intro="Teklif toplarken işinize yarayacak birkaç noktayı, kendi fiyatlarımdan bağımsız olarak burada topladım."
        toc={toc}
        cta={{
          eyebrow: "Ücretsiz ön analiz",
          title: "Hangi paket size uygun?",
          text: "Sitenize kısa bir bakış atayım, ihtiyacınız olan paketi ve ilk adımları açıkça yazayım.",
          label: "Ön analiz isteyin",
        }}
        faqTitle="SEO ve GEO fiyatları hakkında sık sorulanlar"
        faqItems={faqItems}
      >
        <div className="space-y-5">
          <GuideH2 id="seo-fiyatlari-nasil-belirlenir">SEO fiyatları nasıl belirlenir?</GuideH2>
          <GuideDefinition>
            SEO fiyatı, bir danışmanın ya da ajansın sitenizi Google&apos;da üst sıralara taşımak için her ay yapacağı işin
            karşılığıdır. Fiyatı belirleyen; sitenin büyüklüğü, teknik durumu, rekabet ve gereken içerik ile otorite
            çalışmasının hacmidir.
          </GuideDefinition>
          <p className="leading-relaxed text-ink-soft">
            Türkiye&apos;de SEO hizmeti genellikle aylık danışmanlık modeliyle satılıyor; ben de bu modeli kullanıyorum.
            Bunun nedeni basit: sıralamalar sürekli
            değişiyor, rakipler de boş durmuyor; kalıcı sonuç çoğu zaman düzenli bir çalışmayla geliyor.
          </p>
          <p className="leading-relaxed text-ink-soft">
            Bir teklifi değerlendirirken fiyattan çok kapsamı sorgulamanızı öneririm: Her ay hangi teknik kontroller
            yapılacak, kaç içerik planlanacak, otorite çalışması nasıl yürüyecek ve sonuçlar hangi verilerle raporlanacak?
            Bu soruların net cevabı olmayan bir teklif, fiyatı ne olursa olsun pahalıdır.
          </p>
        </div>

        <div className="space-y-5">
          <GuideH2 id="geo-fiyatlari-neyi-kapsar">GEO fiyatları neyi kapsar?</GuideH2>
          <p className="leading-relaxed text-ink-soft">
            GEO (Generative Engine Optimization), markanızın ChatGPT, Perplexity, Gemini ve Google AI Overview gibi
            yapay zeka araçlarının cevaplarında yer alması için yapılan çalışma. GEO fiyatlarına; sektörünüzde sorulan
            soruların bu araçlarda düzenli olarak test edilmesi, içeriklerin kolay alıntılanabilir hale getirilmesi, şema
            işaretlemeleri, yapay zeka tarayıcılarının sitenize erişimi ve markanızın başka kaynaklarda anılması dahil.
          </p>
          <p className="leading-relaxed text-ink-soft">
            GEO henüz yeni bir alan olduğu için piyasada fiyatlar çok dağınık. Bir teklifte mutlaka görünürlüğün nasıl
            ölçüleceğini sorun: Hangi sorular, hangi platformlarda, ne sıklıkla test ediliyor? Ölçüm yoksa ilerlemeyi de
            göremezsiniz. Platformların kaynak seçimini nasıl yaptığını merak ediyorsanız{" "}
            <GuideLink href="/seo-hizmetleri/yapay-zeka-seo">yapay zeka SEO</GuideLink> sayfama göz atabilirsiniz.
          </p>
        </div>

        <div className="space-y-5">
          <GuideH2 id="ucuz-seo-teklifleri">Çok ucuz SEO tekliflerine dikkat</GuideH2>
          <p className="leading-relaxed text-ink-soft">
            Piyasada aylık birkaç bin liraya “SEO hizmeti” sunan teklifler de var. Bu bütçeyle bir uzmanın sitenize
            her ay ciddi zaman ayırması pek mümkün değil; bu yüzden bu tür paketler çoğunlukla otomatik raporlara ya da
            toplu ve düşük kaliteli bağlantılara dayanıyor. Bu bağlantılar kısa vadede bir hareket yaratsa bile uzun
            vadede sitenize zarar verebiliyor.
          </p>
          <p className="leading-relaxed text-ink-soft">
            Aynı şekilde “ilk ayda birinci sıra” ya da “ChatGPT&apos;de görünme garantisi” veren tekliflere de temkinli
            yaklaşın. Ne Google&apos;ın ne de yapay zeka şirketlerinin algoritmaları dışarıdan kontrol edilebilir. Benim
            verebileceğim söz; doğru yöntemle çalışmak ve her ay neyin değiştiğini verilerle göstermek.
          </p>
        </div>

        <div className="space-y-5">
          <GuideH2 id="hangi-paket">Hangi paketi seçmelisiniz?</GuideH2>
          <p className="leading-relaxed text-ink-soft">
            Siteniz küçükse ve yerel bir pazarda rekabet ediyorsanız Başlangıç paketiyle başlamak çoğu zaman yeterli.
            Sitenizde yüzlerce sayfa varsa, düzenli içerik üretmeniz gerekiyorsa ve otorite çalışması da istiyorsanız
            Profesyonel paket daha doğru bir seçim. Kapsamlı paket ise büyük siteler ve rekabeti çok yüksek sektörler için.
          </p>
          <p className="leading-relaxed text-ink-soft">
            Müşterileriniz karar verirken yapay zeka araçlarına da danışıyorsa, SEO ile GEO&apos;yu birlikte planlamak hem
            daha verimli hem de yukarıdaki SEO + GEO paketleri sayesinde daha ekonomik. Emin değilseniz{" "}
            <GuideLink href="/audit-talebi">ücretsiz ön analiz</GuideLink> isteyin; sitenize bakıp size uygun paketi
            açıkça söyleyeyim.
          </p>
        </div>
      </GuideShell>
    </>
  );
}
