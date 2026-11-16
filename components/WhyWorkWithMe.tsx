import Link from "next/link";
import { ArrowRight, Ear, FileText, Layers, Route, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Ear,
    title: "Önce dinliyor, sonra analiz ediyorum",
    text: "İşe hazır bir paketle değil, sizin hedefinizle başlıyorum. Kimlere satış yapıyorsunuz, hangi hizmetiniz daha kârlı, rakipleriniz kim? Bu soruların cevabını bilmeden yapılan bir SEO çalışması, doğru kelimelerde değil kolay kelimelerde sıralama getirir.",
  },
  {
    icon: Route,
    title: "Stratejiyi kuran ile uygulamayı takip eden aynı kişi",
    text: "Yol haritasını ben çıkarıyorum, uygulamayı da ben takip ediyorum. Arada bilgi kaybolmuyor; bir şey ters gittiğinde ne yapıldığını ve neden yapıldığını bilen kişiyle doğrudan konuşuyorsunuz.",
  },
  {
    icon: Layers,
    title: "Teknik, içerik ve otorite tek planda",
    text: "Teknik sorunları düzeltmek, doğru içerikleri yazmak ve markanızın başka sitelerde anılmasını sağlamak ayrı ayrı işler gibi görünse de birbirini besliyor. Üçünü aynı plan içinde, doğru sırayla ele alıyorum.",
  },
  {
    icon: Sparkles,
    title: "Google ile yapay zekayı birlikte düşünüyorum",
    text: "Müşterileriniz artık yalnızca Google'da değil, ChatGPT ve Gemini gibi araçlarda da arama yapıyor. Yaptığım her çalışmayı bu iki dünyada birden görünür olmanızı sağlayacak şekilde kurguluyorum.",
  },
  {
    icon: FileText,
    title: "Her ay sade ve dürüst bir rapor",
    text: "Onlarca sayfalık şablon raporlar yerine şu üç soruya cevap veriyorum: Bu ay ne yaptım, ne değişti, sırada ne var? İşler beklediğimiz gibi gitmediğinde de bunu açıkça söylüyorum.",
  },
];

export default function WhyWorkWithMe() {
  return (
    <section className="border-t border-line bg-white py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">Çalışma şeklim</p>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Neden benimle çalışmalısınız?</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Bir danışmanı seçerken rakamlar kadar nasıl çalıştığı da önemli. Benim çalışma şeklimi belirleyen beş ilke
              şunlar.
            </p>
            <Link
              href="/audit-talebi"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Ücretsiz ön analiz isteyin
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <ol className="space-y-4 lg:col-span-8">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <li
                key={r.title}
                className="group flex gap-5 rounded-3xl border border-line bg-canvas p-6 transition-colors hover:border-brand/30 hover:bg-white md:p-7"
              >
                <div className="flex shrink-0 flex-col items-center gap-2">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand shadow-card transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-bold text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink">{r.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{r.text}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
