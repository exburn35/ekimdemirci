import Link from "next/link";
import { ArrowUpRight, Search, MessageSquareText } from "lucide-react";
import SectionHeading from "./SectionHeading";

const rows = [
  { label: "Hedef", seo: "İlgili aramalarda üst sıralarda listelenmek", geo: "Yapay zeka cevabında anılmak ve kaynak gösterilmek" },
  { label: "Kullanıcı ne görür?", seo: "Mavi bağlantılardan oluşan bir sonuç listesi", geo: "Derlenmiş tek bir cevap ve birkaç kaynak" },
  { label: "Başarının ölçüsü", seo: "Gösterim, tıklama, sıralama, dönüşüm", geo: "Anılma sıklığı, alıntılanma, marka algısı" },
  { label: "Belirleyici sinyaller", seo: "Teknik sağlık, içerik kalitesi, bağlantılar", geo: "Varlık netliği, doğrulanabilir bilgi, dış kaynaklarda bahsedilme" },
  { label: "Nerede işe yarar?", seo: "Google ve Bing arama sonuçları", geo: "ChatGPT, Gemini, Perplexity, Google AI Overviews" },
];

export default function HomeSeoGeo() {
  return (
    <section id="seo-geo" className="bg-canvas py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Kısa cevap"
          title="SEO ve GEO: aynı müşteriye ulaşan iki farklı yol"
          intro="İnsanlar bilgiye artık iki kapıdan ulaşıyor: arama sonuç sayfası ve yapay zeka asistanı. Birinde listede yer almanız, diğerinde cevabın içinde adınızın geçmesi gerekiyor. Danışmanlığımı bu iki kapıyı aynı anda açık tutacak şekilde kurguluyorum."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-line bg-white p-7 shadow-card md:p-9">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light text-brand">
              <Search className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold text-ink">SEO nedir?</h3>
            <p className="mt-3 leading-relaxed text-ink-soft">
              Arama motoru optimizasyonu (SEO), bir web sitesinin Google gibi arama motorlarında, hedef kitlesinin
              yaptığı aramalarda üst sıralarda listelenmesi için yürütülen teknik, içerik ve otorite çalışmalarının
              bütünüdür. Amaç; doğru kişiyi, doğru anda, doğru sayfaya getirmektir.
            </p>
            <Link href="/blog/seo-nedir" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-dark">
              SEO rehberini okuyun <ArrowUpRight className="h-4 w-4" />
            </Link>
          </article>

          <article className="rounded-3xl border border-line bg-white p-7 shadow-card md:p-9">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-light text-accent-dark">
              <MessageSquareText className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold text-ink">GEO nedir?</h3>
            <p className="mt-3 leading-relaxed text-ink-soft">
              Üretken motor optimizasyonu (GEO, Generative Engine Optimization), bir markanın ChatGPT, Gemini,
              Perplexity ve Google AI Overviews gibi yapay zeka sistemlerinin ürettiği cevaplarda doğru bilgilerle
              anılması ve güvenilir kaynak olarak gösterilmesi için yapılan çalışmalardır.
            </p>
            <Link href="/blog/geo-nedir" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent-dark hover:text-accent">
              GEO rehberini okuyun <ArrowUpRight className="h-4 w-4" />
            </Link>
          </article>
        </div>

        {/* Karşılaştırma tablosu */}
        <div className="mt-6 overflow-hidden rounded-3xl border border-line bg-white shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <caption className="sr-only">SEO ve GEO karşılaştırması</caption>
              <thead className="bg-canvas-alt text-xs uppercase tracking-wider text-ink-muted">
                <tr>
                  <th scope="col" className="w-1/5 px-6 py-4 font-semibold">Ölçüt</th>
                  <th scope="col" className="px-6 py-4 font-semibold text-brand">SEO</th>
                  <th scope="col" className="px-6 py-4 font-semibold text-accent-dark">GEO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {rows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="px-6 py-4 font-semibold text-ink">{row.label}</th>
                    <td className="px-6 py-4 text-ink-soft">{row.seo}</td>
                    <td className="px-6 py-4 text-ink-soft">{row.geo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="border-t border-line bg-canvas px-6 py-5 text-sm leading-relaxed text-ink-soft">
            <strong className="font-semibold text-ink">İkisini neden birlikte ele alıyorum?</strong> Yapay zeka
            sistemleri cevap üretirken büyük ölçüde zaten iyi taranan, net yapılandırılmış ve başka kaynaklarca
            doğrulanan sayfalara yaslanıyor. Yani sağlam bir SEO temeli GEO&apos;nun ön koşulu; GEO ise bu temeli
            arama kutusunun ötesine taşıyor.
          </div>
        </div>
      </div>
    </section>
  );
}
