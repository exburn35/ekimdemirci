import Link from "next/link";
import { ArrowRight, Layers, Swords, Target, Gauge } from "lucide-react";
import SectionHeading from "./SectionHeading";

const factors = [
  { icon: Layers, title: "Sitenin büyüklüğü", text: "On sayfalık bir kurumsal site ile binlerce ürünlü bir mağazanın denetimi ve bakımı aynı emeği gerektirmez." },
  { icon: Swords, title: "Rekabet yoğunluğu", text: "Hedeflediğiniz aramalarda kimlerle yarıştığınız, ne kadar içerik ve otorite çalışması gerektiğini belirler." },
  { icon: Gauge, title: "Teknik başlangıç durumu", text: "Altyapısı sağlam bir siteyle yıllardır biriken hataları olan bir site farklı bir ilk dönem ister." },
  { icon: Target, title: "Kapsam: SEO, GEO ya da ikisi", text: "Sadece arama sonuçlarını mı hedefliyorsunuz, yoksa yapay zeka görünürlüğünü de mi? Kapsam bütçeyi doğrudan etkiler." },
];

export default function HomePricingFactors() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Fiyatlandırma"
              title="SEO danışmanlığının fiyatını ne belirler?"
              intro="Tek bir fiyat listesi herkese uymaz; ama belirsizlik de kimseye iyi gelmez. Bu yüzden paketlerimi ve neleri kapsadığını açıkça yayımlıyorum."
            />
            <div className="-mt-4 rounded-3xl border border-line bg-canvas p-6">
              <p className="text-sm text-ink-muted">Aylık danışmanlık paketleri</p>
              <p className="mt-1 text-3xl font-bold tracking-tight text-ink">
                ₺20.000<span className="text-base font-medium text-ink-muted">&apos;den başlayan</span>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Kesin teklifi ön analizden sonra, sitenizin ihtiyacına göre hazırlıyorum.
              </p>
              <Link
                href="/seo-danismanlik-fiyatlari"
                className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
              >
                Paketleri ve kapsamları inceleyin <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
            {factors.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-3xl border border-line bg-canvas p-7">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand shadow-card">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-ink">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
