import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ServicePageLayout from "@/components/ServicePageLayout";
import SerpClimbDemo from "@/components/seo/SerpClimbDemo";
import SeoGuide, { type SeoFaq } from "@/components/seo/SeoGuide";
import { SeoAudience, SeoProcess, SeoProof, SeoScope, SeoServicesAndPricing } from "@/components/seo/SeoSections";

export const metadata: Metadata = {
  title: "SEO Danışmanlığı",
  description: "Bağımsız SEO danışmanı Ekim Demirci ile sitenizi Google'da müşterilerinizin aradığı kelimelerde üst sıralara taşıyın. Teknik SEO, içerik ve otorite tek elden. Ücretsiz ön analiz isteyin.",
  alternates: {
    canonical: "/seo-danismanligi",
  },
  openGraph: {
    title: "SEO Danışmanlığı | Ekim Demirci",
    description: "Sitenizi Google'da müşterilerinizin aradığı kelimelerde üst sıralara taşıyan bağımsız SEO danışmanlığı.",
    url: "https://ekimdemirci.com/seo-danismanligi",
  },
  twitter: {
    title: "SEO Danışmanlığı | Ekim Demirci",
    description: "Sitenizi Google'da müşterilerinizin aradığı kelimelerde üst sıralara taşıyan bağımsız SEO danışmanlığı.",
  },
};

const faqItems: SeoFaq[] = [
  {
    question: "SEO danışmanlığı ne kadar sürede sonuç verir?",
    answer: "Teknik düzeltmelerin etkisi genellikle ilk birkaç hafta içinde görülmeye başlıyor. Rekabetçi kelimelerde kalıcı sıralama artışı ise çoğu projede üç ila altı ay sürüyor. Süre; sektördeki rekabete, sitenin başlangıç durumuna ve önerilerin ne kadar hızlı uygulandığına bağlı.",
  },
  {
    question: "Google'da birinci sıra garantisi veriyor musunuz?",
    answer: "Vermiyorum. Google'ın kendisi de hiçbir danışmanın birinci sıra garantisi veremeyeceğini açıkça belirtiyor. Benim garanti edebileceğim şey; doğru yöntemle, şeffaf biçimde çalışmak ve her ay neyin değiştiğini verilerle göstermek.",
  },
  {
    question: "SEO danışmanlığı fiyatları ne kadar?",
    answer: "Aylık SEO danışmanlık paketlerim 20.000 TL'den başlıyor. Paket; sitenizin büyüklüğüne, sektörünüzdeki rekabete ve çalışmanın kapsamına göre değişiyor. Backlink ve dijital PR çalışmaları ayrıca bütçelendiriliyor.",
  },
  {
    question: "SEO çalışması Google Ads maliyetlerimi etkiler mi?",
    answer: "Dolaylı olarak evet. Organik aramalardan gelen ziyaretçi arttıkça reklama olan bağımlılığınız azalıyor. Ayrıca SEO kapsamında iyileştirilen açılış sayfaları, reklam kampanyalarınızın kalite puanını da olumlu etkileyebiliyor.",
  },
  {
    question: "Sitemdeki değişiklikleri kim yapıyor?",
    answer: "İkisi de mümkün. Teknik ve içerik düzenlemelerini doğrudan kendim yapabiliyorum ya da yazılım ekibinize uygulanabilir, net talimatlar halinde iletiyorum. Hangisinin daha verimli olacağına sitenizin altyapısına göre birlikte karar veriyoruz.",
  },
  {
    question: "Küçük bir işletme için SEO danışmanlığı gerekli mi?",
    answer: "Müşterileriniz sizi Google'da arıyorsa evet. Özellikle yerel hizmet veren işletmeler için şehir ve \"yakınımdaki\" aramalarında görünür olmak, en uygun maliyetli müşteri kazanma yollarından biri. Küçük işletmelere uygun başlangıç paketim de bu ihtiyaç için var.",
  },
  {
    question: "Sözleşme süresi ne kadar?",
    answer: "SEO birikimli sonuç veren bir iş olduğu için iş birliklerimi genellikle en az üç aylık dönemler halinde planlıyorum. Uzun ve bağlayıcı sözleşmeler yerine aylık raporlama ve net hedeflerle ilerleyen bir model kullanıyorum.",
  },
  {
    question: "SEO ile GEO arasındaki fark nedir?",
    answer: "SEO, sitenizin Google'ın sonuç listesinde üst sıralarda yer almasını hedefler. GEO ise markanızın ChatGPT ve Google AI Overview gibi yapay zeka araçlarının verdiği cevaplarda önerilmesini. İkisi birbirini tamamlar; yapay zeka araçları büyük ölçüde iyi SEO'ya sahip sitelerden beslenir.",
  },
];

export default function SeoDanismanligiPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "SEO Danışmanlığı", href: "/seo-danismanligi" }]} />
      <ServicePageLayout
        title="SEO Danışmanlığı"
        subtitle="Google'da üst sıralara çıkmak için"
        description="Siteniz var ama Google'dan yeterince müşteri gelmiyorsa, bunun mutlaka bir nedeni var. Ben o nedeni bulup düzeltiyorum: sitenizin teknik altyapısını, içeriklerini ve internetteki otoritesini birlikte ele alarak müşterinizin aradığı kelimelerde sizi adım adım yukarı taşıyorum."
        canonicalUrl="https://ekimdemirci.com/seo-danismanligi"
        afterHeroNode={<SerpClimbDemo />}
        icon="Settings"
        gradient="from-blue-600 via-indigo-600 to-purple-600"
        blogCategory="SEO Hizmetleri"
        showBackLink={false}
      >
        <SeoScope />
        <SeoProcess />
        <SeoAudience />
        <SeoProof />
        <SeoServicesAndPricing />
        <SeoGuide faqItems={faqItems} />
      </ServicePageLayout>
    </>
  );
}
