import Link from "next/link";
import { ArrowRight, Check, Plus } from "lucide-react";

export interface TeknikFaq {
  question: string;
  answer: string;
}

const toc = [
  { id: "teknik-seo-nedir", label: "Teknik SEO nedir?" },
  { id: "neden-onemli", label: "Teknik SEO neden önemli?" },
  { id: "tarama-ve-indeks", label: "Tarama ve dizine eklenme nasıl çalışır?" },
  { id: "core-web-vitals", label: "Core Web Vitals nedir?" },
  { id: "kontrol-listesi", label: "Teknik SEO kontrol listesi" },
  { id: "site-tasima", label: "Site yenileme ve taşımada dikkat" },
  { id: "javascript", label: "JavaScript siteler ve SEO" },
  { id: "sss", label: "Sıkça sorulan sorular" },
];

const vitals = [
  { name: "LCP (Largest Contentful Paint)", what: "Sayfanın ana içeriğinin ne kadar sürede yüklendiği", good: "2,5 saniye veya altı" },
  { name: "INP (Interaction to Next Paint)", what: "Bir tıklamaya ya da dokunmaya sayfanın ne kadar hızlı tepki verdiği", good: "200 milisaniye veya altı" },
  { name: "CLS (Cumulative Layout Shift)", what: "Sayfa yüklenirken içeriklerin ne kadar kaydığı", good: "0,1 veya altı" },
];

const checklist = [
  "Önemli sayfalar robots.txt ile yanlışlıkla engellenmemiş",
  "Güncel bir XML site haritası var ve Search Console'a gönderilmiş",
  "Önemli sayfalarda yanlışlıkla \"noindex\" etiketi yok",
  "Kırık bağlantılar ve 404 sayfaları düzeltilmiş",
  "Yönlendirmeler tek adımda hedefe ulaşıyor (zincir yok)",
  "Her içeriğin tek bir doğru adresi var (canonical)",
  "Site HTTPS ile çalışıyor, karışık içerik uyarısı yok",
  "Core Web Vitals değerleri iyi seviyede",
  "Mobil sürüm masaüstüyle aynı önemli içeriği sunuyor",
  "Yapılandırılmış veri doğru ve hatasız",
];

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-28 text-2xl font-bold tracking-tight text-ink md:text-[32px] md:leading-[1.25]">
      {children}
    </h2>
  );
}

function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="font-semibold text-brand underline underline-offset-4">
      {children}
    </Link>
  );
}

export default function TeknikSeoGuide({ faqItems }: { faqItems: TeknikFaq[] }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <section id="teknik-seo-rehberi" className="border-t border-line bg-white py-12 md:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">Teknik SEO rehberi</p>
          <p className="text-3xl font-bold tracking-tight text-ink md:text-[44px] md:leading-[1.18]">
            Teknik SEO hakkında bilmeniz gereken her şey
          </p>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Teknik SEO kulağa yazılımcılara özel bir konu gibi gelse de temel mantığını herkes anlayabilir. Bu rehberde
            en çok merak edilenleri sade bir dille anlattım.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="space-y-6 lg:sticky lg:top-28">
              <nav aria-label="Rehber içindekiler" className="rounded-3xl border border-line bg-canvas p-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint">İçindekiler</p>
                <ol className="space-y-1">
                  {toc.map((item, i) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="flex gap-3 rounded-lg px-2 py-1.5 text-sm text-ink-soft transition-colors hover:bg-white hover:text-brand">
                        <span className="w-5 shrink-0 text-xs font-semibold text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <div className="rounded-3xl bg-night p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Ücretsiz teknik kontrol</p>
                <p className="mt-2 text-lg font-bold">Sitenizde gizli teknik sorunlar var mı?</p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Sitenizi tarayıp en kritik teknik sorunları ve çözüm önerilerimi size raporlayayım.
                </p>
                <Link
                  href="/audit-talebi"
                  className="group mt-5 flex items-center justify-between rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
                >
                  Ücretsiz kontrol isteyin
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </aside>

          <article className="space-y-16 text-[17px] leading-[1.8] text-ink-soft lg:col-span-8">
            <div className="space-y-5">
              <H2 id="teknik-seo-nedir">Teknik SEO nedir?</H2>
              <p className="rounded-2xl border-l-4 border-brand bg-brand-light px-5 py-4 font-medium text-ink">
                Teknik SEO, bir web sitesinin Google gibi arama motorları tarafından sorunsuz taranabilmesi, doğru
                anlaşılabilmesi ve dizine eklenebilmesi için sitenin altyapısında, kodunda ve sunucu ayarlarında yapılan
                iyileştirmelerin bütünüdür. Sayfa hızı ve mobil deneyim de teknik SEO&apos;nun kapsamındadır.
              </p>
              <p>
                SEO&apos;yu bir mağazaya benzetirsek, içerik vitrindeki ürünler, bağlantılar mağazanın şehirdeki ünü,
                teknik SEO ise mağazanın kapısı, yolu ve tabelasıdır. Kapı kilitliyse ya da yol kapalıysa, vitrin ne
                kadar güzel olursa olsun kimse içeri giremez.
              </p>
            </div>

            <div className="space-y-5">
              <H2 id="neden-onemli">Teknik SEO neden önemli?</H2>
              <p>
                Google bir sayfayı sıralayabilmek için önce onu bulmalı, açabilmeli ve ne anlattığını anlayabilmelidir.
                Bu zincirin herhangi bir halkasında sorun varsa, en iyi içerik bile arama sonuçlarında görünmez.
              </p>
              <p>
                Ayrıca Google, ziyaretçilere iyi bir deneyim sunan siteleri öne çıkarmayı hedefliyor. Yavaş açılan,
                mobilde bozulan ya da sürekli hata veren bir site, rakipleri karşısında dezavantajlı başlar. Teknik SEO
                bu dezavantajı ortadan kaldırır ve diğer tüm SEO çalışmalarının üzerine inşa edileceği temeli oluşturur.
              </p>
            </div>

            <div className="space-y-5">
              <H2 id="tarama-ve-indeks">Tarama ve dizine eklenme nasıl çalışır?</H2>
              <p>
                Google&apos;ın sitenizi arama sonuçlarında gösterebilmesi üç adımda gerçekleşir:
              </p>
              <ol className="space-y-3">
                {[
                  ["Tarama", "Google'ın botları (Googlebot) bağlantıları takip ederek sitenizdeki sayfaları keşfeder ve ziyaret eder."],
                  ["Dizine ekleme", "Google, taradığı sayfanın içeriğini analiz eder ve uygun bulursa dev arşivine, yani dizine ekler."],
                  ["Sıralama", "Biri arama yaptığında Google, dizinindeki sayfalar arasından en uygun olanları sıralayarak gösterir."],
                ].map(([title, text], i) => (
                  <li key={title} className="flex gap-4 rounded-2xl border border-line bg-canvas p-5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-brand shadow-card">{i + 1}</span>
                    <p><strong className="font-semibold text-ink">{title}:</strong> {text}</p>
                  </li>
                ))}
              </ol>
              <p>
                Teknik SEO&apos;nun asıl görevi ilk iki adımın sorunsuz işlemesini sağlamak. Bu süreçte en çok kullanılan
                araçlardan biri olan <A href="/blog/google-search-console-nedir">Google Search Console</A> ile hangi
                sayfalarınızın dizinde olduğunu görebilirsiniz. Botların sitenizde nereye girip nereye giremeyeceğini
                belirleyen dosyayı ise <A href="/blog/robots-txt-nedir-ve-nasil-kullanilir">robots.txt rehberimde</A> anlattım.
              </p>
            </div>

            <div className="space-y-5">
              <H2 id="core-web-vitals">Core Web Vitals nedir?</H2>
              <p>
                Core Web Vitals, Google&apos;ın bir sayfanın kullanıcı deneyimini ölçmek için kullandığı üç temel
                metriktir. Google, her biri için &ldquo;iyi&rdquo; sayılan değerleri açıkça paylaşıyor:
              </p>
              <div className="overflow-x-auto rounded-2xl border border-line">
                <table className="w-full min-w-[560px] text-left text-[15px]">
                  <thead className="bg-canvas-alt text-xs uppercase tracking-wider text-ink-muted">
                    <tr>
                      <th className="px-5 py-3 font-semibold">Metrik</th>
                      <th className="px-5 py-3 font-semibold">Neyi ölçer?</th>
                      <th className="px-5 py-3 font-semibold text-accent-dark">İyi değer</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line bg-white">
                    {vitals.map((v) => (
                      <tr key={v.name}>
                        <th scope="row" className="px-5 py-3 font-semibold text-ink">{v.name}</th>
                        <td className="px-5 py-3">{v.what}</td>
                        <td className="px-5 py-3 font-medium text-accent-dark">{v.good}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                Bu değerleri ücretsiz olarak <A href="/blog/pagespeed-insight-nedir-nasil-kullanilir">PageSpeed Insights</A> ile
                ölçebilirsiniz. Önemli olan tek bir test sonucundan çok, gerçek ziyaretçilerinizin deneyimini yansıtan
                verilerdir.
              </p>
            </div>

            <div className="space-y-5">
              <H2 id="kontrol-listesi">Teknik SEO kontrol listesi</H2>
              <p>Sitenizin teknik sağlığını hızlıca değerlendirmek için şu 10 maddeye göz atabilirsiniz:</p>
              <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {checklist.map((item) => (
                  <li key={item} className="flex gap-3 rounded-2xl border border-line bg-canvas p-4 text-[15px] leading-relaxed">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-accent-dark" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                Yönlendirmelerin hangi durumda hangi kodla yapılması gerektiğini{" "}
                <A href="/blog/http-yonlendirme-kodlari-nelerdir">HTTP yönlendirme kodları</A> yazımda, yapılandırılmış verinin
                nasıl çalıştığını ise <A href="/blog/yapilandirilmis-veri-nedir">yapılandırılmış veri rehberimde</A> bulabilirsiniz.
              </p>
            </div>

            <div className="space-y-5">
              <H2 id="site-tasima">Site yenileme ve taşıma sırasında nelere dikkat etmelisiniz?</H2>
              <p>
                Sitenizin tasarımını yenilemek, altyapısını değiştirmek ya da yeni bir alan adına geçmek, teknik SEO
                açısından en riskli anlardır. Eski adreslerin yeni adreslere doğru şekilde yönlendirilmemesi, Google&apos;ın
                yıllardır tanıdığı sayfaları bir anda kaybetmesine ve trafiğin hızla düşmesine neden olabilir.
              </p>
              <p>
                Taşıma öncesinde tüm eski adreslerin listesini çıkarmak, her biri için yeni adresi belirlemek ve kalıcı
                (301) yönlendirmeleri kurmak gerekir. Taşımadan sonraki haftalarda da Search Console düzenli olarak
                izlenmeli. Bu süreci başından planlamak, sonradan kayıpları telafi etmeye çalışmaktan çok daha kolay.
              </p>
            </div>

            <div className="space-y-5">
              <H2 id="javascript">JavaScript ile yapılmış siteler ve SEO</H2>
              <p>
                React, Vue veya Angular gibi modern JavaScript altyapılarıyla yapılmış sitelerde içerik bazen ziyaretçinin
                tarayıcısında sonradan oluşturulur. Google bu tür sayfaları işleyebiliyor, ancak bu süreç daha yavaş ve
                hataya açık olabiliyor. İçeriğin sunucu tarafında hazır gelmesi (server-side rendering) bu riskleri büyük
                ölçüde azaltır.
              </p>
              <p>
                Konuyu daha detaylı merak ediyorsanız <A href="/blog/server-side-rendering-nedir">server-side rendering nedir</A> yazıma
                göz atabilirsiniz.
              </p>
            </div>

            <div className="space-y-5">
              <H2 id="sss">Teknik SEO hakkında sıkça sorulan sorular</H2>
              <div className="divide-y divide-line rounded-2xl border border-line bg-canvas">
                {faqItems.map((faq, i) => (
                  <details key={faq.question} className="group px-5 py-4 md:px-6" open={i === 0}>
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
                      <h3 className="text-base font-semibold leading-snug text-ink md:text-[17px]">{faq.question}</h3>
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line bg-white text-ink-muted transition-transform group-open:rotate-45 group-open:text-brand">
                        <Plus className="h-4 w-4" />
                      </span>
                    </summary>
                    <p className="mt-3 pr-8 text-[15px] leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
