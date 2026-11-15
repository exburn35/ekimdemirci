import { Metadata } from "next";
import {
  Network,
  Gauge,
  MapPinned,
  UserRound,
  ClipboardList,
  Globe2,
  Copy,
  SearchX,
  Layers,
  TrendingDown,
  Languages,
  HeartPulse,
  Stethoscope,
  Smile,
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
  RelatedBand,
  ScopeGrid,
  type Faq,
} from "@/components/service/ServiceBlocks";

export const metadata: Metadata = {
  title: "Hastaneler için SEO Danışmanlığı",
  description: "Çok branşlı ve çok lokasyonlu hastaneler için SEO danışmanlığı. Bölüm ve doktor sayfalarının yapısını, teknik altyapıyı ve her şubenin yerel görünürlüğünü birlikte ele alıyorum.",
  alternates: {
    canonical: "/sektorel-seo-hizmetleri/hastaneler-icin-seo-2",
  },
  openGraph: {
    title: "Hastaneler için SEO Danışmanlığı | Ekim Demirci",
    description: "Hasta bir bölüm, bir doktor ya da bir check-up paketi aradığında hastanenizin doğru sayfasıyla karşısına çıkması için yapı, teknik ve içerik çalışması.",
  },
  twitter: {
    title: "Hastaneler için SEO Danışmanlığı | Ekim Demirci",
    description: "Hasta bir bölüm, bir doktor ya da bir check-up paketi aradığında hastanenizin doğru sayfasıyla karşısına çıkması için yapı, teknik ve içerik çalışması.",
  },
};

const faqItems: Faq[] = [
  {
    question: "Hastane SEO'su klinik SEO'sundan neden farklı?",
    answer: "Ölçek yüzünden. Bir klinikte birkaç tedavi sayfası ve birkaç hekim varken bir hastanede onlarca bölüm, yüzlerce doktor, birden fazla şube ve sürekli değişen kadrolar oluyor. Bu kadar sayfanın birbirine nasıl bağlanacağı, hangisinin hangi aramada öne çıkacağı ve teknik olarak Google tarafından nasıl taranacağı, işin en belirleyici kısmı haline geliyor.",
  },
  {
    question: "Her şube için ayrı bir site mi kurmalıyız?",
    answer: "Çoğu durumda hayır. Tek bir alan adı altında, her şubenin kendi sayfası ve kendi Google İşletme profili olan bir yapı genelde daha sağlıklı. Böylece sitenin otoritesi bölünmüyor, her şube de kendi bölgesindeki aramalarda görünebiliyor. Kararı hastanenizin yapısına ve mevcut sitelerinize bakarak birlikte veriyoruz.",
  },
  {
    question: "Hastanemizden ayrılan doktorların sayfalarını ne yapmalıyız?",
    answer: "Doğrudan silmek, o sayfaya gelen ziyaretçinin hata sayfasıyla karşılaşmasına ve sayfanın kazandığı değerin kaybolmasına yol açıyor. Genelde sayfayı ilgili bölüm sayfasına yönlendirmek en doğru çözüm. Kadro değişikliklerinde izlenecek bu adımları içerik ekibinizle birlikte basit bir kurala bağlıyoruz.",
  },
  {
    question: "Bölüm sayfaları ile hastalık ve tedavi sayfaları birbirine rakip olur mu?",
    answer: "Planlama yapılmazsa evet. Örneğin hem “kardiyoloji bölümü” sayfası hem de bir blog yazısı aynı aramayı hedefliyorsa Google hangisini göstereceğine karar veremeyebiliyor. Bu yüzden çalışmanın başında her aramanın hangi sayfaya ait olduğunu gösteren bir harita çıkarıyorum.",
  },
  {
    question: "Check-up ve paket sayfaları SEO'da işe yarar mı?",
    answer: "Evet, doğru kurulursa. Hastalar check-up paketlerini ve belirli işlemleri çoğu zaman doğrudan arıyor. Paket içeriğini, kimler için uygun olduğunu, hazırlık sürecini ve randevu yolunu açıkça anlatan, her paket için ayrı tutulan sayfalar bu aramalarda görünme şansını artırıyor.",
  },
  {
    question: "Sağlık turizmi için yabancı dilde SEO yapıyor musunuz?",
    answer: "Evet. Yurt dışından hasta kabul eden hastaneler için hedef ülkelerdeki arama alışkanlıklarını inceliyor, her dil için ayrı anahtar kelime araştırması yapıyor ve doğru dil etiketleriyle çalışan çok dilli bir yapı kuruyorum. Birebir çeviri genelde yeterli olmuyor; her ülkenin hastası farklı sorular soruyor.",
  },
  {
    question: "Hastane SEO çalışmasında hastanenin ekibiyle nasıl çalışıyorsunuz?",
    answer: "Hastanelerde genelde bir pazarlama ya da kurumsal iletişim birimi, bir yazılım ekibi ve tıbbi içerikleri onaylayan hekimler oluyor. Ben yol haritasını, teknik talimatları ve içerik planını hazırlıyorum; uygulamayı ekiplerinizle birlikte yürütüyor, tıbbi içeriklerin hekim onayından geçmesini sağlıyorum.",
  },
  {
    question: "Hastane SEO'sunun sonuçları ne zaman görülür?",
    answer: "Teknik düzeltmelerin ve şube profillerindeki düzenlemelerin etkisi genelde ilk aylarda görülmeye başlıyor. Rekabetçi bölüm ve tedavi aramalarında kalıcı yer edinmek ise çoğu zaman altı ay ile bir yıl arasında bir süre istiyor. Büyük sitelerde düzenli ve planlı çalışma, tek seferlik büyük değişikliklerden daha iyi sonuç veriyor.",
  },
];

export default function HospitalsSEO() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Sektörel SEO Hizmetleri", href: "/sektorel-seo-hizmetleri" },
        { name: "Hastaneler için SEO", href: "/sektorel-seo-hizmetleri/hastaneler-icin-seo-2" }
      ]} />
      <ServicePageLayout
        title="Hastaneler için SEO Danışmanlığı"
        subtitle="Her bölüm, her doktor, her şube doğru sayfayla"
        description="Bir hastanenin sitesi; onlarca bölüm, yüzlerce doktor ve birden fazla şube demek. Hasta “göz bölümü”, bir doktorun adı ya da bir check-up paketi aradığında doğru sayfanın karşısına çıkması, bu yapının düzgün kurulmasına bağlı. Ben bölüm ve doktor sayfalarının mimarisini, sitenin teknik altyapısını ve her şubenin yerel görünürlüğünü birlikte ele alıyorum."
        canonicalUrl="https://ekimdemirci.com/sektorel-seo-hizmetleri/hastaneler-icin-seo-2"
        afterHeroNode={
          <DemoSection
            id="bolum-aramalari"
            eyebrow="Bölüm aramaları"
            title="Hasta bir bölüm arıyor. Hastaneniz o sayfayla çıksın."
            intro="Hastalar hastane adından çok bölüm, tedavi ve doktor arıyor. Bu aramalarda öne çıkan, iyi kurgulanmış bir bölüm sayfasına sahip olan hastane oluyor."
            window={
              <DemoWindow label="google.com">
                <SerpDemo
                  query="özel hastane göz bölümü"
                  results={[
                    { domain: "saglikrehberi.com", title: "En İyi Göz Hastaneleri Listesi", snippet: "Şehrinizdeki özel hastanelerin göz bölümlerini karşılaştırın, doktor yorumlarını okuyun..." },
                    { domain: "ornekhastane.com.tr", title: "Göz Hastalıkları Bölümü | Örnek Hastane", snippet: "Göz hastalıkları bölümümüzde katarakt, glokom ve retina tedavileri uygulanmaktadır..." },
                    { domain: "doktorbul.net", title: "Göz Doktorları ve Randevu", snippet: "Göz hastalıkları uzmanlarını listeleyin, uygun saatlere online randevu alın..." },
                    { domain: "sehirhastanesi.com", title: "Göz Polikliniği", snippet: "Polikliniğimiz hafta içi hizmet vermektedir. Randevu için çağrı merkezini arayın..." },
                    { domain: "hastaneniz.com", title: "Göz Hastalıkları Bölümü: Doktorlar, Tedaviler ve Randevu", snippet: "Bölümdeki doktorlar, uygulanan tedaviler, şubeler ve sık sorulan sorular tek sayfada. Size en yakın şubeden randevu alın.", brand: true },
                  ]}
                />
              </DemoWindow>
            }
            side={
              <DemoSide
                title="Büyük site, büyük karmaşa riski"
                text="Hastane sitelerinde en yaygın sorun çoğu zaman içerik eksikliği değil, düzensizlik. Aynı bölüm için birkaç sayfa, birbirine bağlanmayan doktor profilleri, ayrılan doktorlardan kalan boş sayfalar... Google bu karmaşada hangi sayfayı göstereceğini seçemeyince, hasta da rehber sitelere gidiyor."
                points={[
                  "Bölüm, doktor ve şube sayfalarını tek bir mantıkla bağlamak",
                  "Her aramanın hangi sayfaya ait olduğunu netleştirmek",
                  "Binlerce sayfanın teknik olarak sorunsuz taranmasını sağlamak",
                  "Her şubeyi kendi bölgesindeki aramalarda görünür kılmak",
                ]}
                ctaTitle="Hastanenizin bölüm sayfaları kaçıncı sırada?"
                ctaText="Sitenizin yapısını ve öncelikli bölümlerin arama sonuçlarındaki durumunu inceleyip bir yol haritası çıkarayım."
                ctaLabel="Ücretsiz hastane analizi iste"
              />
            }
          />
        }
        icon="Settings"
        gradient="from-sky-500 via-blue-500 to-indigo-500"
        blogCategory="SEO Hizmetleri"
      >
        <ScopeGrid
          title="Hastaneler için SEO çalışmasında neler yapıyorum?"
          intro="Hastane SEO'sunda başarı, tek tek sayfaların iyi olmasından çok, bütün sitenin düzenli bir yapıya oturmasına bağlı. Çalışmayı bu yapının etrafında kuruyorum."
          items={[
            { icon: Network, title: "Bölüm ve doktor mimarisini kuruyorum", text: "Bölüm, alt uzmanlık, hastalık, tedavi ve doktor sayfalarının birbirine nasıl bağlanacağını planlıyorum. Böylece hem hasta hem Google aradığı bilgiye birkaç tıkla ulaşıyor." },
            { icon: Gauge, title: "Büyük sitenin teknik sağlığını koruyorum", text: "Tarama sorunlarını, tekrarlanan sayfaları, hatalı yönlendirmeleri ve yavaş açılan şablonları tespit edip yazılım ekibinize net talimatlarla iletiyorum." },
            { icon: MapPinned, title: "Her şubeyi yerelde görünür kılıyorum", text: "Her şube için ayrı bir sayfa ve doğru düzenlenmiş bir Google İşletme profili kuruyor, adres ve telefon bilgilerinin her yerde tutarlı olmasını sağlıyorum." },
            { icon: UserRound, title: "Doktor profillerini standarda bağlıyorum", text: "Yüzlerce doktor sayfası için eğitim, uzmanlık, çalıştığı şube ve yayınları içeren ortak bir profil şablonu hazırlıyorum; kadro değiştiğinde ne yapılacağını kurala bağlıyorum." },
            { icon: ClipboardList, title: "Check-up ve paket sayfalarını düzenliyorum", text: "Check-up paketleri ve sık aranan işlemler için içeriği, hazırlık sürecini ve randevu yolunu açıkça anlatan, aramalarda görünebilecek sayfalar planlıyorum." },
            { icon: Globe2, title: "Sağlık turizmi için çok dilli yapı kuruyorum", text: "Yurt dışından hasta kabul ediyorsanız hedef ülkelerin arama alışkanlıklarına göre ayrı dil sürümleri, doğru dil etiketleri ve içerik planı hazırlıyorum." },
          ]}
        />

        <ProcessTimeline
          title="Hastane SEO çalışması adım adım nasıl ilerliyor?"
          intro="Büyük bir sitede her şeye aynı anda dokunmak yerine, en çok hasta getirecek bölümlerden başlayan bir sıra belirliyorum. Teknik çalışma ve içerik bu sırayla paralel ilerliyor."
          ctaLabel="Ücretsiz hastane analiziyle başlayalım"
          steps={[
            {
              tag: "İlk ay",
              title: "Analiz ve yol haritası",
              paragraphs: [
                "Sitenizin tamamını tarayıp bölüm, doktor, şube ve içerik sayfalarının bugün nasıl bir yapıda olduğunu çıkarıyorum. Hangi aramalarda göründüğünüzü, hangilerinde rakip hastanelerin ya da rehber sitelerin öne geçtiğini analiz ediyorum.",
                "Sonunda hangi bölümlerden başlanacağını, hangi teknik sorunların öncelikli olduğunu ve her aramanın hangi sayfaya ait olacağını gösteren bir yol haritası hazırlıyorum. Öncelikleri hastanenizin hedeflerine göre birlikte belirliyoruz.",
              ],
            },
            {
              tag: "Paralel yürür",
              tone: "accent",
              title: "Teknik altyapı ve şube profilleri",
              paragraphs: [
                "Tarama, indeksleme, yönlendirme ve hız sorunlarını yazılım ekibinizin uygulayabileceği net talimatlara dönüştürüyorum. Büyük sitelerde tek bir şablondaki düzeltme yüzlerce sayfayı birden etkilediği için bu aşama çok verimli olabiliyor.",
                "Aynı dönemde her şubenin Google İşletme profilini ve şube sayfasını düzenliyorum.",
              ],
            },
            {
              tag: "2. aydan itibaren",
              title: "Bölüm, doktor ve tedavi içerikleri",
              paragraphs: [
                "Öncelikli bölümlerden başlayarak bölüm sayfalarını, bağlı doktor profillerini ve hastalık ve tedavi içeriklerini yeniden kurguluyorum. Her tıbbi içeriğin ilgili hekimin onayından geçmesini ve sayfada kimin kontrol ettiğinin yazmasını sağlıyorum.",
                "Metinleri sağlık tanıtım kurallarına uygun, bilgilendirici bir dille hazırlıyorum; abartılı vaat ve garanti ifadelerinden uzak duruyorum.",
              ],
            },
            {
              tag: "Ayrı bütçelendirilir",
              tone: "amber",
              title: "Backlink ve dijital PR",
              paragraphs: [
                "Hastanenizin ve hekimlerinizin sağlık portallarında, haber sitelerinde ve sektörel yayınlarda doğru bilgilerle yer alması, sitenin otoritesini güçlendiriyor. Bu yayın çalışmalarının maliyeti siteden siteye değiştiği için ayrıca bütçelendiriliyor; onayınız olmadan hiçbir harcama yapılmıyor.",
              ],
            },
            {
              tag: "Her ay",
              title: "Ölçüm ve raporlama",
              paragraphs: [
                "Bölüm bazında organik trafiği, randevu formlarını, çağrı merkezine yapılan aramaları ve şube profillerinden gelen talepleri takip ediyorum. Her ay hangi bölümün nereye geldiğini gösteren sade bir rapor hazırlıyor, bir sonraki ayın önceliklerini birlikte belirliyoruz.",
              ],
            },
          ]}
        />

        <ExampleGrid
          title="Hastanenizde bu cümleler kuruluyorsa, hastane SEO'su zamanı"
          intro="Hastanelerin pazarlama ve dijital ekiplerinin sık yaşadığı durumlar şunlar:"
          quoteStyle="speech"
          items={[
            { icon: SearchX, title: "Bölüm aramalarında görünmemek", quote: "Bölüm adını aratınca rehber siteleri çıkıyor", text: "Bölüm sayfaları zayıfsa, hasta sizin bölümünüzü rehber siteler üzerinden ve rakiplerinizle yan yana görüyor." },
            { icon: Copy, title: "Birbirine rakip sayfalar", quote: "Aynı bölüm için üç ayrı sayfamız var", text: "Aynı aramayı hedefleyen birden fazla sayfa, Google'ın hangisini göstereceğine karar verememesine yol açıyor." },
            { icon: Layers, title: "Dağınık doktor sayfaları", quote: "Ayrılan doktorların sayfaları hâlâ duruyor", text: "Güncel olmayan doktor sayfaları hem hastayı yanıltıyor hem de sitenin genel kalitesine zarar veriyor." },
            { icon: MapPinned, title: "Şubelerin görünmemesi", quote: "Yeni şubemizi haritada kimse bulamıyor", text: "Her şubenin kendi sayfası ve doğru düzenlenmiş Google İşletme profili olmadan yerel aramalarda görünmek zor." },
            { icon: TrendingDown, title: "Güncellemelerle düşen trafik", quote: "Bir güncellemeden sonra trafiğimiz ciddi düştü", text: "Sağlık siteleri kalite güncellemelerinden en çok etkilenen sitelerin başında geliyor. Güven sinyalleri ve site düzeni birlikte ele alınmalı." },
            { icon: Languages, title: "Yabancı hasta gelmemesi", quote: "İngilizce sitemiz var ama yurt dışından talep yok", text: "Birebir çevrilmiş sayfalar hedef ülkedeki aramalarla örtüşmüyorsa, sağlık turizmi trafiği gelmiyor." },
          ]}
        />

        <RelatedBand
          eyebrow="Sağlık alanındaki diğer sayfalar"
          title="Yapınıza en uygun yaklaşımı inceleyin"
          text="Sağlık sektörünün farklı yapıları için ayrı sayfalarda daha detaylı bilgi veriyorum."
          links={[
            { icon: HeartPulse, title: "Sağlık ve klinik SEO", href: "/sektorel-seo-hizmetleri/saglik-ve-klinik-seo", text: "Poliklinik ve klinikler için güven odaklı SEO" },
            { icon: Stethoscope, title: "Doktorlar için SEO", href: "/sektorel-seo-hizmetleri/doktorlar-icin-seo-2", text: "Hekim adı ve branşıyla bulunmak" },
            { icon: Smile, title: "Diş hekimleri için SEO", href: "/sektorel-seo-hizmetleri/dis-hekimleri-icin-seo-2", text: "Tedavi ve semt aramalarında hasta kazanmak" },
          ]}
        />

        <GuideShell
          id="hastane-seo-rehberi"
          eyebrow="Hastane SEO rehberi"
          title="Hastaneler için SEO hakkında bilmeniz gerekenler"
          intro="Büyük ve çok branşlı bir hastane sitesinin Google'da nasıl daha iyi görüneceğini, hangi yapı kararlarının neden önemli olduğunu sade bir dille anlattım."
          toc={[
            { id: "hastane-seo-nedir", label: "Hastaneler için SEO nedir?" },
            { id: "site-mimarisi", label: "Bölüm ve doktor sayfası mimarisi" },
            { id: "teknik-seo", label: "Büyük sitelerde teknik SEO" },
            { id: "cok-lokasyon", label: "Çok lokasyonlu yerel SEO" },
            { id: "ymyl", label: "YMYL ve tıbbi içerik onayı" },
            { id: "saglik-turizmi", label: "Sağlık turizmi ve çok dilli yapı" },
          ]}
          cta={{ eyebrow: "Ücretsiz hastane analizi", title: "Hastaneniz bölüm aramalarında görünüyor mu?", text: "Sitenizin yapısını ve öncelikli bölümlerin durumunu inceleyip bir yol haritası çıkarayım.", label: "Ücretsiz analiz isteyin" }}
          faqTitle="Hastaneler için SEO hakkında sıkça sorulan sorular"
          faqItems={faqItems}
        >
          <div className="space-y-5">
            <GuideH2 id="hastane-seo-nedir">Hastaneler için SEO nedir?</GuideH2>
            <GuideDefinition>
              Hastaneler için SEO, çok branşlı ve çoğu zaman çok şubeli sağlık kuruluşlarının web sitelerinin; bölüm, doktor,
              tedavi ve şube aramalarında doğru sayfayla ve güvenilir bir kaynak olarak üst sıralarda yer alması için yapılan
              arama motoru optimizasyonu çalışmalarıdır.
            </GuideDefinition>
            <p>
              Temel prensipler bir klinik sitesiyle aynı; fark ölçekte. Bir hastane sitesinde binlerce sayfa, sürekli
              değişen bir doktor kadrosu, birden fazla şube ve farklı ekiplerin eklediği içerikler oluyor. Bu yüzden hastane
              SEO&apos;sunda en çok fark yaratan şey, sayfaların tek bir mantıkla düzenlenmesi ve bu düzenin zamanla
              bozulmaması.
            </p>
            <p>
              SEO&apos;nun genel mantığını <GuideLink href="/blog/seo-nedir">SEO nedir</GuideLink> yazımda anlattım.
              Burada hastanelere özgü kısımlara odaklanıyorum.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="site-mimarisi">Bölüm ve doktor sayfaları nasıl kurgulanmalı?</GuideH2>
            <p>
              Sağlıklı bir hastane sitesinde her bölümün güçlü bir ana sayfası olur; bu sayfadan alt uzmanlıklara, o
              bölümde tedavi edilen hastalıklara, uygulanan tedavilere ve bölümdeki doktorlara bağlantı verilir. Doktor
              sayfaları da geri dönüp bölüme ve çalıştıkları şubeye bağlanır. Bu düzen hem hastanın aradığını bulmasını
              kolaylaştırıyor hem de Google&apos;a hangi sayfanın neyle ilgili olduğunu açıkça anlatıyor.
            </p>
            <p>
              Planlama yapılmadığında en sık görülen sorun, aynı aramayı hedefleyen birden fazla sayfanın ortaya çıkması.
              Bu konuyu <GuideLink href="/blog/bir-sorgu-her-zaman-ayri-bir-sayfayi-hak-eder-mi">bir sorgu her zaman ayrı bir sayfayı hak eder mi</GuideLink>{" "}
              yazımda detaylı anlattım. Sayfalar arasındaki hiyerarşiyi göstermek için{" "}
              <GuideLink href="/blog/breadcrumb-nedir">breadcrumb</GuideLink> kullanmak da büyük sitelerde çok işe yarıyor.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="teknik-seo">Büyük hastane sitelerinde teknik SEO</GuideH2>
            <p>
              Sayfa sayısı arttıkça Google&apos;ın sitenizi tarama şekli daha önemli hale geliyor. Filtre ve arama
              sayfalarından türeyen gereksiz adresler, ayrılan doktorlardan kalan hata sayfaları, zincirleme yönlendirmeler
              ve yavaş açılan şablonlar, Google&apos;ın asıl önemli sayfalarınıza ayırdığı ilgiyi azaltıyor.
            </p>
            <p>
              Bu sorunları tespit etmek için <GuideLink href="/blog/google-search-console-nedir">Google Search Console</GuideLink>{" "}
              en temel araç. Yönlendirmeleri doğru kurmak için{" "}
              <GuideLink href="/blog/http-yonlendirme-kodlari-nelerdir">HTTP yönlendirme kodları</GuideLink>, taramayı
              yönetmek için <GuideLink href="/blog/robots-txt-nedir-ve-nasil-kullanilir">robots.txt</GuideLink> yazılarıma
              göz atabilirsiniz.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="cok-lokasyon">Çok lokasyonlu hastanelerde yerel SEO</GuideH2>
            <p>
              Birden fazla şubesi olan bir hastane, aslında birden fazla yerel işletme gibi düşünülmeli. Her şubenin kendi
              adresi, telefonu, çalışma saatleri, o şubede hizmet veren bölümleri ve doktorları olan ayrı bir sayfası
              olmalı. Her şubenin ayrı bir Google İşletme profili de bu sayfaya bağlanmalı.
            </p>
            <p>
              Şube bilgilerinin rehber sitelerde, haritalarda ve sosyal profillerde aynı şekilde yazması, Google&apos;ın
              hangi şubenin nerede olduğunu doğru anlamasını sağlıyor. Konunun temellerini{" "}
              <GuideLink href="/blog/yerel-seo-nedir">yerel SEO nedir</GuideLink> ve{" "}
              <GuideLink href="/blog/google-my-business-nedir">Google İşletme profili</GuideLink> yazılarımda anlattım.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="ymyl">YMYL ve tıbbi içerik onayı</GuideH2>
            <p>
              YMYL (Your Money or Your Life), Google&apos;ın insanların sağlığını, parasını ya da güvenliğini etkileyebilecek
              konular için kullandığı bir ifade. Sağlık içerikleri bu grubun merkezinde yer alıyor; Google bu içeriklerde
              yazarın uzmanlığına, kaynakların güvenilirliğine ve bilginin güncelliğine çok daha sıkı bakıyor.
            </p>
            <p>
              Hastanelerde içerik çoğu zaman pazarlama ekibinden çıkıyor; bu yüzden her tıbbi içeriğin ilgili hekimin
              onayından geçtiği, sayfada kimin kontrol ettiğinin ve ne zaman güncellendiğinin yazdığı bir süreç kurmak
              şart. Google&apos;ın kalite anlayışını{" "}
              <GuideLink href="/blog/google-raters-guideline-nedir">Google Raters Guideline nedir</GuideLink>, yazar
              uzmanlığının önemini ise <GuideLink href="/blog/yazar-otoritesi-nedir-seodaki-onemi-nedir">yazar otoritesi nedir</GuideLink>{" "}
              yazımda anlattım.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="saglik-turizmi">Sağlık turizmi ve çok dilli yapı</GuideH2>
            <p>
              Yurt dışından hasta kabul eden hastanelerde Türkçe sitenin birebir çevirisi genelde yeterli olmuyor. Her
              ülkenin hastası farklı kelimelerle arama yapıyor, farklı sorular soruyor ve farklı güven unsurlarına bakıyor.
              Bu yüzden her dil için ayrı anahtar kelime araştırması ve o ülkenin hastasına göre yazılmış sayfalar gerekiyor.
            </p>
            <p>
              Teknik tarafta her dil sürümünün doğru dil etiketleriyle birbirine bağlanması, Google&apos;ın hangi ülkedeki
              kullanıcıya hangi sürümü göstereceğini anlamasını sağlıyor. Hedef ülkedeki aramaları anlamak için{" "}
              <GuideLink href="/blog/anahtar-kelime-nedir">anahtar kelime nedir</GuideLink> yazımdan başlayabilirsiniz.
            </p>
          </div>
        </GuideShell>
      </ServicePageLayout>
    </>
  );
}
