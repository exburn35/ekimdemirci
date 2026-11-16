import SectionHeading from "./SectionHeading";

const steps = [
  {
    when: "1. adım",
    title: "Tanışma ve ön analiz",
    text: "Hedeflerinizi, müşterinizi ve şu ana kadar denediklerinizi dinliyorum. Sitenize hızlı bir göz atıp gerçekçi bir fırsat tablosu çıkarıyorum. Bu aşama ücretsiz ve sizi hiçbir şeye bağlamaz.",
  },
  {
    when: "2. adım",
    title: "Derin denetim",
    text: "Teknik altyapıyı, içerikleri, bağlantı profilini ve rakiplerinizi inceliyorum. Yapay zeka asistanlarının markanız hakkında bugün ne söylediğini de ölçüp başlangıç noktasını kayda geçiriyorum.",
  },
  {
    when: "3. adım",
    title: "Önceliklendirilmiş yol haritası",
    text: "Bulguları etkisine ve zahmetine göre sıralıyorum. Önce en az eforla en çok fark yaratacak işlere başlıyoruz; neyi neden yaptığımızı her adımda açıkça biliyorsunuz.",
  },
  {
    when: "4. adım",
    title: "Uygulama, ölçüm ve rapor",
    text: "Değişiklikleri ya doğrudan uyguluyorum ya da ekibinize uygulanabilir talimatlar halinde veriyorum. Her ay neyin işe yaradığını, neyin yaramadığını jargonsuz bir raporla paylaşıyorum.",
  },
];

export default function HomeProcess() {
  return (
    <section id="surec" className="scroll-mt-24 bg-canvas py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Çalışma şeklim"
          title="İlk görüşmeden ilk rapora kadar ne oluyor?"
          intro="Sürecin her adımında neyle uğraştığımı ve neden uğraştığımı bilirsiniz. Sürpriz fatura, belirsiz iş kalemi ya da anlaşılmaz rapor yok."
        />

        <ol className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="relative rounded-3xl border border-line bg-white p-7 shadow-card">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint">{step.when}</span>
                <span className="text-4xl font-bold leading-none text-brand/15">0{i + 1}</span>
              </div>
              <h3 className="text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
