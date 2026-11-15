import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  FileQuestion,
  Fingerprint,
  Megaphone,
  Radar,
  ShoppingBag,
  Stethoscope,
  Briefcase,
  Cpu,
  Plane,
  GraduationCap,
} from "lucide-react";

function Heading({ eyebrow, title, intro, center = false }: { eyebrow: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={`mb-12 ${center ? "mx-auto max-w-4xl text-center" : ""}`}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">{eyebrow}</p>
      <h2 className={`max-w-4xl text-3xl font-bold tracking-tight text-ink md:text-[40px] md:leading-[1.2] ${center ? "mx-auto" : ""}`}>{title}</h2>
      {intro ? <p className="mt-5 text-lg leading-relaxed text-ink-soft">{intro}</p> : null}
    </div>
  );
}

/* ---------------- Kapsam ---------------- */

const scopeItems = [
  {
    icon: Radar,
    title: "Yapay zekanın sizin hakkınızda ne bildiğini ölçüyorum",
    text: "Müşterilerinizin ChatGPT'ye, Gemini'ye ve Google'a sorabileceği soruları tek tek soruyorum. Markanız cevaplarda geçiyor mu, geçiyorsa nasıl anlatılıyor, rakipleriniz nerede duruyor? Hepsini net bir tabloda görüyorsunuz.",
  },
  {
    icon: Bot,
    title: "Sitenizi yapay zekanın okuyabileceği hale getiriyorum",
    text: "Yapay zeka araçları sitenize giremiyor ya da içeriği düzgün okuyamıyorsa, ne kadar iyi içerik yazarsanız yazın görünmezsiniz. Erişim izinlerini, hızı ve sayfa yapısını bu araçların rahatça anlayacağı şekilde düzenliyorum.",
  },
  {
    icon: FileQuestion,
    title: "İçeriklerinizi soru cevap mantığıyla yeniden kurguluyorum",
    text: "Yapay zeka, soruya en net cevabı veren sayfayı alıntılamayı seviyor. Önemli sayfalarınızı lafı dolandırmadan ilk cümlede cevap veren, kolay taranan ve güven veren bir düzene kavuşturuyorum.",
  },
  {
    icon: Fingerprint,
    title: "Markanızı her yerde aynı şekilde tanıtıyorum",
    text: "Sitenizde bir şey, Google İşletme profilinizde başka bir şey, sosyal medyada bambaşka bir şey yazıyorsa yapay zeka kafası karışır ve sizi önermekten çekinir. Adınızı, ne yaptığınızı ve iletişim bilgilerinizi her platformda tutarlı hale getiriyorum.",
  },
  {
    icon: Megaphone,
    title: "Başka sitelerde adınızın geçmesini sağlıyorum",
    text: "Bir markayı öneren yapay zeka, aslında internetin o marka hakkında ne dediğine bakıyor. Sektör yayınlarında, karşılaştırma yazılarında ve haber sitelerinde doğal biçimde anılmanız için planlı bir dijital PR ve bağlantı çalışması yürütüyorum.",
  },
  {
    icon: BarChart3,
    title: "Her ay neyin değiştiğini anlatıyorum",
    text: "Kaç soruda önerildiğinizi, hangi platformda yükseldiğinizi ve yapay zekadan sitenize ne kadar ziyaretçi geldiğini aydan aya karşılaştırıyorum. Raporları teknik terimlere boğmadan, ne anlama geldiğini açıklayarak paylaşıyorum.",
  },
];

export function GeoScope() {
  return (
    <section className="border-t border-line bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Heading
          eyebrow="Kapsam"
          title="GEO danışmanlığında neler yapıyorum?"
          intro="GEO kulağa karmaşık gelebilir ama özünde basit bir amacı var: yapay zekaya sizinle ilgili bir soru sorulduğunda, doğru bilgilerle ve olumlu bir şekilde anılmanız. Bunun için yaptığım işleri teknik jargondan arındırarak aşağıda anlattım."
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
    tag: "1. ve 2. hafta",
    tagTone: "brand",
    title: "Analiz ve yol haritası",
    paragraphs: [
      "Her şey ölçümle başlıyor. Sektörünüzde müşterilerin sorduğu soruları içeren bir soru listesi hazırlayıp ChatGPT, Gemini, Perplexity ve Google AI Overview'da tek tek test ediyorum. Böylece markanızın bugün hangi sorularda geçtiğini, hangilerinde rakiplerinizin öne çıktığını ve hangi bilgilerin yanlış ya da eksik aktarıldığını net olarak görüyoruz.",
      "Aynı dönemde sitenizi teknik açıdan tarıyor, içeriklerinizi ve internetteki marka izinizi inceliyorum. Bu analizin sonunda elinizde neyi, hangi sırayla ve neden yapacağımızı anlatan yazılı bir yol haritası oluyor. Öncelikleri, en az eforla en çok fark yaratacak işler belirliyor.",
    ],
  },
  {
    tag: "Paralel yürür",
    tagTone: "accent",
    title: "Teknik optimizasyon: yapay zekaya kapıyı açmak",
    paragraphs: [
      "Yol haritası çıkar çıkmaz teknik tarafa başlıyorum, çünkü yapay zeka botları sitenizi göremiyorsa diğer çalışmaların etkisi sınırlı kalır. ChatGPT ve benzeri araçların tarayıcılarına doğru erişim izinlerini veriyor, sayfa hızını ve mobil deneyimi iyileştiriyor, yapılandırılmış veriyle sayfalarınızın ne anlattığını makinelerin anlayacağı dile çeviriyorum.",
      "ChatGPT'nin web aramasında Bing sonuçlarından da yararlanıldığı için sitenizin Bing Webmaster Tools tarafında da sağlıklı olmasına özen gösteriyorum. Bu işler içerik ve PR çalışmalarıyla aynı anda ilerliyor; birinin bitmesini beklemiyoruz.",
    ],
  },
  {
    tag: "1. aydan itibaren",
    tagTone: "brand",
    title: "İçerik ve marka tutarlılığı",
    paragraphs: [
      "Yapay zekanın alıntılamak isteyeceği türden içerikler hazırlıyorum: soruya ilk cümlede cevap veren, kısa ve anlaşılır, uzmanlığınızı gösteren sayfalar. Mevcut hizmet sayfalarınızı ve sık sorulan sorularınızı bu mantıkla yeniden düzenliyor, eksik konuları yeni içeriklerle tamamlıyorum.",
      "Paralelinde markanızın internetteki kimliğini toparlıyorum. Google İşletme profiliniz, sektör rehberleri, sosyal medya hesaplarınız ve varsa Vikipedi gibi kaynaklar aynı bilgiyi aynı şekilde anlatmalı. Tutarlılık, yapay zekanın size güvenmesinin en temel koşulu.",
    ],
  },
  {
    tag: "Ayrı bütçelendirilir",
    tagTone: "amber",
    title: "Backlink ve dijital PR çalışmaları",
    paragraphs: [
      "Yapay zeka bir markayı önerirken büyük ölçüde başka sitelerin o marka hakkında söylediklerine dayanıyor. Bu yüzden sektör yayınlarında, haber sitelerinde ve karşılaştırma içeriklerinde doğal biçimde anılmanızı sağlayacak bir bağlantı ve PR planı hazırlıyorum.",
      "Bu kalem danışmanlık ücretinden ayrı bütçelendiriliyor, çünkü yayın maliyetleri seçilen sitelere ve sektöre göre ciddi farklılık gösteriyor. Hangi yayına neden ve ne kadar bütçe ayırdığımızı önceden şeffaf bir listeyle paylaşıyorum; siz onaylamadan hiçbir harcama yapılmıyor.",
    ],
  },
  {
    tag: "Her ay",
    tagTone: "brand",
    title: "Ölçüm, raporlama ve iyileştirme",
    paragraphs: [
      "Başlangıçta belirlediğimiz soru setini her ay yeniden test ediyorum. Kaç soruda önerildiğinizi, hangi platformlarda yükseldiğinizi ve yapay zeka kaynaklı ziyaretçi sayısındaki değişimi raporluyorum.",
      "Sonuçlara göre planı güncelliyorum: işe yarayanı büyütüyor, yaramayanı bırakıyoruz. GEO bir kerelik bir proje değil; yapay zeka araçları değiştikçe stratejiyi de onlarla birlikte güncel tutmak gerekiyor.",
    ],
  },
];

const tagStyles: Record<string, string> = {
  brand: "bg-brand-light text-brand",
  accent: "bg-accent-light text-accent-dark",
  amber: "bg-amber-100 text-amber-800",
};

export function GeoProcess() {
  return (
    <section className="border-t border-line bg-canvas py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">Çalışma süreci</p>
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-[40px] md:leading-[1.2]">
              GEO çalışması adım adım nasıl ilerliyor?
            </h2>
            <p className="mt-5 leading-relaxed text-ink-soft">
              Birlikte çalışmaya başladığımızda önce durumu ölçüp bir yol haritası çıkarıyorum. Ardından teknik
              iyileştirmeler, içerik ve PR çalışmaları paralel olarak ilerliyor. Bağlantı ve PR tarafı, maliyeti
              yayına göre değiştiği için ayrıca planlanıyor.
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
                <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${tagStyles[step.tagTone]}`}>{step.tag}</span>
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
  { icon: ShoppingBag, sector: "E-ticaret markaları", question: "3.000 TL altında en iyi koşu ayakkabısı hangisi?", why: "Ürün önerisi isteyen kullanıcıya hangi markaların sayıldığı, satışı doğrudan etkiliyor." },
  { icon: Stethoscope, sector: "Klinikler ve sağlık kuruluşları", question: "İstanbul'da güvenilir bir ortodontist önerir misin?", why: "Hasta, randevu almadan önce yapay zekaya danışıyor ve önerilen isimlere güveniyor." },
  { icon: Briefcase, sector: "Avukatlar ve danışmanlar", question: "Şirket kuruluşu için hangi mali müşavirle çalışmalıyım?", why: "Hizmet seçiminde öneri, reklamdan çok daha ikna edici bir etki yaratıyor." },
  { icon: Cpu, sector: "Yazılım ve B2B şirketleri", question: "Küçük ekipler için en iyi CRM yazılımı hangisi?", why: "Karşılaştırma sorularında listede olmayan çözüm, değerlendirmeye bile alınmıyor." },
  { icon: Plane, sector: "Turizm ve otelcilik", question: "Kapadokya'da balayı için butik otel önerir misin?", why: "Tatil planlaması giderek daha fazla yapay zeka sohbetleriyle başlıyor." },
  { icon: GraduationCap, sector: "Eğitim kurumları", question: "Çalışanlar için en iyi online İngilizce kursu hangisi?", why: "Uzun karar sürecinde yapay zeka, seçenekleri daraltan ilk filtre oluyor." },
];

export function GeoAudience() {
  return (
    <section className="border-t border-line bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Heading
          eyebrow="Kimler için?"
          title="Müşteriniz karar vermeden önce soru soruyorsa, GEO sizin için"
          intro="Aşağıdaki sorular, insanların her gün yapay zekaya sorduğu türden sorular. Kendi sektörünüzde benzer bir soru soruluyorsa ve cevapta adınız geçmiyorsa, o müşteri sizinle hiç tanışmadan başka bir markaya gidiyor olabilir."
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map(({ icon: Icon, sector, question, why }) => (
            <article key={sector} className="flex flex-col rounded-3xl border border-line bg-canvas p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand shadow-card">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-bold text-ink">{sector}</h3>
              </div>
              <p className="mt-5 rounded-2xl rounded-tl-sm border border-line bg-white px-4 py-3 text-[15px] italic text-ink">
                &ldquo;{question}&rdquo;
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{why}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Kanıt ---------------- */

export function GeoProof() {
  return (
    <section className="bg-night py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Sonuçlardan bir örnek</p>
          <p className="text-6xl font-bold tracking-tight text-white md:text-7xl">+%340</p>
          <p className="mt-4 text-xl font-semibold text-white">yapay zeka cevaplarında kaynak gösterilme artışı</p>
          <p className="mt-4 leading-relaxed text-white/70">
            GEO danışmanlığı verdiğim bir markanın ChatGPT ve Perplexity cevaplarında kaynak olarak gösterilme
            oranı, çalışma süresince bu seviyede arttı.
          </p>
          <p className="mt-6 text-xs text-white/45">Kaynak: Ekim Demirci vaka çalışmaları, 2025</p>
        </div>

        <figure className="lg:col-span-7">
          <a
            href="/yapay-zeka-trafik-vaka.png"
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-3xl border border-white/10 bg-white p-2 shadow-lift"
            aria-label="Google Analytics 4 yapay zeka trafiği tablosunu tam boyutta aç"
          >
            <div className="relative aspect-[1460/652] overflow-hidden rounded-2xl">
              <Image
                src="/yapay-zeka-trafik-vaka.png"
                alt="Google Analytics 4 raporu: ChatGPT, Gemini ve Perplexity'den gelen yapay zeka asistanı trafiğinin önceki döneme göre artışı"
                fill
                sizes="(max-width: 1024px) 100vw, 720px"
                quality={90}
                className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </a>
          <figcaption className="mt-5">
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "+%69", label: "Yapay zekadan gelen kullanıcı" },
                { value: "+%110", label: "Etkileşimli oturum" },
                { value: "+%226", label: "Gemini kaynaklı kullanıcı" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-2xl font-bold tracking-tight text-white">{stat.value}</p>
                  <p className="mt-1 text-xs leading-snug text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-white/45">
              <span>Google Analytics 4 · 1 Ağustos – 15 Kasım 2026, önceki üç aylık dönemle karşılaştırma</span>
              <Link href="/basari-hikayeleri" className="group inline-flex items-center gap-1 text-sm font-semibold text-accent">
                Diğer başarı hikâyeleri <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ---------------- Platform stratejileri ---------------- */

const platforms = [
  { name: "ChatGPT", logo: "/chatgpt-logo.png" },
  { name: "Google AI Overview", logo: "/google-ai-mode-logo.webp" },
  { name: "Perplexity", logo: "/perplexity-logo.avif" },
  { name: "Claude", logo: "/claude-logo.png" },
  { name: "Gemini", logo: "/gemini-logo.jpg" },
];

export function GeoPlatformStrategies() {
  return (
    <section className="border-t border-line bg-canvas py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 rounded-3xl border border-line bg-white p-7 shadow-card md:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand">Platformlara özel stratejiler</p>
            <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">Her yapay zeka aracı kaynaklarını aynı şekilde seçmiyor</h2>
            <p className="mt-3 leading-relaxed text-ink-soft">
              ChatGPT ile Google AI Overview&apos;ın, Perplexity ile Claude&apos;un hangi kaynaklara nasıl güvendiği
              birbirinden farklı. Her platform için ayrı ayrı uyguladığım stratejileri ayrı bir sayfada detaylı olarak
              anlattım.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {platforms.map((p) => (
                <span key={p.name} className="inline-flex items-center gap-2 rounded-full border border-line bg-canvas py-1 pl-1 pr-3 text-sm font-medium text-ink-soft">
                  <span className="relative h-6 w-6 overflow-hidden rounded-full bg-white">
                    <Image src={p.logo} alt="" fill sizes="24px" className="object-cover" />
                  </span>
                  {p.name}
                </span>
              ))}
            </div>
          </div>
          <Link
            href="/seo-hizmetleri/yapay-zeka-seo"
            className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-night-soft lg:self-center"
          >
            Platform stratejilerini inceleyin
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
