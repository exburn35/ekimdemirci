import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import FAQSchema from "@/components/schemas/FAQSchema";
import { Sparkles, Brain, Cpu, ArrowRight, Zap, Target, Search, BarChart3 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GEO (Generative Engine Optimization) Danışmanlığı | Ekim Demirci",
  description: "Google AI Overviews, ChatGPT, Claude ve Perplexity gibi yapay zeka motorlarında markanızın alıntılanması ve önerilmesi için profesyonel GEO danışmanlığı.",
  alternates: {
    canonical: "/geo-danismanligi",
  },
  openGraph: {
    title: "GEO (Generative Engine Optimization) Danışmanlığı | Ekim Demirci",
    description: "Yapay zeka arama motorları için web sitenizi optimize edin. Generative Engine Optimization (GEO) çözümleri.",
  },
};

export default function GEODanismanligi() {
  const faqItems = [
    {
      question: "GEO (Generative Engine Optimization) Nedir?",
      answer: "GEO, web sitelerinin ChatGPT, Gemini, Perplexity ve Google AI Overviews gibi yapay zeka tabanlı üretken arama motorlarında kaynak gösterilmesi, alıntılanması ve önerilmesi amacıyla yapılan yeni nesil optimizasyon sürecidir."
    },
    {
      question: "GEO'nun klasik SEO'dan farkı nedir?",
      answer: "Klasik SEO, anahtar kelimelere ve arama motoru sıralamalarına odaklanarak doğrudan tıklama çekmeyi hedefler. GEO ise yapay zekanın ürettiği sentezlenmiş yanıtlarda markanızın güvenilir bir kaynak olarak referans gösterilmesini sağlar."
    },
    {
      question: "AI Overviews'da görünmek tıklama oranlarını nasıl etkiler?",
      answer: "AI Overviews veya ChatGPT yanıtlarında alıntılanan kaynaklar, doğrudan satın alma veya araştırma niyetindeki yüksek kaliteli trafiği çeker. Doğrudan tıklama oranı klasik sıralamalara göre daha dönüşüm odaklıdır."
    },
    {
      question: "Semantik Triple (Özne-Yüklem-Nesne) yapısının GEO ile ilişkisi nedir?",
      answer: "Yapay zeka modelleri bilgiyi ilişkisel grafikler (Knowledge Graphs) üzerinden işler. Semantik Triple kullanarak sitenizdeki verileri özne-yüklem-nesne şeklinde yapılandırdığımızda, modeller sitenizi çok daha kolay anlar ve önerir."
    },
    {
      question: "GEO optimizasyonu ne kadar sürede sonuç verir?",
      answer: "GEO çalışmaları, yapay zeka modellerinin veri setlerini güncelleme sıklığına ve Google'ın AI Overviews indeksleme hızına bağlı olarak genellikle 3 ila 6 ay arasında etkisini göstermeye başlar."
    },
    {
      question: "Perplexity ve ChatGPT aramalarında markam nasıl önerilir?",
      answer: "Bu modeller, internet üzerindeki yüksek otoriteye sahip, yapılandırılmış ve alıntılanabilir kaynakları tercih eder. Entity otoritenizi inşa ederek ve kaynak gösterim stratejileri uygulayarak bu motorlarda önerilmenizi sağlıyorum."
    },
    {
      question: "Yapay zeka modellerinin beni alıntıladığını nasıl ölçebiliriz?",
      answer: "Özel rakip analizi ve yapay zeka model sorgulamalarıyla, markanızın hangi sorgularda ve hangi modellerde (Claude, GPT, Perplexity) alıntılandığını takip eden analizler ve raporlar hazırlıyorum."
    },
    {
      question: "Hangi sektörler GEO danışmanlığı almalıdır?",
      answer: "Özellikle B2B markaları, teknoloji girişimleri, e-ticaret siteleri, sağlık ve hukuk gibi bilgi yoğun sektörler yapay zeka aramalarında erken konumlanmak için GEO danışmanlığından en yüksek faydayı sağlar."
    },
    {
      question: "GEO için içeriklerin nasıl bir formatta yazılması gerekir?",
      answer: "İçeriklerin soru-cevap formatında (AEO), net veriler içeren tablolarla desteklenmiş, jargon yerine doğal dil işleme (NLP) kurallarına uygun ve doğrudan bilgi sunan bir formatta olması gerekir."
    },
    {
      question: "Ekim Demirci olarak GEO sürecini nasıl yönetiyorum?",
      answer: "Sitenizin mevcut yapısını analiz ediyor, içeriklerinizi yapay zeka formatına uyarlıyor, entity otoritenizi güçlendiriyor ve tüm süreci doğrudan kendim uçtan uca yönetiyorum."
    }
  ];

  return (
    <>
      <FAQSchema items={faqItems} />
      
      <ServicePageLayout
        title="GEO Danışmanlığı"
        subtitle="Generative Engine Optimization"
        description="Yapay zeka arama motorları çağında yerinizi alın. Google AI Overviews, Perplexity, ChatGPT ve Claude gibi üretken yapay zeka motorlarında markanızın güvenilir bir kaynak olarak önerilmesini, alıntılanmasını ve organik trafiğini artırmasını sağlıyorum."
        icon="Brain"
        gradient="from-emerald-500 to-teal-500"
        features={[
          "Yapay Zeka Arama Motoru Optimizasyonu (GEO)",
          "Google AI Overviews Entegrasyonu",
          "Source Citation (Kaynak Gösterimi) Stratejisi",
          "Entity (Varlık) Otoritesi İnşası",
          "Doğal Dil İşleme (NLP) Uyumlu İçerik",
          "ChatGPT & Perplexity Görünürlük Analizi",
          "Semantik Triple Yapılandırması",
          "AI Performans Ölçümü ve Raporlama",
        ]}
        benefits={[
          {
            title: "Yapay Zeka Aramalarında Liderlik",
            description: "Kullanıcılar artık doğrudan arama motoru sonuçları yerine yapay zekanın sentezlediği yanıtlardan bilgi alıyor. GEO ile markanızı bu özetlerin birincil kaynağı haline getiriyorum.",
          },
          {
            title: "Yüksek Dönüşümlü Trafik",
            description: "Yapay zekanın yanıtında önerilen bir marka olmak, araştırma sürecini tamamlamış ve satın almaya en yakın olan nitelikli kitleye doğrudan ulaşmak demektir.",
          },
          {
            title: "Geleceğe Hazır SEO Altyapısı",
            description: "Arama alışkanlıklarının değiştiği bu dönemde klasik SEO yöntemleri yetersiz kalıyor. Altyapınızı modern GEO standartlarına uyarlayarak sitenizi geleceğe hazırlıyorum.",
          },
          {
            title: "Maksimum Kaynak Alıntısı",
            description: "İçeriklerinizi yapay zeka botlarının en kolay okuyacağı ve alıntılayacağı formatlara getirerek referans verilme (citation) oranlarınızı katlıyorum.",
          },
        ]}
        process={[
          {
            step: "1",
            title: "Yapay Zeka Denetimi ve Keşif",
            description: "Mevcut dijital varlıklarınızın yapay zeka modelleri (GPT, Gemini, Perplexity) tarafından nasıl algılandığını analiz ediyor, alıntı durumumuzu raporluyorum.",
          },
          {
            step: "2",
            title: "Semantik İçerik Yapılandırma",
            description: "İçeriklerinizi NLP (Doğal Dil İşleme) algoritmalarına uyumlu hale getirerek, yapay zekanın en sevdiği soru-cevap ve veri odaklı formatlara dönüştürüyorum.",
          },
          {
            step: "3",
            title: "Varlık (Entity) ve Otorite İnşası",
            description: "Markanızı sektörünüzde bir 'Entity' (Varlık) olarak tanımlatıyor, bilgi grafiklerinde (Knowledge Graphs) yer almanız için gerekli şemaları kodluyorum.",
          },
          {
            step: "4",
            title: "Ölçüm ve Sürekli Optimizasyon",
            description: "Yapay zeka modellerindeki görünürlük durumunuzu, alıntı sayınızı ve buradan gelen organik trafiği düzenli raporlarla takip ediyorum.",
          },
        ]}
      >
        {/* GEO Detailed Content Sections */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
          
          {/* Section 1: GEO Nedir */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                GEO (Generative Engine Optimization) Nedir?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Generative Engine Optimization (GEO), web sitelerinin arama davranışlarındaki devrimsel değişime ayak uydurmasını sağlayan yeni nesil bir optimizasyon disiplinidir. ChatGPT, Perplexity, Gemini ve Google AI Overviews gibi üretken yapay zeka motorları, geleneksel sıralamalar yerine kullanıcıya sentezlenmiş tek bir yanıt sunar.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                İşte <strong>GEO</strong>, bu yapay zeka yanıtlarında markanızın güvenilir bir referans olarak geçmesini, alıntılanmasını (citation) ve kullanıcılara tavsiye edilmesini sağlamak amacıyla gerçekleştirilen tüm teknik ve içerik optimizasyonlarını kapsar.
              </p>
            </div>
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-purple-500/20 shadow-[0_0_30px_rgba(139,92,246,0.15)] bg-slate-950 p-2">
              <img 
                src="/GEO-generative-engine-optimization-nedir.webp" 
                alt="GEO Nedir Görsel Analizi"
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
          </section>

          {/* Section 2: GEO vs SEO */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:flex-row-reverse">
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-purple-500/20 shadow-[0_0_30px_rgba(139,92,246,0.15)] bg-slate-950 p-2 lg:order-last">
              <img 
                src="/GEO nasıl çalışır.webp" 
                alt="GEO Nasıl Çalışır Şeması"
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                GEO (Generative Engine Optimization) SEO'dan Farklı mıdır?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Klasik SEO, anahtar kelime hacimlerine, backlink sayılarına ve arama motoru sonuç sayfalarındaki (SERP) mavi link sıralamalarına odaklanır. Temel hedef, kullanıcıyı sitenize çekmektir.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                <strong>GEO ise</strong>, kullanıcının doğrudan yanıt aldığı yapay zeka kutusunun içerisinde yer almayı hedefler. Yapay zeka motorları bilgiyi indekslemekle kalmaz, onu yorumlar ve en güvenilir kaynakları alıntılar. GEO'da odak noktası sıralanmak değil, yapay zekanın güvendiği bir <strong>bilgi kaynağı (source of truth)</strong> haline gelmektir.
              </p>
              <div className="bg-[#111836] border border-purple-500/20 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-white mb-2">Temel Farklar:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" /> Geleneksel SEO sıralama hedeflerken, GEO alıntılanma (citation) hedefler.</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" /> SEO anahtar kelime odaklıdır, GEO doğal dil işleme (NLP) ve arama niyetine odaklanır.</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" /> SEO botları siteleri dizine ekler, AI botları ise sitenizdeki bilgiyi öğrenir.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: GEO Ne İşe Yarar */}
          <section className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center">
              GEO (Generative Engine Optimization) Hizmeti Ne İşe Yarar?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto text-center">
              GEO hizmeti, değişen arama alışkanlıklarında markanızın dijital görünürlüğünü korumasını ve artırmasını sağlar. Kullanıcılar yapay zekaya bir ürün, hizmet veya bilgi sorduğunda markanızın adının geçmesini ve web sitenizin linkinin kaynak olarak sunulmasını sağlar.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="p-6 bg-[#111836]/50 border border-white/5 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-3">Güvenilirlik Kazanımı</h3>
                <p className="text-gray-400 text-sm">Yapay zekanın yanıtında referans gösterilen bir marka, kullanıcı gözünde anında en yetkin otorite olarak algılanır.</p>
              </div>
              <div className="p-6 bg-[#111836]/50 border border-white/5 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-3">Dönüşüm Oranı Artışı</h3>
                <p className="text-gray-400 text-sm">Sadece bilgi araması yapanlar yerine, yapay zekanın önerisiyle gelen kullanıcılar doğrudan dönüşüme veya satın almaya odaklıdır.</p>
              </div>
              <div className="p-6 bg-[#111836]/50 border border-white/5 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-3">Görünürlük Kaybını Önleme</h3>
                <p className="text-gray-400 text-sm">Google AI Overviews'in yaygınlaşmasıyla klasik organik tıklamalar düşmektedir. GEO, bu kaybı avantaja çevirir.</p>
              </div>
            </div>
          </section>

          {/* Section 4: GEO Neden Önemlidir (Somut Verilerle) */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                GEO (Generative Engine Optimization) Hizmeti Neden Önemlidir?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Arama dünyasındaki değişim artık bir tahmin değil, ölçülebilir bir gerçektir. Yapay zeka motorlarının kullanımı inanılmaz bir hızla büyümektedir.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-lg font-bold text-sm">Data</div>
                  <p className="text-gray-300"><strong className="text-white">Perplexity'nin Hızlı Büyümesi:</strong> Perplexity, aylık 100 milyondan fazla sorgu barındıran devasa bir arama motoru haline geldi ve her ay %20'nin üzerinde büyüme gösteriyor.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-lg font-bold text-sm">Data</div>
                  <p className="text-gray-300"><strong className="text-white">Google AI Overviews (SGE) Yayılımı:</strong> Google, ABD başta olmak üzere dünya genelinde bilgi odaklı aramaların %80'inden fazlasında doğrudan yapay zeka özetlerini göstermeye başladı.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-lg font-bold text-sm">Data</div>
                  <p className="text-gray-300"><strong className="text-white">Arama Alışkanlıklarının Değişimi:</strong> Z ve Alfa kuşağı, bilgi aramak için klasik listeleme sayfaları yerine doğrudan ChatGPT ve ChatGPT Search gibi sohbet tabanlı motorları kullanmayı tercih ediyor.</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-purple-500/20 shadow-[0_0_30px_rgba(139,92,246,0.15)] bg-slate-950 p-2">
              <img 
                src="/GEO'nun çalışma mantığı nedir.webp" 
                alt="GEO Neden Önemlidir İstatistik Analiz"
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
          </section>

          {/* Section 5: GEO Hizmetinin Kapsamı Nedir? */}
          <section className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center">
              GEO Hizmetinin Kapsamı Nedir?
            </h2>
            <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto">
              GEO sürecinde sitenizi yapay zeka motorlarının gereksinimlerine uygun şekilde optimize etmek için uçtan uca şu çalışmaları yürütüyorum:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
              <div className="p-6 bg-[#111836] border border-purple-500/20 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">1</div>
                <h3 className="text-lg font-bold text-white">İçerik Yeniden Yapılandırma</h3>
                <p className="text-gray-400 text-sm">İçeriklerinizi yapay zeka dil modellerinin (LLM) en kolay anlayacağı, doğrudan yanıtlar içeren, listeli ve tablolu GEO formatına getiriyorum.</p>
              </div>
              <div className="p-6 bg-[#111836] border border-purple-500/20 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">2</div>
                <h3 className="text-lg font-bold text-white">Source Citation Stratejisi</h3>
                <p className="text-gray-400 text-sm">Yapay zekanın sitenizi kaynak göstermesi için otoriter dış referanslar, şema işaretlemeleri ve alıntı stratejileri uyguluyorum.</p>
              </div>
              <div className="p-6 bg-[#111836] border border-purple-500/20 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">3</div>
                <h3 className="text-lg font-bold text-white">Entity Otoritesi İnşası</h3>
                <p className="text-gray-400 text-sm">Markanızın bilgi grafiklerinde (Knowledge Graphs) bir 'Entity' (Varlık) olarak yer almasını sağlayacak semantik optimizasyonları yapıyorum.</p>
              </div>
              <div className="p-6 bg-[#111836] border border-purple-500/20 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">4</div>
                <h3 className="text-lg font-bold text-white">Rakip Analizi</h3>
                <p className="text-gray-400 text-sm">Yapay zeka modellerinde (ChatGPT, Claude vb.) rakiplerinizin hangi sorgularda ve neden alıntılandığını derinlemesine analiz ediyorum.</p>
              </div>
              <div className="p-6 bg-[#111836] border border-purple-500/20 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">5</div>
                <h3 className="text-lg font-bold text-white">Ölçüm ve Raporlama</h3>
                <p className="text-gray-400 text-sm">Yapay zeka aramalarındaki görünürlüğünüzü, alıntı payınızı ve GEO çalışmalarının getirdiği organik trafiği ölçüp raporluyorum.</p>
              </div>
            </div>
          </section>

          {/* Section 6: Metodolojim Nedir? */}
          <section className="space-y-6 bg-[#111836]/40 border border-white/5 p-8 md:p-12 rounded-3xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Metodolojim Nedir?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              GEO projelerinde tamamen veri odaklı ve butik bir yol haritası izliyorum. Markanızı yapay zeka çağına taşırken adım adım şu metodolojiyi uyguluyorum:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-4">
              <div className="space-y-2">
                <span className="text-emerald-400 font-bold text-lg">01. Analiz</span>
                <p className="text-gray-400 text-sm">Yapay zeka indeksleme ve alıntı durumunuzun tespiti.</p>
              </div>
              <div className="space-y-2">
                <span className="text-emerald-400 font-bold text-lg">02. Yapılandırma</span>
                <p className="text-gray-400 text-sm">İçeriklerin ve teknik kodların LLM standartlarına göre optimize edilmesi.</p>
              </div>
              <div className="space-y-2">
                <span className="text-emerald-400 font-bold text-lg">03. Otorite</span>
                <p className="text-gray-400 text-sm">Entity bazlı semantik şema kodlamalarıyla marka güvenliğinin pekiştirilmesi.</p>
              </div>
              <div className="space-y-2">
                <span className="text-emerald-400 font-bold text-lg">04. Takip</span>
                <p className="text-gray-400 text-sm">AI aramalarından gelen organik dönüşümün raporlanması.</p>
              </div>
            </div>
          </section>

          {/* Section 7: Kimler İçin Uygundur? */}
          <section className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center">
              Kimler İçin Uygundur?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex gap-4 items-start p-6 bg-slate-900 border border-white/5 rounded-2xl">
                <div className="p-3 bg-purple-600/20 text-purple-400 rounded-xl">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">B2B ve SaaS Firmaları</h3>
                  <p className="text-gray-400 text-sm">Karar vericilerin yapay zekaya yönelttiği karmaşık teknik sorularda doğrudan önerilen marka konumuna gelmek isteyenler.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-6 bg-slate-900 border border-white/5 rounded-2xl">
                <div className="p-3 bg-purple-600/20 text-purple-400 rounded-xl">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">E-Ticaret Markaları</h3>
                  <p className="text-gray-400 text-sm">Ürün karşılaştırmaları ve satın alma tavsiyesi sorgularında ChatGPT ve Perplexity üzerinde alıntılanarak satışlarını artırmak isteyenler.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-6 bg-slate-900 border border-white/5 rounded-2xl">
                <div className="p-3 bg-purple-600/20 text-purple-400 rounded-xl">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Sağlık ve Hukuk Sektörü</h3>
                  <p className="text-gray-400 text-sm">Bilgi yoğun aramalarda, güvenilir uzman makaleleriyle yapay zeka özetlerinde birincil referans gösterilmek isteyen klinikler ve avukatlar.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-6 bg-slate-900 border border-white/5 rounded-2xl">
                <div className="p-3 bg-purple-600/20 text-purple-400 rounded-xl">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Teknoloji ve Eğitim Platformları</h3>
                  <p className="text-gray-400 text-sm">Gelişen teknolojilere öncülük ederek arama motorlarındaki pazar payını yapay zeka aramalarıyla büyütmek isteyen girişimciler.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8: Başarı Hikayeleri */}
          <section className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center">
              GEO Başarı Hikayeleri
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-[#111836] border border-purple-500/20 rounded-2xl space-y-4">
                <div className="text-xs font-semibold text-purple-400 uppercase tracking-widest">SaaS Girişimi</div>
                <h3 className="text-lg font-bold text-white">ChatGPT Önerilerinde %320 Artış</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  İçerikleri semantik şema ve NLP formatına göre optimize ettiğimiz B2B yazılım markası, yapay zeka ürün karşılaştırma sorgularında en çok önerilen ilk 3 markadan biri haline geldi.
                </p>
              </div>
              <div className="p-6 bg-[#111836] border border-purple-500/20 rounded-2xl space-y-4">
                <div className="text-xs font-semibold text-purple-400 uppercase tracking-widest">E-Ticaret Sitesi</div>
                <h3 className="text-lg font-bold text-white">AI Overviews Görünürlüğünde %180 Büyüme</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Ürün detay sayfalarını Google AI Overview'ın bilgi çıkarma algoritmalarına uyumlu hale getirdik. Organik trafik ve yapay zekadan gelen nitelikli satış oranları katlandı.
                </p>
              </div>
              <div className="p-6 bg-[#111836] border border-purple-500/20 rounded-2xl space-y-4">
                <div className="text-xs font-semibold text-purple-400 uppercase tracking-widest">Sağlık Portalı</div>
                <h3 className="text-lg font-bold text-white">Perplexity Referanslarında Tam Hakimiyet</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Sağlık alanındaki bilgi aramalarında sitenin tıbbi verilerini 'Source Citation' stratejisiyle optimize ederek Perplexity aramalarında referans link gösterimini zirveye taşıdık.
                </p>
              </div>
            </div>
          </section>

          {/* Section 9: SSS (Sıkça Sorulan Sorular) */}
          <section className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center">
              Sıkça Sorulan Sorular
            </h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              {faqItems.map((faq, index) => (
                <div key={index} className="p-6 bg-[#111836]/40 border border-white/5 rounded-2xl space-y-2">
                  <h3 className="text-lg font-bold text-white flex items-start gap-2">
                    <span className="text-emerald-400 font-extrabold">Q.</span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-400 text-sm pl-6 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </ServicePageLayout>
    </>
  );
}
