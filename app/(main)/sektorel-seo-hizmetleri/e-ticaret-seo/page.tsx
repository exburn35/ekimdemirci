import { Metadata } from "next";
import {
  ListTree,
  SlidersHorizontal,
  ShoppingBag,
  Copy,
  PackageX,
  Braces,
  Gauge,
  EyeOff,
  Store,
  TrendingDown,
  Search,
  Bot,
  Wrench,
  FileText,
  Sparkles,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ServicePageLayout from "@/components/ServicePageLayout";
import SerpDemo from "@/components/service/SerpDemo";
import {
  CaseSpotlight,
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
  title: "E-Ticaret SEO Danışmanlığı",
  description: "Online mağazalar için e-ticaret SEO danışmanlığı. Kategori ve filtre yapısı, ürün sayfaları, ürün şeması ve site hızıyla mağazanızın satın almaya hazır aramalarda görünmesini sağlıyorum.",
  alternates: {
    canonical: "/sektorel-seo-hizmetleri/e-ticaret-seo",
  },
  openGraph: {
    title: "E-Ticaret SEO Danışmanlığı | Ekim Demirci",
    description: "Kategori sayfalarından ürün şemasına, stoktan kalkan ürünlerden site hızına kadar mağazanızın Google'da satış getiren aramalarda görünmesi için SEO danışmanlığı.",
  },
  twitter: {
    title: "E-Ticaret SEO Danışmanlığı | Ekim Demirci",
    description: "Kategori sayfalarından ürün şemasına, stoktan kalkan ürünlerden site hızına kadar mağazanızın Google'da satış getiren aramalarda görünmesi için SEO danışmanlığı.",
  },
};

const faqItems: Faq[] = [
  {
    question: "Önce kategori sayfaları mı, ürün sayfaları mı optimize edilmeli?",
    answer: "Çoğu mağazada önceliği kategori sayfalarına veriyorum. “Kadın koşu ayakkabısı” gibi geniş ve yüksek hacimli aramalar genellikle kategori sayfalarıyla eşleşiyor. Ürün sayfaları ise model adı ve özellikle yapılan aramalarda öne çıkıyor; en çok satan ve en yüksek kâr bırakan ürünleri paralel olarak ele alıyorum.",
  },
  {
    question: "Filtre sayfaları Google'da indekslenmeli mi?",
    answer: "Hepsi değil. Renk, beden, fiyat ve marka filtrelerinin birleşimiyle binlerce adres oluşabiliyor; bunların çoğu kimsenin aramadığı, birbirinin kopyası sayfalar. Gerçekten aranan birkaç filtre kombinasyonunu (örneğin “siyah deri bot”) indekslenebilir hale getiriyor, geri kalanı canonical, noindex ya da tarama kurallarıyla kontrol altına alıyorum.",
  },
  {
    question: "Stoktan kalkan ürünlerin sayfasını silmeli miyim?",
    answer: "Duruma göre değişiyor. Ürün yakında geri gelecekse sayfayı yayında tutup stok bilgisini güncellemek en iyisi. Kalıcı olarak kalkıyorsa ve sayfa trafik ya da bağlantı alıyorsa, en yakın ürüne veya kategoriye yönlendiriyorum. Hiç ziyaret almayan eski sayfalar ise kaldırılabilir. Önemli olan, binlerce ürünün habersizce hata sayfasına dönmemesi.",
  },
  {
    question: "Üreticinin ürün açıklamalarını kullanmak sorun olur mu?",
    answer: "Aynı açıklama onlarca sitede birebir yer aldığında Google'ın sizin sayfanızı öne çıkarması için bir neden kalmıyor. Bütün ürünleri tek tek yeniden yazmak her zaman mümkün değil; bu yüzden önce satış getiren ürünlerden başlıyor, geri kalanlar için ürün özelliklerinden beslenen, kategoriye özgü şablonlar kurguluyorum.",
  },
  {
    question: "Ürün şeması ne işe yarar?",
    answer: "Ürün şeması, fiyat, stok durumu ve ürün bilgilerini Google'ın doğrudan okuyabileceği şekilde işaretler. Böylece ürününüz arama sonuçlarında ve Google Alışveriş alanlarında daha zengin görünebilir. Yıldız ve puan bilgisini ise yalnızca sitenizdeki gerçek müşteri yorumlarına dayanıyorsa ekliyorum.",
  },
  {
    question: "Pazaryerleriyle rekabet etmek mümkün mü?",
    answer: "Geniş aramalarda büyük pazaryerlerini geçmek zor ve zaman alıyor. Ama daha net aramalarda, niş kategorilerde ve uzmanlık gerektiren ürünlerde kendi mağazanızla öne çıkmak mümkün. Pazaryerlerinin genel kategori sayfalarının veremediği detaylı bilgi, karşılaştırma ve rehber içerikleri bu noktada fark yaratıyor.",
  },
  {
    question: "Hangi e-ticaret altyapılarıyla çalışıyorsunuz?",
    answer: "Shopify, WooCommerce, Ticimax, T-Soft, İkas ve IdeaSoft gibi hazır altyapılarla da özel yazılımlı mağazalarla da çalışıyorum. Her altyapının canonical, adres yapısı ve filtre yönetimi konusunda kendi sınırları var; önce bu sınırları inceleyip neyin altyapı içinde, neyin geliştirme gerektirdiğini netleştiriyorum.",
  },
  {
    question: "E-ticaret SEO'sunun sonuçları ne kadar sürede görülür?",
    answer: "Teknik ve kategori düzenlemelerinin etkisi çoğu zaman ilk birkaç ay içinde Search Console verisinde görülmeye başlıyor. Rekabetçi kategorilerde kalıcı sıralama ve satışa yansıması ise genellikle altı ay ile bir yıl arasında oturuyor. Mağazanın büyüklüğü ve rekabet düzeyi bu süreyi belirgin şekilde etkiliyor.",
  },
];

export default function ECommerceSEOPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Sektörel SEO Hizmetleri", href: "/sektorel-seo-hizmetleri" },
        { name: "E-Ticaret SEO", href: "/sektorel-seo-hizmetleri/e-ticaret-seo" }
      ]} />
      <ServicePageLayout
        title="E-Ticaret SEO Danışmanlığı"
        subtitle="Satın almaya hazır müşterinin bulduğu mağaza"
        description="Bir müşteri ürün ararken önce Google'a yazıyor; kategorileri geziyor, fiyatları karşılaştırıyor, stokta olup olmadığına bakıyor. Ben mağazanızın bu aramalarda karşısına çıkması için kategori ve filtre yapınızı, ürün sayfalarınızı ve sitenizin teknik altyapısını birlikte ele alıyorum. Amacım daha fazla ziyaretçiden çok, daha fazla sipariş."
        canonicalUrl="https://ekimdemirci.com/sektorel-seo-hizmetleri/e-ticaret-seo"
        afterHeroNode={
          <DemoSection
            id="kategori-gorunurlugu"
            eyebrow="Google sonuçları"
            title="Müşteri kategoriyi arıyor. Karşısına mağazanız çıksın."
            intro="E-ticarette en değerli aramaların çoğu kategori aramaları: müşteri henüz modeli seçmemiş, seçeneklere bakıyor. Bu aramalarda ilk sırada pazaryerleri ve büyük mağazalar var; doğru kurulmuş bir kategori sayfasıyla siz de o listeye girebilirsiniz."
            window={
              <DemoWindow label="google.com">
                <SerpDemo
                  query="kadın koşu ayakkabısı"
                  results={[
                    { domain: "buyukpazaryeri.com", title: "Kadın Koşu Ayakkabısı Modelleri ve Fiyatları", snippet: "Binlerce model, hızlı kargo ve kampanyalı fiyatlar." },
                    { domain: "sporzinciri.com.tr", title: "Kadın Koşu Ayakkabıları | Spor Zinciri", snippet: "Yeni sezon koşu ayakkabıları mağazada ve online." },
                    { domain: "kosudergisi.com", title: "2026'nın En İyi Kadın Koşu Ayakkabıları", snippet: "Yol ve arazi koşusu için öne çıkan modelleri inceledik." },
                    { domain: "indirimdunyasi.com", title: "Kadın Koşu Ayakkabısı İndirimleri", snippet: "Farklı mağazalardaki fiyatları karşılaştırın." },
                    { domain: "magazaniz.com", title: "Kadın Koşu Ayakkabısı | Yol, Arazi ve Günlük Koşu", snippet: "Ayak tipine ve koşu mesafesine göre seçim rehberiyle, stokta olan modeller.", brand: true },
                  ]}
                />
              </DemoWindow>
            }
            side={
              <DemoSide
                title="Kategori sayfası, mağazanın vitrini"
                text="Ben de bir şey alacağım zaman çoğu zaman genel bir aramayla başlıyorum ve ilk sayfadaki birkaç mağazaya bakıyorum. Kategori sayfası zayıf olan bir mağaza, ürünleri ne kadar iyi olursa olsun bu karşılaştırmaya hiç giremiyor."
                points={[
                  "Kategori ve filtre yapısını aramalara göre kurmak",
                  "Kopya ve gereksiz sayfaları kontrol altına almak",
                  "Ürün sayfalarını özgün bilgilerle güçlendirmek",
                  "Ürün şeması ve hızla sonuçlarda öne çıkmak",
                ]}
                ctaTitle="Mağazanız kategori aramalarında kaçıncı sırada?"
                ctaText="Mağazanızın kategori ve ürün aramalarındaki durumunu inceleyip en hızlı satış getirebilecek fırsatları raporlayayım."
                ctaLabel="Ücretsiz mağaza analizi iste"
              />
            }
          />
        }
        icon="Settings"
        gradient="from-purple-500 to-pink-500"
        blogCategory="SEO Hizmetleri"
      >
        <ScopeGrid
          title="E-ticaret SEO'sunda neler yapıyorum?"
          intro="E-ticaret sitelerinde sorunlar genellikle tek tek sayfalarda değil, binlerce sayfayı etkileyen yapıda saklı. Çalışmayı önce yapıyı düzelterek, sonra satış getiren sayfaları güçlendirerek ilerletiyorum."
          items={[
            { icon: ListTree, title: "Kategori yapısını aramalara göre kuruyorum", text: "Müşterilerin gerçekte nasıl aradığına bakarak ana ve alt kategorileri düzenliyorum. Aranan ama mağazanızda karşılığı olmayan kategorileri belirliyor, kategori sayfalarına müşterinin işine yarayan kısa ve özgün metinler ekliyorum." },
            { icon: SlidersHorizontal, title: "Filtre sayfalarını kontrol altına alıyorum", text: "Renk, beden, fiyat ve marka filtreleri binlerce gereksiz adres üretebiliyor. Gerçekten aranan filtre kombinasyonlarını sayfaya dönüştürüyor, geri kalanların Google'ın zamanını boşa harcamasını engelliyorum." },
            { icon: ShoppingBag, title: "Ürün sayfalarını güçlendiriyorum", text: "Başlık, açıklama, görsel, teknik özellik ve sık sorulan sorularla ürün sayfalarını hem müşteri hem Google için daha anlaşılır hale getiriyorum. İşe en çok satan ve en yüksek kâr bırakan ürünlerden başlıyorum." },
            { icon: Copy, title: "Tekrar eden içerikleri temizliyorum", text: "Üreticiden gelen aynı açıklamalar, renk ya da beden için açılmış ayrı ürün sayfaları ve aynı ürünün birden fazla adresi. Bu tekrarları canonical, birleştirme ve şablon düzenlemeleriyle çözüyorum." },
            { icon: PackageX, title: "Stoktan kalkan ürünleri yönetiyorum", text: "Geçici olarak tükenen, kalıcı olarak kaldırılan ve sezonluk ürünler için ayrı kurallar belirliyorum. Böylece yıllarca emek verilmiş sayfaların değeri hata sayfalarında kaybolmuyor." },
            { icon: Braces, title: "Ürün şeması ve hız üzerinde çalışıyorum", text: "Fiyat, stok ve ürün bilgilerini yapılandırılmış veriyle işaretliyor, mobilde yavaş açılan kategori ve ürün sayfalarını hızlandırıyorum. Çoğu sipariş telefondan geldiği için hız doğrudan satışı etkiliyor." },
          ]}
        />

        <ProcessTimeline
          title="E-ticaret SEO çalışması adım adım nasıl ilerliyor?"
          intro="Önce mağazanızın yapısını ve satış verisini birlikte inceliyoruz. Ardından teknik düzenlemeler ve kategori içerikleri paralel olarak ilerliyor."
          ctaLabel="Ücretsiz mağaza analiziyle başlayalım"
          steps={[
            {
              tag: "1. ve 2. hafta",
              title: "Mağaza analizi ve yol haritası",
              paragraphs: [
                "Sitenizi baştan sona tarıyor; kategori yapısını, filtre adreslerini, kopya sayfaları, stoktan kalkan ürünleri ve hız sorunlarını tespit ediyorum. Search Console verisiyle hangi kategorilerin ve ürünlerin zaten görünür olduğunu, hangilerinin rakiplerin gerisinde kaldığını çıkarıyorum.",
                "Bu bulguları satış verinizle yan yana koyuyorum. Yol haritasında önce en çok ciro getirebilecek kategoriler yer alıyor; hangi kategorilerle başlayacağımıza birlikte karar veriyoruz.",
              ],
            },
            {
              tag: "Paralel yürür",
              tone: "accent",
              title: "Teknik düzenlemeler",
              paragraphs: [
                "Filtre ve parametre kurallarını, canonical yapısını, yönlendirmeleri, ürün şemasını ve site hızını düzenliyorum. Bu işlerin bir kısmı altyapı panelinden, bir kısmı yazılım desteğiyle yapılıyor.",
                "Yazılımcınız ya da altyapı firmanız için yapılması gerekenleri öncelik sırasıyla ve net şekilde yazıyor, uygulamadan sonra her değişikliği kontrol ediyorum.",
              ],
            },
            {
              tag: "1. aydan itibaren",
              title: "Kategori ve ürün içerikleri",
              paragraphs: [
                "Öncelikli kategorilerin başlıklarını, açıklama metinlerini ve iç bağlantılarını yeniden kurguluyorum. Ardından en çok satan ürünlerin sayfalarını özgün açıklamalar, teknik bilgiler ve müşterilerin sık sorduğu sorularla güçlendiriyorum.",
                "Gerektiğinde satın alma kararını kolaylaştıran rehber içerikleri de planlıyorum: hangi ürün kime uygun, nasıl seçilir, hangi modeller arasında fark var.",
              ],
            },
            {
              tag: "Ayrı bütçelendirilir",
              tone: "amber",
              title: "Backlink ve dijital PR",
              paragraphs: [
                "Sektör blogları, haber siteleri ve ürün inceleme sitelerinde mağazanızın ve ürünlerinizin yer alması, rekabetçi kategorilerde fark yaratıyor. Bu yayın çalışmalarının maliyeti siteye göre değiştiği için ayrıca bütçelendiriliyor; onayınız olmadan hiçbir harcama yapılmıyor.",
              ],
            },
            {
              tag: "Her ay",
              title: "Satış odaklı ölçüm",
              paragraphs: [
                "Sıralama ve trafiğin yanında organik kanaldan gelen siparişleri, ciroyu ve kategori bazında dönüşüm oranlarını takip ediyorum. Raporu bu sonuçlara göre hazırlıyor, bir sonraki ayın önceliklerini buna göre belirliyorum.",
              ],
            },
          ]}
        />

        <ExampleGrid
          title="Mağazanızda bu cümleler kuruluyorsa, e-ticaret SEO'su zamanı"
          intro="E-ticaret sitelerinde organik satış sorunları genellikle şu şekilde dile geliyor:"
          quoteStyle="speech"
          items={[
            { icon: EyeOff, title: "Kategori aramalarında görünmemek", quote: "Ürünümüzü aratınca hep pazaryerleri çıkıyor", text: "Kategori sayfası zayıfsa Google aramayı başkalarının sayfalarıyla cevaplıyor. Doğru kurulmuş kategori sayfaları bu aramalarda yer açıyor." },
            { icon: Store, title: "Pazaryeri bağımlılığı", quote: "Satışların çoğu pazaryerinden geliyor, komisyon her şeyi yiyor", text: "Kendi mağazanıza gelen organik trafik, komisyonsuz ve müşteriyle doğrudan ilişki kurduğunuz bir satış kanalı demek." },
            { icon: Copy, title: "Tekrar eden açıklamalar", quote: "Ürün açıklamalarını üreticinin sitesinden aldık", text: "Aynı metin onlarca sitede varsa, Google'ın sizin sayfanızı seçmesi için bir neden kalmıyor." },
            { icon: Search, title: "Gereksiz sayfa kalabalığı", quote: "Search Console'da on binlerce sayfa görünüyor, ürünümüz birkaç bin", text: "Filtre ve parametre adresleri kontrolsüz çoğaldığında Google asıl önemli sayfalara daha az zaman ayırıyor." },
            { icon: TrendingDown, title: "Altyapı değişikliği sonrası kayıp", quote: "Yeni altyapıya geçtikten sonra satışlar düştü", text: "Eski ürün ve kategori adreslerinin doğru yönlendirilmemesi, birikmiş görünürlüğü bir gecede silebiliyor." },
            { icon: Bot, title: "Yapay zekada görünmemek", quote: "ChatGPT'ye ürün önerisi sorunca bizim mağaza geçmiyor", text: "Müşteriler artık ürün seçerken yapay zekaya da danışıyor. Net ürün bilgisi ve rehber içerikler bu cevaplarda yer almanızı destekliyor." },
          ]}
        />

        <CaseSpotlight
          eyebrow="Öne çıkan vaka"
          title="Motosiklet aksesuar mağazası: üç ayda gösterimler iki katından fazla"
          text="Geniş bir ürün yelpazesine rağmen yüksek hacimli aramalarda görünürlüğü çok sınırlı olan bir motosiklet aksesuarı ve giyim mağazasında önce site hızını iyileştirdim. Ardından müşterilerin arama niyetlerini gruplandırarak yeni kategori yapıları kurdum ve iç bağlantıları güçlendirdim. Üç ayın sonunda organik tıklamalar 18.900'den 31.600'e, gösterimler 451 binden 1,02 milyona çıktı."
          image="/motosiklet-aksesuar-kiyas.png"
          imageAlt="Motosiklet aksesuar mağazasının üç aylık Google Search Console karşılaştırma grafiği"
          stats={[
            { value: "+%67,60", label: "Organik tıklama (3 ay)" },
            { value: "+%125,30", label: "Organik gösterim (3 ay)" },
          ]}
          siteUrl="/basari-hikayeleri/motosiklet-aksesuarlari-magazasi"
          siteLabel="Vakanın detaylarını inceleyin"
        />

        <ProofBand
          title="E-ticaret projelerinden diğer sonuçlar"
          results={[
            { code: "Kategori ve filtre", metric: "+%147", label: "Organik tıklama artışı", detail: "Yedi aylık kategori ve filtre optimizasyonu sürecinde bir e-ticaret sitesinde elde edilen organik tıklama artışı.", source: "Google Search Console, 2025" },
            { code: "Ayakkabı mağazası", metric: "+%29,42", label: "Organik tıklama artışı", detail: "Kategori mimarisi, ürün açıklamaları ve ürün şeması çalışmalarıyla üç ayda tıklamalar 62.100'den 80.400'e, gösterimler %23,07 arttı.", source: "Google Search Console, 3 ay" },
            { code: "Ürün şeması", metric: "+%34", label: "Tıklama oranı katkısı", detail: "Ürün ve fiyat bilgisini işaretleyen yapılandırılmış veri çalışması sonrasında arama sonuçlarındaki tıklama oranında görülen artış.", source: "Ekim Demirci vaka çalışmaları" },
          ]}
        />

        <RelatedBand
          eyebrow="İlgili hizmetler"
          title="E-ticaret SEO'yu tamamlayan çalışmalar"
          text="Mağazalarda teknik altyapı, sayfa içi düzenlemeler ve yapay zeka görünürlüğü birbirine bağlı. İhtiyacınıza göre bu alanlara ayrı ayrı da odaklanabiliyorum."
          links={[
            { icon: Wrench, title: "Teknik SEO", href: "/seo-hizmetleri/teknik-seo", text: "Tarama, filtre ve hız sorunları" },
            { icon: FileText, title: "Sayfa içi SEO", href: "/seo-hizmetleri/sayfa-ici-seo", text: "Kategori ve ürün sayfası düzenlemeleri" },
            { icon: Sparkles, title: "Yapay zeka SEO", href: "/seo-hizmetleri/yapay-zeka-seo", text: "Ürün önerilerinde mağazanızın adı" },
          ]}
        />

        <GuideShell
          id="e-ticaret-seo-rehberi"
          eyebrow="E-ticaret SEO rehberi"
          title="E-ticaret SEO'su hakkında bilmeniz gerekenler"
          intro="Online mağazalarda SEO'nun nasıl işlediğini, hangi sayfaların satış getirdiğini ve en sık yapılan hatalardan nasıl kaçınacağınızı sade bir dille anlattım."
          toc={[
            { id: "e-ticaret-seo-nedir", label: "E-ticaret SEO'su nedir?" },
            { id: "kategori-filtre", label: "Kategori ve filtre yapısı" },
            { id: "urun-sayfalari", label: "Ürün sayfaları ve tekrar eden içerik" },
            { id: "stok", label: "Stoktan kalkan ürünler" },
            { id: "sema-hiz", label: "Ürün şeması ve site hızı" },
            { id: "pazaryeri", label: "Pazaryerleriyle rekabet" },
          ]}
          cta={{ eyebrow: "Ücretsiz mağaza analizi", title: "Müşteriler mağazanızı Google'da bulabiliyor mu?", text: "Mağazanızın kategori ve ürün aramalarındaki durumunu inceleyip fırsatları raporlayayım.", label: "Ücretsiz analiz isteyin" }}
          faqTitle="E-ticaret SEO'su hakkında sıkça sorulan sorular"
          faqItems={faqItems}
        >
          <div className="space-y-5">
            <GuideH2 id="e-ticaret-seo-nedir">E-ticaret SEO&apos;su nedir?</GuideH2>
            <GuideDefinition>
              E-ticaret SEO&apos;su, online mağazaların kategori ve ürün sayfalarının, satın almaya hazır müşterilerin
              yaptığı aramalarda üst sıralarda yer alması ve bu ziyaretlerin siparişe dönüşmesi için yapılan arama
              motoru optimizasyonu çalışmalarıdır.
            </GuideDefinition>
            <p>
              Bir kurumsal sitede onlarca sayfa olur; bir mağazada ise binlerce, bazen yüz binlerce. Kategoriler,
              filtreler, ürün varyasyonları ve sezonluk ürünler sürekli yeni adresler üretir. Bu yüzden e-ticarette
              SEO, tek tek sayfaları düzeltmekten çok, bütün mağazayı etkileyen yapıyı doğru kurmakla ilgilidir.
            </p>
            <p>
              Adım adım bir yol haritası arıyorsanız{" "}
              <GuideLink href="/blog/e-ticaret-seo-nasil-yapilir">e-ticaret SEO nasıl yapılır</GuideLink> yazımda
              süreci daha detaylı anlattım.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="kategori-filtre">Kategori ve filtre sayfaları nasıl kurulmalı?</GuideH2>
            <p>
              Kategori sayfaları, mağazanın en çok trafik getiren sayfalarıdır; çünkü insanlar çoğu zaman marka ya da
              model adıyla değil, &ldquo;erkek deri bot&rdquo; ya da &ldquo;kadın koşu ayakkabısı&rdquo; gibi genel
              ifadelerle arar. Kategori yapısını mağazanın iç düzenine göre değil, müşterilerin bu arama alışkanlıklarına
              göre kurmak gerekiyor.
            </p>
            <p>
              Filtreler ise iki ucu keskin bir bıçak. Doğru kullanıldığında &ldquo;su geçirmez kadın botu&rdquo; gibi
              değerli aramalara ayrı bir sayfayla cevap verebilirsiniz. Kontrolsüz bırakıldığında ise renk, beden ve
              fiyat filtrelerinin her birleşimi yeni bir adres üretir ve Google zamanını kimsenin aramadığı binlerce
              sayfada harcar. Bu adreslerin nasıl kontrol edildiğini{" "}
              <GuideLink href="/blog/robots-txt-nedir-ve-nasil-kullanilir">robots.txt</GuideLink> ve{" "}
              <GuideLink href="/blog/breadcrumb-nedir">breadcrumb</GuideLink> yazılarımda da ele aldım.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="urun-sayfalari">Ürün sayfaları ve tekrar eden açıklamalar</GuideH2>
            <p>
              Mağazaların çoğu ürün açıklamalarını üreticiden ya da tedarikçiden hazır alıyor. Aynı metin onlarca
              sitede birebir yer aldığında, Google&apos;ın sizin sayfanızı öne çıkarması için bir neden kalmıyor.
              Aynı ürünün her rengi ya da bedeni için ayrı sayfa açılması da benzer bir kopya sorunu yaratıyor.
            </p>
            <p>
              Binlerce ürünü tek tek yeniden yazmak çoğu zaman gerçekçi değil. Bu yüzden önce en çok satan ve en çok
              aranan ürünlerden başlıyor, geri kalanlar için ürün özelliklerinden beslenen ve kategoriye özgü bilgiler
              içeren şablonlar kuruyorum. İyi bir ürün sayfasında şunlar bulunur:
            </p>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                ["Net bir başlık", "Marka, model ve müşterinin aradığı temel özellik bir arada."],
                ["Özgün açıklama", "Ürünün kime ve hangi kullanım için uygun olduğunu anlatan, kendi cümleleriniz."],
                ["Teknik özellikler", "Ölçü, malzeme, beden tablosu gibi bilgiler; görsele gömülmeden, metin olarak."],
                ["Sorular ve yorumlar", "Müşterilerin sık sorduğu sorular ve gerçek müşteri yorumları."],
              ].map(([t, x]) => (
                <li key={t} className="rounded-2xl border border-line bg-canvas p-4">
                  <p className="font-semibold text-ink">{t}</p>
                  <p className="mt-1 text-[15px] leading-relaxed">{x}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <GuideH2 id="stok">Stoktan kalkan ürünler nasıl yönetilmeli?</GuideH2>
            <p>
              Her mağazada ürünler tükeniyor, sezon değişiyor, bazı modeller kalıcı olarak kaldırılıyor. Bu sayfaların
              kontrolsüzce silinmesi, yıllar içinde biriken görünürlüğün ve başka sitelerden gelen bağlantıların
              kaybolması anlamına geliyor. Ziyaretçi de aradığı ürün yerine bir hata sayfasıyla karşılaşıyor.
            </p>
            <p>
              Geçici olarak tükenen ürünlerde sayfayı yayında tutup stok bilgisini güncellemek, kalıcı olarak kalkan
              ve hâlâ ziyaret alan ürünlerde en yakın ürüne ya da kategoriye yönlendirmek genellikle en sağlıklı yol.
              Hangi yönlendirme kodunun ne anlama geldiğini{" "}
              <GuideLink href="/blog/http-yonlendirme-kodlari-nelerdir">HTTP yönlendirme kodları</GuideLink>{" "}
              yazımda anlattım.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="sema-hiz">Ürün şeması ve site hızı neden önemli?</GuideH2>
            <p>
              Ürün şeması, fiyat, stok durumu ve ürün bilgilerini Google&apos;ın doğrudan okuyabileceği bir dille
              işaretler. Bu sayede ürününüz arama sonuçlarında fiyat ve stok bilgisiyle daha dikkat çekici
              görünebilir. Puan ve yıldız bilgisini ise yalnızca sitenizdeki gerçek müşteri yorumlarına dayanıyorsa
              eklemek gerekiyor. Konunun temellerini{" "}
              <GuideLink href="/blog/yapilandirilmis-veri-nedir">yapılandırılmış veri nedir</GuideLink> yazımda
              bulabilirsiniz.
            </p>
            <p>
              Hız tarafında en yaygın sorunlar; büyük ürün görselleri, çok sayıda eklenti ve uygulama ile mobilde
              geç yüklenen kategori sayfaları. Siparişlerin büyük kısmı telefondan geldiği için bu sorunlar doğrudan
              satışı etkiliyor. Sitenizin durumunu{" "}
              <GuideLink href="/blog/pagespeed-insight-nedir-nasil-kullanilir">PageSpeed Insights</GuideLink> ile
              kendiniz de kontrol edebilirsiniz.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="pazaryeri">Pazaryerleriyle nasıl rekabet edilir?</GuideH2>
            <p>
              Geniş aramalarda büyük pazaryerlerinin önüne geçmek kolay değil; çok sayıda ürünleri, güçlü alan adları
              ve büyük bütçeleri var. Ama her aramada aynı güce sahip değiller. Daha net aramalarda, niş kategorilerde
              ve uzmanlık gerektiren ürünlerde kendi mağazanızla öne çıkmak mümkün.
            </p>
            <p>
              Pazaryerlerinin genel kategori sayfaları ürünleri listeler ama çoğu zaman müşterinin sorusuna cevap
              vermez. Ürün seçim rehberleri, karşılaştırmalar ve kendi deneyiminizden gelen bilgiler, sizi bu
              listelerden ayıran şey oluyor. Bu tür içeriklerin değeri için{" "}
              <GuideLink href="/blog/information-gain-nedir">information gain nedir</GuideLink> yazıma göz
              atabilirsiniz.
            </p>
          </div>
        </GuideShell>
      </ServicePageLayout>
    </>
  );
}
