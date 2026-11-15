import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Copy,
  FileWarning,
  Gauge,
  MonitorSmartphone,
  Network,
  RefreshCcw,
  SearchX,
  ShieldAlert,
  ShoppingCart,
  Signpost,
  Braces,
  TrendingDown,
} from "lucide-react";

function Heading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="mb-12">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-ink md:text-[40px] md:leading-[1.2]">{title}</h2>
      {intro ? <p className="mt-5 text-lg leading-relaxed text-ink-soft">{intro}</p> : null}
    </div>
  );
}

/* ---------------- Kapsam ---------------- */

const scopeItems = [
  {
    icon: Network,
    title: "Google'ın sitenizi sorunsuz taramasını sağlıyorum",
    text: "Google'ın botları sitenizdeki sayfalara ulaşamıyorsa, o sayfalar arama sonuçlarında hiç çıkmaz. robots.txt dosyasını, site haritasını ve iç bağlantı yapısını, Google'ın önemli sayfalarınızı kolayca bulacağı şekilde düzenliyorum.",
  },
  {
    icon: Gauge,
    title: "Sitenizi hızlandırıyorum",
    text: "Yavaş açılan bir sayfa hem ziyaretçiyi kaçırır hem de Google'ın gözünde puan kaybettirir. Görselleri, kod dosyalarını ve sunucu ayarlarını inceleyip Core Web Vitals denen hız ve deneyim ölçümlerini iyi seviyeye getiriyorum.",
  },
  {
    icon: MonitorSmartphone,
    title: "Mobil deneyimi düzeltiyorum",
    text: "Google sitenizi öncelikle mobil sürümüne bakarak değerlendiriyor. Telefonda kayan içerikleri, tıklanması zor butonları ve mobilde gizlenen önemli bilgileri tespit edip düzeltiyorum.",
  },
  {
    icon: Copy,
    title: "Aynı içeriğin tekrarlanmasını önlüyorum",
    text: "Aynı sayfa birden fazla adreste görünüyorsa Google hangisini sıralayacağını şaşırır ve gücü bölünür. Canonical etiketleri, yönlendirmeler ve dizine eklenme kurallarıyla her içeriğin tek bir doğru adresi olmasını sağlıyorum.",
  },
  {
    icon: Braces,
    title: "Yapılandırılmış veri ekliyorum",
    text: "Yapılandırılmış veri (Schema), sayfanızın ne anlattığını Google'a doğrudan söyleyen bir koddur. Ürün, hizmet, işletme ve sık sorulan sorular için doğru şemaları ekleyerek arama sonuçlarında daha dikkat çekici görünmenize yardımcı oluyorum.",
  },
  {
    icon: RefreshCcw,
    title: "Site yenileme ve taşımalarda trafiği koruyorum",
    text: "Yeni tasarıma, yeni altyapıya ya da yeni alan adına geçerken yapılan küçük bir hata, yıllarca kazanılmış sıralamaları birkaç haftada silebilir. Taşıma öncesinde yönlendirme planını hazırlıyor, sonrasında her şeyin yerinde olduğunu kontrol ediyorum.",
  },
];

export function TeknikScope() {
  return (
    <section className="border-t border-line bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Heading
          eyebrow="Kapsam"
          title="Teknik SEO danışmanlığında neler yapıyorum?"
          intro="Teknik SEO, sitenizin görünmeyen altyapısıyla ilgilenir: Google'ın sitenize ulaşabilmesi, sayfaları anlayabilmesi ve ziyaretçilere hızlı bir deneyim sunulması. Bu alandaki işleri teknik terimlere boğmadan aşağıda anlattım."
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {scopeItems.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-3xl border border-line bg-canvas p-7">
              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand shadow-card">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-bold leading-snug text-ink">{title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{text}</p>
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
    tag: "1. hafta",
    tone: "brand",
    title: "Tarama ve teknik denetim",
    paragraphs: [
      "Sitenizi, Google'ın botlarının yaptığı gibi baştan sona tarıyorum. Screaming Frog gibi tarama araçlarıyla tüm sayfaları, bağlantıları ve yönlendirmeleri inceliyor; Google Search Console verilerinizle hangi sayfaların dizinde olup hangilerinin dışarıda kaldığını karşılaştırıyorum.",
      "Hız tarafında PageSpeed Insights ve gerçek kullanıcı verileriyle sayfalarınızın Core Web Vitals değerlerini ölçüyorum. Bu aşamanın sonunda sitenizdeki tüm teknik sorunların eksiksiz bir listesi ortaya çıkıyor.",
    ],
  },
  {
    tag: "1. ve 2. hafta",
    tone: "brand",
    title: "Önceliklendirme ve yol haritası",
    paragraphs: [
      "Her teknik sorun aynı önemde değil. Bulguları sıralamanıza etkisine ve düzeltme zahmetine göre sıralıyorum; önce en az emekle en çok fark yaratacak işlere başlıyoruz.",
      "Her madde için neyin, neden ve nasıl düzeltileceğini açık bir dille yazıyorum. Yazılım ekibiniz varsa, doğrudan uygulayabilecekleri net talimatlar ve gerektiğinde kod örnekleri hazırlıyorum.",
    ],
  },
  {
    tag: "Ben ya da ekibiniz",
    tone: "accent",
    title: "Uygulama",
    paragraphs: [
      "Düzeltmeleri ister doğrudan kendim yapıyorum, ister yazılım ekibinizle birlikte ilerliyoruz. Siteniz WordPress, Shopify, özel bir yazılım ya da Next.js gibi modern bir altyapı üzerinde olabilir; her düzeltmeyi kullandığınız altyapıya uygun şekilde planlıyorum.",
      "Değişiklikler canlıya alınmadan önce mümkünse test ortamında kontrol ediliyor. Böylece bir sorunu düzeltirken başka bir sorun yaratma riskini en aza indiriyorum.",
    ],
  },
  {
    tag: "Uygulama sonrası",
    tone: "brand",
    title: "Doğrulama",
    paragraphs: [
      "Yapılan her düzeltmenin gerçekten işe yaradığını Google Search Console ve PageSpeed Insights üzerinden doğruluyorum. Düzeltilen sayfaların Google tarafından yeniden taranmasını hızlandırmak için gerekli adımları atıyorum.",
    ],
  },
  {
    tag: "Her ay",
    tone: "brand",
    title: "Sürekli izleme",
    paragraphs: [
      "Teknik SEO bir kerelik bir temizlik değil. Siteye eklenen her yeni sayfa, eklenti ya da tasarım değişikliği yeni sorunlar doğurabiliyor. Sitenizi düzenli olarak tarıyor, yeni bir hata çıktığında büyümeden müdahale ediyorum.",
    ],
  },
];

const tagStyles: Record<string, string> = {
  brand: "bg-brand-light text-brand",
  accent: "bg-accent-light text-accent-dark",
};

export function TeknikProcess() {
  return (
    <section className="border-t border-line bg-canvas py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">Çalışma süreci</p>
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-[40px] md:leading-[1.2]">
              Teknik SEO çalışması adım adım nasıl ilerliyor?
            </h2>
            <p className="mt-5 leading-relaxed text-ink-soft">
              Önce sitenizi baştan sona tarayıp tüm sorunları listeliyorum. Ardından önem sırasına göre düzeltiyor,
              sonuçları doğruluyor ve siteyi düzenli olarak izlemeye devam ediyorum.
            </p>
            <Link
              href="/audit-talebi"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Ücretsiz teknik kontrolle başlayalım
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

/* ---------------- Belirtiler ---------------- */

const symptoms = [
  { icon: SearchX, title: "Sayfalarım Google'da çıkmıyor", text: "Yeni eklediğiniz sayfalar haftalar geçmesine rağmen aramalarda görünmüyorsa, büyük ihtimalle bir tarama ya da dizine eklenme sorunu var." },
  { icon: TrendingDown, title: "Site yenilendikten sonra trafik düştü", text: "Tasarım ya da altyapı değişikliğinden sonra yaşanan ani düşüşler, çoğunlukla eksik yönlendirmelerden ve kaybolan sayfalardan kaynaklanıyor." },
  { icon: Gauge, title: "Sitem yavaş açılıyor", text: "Özellikle mobilde birkaç saniyeden uzun süren açılışlar hem ziyaretçi kaybına hem de sıralama kaybına yol açıyor." },
  { icon: FileWarning, title: "Search Console'da hata uyarıları var", text: "\"Taranan ancak dizine eklenmeyen\", \"404\" ya da \"yönlendirme hatası\" gibi uyarılar, Google'ın sitenizde zorlandığını gösteriyor." },
  { icon: ShoppingCart, title: "Binlerce filtre sayfam var", text: "E-ticaret sitelerinde filtre ve sıralama adresleri kontrol edilmezse, Google zamanını değersiz sayfalarda harcıyor." },
  { icon: Code2, title: "Sitem modern bir JavaScript altyapısında", text: "React, Vue ya da benzeri altyapılarda içerik doğru sunulmazsa, Google sayfanın bir kısmını hiç göremeyebiliyor." },
];

export function TeknikSymptoms() {
  return (
    <section className="border-t border-line bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Heading
          eyebrow="Kimler için?"
          title="Bu durumlardan biri tanıdık geliyorsa, teknik SEO zamanı gelmiş demektir"
          intro="Teknik sorunlar genellikle kendini doğrudan değil, belirtileriyle gösterir. Aşağıdakilerden birini ya da birkaçını yaşıyorsanız, sitenizin altyapısına bakmanın vakti gelmiş olabilir."
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {symptoms.map(({ icon: Icon, title, text }) => (
            <article key={title} className="flex gap-4 rounded-3xl border border-line bg-canvas p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-red-500 shadow-card">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-bold text-ink">&ldquo;{title}&rdquo;</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Sonuçlar ---------------- */

const results = [
  { code: "Proje T-1", metric: "98/100", label: "Mobil PageSpeed skoru", detail: "Teknik optimizasyon sonrası mobil hız skorunda ve Core Web Vitals değerlerinde ulaşılan seviye.", source: "Google PageSpeed Insights, 2025" },
  { code: "Dizine eklenme", metric: "%100", label: "İndeks oranı", detail: "Tarama düzenlemesinin ardından 50.000'i aşkın sayfanın tamamının dizine eklenmesi.", source: "Google Search Console" },
  { code: "Tıklama oranı", metric: "+%38", label: "CTR artışı", detail: "Yapılandırılmış veri eklendikten sonra arama sonuçlarındaki tıklama oranında yakalanan artış.", source: "Ekim Demirci vaka çalışmaları" },
];

export function TeknikProof() {
  return (
    <section className="bg-night py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Sonuçlar</p>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-[40px] md:leading-[1.2]">Teknik düzeltmelerin rakamlara yansıması</h2>
          </div>
          <Link href="/basari-hikayeleri" className="group inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-accent">
            Tüm başarı hikâyeleri <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {results.map((r) => (
            <div key={r.code} className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">{r.code}</p>
              <p className="mt-3 text-5xl font-bold tracking-tight text-white">{r.metric}</p>
              <p className="mt-1 font-semibold text-accent">{r.label}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-white/70">{r.detail}</p>
              <p className="mt-auto border-t border-white/10 pt-4 text-xs text-white/45">Kaynak: {r.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Diğer hizmetler ---------------- */

const related = [
  { icon: Signpost, title: "SEO danışmanlığı", href: "/seo-danismanligi", text: "Teknik, içerik ve otoriteyi birlikte ele alan genel çalışma" },
  { icon: Copy, title: "Site içi SEO", href: "/seo-hizmetleri/sayfa-ici-seo", text: "Sayfaları doğru kelimelerle eşleştirmek" },
  { icon: ShieldAlert, title: "Site dışı SEO", href: "/seo-hizmetleri/sayfa-disi-seo", text: "Backlink ve dijital PR ile otorite" },
];

export function TeknikRelated() {
  return (
    <section className="border-t border-line bg-canvas py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 rounded-3xl border border-line bg-white p-7 shadow-card md:p-10 lg:flex-row lg:items-center">
          <div className="flex-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand">Teknik SEO tek başına yetmez</p>
            <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">Sağlam bir altyapının üzerine içerik ve otorite gerekir</h2>
            <p className="mt-3 leading-relaxed text-ink-soft">
              Teknik SEO, sitenizin önündeki engelleri kaldırır. Üst sıralara çıkmak içinse bu altyapının üzerine doğru
              içerikleri ve güçlü bir bağlantı profilini eklemek gerekir. Bu alanlardaki çalışmalarımı aşağıdaki
              sayfalarda anlattım.
            </p>
          </div>
          <div className="grid shrink-0 grid-cols-1 gap-3 lg:w-[380px]">
            {related.map(({ icon: Icon, title, href, text }) => (
              <Link key={href} href={href} className="group flex items-center gap-3 rounded-2xl border border-line bg-canvas p-4 transition-all hover:border-brand/30">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-brand shadow-card">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="flex-1">
                  <span className="block font-semibold text-ink group-hover:text-brand">{title}</span>
                  <span className="block text-xs text-ink-muted">{text}</span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-ink-faint transition-transform group-hover:translate-x-1 group-hover:text-brand" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
