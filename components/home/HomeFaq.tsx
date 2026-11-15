import Link from "next/link";
import { Plus } from "lucide-react";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    q: "Bir SEO danışmanı tam olarak ne yapar?",
    a: "Sitenizin arama motorlarında neden olması gerektiği yerde olmadığını tespit eder ve bunu düzeltecek planı kurar. Benim işim; teknik hataları bulmak, içeriklerin hangi aramalara cevap vermesi gerektiğini belirlemek, markanızın dış dünyadaki otoritesini güçlendirmek ve tüm bunların etkisini ölçmek. Uygulamayı ister doğrudan ben yaparım, ister ekibinize net talimatlarla aktarırım.",
  },
  {
    q: "GEO, SEO'nun yerini mi alıyor?",
    a: "Hayır, onu tamamlıyor. Yapay zeka asistanları cevap üretirken büyük ölçüde iyi taranan, net yapılandırılmış ve başka kaynaklarca doğrulanan sayfalardan yararlanıyor. Bu yüzden güçlü bir SEO temeli olmadan kalıcı bir GEO başarısı pek mümkün değil. Ben ikisini aynı stratejinin iki ayağı olarak planlıyorum.",
  },
  {
    q: "Sonuçları ne zaman görmeye başlarım?",
    a: "Teknik düzeltmelerin etkisi çoğu zaman ilk birkaç hafta içinde Search Console verilerine yansımaya başlar. Rekabetçi aramalarda kalıcı sıralama artışı ise genellikle üç ila altı ay sürer. Süre; sitenizin başlangıç durumuna, sektörünüze ve uygulama hızına bağlıdır. İlk görüşmede sizin için gerçekçi bir zaman çizelgesi çıkarırım.",
  },
  {
    q: "Birinci sıra ya da ChatGPT'de görünme garantisi veriyor musunuz?",
    a: "Vermiyorum, veren birine de temkinli yaklaşmanızı öneririm. Ne Google'ın ne de yapay zeka şirketlerinin algoritmaları dışarıdan kontrol edilebilir. Garanti edebileceğim şey; doğru yöntemle, şeffaf biçimde çalışmak ve her ay neyin değiştiğini verilerle göstermek.",
  },
  {
    q: "Yapay zeka görünürlüğünü nasıl ölçüyorsunuz?",
    a: "Sektörünüzde müşterilerinizin sorabileceği soruları belirleyip ChatGPT, Gemini, Perplexity ve Google AI Overviews'ta düzenli olarak test ediyorum. Markanızın ne sıklıkla anıldığını, hangi bağlamda geçtiğini ve hangi kaynakların gösterildiğini kayıt altına alıp aydan aya karşılaştırıyorum.",
  },
  {
    q: "Hangi sektörlerle çalışıyorsunuz?",
    a: "E-ticaret, sağlık ve klinikler, hukuk büroları, güzellik merkezleri, yerel işletmeler ve B2B şirketler için sektöre özel hizmet sunuyorum. Her sektörün arama davranışı farklı olduğu için yol haritasını da sektöre göre ayrı hazırlıyorum.",
  },
  {
    q: "Çalışma süresi ve sözleşme nasıl işliyor?",
    a: "SEO birikimli sonuç veren bir iş olduğundan iş birliklerimi genellikle en az üç aylık dönemler halinde planlıyorum. Uzun ve bağlayıcı sözleşmeler yerine aylık raporlama ve net hedeflerle ilerleyen, karşılıklı güvene dayanan bir model kullanıyorum.",
  },
  {
    q: "Ücretsiz ön analizde neler var?",
    a: "Sitenizin genel teknik sağlığına, öne çıkan içerik fırsatlarına ve yapay zeka asistanlarında markanızın bugünkü durumuna kısa bir bakış. Size en önemli birkaç bulguyu ve önerdiğim ilk adımları iletirim. Sonrasında çalışıp çalışmamak tamamen sizin kararınız.",
  },
];

export default function HomeFaq() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="sss" className="bg-white py-20 md:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="Sıkça sorulanlar"
            title="Aklınızdaki soruların kısa cevapları"
            intro="Burada cevabını bulamadığınız bir soru varsa doğrudan bana yazabilirsiniz; en kısa sürede kendim dönüş yapıyorum."
          />
          <div className="-mt-4 flex flex-wrap gap-3">
            <Link href="/sikca-sorulan-sorular" className="text-sm font-semibold text-brand hover:text-brand-dark">
              Tüm sorular →
            </Link>
            <Link href="/iletisim" className="text-sm font-semibold text-ink-soft hover:text-ink">
              Bana yazın →
            </Link>
          </div>
        </div>

        <div className="divide-y divide-line rounded-3xl border border-line bg-canvas lg:col-span-8">
          {faqs.map((faq, i) => (
            <details key={faq.q} className="group px-6 py-5 md:px-8" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
                <h3 className="text-base font-semibold text-ink md:text-lg">{faq.q}</h3>
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line bg-white text-ink-muted transition-transform group-open:rotate-45 group-open:text-brand">
                  <Plus className="h-4 w-4" />
                </span>
              </summary>
              <p className="mt-3 pr-10 leading-relaxed text-ink-soft">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
