import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ServicePageLayout from "@/components/ServicePageLayout";
import TechAuditDemo from "@/components/teknik-seo/TechAuditDemo";
import TeknikSeoGuide, { type TeknikFaq } from "@/components/teknik-seo/TeknikSeoGuide";
import { TeknikProcess, TeknikProof, TeknikRelated, TeknikScope, TeknikSymptoms } from "@/components/teknik-seo/TeknikSeoSections";

export const metadata: Metadata = {
  title: "Teknik SEO Danışmanlığı",
  description: "Google'ın sitenizi sorunsuz taraması, sayfalarınızı dizine eklemesi ve hızlı bir deneyim sunmanız için teknik SEO danışmanlığı. Tarama, hız, mobil uyum ve site taşıma. Ücretsiz teknik kontrol isteyin.",
  alternates: {
    canonical: "/seo-hizmetleri/teknik-seo",
  },
  openGraph: {
    title: "Teknik SEO Danışmanlığı | Ekim Demirci",
    description: "Sitenizin görünmeyen teknik sorunlarını bulup düzelten, Google'ın sitenizi sorunsuz taramasını sağlayan teknik SEO danışmanlığı.",
  },
  twitter: {
    title: "Teknik SEO Danışmanlığı | Ekim Demirci",
    description: "Sitenizin görünmeyen teknik sorunlarını bulup düzelten, Google'ın sitenizi sorunsuz taramasını sağlayan teknik SEO danışmanlığı.",
  },
};

const faqItems: TeknikFaq[] = [
  {
    question: "Teknik SEO nedir?",
    answer: "Teknik SEO, bir web sitesinin Google gibi arama motorları tarafından sorunsuz taranması, anlaşılması ve dizine eklenmesi için sitenin altyapısında, kodunda ve sunucu ayarlarında yapılan iyileştirmelerin bütünü. Sayfa hızı ve mobil deneyim de bu kapsamda yer alıyor.",
  },
  {
    question: "Teknik SEO denetimi ne kadar sürer?",
    answer: "Çoğu site için kapsamlı bir teknik denetim bir hafta içinde tamamlanıyor. Binlerce sayfası olan büyük e-ticaret siteleri ve portallarda bu süre biraz uzayabiliyor. Denetimin ardından öncelik sırasına göre düzenlenmiş bir yol haritası teslim ediyorum.",
  },
  {
    question: "Teknik düzeltmelerin etkisi ne zaman görülür?",
    answer: "Düzeltmeler canlıya alındıktan sonra Google'ın ilgili sayfaları yeniden taramasıyla birlikte etkiler genellikle birkaç hafta içinde Search Console verilerine yansımaya başlıyor. Büyük sitelerde tüm sayfaların yeniden taranması daha uzun sürebiliyor.",
  },
  {
    question: "Core Web Vitals sıralamayı etkiler mi?",
    answer: "Evet, Core Web Vitals Google'ın sayfa deneyimini değerlendirirken kullandığı sinyallerden biri. Tek başına sıralamayı belirlemiyor; içerik kalitesi hâlâ en önemli etken. Ancak benzer kalitedeki sayfalar arasında daha iyi deneyim sunan sayfa avantaj sağlayabiliyor ve hızlı bir site ziyaretçiyi de daha az kaçırıyor.",
  },
  {
    question: "Düzeltmeleri kim yapıyor?",
    answer: "İkisi de mümkün. Düzeltmeleri doğrudan kendim yapabiliyorum ya da yazılım ekibinize uygulanabilir talimatlar ve gerektiğinde kod örnekleri hazırlıyorum. Hangisinin daha verimli olacağına sitenizin altyapısına göre birlikte karar veriyoruz.",
  },
  {
    question: "Site taşıma sırasında trafik kaybı yaşamamak mümkün mü?",
    answer: "Doğru planlandığında kayıp büyük ölçüde önlenebiliyor. Taşıma öncesinde tüm eski adreslerin listesini çıkarıp her biri için kalıcı (301) yönlendirme planlıyorum. Taşımadan sonra da Search Console'u düzenli izleyerek olası sorunlara hızla müdahale ediyorum. Kısa süreli dalgalanmalar normal ancak kalıcı kayıplar doğru yönetimle önlenebilir.",
  },
  {
    question: "Teknik SEO bir kez yapılınca biter mi?",
    answer: "Hayır. Siteye eklenen her yeni sayfa, eklenti ya da tasarım değişikliği yeni teknik sorunlara yol açabiliyor. Bu yüzden ilk kapsamlı düzeltmenin ardından siteyi düzenli olarak taramayı ve yeni sorunları büyümeden çözmeyi öneriyorum.",
  },
  {
    question: "Teknik SEO yapay zeka görünürlüğünü de etkiler mi?",
    answer: "Evet. ChatGPT gibi yapay zeka araçlarının tarayıcıları da sitenize erişebilmeli ve içeriği okuyabilmeli. Teknik açıdan sağlıklı bir site, hem Google'da hem de yapay zeka cevaplarında görünür olmanın ön koşulu.",
  },
];

export default function TechnicalSEO() {
  return (
    <>
      <Breadcrumb items={[
        { name: "SEO Danışmanlığı", href: "/seo-danismanligi" },
        { name: "Teknik SEO", href: "/seo-hizmetleri/teknik-seo" }
      ]} />
      <ServicePageLayout
        title="Teknik SEO Danışmanlığı"
        subtitle="Sitenizin görünmeyen altyapısı"
        description="İçerikleriniz iyi ama Google'da beklediğiniz yerde değilseniz, sorun çoğu zaman görünmeyen tarafta: taranamayan sayfalar, yavaş açılan ekranlar, kırık bağlantılar. Ben sitenizi Google'ın gözüyle tarayıp bu sorunları tek tek buluyor ve önem sırasına göre düzeltiyorum."
        canonicalUrl="https://ekimdemirci.com/seo-hizmetleri/teknik-seo"
        afterHeroNode={<TechAuditDemo />}
        icon="Settings"
        gradient="from-purple-600 via-pink-600 to-rose-600"
        blogCategory="teknik-seo"
      >
        <TeknikScope />
        <TeknikProcess />
        <TeknikSymptoms />
        <TeknikProof />
        <TeknikRelated />
        <TeknikSeoGuide faqItems={faqItems} />
      </ServicePageLayout>
    </>
  );
}
