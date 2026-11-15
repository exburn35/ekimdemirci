import { Metadata } from "next";
import {
  Newspaper,
  ShieldX,
  AtSign,
  Unlink,
  Scale,
  Search,
  TrendingDown,
  AlertTriangle,
  Swords,
  Sparkles,
  Building2,
  Signpost,
  Wrench,
  FileText,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ServicePageLayout from "@/components/ServicePageLayout";
import AuthorityDemo from "@/components/sayfa-disi-seo/AuthorityDemo";
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
  title: "Sayfa Dışı (Off-Page) SEO Danışmanlığı",
  description: "Kaliteli backlinkler, dijital PR ve zararlı bağlantı temizliğiyle sitenizin Google gözündeki otoritesini artıran sayfa dışı SEO danışmanlığı. Ücretsiz bağlantı profili analizi isteyin.",
  alternates: {
    canonical: "/seo-hizmetleri/sayfa-disi-seo",
  },
  openGraph: {
    title: "Sayfa Dışı (Off-Page) SEO Danışmanlığı | Ekim Demirci",
    description: "Doğal bağlantılar ve dijital PR ile markanızın internetteki güvenilirliğini artıran sayfa dışı SEO danışmanlığı.",
  },
  twitter: {
    title: "Sayfa Dışı (Off-Page) SEO Danışmanlığı | Ekim Demirci",
    description: "Doğal bağlantılar ve dijital PR ile markanızın internetteki güvenilirliğini artıran sayfa dışı SEO danışmanlığı.",
  },
};

const faqItems: Faq[] = [
  {
    question: "Sayfa dışı SEO nedir?",
    answer: "Sayfa dışı SEO (off-page SEO), sitenizin dışında gerçekleşen ve Google'ın sitenize ne kadar güveneceğini etkileyen çalışmaların bütünü. Başka sitelerden alınan bağlantılar (backlink), dijital PR ve markanızın internette anılması bu kapsamda yer alıyor.",
  },
  {
    question: "Backlink nedir, neden önemlidir?",
    answer: "Backlink, başka bir sitenin sizin sitenize verdiği bağlantıdır. Google, güvenilir sitelerden gelen bağlantıları bir tür tavsiye olarak değerlendiriyor. Sektörünüzle ilgili, kaliteli sitelerden aldığınız bağlantılar, rekabetçi aramalarda üst sıralara çıkmanın en önemli etkenlerinden biri.",
  },
  {
    question: "Toplu backlink paketleri siteme zarar verir mi?",
    answer: "Evet, verebilir. Ucuza satılan ve yüzlerce alakasız siteden gelen bağlantılar, Google'ın spam politikalarına aykırı ve sitenizin sıralama kaybetmesine, hatta ceza almasına yol açabiliyor. Ben az sayıda ama gerçekten değerli, sektörünüzle ilgili bağlantılara odaklanıyorum.",
  },
  {
    question: "Zararlı bağlantılar nasıl temizlenir?",
    answer: "Önce sitenizin bağlantı profilini inceleyip zararlı ya da şüpheli bağlantıları tespit ediyorum. Mümkünse bağlantıyı veren siteden kaldırılmasını talep ediyorum. Kaldırılamayan ve ciddi risk oluşturan bağlantılar için Google'ın reddetme (disavow) aracını dikkatli bir şekilde kullanıyorum.",
  },
  {
    question: "Dijital PR nedir?",
    answer: "Dijital PR, markanızın haber siteleri, sektör yayınları ve popüler bloglarda doğal olarak yer almasını sağlayan çalışmalardır. Araştırmalar, uzman görüşleri ve haber değeri taşıyan içerikler sayesinde hem kaliteli bağlantılar hem de marka bilinirliği kazanılır.",
  },
  {
    question: "Backlink çalışmasının maliyeti nasıl belirleniyor?",
    answer: "Backlink ve dijital PR çalışmaları danışmanlık ücretinden ayrı bütçelendiriliyor, çünkü yayın maliyetleri seçilen siteye ve sektöre göre ciddi farklılık gösteriyor. Hangi siteye neden ve ne kadar bütçe ayırdığımızı önceden şeffaf bir listeyle paylaşıyorum; siz onaylamadan hiçbir harcama yapılmıyor.",
  },
  {
    question: "Sayfa dışı SEO'nun etkisi ne zaman görülür?",
    answer: "Yeni bağlantıların Google tarafından keşfedilip değerlendirilmesi zaman alıyor. Etkiler genellikle birkaç hafta ile birkaç ay arasında sıralamalara yansımaya başlıyor. Otorite, birikimli olarak büyüyen bir değer; düzenli ve doğal bir bağlantı kazanımı tek seferlik büyük atılımlardan daha sağlıklı sonuç veriyor.",
  },
  {
    question: "Sayfa dışı SEO yapay zeka görünürlüğünü de etkiler mi?",
    answer: "Evet. ChatGPT gibi yapay zeka araçları bir markayı önerirken büyük ölçüde internetin o marka hakkında söylediklerine bakıyor. Sektör yayınlarında ve karşılaştırma içeriklerinde anılmak, hem Google'da hem de yapay zeka cevaplarında görünür olmanızı destekliyor.",
  },
];

export default function OffPageSEO() {
  return (
    <>
      <Breadcrumb items={[
        { name: "SEO Danışmanlığı", href: "/seo-danismanligi" },
        { name: "Site Dışı SEO", href: "/seo-hizmetleri/sayfa-disi-seo" }
      ]} />
      <ServicePageLayout
        title="Sayfa Dışı SEO Danışmanlığı"
        subtitle="Markanızın internetteki itibarı"
        description="Google bir siteye ne kadar güveneceğine büyük ölçüde başka sitelerin o site hakkında ne söylediğine bakarak karar veriyor. Ben de sektörünüzle ilgili güvenilir sitelerde doğal biçimde yer almanızı sağlıyor, sitenize zarar veren bağlantıları temizliyorum."
        canonicalUrl="https://ekimdemirci.com/seo-hizmetleri/sayfa-disi-seo"
        afterHeroNode={
          <DemoSection
            id="otorite-calismasi"
            eyebrow="Otorite çalışması"
            title="Doğru bağlantılar, adım adım artan güven."
            intro="Sayfa dışı SEO, hızlı ve gösterişli bir iş değil; sabırla inşa edilen bir itibar. Önce sitenize zarar veren bağlantıları temizliyor, ardından sektörünüzle ilgili kaliteli sitelerden doğal bağlantılar kazanmanızı sağlıyorum."
            window={
              <DemoWindow label="Bağlantı profili">
                <AuthorityDemo />
              </DemoWindow>
            }
            side={
              <DemoSide
                title="Sayı değil, kalite"
                text="Birkaç yıl önce yüzlerce bağlantı toplamak işe yarayabiliyordu; bugün aynı yöntem siteye zarar veriyor. Benim için önemli olan, sektörünüzle gerçekten ilgili, okuyucusu olan ve size doğal bir sebeple bağlantı veren sitelerde yer almanız."
                points={[
                  "Zararlı bağlantıları tespit edip temizlemek",
                  "Sektörünüzle ilgili sitelerden bağlantı kazanmak",
                  "Dijital PR ile haber ve yayınlarda yer almak",
                  "Bağlantı profilini doğal ve dengeli tutmak",
                ]}
                ctaTitle="Bağlantı profiliniz sitenize yardım mı ediyor, zarar mı veriyor?"
                ctaText="Sitenize gelen bağlantıları inceleyip riskleri ve fırsatları size raporlayayım."
                ctaLabel="Ücretsiz bağlantı analizi iste"
              />
            }
          />
        }
        icon="Link2"
        gradient="from-green-500 via-emerald-500 to-teal-500"
        blogCategory="sayfa-disi-seo"
      >
        <ScopeGrid
          title="Sayfa dışı SEO danışmanlığında neler yapıyorum?"
          intro="Sayfa dışı SEO, sitenizin internetin geri kalanındaki itibarıyla ilgilenir. Amaç, Google'a ve yapay zeka araçlarına “bu site güvenilir bir kaynak” mesajını doğal yollarla vermektir."
          items={[
            { icon: Search, title: "Bağlantı profilinizi analiz ediyorum", text: "Sitenize hangi sitelerin, hangi bağlantı metinleriyle bağlantı verdiğini inceliyorum. Rakiplerinizin bağlantı aldığı ama sizin henüz yer almadığınız siteleri de ortaya çıkarıyorum." },
            { icon: ShieldX, title: "Zararlı bağlantıları temizliyorum", text: "Spam sitelerden, alakasız dizinlerden ya da geçmişte satın alınmış paketlerden gelen bağlantılar sitenize zarar verebilir. Bunları tespit edip kaldırılmasını sağlıyor, gerekirse Google'a reddediyorum." },
            { icon: Newspaper, title: "Editoryal bağlantılar kazandırıyorum", text: "Sektörünüzle ilgili haber sitelerinde, bloglarda ve rehberlerde, okuyucuya gerçekten değer katan içeriklerle doğal biçimde yer almanızı sağlıyorum." },
            { icon: Sparkles, title: "Dijital PR çalışması yürütüyorum", text: "Haber değeri taşıyan araştırmalar, uzman görüşleri ve röportajlarla markanızın yayınlarda konuşulmasını sağlıyorum. Bu çalışmalar bağlantının yanında bilinirlik de getiriyor." },
            { icon: AtSign, title: "Bağlantısız anılmaları değerlendiriyorum", text: "Markanızın adının geçtiği ama sitenize bağlantı verilmeyen yayınları buluyor, bu fırsatları bağlantıya dönüştürmek için yayıncılarla iletişime geçiyorum." },
            { icon: Scale, title: "Bağlantı profilini dengeli tutuyorum", text: "Bağlantı metinlerinin hep aynı anahtar kelimeden oluşması doğal görünmez. Marka adı, genel ifadeler ve anahtar kelimeler arasında doğal bir denge kuruyorum." },
          ]}
        />

        <ProcessTimeline
          title="Sayfa dışı SEO çalışması adım adım nasıl ilerliyor?"
          intro="Önce mevcut bağlantı profilinizi ve rakiplerinizi analiz ediyorum. Riskleri temizledikten sonra, onayınızı aldığım bir yayın planıyla düzenli ve doğal bir bağlantı kazanımına başlıyoruz."
          ctaLabel="Ücretsiz bağlantı analiziyle başlayalım"
          steps={[
            {
              tag: "1. hafta",
              title: "Bağlantı profili ve rakip analizi",
              paragraphs: [
                "Ahrefs ve Semrush gibi araçlarla sitenize gelen tüm bağlantıları inceliyorum: hangi sitelerden geliyor, ne kadar güvenilir, hangi metinlerle verilmiş? Aynı analizi rakipleriniz için de yapıyor, onların hangi sitelerden güç aldığını ortaya çıkarıyorum.",
                "Bu analizin sonunda hem sitenizi riske atan bağlantıların hem de kazanabileceğiniz fırsatların net bir listesi ortaya çıkıyor.",
              ],
            },
            {
              tag: "Gerekirse",
              tone: "accent",
              title: "Zararlı bağlantı temizliği",
              paragraphs: [
                "Spam, alakasız ya da yapay görünen bağlantılar tespit edildiyse önce bu riskleri temizliyorum. Mümkün olan durumlarda bağlantıyı veren siteden kaldırılmasını talep ediyorum; ciddi risk oluşturan ve kaldırılamayan bağlantılar için Google'ın reddetme aracını dikkatli şekilde kullanıyorum.",
                "Reddetme aracı yanlış kullanıldığında faydalı bağlantıların da değerini düşürebildiği için bu adımı yalnızca gerçekten gerekli olduğunda uyguluyorum.",
              ],
            },
            {
              tag: "Ayrı bütçelendirilir",
              tone: "amber",
              title: "Yayın planı ve bütçe",
              paragraphs: [
                "Sektörünüze, hedef kelimelerinize ve bütçenize uygun bir yayın planı hazırlıyorum. Planda hangi sitelerde, hangi tür içeriklerle yer alacağınız ve her birinin neden seçildiği açıkça yer alıyor.",
                "Yayın maliyetleri siteye ve sektöre göre ciddi farklılık gösterdiği için bu kalem danışmanlık ücretinden ayrı bütçelendiriliyor. Listeyi önceden şeffaf şekilde paylaşıyorum; siz onaylamadan hiçbir harcama yapılmıyor.",
              ],
            },
            {
              tag: "Her ay",
              title: "Bağlantı kazanımı ve dijital PR",
              paragraphs: [
                "Onaylanan plana göre yayıncılarla iletişime geçiyor, içerikleri hazırlıyor ve yayınları takip ediyorum. Düzenli ve doğal bir hızla ilerlemek, tek seferde çok sayıda bağlantı almaktan çok daha güvenli ve kalıcı sonuç veriyor.",
              ],
            },
            {
              tag: "Her ay",
              title: "Ölçüm ve raporlama",
              paragraphs: [
                "Kazanılan bağlantıları, sitenin otorite değerlerindeki değişimi, bu bağlantılardan gelen ziyaretçileri ve sıralamalara etkisini raporluyorum. Hangi yayın türünün daha çok işe yaradığını görüp planı buna göre güncelliyorum.",
              ],
            },
          ]}
        />

        <ExampleGrid
          title="Bu durumlardan biri tanıdık geliyorsa, sayfa dışı SEO zamanı"
          intro="Sitenizin içi ne kadar iyi olursa olsun, dışarıdaki itibarı zayıfsa rekabetçi aramalarda geride kalırsınız. Aşağıdaki durumlar, otorite çalışmasına ihtiyaç duyduğunuzun işaretleri olabilir."
          quoteStyle="speech"
          items={[
            { icon: Swords, title: "Rakiplerin hep önde olması", quote: "İçeriğim daha iyi ama rakibim hep üstte", text: "Benzer kalitedeki sayfalar arasında Google genellikle daha güvenilir bulduğu siteyi öne çıkarır. Fark çoğu zaman bağlantı profilinde." },
            { icon: AlertTriangle, title: "Geçmişte satın alınmış bağlantılar", quote: "Yıllar önce bir backlink paketi almıştık", text: "Eski, düşük kaliteli bağlantılar bugün sitenizi aşağı çekiyor olabilir. Önce temizlik, sonra yeni yapılanma gerekebilir." },
            { icon: TrendingDown, title: "Güncellemeden sonra düşüş", quote: "Bir Google güncellemesinden sonra trafiğim düştü", text: "Bazı algoritma güncellemeleri doğrudan bağlantı kalitesine odaklanıyor. Bağlantı profilinin incelenmesi, düşüşün nedenini anlamaya yardımcı olur." },
            { icon: Building2, title: "Yeni bir marka olmak", quote: "Sitem yeni, kimse bizden bahsetmiyor", text: "Yeni sitelerin güven kazanması zaman alıyor. Doğru yayınlarda erken yer almak bu süreci hızlandırır." },
            { icon: Unlink, title: "Anılıp bağlantı verilmemesi", quote: "Haberlerde adımız geçiyor ama link yok", text: "Markanızın anıldığı yayınlar, kolayca bağlantıya dönüştürülebilecek en hızlı fırsatlardan biri." },
            { icon: Sparkles, title: "Yapay zekada görünmemek", quote: "ChatGPT rakiplerimi öneriyor, beni değil", text: "Yapay zeka araçları büyük ölçüde başka sitelerin bir marka hakkında söylediklerine bakıyor. Dijital PR bu görünürlüğü de destekler." },
          ]}
        />

        <ProofBand
          title="Otorite çalışmalarının rakamlara yansıması"
          results={[
            { code: "Proje D-1", metric: "DR 18 → 45", label: "Otorite artışı", detail: "Altı aylık editoryal bağlantı ve dijital PR çalışmasının ardından sitenin Domain Rating değerinde yakalanan yükseliş.", source: "Ahrefs Domain Rating analizi, 2025" },
            { code: "Spam temizliği", metric: "%0", label: "Zararlı bağlantı skoru", detail: "Hazırlanan reddetme dosyasının ardından sitenin zararlı bağlantı skorunun sıfırlanması.", source: "Semrush Backlink Audit" },
            { code: "Yönlendirme trafiği", metric: "+%140", label: "Nitelikli ziyaretçi artışı", detail: "Sektörel haber sitelerinden gelen doğrudan ziyaretçi trafiğindeki artış.", source: "Google Analytics 4" },
          ]}
        />

        <RelatedBand
          eyebrow="Bağlantı tek başına yetmez"
          title="Güçlü bir otorite, sağlam bir site ve iyi içeriklerle birleştiğinde işe yarar"
          text="Kaliteli bağlantılar sitenizin gücünü artırır; ama bu gücün sıralamaya dönüşmesi için sitenin teknik olarak sağlıklı ve sayfaların doğru aramalara göre kurgulanmış olması gerekir."
          links={[
            { icon: Signpost, title: "SEO danışmanlığı", href: "/seo-danismanligi", text: "Tüm alanları birlikte ele alan genel çalışma" },
            { icon: Wrench, title: "Teknik SEO", href: "/seo-hizmetleri/teknik-seo", text: "Tarama, indekslenme ve hız" },
            { icon: FileText, title: "Site içi SEO", href: "/seo-hizmetleri/sayfa-ici-seo", text: "Sayfaları doğru kelimelerle eşleştirmek" },
          ]}
        />

        <GuideShell
          id="sayfa-disi-seo-rehberi"
          eyebrow="Sayfa dışı SEO rehberi"
          title="Sayfa dışı SEO ve backlink hakkında bilmeniz gereken her şey"
          intro="Backlink konusu SEO'nun en çok yanlış anlaşılan alanlarından biri. Bu rehberde neyin işe yaradığını, neyin zarar verdiğini sade bir dille anlattım."
          toc={[
            { id: "sayfa-disi-seo-nedir", label: "Sayfa dışı SEO nedir?" },
            { id: "backlink-nedir", label: "Backlink nedir?" },
            { id: "iyi-backlink", label: "İyi bir backlink nasıl anlaşılır?" },
            { id: "zararli-backlink", label: "Zararlı backlinkler ve riskleri" },
            { id: "dijital-pr", label: "Dijital PR nedir?" },
            { id: "otorite", label: "Otorite ölçümleri ne anlatır?" },
          ]}
          cta={{ eyebrow: "Ücretsiz bağlantı analizi", title: "Bağlantılarınız sitenize zarar veriyor olabilir mi?", text: "Bağlantı profilinizi inceleyip riskleri ve fırsatları raporlayayım.", label: "Ücretsiz analiz isteyin" }}
          faqTitle="Sayfa dışı SEO hakkında sıkça sorulan sorular"
          faqItems={faqItems}
        >
          <div className="space-y-5">
            <GuideH2 id="sayfa-disi-seo-nedir">Sayfa dışı SEO nedir?</GuideH2>
            <GuideDefinition>
              Sayfa dışı SEO (off-page SEO), bir web sitesinin dışında gerçekleşen ve arama motorlarının o siteye
              duyduğu güveni etkileyen çalışmaların bütünüdür. Başka sitelerden alınan bağlantılar, dijital PR ve markanın
              internette anılması bu kapsamdadır.
            </GuideDefinition>
            <p>
              Sayfa içi SEO &ldquo;sayfam bu soruya iyi bir cevap veriyor mu?&rdquo; sorusuyla, sayfa dışı SEO ise
              &ldquo;başkaları bu siteye güveniyor mu?&rdquo; sorusuyla ilgilenir. Google, aynı soruya cevap veren
              sayfalar arasında daha güvenilir bulduğu siteyi öne çıkarma eğilimindedir.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="backlink-nedir">Backlink nedir?</GuideH2>
            <p>
              Backlink, başka bir web sitesinin sizin sitenize verdiği bağlantıdır. Bunu akademik dünyadaki atıflara
              benzetebiliriz: bir makaleye ne kadar çok saygın kaynak atıf yapıyorsa, o makale o kadar güvenilir kabul
              edilir. Google da güvenilir sitelerden gelen bağlantıları bir tür tavsiye olarak değerlendirir.
            </p>
            <p>
              Konuyu daha temelden ele aldığım <GuideLink href="/blog/backlink-nedir">backlink nedir</GuideLink> yazıma ve
              bağlantıları incelemek için kullanabileceğiniz <GuideLink href="/blog/en-iyi-backlink-analiz-araclari-2026">en iyi backlink analiz araçları</GuideLink> listeme
              göz atabilirsiniz.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="iyi-backlink">İyi bir backlink nasıl anlaşılır?</GuideH2>
            <p>Her bağlantı aynı değerde değildir. Değerli bir bağlantının genellikle şu özellikleri vardır:</p>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                ["Konuyla ilgili", "Bağlantıyı veren site, sizin sektörünüzle ya da konunuzla ilgilidir."],
                ["Gerçek okuyucusu var", "Site sadece bağlantı satmak için değil, okuyucuya hizmet etmek için vardır."],
                ["Doğal bir bağlamda", "Bağlantı, okuyucuya değer katan bir içeriğin içinde anlamlı bir yerde verilmiştir."],
                ["Güvenilir bir kaynaktan", "Site, kendi alanında bilinen ve saygın bir yayın ya da kurumdur."],
              ].map(([t, x]) => (
                <li key={t} className="rounded-2xl border border-line bg-canvas p-4">
                  <p className="font-semibold text-ink">{t}</p>
                  <p className="mt-1 text-[15px] leading-relaxed">{x}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <GuideH2 id="zararli-backlink">Zararlı backlinkler ve riskleri</GuideH2>
            <p>
              Google&apos;ın spam politikaları, sıralamayı manipüle etmek amacıyla bağlantı satın almayı ya da yapay bağlantı
              ağları kurmayı açıkça yasaklıyor. Ucuza satılan toplu bağlantı paketleri, alakasız dizinler ve bağlantı
              çiftlikleri bu kapsama giriyor ve sitenizin sıralama kaybetmesine, hatta manuel işlem almasına yol açabiliyor.
            </p>
            <p>
              Sitenizin geçmişte bir cezaya maruz kalıp kalmadığını anlamak için <GuideLink href="/blog/google-ban-kontrolu-nedir-ve-nasil-yapilir">Google ban kontrolü</GuideLink> yazımdaki
              adımları izleyebilirsiniz.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="dijital-pr">Dijital PR nedir?</GuideH2>
            <p>
              Dijital PR, markanızın haber siteleri, sektör yayınları ve popüler bloglarda doğal olarak yer almasını
              sağlayan çalışmalardır. Klasik PR&apos;dan farkı, hedefin sadece bilinirlik değil, aynı zamanda sitenize
              değerli bağlantılar kazandırmak olmasıdır.
            </p>
            <p>
              Haber değeri taşıyan bir araştırma, sektöre dair özgün veriler ya da güncel bir konuda uzman görüşü,
              gazetecilerin ve yayıncıların sizi kaynak olarak göstermesini sağlar. Bu tür bağlantılar satın alınan
              bağlantılardan çok daha değerli ve kalıcıdır.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="otorite">Otorite ölçümleri ne anlatır?</GuideH2>
            <p>
              Ahrefs&apos;in Domain Rating (DR) ya da Moz&apos;un Domain Authority (DA) gibi değerleri, bir sitenin bağlantı
              profilinin gücünü tahmin etmeye çalışan üçüncü taraf ölçümlerdir. Google bu değerleri kullanmaz; ancak
              sitenin bağlantı gücünü zaman içinde takip etmek ve rakiplerle karşılaştırmak için faydalı bir göstergedir.
            </p>
            <p>
              Önemli olan rakamın kendisi değil, ona nasıl ulaşıldığıdır. Düşük kaliteli bağlantılarla şişirilmiş bir
              değer, birkaç kaliteli bağlantıyla kazanılmış daha düşük bir değerden çok daha az işe yarar. Otorite
              kavramının SEO&apos;daki yerini <GuideLink href="/blog/seoda-otorite-nedir">SEO&apos;da otorite nedir</GuideLink> yazımda
              detaylı olarak anlattım.
            </p>
          </div>
        </GuideShell>
      </ServicePageLayout>
    </>
  );
}
