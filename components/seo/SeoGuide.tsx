import Link from "next/link";
import { ArrowRight, Check, Plus, X } from "lucide-react";

export interface SeoFaq {
  question: string;
  answer: string;
}

const toc = [
  { id: "seo-danismanligi-nedir", label: "SEO danışmanlığı nedir?" },
  { id: "seo-danismani-ne-yapar", label: "SEO danışmanı ne yapar?" },
  { id: "neden-gerekli", label: "Neden SEO danışmanlığı almalısınız?" },
  { id: "danisman-mi-ajans-mi", label: "Danışman mı, ajans mı?" },
  { id: "ne-zaman-sonuc", label: "Sonuçlar ne zaman görülür?" },
  { id: "ucretler", label: "Ücretler neye göre belirlenir?" },
  { id: "dogru-danisman", label: "Doğru danışman nasıl seçilir?" },
  { id: "seo-ve-geo", label: "SEO ve GEO birlikte" },
  { id: "sss", label: "Sıkça sorulan sorular" },
];

const tasks = [
  ["Teknik denetim", "Sitenin Google tarafından sorunsuz taranıp taranmadığını, hız ve mobil uyumluluk sorunlarını tespit eder."],
  ["Anahtar kelime araştırması", "Hedef kitlenin Google'a gerçekte ne yazdığını bulur ve hangi kelimelere odaklanılacağını belirler."],
  ["İçerik stratejisi", "Hangi sayfaların düzenleneceğini, hangi yeni içeriklerin üretileceğini planlar."],
  ["Otorite çalışması", "Sitenin başka güvenilir sitelerden bağlantı alması için bir plan hazırlar ve yürütür."],
  ["Rakip analizi", "Rakiplerin neden üst sıralarda olduğunu inceler ve aradaki farkı kapatacak adımları belirler."],
  ["Ölçüm ve raporlama", "Sıralama, trafik ve dönüşümleri takip eder, sonuçları anlaşılır şekilde raporlar."],
];

const comparison = [
  { label: "Muhatabınız", agency: "Hesap yöneticisi", consultant: "İşi bizzat yapan kişi" },
  { label: "Esneklik", agency: "Standart paketler", consultant: "Sitenize özel plan" },
  { label: "Hız", agency: "Onay katmanları", consultant: "Doğrudan iletişim, hızlı karar" },
  { label: "Uygun olduğu durum", agency: "Çok kanallı, büyük ekip gerektiren işler", consultant: "Derinlik ve uzmanlık gerektiren SEO işleri" },
];

const lookFor = [
  "Gerçek vaka sonuçlarını paylaşabilen biri",
  "Ne yapacağını ve nasıl ölçeceğini baştan net anlatan biri",
  "Sitenizi incelemeden fiyat ve süre vaat etmeyen biri",
];
const avoid = [
  "\"Bir ayda birinci sıra\" garantisi verenler",
  "Ucuza yüzlerce bağlantı satan paketler",
  "Ne yaptığını raporlamayan kapalı kutu hizmetler",
];

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-28 text-2xl font-bold tracking-tight text-ink md:text-[32px] md:leading-[1.25]">
      {children}
    </h2>
  );
}

export default function SeoGuide({ faqItems }: { faqItems: SeoFaq[] }) {
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
    <section id="seo-rehberi" className="border-t border-line bg-white py-20 md:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">SEO danışmanlığı rehberi</p>
          <p className="text-3xl font-bold tracking-tight text-ink md:text-[44px] md:leading-[1.18]">
            SEO danışmanlığı hakkında bilmeniz gereken her şey
          </p>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            SEO danışmanı ile çalışmayı düşünüyor ama nereden başlayacağınızı bilmiyorsanız, bu rehber tam size göre.
            En çok sorulan soruları teknik terimlere boğmadan, sade bir dille cevapladım.
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
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Ücretsiz SEO analizi</p>
                <p className="mt-2 text-lg font-bold">Siteniz Google&apos;da neden yükselmiyor?</p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Sitenizi inceleyip önünüzdeki en önemli engelleri ve ilk adımları size raporlayayım.
                </p>
                <Link
                  href="/audit-talebi"
                  className="group mt-5 flex items-center justify-between rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
                >
                  Ücretsiz analiz isteyin
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </aside>

          <article className="space-y-16 text-[17px] leading-[1.8] text-ink-soft lg:col-span-8">
            <div className="space-y-5">
              <H2 id="seo-danismanligi-nedir">SEO danışmanlığı nedir?</H2>
              <p className="rounded-2xl border-l-4 border-brand bg-brand-light px-5 py-4 font-medium text-ink">
                SEO danışmanlığı, bir web sitesinin Google gibi arama motorlarında hedef kitlesinin aradığı kelimelerde
                üst sıralara çıkması için sitenin analiz edilmesi, bir strateji oluşturulması ve bu stratejinin
                uygulanıp ölçülmesi sürecinde verilen uzman desteğidir.
              </p>
              <p>
                Basitçe söylemek gerekirse: siteniz var ama Google&apos;dan yeterince ziyaretçi ya da müşteri gelmiyorsa,
                bir SEO danışmanı bunun nedenini bulur ve nasıl düzeleceğini planlar. Bu süreçte sitenin teknik
                altyapısı, içerikleri ve internetteki otoritesi birlikte ele alınır.
              </p>
              <p>
                SEO danışmanlığını reklamdan ayıran en önemli fark, sonuçların kalıcı olması. Reklam bütçesi bittiğinde
                ziyaretçi de biter; iyi bir SEO çalışmasıyla kazanılan sıralamalar ise aylarca, hatta yıllarca size
                ücretsiz ziyaretçi getirmeye devam eder.
              </p>
            </div>

            <div className="space-y-5">
              <H2 id="seo-danismani-ne-yapar">SEO danışmanı ne yapar?</H2>
              <p>
                Bir SEO danışmanının işi tek bir ayarı değiştirmekten ibaret değil. Genellikle şu başlıklar üzerinde
                çalışır:
              </p>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {tasks.map(([title, text]) => (
                  <li key={title} className="rounded-2xl border border-line bg-canvas p-4">
                    <p className="font-semibold text-ink">{title}</p>
                    <p className="mt-1 text-[15px] leading-relaxed">{text}</p>
                  </li>
                ))}
              </ul>
              <p>
                Ben bu işlerin her birini kendim yürütüyorum. Teknik düzenlemeleri ister doğrudan uyguluyorum, ister
                yazılım ekibinize net talimatlar halinde aktarıyorum.
              </p>
            </div>

            <div className="space-y-5">
              <H2 id="neden-gerekli">Neden SEO danışmanlığı almalısınız?</H2>
              <p>
                İnsanlar bir ürün ya da hizmet aramaya hâlâ büyük ölçüde Google&apos;dan başlıyor. Ben de bir şey
                ararken çoğu zaman ilk birkaç sonuçtan birine tıklıyorum; ikinci sayfaya geçtiğim nadirdir. İlk sayfada
                olmayan bir işletme, aranıyor olsa bile bulunamıyor.
              </p>
              <p>
                SEO&apos;nun kendi başına öğrenilip uygulanabilecek kısımları var, ancak algoritmalar sık değişiyor ve
                yanlış bir adım sitenize aylarca zarar verebiliyor. Bir danışmanla çalışmak; hataları baştan önlemenizi,
                zamanınızı işinize ayırmanızı ve neyin işe yaradığını verilerle görmenizi sağlıyor.
              </p>
            </div>

            <div className="space-y-5">
              <H2 id="danisman-mi-ajans-mi">SEO danışmanı mı, SEO ajansı mı?</H2>
              <p>
                İkisinin de doğru tercih olduğu durumlar var. Karar verirken şu farklar yol gösterebilir:
              </p>
              <div className="overflow-x-auto rounded-2xl border border-line">
                <table className="w-full min-w-[560px] text-left text-[15px]">
                  <thead className="bg-canvas-alt text-xs uppercase tracking-wider text-ink-muted">
                    <tr>
                      <th className="px-5 py-3 font-semibold">Konu</th>
                      <th className="px-5 py-3 font-semibold">Ajans</th>
                      <th className="px-5 py-3 font-semibold text-brand">Bağımsız danışman</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line bg-white">
                    {comparison.map((row) => (
                      <tr key={row.label}>
                        <th scope="row" className="px-5 py-3 font-semibold text-ink">{row.label}</th>
                        <td className="px-5 py-3">{row.agency}</td>
                        <td className="px-5 py-3">{row.consultant}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                Türkiye&apos;deki ajansları karşılaştırmak isterseniz{" "}
                <Link href="/seo-ajanslari" className="font-semibold text-brand underline underline-offset-4">SEO ajansları rehberime</Link> göz
                atabilirsiniz.
              </p>
            </div>

            <div className="space-y-5">
              <H2 id="ne-zaman-sonuc">SEO çalışmasının sonuçları ne zaman görülür?</H2>
              <p>
                SEO birikimli sonuç veren bir iş. Teknik düzeltmelerin etkisi çoğu zaman ilk birkaç hafta içinde Search
                Console verilerine yansımaya başlıyor. Rekabetçi kelimelerde kalıcı sıralama artışı ise genellikle üç ila
                altı ay sürüyor.
              </p>
              <p>
                Bu süre; sektörünüzdeki rekabete, sitenizin başlangıç durumuna ve önerilen değişikliklerin ne kadar hızlı
                uygulandığına göre değişiyor. İlk görüşmede sizin siteniz için gerçekçi bir zaman çizelgesi çıkarıyorum.
              </p>
            </div>

            <div className="space-y-5">
              <H2 id="ucretler">SEO danışmanlığı ücretleri neye göre belirlenir?</H2>
              <p>
                Herkese uyan tek bir fiyat yok. Ücreti belirleyen başlıca etkenler sitenizin büyüklüğü, sektörünüzdeki
                rekabet, sitenin teknik başlangıç durumu ve çalışmanın kapsamı. Aylık danışmanlık paketlerim ₺20.000&apos;den
                başlıyor; backlink ve dijital PR çalışmaları ayrıca bütçelendiriliyor.
              </p>
              <p>
                Paketlerin neleri kapsadığını{" "}
                <Link href="/seo-danismanlik-fiyatlari" className="font-semibold text-brand underline underline-offset-4">SEO danışmanlık fiyatları</Link> sayfamda
                detaylı olarak görebilirsiniz.
              </p>
            </div>

            <div className="space-y-5">
              <H2 id="dogru-danisman">Doğru SEO danışmanı nasıl seçilir?</H2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-accent/30 bg-accent-light/50 p-5">
                  <p className="mb-3 font-bold text-ink">Bunları arayın</p>
                  <ul className="space-y-2.5 text-[15px] leading-relaxed">
                    {lookFor.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-accent-dark" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-red-200 bg-red-50/60 p-5">
                  <p className="mb-3 font-bold text-ink">Bunlara temkinli yaklaşın</p>
                  <ul className="space-y-2.5 text-[15px] leading-relaxed">
                    {avoid.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <X className="mt-1 h-4 w-4 shrink-0 text-red-600" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p>
                Geçmiş çalışmalarımı ve elde ettiğim sonuçları{" "}
                <Link href="/basari-hikayeleri" className="font-semibold text-brand underline underline-offset-4">başarı hikâyeleri</Link> sayfamda
                inceleyebilirsiniz.
              </p>
            </div>

            <div className="space-y-5">
              <H2 id="seo-ve-geo">SEO ve GEO neden birlikte ele alınmalı?</H2>
              <p>
                Artık insanlar sadece Google&apos;a değil, ChatGPT gibi yapay zeka asistanlarına da soru soruyor. Bu
                araçlar cevap üretirken büyük ölçüde iyi taranan, net yazılmış ve güvenilir bulunan sitelerden
                yararlanıyor. Yani sağlam bir SEO temeli, yapay zeka cevaplarında görünmenin de ön koşulu.
              </p>
              <p>
                Bu yüzden SEO danışmanlığında yapay zeka görünürlüğünü de göz önünde bulunduruyorum. Konuyu daha detaylı
                merak ediyorsanız{" "}
                <Link href="/geo-danismanligi" className="font-semibold text-brand underline underline-offset-4">GEO danışmanlığı</Link> sayfama
                bakabilirsiniz.
              </p>
            </div>

            <div className="space-y-5">
              <H2 id="sss">SEO danışmanlığı hakkında sıkça sorulan sorular</H2>
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
