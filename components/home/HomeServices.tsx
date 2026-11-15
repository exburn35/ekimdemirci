import Link from "next/link";
import { ArrowRight, Wrench, FileText, Link2, Bot, Sparkles, PenLine } from "lucide-react";
import SectionHeading from "./SectionHeading";

const services = [
  {
    icon: Wrench,
    title: "Teknik SEO",
    href: "/seo-hizmetleri/teknik-seo",
    lead: "Arama motorlarının sitenizi zahmetsizce tarayıp anlayabilmesi için altyapıyı düzeltiyorum.",
    items: ["Tarama ve indeksleme hataları", "Core Web Vitals ve hız", "Yapılandırılmış veri (Schema)"],
  },
  {
    icon: FileText,
    title: "Site içi SEO",
    href: "/seo-hizmetleri/sayfa-ici-seo",
    lead: "Her sayfanın tek bir arama niyetine net cevap verdiği bir içerik mimarisi kuruyorum.",
    items: ["Anahtar kelime ve niyet haritası", "Başlık, meta ve iç bağlantı düzeni", "İçerik boşluğu analizi"],
  },
  {
    icon: Link2,
    title: "Site dışı SEO",
    href: "/seo-hizmetleri/sayfa-disi-seo",
    lead: "Markanızın internetin geri kalanında nasıl anıldığını, güven inşa eden bağlantılarla şekillendiriyorum.",
    items: ["Bağlantı profili denetimi", "Dijital PR ve marka anılmaları", "Zararlı bağlantı temizliği"],
  },
  {
    icon: Bot,
    title: "GEO danışmanlığı",
    href: "/geo-danismanligi",
    lead: "Yapay zeka asistanları sizinle ilgili bir soru aldığında doğru ve olumlu bir cevap üretsin diye çalışıyorum.",
    items: ["Yapay zeka görünürlük ölçümü", "Varlık (entity) ve bilgi tutarlılığı", "Alıntılanabilir içerik formatı"],
  },
  {
    icon: Sparkles,
    title: "Yapay zeka destekli SEO",
    href: "/seo-hizmetleri/yapay-zeka-seo",
    lead: "Veri analizini ve tekrarlayan işleri yapay zekayla hızlandırıp zamanı stratejiye ayırıyorum.",
    items: ["Ölçekli içerik ve niyet analizi", "Otomatik raporlama akışları", "Rakip ve SERP takibi"],
  },
  {
    icon: PenLine,
    title: "SEO uyumlu içerik",
    href: "/icerik-yazimi",
    lead: "Hem okura hem algoritmaya hitap eden, uzmanlık sinyali taşıyan içerikler planlıyor ve yazıyorum.",
    items: ["Blog ve rehber içerikler", "Hizmet ve kategori sayfaları", "Mevcut içeriklerin güncellenmesi"],
  },
];

const sectors = [
  { label: "E-ticaret", href: "/sektorel-seo-hizmetleri/e-ticaret-seo" },
  { label: "Sağlık ve klinik", href: "/sektorel-seo-hizmetleri/saglik-ve-klinik-seo" },
  { label: "Diş hekimleri", href: "/sektorel-seo-hizmetleri/dis-hekimleri-icin-seo-2" },
  { label: "Doktorlar", href: "/sektorel-seo-hizmetleri/doktorlar-icin-seo-2" },
  { label: "Hastaneler", href: "/sektorel-seo-hizmetleri/hastaneler-icin-seo-2" },
  { label: "Güzellik merkezleri", href: "/sektorel-seo-hizmetleri/guzellik-merkezleri-icin-seo-2" },
  { label: "Avukatlar", href: "/sektorel-seo-hizmetleri/avukatlar-icin-seo-hizmeti" },
  { label: "Yerel işletmeler", href: "/sektorel-seo-hizmetleri/yerel-isletme-seo" },
  { label: "Kurumsal ve B2B", href: "/sektorel-seo-hizmetleri/kurumsal-b2b-seo" },
];

export default function HomeServices() {
  return (
    <section id="hizmetler" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Hizmetler"
            title="Görünürlüğün her katmanı için ayrı bir uzmanlık"
            intro="Her projeye aynı paketi uygulamıyorum. Önce sitenizin hangi katmanda tıkandığını buluyor, ardından sadece gerçekten ihtiyaç duyduğunuz çalışmaları planlıyorum."
          />
          <Link
            href="/seo-hizmetleri"
            className="mb-10 inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-line-strong px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink/30 md:mb-14 lg:self-auto"
          >
            Tüm SEO hizmetleri <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, href, lead, items }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col rounded-3xl border border-line bg-canvas p-7 transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:bg-white hover:shadow-lift"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand shadow-card transition-colors group-hover:bg-brand group-hover:text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{lead}</p>
              <ul className="mt-5 space-y-2 border-t border-line pt-5">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <span className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold text-brand">
                Detayları gör <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-line bg-canvas-alt p-6 md:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-md">
              <h3 className="text-lg font-bold text-ink">Sektörünüze göre çalışıyorum</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                Bir diş kliniğiyle bir e-ticaret sitesinin arama davranışı aynı değil. Sektörünüzün kurallarına,
                rekabetine ve müşteri sorularına göre ayrı bir yol haritası çıkarıyorum.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 lg:max-w-2xl lg:justify-end">
              {sectors.map((sector) => (
                <Link
                  key={sector.href}
                  href={sector.href}
                  className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-brand/40 hover:text-brand"
                >
                  {sector.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
