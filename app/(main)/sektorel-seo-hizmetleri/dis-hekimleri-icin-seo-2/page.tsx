import { Metadata } from "next";
import {
  FileHeart,
  MapPin,
  UserRound,
  Star,
  Globe2,
  ShieldCheck,
  EyeOff,
  Wallet,
  Users,
  MessageSquareWarning,
  Megaphone,
  Bot,
  HeartPulse,
  Stethoscope,
  Building2,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ServicePageLayout from "@/components/ServicePageLayout";
import LocalPackDemo from "@/components/service/LocalPackDemo";
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
  title: "Diş Hekimleri için SEO Hizmetleri",
  description: "İmplant, zirkonyum, ortodonti ve gülüş tasarımı aramalarında semtinizde görünür olmanız için diş kliniklerine özel SEO danışmanlığı. Tedavi sayfaları, hekim profilleri ve Google Haritalar birlikte.",
  alternates: {
    canonical: "/sektorel-seo-hizmetleri/dis-hekimleri-icin-seo-2",
  },
  openGraph: {
    title: "Diş Hekimleri için SEO Hizmetleri | Ekim Demirci",
    description: "Hasta “implant” ya da “kadıköy diş kliniği” diye aradığında karşısına kliniğinizin çıkması için tedavi sayfaları, hekim profilleri ve yerel SEO.",
  },
  twitter: {
    title: "Diş Hekimleri için SEO Hizmetleri | Ekim Demirci",
    description: "Hasta “implant” ya da “kadıköy diş kliniği” diye aradığında karşısına kliniğinizin çıkması için tedavi sayfaları, hekim profilleri ve yerel SEO.",
  },
};

const faqItems: Faq[] = [
  {
    question: "Diş kliniği SEO'su genel SEO'dan nasıl ayrılıyor?",
    answer: "Diş tedavileri sağlık hizmeti olduğu için Google bu sayfaları daha sıkı değerlendiriyor; içeriği kimin hazırladığı ve hekimin uzmanlığının nasıl gösterildiği önem kazanıyor. Üstüne aramaların büyük kısmı yerel: hasta evine ya da işine yakın bir klinik arıyor. Bu yüzden diş kliniği SEO'su güven sinyalleri, tedavi sayfaları ve harita görünürlüğünü birlikte ele alıyor.",
  },
  {
    question: "Her tedavi için ayrı sayfa açmak gerekiyor mu?",
    answer: "Evet, önemli tedaviler için gerekli. İmplant, zirkonyum kaplama, şeffaf plak, diş beyazlatma ya da kanal tedavisi farklı soruları olan farklı hastaların aradığı konular. Hepsini tek sayfada toplamak, Google'ın sizi hangi tedavi için göstereceğini anlamasını zorlaştırıyor.",
  },
  {
    question: "Tedavi fiyatlarını sitede yazmalı mıyım?",
    answer: "Hastalar fiyatı çok arıyor, ama diş tedavilerinde kesin fiyat muayeneden önce çoğu zaman söylenemiyor. Ben fiyatın nelere göre değiştiğini dürüstçe anlatan bir bölümü öneriyorum: kullanılan malzeme, diş sayısı, ek işlem gerekip gerekmediği gibi. Bu hem hastanın sorusuna cevap veriyor hem de yanıltıcı bir izlenim bırakmıyor.",
  },
  {
    question: "Hasta yorumları sıralamayı etkiler mi?",
    answer: "Özellikle harita sonuçlarında etkiliyor. Yorumların sayısı, güncelliği ve verdiğiniz cevaplar hem sıralamada hem de hastanın klinik seçiminde belirleyici oluyor. Memnun hastalardan etik kurallar çerçevesinde düzenli yorum almanız için basit bir süreç kuruyorum.",
  },
  {
    question: "Diş kliniklerinde tanıtım kurallarına uygun içerik nasıl yazılır?",
    answer: "Sağlık hizmetlerinin tanıtımında abartılı vaatler, garanti ifadeleri ve hastayı yönlendiren reklam dili kısıtlanıyor. Ben tedavi sayfalarını bilgilendirici bir dille, süreci ve olası riskleri açıkça anlatarak hazırlıyorum; yayından önce içeriği hekimin kontrol etmesini sağlıyorum.",
  },
  {
    question: "Yurt dışından hasta için SEO yapıyor musunuz?",
    answer: "Evet. Yurt dışından implant ya da gülüş tasarımı için gelen hastaları hedefleyen klinikler için, hedef ülkelerdeki arama alışkanlıklarını inceleyip ayrı dil sürümleri ve içerik planı hazırlıyorum. Her dil için ayrı anahtar kelime araştırması yapmak, sayfaları birebir çevirmekten çok daha iyi sonuç veriyor.",
  },
  {
    question: "Diş kliniği SEO'sunun sonuçları ne zaman görülür?",
    answer: "Google İşletme profili ve teknik düzenlemelerin etkisi genellikle ilk aylarda görülmeye başlıyor. Bir özel diş kliniğiyle yaptığım dört aylık çalışmada organik tıklamalar ve gösterimler iki katına çıktı; ama her kliniğin başlangıç noktası ve semtindeki rekabet farklı. İlk analizden sonra size kendi durumunuza göre gerçekçi bir takvim söylüyorum.",
  },
];

export default function DentistsSEO() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Sektörel SEO Hizmetleri", href: "/sektorel-seo-hizmetleri" },
        { name: "Diş Hekimleri için SEO", href: "/sektorel-seo-hizmetleri/dis-hekimleri-icin-seo-2" }
      ]} />
      <ServicePageLayout
        title="Diş Hekimleri için SEO"
        subtitle="Tedavi ve semt aramalarında bulunan klinik"
        description="İmplant ya da zirkonyum yaptırmayı düşünen bir hasta önce Google'da araştırıyor: tedavinin nasıl yapıldığını okuyor, yakınındaki klinikleri haritada karşılaştırıyor, hekimlerin kim olduğuna ve yorumlara bakıyor. Ben bu araştırmanın her adımında kliniğinizin güven veren bir şekilde karşısına çıkması için tedavi sayfalarınızı, hekim profillerinizi ve yerel görünürlüğünüzü birlikte ele alıyorum."
        canonicalUrl="https://ekimdemirci.com/sektorel-seo-hizmetleri/dis-hekimleri-icin-seo-2"
        afterHeroNode={
          <DemoSection
            id="harita-gorunurlugu"
            eyebrow="Harita sonuçları"
            title="Hasta semtindeki kliniği arıyor. Sizi bulsun."
            intro="Diş kliniği aramalarının çoğu yerel: hasta, tedavi süresince rahatça gidip gelebileceği, yakın ve güvenilir bir klinik arıyor. Haritada ilk üçte yer almak, ilk muayeneye giden en kısa yol."
            window={
              <DemoWindow label="google.com/maps">
                <LocalPackDemo
                  query="kadıköy diş kliniği"
                  listings={[
                    { name: "Moda Ağız ve Diş Sağlığı", category: "Diş kliniği", rating: 4.7, reviews: 238 },
                    { name: "Gülümse Diş Polikliniği", category: "Diş polikliniği", rating: 4.5, reviews: 164 },
                    { name: "Dt. Ayşe Kaya Muayenehanesi", category: "Diş hekimi", rating: 4.8, reviews: 89 },
                    { name: "Kıyı Dental", category: "Diş kliniği", rating: 4.2, reviews: 71 },
                    { name: "Kliniğiniz", category: "Diş kliniği", rating: 4.4, reviews: 26, brand: true },
                  ]}
                />
              </DemoWindow>
            }
            side={
              <DemoSide
                title="İlk karşılaştırma haritada yapılıyor"
                text="Ben de bir diş hekimi ararken önce haritadaki seçeneklere, puanlara ve son yorumlara bakıyorum; hastalarınız da büyük ihtimalle öyle yapıyor. Haritada görünmeyen ya da az yorumu olan bir klinik, hekimleri ne kadar iyi olursa olsun bu karşılaştırmanın dışında kalıyor."
                points={[
                  "Google İşletme profilini tedavilerle eksiksiz doldurmak",
                  "Hasta yorumlarını düzenli ve etik şekilde artırmak",
                  "Her tedavi için hastanın sorularına cevap veren sayfalar",
                  "Hekimlerin uzmanlığını Google'a net göstermek",
                ]}
                ctaTitle="Kliniğiniz semtinizde kaçıncı sırada?"
                ctaText="Kliniğinizin haritadaki ve Google'daki durumunu inceleyip en hızlı yükselebileceğiniz alanları raporlayayım."
                ctaLabel="Ücretsiz klinik analizi iste"
              />
            }
          />
        }
        icon="Brain"
        gradient="from-sky-500 via-cyan-500 to-teal-500"
        blogCategory="SEO Hizmetleri"
      >
        <ScopeGrid
          title="Diş hekimleri için SEO'da neler yapıyorum?"
          intro="Diş tedavisi hem pahalı hem de uzun süren bir karar; hasta güvenmeden randevu almıyor. Bu yüzden çalışmayı, hastanın araştırırken baktığı her yerde güçlü ve güvenilir görünmeniz üzerine kuruyorum."
          items={[
            { icon: FileHeart, title: "Tedavi sayfalarını yeniden kuruyorum", text: "İmplant, zirkonyum, ortodonti, şeffaf plak, gülüş tasarımı gibi tedavilerin her biri için; sürecin nasıl ilerlediğini, kaç seans sürdüğünü, fiyatın nelere göre değiştiğini anlatan sayfalar planlıyorum." },
            { icon: UserRound, title: "Hekim profillerini güçlendiriyorum", text: "Hekimlerinizin eğitimini, uzmanlık alanlarını, sertifikalarını ve mesleki üyeliklerini gösteren profiller hazırlıyor, tedavi içeriklerini bu profillere bağlıyorum." },
            { icon: MapPin, title: "Haritada ve semt aramalarında öne çıkarıyorum", text: "Google İşletme profilinizi doğru kategori ve tedavilerle eksiksiz hale getiriyor, klinik bilgilerinizin internetin her yerinde aynı yazılmasını sağlıyorum." },
            { icon: Star, title: "Hasta yorumlarını planlıyorum", text: "Memnun hastalardan etik kurallar çerçevesinde düzenli yorum almanız için bir süreç kuruyor, olumsuz yorumlara nasıl cevap vereceğinizi birlikte belirliyoruz." },
            { icon: ShieldCheck, title: "Tanıtım kurallarına uygun yazıyorum", text: "İçerikleri abartılı vaatlerden ve garanti ifadelerinden uzak, bilgilendirici bir dille hazırlıyorum. Böylece hem kurallara uyuyor hem de hastaya güven veriyorsunuz." },
            { icon: Globe2, title: "Sağlık turizmi için çok dilli yapı kuruyorum", text: "Yurt dışından hasta kabul ediyorsanız hedef ülkelerdeki arama alışkanlıklarına göre ayrı dil sürümleri ve tedavi sayfaları hazırlıyorum." },
          ]}
        />

        <ProcessTimeline
          title="Diş kliniği SEO çalışması nasıl ilerliyor?"
          intro="Önce kliniğinizin Google'daki ve haritadaki durumunu, semtinizdeki rakipleri inceliyorum. Ardından teknik, harita ve içerik çalışmaları birbirini bekletmeden ilerliyor."
          ctaLabel="Ücretsiz klinik analiziyle başlayalım"
          steps={[
            {
              tag: "1. ve 2. hafta",
              title: "Analiz ve yol haritası",
              paragraphs: [
                "Hastaların tedavilerinizi hangi kelimelerle ve hangi semt adlarıyla aradığını çıkarıyorum. Sitenizi Google'ın sağlık içeriklerinde aradığı güven kriterlerine göre inceliyor; hekim bilgilerinin ne kadar görünür olduğuna, tedavi sayfalarının hastanın sorularına cevap verip vermediğine bakıyorum.",
                "Haritadaki konumunuzu ve bölgenizdeki rakip klinikleri de analiz edip, nereden başlamamız gerektiğini ve hangi tedavilerde en hızlı yol alabileceğinizi gösteren bir yol haritası hazırlıyorum.",
              ],
            },
            {
              tag: "Paralel yürür",
              tone: "accent",
              title: "Teknik ve harita düzenlemeleri",
              paragraphs: [
                "Sitenin hızını, mobil görünümünü ve Google'ın sayfaları doğru okuyup okumadığını kontrol ediyorum. Hastaların çoğu telefondan aradığı için, tek dokunuşla arama ya da randevu talebi göndermenin kolay olması bu aşamanın öncelikleri arasında.",
                "Aynı dönemde Google İşletme profilinizi, klinik bilgilerinin tutarlılığını ve klinik ile hekimleri Google'a tanıtan yapılandırılmış verileri düzenliyorum.",
              ],
            },
            {
              tag: "1. aydan itibaren",
              title: "Tedavi sayfaları ve hekim profilleri",
              paragraphs: [
                "Tedavi sayfalarını hastaların gerçekten sorduğu sorulara göre yeniden yazıyorum: implant acıtır mı, zirkonyum kaç yıl dayanır, şeffaf plak tedavisi ne kadar sürer gibi. Hekim profillerini detaylandırıp her içeriğin hangi hekim tarafından kontrol edildiğini gösteriyorum.",
                "Tüm içerikleri sağlık tanıtım kurallarına dikkat ederek hazırlıyorum; yayından önce hekimin son kontrolünü yapmasını sağlıyorum.",
              ],
            },
            {
              tag: "Ayrı bütçelendirilir",
              tone: "amber",
              title: "Backlink ve dijital PR",
              paragraphs: [
                "Sağlık portalları, yerel rehberler ve sektörel yayınlarda kliniğinizin ve hekimlerinizin doğru bilgilerle yer almasını sağlıyorum. Bu yayınların maliyeti siteden siteye değiştiği için ayrıca bütçelendiriliyor; her harcamayı önceden size soruyorum, onayınız olmadan hiçbir şey yapılmıyor.",
              ],
            },
            {
              tag: "Her ay",
              title: "Randevu odaklı ölçüm",
              paragraphs: [
                "Sıralamaların yanında asıl önemli olanı takip ediyorum: telefon aramaları, yol tarifi istekleri, form ve randevu talepleri. Her ay bu sonuçlara bakıp planı birlikte güncelliyoruz.",
              ],
            },
          ]}
        />

        <ExampleGrid
          title="Bu cümleler size tanıdık geliyorsa, SEO zamanı gelmiş demektir"
          intro="Diş kliniklerinde görünürlük sorunu genellikle şu şikayetlerle kendini gösteriyor:"
          quoteStyle="speech"
          items={[
            { icon: EyeOff, title: "Haritada görünmemek", quote: "Aynı caddedeki klinik çıkıyor, biz çıkmıyoruz", text: "Google İşletme profili eksik ya da tutarsızsa, hastaya en yakın klinik siz olsanız bile haritada üstte yer almanız zorlaşıyor." },
            { icon: Wallet, title: "Sadece fiyat soran hastalar", quote: "Gelen herkes sadece implant fiyatı soruyor", text: "Tedavi sayfaları süreci ve fiyatın neye göre değiştiğini anlatmıyorsa, hasta sizi yalnızca fiyatla karşılaştırıyor." },
            { icon: Users, title: "Hekimlerin tanınmaması", quote: "Hastalar hekimlerimizi tanımadan geliyor", text: "Hekim profilleri zayıfsa hem hasta güveni hem de Google'ın içeriklerinize duyduğu güven düşüyor." },
            { icon: MessageSquareWarning, title: "Az ya da olumsuz yorum", quote: "Rakiplerin yüzlerce yorumu var, bizim birkaç tane", text: "Yorum sayısı ve güncelliği hem harita sıralamasını hem de hastanın klinik seçimini doğrudan etkiliyor." },
            { icon: Megaphone, title: "Reklam kısıtları", quote: "Reklam verirken her şey kısıtlanıyor", text: "Sağlıkta tanıtım kuralları sıkı; kurallara uygun, bilgilendirici içeriklerle kazanılan organik görünürlük bu yüzden daha da değerli." },
            { icon: Bot, title: "Yapay zekada görünmemek", quote: "ChatGPT'ye sorunca başka klinikleri öneriyor", text: "Hastalar artık yapay zekaya da soruyor. Güçlü hekim profilleri ve güvenilir kaynaklarda yer almak bu cevaplarda görünmenizi destekliyor." },
          ]}
        />

        <ProofBand
          title="Bir diş kliniği projesinden sonuçlar"
          results={[
            { code: "Özel diş kliniği", metric: "+%100", label: "Organik tıklama artışı", detail: "Yerel SEO, tedavi sayfalarının geliştirilmesi ve uzmanlık şeması çalışmalarıyla organik tıklamaların iki katına çıkması.", source: "Vaka analizi, 4 ay" },
            { code: "Özel diş kliniği", metric: "+%100", label: "Gösterim artışı", detail: "Aynı çalışma sürecinde kliniğin Google arama sonuçlarında görünme sayısının iki katına çıkması.", source: "Vaka analizi, 4 ay" },
            { code: "Çalışma süresi", metric: "4 ay", label: "Sonuca kadar geçen süre", detail: "Google İşletme ve teknik düzenlemelerle başlayan, tedavi içerikleri ve uzmanlık şemasıyla devam eden çalışmanın toplam süresi.", source: "Vaka analizi, 4 ay" },
          ]}
        />

        <RelatedBand
          eyebrow="Sağlık alanındaki diğer sayfalar"
          title="Kliniğinizin yapısına uygun sayfayı inceleyin"
          text="Sağlık sektörünün farklı alanları için ayrı sayfalarda daha detaylı bilgi veriyorum."
          links={[
            { icon: HeartPulse, title: "Sağlık ve klinik SEO", href: "/sektorel-seo-hizmetleri/saglik-ve-klinik-seo", text: "Güven odaklı klinik görünürlüğü" },
            { icon: Stethoscope, title: "Doktorlar için SEO", href: "/sektorel-seo-hizmetleri/doktorlar-icin-seo-2", text: "Hekim adı ve branşıyla bulunmak" },
            { icon: Building2, title: "Hastaneler için SEO", href: "/sektorel-seo-hizmetleri/hastaneler-icin-seo-2", text: "Çok branşlı yapılar için mimari" },
          ]}
        />

        <GuideShell
          id="dis-klinigi-seo-rehberi"
          eyebrow="Diş kliniği SEO rehberi"
          title="Diş hekimleri için SEO hakkında bilmeniz gerekenler"
          intro="Bir diş kliniğinin Google'da ve haritada nasıl görünür hale geldiğini, nelere dikkat etmeniz gerektiğini sade bir dille anlattım."
          toc={[
            { id: "dis-klinigi-seo-nedir", label: "Diş kliniği SEO'su nedir?" },
            { id: "arama-davranisi", label: "Hastalar nasıl arıyor?" },
            { id: "tedavi-sayfasi", label: "Tedavi sayfaları nasıl yazılmalı?" },
            { id: "hekim-profili", label: "Hekim profilleri ve güven" },
            { id: "harita", label: "Google Haritalar ve yorumlar" },
            { id: "kurallar", label: "Tanıtım kuralları ve sağlık turizmi" },
          ]}
          cta={{ eyebrow: "Ücretsiz klinik analizi", title: "Hastalar sizi Google'da bulabiliyor mu?", text: "Kliniğinizin Google ve haritadaki durumunu inceleyip fırsatları raporlayayım.", label: "Ücretsiz analiz isteyin" }}
          faqTitle="Diş hekimleri için SEO hakkında sıkça sorulan sorular"
          faqItems={faqItems}
        >
          <div className="space-y-5">
            <GuideH2 id="dis-klinigi-seo-nedir">Diş kliniği SEO&apos;su nedir?</GuideH2>
            <GuideDefinition>
              Diş kliniği SEO&apos;su; diş hekimi muayenehaneleri, diş klinikleri ve ağız ve diş sağlığı polikliniklerinin,
              tedavi ve semt aramalarında Google&apos;da ve Google Haritalar&apos;da güvenilir bir seçenek olarak üst sıralarda
              yer alması için yapılan arama motoru optimizasyonu çalışmalarıdır.
            </GuideDefinition>
            <p>
              Diş tedavileri çoğu zaman pahalı, birkaç seans süren ve hastayı biraz da korkutan kararlar. Bu yüzden hasta
              randevu almadan önce uzun uzun araştırıyor. Diş kliniği SEO&apos;sunun amacı, bu araştırmanın her aşamasında
              kliniğinizin hem görünür hem de güven veren bir şekilde karşısına çıkması.
            </p>
            <p>
              Konuya daha geniş bir giriş için <GuideLink href="/blog/dis-klinigi-seo-nedir-dis-hekimleri-icin-neden-onemlidir">diş kliniği SEO&apos;su nedir</GuideLink> yazıma
              göz atabilirsiniz. Bir özel diş kliniğiyle yaptığım dört aylık çalışmanın detaylarını ise{" "}
              <GuideLink href="/basari-hikayeleri/hizmet-klinik-seo">bu vaka analizinde</GuideLink> anlattım.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="arama-davranisi">Hastalar diş kliniğini nasıl arıyor?</GuideH2>
            <p>
              Aramaların bir kısmı doğrudan klinik arayışı: &ldquo;kadıköy diş kliniği&rdquo;, &ldquo;yakınımdaki diş
              hekimi&rdquo;, &ldquo;acil diş hekimi&rdquo; gibi. Bir kısmı ise tedaviyle ilgili: &ldquo;implant fiyatları&rdquo;,
              &ldquo;zirkonyum mu lamine mi&rdquo;, &ldquo;şeffaf plak kaç ay sürer&rdquo;. İlki randevuya çok yakın; ikincisi
              ise hastanın henüz karar vermediği araştırma aşaması.
            </p>
            <p>
              İyi bir çalışma iki aşamayı da kapsıyor. Klinik aramalarında harita ve semt sinyalleriyle, tedavi aramalarında ise
              soruları açıkça cevaplayan tedavi sayfalarıyla görünüyorsunuz. Hangi kelimelere odaklanmanız gerektiğini anlamak
              için <GuideLink href="/blog/anahtar-kelime-nedir">anahtar kelime nedir</GuideLink> yazıma da bakabilirsiniz.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="tedavi-sayfasi">Tedavi sayfaları nasıl yazılmalı?</GuideH2>
            <p>
              Hasta bir tedaviyi araştırırken hep benzer soruları soruyor: Bu tedavi nedir, bana uygun mu, kaç seans sürer,
              acıtır mı, ne kadar dayanır, fiyatı neye göre değişir? İyi bir tedavi sayfası bu sorulara açık ve anlaşılır cevaplar
              veriyor, içeriği hangi hekimin kontrol ettiğini ve ne zaman güncellendiğini gösteriyor.
            </p>
            <p>
              Her önemli tedavinin kendi sayfası olmalı ve bu sayfalar birbirine mantıklı şekilde bağlanmalı; örneğin implant
              sayfasından kemik tozu ya da sinüs lifting sayfasına geçilebilmeli. Sayfaların Google&apos;a doğru anlatılması için{" "}
              <GuideLink href="/blog/yapilandirilmis-veri-nedir">yapılandırılmış veri</GuideLink> kullanmak da işe yarıyor.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="hekim-profili">Hekim profilleri neden bu kadar önemli?</GuideH2>
            <p>
              Google, sağlık gibi insanların hayatını doğrudan etkileyebilecek konularda içeriği kimin hazırladığına ve bu
              kişinin gerçekten uzman olup olmadığına çok dikkat ediyor. Hekimin eğitimi, uzmanlık alanları, sertifikaları ve
              mesleki üyelikleri net şekilde gösterildiğinde hem hasta hem de Google kliniğe daha çok güveniyor.
            </p>
            <p>
              Hekim profilini, hekimin kontrol ettiği tedavi sayfalarına bağlamak bu güveni güçlendiriyor. Bu konuyu{" "}
              <GuideLink href="/blog/google-raters-guideline-nedir">Google Raters Guideline nedir</GuideLink> ve{" "}
              <GuideLink href="/blog/yazar-otoritesi-nedir-seodaki-onemi-nedir">yazar otoritesi nedir</GuideLink> yazılarımda
              daha detaylı anlattım.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="harita">Google Haritalar ve hasta yorumları</GuideH2>
            <p>
              Semt adıyla yapılan aramalarda Google çoğu zaman en üstte bir harita ve üç klinik gösteriyor. Birçok hasta bu üç
              seçenekten birini seçip doğrudan arıyor. Bu alanda yer almak için Google İşletme profilinin doğru kategori ve
              tedavilerle eksiksiz doldurulması, klinik bilgilerinin her yerde aynı yazılması ve gerçek, güncel hasta yorumları
              gerekiyor.
            </p>
            <p>
              Yorumlarda sayı kadar cevap verme alışkanlığı da önemli; olumsuz bir yoruma sakin ve özenli bir cevap, sizi
              inceleyen yeni hastaya çok şey anlatıyor. Detaylar için <GuideLink href="/blog/yerel-seo-nedir">yerel SEO nedir</GuideLink> ve{" "}
              <GuideLink href="/blog/google-my-business-nedir">Google İşletme profili</GuideLink> yazılarıma göz atabilirsiniz.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="kurallar">Tanıtım kuralları ve sağlık turizmi</GuideH2>
            <p>
              Diş hekimliği hizmetlerinin tanıtımında abartılı vaatler, &ldquo;garantili&rdquo;, &ldquo;en iyi&rdquo; gibi
              ifadeler ve hastayı yönlendiren reklam dili kısıtlanıyor; öncesi-sonrası görselleri de dikkatli kullanılmalı. Bu
              kısıtlar reklam kanallarını daraltırken, bilgilendirici içeriklerle kazanılan organik görünürlüğü daha değerli hale
              getiriyor.
            </p>
            <p>
              Yurt dışından hasta kabul eden klinikler için ise iş biraz daha genişliyor: her hedef ülke için ayrı anahtar kelime
              araştırması, ayrı dil sürümleri ve o ülkenin hastasının merak ettiği konuları (konaklama, tedavi süresi, kontrol
              süreci gibi) anlatan sayfalar gerekiyor. Sayfaları birebir çevirmek çoğu zaman yeterli olmuyor.
            </p>
          </div>
        </GuideShell>
      </ServicePageLayout>
    </>
  );
}
