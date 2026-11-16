import { Metadata } from "next";
import {
  Radar,
  Bot,
  FileText,
  LineChart,
  Newspaper,
  Network,
  EyeOff,
  MessageSquareQuote,
  TrendingDown,
  Shuffle,
  ShieldQuestion,
  HelpCircle,
  Compass,
  Signpost,
  Wrench,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ServicePageLayout from "@/components/ServicePageLayout";
import PlatformPicker from "@/components/yapay-zeka-seo/PlatformPicker";
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
  title: "Yapay Zeka SEO Danışmanlığı",
  description: "ChatGPT, Google AI Overview, Perplexity, Gemini ve Claude kaynaklarını farklı şekilde seçiyor. Markanızın her platformda kaynak gösterilmesi için platforma özel yapay zeka SEO stratejileri kuruyorum.",
  alternates: {
    canonical: "/seo-hizmetleri/yapay-zeka-seo",
  },
  openGraph: {
    title: "Yapay Zeka SEO Danışmanlığı | Ekim Demirci",
    description: "ChatGPT, Perplexity, Google AI Overview, Gemini ve Claude için platform bazlı yapay zeka SEO stratejileri.",
  },
  twitter: {
    title: "Yapay Zeka SEO Danışmanlığı | Ekim Demirci",
    description: "ChatGPT, Perplexity, Google AI Overview, Gemini ve Claude için platform bazlı yapay zeka SEO stratejileri.",
  },
};

const faqItems: Faq[] = [
  {
    question: "Yapay zeka SEO ile GEO arasındaki fark ne?",
    answer: "GEO (üretken motor optimizasyonu) işin genel çerçevesi: markanızın yapay zeka cevaplarında görünür olması için yapılan çalışmaların tamamı. Bu sayfada anlattığım yapay zeka SEO ise o çerçevenin platform bazlı tarafı. ChatGPT, Perplexity, Google AI Overview, Gemini ve Claude kaynaklarını farklı yollarla bulduğu için her birine ayrı bakıyorum.",
  },
  {
    question: "ChatGPT'de markamın önerilmesi için ne yapmak gerekiyor?",
    answer: "ChatGPT web araması yaparken Bing sonuçlarından da yararlanıyor ve OAI-SearchBot adlı tarayıcısıyla sayfaları ziyaret ediyor. Bu yüzden önce sitenizin bu tarayıcıya açık olduğundan ve Bing'de sorunsuz göründüğünden emin oluyorum. Ardından sayfalarınızın sorulara net cevap vermesini ve markanızın başka güvenilir sitelerde anılmasını sağlamaya çalışıyorum.",
  },
  {
    question: "Google AI Overview'da kaynak olarak çıkmak için ne gerekir?",
    answer: "AI Overview kaynaklarını çoğunlukla ilgili aramada zaten üst sıralarda olan sayfalardan seçiyor. Yani klasik SEO burada hâlâ temel. Bunun üzerine sayfaları, başlıkların hemen altında kısa ve net cevaplar verecek şekilde düzenliyorum.",
  },
  {
    question: "Perplexity hangi sayfaları kaynak gösteriyor?",
    answer: "Perplexity her cevabın altında numaralı kaynaklar gösteriyor ve PerplexityBot adlı tarayıcısıyla sayfaları geziyor. Kaynağı belli verilere, net karşılaştırmalara ve tek başına okunduğunda anlam taşıyan paragraflara sahip sayfaların alıntılanma şansı daha yüksek oluyor.",
  },
  {
    question: "Yapay zeka tarayıcılarını robots.txt ile engellemeli miyim?",
    answer: "Bu bir iş kararı. Bazı tarayıcılar modelleri eğitmek için içerik toplarken bazıları arama cevaplarında kaynak göstermek için sayfaları ziyaret ediyor. Arama tarafındaki tarayıcıları engellerseniz o platformun cevaplarında kaynak olarak görünme ihtimaliniz azalır. Hangi tarayıcıya ne izin vereceğinize, farkları açıkladıktan sonra birlikte karar veriyoruz.",
  },
  {
    question: "Yapay zeka görünürlüğü nasıl ölçülüyor?",
    answer: "Sektörünüzde sorulan soruları platformlara düzenli olarak soruyor, markanızın cevaplarda geçip geçmediğini ve sitenizin kaynak gösterilip gösterilmediğini takip ediyorum. Bunun yanında analitik araçlarda yapay zeka platformlarından gelen ziyaretçileri ayrıca izliyorum. Cevaplar kişiye ve zamana göre değişebildiği için tek bir sonuca değil, zaman içindeki eğilime bakıyorum.",
  },
  {
    question: "Sonuçlar ne zaman görülür?",
    answer: "Teknik erişim sorunları düzeldiğinde ve içerikler yeniden tarandığında ilk değişiklikler birkaç hafta içinde görülebiliyor. Markanın başka sitelerde anılması gibi işler ise daha uzun soluklu. Kesin bir süre vermek doğru olmaz; her ay ölçüp neyin işe yaradığını size raporluyorum.",
  },
  {
    question: "Klasik SEO'yu bırakıp sadece yapay zekaya mı odaklanmalıyım?",
    answer: "Hayır. Yapay zeka araçlarının önemli bir kısmı kaynaklarını arama motorlarından buluyor. Google'da ya da Bing'de görünmeyen bir sitenin yapay zeka cevaplarında kaynak gösterilmesi zor. Bu yüzden yapay zeka SEO çalışmasını her zaman sağlam bir SEO temelinin üzerine kuruyorum.",
  },
];

export default function AISEO() {
  return (
    <>
      <Breadcrumb items={[
        { name: "SEO Danışmanlığı", href: "/seo-danismanligi" },
        { name: "Yapay Zeka SEO", href: "/seo-hizmetleri/yapay-zeka-seo" }
      ]} />
      <ServicePageLayout
        title="Yapay Zeka SEO Danışmanlığı"
        subtitle="Her platform için ayrı strateji"
        description="Müşterileriniz artık sorularını sadece Google'a değil, ChatGPT'ye, Perplexity'ye ve Gemini'ye de soruyor. Bu araçların her biri kaynaklarını farklı bir yoldan buluyor. Ben de markanızın her platformda doğru bilgilerle anılması ve sitenizin kaynak gösterilmesi için platforma özel çalışıyorum."
        canonicalUrl="https://ekimdemirci.com/seo-hizmetleri/yapay-zeka-seo"
        afterHeroNode={
          <DemoSection
            id="platform-stratejileri"
            eyebrow="Platform stratejileri"
            title="Her yapay zeka aracı kaynağını başka bir yerden buluyor."
            intro="ChatGPT'de görünmek için yaptığınız iş, Google AI Overview'da otomatik olarak karşılık bulmayabiliyor. Aşağıdan bir platform seçin; nereden beslendiğini, neye önem verdiğini ve benim o platform için neye odaklandığımı görün."
            window={
              <DemoWindow label="Platform stratejileri">
                <PlatformPicker />
              </DemoWindow>
            }
            side={
              <DemoSide
                title="Tek tip çözüm yok"
                text="Bazı araçlar kendi tarayıcılarıyla sayfanızı ziyaret ediyor, bazıları arama motoru sonuçlarına yaslanıyor, bazıları da markanız hakkında internette ne söylendiğine bakıyor. Hepsine aynı reçeteyi uygulamak yerine, sizin müşterilerinizin hangi aracı kullandığına göre öncelik belirliyorum."
                points={[
                  "Her platformda markanızın bugünkü durumunu ölçmek",
                  "Yapay zeka tarayıcılarının siteye erişimini düzenlemek",
                  "İçeriği alıntılanabilir bir yapıya kavuşturmak",
                  "Sonuçları platform platform takip etmek",
                ]}
                ctaTitle="ChatGPT ya da Perplexity sizin sektörünüzde kimi öneriyor?"
                ctaText="Sektörünüzdeki temel soruları platformlara sorup markanızın nerede durduğunu size göstereyim."
                ctaLabel="Ücretsiz yapay zeka görünürlük kontrolü"
              />
            }
          />
        }
        icon="Brain"
        gradient="from-blue-500 via-cyan-500 to-emerald-500"
        blogCategory="SEO Hizmetleri"
      >
        <ScopeGrid
          title="Yapay zeka SEO danışmanlığında neler yapıyorum?"
          intro="Amacım, biri yapay zekaya sektörünüzle ilgili bir soru sorduğunda markanızın doğru bilgilerle anılması ve sitenizin kaynak olarak gösterilmesi. Bunun için hem sitenizde hem de sitenizin dışında çalışıyorum."
          items={[
            { icon: Radar, title: "Platform bazlı görünürlük analizi yapıyorum", text: "Sektörünüzde sorulan soruları ChatGPT, Perplexity, Gemini, Claude ve Google AI Overview'da tek tek deniyor, markanızın nerede geçtiğini, nerede rakiplerinizin öne çıktığını tespit ediyorum." },
            { icon: Bot, title: "Yapay zeka tarayıcılarının erişimini düzenliyorum", text: "OAI-SearchBot, PerplexityBot, ClaudeBot gibi tarayıcıların sitenize erişip erişemediğini robots.txt, sunucu ayarları ve güvenlik duvarı kuralları üzerinden kontrol ediyorum." },
            { icon: FileText, title: "İçeriği alıntılanabilir hale getiriyorum", text: "Önemli bilgileri net cevaplar, kısa paragraflar, tablolar ve listelerle sunuyorum. Böylece bir yapay zeka aracı sayfanızdan bir parçayı alıp rahatça kaynak gösterebiliyor." },
            { icon: Network, title: "Markanızı netleştiriyorum", text: "Markanızın kim olduğu, ne yaptığı ve hangi konuda uzman olduğu sitenizde, yapılandırılmış veride ve dış kaynaklarda tutarlı olsun diye çalışıyorum. Tutarsız bilgi, yapay zekanın sizi yanlış anlatmasına yol açabiliyor." },
            { icon: Newspaper, title: "Başka sitelerde anılmanızı destekliyorum", text: "Yapay zeka araçları bir markayı önerirken internetin o marka hakkında söylediklerine de bakıyor. Sektör yayınlarında, karşılaştırma içeriklerinde ve rehberlerde yer almanız için çalışıyorum." },
            { icon: LineChart, title: "Sonuçları düzenli ölçüyorum", text: "Markanızın yapay zeka cevaplarında ne sıklıkla geçtiğini, hangi sayfalarınızın kaynak gösterildiğini ve bu platformlardan gelen ziyaretçileri her ay takip edip raporluyorum." },
          ]}
        />

        <ProcessTimeline
          title="Yapay zeka SEO çalışması adım adım nasıl ilerliyor?"
          intro="Önce markanızın her platformdaki durumunu ölçüyorum. Teknik erişim sorunlarını çözerken içerik tarafına geçiyor, ardından düzenli ölçümle hangi platformda neyin işe yaradığını takip ediyorum."
          ctaLabel="Ücretsiz görünürlük kontrolüyle başlayalım"
          steps={[
            {
              tag: "1. hafta",
              title: "Platform bazlı görünürlük analizi",
              paragraphs: [
                "Müşterilerinizin sorabileceği soruların bir listesini çıkarıyor ve bunları her platforma soruyorum. Markanız cevapta geçiyor mu, doğru anlatılıyor mu, sitenize bağlantı veriliyor mu, yoksa rakipleriniz mi öne çıkıyor? Her platform için ayrı ayrı not ediyorum.",
                "Bu analiz, hangi platforma öncelik vermemiz gerektiğini ve en büyük açığın nerede olduğunu gösteriyor.",
              ],
            },
            {
              tag: "Paralel olarak",
              tone: "accent",
              title: "Yapay zeka tarayıcıları için teknik erişim",
              paragraphs: [
                "Analizle aynı anda sitenizin teknik tarafına bakıyorum. robots.txt dosyası, sunucu ve güvenlik duvarı ayarları yapay zeka tarayıcılarını farkında olmadan engelliyor olabilir. İçeriğin yalnızca JavaScript ile yüklenmesi de bazı tarayıcıların sayfayı okuyamamasına yol açabiliyor.",
                "Hangi tarayıcıya izin verilip hangisinin engelleneceği bir iş kararı olduğu için farkları size açıklıyor, kararı birlikte veriyoruz.",
              ],
            },
            {
              tag: "2.–6. hafta",
              title: "İçeriğin alıntılanabilir yapıya kavuşturulması",
              paragraphs: [
                "Öncelikli sayfalarınızı, yapay zeka araçlarının kolayca parça alıp kaynak gösterebileceği bir düzene getiriyorum: soruya doğrudan cevap veren girişler, anlamlı başlıklar, kendi başına okunabilen paragraflar, tablolar ve sık sorulan sorular.",
                "Yapılandırılmış veriyi (schema) gözden geçiriyor, markanız hakkındaki bilgilerin sitenin her yerinde tutarlı olmasını sağlıyorum.",
              ],
            },
            {
              tag: "Ayrı bütçelendirilir",
              tone: "amber",
              title: "Dijital PR ve marka anılmaları",
              paragraphs: [
                "Markanızın sektör yayınlarında, karşılaştırma içeriklerinde ve rehberlerde yer alması yapay zeka görünürlüğünü destekliyor. Bunun için hangi yayınlarda neden yer almanız gerektiğini gösteren bir plan hazırlıyorum.",
                "Yayın maliyetleri siteye ve sektöre göre değiştiği için bu kalem danışmanlık ücretinden ayrı bütçelendiriliyor. Listeyi önceden paylaşıyorum; siz onaylamadan hiçbir harcama yapılmıyor.",
              ],
            },
            {
              tag: "Her ay",
              title: "Ölçüm ve raporlama",
              paragraphs: [
                "Aynı soru listesini her ay yeniden soruyor, markanızın hangi platformda ne sıklıkla anıldığını ve hangi sayfalarınızın kaynak gösterildiğini takip ediyorum. Yapay zeka platformlarından gelen ziyaretçileri de ayrıca raporluyorum.",
                "Bir platformda ilerleme yavaşsa nedenini araştırıp stratejiyi o platforma göre güncelliyorum.",
              ],
            },
          ]}
        />

        <ExampleGrid
          title="Bu cümlelerden birini kurduysanız, yapay zeka SEO zamanı"
          intro="Yapay zeka araçları müşterilerin karar verme şeklini değiştiriyor. Aşağıdaki durumlar, markanızın bu platformlarda eksik kaldığının işaretleri olabilir."
          quoteStyle="speech"
          items={[
            { icon: MessageSquareQuote, title: "Rakiplerin önerilmesi", quote: "ChatGPT'ye sorduğumda rakiplerimi sayıyor, beni değil", text: "Yapay zeka bir markayı önerirken hem sitelere hem de o marka hakkında internette söylenenlere bakıyor. Eksik olan çoğu zaman bu iki taraftan biri." },
            { icon: TrendingDown, title: "Google'da üstte olup tıklanmamak", quote: "Sıralamam aynı ama tıklamalar azaldı", text: "Arama sonuçlarının üstündeki AI Overview özeti, kullanıcının soruyu sayfaya girmeden cevaplamasına yol açabiliyor. Özette kaynak gösterilmek bu kaybı azaltabilir." },
            { icon: ShieldQuestion, title: "Yanlış bilgi", quote: "Yapay zeka şirketim hakkında yanlış şeyler söylüyor", text: "Eski, eksik ya da tutarsız bilgiler yapay zekanın markanızı yanlış anlatmasına yol açabiliyor. Bilgilerin her yerde tutarlı olması önemli." },
            { icon: Shuffle, title: "Platformlar arası fark", quote: "Perplexity'de çıkıyorum ama ChatGPT'de yokum", text: "Her platform kaynaklarını farklı bir yoldan bulduğu için birinde görünüp diğerinde görünmemek çok olağan. Platforma özel bakmak gerekiyor." },
            { icon: EyeOff, title: "Engellenen tarayıcılar", quote: "Sitemi yapay zeka botlarına kapattık mı, emin değilim", text: "Güvenlik duvarı ya da hazır robots.txt ayarları, yapay zeka tarayıcılarını siz farkında olmadan engelliyor olabilir." },
            { icon: HelpCircle, title: "Nereden başlayacağını bilmemek", quote: "Yapay zeka için ne yapmam gerektiğini bilmiyorum", text: "Bu alan yeni ve hakkında çok çelişkili bilgi var. Önce durumu ölçmek, sonra öncelik belirlemek en sağlıklı başlangıç." },
          ]}
        />

        <ProofBand
          title="Platform bazlı çalışmanın rakamlara yansıması"
          results={[
            { code: "Proje Z-1", metric: "+%65", label: "Yapay zeka alıntı artışı", detail: "Platform bazlı yapay zeka optimizasyonu yapılan SaaS projesinde Perplexity ve ChatGPT cevaplarında kaynak gösterilme oranındaki artış.", source: "Ekim Demirci vaka çalışmaları, 2025" },
          ]}
        />

        <RelatedBand
          eyebrow="Yapay zeka SEO tek başına yetmez"
          title="Yapay zeka görünürlüğü, sağlam bir SEO temelinin üzerine kuruluyor"
          text="Yapay zeka araçlarının çoğu kaynaklarını arama motorlarından buluyor. Platform bazlı çalışmanın işe yaraması için sitenizin teknik olarak sağlıklı ve aramalarda görünür olması gerekiyor."
          links={[
            { icon: Compass, title: "GEO danışmanlığı", href: "/geo-danismanligi", text: "Yapay zeka görünürlüğünün genel çerçevesi" },
            { icon: Signpost, title: "SEO danışmanlığı", href: "/seo-danismanligi", text: "Tüm alanları birlikte ele alan genel çalışma" },
            { icon: Wrench, title: "Teknik SEO", href: "/seo-hizmetleri/teknik-seo", text: "Tarama, indekslenme ve hız" },
          ]}
        />

        <GuideShell
          id="yapay-zeka-seo-rehberi"
          eyebrow="Yapay zeka SEO rehberi"
          title="Yapay zeka araçları kaynaklarını nasıl seçiyor?"
          intro="Yapay zeka SEO hakkında çok şey yazılıyor ama bir kısmı tahmine dayanıyor. Bu rehberde platformların kendi açıkladıkları ve genel olarak bilinenler üzerinden, sade bir dille neyin önemli olduğunu anlattım."
          toc={[
            { id: "yapay-zeka-seo-nedir", label: "Yapay zeka SEO nedir?" },
            { id: "chatgpt", label: "ChatGPT kaynaklarını nasıl buluyor?" },
            { id: "google-ai-overview", label: "Google AI Overview ve Gemini" },
            { id: "perplexity-claude", label: "Perplexity ve Claude" },
            { id: "tarayicilar", label: "Yapay zeka tarayıcıları ve robots.txt" },
            { id: "olcum", label: "Yapay zeka görünürlüğü nasıl ölçülür?" },
          ]}
          cta={{ eyebrow: "Ücretsiz görünürlük kontrolü", title: "Yapay zeka sizin sektörünüzde kimi öneriyor?", text: "Temel soruları platformlara sorup markanızın nerede durduğunu raporlayayım.", label: "Ücretsiz kontrol isteyin" }}
          faqTitle="Yapay zeka SEO hakkında sıkça sorulan sorular"
          faqItems={faqItems}
        >
          <div className="space-y-5">
            <GuideH2 id="yapay-zeka-seo-nedir">Yapay zeka SEO nedir?</GuideH2>
            <GuideDefinition>
              Yapay zeka SEO, bir markanın ChatGPT, Perplexity, Google AI Overview, Gemini ve Claude gibi yapay zeka
              araçlarının cevaplarında doğru bilgilerle anılması ve sitesinin kaynak olarak gösterilmesi için yapılan
              çalışmalardır. Her platform kaynaklarını farklı bir yoldan bulduğu için çalışma platform bazlı kurgulanır.
            </GuideDefinition>
            <p>
              Klasik SEO&apos;da amaç, arama sonuçlarında üst sıralarda yer almaktır. Yapay zeka araçlarında ise ortada bir
              sıralama listesi yok; kullanıcıya tek bir cevap veriliyor ve bu cevabın içinde birkaç marka ya da kaynak
              geçiyor. Hedef, o birkaç isimden biri olmak.
            </p>
            <p>
              Bu sayfa işin platform bazlı tarafını anlatıyor. Kavramın genel çerçevesini merak ediyorsanız{" "}
              <GuideLink href="/blog/geo-nedir">GEO nedir</GuideLink> yazıma ve{" "}
              <GuideLink href="/geo-danismanligi">GEO danışmanlığı</GuideLink> sayfama göz atabilirsiniz.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="chatgpt">ChatGPT kaynaklarını nasıl buluyor?</GuideH2>
            <p>
              ChatGPT bir soruya iki şekilde cevap verebiliyor: eğitim sırasında öğrendiği genel bilgiyle ya da web&apos;de
              arama yaparak. Web araması devreye girdiğinde Bing sonuçlarından da yararlanıyor ve OAI-SearchBot adlı
              tarayıcısıyla sayfaları ziyaret ediyor. Bu yüzden Bing&apos;de görünmeyen ya da bu tarayıcıyı engelleyen bir
              sitenin ChatGPT cevaplarında kaynak gösterilmesi zorlaşıyor.
            </p>
            <p>
              Bir markanın önerilip önerilmemesinde ise internetin o marka hakkında ne söylediği de rol oynuyor gibi
              görünüyor. Sektör yayınlarında, karşılaştırma yazılarında ve forumlarda anılan markalar cevaplarda daha sık
              geçebiliyor. Konuyu daha ayrıntılı ele aldığım{" "}
              <GuideLink href="/blog/chatgptde-nasil-gorunur-olunur">ChatGPT&apos;de nasıl görünür olunur</GuideLink> yazıma
              ve <GuideLink href="/blog/markaniz-yapay-zekada-neden-gorunmuyor">markanız yapay zekada neden görünmüyor</GuideLink>{" "}
              yazıma bakabilirsiniz.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="google-ai-overview">Google AI Overview ve Gemini</GuideH2>
            <p>
              Google AI Overview, arama sonuçlarının en üstünde çıkan yapay zeka özetidir. Kaynaklarını çoğunlukla ilgili
              aramada zaten üst sıralarda olan sayfalardan seçiyor. Bu da klasik SEO&apos;nun burada hâlâ temel olduğu
              anlamına geliyor: hedef aramada ilk sayfada değilseniz özette kaynak olarak görünme ihtimaliniz düşük.
            </p>
            <p>
              Google, yapay zeka destekli aramalarında bir soruyu birkaç alt soruya bölüp her biri için ayrı arama yapabildiğini de açıkladı. Bu yüzden tek
              bir anahtar kelimeye değil, konunun etrafındaki soruların tamamına cevap veren sayfalar avantajlı oluyor.
              Bu yaklaşımı <GuideLink href="/blog/query-augmentation-patenti-fan-out">query fan-out</GuideLink> yazımda
              anlattım. AI Overview&apos;un trafiğe etkisini ise{" "}
              <GuideLink href="/blog/google-ai-overview-web-sitelerinin-trafigini-nasil-etkiledi">bu yazımda</GuideLink>{" "}
              ele aldım.
            </p>
            <p>
              Gemini ise Google&apos;ın kendi yapay zeka modeli ve Google aramasından yararlanabiliyor. Bu nedenle Google
              tarafında güçlü olan bir site, Gemini&apos;de de avantajlı bir başlangıç yapıyor. Gemini hakkında daha fazla
              bilgi için <GuideLink href="/blog/google-gemini-nedir">Google Gemini nedir</GuideLink> yazıma göz
              atabilirsiniz.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="perplexity-claude">Perplexity ve Claude</GuideH2>
            <p>
              Perplexity, her cevabın altında numaralı kaynaklar gösteren bir arama aracı. Soru sorulduğunda web&apos;de arama
              yapıyor ve PerplexityBot adlı tarayıcısıyla sayfaları geziyor. Kaynakları açıkça gösterdiği için sitenizin
              alıntılanıp alıntılanmadığını en kolay takip edebileceğiniz platformlardan biri.
            </p>
            <p>
              Claude ise Anthropic&apos;in geliştirdiği asistan. Web araması açık olduğunda güncel kaynaklardan yararlanıyor;
              ClaudeBot adlı bir tarayıcısı da var. Her iki platformda da tek başına okunduğunda anlam taşıyan,
              dolgusuz ve net anlatılmış içeriklerin kaynak olarak seçilmesi daha kolay oluyor.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="tarayicilar">Yapay zeka tarayıcıları ve robots.txt</GuideH2>
            <p>
              Yapay zeka şirketlerinin tarayıcıları farklı amaçlarla çalışıyor. Bazıları modelleri eğitmek için içerik
              topluyor, bazıları ise kullanıcı bir soru sorduğunda arama cevabında kaynak göstermek için sayfaları ziyaret
              ediyor. Bu ayrımı bilmeden tüm yapay zeka tarayıcılarını engellemek, markanızın arama cevaplarından da
              silinmesine yol açabilir.
            </p>
            <p>
              Hangi tarayıcıya izin verileceği robots.txt dosyasıyla yönetiliyor. Ancak bazen güvenlik duvarı ya da
              barındırma firmasının hazır ayarları da bu tarayıcıları siz fark etmeden engelleyebiliyor. robots.txt&apos;nin
              nasıl çalıştığını <GuideLink href="/blog/robots-txt-nedir-ve-nasil-kullanilir">robots.txt nedir</GuideLink>{" "}
              yazımda anlattım.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="olcum">Yapay zeka görünürlüğü nasıl ölçülür?</GuideH2>
            <p>
              Klasik SEO&apos;da Search Console gibi araçlar size kaç kez göründüğünüzü söylüyor. Yapay zeka tarafında henüz
              bu kadar net bir veri yok. Bu yüzden sektörünüzde sorulan soruları platformlara düzenli olarak soruyor,
              markanızın ne sıklıkla anıldığını ve sitenizin kaynak gösterilip gösterilmediğini takip ediyorum.
            </p>
            <p>
              Cevaplar kişiye, konuma ve zamana göre değişebildiği için tek bir sonuca değil, aylar içindeki eğilime
              bakmak gerekiyor. Bu iş için kullanılabilecek araçları{" "}
              <GuideLink href="/blog/yapay-zeka-gorunurlugunuzu-olcmek-icin-en-iyi-araclar">yapay zeka görünürlüğünü ölçme araçları</GuideLink>{" "}
              yazımda, hangi metriklere bakılması gerektiğini ise{" "}
              <GuideLink href="/blog/geo-metrikleri-nasil-olculur">GEO metrikleri nasıl ölçülür</GuideLink> yazımda
              anlattım.
            </p>
          </div>
        </GuideShell>
      </ServicePageLayout>
    </>
  );
}
