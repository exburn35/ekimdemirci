import { Metadata } from "next";
import {
  Brain,
  FileSearch,
  Heading1,
  Image as ImageIcon,
  Link2,
  MousePointerClick,
  Network,
  Copy,
  FileQuestion,
  TrendingDown,
  Layers,
  Signpost,
  Wrench,
  ShieldCheck,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ServicePageLayout from "@/components/ServicePageLayout";
import OnPageDemo from "@/components/sayfa-ici-seo/OnPageDemo";
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
  title: "Sayfa İçi (On-Page) SEO Danışmanlığı",
  description: "Sayfalarınızı müşterilerinizin aradığı kelimelerle doğru eşleştiren sayfa içi SEO danışmanlığı: arama niyeti, başlık ve açıklamalar, içerik yapısı ve iç bağlantılar. Ücretsiz analiz isteyin.",
  alternates: {
    canonical: "/seo-hizmetleri/sayfa-ici-seo",
  },
  openGraph: {
    title: "Sayfa İçi (On-Page) SEO Danışmanlığı | Ekim Demirci",
    description: "Her sayfanızı doğru aramaya doğru cevabı veren bir yapıya kavuşturan sayfa içi SEO danışmanlığı.",
  },
  twitter: {
    title: "Sayfa İçi (On-Page) SEO Danışmanlığı | Ekim Demirci",
    description: "Her sayfanızı doğru aramaya doğru cevabı veren bir yapıya kavuşturan sayfa içi SEO danışmanlığı.",
  },
};

const faqItems: Faq[] = [
  {
    question: "Sayfa içi SEO nedir?",
    answer: "Sayfa içi SEO (on-page SEO), bir web sayfasının hedeflediği aramada üst sıralara çıkması için sayfanın kendisinde yapılan iyileştirmelerin bütünü. İçeriğin arama niyetine uygunluğu, başlık ve açıklamalar, sayfa yapısı, iç bağlantılar ve görseller bu kapsamda yer alıyor.",
  },
  {
    question: "Sayfa içi SEO ile site dışı SEO arasındaki fark nedir?",
    answer: "Sayfa içi SEO, kendi sitenizde kontrol edebildiğiniz her şeyle ilgilenir: içerik, başlıklar, yapı. Site dışı SEO ise sitenizin dışında olanlarla; başka sitelerden aldığınız bağlantılar ve markanızın internette nasıl anıldığıyla. İkisi birbirini tamamlar.",
  },
  {
    question: "Arama niyeti neden bu kadar önemli?",
    answer: "Çünkü Google, kullanıcının asıl ne istediğini anlamaya çalışıyor. \"İmplant fiyatları\" arayan biri fiyat bilgisi beklerken, \"implant nedir\" arayan biri bilgi arıyor. Sayfanız bu beklentiyi karşılamıyorsa, ne kadar iyi yazılmış olursa olsun üst sıralarda kalması zor.",
  },
  {
    question: "İç bağlantılar sıralamayı nasıl etkiler?",
    answer: "İç bağlantılar hem ziyaretçinin sitede kolayca dolaşmasını sağlar hem de Google'a hangi sayfaların önemli olduğunu ve sayfaların birbiriyle nasıl ilişkili olduğunu gösterir. Doğru kurulmuş bir iç bağlantı yapısı, önemli sayfalarınızın gücünü artırır.",
  },
  {
    question: "Mevcut içerikleri mi güncellemeli, yeni içerik mi yazmalıyım?",
    answer: "Çoğu zaman önce mevcut içerikleri güncellemek daha hızlı sonuç veriyor. Halihazırda Google'da görünen ama ilk sayfaya çıkamayan sayfalar, doğru düzenlemelerle kısa sürede yükselebiliyor. Eksik kalan konular için yeni içerik planı ise ikinci adımda geliyor.",
  },
  {
    question: "Sayfa içi SEO çalışmasının sonuçları ne zaman görülür?",
    answer: "Google'ın düzenlenen sayfaları yeniden taramasıyla birlikte değişiklikler genellikle birkaç hafta içinde sıralamalara yansımaya başlıyor. Rekabetçi kelimelerde kalıcı sonuç için ise sayfa içi çalışmanın teknik ve site dışı SEO ile birlikte yürütülmesi gerekiyor.",
  },
  {
    question: "Aynı konuda birden fazla sayfam varsa sorun olur mu?",
    answer: "Olabilir. Aynı aramayı hedefleyen birden fazla sayfa, Google'ın hangisini sıralayacağını şaşırmasına ve sayfaların birbirinin gücünü bölmesine yol açabiliyor. Bu durumu tespit edip sayfaları birleştiriyor ya da her birine farklı bir amaç veriyorum.",
  },
  {
    question: "İçerikleri siz mi yazıyorsunuz?",
    answer: "İçerik stratejisini ve her sayfanın taslak yapısını ben hazırlıyorum. İsterseniz içerikleri birlikte yazıyoruz ya da kendi ekibinizin yazdığı metinleri SEO açısından düzenliyorum. Detaylar için içerik yazımı sayfama göz atabilirsiniz.",
  },
];

export default function OnPageSEO() {
  return (
    <>
      <Breadcrumb items={[
        { name: "SEO Danışmanlığı", href: "/seo-danismanligi" },
        { name: "Site İçi SEO", href: "/seo-hizmetleri/sayfa-ici-seo" }
      ]} />
      <ServicePageLayout
        title="Sayfa İçi SEO Danışmanlığı"
        subtitle="Doğru sayfa, doğru aramada"
        description="Sitenizde iyi içerikler olabilir; ama her sayfa doğru aramaya doğru cevabı vermiyorsa Google onu öne çıkarmaz. Ben sayfalarınızı müşterilerinizin gerçekte ne aradığına göre yeniden düzenliyor; başlıklardan iç bağlantılara kadar her ayrıntıyı bu amaca göre kuruyorum."
        canonicalUrl="https://ekimdemirci.com/seo-hizmetleri/sayfa-ici-seo"
        afterHeroNode={
          <DemoSection
            id="sayfa-optimizasyonu"
            eyebrow="Sayfa optimizasyonu"
            title="Aynı sayfa, bambaşka bir arama sonucu."
            intro="Bir sayfanın Google'da nasıl göründüğü ve ne kadar tıklandığı büyük ölçüde sayfa içi ayrıntılara bağlı. Aşağıda zayıf kurgulanmış bir sayfanın adım adım nasıl güçlendiğini görebilirsiniz."
            window={
              <DemoWindow label="Sayfa içi SEO analizi">
                <OnPageDemo />
              </DemoWindow>
            }
            side={
              <DemoSide
                title="Küçük ayrıntılar, büyük fark"
                text="Bir arama sonucuna tıklayıp tıklamamaya çoğu zaman birkaç saniyede karar veriyoruz. Başlığı belirsiz, açıklaması olmayan bir sonuç, sıralaması iyi olsa bile görmezden geliniyor. Sayfa içi SEO, hem Google'ın sayfanızı doğru anlamasını hem de insanların ona tıklamasını sağlıyor."
                points={[
                  "Her sayfayı tek bir arama niyetiyle eşleştirmek",
                  "Tıklanmaya değer başlık ve açıklamalar yazmak",
                  "İçeriği kolay okunan bir yapıya kavuşturmak",
                  "Sayfalar arasında anlamlı bağlantılar kurmak",
                ]}
                ctaTitle="Sayfalarınız doğru kelimelerde mi yarışıyor?"
                ctaText="Önemli sayfalarınızı inceleyip hangi aramalarda daha üst sıralara çıkabileceğinizi raporlayayım."
                ctaLabel="Ücretsiz sayfa analizi iste"
              />
            }
          />
        }
        icon="FileText"
        gradient="from-orange-500 via-red-500 to-pink-500"
        blogCategory="sayfa-ici-seo"
      >
        <ScopeGrid
          title="Sayfa içi SEO danışmanlığında neler yapıyorum?"
          intro="Sayfa içi SEO, sitenizde doğrudan kontrol edebildiğiniz her şeyle ilgilenir. Amaç, her sayfanın hem Google tarafından doğru anlaşılması hem de ziyaretçinin aradığını hızla bulmasıdır."
          items={[
            { icon: FileSearch, title: "Müşterinizin ne aradığını buluyorum", text: "Hedef kitlenizin Google'a gerçekte hangi kelimeleri yazdığını ve bu aramalarda ne beklediğini araştırıyorum. Her önemli arama için hangi sayfanın cevap vereceğini belirleyen bir kelime haritası çıkarıyorum." },
            { icon: Brain, title: "İçeriği arama niyetine göre düzenliyorum", text: "Bilgi arayan birine satış sayfası, fiyat arayan birine uzun bir makale göstermek işe yaramaz. Her sayfanın içeriğini, o aramayı yapan kişinin beklentisine göre yeniden kurguluyorum." },
            { icon: MousePointerClick, title: "Tıklanan başlık ve açıklamalar yazıyorum", text: "Arama sonuçlarında görünen başlık ve açıklama, sayfanızın vitrini. Hem anahtar kelimeyi içeren hem de tıklamaya teşvik eden, her sayfaya özel başlık ve açıklamalar hazırlıyorum." },
            { icon: Heading1, title: "Sayfa yapısını netleştiriyorum", text: "Başlık hiyerarşisi (H1, H2, H3), paragraf düzeni ve sorulara verilen cevapların yeri; hem okuyucunun hem de Google'ın sayfayı kolayca anlamasını sağlıyor. Karmaşık sayfaları sade ve taranabilir hale getiriyorum." },
            { icon: Network, title: "İç bağlantı ağını kuruyorum", text: "Sayfalarınız arasındaki bağlantılar, Google'a hangi sayfaların önemli olduğunu ve konuların birbiriyle nasıl ilişkili olduğunu anlatır. Önemli sayfalarınızı güçlendirecek bir iç bağlantı düzeni oluşturuyorum." },
            { icon: ImageIcon, title: "Görselleri optimize ediyorum", text: "Doğru adlandırılmış, açıklayıcı alt metni olan ve hızlı yüklenen görseller hem görsel aramalarda trafik getirir hem de sayfanın genel kalitesini artırır." },
          ]}
        />

        <ProcessTimeline
          title="Sayfa içi SEO çalışması adım adım nasıl ilerliyor?"
          intro="Önce sitenizdeki sayfaları ve hedeflediğiniz aramaları analiz ediyorum. Ardından en hızlı sonuç verecek sayfalardan başlayarak düzenlemeleri yapıyor, etkisini düzenli olarak ölçüyorum."
          ctaLabel="Ücretsiz sayfa analiziyle başlayalım"
          steps={[
            {
              tag: "1. ve 2. hafta",
              title: "Kelime araştırması ve sayfa analizi",
              paragraphs: [
                "Hedef kitlenizin Google'da yaptığı aramaları ve bu aramalarda öne çıkan rakip sayfaları inceliyorum. Search Console verilerinizden hangi sayfalarınızın hangi kelimelerde göründüğünü, hangilerinin ilk sayfanın hemen altında beklediğini çıkarıyorum.",
                "Aynı zamanda mevcut sayfalarınızı tek tek değerlendiriyorum: arama niyetine uygun mu, başlıkları net mi, aynı konuyu hedefleyen birden fazla sayfa var mı? Bu analiz, nereden başlayacağımızı belirliyor.",
              ],
            },
            {
              tag: "2. hafta",
              title: "Kelime haritası ve içerik planı",
              paragraphs: [
                "Her önemli arama için hangi sayfanın cevap vereceğini gösteren bir kelime haritası hazırlıyorum. Bu harita, sayfaların birbirinin gücünü bölmesini engelliyor ve eksik konuları açıkça ortaya koyuyor.",
                "Eksik konular için yeni içerik önerileri ve her birinin taslak yapısını da bu aşamada çıkarıyorum. Böylece içerik üretimi rastgele değil, planlı ilerliyor.",
              ],
            },
            {
              tag: "1. aydan itibaren",
              tone: "accent",
              title: "Sayfaların yeniden düzenlenmesi",
              paragraphs: [
                "Önceliği, ilk sayfaya çıkmasına az kalmış sayfalara veriyorum; bunlar genellikle en hızlı sonucu veren sayfalar. Başlıkları, açıklamaları, içerik yapısını ve iç bağlantıları belirlediğimiz plana göre düzenliyorum.",
                "Düzenlemeleri ister doğrudan sitenize ben uyguluyorum, ister ekibinize net bir liste halinde iletiyorum. İçerik tarafında da yeni sayfaların yazımına destek oluyorum.",
              ],
            },
            {
              tag: "Her ay",
              title: "Ölçüm ve iyileştirme",
              paragraphs: [
                "Düzenlenen her sayfanın sıralama, tıklama oranı ve ziyaretçi davranışındaki değişimini takip ediyorum. Beklentiyi karşılamayan sayfalarda yeni denemeler yapıyor, işe yarayan yaklaşımları diğer sayfalara da uyguluyorum.",
              ],
            },
          ]}
        />

        <ExampleGrid
          title="Bu durumlardan biri tanıdık geliyorsa, sayfa içi SEO zamanı"
          intro="Sayfa içi sorunlar genellikle kendini, Google'da görünen ama tıklanmayan ya da ilk sayfanın hemen altında takılıp kalan sayfalarla gösterir."
          quoteStyle="speech"
          items={[
            { icon: TrendingDown, title: "İkinci sayfada takılıp kalan sayfalar", quote: "Sıralamam 11 ile 20 arasında gidip geliyor", text: "Google sayfanızı ilgili buluyor ama yeterince güçlü bulmuyor. Doğru düzenlemelerle ilk sayfaya en hızlı taşınabilecek sayfalar bunlar." },
            { icon: MousePointerClick, title: "Görünen ama tıklanmayan sonuçlar", quote: "Gösterim çok ama kimse tıklamıyor", text: "Arama sonucundaki başlık ve açıklama ikna edici değilse, iyi bir sıralama bile ziyaretçiye dönüşmüyor." },
            { icon: Copy, title: "Birbirine benzeyen sayfalar", quote: "Aynı konuda birkaç sayfam var", text: "Aynı aramayı hedefleyen sayfalar birbirinin gücünü bölüyor; Google hangisini sıralayacağını şaşırıyor." },
            { icon: FileQuestion, title: "Ziyaretçinin aradığını bulamaması", quote: "İnsanlar sayfaya girip hemen çıkıyor", text: "İçerik arama niyetini karşılamıyorsa ziyaretçi geri dönüyor ve bu durum zamanla sıralamaya da yansıyor." },
            { icon: Layers, title: "Dağınık site yapısı", quote: "Önemli sayfalarıma ulaşmak zor", text: "Önemli sayfalar iç bağlantılarla desteklenmiyorsa hem ziyaretçi hem de Google onları gözden kaçırıyor." },
            { icon: Link2, title: "Eski ve güncelliğini yitirmiş içerikler", quote: "Yıllar önce yazdığım yazılar artık trafik getirmiyor", text: "Güncellenmeyen içerikler zamanla daha yeni ve daha kapsamlı rakip sayfaların gerisinde kalıyor." },
          ]}
        />

        <ProofBand
          title="Sayfa içi düzenlemelerin rakamlara yansıması"
          results={[
            { code: "Proje İ-1", metric: "+%180", label: "Organik oturum artışı", detail: "İçeriklerin arama niyetine göre yeniden düzenlenmesi ve konu kümelerine dayalı iç bağlantı ağının ardından organik trafikte yakalanan artış.", source: "Ekim Demirci vaka çalışmaları, 2025" },
            { code: "Tıklama oranı", metric: "%4,2 → %8,9", label: "CTR iyileşmesi", detail: "Arama niyetine uyarlanan başlık ve açıklamaların, arama sonuçlarındaki tıklama oranına etkisi.", source: "Google Search Console analizi" },
            { code: "Sayfada kalma", metric: "3 dk 45 sn", label: "Ortalama etkileşim süresi", detail: "Zenginleştirilen sayfa yapısıyla ziyaretçilerin sitede geçirdiği ortalama süre.", source: "Google Analytics 4 verisi" },
          ]}
        />

        <RelatedBand
          eyebrow="Sayfa içi SEO tek başına yetmez"
          title="İyi bir sayfanın arkasında sağlam bir altyapı ve güçlü bir otorite olmalı"
          text="Sayfa içi düzenlemeler, sayfanızın doğru aramada doğru cevabı vermesini sağlar. Rekabetçi kelimelerde üst sıralara çıkmak içinse sitenin teknik olarak sağlıklı olması ve başka sitelerden güven kazanması gerekir."
          links={[
            { icon: Signpost, title: "SEO danışmanlığı", href: "/seo-danismanligi", text: "Tüm alanları birlikte ele alan genel çalışma" },
            { icon: Wrench, title: "Teknik SEO", href: "/seo-hizmetleri/teknik-seo", text: "Tarama, indekslenme ve hız" },
            { icon: ShieldCheck, title: "Site dışı SEO", href: "/seo-hizmetleri/sayfa-disi-seo", text: "Backlink ve dijital PR ile otorite" },
          ]}
        />

        <GuideShell
          id="sayfa-ici-seo-rehberi"
          eyebrow="Sayfa içi SEO rehberi"
          title="Sayfa içi SEO hakkında bilmeniz gereken her şey"
          intro="Sayfa içi SEO, SEO'nun kendi başınıza da en çok iyileştirebileceğiniz alanı. Bu rehberde temel kavramları ve uygulamada dikkat edilmesi gerekenleri sade bir dille anlattım."
          toc={[
            { id: "sayfa-ici-seo-nedir", label: "Sayfa içi SEO nedir?" },
            { id: "arama-niyeti", label: "Arama niyeti nedir?" },
            { id: "anahtar-kelime", label: "Anahtar kelime nasıl seçilir?" },
            { id: "baslik-aciklama", label: "Başlık ve açıklama nasıl yazılır?" },
            { id: "sayfa-yapisi", label: "İyi bir sayfa yapısı nasıl olmalı?" },
            { id: "ic-baglanti", label: "İç bağlantılar neden önemli?" },
            { id: "icerik-kalitesi", label: "Google içerik kalitesini nasıl ölçer?" },
          ]}
          cta={{ eyebrow: "Ücretsiz sayfa analizi", title: "Sayfalarınız neden ilk sayfaya çıkamıyor?", text: "Önemli sayfalarınızı inceleyip hangi düzenlemelerle yükselebileceğinizi raporlayayım.", label: "Ücretsiz analiz isteyin" }}
          faqTitle="Sayfa içi SEO hakkında sıkça sorulan sorular"
          faqItems={faqItems}
        >
          <div className="space-y-5">
            <GuideH2 id="sayfa-ici-seo-nedir">Sayfa içi SEO nedir?</GuideH2>
            <GuideDefinition>
              Sayfa içi SEO (on-page SEO), bir web sayfasının hedeflediği aramada üst sıralarda yer alması için sayfanın
              içeriğinde, başlıklarında, yapısında ve iç bağlantılarında yapılan iyileştirmelerin bütünüdür.
            </GuideDefinition>
            <p>
              Teknik SEO sitenin altyapısıyla, site dışı SEO ise sitenin dışarıdaki itibarıyla ilgilenirken, sayfa içi SEO
              doğrudan sayfanın kendisine odaklanır. Kısacası, &ldquo;Bu sayfa, bu aramayı yapan kişinin sorusuna en iyi
              cevabı veriyor mu?&rdquo; sorusunun cevabıdır.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="arama-niyeti">Arama niyeti nedir?</GuideH2>
            <p>
              Arama niyeti, bir kişinin Google&apos;a bir şey yazarken asıl ne elde etmek istediğidir. Genellikle dört
              grupta toplanır:
            </p>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                ["Bilgi almak", "\"İmplant nedir\", \"SEO nasıl yapılır\" gibi öğrenmeye yönelik aramalar."],
                ["Karşılaştırmak", "\"En iyi koşu ayakkabısı\", \"X mi Y mi\" gibi karar öncesi aramalar."],
                ["Satın almak", "\"İmplant fiyatları\", \"koşu ayakkabısı al\" gibi işlem odaklı aramalar."],
                ["Bir yere ulaşmak", "Bir markanın ya da sitenin adıyla yapılan doğrudan aramalar."],
              ].map(([t, x]) => (
                <li key={t} className="rounded-2xl border border-line bg-canvas p-4">
                  <p className="font-semibold text-ink">{t}</p>
                  <p className="mt-1 text-[15px] leading-relaxed">{x}</p>
                </li>
              ))}
            </ul>
            <p>
              Bir sayfanın üst sıralara çıkabilmesi için öncelikle bu niyete uygun olması gerekir. Bir aramaya ayrı bir
              sayfa mı açmak gerektiği konusunu <GuideLink href="/blog/bir-sorgu-her-zaman-ayri-bir-sayfayi-hak-eder-mi">bir sorgu her zaman ayrı bir sayfayı hak eder mi</GuideLink> yazımda
              detaylı olarak ele aldım.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="anahtar-kelime">Anahtar kelime nasıl seçilir?</GuideH2>
            <p>
              En çok aranan kelime her zaman en doğru kelime değildir. İyi bir anahtar kelime; hedef kitlenizin gerçekten
              kullandığı, işinizle doğrudan ilgili ve rekabet açısından ulaşılabilir olandır. Örneğin yeni bir site için
              &ldquo;ayakkabı&rdquo; yerine &ldquo;geniş kalıp kadın koşu ayakkabısı&rdquo; gibi daha spesifik aramalar
              çok daha gerçekçi bir hedef olabilir.
            </p>
            <p>
              Anahtar kelimenin ne olduğunu ve nasıl araştırıldığını <GuideLink href="/blog/anahtar-kelime-nedir">anahtar kelime nedir</GuideLink> yazımda,
              bu iş için kullanabileceğiniz araçları ise <GuideLink href="/blog/en-iyi-anahtar-kelime-arastirma-araclari-2026">en iyi anahtar kelime araştırma araçları</GuideLink> listemde
              bulabilirsiniz.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="baslik-aciklama">Başlık ve açıklama nasıl yazılır?</GuideH2>
            <p>
              Sayfa başlığı (title) ve açıklaması (meta description), arama sonuçlarında sayfanızı temsil eden ilk şeydir.
              İyi bir başlık hedef kelimeyi doğal bir şekilde içerir, sayfanın ne sunduğunu net anlatır ve genellikle 60
              karakteri geçmez. Açıklama ise sıralamayı doğrudan etkilemese de tıklama kararında önemli rol oynar.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-red-200 bg-red-50/60 p-5">
                <p className="mb-2 text-sm font-bold text-ink">Zayıf örnek</p>
                <p className="text-[15px]">Hizmetlerimiz - Klinik</p>
              </div>
              <div className="rounded-2xl border border-accent/30 bg-accent-light/50 p-5">
                <p className="mb-2 text-sm font-bold text-ink">Güçlü örnek</p>
                <p className="text-[15px]">İmplant Tedavisi İstanbul | Süreç, Fiyat ve Garanti</p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <GuideH2 id="sayfa-yapisi">İyi bir sayfa yapısı nasıl olmalı?</GuideH2>
            <p>
              İnsanlar web sayfalarını baştan sona okumaz, tarar. Bu yüzden iyi bir sayfa; tek ve net bir ana başlıkla
              (H1) başlar, konuyu mantıklı alt başlıklara (H2, H3) böler, en önemli bilgiyi en başa koyar ve kısa
              paragraflarla ilerler. Bu yapı aynı zamanda Google&apos;ın ve yapay zeka araçlarının sayfayı anlamasını da
              kolaylaştırır.
            </p>
            <p>
              Sayfanın sitedeki yerini hem kullanıcıya hem Google&apos;a gösteren yardımcı bir öğe olan{" "}
              <GuideLink href="/blog/breadcrumb-nedir">breadcrumb yapısını</GuideLink> da ayrı bir yazıda anlattım.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="ic-baglanti">İç bağlantılar neden önemli?</GuideH2>
            <p>
              İç bağlantılar, sitenizdeki sayfaları birbirine bağlayan linklerdir. Ziyaretçiyi ilgili diğer içeriklere
              yönlendirir, Google&apos;ın yeni sayfaları keşfetmesine yardımcı olur ve önemli sayfalarınıza güç aktarır.
              Örneğin bir blog yazısından ilgili hizmet sayfasına verilen doğal bir bağlantı, o hizmet sayfasının
              sıralamasını destekler.
            </p>
            <p>
              İyi bir iç bağlantı yapısında önemli sayfalar çok sayıda ilgili sayfadan bağlantı alır, bağlantı metinleri
              hedef sayfanın konusunu açıkça anlatır ve hiçbir önemli sayfa &ldquo;yetim&rdquo; kalmaz.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="icerik-kalitesi">Google içerik kalitesini nasıl ölçer?</GuideH2>
            <p>
              Google, içeriği yazan kişinin deneyimine ve uzmanlığına, içeriğin güvenilirliğine ve okuyucuya gerçekten
              yeni bir şey katıp katmadığına bakıyor. Başka sitelerdeki bilgileri tekrar eden içerikler yerine, kendi
              deneyiminizi ve özgün bakış açınızı yansıtan içerikler öne çıkıyor.
            </p>
            <p>
              Bu konudaki iki önemli kavramı <GuideLink href="/blog/information-gain-nedir">information gain nedir</GuideLink> ve{" "}
              <GuideLink href="/blog/entity-seo-nedir">entity SEO nedir</GuideLink> yazılarımda detaylı olarak anlattım.
            </p>
          </div>
        </GuideShell>
      </ServicePageLayout>
    </>
  );
}
