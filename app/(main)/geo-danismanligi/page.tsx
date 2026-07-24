import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import FAQSchema from "@/components/schemas/FAQSchema";
import { Sparkles, Brain, Cpu, ArrowRight, Zap, Target, Search, BarChart3 } from "lucide-react";
import Link from "next/link";
import GEOHero from "@/components/GEOHero";
import ServiceLeadForm from "@/components/ServiceLeadForm";
import GEOConsultancyContent from "@/components/GEOConsultancyContent";
import GEODetailedContent from "@/components/GEODetailedContent";
import GEOPricingSection from "@/components/GEOPricingSection";

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
      
      <GEOHero />

      <ServicePageLayout
        hideHero={true}
        hideFeatures={true}
        afterHeroNode={<GEOConsultancyContent />}
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
            title: "Detaylı Yapay Zeka Görünürlük Analizi (Durum Analizi)",
            description: "Sitenizin ve markanızın yapay zeka modelleri (ChatGPT, Claude, Gemini, Perplexity) üzerindeki mevcut durumunu kapsamlı bir şekilde denetliyorum. Hangi sorgularda kaynak gösterildiğinizi, rakiplerinizin alıntı paylarını ve hangi bilgi boşluklarından ötürü elendiğinizi tespit ederek ilk durum raporunu çıkarıyorum.",
          },
          {
            step: "2",
            title: "Entity (Varlık) ve Knowledge Graph Bağlantısı",
            description: "Markanızın yapay zeka motorları tarafından tekil ve güvenilir bir 'Entity' (dijital varlık) olarak algılanması için Wikipedia, Wikidata ve sektörel dizinlerdeki yerini yapılandırıyorum. LLM'lerin (Büyük Dil Modelleri) markanızı birbirine bağlı bir bilgi düğümü olarak okumasını sağlıyorum.",
          },
          {
            step: "3",
            title: "Semantik ve NLP Odaklı İçerik Mimarisi",
            description: "Sitenizdeki tüm içerikleri Doğal Dil İşleme (NLP) algoritmalarının en rahat okuyacağı, anlamlandıracağı ve alıntılayacağı semantik formatına dönüştürüyorum. Yapay zekanın en sevdiği soru-cevap, doğrudan bilgi ve tablo gibi yapılandırılmış veri düzenlerini kuruyorum.",
          },
          {
            step: "4",
            title: "Gelişmiş Schema & Yapılandırılmış Veri Kodlaması",
            description: "Arama motorlarının ve AI botlarının içeriğin bağlamını hatasız çözebilmesi için sayfa düzeyinde hiyerarşik schema.org entegrasyonu gerçekleştiriyorum. JSON-LD kodlamasıyla arama botlarına sayfanın yazarını, yayıncısını, konusunu ve referanslarını makineler arası dilde aktarıyorum.",
          },
          {
            step: "5",
            title: "Dijital PR ve Marka Birlikteliği (Co-citation) Yönetimi",
            description: "Yapay zekanın markanıza duyduğu güveni artırmak için web dışı dış kaynaklarda, sektörel referans sitelerinde, basın bültenlerinde ve platformlarda markanızın adının doğru anahtar kelimeler ve rakiplerle birlikte geçmesini (co-citation & brand mention) sağlıyorum.",
          },
          {
            step: "6",
            title: "LLM Görünürlük Takibi ve Sürekli Optimizasyon",
            description: "Çalışmaların sonuçlarını, yapay zeka motorlarında görünürlük payınızın gelişimini ve AI yanıtlarından gelen yüksek kaliteli organik trafiği özel araçlarla takip ediyorum. Değişen yapay zeka algoritmaları ve güncellenen model eğitim verilerine göre stratejiyi sürekli olarak optimize ediyorum.",
          },
        ]}
      >
        {/* GEO Pricing Section */}
        <GEOPricingSection showGeoInfoBox={false} />

        {/* Relocated Form Section */}
        <section id="analiz" className="py-20 bg-[#0a0f25] border-t border-white/5 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.02)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-xl mx-auto px-4 relative z-10">
            <ServiceLeadForm />
          </div>
        </section>

        {/* Redesigned Two-Column Sticky TOC Content Section */}
        <GEODetailedContent faqItems={faqItems} />
      </ServicePageLayout>
    </>
  );
}
