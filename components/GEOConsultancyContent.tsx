"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

// Fonts and colors inherited from host site, no new typography or palette introduced.
// Container width spans 90vw (capped at 1600px on screens above 1700px).
// Accents use purple-to-blue gradient: #7b5cff to #4a9eff.

interface BentoCardProps {
  id: string;
  title: string;
  body: string;
  icon: React.ReactNode;
  gridClass: string;
  paddingClass: string;
  onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => void;
}

function BentoCard({
  id,
  title,
  body,
  icon,
  gridClass,
  paddingClass,
  onMouseEnter,
  onMouseLeave
}: BentoCardProps) {
  return (
    <article
      className={`relative rounded-2xl bg-white/[0.03] border border-white/[0.08] transition-colors duration-300 bento-card ${gridClass} ${paddingClass}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-col h-full relative z-10">
        {/* Icon Container with gradient border */}
        <div className="relative w-10 h-10 rounded-[10px] bg-gradient-to-br from-[#7b5cff]/15 to-[#4a9eff]/15 flex items-center justify-center icon-container">
          <svg className="absolute inset-0 w-full h-full pointer-events-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="39" height="39" rx="10" stroke="url(#hero-card-gradient)" strokeWidth="1" />
          </svg>
          {icon}
        </div>
        
        <h3 className="text-[18px] font-medium text-white mt-5">
          {title}
        </h3>
        
        <p className="text-[14px] leading-[1.55] text-gray-400 mt-2">
          {body}
        </p>
      </div>
    </article>
  );
}

export function ServiceBentoGrid({
  onMouseEnter,
  onMouseLeave
}: {
  onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => void;
}) {
  return (
    <section className="content-section section-1-container border-t border-white/5">
      
      {/* HEADER */}
      <div className="text-center mb-16 section-1-header">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-blue-400 uppercase tracking-widest mb-6">
          <Sparkles className="w-3 h-3" />
          HİZMET KAPSAMI
        </div>
        <h2 className="text-[36px] md:text-[48px] font-bold text-white tracking-tight mb-4">
          GEO Danışmanlığı Hizmet Katmanları
        </h2>
        <p className="text-[16px] text-gray-400 max-w-[720px] mx-auto leading-relaxed">
          Yapay zekanın markanızı tanıması, anlaması ve referans alması için sekiz katmanlı bir görünürlük altyapısı kuruyorum.
        </p>
      </div>

      {/* BENTO GRID */}
      <div className="bento-grid">
        {/* Card 1: Entity Authority Building */}
        <BentoCard
          id="card-1"
          gridClass="card-1"
          paddingClass="p-9"
          title="Entity Authority Building"
          body="Markanızın AI motorları tarafından tutarlı bir varlık olarak tanınması için entity tanımlaması, doğrulanması ve sektörel bağlam içinde konumlandırılması süreçlerini yönetiyorum. LLM'lerin çelişkili veriyle karşılaştığında bir markayı atlamak yerine güvenle anabilmesi için tüm dijital temasları senkronize ediyorum."
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <circle cx="12" cy="10" r="3" />
              <path d="M6 20c0-2 2-4 6-4s6 2 6 4" />
            </svg>
          }
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />

        {/* Card 2: Knowledge Graph Integration */}
        <BentoCard
          id="card-2"
          gridClass="card-2"
          paddingClass="p-9"
          title="Knowledge Graph Integration"
          body="Google'ın Knowledge Graph altyapısı ve LLM'lerin eğitim verisi sentezi sırasında markanızın doğru ilişkilerle yer almasını sağlıyorum. Wikidata, Wikipedia, otoriter veri tabanları ve sektörel kaynaklar arasında bağlantılı bir bilgi mimarisi inşa ediyorum. Bu sayede yapay zeka, markanızı yalnız bir isim olarak değil, ilişkili bir bilgi varlığı (Entity) olarak işliyor."
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
              <circle cx="12" cy="5" r="2" />
              <circle cx="5" cy="19" r="2" />
              <circle cx="19" cy="19" r="2" />
              <line x1="12" y1="7" x2="6.5" y2="17" />
              <line x1="12" y1="7" x2="17.5" y2="17" />
              <line x1="6.5" y1="19" x2="17.5" y2="19" />
            </svg>
          }
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />

        {/* Card 3: Schema & Structured Data Engineering */}
        <BentoCard
          id="card-3"
          gridClass="card-3"
          paddingClass="p-7"
          title="Schema & Structured Data Engineering"
          body="Sektörünüze özel, bağlamsal ve hiyerarşik schema.org mimarisi kuruyorum. Yüzeysel işaretlemenin ötesine geçerek makinelerin sayfanızı kim için, hangi otoriteyle ne anlattığını anlamasını sağlıyorum."
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
              <line x1="14" y1="4" x2="10" y2="20" />
            </svg>
          }
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />

        {/* Card 4: Semantic Content Architecture */}
        <BentoCard
          id="card-4"
          gridClass="card-4"
          paddingClass="p-7"
          title="Semantic Content Architecture"
          body="İçeriği topical authority haritası, semantik kümeler ve özne-yüklem-nesne üçlüleriyle yapılandırıyorum. AI motorları sayfanızı tek başına değil, geniş bir anlam ağının parçası olarak görüyor."
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
              <rect x="3" y="3" width="7" height="9" rx="1" />
              <rect x="14" y="3" width="7" height="5" rx="1" />
              <rect x="14" y="12" width="7" height="9" rx="1" />
              <rect x="3" y="16" width="7" height="5" rx="1" />
            </svg>
          }
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />

        {/* Card 5: AI Citation Strategy */}
        <BentoCard
          id="card-5"
          gridClass="card-5"
          paddingClass="p-7"
          title="AI Citation Strategy"
          body="İçeriği yanıt kutularında alıntılanabilir hale getiriyorum. Doğru paragraf uzunluğu, listelenmiş veriler, kaynak atıfları ve özgün veri noktalarıyla referans gösterilme olasılığını artırıyorum."
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
              <path d="M3 21c3 0 5-1 7-4 2-3 2-6 2-6H6V5h6v6c0 5-2 8-5 10H3Zm10 0c3 0 5-1 7-4 2-3 2-6 2-6h-6V5h6v6c0 5-2 8-5 10h-4Z" />
            </svg>
          }
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />

        {/* Card 6: Co-citation & Brand Mentioning */}
        <BentoCard
          id="card-6"
          gridClass="card-6"
          paddingClass="p-9"
          title="Co-citation & Brand Mentioning"
          body="Markanın yalnız kendi sitesinde değil, sektörün referans yayınlarında, akademik kaynaklarda ve otoriter platformlarda doğru bağlamla anılması için dijital PR sinyallerini yönetiyorum. Hangi isimlerle birlikte anıldığınız, hangi otoritelerin sizi referans verdiği yapay zekanın güven mimarisinin temelidir."
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          }
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />

        {/* Card 7: LLM Visibility Monitoring */}
        <BentoCard
          id="card-7"
          gridClass="card-7"
          paddingClass="p-7"
          title="LLM Visibility Monitoring"
          body="ChatGPT, Claude, Perplexity ve Google AI Overviews'ta hangi sorgularda göründüğünüzü, hangi rakiplerle karşılaştırıldığınızı ve alıntı payınızı düzenli olarak ölçüp raporluyorum."
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
              <path d="M3 3v18h18" />
              <circle cx="7" cy="14" r="1" />
              <circle cx="13" cy="8" r="1" />
              <circle cx="19" cy="12" r="1" />
              <path d="M7 14l6-6 6 4" />
            </svg>
          }
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />

        {/* Card 8: Competitive AI Audit */}
        <BentoCard
          id="card-8"
          gridClass="card-8"
          paddingClass="p-7"
          title="Competitive AI Audit"
          body="Rakiplerinizin hangi sorgularda alıntılandığını, hangi schema yapılarını ve hangi dış kaynakları kullandığını analiz ediyorum. Görünmeyen rekabeti görünür kılıp aksiyon planına dönüştürüyorum."
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
              <line x1="22" y1="2" x2="16" y2="8" />
              <polygon points="22 6 22 2 18 2" />
            </svg>
          }
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      </div>

      {/* CTA STRIP BELOW BENTO */}
      <div className="cta-strip-card relative rounded-2xl p-8 mt-4 overflow-hidden bg-gradient-to-r from-[#7b5cff]/[0.12] to-[#4a9eff]/[0.12]">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="100%" height="100%" rx="16" stroke="url(#hero-card-gradient)" strokeWidth="1" />
        </svg>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[18px] font-medium text-white text-center md:text-left leading-snug">
            Markanızın bu sekiz katmandaki mevcut durumunu görmek ister misiniz?
          </p>
          <Link
            href="#analiz"
            className="inline-flex items-center justify-center h-[46px] px-6 rounded-lg bg-gradient-to-r from-[#7b5cff] to-[#4a9eff] hover:opacity-95 text-white font-medium text-[14px] transition-all duration-300 focus-ring-purple shadow-md shadow-[#7b5cff]/10 whitespace-nowrap"
          >
            <span>GEO Denetimi Talep Et</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>

    </section>
  );
}

export function WhyItMattersData({
  onMouseEnter,
  onMouseLeave
}: {
  onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => void;
}) {
  return (
    <section className="content-section section-2-container border-t border-white/5">
      
      {/* HEADER */}
      <div className="text-center mb-16 section-2-header">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-blue-400 uppercase tracking-widest mb-6">
          <Sparkles className="w-3 h-3" />
          NEDEN ŞİMDİ
        </div>
        <h2 className="text-[36px] md:text-[48px] font-bold text-white tracking-tight mb-4">
          Arama Ekosistemi Geri Dönüşü Olmayacak Şekilde Değişti
        </h2>
        <p className="text-[16px] text-gray-400 max-w-[720px] mx-auto leading-relaxed">
          Klasik sıralamaya yatırım yapan markalar, kullanıcıların artık ulaşmadığı bir alanı optimize ediyor. Aşağıdaki üç gerçek, bu kaymanın neden ertelenemez olduğunu gösteriyor.
        </p>
      </div>

      {/* THREE COLUMN DATA CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <article
          className="relative rounded-2xl bg-white/[0.03] border border-white/[0.08] p-10 transition-colors duration-300 data-card flex flex-col h-full justify-between"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div>
            <div className="text-[64px] font-semibold text-white flex items-center gap-1 leading-none">
              <span className="sr-only">%80</span>
              <span aria-hidden="true" className="data-num-1 bg-gradient-to-r from-[#7b5cff] to-[#4a9eff] bg-clip-text text-transparent">
                %0
              </span>
            </div>
            
            {/* Draw Line */}
            <div className="h-[2px] bg-gradient-to-r from-[#7b5cff] to-[#4a9eff] my-6 transition-all duration-500 data-line-1" style={{ width: "0px" }} />

            <h3 className="text-[18px] font-medium text-white mb-3">
              Bilgi sorgularında AI yanıtı gösteriliyor
            </h3>
            
            <p className="text-[14px] leading-[1.55] text-gray-400">
              Google, bilgi odaklı aramaların büyük bölümünde artık doğrudan AI Overviews yanıtı sunuyor. Klasik on mavi link sıralaması bu sorguların çoğunda artık ilk ekranın altında kalıyor.
            </p>
          </div>
        </article>

        {/* Card 2 */}
        <article
          className="relative rounded-2xl bg-white/[0.03] border border-white/[0.08] p-10 transition-colors duration-300 data-card flex flex-col h-full justify-between"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div>
            <div className="text-[64px] font-semibold text-white flex items-center gap-1 leading-none">
              <span className="sr-only">100M+</span>
              <span aria-hidden="true" className="data-num-2 bg-gradient-to-r from-[#7b5cff] to-[#4a9eff] bg-clip-text text-transparent">
                0
              </span>
            </div>
            
            {/* Draw Line */}
            <div className="h-[2px] bg-gradient-to-r from-[#7b5cff] to-[#4a9eff] my-6 transition-all duration-500 data-line-2" style={{ width: "0px" }} />

            <h3 className="text-[18px] font-medium text-white mb-3">
              Aylık sorgu Perplexity'de işleniyor
            </h3>
            
            <p className="text-[14px] leading-[1.55] text-gray-400">
              Perplexity tek başına aylık yüz milyondan fazla sorguya ulaştı ve her ay büyümeye devam ediyor. ChatGPT, Claude ve Gemini de eklendiğinde, klasik aramanın dışındaki ekosistemin hacmi göz ardı edilemez büyüklüğe ulaştı.
            </p>
          </div>
        </article>

        {/* Card 3 */}
        <article
          className="relative rounded-2xl bg-white/[0.03] border border-white/[0.08] p-10 transition-colors duration-300 data-card flex flex-col h-full justify-between"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div>
            <div className="text-[64px] font-semibold text-white flex items-center gap-1 leading-none">
              <span className="sr-only">3x</span>
              <span aria-hidden="true" className="data-num-3 bg-gradient-to-r from-[#7b5cff] to-[#4a9eff] bg-clip-text text-transparent">
                0
              </span>
            </div>
            
            {/* Draw Line */}
            <div className="h-[2px] bg-gradient-to-r from-[#7b5cff] to-[#4a9eff] my-6 transition-all duration-500 data-line-3" style={{ width: "0px" }} />

            <h3 className="text-[18px] font-medium text-white mb-3">
              Dönüşüm oranı AI alıntısından gelen trafikte
            </h3>
            
            <p className="text-[14px] leading-[1.55] text-gray-400">
              AI yanıtlarında alıntılandığı için sitenize gelen ziyaretçi, araştırma fazını tamamlamış ve karar aşamasındadır. Bu trafik, klasik organik aramaya göre belirgin biçimde daha yüksek dönüşüm sağlıyor.
            </p>
          </div>
        </article>

      </div>

      {/* Model Stats Section */}
      <div className="mt-20 border-t border-white/5 pt-16 section-2-models-header">
        <div className="text-center mb-12">
          <h3 className="text-[24px] md:text-[28px] font-semibold text-white tracking-tight mb-3">
            Yapay Zeka Motorlarının Yükselişi ve Hacmi
          </h3>
          <p className="text-[15px] text-gray-400 max-w-[640px] mx-auto leading-relaxed">
            Kullanıcıların bilgiye ulaşmak için tercih ettiği en büyük üç yapay zeka modelinin güncel kullanıcı hacmi ve son iki yıldaki büyüme trendi.
          </p>
        </div>

        {/* Model Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: ChatGPT */}
          <article className="relative rounded-2xl bg-white/[0.02] border border-white/[0.06] p-8 transition-colors duration-300 model-card flex flex-col h-full justify-between hover:border-white/[0.12] hover:bg-white/[0.03]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[12px] uppercase tracking-widest font-semibold text-emerald-400">
                  ChatGPT Search
                </span>
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-emerald-400">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
              </div>
              <div className="text-[48px] font-bold text-white leading-none mb-2">
                <span className="sr-only">250M+</span>
                <span aria-hidden="true" className="model-num-1 bg-gradient-to-r from-[#7b5cff] to-[#4a9eff] bg-clip-text text-transparent">
                  0
                </span>
              </div>
              <div className="text-[13px] font-semibold text-purple-400 mb-4">
                Son 2 yılda %250+ artış
              </div>
              <p className="text-[14px] leading-[1.55] text-gray-400">
                Haftalık 250 milyondan fazla aktif kullanıcısıyla, arama motoru entegrasyonu sayesinde geleneksel arama davranışını en çok dönüştüren modeldir.
              </p>
            </div>
          </article>

          {/* Card 2: Claude */}
          <article className="relative rounded-2xl bg-white/[0.02] border border-white/[0.06] p-8 transition-colors duration-300 model-card flex flex-col h-full justify-between hover:border-white/[0.12] hover:bg-white/[0.03]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[12px] uppercase tracking-widest font-semibold text-orange-400">
                  Claude 3.5
                </span>
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-orange-400">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
              </div>
              <div className="text-[48px] font-bold text-white leading-none mb-2">
                <span className="sr-only">30M+</span>
                <span aria-hidden="true" className="model-num-2 bg-gradient-to-r from-[#7b5cff] to-[#4a9eff] bg-clip-text text-transparent">
                  0
                </span>
              </div>
              <div className="text-[13px] font-semibold text-purple-400 mb-4">
                Son 2 yılda %400+ artış
              </div>
              <p className="text-[14px] leading-[1.55] text-gray-400">
                Aylık 30 milyondan fazla aktif kullanıcısı ile karmaşık yazılım, derinlemesine analiz ve profesyonel sorgularda en güvenilen alıntı kaynaklarından biridir.
              </p>
            </div>
          </article>

          {/* Card 3: Gemini */}
          <article className="relative rounded-2xl bg-white/[0.02] border border-white/[0.06] p-8 transition-colors duration-300 model-card flex flex-col h-full justify-between hover:border-white/[0.12] hover:bg-white/[0.03]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[12px] uppercase tracking-widest font-semibold text-blue-400">
                  Google Gemini
                </span>
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-blue-400">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
              </div>
              <div className="text-[48px] font-bold text-white leading-none mb-2">
                <span className="sr-only">1B+</span>
                <span aria-hidden="true" className="model-num-3 bg-gradient-to-r from-[#7b5cff] to-[#4a9eff] bg-clip-text text-transparent">
                  0
                </span>
              </div>
              <div className="text-[13px] font-semibold text-purple-400 mb-4">
                Son 2 yılda %250+ arama entegrasyonu
              </div>
              <p className="text-[14px] leading-[1.55] text-gray-400">
                1 milyardan fazla Google kullanıcısına Android ve Chrome üzerinden doğrudan ulaşarak, AI Overviews altyapısı sayesinde en geniş kitleye hitap eden modeldir.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

interface ExpandableQueriesProps {
  queries: string[];
}

function ExpandableQueries({ queries }: { queries: string[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-6 border-t border-white/5 pt-4">
      <button
        onClick={toggle}
        className="flex items-center justify-between w-full text-[13px] text-gray-400 hover:text-white font-medium focus:outline-none transition-colors group"
      >
        <span>Tipik soru örnekleri</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
          opacity: isOpen ? 1 : 0,
          marginTop: isOpen ? "12px" : "0px"
        }}
      >
        <ul className="space-y-2 pl-1">
          {queries.map((q, idx) => (
            <li key={idx} className="text-[13px] text-gray-450 italic flex items-start gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3 text-purple-400 mt-1 flex-shrink-0">
                <polyline points="9 18 15 12 9 6" />
              </svg>
              <span>{q}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

interface IndustryCardProps {
  label: string;
  title: string;
  body: string;
  icon: React.ReactNode;
  queries: string[];
  onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => void;
}

function IndustryCard({
  label,
  title,
  body,
  icon,
  queries,
  onMouseEnter,
  onMouseLeave
}: IndustryCardProps) {
  return (
    <article
      className="relative rounded-2xl bg-white/[0.03] border border-white/[0.08] p-8 transition-colors duration-300 industry-card flex flex-col h-full justify-between"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Accent border top line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#7b5cff] to-[#4a9eff] rounded-t-[inherit] top-border-line" style={{ width: "0%" }} />

      <div>
        {/* Top row: radial glow wrapper around icon + label */}
        <div className="flex items-center justify-between gap-4 mb-5">
          <span className="text-[12px] uppercase tracking-widest font-semibold bg-gradient-to-r from-[#7b5cff] to-[#4a9eff] bg-clip-text text-transparent">
            {label}
          </span>
          <div className="w-11 h-11 flex items-center justify-center relative industry-icon-bg rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-[#7b5cff]/[0.08] to-transparent rounded-lg pointer-events-none" />
            {icon}
          </div>
        </div>

        <h3 className="text-[20px] font-medium text-white mb-2 leading-snug">
          {title}
        </h3>
        
        <p className="text-[14px] leading-[1.55] text-gray-400">
          {body}
        </p>
      </div>

      <ExpandableQueries queries={queries} />
    </article>
  );
}

export function IndustryVerticals({
  onMouseEnter,
  onMouseLeave
}: {
  onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => void;
}) {
  return (
    <section className="content-section section-3-container border-t border-white/5">
      
      {/* HEADER */}
      <div className="text-center mb-16 section-3-header">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-blue-400 uppercase tracking-widest mb-6">
          <Sparkles className="w-3 h-3" />
          HEDEF SEKTÖRLER
        </div>
        <h2 className="text-[36px] md:text-[48px] font-bold text-white tracking-tight mb-4">
          Hangi İşletmeler GEO Danışmanlığı Almalı?
        </h2>
        <p className="text-[16px] text-gray-400 max-w-[720px] mx-auto leading-relaxed">
          GEO her sektör için aynı yoğunlukta gerekli değildir. Müşterilerinin satın alma yolculuğu araştırmayla başlayan, karar verirken referans arayan veya karşılaştırma yapan her işletme, AI motorlarında konumlanmadan büyüyemez.
        </p>
      </div>

      {/* SIX INDUSTRY GRID */}
      <div className="industry-grid mb-16">
        {/* Card 1: B2B SaaS */}
        <IndustryCard
          label="B2B SaaS & YAZILIM"
          title="B2B SaaS ve Yazılım Şirketleri"
          body="Karar vericilerin yapay zekaya yönelttiği karmaşık ürün karşılaştırma sorgularında öne çıkmak isteyen şirketler. SaaS satın alma sürecinin yüzde sekseni artık AI motorlarında başlıyor."
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white relative z-10">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          }
          queries={[
            "B2B müşteri yönetimi için en iyi CRM hangisi",
            "Stripe alternatifi olarak hangi ödeme altyapısı önerilir",
            "Küçük ekipler için kullanılan proje yönetim araçları"
          ]}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />

        {/* Card 2: E-ticaret */}
        <IndustryCard
          label="E-TİCARET & D2C"
          title="E-ticaret ve D2C Markaları"
          body="Ürün önerisi sorgularında ChatGPT veya Perplexity'nin yanıtının içinde geçmek isteyen markalar. Tek bir AI tavsiyesi, on bin reklam gösteriminden daha yüksek satın alma niyeti taşıyor."
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white relative z-10">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          }
          queries={[
            "Hassas ciltler için önerilen güneş kremleri",
            "Ev kahvesi için en iyi espresso makinesi modelleri",
            "Sürdürülebilir markalar arasında öne çıkan giyim firmaları"
          ]}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />

        {/* Card 3: Sağlık */}
        <IndustryCard
          label="SAĞLIK & KLİNİK"
          title="Sağlık ve Klinik İşletmeleri"
          body="YMYL kapsamında AI motorlarının yüksek güven eşiği aradığı bir sektör. Uzman otoritesi, akademik referanslar ve doğrulanmış hekim profilleri olmadan AI yanıtlarında görünmek mümkün değil."
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white relative z-10">
              <path d="M4.5 16.5c-1.5 1.25-2.5 3-2.5 4.5 0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5c0-1.5-1-3.25-2.5-4.5z" />
              <path d="M10 10a4 4 0 0 0-4-4h-.5" />
              <path d="M12 18V6a4 4 0 0 1 8 0v2.5" />
              <circle cx="20" cy="10" r="1.5" />
            </svg>
          }
          queries={[
            "İstanbul'da en iyi saç ekimi kliniği",
            "Tüp bebek tedavisinde başarı oranı yüksek merkezler",
            "Diş implant uygulamasında deneyimli hekimler"
          ]}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />

        {/* Card 4: Hukuk */}
        <IndustryCard
          label="HUKUK & PROFESYONEL"
          title="Hukuk Büroları ve Profesyonel Hizmet"
          body="Bilgi yoğun sorgularda referans gösterilmek isteyen uzmanlık ofisleri. Yapay zekanın hukuki konularda kaynak olarak gösterdiği bürolar, müşteri kazanımında belirgin avantaj elde ediyor."
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white relative z-10">
              <line x1="12" y1="3" x2="12" y2="21" />
              <line x1="9" y1="21" x2="15" y2="21" />
              <line x1="6" y1="7" x2="18" y2="7" />
              <path d="M6 7c0 5 3 7 6 7M18 7c0 5-3 7-6 7" />
            </svg>
          }
          queries={[
            "Ticari uyuşmazlıklarda uzman avukatlık büroları",
            "Yabancılar için Türkiye'de gayrimenkul alım rehberi",
            "Boşanma davalarında deneyimli aile hukuku avukatları"
          ]}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />

        {/* Card 5: Finans */}
        <IndustryCard
          label="FİNANS & SİGORTA"
          title="Finans ve Sigorta Kurumları"
          body="Karşılaştırma ve önerme sorgularında AI yanıtlarında geçmesi kritik olan kurumsal markalar. Finansal ürün seçimi gibi hassas kararlarda AI'nın referans aldığı markalar, müşteri güvenini ilk temasta kazanıyor."
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white relative z-10">
              <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
              <path d="M22 12A10 10 0 0 0 12 2v10z" />
            </svg>
          }
          queries={[
            "Bireysel emeklilik için önerilen şirketler",
            "Kasko sigortasında en uygun fiyatlı kurumlar",
            "Yatırım fonlarında performansı yüksek yönetim şirketleri"
          ]}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />

        {/* Card 6: Eğitim */}
        <IndustryCard
          label="EĞİTİM & EDTECH"
          title="Eğitim ve EdTech Platformları"
          body="Müfredat, kurs ve sertifika önerilerinde AI motorlarının referans aldığı kaynak haline gelmek isteyen platformlar. Öğrencilerin ilk başvurduğu mecra artık AI sohbet kutularıdır."
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white relative z-10">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c0 2 2.5 3 6 3s6-1 6-3v-5" />
            </svg>
          }
          queries={[
            "Veri bilimi öğrenmek için önerilen online kurslar",
            "Çocuklar için kodlama eğitimi veren platformlar",
            "İngilizce sınav hazırlığında etkili dijital kaynaklar"
          ]}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      </div>

      {/* CLOSING CTA STRIP */}
      <div className="closing-cta-card relative rounded-2xl p-8 overflow-hidden bg-gradient-to-r from-[#7b5cff]/[0.18] to-[#4a9eff]/[0.18]">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="100%" height="100%" rx="16" stroke="url(#hero-card-gradient)" strokeWidth="1" />
        </svg>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col text-center md:text-left gap-1">
            <h4 className="text-[22px] font-medium text-white leading-tight">
              Markanız bu sektörlerden birinde mi?
            </h4>
            <p className="text-[14px] text-gray-400">
              Hangi sorgularda göründüğünüzü ve nerede konumlanmanız gerektiğini birlikte planlayalım.
            </p>
          </div>
          
          <Link
            href="#analiz"
            className="inline-flex items-center justify-center h-[46px] px-6 rounded-lg bg-gradient-to-r from-[#7b5cff] to-[#4a9eff] hover:opacity-95 text-white font-medium text-[14px] transition-all duration-300 focus-ring-purple shadow-md shadow-[#7b5cff]/10 whitespace-nowrap"
          >
            Stratejik Görüşme Planla
          </Link>
        </div>
      </div>

    </section>
  );
}

export default function GEOConsultancyContent() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const win = window as any;
      if (win.gsap && win.ScrollTrigger) {
        setIsReady(true);
      } else {
        const interval = setInterval(() => {
          if (win.gsap && win.ScrollTrigger) {
            setIsReady(true);
            clearInterval(interval);
          }
        }, 100);
        return () => clearInterval(interval);
      }
    }
  }, []);

  useEffect(() => {
    if (!isReady) return;

    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;

    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      // Set all elements to final state instantly
      gsap.set(".underline-path", { strokeDashoffset: 0 });
      gsap.set(".bento-card, .data-card, .model-card, .industry-card, .cta-strip-card, .closing-cta-card", { scale: 1, opacity: 1, y: 0 });
      gsap.set(".bento-card .icon-container", { scale: 1 });
      gsap.set(".industry-card .top-border-line", { width: "100%" });
      
      const el1 = document.querySelector(".metric-val-1");
      const el2 = document.querySelector(".metric-val-2");
      const el3 = document.querySelector(".metric-val-3");
      if (el1) el1.textContent = "%320";
      if (el2) el2.textContent = "4";
      if (el3) el3.textContent = "48 saat";

      const num1 = document.querySelector(".data-num-1");
      const num2 = document.querySelector(".data-num-2");
      const num3 = document.querySelector(".data-num-3");
      if (num1) num1.textContent = "%80";
      if (num2) num2.textContent = "100M+";
      if (num3) num3.textContent = "3x";

      const mNum1 = document.querySelector(".model-num-1");
      const mNum2 = document.querySelector(".model-num-2");
      const mNum3 = document.querySelector(".model-num-3");
      if (mNum1) mNum1.textContent = "250M+";
      if (mNum2) mNum2.textContent = "30M+";
      if (mNum3) mNum3.textContent = "1B+";

      gsap.set(".data-line-1, .data-line-2, .data-line-3", { width: 48 });

      return;
    }

    // SECTION 1 TIMELINE (Bento Grid)
    const sec1TL = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-1-container",
        start: "top 75%",
        once: true
      }
    });

    sec1TL.fromTo(".section-1-header", { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" })
          .fromTo(".bento-card",
            { scale: 0.96, opacity: 0, y: 24 },
            { scale: 1, opacity: 1, y: 0, stagger: 0.06, duration: 0.5, ease: "power2.out" },
            "-=0.4"
          )
          .fromTo(".bento-card .icon-container",
            { scale: 0.8 },
            { scale: 1, duration: 0.4, ease: "elastic.out(1.2, 0.4)", stagger: 0.04 },
            "-=0.2"
          )
          .fromTo(".cta-strip-card",
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.2)" },
            "-=0.2"
          );

    // SECTION 2 TIMELINE (Why It Matters)
    const sec2TL = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-2-container",
        start: "top 70%",
        once: true
      }
    });

    sec2TL.fromTo(".section-2-header", { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" })
          .fromTo(".data-card",
            { y: 32, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.15, duration: 0.6, ease: "power2.out" },
            "-=0.4"
          )
          .fromTo(".section-2-models-header", { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.2")
          .fromTo(".model-card",
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.12, duration: 0.5, ease: "power2.out" },
            "-=0.3"
          );

    sec2TL.call(() => {
      // Counter 1
      const val1 = { value: 0 };
      gsap.to(val1, {
        value: 80,
        duration: 1.5,
        ease: "power2.out",
        onUpdate: () => {
          const el = document.querySelector(".data-num-1");
          if (el) el.textContent = `%${Math.round(val1.value)}`;
        },
        onComplete: () => {
          gsap.to(".data-line-1", { width: 48, duration: 0.6, ease: "power2.out" });
        }
      });

      // Counter 2
      const val2 = { value: 0 };
      gsap.to(val2, {
        value: 100,
        duration: 1.5,
        ease: "power2.out",
        onUpdate: () => {
          const el = document.querySelector(".data-num-2");
          if (el) el.textContent = `${Math.round(val2.value)}M+`;
        },
        onComplete: () => {
          gsap.to(".data-line-2", { width: 48, duration: 0.6, ease: "power2.out" });
        }
      });

      // Counter 3
      const val3 = { value: 0 };
      gsap.to(val3, {
        value: 3,
        duration: 1.5,
        ease: "power2.out",
        onUpdate: () => {
          const el = document.querySelector(".data-num-3");
          if (el) el.textContent = `${Math.round(val3.value)}x`;
        },
        onComplete: () => {
          gsap.to(".data-line-3", { width: 48, duration: 0.6, ease: "power2.out" });
        }
      });

      // Model Counter 1 (ChatGPT)
      const valModel1 = { value: 0 };
      gsap.to(valModel1, {
        value: 250,
        duration: 1.5,
        ease: "power2.out",
        onUpdate: () => {
          const el = document.querySelector(".model-num-1");
          if (el) el.textContent = `${Math.round(valModel1.value)}M+`;
        }
      });

      // Model Counter 2 (Claude)
      const valModel2 = { value: 0 };
      gsap.to(valModel2, {
        value: 30,
        duration: 1.5,
        ease: "power2.out",
        onUpdate: () => {
          const el = document.querySelector(".model-num-2");
          if (el) el.textContent = `${Math.round(valModel2.value)}M+`;
        }
      });

      // Model Counter 3 (Gemini)
      const valModel3 = { value: 0 };
      gsap.to(valModel3, {
        value: 1,
        duration: 1.5,
        ease: "power2.out",
        onUpdate: () => {
          const el = document.querySelector(".model-num-3");
          if (el) el.textContent = `${valModel3.value >= 1 ? "1B+" : (valModel3.value).toFixed(1) + "B+"}`;
        }
      });
    }, [], "-=0.2");

    // SECTION 3 TIMELINE (Who It's For)
    const sec3TL = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-3-container",
        start: "top 75%",
        once: true
      }
    });

    sec3TL.fromTo(".section-3-header", { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" })
          .fromTo(".industry-card",
            { y: 28, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: "power2.out" },
            "-=0.4"
          )
          .fromTo(".industry-card .top-border-line",
            { width: "0%" },
            { width: "100%", stagger: 0.08, duration: 0.4, ease: "power2.out" },
            "-=0.4"
          )
          .fromTo(".closing-cta-card",
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.2)" },
            "-=0.2"
          );

    return () => {
      ScrollTrigger.getAll().forEach((t: any) => t.kill());
    };
  }, [isReady]);

  // Card Hover GSAP Animations
  const handleCardMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const iconBg = card.querySelector(".icon-container");
    const gsap = (window as any).gsap;
    if (!gsap) return;

    gsap.to(card, { y: -4, borderColor: "rgba(255, 255, 255, 0.2)", duration: 0.2, ease: "power2.out" });
    if (iconBg) {
      gsap.to(iconBg, { backgroundColor: "rgba(123, 92, 255, 0.25)", duration: 0.2 });
    }
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const iconBg = card.querySelector(".icon-container");
    const gsap = (window as any).gsap;
    if (!gsap) return;

    gsap.to(card, { y: 0, borderColor: "rgba(255, 255, 255, 0.08)", duration: 0.2, ease: "power2.out" });
    if (iconBg) {
      gsap.to(iconBg, { backgroundColor: "rgba(123, 92, 255, 0.15)", duration: 0.2 });
    }
  };

  const handleIndustryMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const iconBg = card.querySelector(".industry-icon-bg");
    const gsap = (window as any).gsap;
    if (!gsap) return;

    gsap.to(card, { y: -4, borderColor: "rgba(255, 255, 255, 0.2)", duration: 0.2, ease: "power2.out" });
    if (iconBg) {
      gsap.to(iconBg, { background: "radial-gradient(circle, rgba(123, 92, 255, 0.18) 0%, transparent 70%)", duration: 0.2 });
    }
  };

  const handleIndustryMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const iconBg = card.querySelector(".industry-icon-bg");
    const gsap = (window as any).gsap;
    if (!gsap) return;

    gsap.to(card, { y: 0, borderColor: "rgba(255, 255, 255, 0.08)", duration: 0.2, ease: "power2.out" });
    if (iconBg) {
      gsap.to(iconBg, { background: "radial-gradient(circle, rgba(123, 92, 255, 0.08) 0%, transparent 70%)", duration: 0.2 });
    }
  };

  return (
    <div className="geo-consultancy-container">
      <style dangerouslySetInnerHTML={{ __html: `
        /* 90vw Container widths capped at 1600px on >1700px screens */
        .geo-consultancy-container {
          width: 90vw;
          max-width: 90vw;
          margin-left: auto;
          margin-right: auto;
        }
        @media (min-width: 1700px) {
          .geo-consultancy-container {
            max-width: 1600px;
          }
        }

        /* 120px padding on desktop, 80px on mobile */
        .content-section {
          padding-top: 80px;
          padding-bottom: 80px;
        }
        @media (min-width: 1024px) {
          .content-section {
            padding-top: 120px;
            padding-bottom: 120px;
          }
        }

        /* Bento grid columns and areas on desktop */
        .bento-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }
        
        @media (min-width: 640px) and (max-width: 1024px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .bento-card {
            padding: 28px !important;
          }
        }

        @media (min-width: 1025px) {
          .bento-grid {
            grid-template-columns: repeat(4, 1fr);
            grid-template-areas:
              "card1 card1 card2 card2"
              "card3 card4 card2 card2"
              "card5 card6 card7 card8";
          }
          .card-1 { grid-area: card1; }
          .card-2 { grid-area: card2; }
          .card-3 { grid-area: card3; }
          .card-4 { grid-area: card4; }
          .card-5 { grid-area: card5; }
          .card-6 { grid-area: card6; }
          .card-7 { grid-area: card7; }
          .card-8 { grid-area: card8; }
        }

        /* Industry verticals grid layout */
        .industry-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        @media (min-width: 640px) and (max-width: 1024px) {
          .industry-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1025px) {
          .industry-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        /* Interactive element outline custom overrides */
        .focus-ring-purple:focus-visible {
          outline: 2px solid #7b5cff !important;
          outline-offset: 2px !important;
        }
      `}} />

      {/* Bento Service grid */}
      <ServiceBentoGrid
        onMouseEnter={handleCardMouseEnter}
        onMouseLeave={handleCardMouseLeave}
      />

      {/* Why It Matters data proof */}
      <WhyItMattersData
        onMouseEnter={handleCardMouseEnter}
        onMouseLeave={handleCardMouseLeave}
      />

      {/* Target Industry verticals */}
      <IndustryVerticals
        onMouseEnter={handleIndustryMouseEnter}
        onMouseLeave={handleIndustryMouseLeave}
      />
    </div>
  );
}
