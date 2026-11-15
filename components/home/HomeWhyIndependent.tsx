import { Check, Minus, X } from "lucide-react";
import SectionHeading from "./SectionHeading";

const comparison = [
  { label: "Muhatabınız", agency: "Hesap yöneticisi, bazen her ay farklı biri", me: "Projeyi baştan sona yürüten kişi: ben" },
  { label: "Stratejiyi kim kuruyor?", agency: "Kıdemli biri kurar, genelde juniorlar uygular", me: "Stratejiyi kuran ile uygulamayı takip eden aynı kişi" },
  { label: "Karar hızı", agency: "Talepler sıraya girer, onay katmanlarından geçer", me: "Sorunu gördüğüm gün konuşur, aynı hafta harekete geçeriz" },
  { label: "Raporlama", agency: "Uzun, şablon raporlar", me: "Ne yaptım, ne değişti, sırada ne var: sade bir özet" },
  { label: "Bütçenin gittiği yer", agency: "Ofis, kadro ve satış maliyetleri de dahil", me: "Doğrudan işin kendisine" },
];

const notFor = [
  "Bir ayda birinci sıra garantisi arıyorsanız",
  "Yüzlerce bağlantıyı ucuza satın almak istiyorsanız",
  "Sitenize dokunulmadan sonuç bekliyorsanız",
];

export default function HomeWhyIndependent() {
  return (
    <section className="bg-canvas-alt py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Neden bağımsız danışman?"
          title="Ajansla çalışmak ile benimle çalışmak arasındaki fark"
          intro="Ajansların da doğru tercih olduğu durumlar var; özellikle aynı anda pek çok kanalı yönetmeniz gerekiyorsa. Ama hedefiniz arama ve yapay zeka görünürlüğüyse, tek bir uzmanın derinliği çoğu zaman daha hızlı sonuç getirir."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-card lg:col-span-2">
            <div className="grid grid-cols-[1fr_1fr] border-b border-line bg-canvas text-xs font-semibold uppercase tracking-wider sm:grid-cols-[0.8fr_1fr_1fr]">
              <div className="hidden px-6 py-4 text-ink-muted sm:block">Konu</div>
              <div className="px-6 py-4 text-ink-muted">Tipik ajans modeli</div>
              <div className="px-6 py-4 text-brand">Benimle çalışmak</div>
            </div>
            <dl className="divide-y divide-line">
              {comparison.map((row) => (
                <div key={row.label} className="grid grid-cols-[1fr_1fr] sm:grid-cols-[0.8fr_1fr_1fr]">
                  <dt className="col-span-2 px-6 pt-4 text-sm font-semibold text-ink sm:col-span-1 sm:py-4">{row.label}</dt>
                  <dd className="flex gap-2 px-6 py-4 text-sm text-ink-muted">
                    <Minus className="mt-0.5 h-4 w-4 shrink-0 text-ink-faint" />
                    {row.agency}
                  </dd>
                  <dd className="flex gap-2 px-6 py-4 text-sm text-ink">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {row.me}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="flex flex-col rounded-3xl bg-night p-7 text-white md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Dürüst olmak gerekirse</p>
            <h3 className="mt-3 text-xl font-bold">Şu durumlarda doğru kişi ben değilim</h3>
            <ul className="mt-6 space-y-4">
              {notFor.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-white/80">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <X className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-auto pt-8 text-sm leading-relaxed text-white/60">
              Kalıcı, ölçülebilir ve markanıza zarar vermeyen bir büyüme istiyorsanız konuşmaya değer.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
