import Image from "next/image";

export default function AboutContent() {
  return (
    <section className="py-16 bg-canvas relative z-20 shadow-[0_-12px_40px_rgba(22,27,46,0.06)] rounded-t-[3rem] border-t border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-square relative bg-white backdrop-blur-md border border-line shadow-2xl p-2">
               <div className="relative w-full h-full rounded-2xl overflow-hidden">
                 <Image 
                   src="/pp.jpg"
                   alt="Ekim Demirci"
                   fill
                   className="object-cover"
                   sizes="(max-width: 768px) 100vw, 50vw"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent" />
               </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-ink-muted leading-relaxed">
              Merhaba, ben <strong className="text-purple-600">Ekim Demirci</strong>. 34 yaşındayım, <strong className="text-ink">SEO & GEO Uzmanı ve Danışmanıyım</strong> ve <strong className="text-ink">5 yılı aşkın süredir</strong>, markaların dijital dünyada öne çıkmasına yardımcı oluyorum. 
              Türkiye&apos;nin önde gelen dijital ajanslarında çalışma fırsatı buldum, burada hem müşterilerim için değer yarattım hem de kendimi sürekli geliştirdim.
            </p>

            <p className="text-lg text-ink-muted leading-relaxed">
              SEO benim için sadece bir meslek değil, aynı zamanda bir tutku. Her projede, bir web sitesini sıfırdan zirveye taşımanın heyecanını yaşıyorum. Teknik SEO&apos;dan içerik stratejilerine, backlink yönetiminden veri analizine kadar geniş bir yelpazede uzmanlığa sahibim ve tüm bilgimi sizin için harekete geçirmeye hazırım.
            </p>

            <p className="text-lg text-ink-muted leading-relaxed">
              Eğer <strong className="text-purple-600">web sitenizin görünürlüğünü artırmak</strong> ve <strong className="text-purple-600">organik trafiğinizi maksimize etmek</strong> istiyorsanız, birlikte çalışarak hedeflerinizi gerçeğe dönüştürebiliriz.
            </p>

            <p className="text-lg text-ink-soft leading-relaxed font-semibold">
              Sizi bu yolculuğa davet ediyorum! Daha fazla bilgi almak veya hizmetlerimi incelemek için benimle iletişime geçebilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
