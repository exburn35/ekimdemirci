import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ServicePageLayout from "@/components/ServicePageLayout";
import ProductSchema from "@/components/schemas/ProductSchema";
import GEOPricingSection from "@/components/GEOPricingSection";
import GEOAIToolsSection from "@/components/GEOAIToolsSection";
import AiAnswerDemo from "@/components/geo/AiAnswerDemo";
import GeoGuide, { type GeoFaq } from "@/components/geo/GeoGuide";
import { GeoAudience, GeoPlatformStrategies, GeoProcess, GeoProof, GeoScope } from "@/components/geo/GeoSections";

export const metadata: Metadata = {
  title: "GEO (Generative Engine Optimization) Danışmanlığı",
  description: "ChatGPT ve Google AI Overview başta olmak üzere yapay zeka cevaplarında markanızın önerilmesi için GEO danışmanlığı. Ücretsiz yapay zeka görünürlük testi isteyin.",
  alternates: {
    canonical: "/geo-danismanligi",
  },
  openGraph: {
    title: "GEO (Generative Engine Optimization) Danışmanlığı | Ekim Demirci",
    description: "ChatGPT ve Google AI Overview cevaplarında markanızın önerilen isim olması için bağımsız GEO danışmanlığı.",
  },
  twitter: {
    title: "GEO (Generative Engine Optimization) Danışmanlığı | Ekim Demirci",
    description: "ChatGPT ve Google AI Overview cevaplarında markanızın önerilen isim olması için bağımsız GEO danışmanlığı.",
  },
};

const faqItems: GeoFaq[] = [
  {
    question: "GEO ne demek?",
    answer: "GEO, Generative Engine Optimization ifadesinin kısaltması. Türkçesiyle üretken motor optimizasyonu. Markanızın ChatGPT, Gemini, Perplexity ve Google AI Overview gibi yapay zeka araçlarının cevaplarında doğru bilgilerle anılması ve önerilmesi için yapılan çalışmaların tamamına verilen isim.",
  },
  {
    question: "GEO ile SEO aynı şey mi?",
    answer: "Hayır ama birbirine çok yakınlar. SEO, Google'ın sonuç listesinde üst sıralarda yer almanızı hedefler. GEO ise yapay zekanın verdiği cevabın içinde yer almanızı. Yapay zeka araçları büyük ölçüde iyi taranan ve güvenilen sayfalardan beslendiği için sağlam bir SEO temeli, GEO'nun da ön koşulu.",
  },
  {
    question: "ChatGPT'de markamın önerilmesi için neler yapıyorsunuz?",
    answer: "Önce sektörünüzde müşterilerinizin ChatGPT'ye sorduğu soruları belirleyip markanızın bugün bu cevaplarda geçip geçmediğini ölçüyorum. Ardından sitenizin ChatGPT'nin yararlandığı web aramalarında (Bing dahil) doğru yer almasını, markanızın her platformda tutarlı tanıtılmasını, sektör yayınlarında ve karşılaştırma içeriklerinde anılmanızı ve ChatGPT tarayıcılarının sitenize erişebilmesini sağlıyorum.",
  },
  {
    question: "Google AI Overview'da kaynak olarak gösterilmek mümkün mü?",
    answer: "Garanti edilemez ama ihtimal ciddi ölçüde artırılabilir. AI Overview kaynakları çoğunlukla o aramada üst sıralarda yer alan ve soruya net cevap veren sayfalar arasından seçiliyor. Bu yüzden sayfalarınızı ilk paragrafta doğrudan cevap veren, güncel ve uzmanlığınızı gösteren bir yapıya kavuşturuyor, etkisini düzenli testlerle takip ediyorum.",
  },
  {
    question: "ChatGPT'de görünmek garanti edilebilir mi?",
    answer: "Hayır. Yapay zeka araçlarının nasıl cevap üreteceğini kimse dışarıdan kontrol edemez. Size garanti veren birine temkinli yaklaşmanızı öneririm. Benim garanti edebileceğim şey; doğru yöntemle, şeffaf biçimde çalışmak ve her ay neyin değiştiğini verilerle göstermek.",
  },
  {
    question: "GEO sonuçları ne kadar sürede görülür?",
    answer: "Teknik düzenlemelerin etkisi birkaç hafta içinde görülmeye başlayabiliyor. Düzenli ve kalıcı bir görünürlük artışı ise çoğu projede 2 ila 4 ay içinde belirginleşiyor. Süre; sektördeki rekabete, sitenizin başlangıç durumuna ve markanızın bilinirliğine göre değişiyor.",
  },
  {
    question: "Küçük bir işletme için GEO gerekli mi?",
    answer: "Müşterileriniz karar vermeden önce yapay zekaya soru soruyorsa evet. Özellikle yerel hizmet veren işletmeler (klinikler, avukatlar, güzellik merkezleri gibi) için \"bana yakın, güvenilir bir ... önerir misin?\" türü sorular hızla artıyor. Küçük işletmeler doğru bir başlangıç paketiyle bu sorularda büyük markalardan önce yer alabiliyor.",
  },
  {
    question: "GEO için sitemi baştan yapmam gerekiyor mu?",
    answer: "Çoğu zaman hayır. Genellikle mevcut sitenizde teknik düzenlemeler yapmak, önemli sayfaları yeniden yazmak ve eksik içerikleri tamamlamak yeterli oluyor. Sitenin altyapısı yapay zeka araçlarının içeriği okumasına ciddi şekilde engel oluyorsa, bunu analiz aşamasında açıkça belirtiyorum.",
  },
  {
    question: "Yapay zeka botlarını sitemden engellemeli miyim?",
    answer: "Yapay zeka cevaplarında görünmek istiyorsanız genellikle hayır. Bazı siteler robots.txt dosyasında bu botları farkında olmadan engelliyor ve bu yüzden hiç kaynak gösterilmiyor. Hangi botlara izin verip hangilerini kısıtlayacağınız, iş modelinize göre verilmesi gereken bir karar; bunu birlikte değerlendiriyoruz.",
  },
  {
    question: "GEO danışmanlığının maliyeti nedir?",
    answer: "Aylık GEO danışmanlık paketlerim 25.000 TL'den başlıyor. Sitenizin büyüklüğüne, sektörünüzdeki rekabete ve hedeflediğiniz platform sayısına göre paket değişiyor. Backlink ve dijital PR çalışmaları, yayın maliyetleri değişken olduğu için ayrıca bütçelendiriliyor.",
  },
];

export default function GEODanismanligi() {
  return (
    <>
      <Breadcrumb items={[{ name: "GEO Danışmanlığı", href: "/geo-danismanligi" }]} />
      <ProductSchema
        name="GEO (Generative Engine Optimization) Danışmanlığı"
        description="Google'ın güncel arama mimarisi ve RAG altyapısına dayalı teknik GEO danışmanlık hizmet paketi. ChatGPT Search, Google AI Overviews ve Perplexity'de birincil kaynak olun."
        url="https://ekimdemirci.com/geo-danismanligi"
        image="https://ekimdemirci.com/uploads/geo-visual-semantic-patent-diagram.png"
        lowPrice={25000}
        highPrice={75000}
      />

      <ServicePageLayout
        title="GEO Danışmanlığı"
        subtitle="ChatGPT ve Google AI Overview görünürlüğü"
        description="ChatGPT'ye bir öneri sorduğunuzda size birkaç isim sayar; o listede olmayan marka, müşterinin aklına hiç gelmez. Ben de sizin o listeye girmeniz için çalışıyorum: sitenizi yapay zekanın kolayca okuyup güvenebileceği hale getiriyor, markanızın internette doğru ve sık anılmasını sağlıyorum."
        afterHeroNode={<AiAnswerDemo />}
        icon="Brain"
        gradient="from-emerald-500 via-teal-500 to-cyan-500"
        blogCategory="yapay-zeka-seo"
      >
        <GeoScope />
        <GeoProcess />
        <GeoAudience />
        <GeoProof />
        <GeoPlatformStrategies />
        <GEOPricingSection showGeoInfoBox={false} />
        <GEOAIToolsSection />
        <GeoGuide faqItems={faqItems} />
      </ServicePageLayout>
    </>
  );
}
