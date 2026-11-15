import { Metadata } from "next";
import {
  Target,
  Layers,
  FileCheck,
  Inbox,
  Languages,
  Braces,
  EyeOff,
  Users,
  TrendingDown,
  FileSearch,
  Bot,
  Clock,
  Wrench,
  PenLine,
  Network,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ServicePageLayout from "@/components/ServicePageLayout";
import SerpDemo from "@/components/service/SerpDemo";
import {
  DemoSection,
  DemoSide,
  DemoWindow,
  ExampleGrid,
  GuideDefinition,
  GuideH2,
  GuideLink,
  GuideShell,
  ProcessTimeline,
  ProofBand,
  RelatedBand,
  ScopeGrid,
  type Faq,
} from "@/components/service/ServiceBlocks";

export const metadata: Metadata = {
  title: "Kurumsal ve B2B SEO Danışmanlığı",
  description: "Üreticiler, tedarikçiler ve kurumsal yazılım firmaları için B2B SEO danışmanlığı. Satın alma ekiplerinin yaptığı aramalarda görünür olmanızı ve bu aramalardan teklif talebi almanızı hedefliyorum.",
  alternates: {
    canonical: "/sektorel-seo-hizmetleri/kurumsal-b2b-seo",
  },
  openGraph: {
    title: "Kurumsal ve B2B SEO Danışmanlığı | Ekim Demirci",
    description: "Uzun satış süreçleri ve birden fazla karar vericisi olan şirketler için çözüm sayfaları, karar destek içerikleri ve teklif talebi odaklı SEO danışmanlığı.",
  },
  twitter: {
    title: "Kurumsal ve B2B SEO Danışmanlığı | Ekim Demirci",
    description: "Uzun satış süreçleri ve birden fazla karar vericisi olan şirketler için çözüm sayfaları, karar destek içerikleri ve teklif talebi odaklı SEO danışmanlığı.",
  },
};

const faqItems: Faq[] = [
  {
    question: "B2B SEO ile normal SEO arasındaki fark ne?",
    answer: "Temel kurallar aynı, ama hedef farklı. B2B'de az sayıda kişi arama yapıyor; buna karşılık her biri büyük ve uzun soluklu bir iş anlamına gelebiliyor. Satın alma kararını da genellikle tek kişi değil, teknik ekip, satın alma ve yönetim birlikte veriyor. Bu yüzden B2B SEO'da trafik hacminden çok, doğru kişinin doğru sayfayı bulması ve teklif istemesi önemli.",
  },
  {
    question: "Arama hacmi çok düşük kelimeler için uğraşmaya değer mi?",
    answer: "Çoğu B2B firması için değer. Ayda birkaç düzine kez aranan teknik bir ürün adı, bir tüketici ürününün binlerce aramasından daha fazla ciro getirebilir. Anahtar kelime araçları bu aramaların bir kısmını hiç göstermiyor bile; bu yüzden araştırmayı satış ekibinizin müşterilerden duyduğu ifadelerle ve Search Console verisiyle birlikte yapıyorum.",
  },
  {
    question: "B2B SEO ne kadar sürede sonuç verir?",
    answer: "Teknik düzeltmelerin ve çözüm sayfalarının etkisi genellikle ilk birkaç ayda görülmeye başlıyor. Ancak B2B'de satış süreci zaten uzun olduğu için organik kanaldan gelen taleplerin satışa dönmesi de zaman alıyor. Bu yüzden sonuçları en az altı ay ile bir yıllık bir pencerede değerlendirmenizi öneriyorum.",
  },
  {
    question: "Başarıyı nasıl ölçüyorsunuz?",
    answer: "Sıralama ve trafik takip ettiğim ama tek başına yeterli görmediğim metrikler. Asıl baktığım şey teklif formları, katalog ve doküman indirmeleri, demo talepleri ve organik kanaldan gelen taleplerin satış ekibinizce ne kadarının gerçek fırsat olarak görüldüğü. Bunun için ölçüm altyapısını işin başında birlikte kuruyoruz.",
  },
  {
    question: "Yurt dışındaki alıcılara ulaşmak için ne yapıyorsunuz?",
    answer: "Hedef ülkelerdeki alıcıların ürününüzü hangi terimlerle aradığını ayrı ayrı araştırıyorum; çünkü bir ülkede yaygın olan teknik terim başka bir ülkede hiç kullanılmayabiliyor. Ardından dil sürümlerini doğru kuruyor, hreflang etiketlerini düzenliyor ve her dil için birebir çeviri yerine o pazara uygun içerik hazırlanmasını sağlıyorum.",
  },
  {
    question: "Google Ads yerine SEO mu yapmalıyız?",
    answer: "Birini diğerinin yerine koymak zorunda değilsiniz. Reklam kısa vadede talep getirir ama bütçe durduğunda talep de durur. SEO daha yavaş başlar, ancak bir kez kurulduğunda karar vericilerin araştırma sürecinin her aşamasında sizi görmesini sağlar. Reklam verilerinden hangi kelimelerin teklif getirdiğini görmek, SEO önceliklerini belirlerken de işe yarıyor.",
  },
  {
    question: "Ticari bilgilerimizin gizliliği nasıl korunuyor?",
    answer: "Kurumsal firmalarla çalışırken fiyat listeleri, müşteri bilgileri ve ürün yol haritaları gibi verilere erişmem gerekebiliyor. Bu bilgileri yalnızca çalışma kapsamında kullanıyorum; talep ederseniz çalışmaya başlamadan önce gizlilik sözleşmesi imzalıyoruz.",
  },
];

export default function CorporateB2BSEOPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Sektörel SEO Hizmetleri", href: "/sektorel-seo-hizmetleri" },
        { name: "Kurumsal B2B SEO", href: "/sektorel-seo-hizmetleri/kurumsal-b2b-seo" }
      ]} />
      <ServicePageLayout
        title="Kurumsal ve B2B SEO Danışmanlığı"
        subtitle="Satın alma ekibi araştırırken karşısına çıkan firma"
        description="Bir firma tedarikçi ararken satın alma uzmanı, mühendis ve yönetici aylarca araştırma yapıyor; teknik özellikleri karşılaştırıyor, referanslara bakıyor, kısa bir liste hazırlıyor. Ben bu araştırmanın her adımında sizin sitenizin karşılarına çıkması ve sonunda teklif istemeleri için çözüm sayfalarınızı, teknik içeriklerinizi ve sitenizin altyapısını birlikte ele alıyorum."
        canonicalUrl="https://ekimdemirci.com/sektorel-seo-hizmetleri/kurumsal-b2b-seo"
        afterHeroNode={
          <DemoSection
            id="b2b-arama-sonuclari"
            eyebrow="Google sonuçları"
            title="Tedarikçi listesi Google'da başlıyor. O listede siz de olun."
            intro="B2B alıcıların çoğu satış temsilcisiyle konuşmadan önce kendi araştırmasını yapıyor. Arama sonuçlarının ilk sayfasında görünmeyen bir firma, çoğu zaman teklif istenecekler listesine hiç girmiyor."
            window={
              <DemoWindow label="google.com">
                <SerpDemo
                  query="endüstriyel soğutma sistemleri üreticisi"
                  results={[
                    { domain: "sanayirehberi.com", title: "Endüstriyel Soğutma Firmaları Listesi", snippet: "Bölgenizdeki soğutma sistemi üreticileri ve iletişim bilgileri." },
                    { domain: "sogutmateknik.com.tr", title: "Endüstriyel Soğutma Sistemleri | Proje ve Montaj", snippet: "Gıda, kimya ve ilaç sektörleri için soğutma çözümleri." },
                    { domain: "b2bpazaryeri.com", title: "Soğutma Sistemi Tedarikçileri ve Teklifleri", snippet: "Yüzlerce tedarikçiden hızlıca teklif alın." },
                    { domain: "kuzeyiklimlendirme.com", title: "Chiller ve Soğuk Oda Sistemleri", snippet: "Kurulum, bakım ve yedek parça hizmetleri." },
                    { domain: "firmaniz.com", title: "Endüstriyel Soğutma Sistemleri Üreticisi | Firmanız", snippet: "Kapasite seçimi, teknik dokümanlar ve referans projelerle teklif isteyin.", brand: true },
                  ]}
                />
              </DemoWindow>
            }
            side={
              <DemoSide
                title="Az arama, büyük iş"
                text="B2B'de bir kelimenin ayda kaç kez arandığı çoğu zaman yanıltıcı. Teknik bir ürün adını arayan birkaç kişiden biri, yıllarca sürecek bir tedarik ilişkisinin başlangıcı olabiliyor. Ben de bu yüzden işe hacimden değil, kimin ne aradığından başlıyorum."
                points={[
                  "Satın alma ekiplerinin gerçekten kullandığı terimleri bulmak",
                  "Her ürün ve sektör için ayrı çözüm sayfası kurmak",
                  "Teknik doküman ve karşılaştırma içerikleri hazırlamak",
                  "Ziyaretçiyi teklif talebine taşıyan yolu kısaltmak",
                ]}
                ctaTitle="Firmanız tedarikçi aramalarında görünüyor mu?"
                ctaText="Sitenizin hangi aramalarda göründüğünü, hangilerinde rakiplerin öne geçtiğini inceleyip size kısa bir rapor hazırlayayım."
                ctaLabel="Ücretsiz B2B analizi iste"
              />
            }
          />
        }
        icon="Settings"
        gradient="from-indigo-500 to-purple-600"
        blogCategory="SEO Hizmetleri"
      >
        <ScopeGrid
          title="Kurumsal ve B2B SEO'da neler yapıyorum?"
          intro="B2B sitelerde sorun çoğu zaman içerik eksikliği değil, içeriğin alıcının sorusuna cevap vermemesi. Çalışmayı, satın alma sürecinde kimin neye baktığını anlayarak kuruyorum."
          items={[
            { icon: Target, title: "Karar vericilerin aramalarını çıkarıyorum", text: "Mühendisin teknik özellik aramasıyla satın alma uzmanının tedarikçi aramasını ayırıyorum. Satış ekibinizin müşterilerden duyduğu ifadeleri de araştırmaya katıyorum; araçların göstermediği değerli aramalar çoğu zaman oradan çıkıyor." },
            { icon: Layers, title: "Çözüm ve sektör sayfaları kuruyorum", text: "Her ürün grubu ve hizmet verdiğiniz her sektör için ayrı, net bir sayfa planlıyorum. “Gıda sektörü için soğuk oda” arayan biri, genel bir ürün listesine değil, kendi sorununu anlatan sayfaya ulaşmalı." },
            { icon: FileCheck, title: "Karar destek içerikleri hazırlıyorum", text: "Karşılaştırma yazıları, uygulama örnekleri, teknik dokümanlar ve sık sorulan sorular. Bunlar, alıcının iç toplantıda sizi savunurken elinde olmasını istediği içerikler." },
            { icon: Inbox, title: "Teklif talebi yolunu kısaltıyorum", text: "Teklif formunu, katalog indirmeyi ve iletişim adımlarını sadeleştiriyorum. Ziyaretçinin sitede kaybolmadan, ihtiyaç duyduğu bilgiyi verip teklif isteyebilmesi için sayfaların akışını düzenliyorum." },
            { icon: Languages, title: "Çok dilli ve uluslararası yapı kuruyorum", text: "İhracat yapıyorsanız hedef pazarlar için ayrı anahtar kelime araştırması yapıyor, dil sürümlerini ve hreflang etiketlerini doğru kuruyorum. Birebir çeviri yerine her pazarın kendi terimlerini kullanıyorum." },
            { icon: Braces, title: "Kurumsal kimliği Google'a tanıtıyorum", text: "Şirket bilgilerinizi, ürünlerinizi ve hizmetlerinizi yapılandırılmış veriyle işaretliyorum. Bu, Google'ın ve yapay zeka asistanlarının firmanızı doğru anlamasını ve doğru aramalarla ilişkilendirmesini destekliyor." },
          ]}
        />

        <ProcessTimeline
          title="B2B SEO çalışması adım adım nasıl ilerliyor?"
          intro="Önce sitenizi, rakiplerinizi ve satış sürecinizi anlıyorum. Ardından teknik düzenlemeler ve içerik çalışmaları birbirini bekletmeden ilerliyor."
          ctaLabel="Ücretsiz B2B analiziyle başlayalım"
          steps={[
            {
              tag: "1. ve 2. hafta",
              title: "Analiz ve yol haritası",
              paragraphs: [
                "Sitenizin hangi aramalarda göründüğünü, hangi ürün ve sektörlerde hiç görünmediğini ve rakiplerinizin nerede öne geçtiğini inceliyorum. Bu aşamada satış ekibinizle de kısa bir görüşme yapmak istiyorum; en değerli müşterilerin nasıl geldiğini ve hangi soruları sorduğunu bilmek, araştırmanın yönünü belirliyor.",
                "Analizin sonunda öncelikleri sıralanmış bir yol haritası hazırlıyorum. Hangi sayfayla başlanacağına, hangi pazara önce odaklanılacağına birlikte karar veriyoruz.",
              ],
            },
            {
              tag: "Paralel yürür",
              tone: "accent",
              title: "Teknik düzenlemeler",
              paragraphs: [
                "Kurumsal siteler zamanla büyüyor; eski ürün sayfaları, PDF kataloglar, birden fazla dil sürümü ve kapanmış kampanya sayfaları birikiyor. Tarama ve indeksleme sorunlarını, yönlendirmeleri, dil yapısını ve sayfa hızını düzenliyorum.",
                "Bu işlerin bir kısmı yazılım ekibinizin ya da ajansınızın elinden geçiyor. Onlar için ne yapılması gerektiğini net ve önceliklendirilmiş şekilde yazıyor, uygulamayı birlikte kontrol ediyorum.",
              ],
            },
            {
              tag: "1. aydan itibaren",
              title: "Çözüm sayfaları ve karar destek içerikleri",
              paragraphs: [
                "Yol haritasındaki sırayla çözüm ve sektör sayfalarını yeniden kurguluyor, ardından karşılaştırma, uygulama örneği ve teknik doküman gibi karar destek içeriklerini planlıyorum. Teknik doğruluk için içeriklerin sizin mühendislerinizden ya da ürün sorumlularınızdan geçmesini sağlıyorum.",
                "Her sayfada ziyaretçinin bir sonraki adımı net olsun istiyorum: teklif istemek, doküman indirmek ya da bir uzmanla görüşmek.",
              ],
            },
            {
              tag: "Ayrı bütçelendirilir",
              tone: "amber",
              title: "Backlink ve dijital PR",
              paragraphs: [
                "Sektör yayınlarında, ticaret rehberlerinde ve fuar ya da dernek sitelerinde firmanızın doğru bilgilerle yer alması, otoritenizi güçlendiriyor. Bu yayın çalışmalarının maliyeti siteye ve yayına göre değiştiği için ayrıca bütçelendiriliyor; onayınız olmadan hiçbir harcama yapılmıyor.",
              ],
            },
            {
              tag: "Her ay",
              title: "Teklif odaklı ölçüm",
              paragraphs: [
                "Sıralamaları ve trafiği takip ediyorum, ama raporun merkezinde teklif formları, doküman indirmeleri ve demo talepleri var. Mümkünse organik kanaldan gelen taleplerin satış ekibinizde nasıl sonuçlandığını da öğrenip planı buna göre güncelliyorum.",
              ],
            },
          ]}
        />

        <ExampleGrid
          title="Bu cümleleri şirketinizde duyuyorsanız, B2B SEO zamanı"
          intro="Kurumsal firmalarda organik görünürlük sorunları genellikle şu şekilde dile geliyor:"
          quoteStyle="speech"
          items={[
            { icon: EyeOff, title: "Ürün aramalarında görünmemek", quote: "Ürünümüzün adını aratıyorum, karşıma rakipler ve pazar yerleri çıkıyor", text: "Ürün ve çözüm sayfaları yoksa ya da zayıfsa, Google aramayı başkalarının sayfalarıyla cevaplıyor. Her ürün grubu için güçlü bir sayfa gerekiyor." },
            { icon: Users, title: "Yanlış kitle", quote: "Siteye gelen var ama teklif isteyen yok", text: "Trafiğin büyük kısmı iş arayanlardan, öğrencilerden ya da bilgi amaçlı aramalardan geliyor olabilir. Hedef, satın alma niyetiyle arayanları çekmek." },
            { icon: Clock, title: "Uzun satış süreci", quote: "Müşteri bizi bulana kadar rakiple masaya oturmuş oluyor", text: "Alıcı araştırmanın erken aşamasında sizi görmezse, kısa listeye de giremiyorsunuz. Karar destek içerikleri bu erken aşamada devreye giriyor." },
            { icon: FileSearch, title: "Gömülü teknik bilgi", quote: "Bütün teknik bilgi PDF katalogda duruyor", text: "Kataloglar değerli, ama Google ve alıcılar için sayfa içinde okunabilir bilgi çok daha işe yarıyor. Temel teknik bilgiler sayfalara taşınmalı." },
            { icon: TrendingDown, title: "Yeniden tasarım sonrası kayıp", quote: "Site yenilendikten sonra talepler azaldı", text: "Kurumsal site yenilemelerinde eski adreslerin doğru yönlendirilmemesi, yıllarca biriken görünürlüğün kaybolmasına yol açabiliyor." },
            { icon: Bot, title: "Yapay zekada görünmemek", quote: "ChatGPT'ye tedarikçi sorduğumda bizim adımız geçmiyor", text: "Alıcılar artık yapay zekaya da danışıyor. Net çözüm sayfaları ve sektör kaynaklarında yer almak, bu cevaplarda görünmenizi destekliyor." },
          ]}
        />

        <ProofBand
          title="B2B projelerinden bir sonuç"
          results={[
            { code: "B2B teklif talepleri", metric: "+%78", label: "Teklif talebi (RFQ) artışı", detail: "Karar verici aramalarına odaklanan dokuz aylık bir B2B SEO sürecinde kurumsal teklif taleplerinde elde edilen artış.", source: "GA4 B2B lead takibi, 2025" },
          ]}
        />

        <RelatedBand
          eyebrow="İlgili hizmetler"
          title="B2B SEO'yu tamamlayan çalışmalar"
          text="Kurumsal sitelerde teknik altyapı, içerik ve yapay zeka görünürlüğü birbirine bağlı. İhtiyacınıza göre bu alanlara ayrı ayrı da odaklanabiliyorum."
          links={[
            { icon: Wrench, title: "Teknik SEO", href: "/seo-hizmetleri/teknik-seo", text: "Büyük ve çok dilli sitelerde tarama düzeni" },
            { icon: PenLine, title: "İçerik yazımı", href: "/icerik-yazimi", text: "Çözüm sayfaları ve karar destek içerikleri" },
            { icon: Network, title: "GEO danışmanlığı", href: "/geo-danismanligi", text: "Yapay zeka cevaplarında firmanızın adı" },
          ]}
        />

        <GuideShell
          id="b2b-seo-rehberi"
          eyebrow="B2B SEO rehberi"
          title="Kurumsal ve B2B SEO hakkında bilmeniz gerekenler"
          intro="B2B'de SEO'nun neden farklı işlediğini, hangi sayfaların teklif getirdiğini ve başarıyı nasıl ölçmeniz gerektiğini sade bir dille anlattım."
          toc={[
            { id: "b2b-seo-nedir", label: "B2B SEO nedir?" },
            { id: "dusuk-hacim", label: "Düşük hacimli aramalar" },
            { id: "cozum-sayfalari", label: "Çözüm ve sektör sayfaları" },
            { id: "karar-destek", label: "Karar destek içerikleri" },
            { id: "uluslararasi", label: "Uluslararası B2B SEO" },
            { id: "olcum", label: "Başarı nasıl ölçülür?" },
          ]}
          cta={{ eyebrow: "Ücretsiz B2B analizi", title: "Alıcılar sizi Google'da bulabiliyor mu?", text: "Sitenizin tedarikçi aramalarındaki durumunu inceleyip fırsatları raporlayayım.", label: "Ücretsiz analiz isteyin" }}
          faqTitle="Kurumsal ve B2B SEO hakkında sıkça sorulan sorular"
          faqItems={faqItems}
        >
          <div className="space-y-5">
            <GuideH2 id="b2b-seo-nedir">B2B SEO nedir?</GuideH2>
            <GuideDefinition>
              B2B SEO, başka şirketlere ürün ya da hizmet satan firmaların web sitelerinin, satın alma sürecindeki
              karar vericilerin yaptığı aramalarda görünür olması ve bu aramalardan teklif talebi alması için yapılan
              arama motoru optimizasyonu çalışmalarıdır.
            </GuideDefinition>
            <p>
              Tüketiciye satış yapan bir sitede ziyaretçi çoğu zaman tek başına ve hızlı karar verir. B2B&apos;de ise
              durum farklı: Bir makine ya da yazılım alımında teknik ekip özellikleri, satın alma birimi fiyatı ve
              koşulları, yönetim ise riski ve geri dönüşü değerlendirir. Bu süreç haftalar, bazen aylar sürer ve her
              kişi farklı bir soruyla Google&apos;a gelir.
            </p>
            <p>
              İyi bir B2B SEO çalışması bu kişilerin her birine cevap veren sayfalar kurar. Hedef çok ziyaretçi
              değil; doğru firmadan, doğru kişinin, doğru zamanda sizi bulmasıdır. Genel SEO prensiplerini merak
              ediyorsanız <GuideLink href="/blog/seo-nedir">SEO nedir</GuideLink> yazım iyi bir başlangıç noktası.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="dusuk-hacim">Düşük hacimli aramalar neden bu kadar değerli?</GuideH2>
            <p>
              Anahtar kelime araçlarına bakan pek çok B2B firması hayal kırıklığına uğruyor: Ürünlerinin adı ayda
              birkaç düzine kez aranıyor, bazen araç hiç veri göstermiyor. Ama bu aramaları yapan kişiler genellikle
              tam olarak sizin sattığınız şeyi arıyor ve bütçesi hazır. Bir tüketici ürününün binlerce aramasından
              daha fazla iş getirebiliyorlar.
            </p>
            <p>
              Bu yüzden araştırmayı yalnızca araçlarla yapmıyorum. Satış ekibinizin telefonda duyduğu ifadeler,
              teklif formlarına yazılan talepler ve Search Console&apos;daki gerçek arama verisi, araçların kaçırdığı
              değerli aramaları ortaya çıkarıyor. Konuya genel bir bakış için{" "}
              <GuideLink href="/blog/anahtar-kelime-nedir">anahtar kelime nedir</GuideLink> ve her aramanın ayrı
              sayfa gerektirip gerektirmediğini anlattığım{" "}
              <GuideLink href="/blog/bir-sorgu-her-zaman-ayri-bir-sayfayi-hak-eder-mi">bir sorgu her zaman ayrı bir sayfayı hak eder mi</GuideLink>{" "}
              yazılarıma göz atabilirsiniz.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="cozum-sayfalari">Çözüm ve sektör sayfaları nasıl kurulmalı?</GuideH2>
            <p>
              Kurumsal sitelerin en sık yaptığı hata, bütün ürünleri tek bir &ldquo;Ürünlerimiz&rdquo; sayfasında
              listelemek ya da hizmetleri birkaç cümleyle geçmek. Google&apos;ın ve alıcının bir sayfayı belirli bir
              aramayla eşleştirebilmesi için o sayfanın tek bir konuya odaklanması gerekiyor.
            </p>
            <p>
              Ben genellikle iki katmanlı bir yapı öneriyorum: Her ürün grubu ya da hizmet için bir çözüm sayfası,
              hizmet verdiğiniz her sektör için de o sektörün sorunlarını anlatan bir sektör sayfası. İyi bir çözüm
              sayfasında şunlar bulunur:
            </p>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                ["Çözdüğü sorun", "Ürünün ya da hizmetin hangi ihtiyaca cevap verdiği, alıcının diliyle."],
                ["Teknik özellikler", "Kapasite, ölçüler, standartlar ve sertifikalar; PDF'e gömülmeden, sayfada."],
                ["Uygulama örnekleri", "Hangi sektörde, hangi koşullarda kullanıldığına dair somut örnekler."],
                ["Net bir sonraki adım", "Teklif formu, doküman indirme ya da uzmanla görüşme seçeneği."],
              ].map(([t, x]) => (
                <li key={t} className="rounded-2xl border border-line bg-canvas p-4">
                  <p className="font-semibold text-ink">{t}</p>
                  <p className="mt-1 text-[15px] leading-relaxed">{x}</p>
                </li>
              ))}
            </ul>
            <p>
              Şirket, ürün ve hizmet bilgilerinin <GuideLink href="/blog/yapilandirilmis-veri-nedir">yapılandırılmış veri</GuideLink>{" "}
              ile işaretlenmesi de Google&apos;ın firmanızı bir bütün olarak anlamasına yardımcı oluyor.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="karar-destek">Karar destek içerikleri neden teklif getirir?</GuideH2>
            <p>
              Alıcı sizi bulduktan sonra da işi bitmiyor; çoğu zaman bulduğu bilgiyi şirket içinde başkalarına
              anlatması, seçeneği savunması gerekiyor. Karşılaştırma yazıları (hangi sistem hangi durumda daha
              uygun), uygulama örnekleri, teknik dokümanlar ve maliyet kalemlerini açıklayan rehberler tam bu noktada
              işe yarıyor.
            </p>
            <p>
              Bu içerikler hem araştırma aşamasındaki aramalardan trafik getiriyor hem de güven oluşturuyor. Başka
              sitelerde bulunmayan, sizin deneyiminizden gelen bilgi ise Google&apos;ın da önem verdiği bir fark
              yaratıyor; bunu <GuideLink href="/blog/information-gain-nedir">information gain nedir</GuideLink>{" "}
              yazımda anlattım. Teknik dokümanlarınızı PDF olarak yayınlıyorsanız{" "}
              <GuideLink href="/blog/pdf-dosyalari-icin-seo-nasil-optimize-edilir">PDF dosyaları için SEO</GuideLink>{" "}
              yazım da işinize yarayacaktır.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="uluslararasi">Uluslararası ve çok dilli B2B SEO nasıl yapılır?</GuideH2>
            <p>
              İhracat yapan firmalarda sık rastlanan bir sorun, Türkçe sitenin birebir çevrilip yayınlanması. Oysa
              bir ürün Almanya&apos;da başka, Birleşik Arap Emirlikleri&apos;nde başka bir terimle aranabiliyor. Her
              hedef pazar için ayrı anahtar kelime araştırması yapmak, çeviriden çok daha iyi sonuç veriyor.
            </p>
            <p>
              Teknik tarafta dil sürümlerinin doğru adres yapısıyla kurulması ve hreflang etiketleriyle birbirine
              bağlanması gerekiyor. Aksi halde Google yanlış ülkeye yanlış dil sürümünü gösterebiliyor ya da sürümleri
              birbirinin kopyası sanabiliyor. Bu düzenlemeleri teknik SEO çalışmasının bir parçası olarak ele alıyorum.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="olcum">B2B SEO&apos;da başarı nasıl ölçülür?</GuideH2>
            <p>
              B2B&apos;de trafik artışı tek başına iyi bir haber olmayabiliyor; gelen ziyaretçiler iş arayanlar ya da
              öğrenciler olabilir. Asıl bakılması gereken; teklif formları, katalog ve doküman indirmeleri, demo
              talepleri ve bu taleplerden kaçının satış ekibince gerçek fırsat olarak görüldüğü.
            </p>
            <p>
              Bunun için çalışmanın başında form ve indirme olaylarını{" "}
              <GuideLink href="/blog/google-analytics-4-nedir-nasil-kullanilir">Google Analytics 4</GuideLink> üzerinde
              doğru şekilde kuruyoruz; arama tarafını ise{" "}
              <GuideLink href="/blog/google-search-console-nedir">Google Search Console</GuideLink> ile takip
              ediyorum. Böylece hangi sayfanın gerçekten iş getirdiğini görüp emeği oraya yönlendirebiliyoruz.
            </p>
          </div>
        </GuideShell>
      </ServicePageLayout>
    </>
  );
}
