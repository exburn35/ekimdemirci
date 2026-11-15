import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Plus, X } from "lucide-react";

export interface GeoFaq {
  question: string;
  answer: string;
}

const toc = [
  { id: "geo-nedir", label: "GEO nedir?" },
  { id: "neden-onemli", label: "GEO neden bu kadar önemli?" },
  { id: "seo-farki", label: "GEO ile SEO arasındaki fark" },
  { id: "chatgpt-nasil-onerir", label: "ChatGPT bir markayı neye göre önerir?" },
  { id: "ai-overview", label: "Google AI Overview nedir?" },
  { id: "geo-nasil-yapilir", label: "GEO nasıl yapılır?" },
  { id: "ne-zaman-sonuc", label: "Sonuçlar ne zaman görülür?" },
  { id: "nasil-olculur", label: "GEO başarısı nasıl ölçülür?" },
  { id: "dikkat-edilecekler", label: "GEO hizmeti alırken dikkat" },
  { id: "sss", label: "Sıkça sorulan sorular" },
];

const comparison = [
  { label: "Amaç", seo: "Google sonuçlarında üst sıralarda listelenmek", geo: "Yapay zekanın cevabında önerilmek ve kaynak gösterilmek" },
  { label: "Kullanıcının gördüğü", seo: "On mavi bağlantıdan oluşan bir liste", geo: "Hazır bir cevap ve birkaç kaynak" },
  { label: "Başarı ölçüsü", seo: "Sıralama, tıklama, ziyaretçi sayısı", geo: "Önerilme sıklığı, kaynak gösterilme, marka algısı" },
  { label: "Öne çıkan sinyaller", seo: "Teknik sağlık, içerik kalitesi, bağlantılar", geo: "Net cevaplar, marka tutarlılığı, başka sitelerde anılma" },
];

const howTo = [
  { title: "Mevcut durumu ölçün", text: "Müşterilerinizin sorabileceği soruları yapay zeka araçlarına sorun ve markanızın cevaplarda geçip geçmediğini not edin." },
  { title: "Yapay zeka botlarına kapıyı açın", text: "robots.txt dosyanızda ChatGPT ve benzeri araçların tarayıcılarını yanlışlıkla engellemediğinizden emin olun." },
  { title: "Soruya ilk cümlede cevap verin", text: "Önemli sayfalarınızda lafı dolandırmayın; asıl cevabı en başa koyun, detayları sonra anlatın." },
  { title: "Kim olduğunuzu net anlatın", text: "Hakkımızda sayfanız, Google İşletme profiliniz ve sosyal hesaplarınız aynı bilgiyi aynı şekilde versin." },
  { title: "Yapılandırılmış veri ekleyin", text: "Organizasyon, hizmet, ürün ve SSS şemalarıyla sayfalarınızın ne anlattığını makinelerin anlayacağı dile çevirin." },
  { title: "Başka sitelerde anılın", text: "Sektör yayınları, karşılaştırma yazıları ve haber siteleri, yapay zekanın size güvenmesindeki en güçlü sinyallerden biri." },
  { title: "Düzenli olarak tekrar ölçün", text: "Yapay zeka cevapları sık değişiyor. Aynı soruları her ay yeniden test edip stratejinizi buna göre güncelleyin." },
];

const doList = [
  "Ne yapacağını ve nasıl ölçeceğini baştan net anlatan biriyle çalışın",
  "Mevcut yapay zeka görünürlüğünüzün raporunu isteyin",
  "SEO temelini de birlikte ele alan bir yaklaşım arayın",
];
const dontList = [
  "\"ChatGPT'de bir numara olmayı garanti ediyorum\" diyenlere",
  "Ne yapıldığını açıklamayan kapalı kutu paketlere",
  "Yüzlerce düşük kaliteli bağlantıyı GEO diye satanlara",
];

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-28 text-2xl font-bold tracking-tight text-ink md:text-[32px] md:leading-[1.25]">
      {children}
    </h2>
  );
}

export default function GeoGuide({ faqItems }: { faqItems: GeoFaq[] }) {
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
    <section id="geo-rehberi" className="border-t border-line bg-white py-20 md:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">GEO rehberi</p>
          <p className="text-3xl font-bold tracking-tight text-ink md:text-[44px] md:leading-[1.18]">
            GEO hakkında merak ettiğiniz her şey, sade bir dille
          </p>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Bu rehberi, GEO&apos;yu ilk kez duyan bir işletme sahibinin de rahatça anlayabileceği şekilde yazdım.
            Teknik detaylara boğmadan, en çok sorulan soruları tek tek cevapladım.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* İçindekiler + CTA */}
          <aside className="lg:col-span-4">
            <div className="space-y-6 lg:sticky lg:top-28">
              <nav aria-label="Rehber içindekiler" className="rounded-3xl border border-line bg-canvas p-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint">İçindekiler</p>
                <ol className="space-y-1">
                  {toc.map((item, i) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="flex gap-3 rounded-lg px-2 py-1.5 text-sm text-ink-soft transition-colors hover:bg-white hover:text-brand"
                      >
                        <span className="w-5 shrink-0 text-xs font-semibold text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <div className="rounded-3xl bg-night p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Ücretsiz yapay zeka testi</p>
                <p className="mt-2 text-lg font-bold">Markanız ChatGPT&apos;de geçiyor mu?</p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Sektörünüzle ilgili sorularla ChatGPT, Gemini ve Google&apos;ı test edip sonucu size raporlayayım.
                </p>
                <Link
                  href="/audit-talebi"
                  className="group mt-5 flex items-center justify-between rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
                >
                  Ücretsiz GEO analizi alın
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </aside>

          {/* İçerik */}
          <article className="space-y-16 text-[17px] leading-[1.8] text-ink-soft lg:col-span-8">
            <div className="space-y-5">
              <H2 id="geo-nedir">GEO nedir?</H2>
              <p className="rounded-2xl border-l-4 border-brand bg-brand-light px-5 py-4 font-medium text-ink">
                GEO (Generative Engine Optimization, Türkçesiyle üretken motor optimizasyonu), bir markanın ChatGPT,
                Gemini, Perplexity ve Google AI Overview gibi yapay zeka araçlarının verdiği cevaplarda doğru
                bilgilerle anılması, önerilmesi ve kaynak olarak gösterilmesi için yapılan çalışmaların bütünüdür.
              </p>
              <p>
                Klasik arama motoru optimizasyonu (SEO), sitenizin Google&apos;daki sonuç listesinde yukarılarda yer
                almasını hedefler. GEO ise listenin değil, cevabın içinde olmayı hedefler. Biri yapay zekaya
                &ldquo;Hangi firmayla çalışmalıyım?&rdquo; diye sorduğunda, saydığı isimlerin arasında sizin de
                olmanız GEO&apos;nun ta kendisidir.
              </p>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-line bg-canvas">
                <Image
                  src="/GEO-generative-engine-optimization-nedir.webp"
                  alt="GEO (Generative Engine Optimization) nedir?"
                  fill
                  sizes="(max-width: 1024px) 100vw, 760px"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="space-y-5">
              <H2 id="neden-onemli">GEO neden bu kadar önemli hale geldi?</H2>
              <p>
                Çünkü insanların bilgiye ulaşma şekli değişti. Eskiden bir öneri aradığımızda Google&apos;a yazar,
                birkaç siteye tıklar, karşılaştırır, sonra karar verirdik. Şimdi aynı soruyu ChatGPT&apos;ye
                soruyoruz ve birkaç saniye içinde derlenmiş bir cevap alıyoruz. Ben de dahil olmak üzere çevremdeki
                pek çok kişi bir ürün, hizmet ya da uzman ararken artık ilk olarak yapay zekaya danışıyor.
              </p>
              <p>
                Google tarafında da benzer bir değişim yaşanıyor. Pek çok aramada sonuçların en üstünde artık bir
                yapay zeka özeti çıkıyor ve kullanıcıların bir kısmı aradığını bu özette bulup hiçbir siteye
                tıklamadan ayrılıyor. Bu durumda görünür olmanın yolu, o özetin içinde ya da altındaki kaynaklar
                arasında yer almaktan geçiyor.
              </p>
              <p>
                Kısacası yapay zeka cevaplarında adı geçmeyen bir marka, müşterisinin karar sürecinde hiç var
                olmamış gibi kalabiliyor. GEO, bu yeni karar noktasında yerinizi almanızı sağlıyor.
              </p>
            </div>

            <div className="space-y-5">
              <H2 id="seo-farki">GEO ile SEO arasındaki fark nedir?</H2>
              <p>
                İkisi birbirine rakip değil, birbirini tamamlayan iki çalışma. Yapay zeka araçları cevap üretirken
                büyük ölçüde zaten iyi taranan, net yazılmış ve güvenilir bulunan sayfalardan yararlanıyor. Yani
                sağlam bir SEO temeli olmadan GEO&apos;da kalıcı başarı yakalamak zor. Farkları kısaca şöyle:
              </p>
              <div className="overflow-x-auto rounded-2xl border border-line">
                <table className="w-full min-w-[560px] text-left text-[15px]">
                  <thead className="bg-canvas-alt text-xs uppercase tracking-wider text-ink-muted">
                    <tr>
                      <th className="px-5 py-3 font-semibold">Ölçüt</th>
                      <th className="px-5 py-3 font-semibold text-brand">SEO</th>
                      <th className="px-5 py-3 font-semibold text-accent-dark">GEO</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line bg-white">
                    {comparison.map((row) => (
                      <tr key={row.label}>
                        <th scope="row" className="px-5 py-3 font-semibold text-ink">{row.label}</th>
                        <td className="px-5 py-3">{row.seo}</td>
                        <td className="px-5 py-3">{row.geo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                SEO ile ilgili temel bilgileri <Link href="/blog/seo-nedir" className="font-semibold text-brand underline underline-offset-4">SEO nedir</Link> rehberimde,
                GEO&apos;nun teknik arka planını ise <Link href="/blog/geo-nedir" className="font-semibold text-brand underline underline-offset-4">GEO nedir</Link> yazımda
                daha ayrıntılı anlattım.
              </p>
            </div>

            <div className="space-y-5">
              <H2 id="chatgpt-nasil-onerir">ChatGPT bir markayı neye göre önerir?</H2>
              <p>
                ChatGPT&apos;nin hangi markayı neden önerdiğini birebir bilmek mümkün değil; OpenAI bu süreci
                ayrıntısıyla paylaşmıyor. Ancak paylaşılan bilgiler ve sektördeki gözlemler, birkaç faktörün
                belirleyici olduğunu gösteriyor:
              </p>
              <ul className="space-y-3">
                {[
                  ["Web araması", "ChatGPT güncel bir bilgiye ihtiyaç duyduğunda internette arama yapıyor ve bu aramada Bing sonuçlarından da yararlanıyor. Bing'de görünür olmayan bir site, bu aşamada şansını kaybedebiliyor."],
                  ["İnternetin sizin hakkınızda söyledikleri", "Model, bir markayı değerlendirirken o marka hakkında yazılanlara bakıyor. Sektör yayınlarında, karşılaştırma yazılarında ve yorumlarda ne kadar çok ve ne kadar olumlu anılıyorsanız, önerilme ihtimaliniz o kadar artıyor."],
                  ["Bilgilerinizin tutarlılığı", "Farklı kaynaklarda farklı bilgiler veren bir marka, modelin gözünde belirsiz kalıyor. Tutarlı bilgi güven demek."],
                  ["Sayfanın soruya net cevap vermesi", "Kullanıcının sorusuna doğrudan ve anlaşılır bir cevap veren sayfalar, alıntılanmaya çok daha uygun."],
                ].map(([title, text]) => (
                  <li key={title} className="flex gap-3">
                    <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-light text-accent-dark">
                      <Check className="h-3 w-3" />
                    </span>
                    <span><strong className="font-semibold text-ink">{title}:</strong> {text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <H2 id="ai-overview">Google AI Overview nedir, kaynaklarını nasıl seçer?</H2>
              <p>
                Google AI Overview (Türkçe arayüzde &ldquo;Yapay zekaya genel bakış&rdquo;), Google&apos;ın bazı
                aramalarda sonuçların en üstünde gösterdiği, yapay zekayla oluşturulmuş özet cevaptır. Özetin
                yanında ya da altında, bilginin alındığı siteler kaynak kartları olarak listelenir.
              </p>
              <p>
                Bu kaynaklar çoğunlukla o aramada zaten üst sıralarda yer alan sayfalar arasından seçiliyor. Bu
                yüzden AI Overview&apos;da görünmenin ilk koşulu iyi bir organik sıralama. Bunun üzerine sayfanın
                soruya ilk paragrafta net bir cevap vermesi, bilgilerin güncel olması ve yazarın uzmanlığının belli
                olması, kaynak olarak seçilme ihtimalini artıran unsurlar.
              </p>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-line bg-canvas">
                <Image
                  src="/GEO-nasil-calisir.webp"
                  alt="GEO nasıl çalışır?"
                  fill
                  sizes="(max-width: 1024px) 100vw, 760px"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="space-y-5">
              <H2 id="geo-nasil-yapilir">GEO nasıl yapılır? 7 temel adım</H2>
              <p>
                Her sektörün ve her sitenin ihtiyacı farklı olsa da başarılı bir GEO çalışması genellikle şu adımlar
                üzerine kurulur:
              </p>
              <ol className="space-y-4">
                {howTo.map((step, i) => (
                  <li key={step.title} className="flex gap-4 rounded-2xl border border-line bg-canvas p-5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-brand shadow-card">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-ink">{step.title}</h3>
                      <p className="mt-1 text-[15px] leading-relaxed">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="space-y-5">
              <H2 id="ne-zaman-sonuc">GEO çalışmasının sonuçları ne zaman görülür?</H2>
              <p>
                Teknik düzenlemelerin etkisi, yapay zeka araçlarının sitenizi yeniden taramasıyla birlikte birkaç
                hafta içinde görülmeye başlayabiliyor. Kalıcı ve düzenli bir görünürlük artışı ise çoğu projede
                2 ila 4 ay içinde belirginleşiyor.
              </p>
              <p>
                Bu süre sektörünüzdeki rekabete, sitenizin başlangıç durumuna ve marka bilinirliğinize göre
                değişiyor. Hiç tanınmayan yeni bir markanın, sektöründe zaten adı geçen bir markaya göre daha uzun
                bir yol izlemesi doğal.
              </p>
            </div>

            <div className="space-y-5">
              <H2 id="nasil-olculur">GEO başarısı nasıl ölçülür?</H2>
              <p>
                GEO&apos;yu SEO gibi tek bir sıralama rakamıyla ölçemiyoruz, çünkü yapay zeka her seferinde biraz
                farklı bir cevap verebiliyor. Bu yüzden birkaç göstergeyi birlikte takip ediyorum:
              </p>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  ["Önerilme oranı", "Belirlenen soruların kaçında markanız cevapta geçiyor?"],
                  ["Kaynak gösterilme", "Sitenize kaç cevapta bağlantı veriliyor?"],
                  ["Anlatım doğruluğu", "Yapay zeka sizi doğru bilgilerle mi tanıtıyor?"],
                  ["Yapay zeka trafiği", "ChatGPT ve benzeri araçlardan sitenize gelen ziyaretçi sayısı."],
                ].map(([title, text]) => (
                  <li key={title} className="rounded-2xl border border-line bg-canvas p-4">
                    <p className="font-semibold text-ink">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed">{text}</p>
                  </li>
                ))}
              </ul>
              <p>
                Bu metrikleri nasıl takip ettiğimi <Link href="/blog/geo-metrikleri-nasil-olculur" className="font-semibold text-brand underline underline-offset-4">GEO metrikleri nasıl ölçülür</Link> yazımda
                detaylı olarak anlattım.
              </p>
            </div>

            <div className="space-y-5">
              <H2 id="dikkat-edilecekler">GEO hizmeti alırken nelere dikkat etmelisiniz?</H2>
              <p>
                GEO yeni bir alan olduğu için piyasada çok farklı vaatler dolaşıyor. Karar verirken şu noktalar işinize
                yarayabilir:
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-accent/30 bg-accent-light/50 p-5">
                  <p className="mb-3 font-bold text-ink">Bunları arayın</p>
                  <ul className="space-y-2.5 text-[15px] leading-relaxed">
                    {doList.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-accent-dark" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-red-200 bg-red-50/60 p-5">
                  <p className="mb-3 font-bold text-ink">Bunlara temkinli yaklaşın</p>
                  <ul className="space-y-2.5 text-[15px] leading-relaxed">
                    {dontList.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <X className="mt-1 h-4 w-4 shrink-0 text-red-600" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <H2 id="sss">GEO hakkında sıkça sorulan sorular</H2>
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
