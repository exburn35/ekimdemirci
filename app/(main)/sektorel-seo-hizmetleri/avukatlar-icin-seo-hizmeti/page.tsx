import { Metadata } from "next";
import {
  Scale,
  BookOpen,
  ShieldCheck,
  MapPin,
  Braces,
  UserCheck,
  EyeOff,
  TrendingDown,
  Megaphone,
  Users,
  SearchX,
  Bot,
  Building2,
  Stethoscope,
  FileText,
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
  title: "Avukatlar için SEO Hizmetleri",
  description: "Hukuk büroları ve avukatlar için SEO danışmanlığı. Uzmanlık alanı sayfaları, bilgilendirici hukuk içerikleri ve şehir aramalarıyla, meslek kurallarına uygun şekilde müvekkillerin sizi bulmasını sağlayın.",
  alternates: {
    canonical: "/sektorel-seo-hizmetleri/avukatlar-icin-seo-hizmeti",
  },
  openGraph: {
    title: "Avukatlar için SEO Hizmetleri | Ekim Demirci",
    description: "Boşanmadan iş hukukuna, müvekkilin hukuki sorusunu Google'a yazdığı anda karşısına güvenilir bir kaynak olarak çıkmanız için SEO danışmanlığı.",
  },
  twitter: {
    title: "Avukatlar için SEO Hizmetleri | Ekim Demirci",
    description: "Boşanmadan iş hukukuna, müvekkilin hukuki sorusunu Google'a yazdığı anda karşısına güvenilir bir kaynak olarak çıkmanız için SEO danışmanlığı.",
  },
};

const faqItems: Faq[] = [
  {
    question: "Avukatlık mesleğindeki reklam yasağı SEO yapmaya engel mi?",
    answer: "Hayır, ama dikkatli olmayı gerektiriyor. Avukatlık mesleğinde reklam ve tanıtım kuralları sıkı; müvekkil yönlendiren, abartılı ya da başka meslektaşlarla kıyaslayan ifadeler sorun yaratabiliyor. SEO ise özünde bilgilendirici ve doğru içerik üretmeye dayanıyor. Ben içerikleri bu çerçevede, vaat değil bilgi veren bir dille hazırlıyorum. Kurallara uygunluk konusunda son değerlendirme her zaman sizin ve gerekirse bağlı olduğunuz baronun görüşüne dayanmalı.",
  },
  {
    question: "Hukuk siteleri Google'da neden daha sıkı değerlendiriliyor?",
    answer: "Google, insanların parasını, haklarını ya da hayatını etkileyebilecek konuları YMYL (Your Money or Your Life) olarak sınıflandırıyor ve bu konulardaki içeriklere daha yüksek bir kalite standardı uyguluyor. Hukuk da bu konuların başında geliyor. İçeriği kimin yazdığı, yazarın gerçekten avukat olup olmadığı ve bilgilerin güncel olup olmadığı sıralamada belirleyici oluyor.",
  },
  {
    question: "Her uzmanlık alanı için ayrı sayfa gerekir mi?",
    answer: "Evet, öneririm. Boşanma davası arayan biriyle işe iade davası arayan birinin soruları tamamen farklı. Boşanma, iş, ceza, kira ya da miras hukuku gibi her alan için ayrı ve detaylı bir sayfa, hem müvekkilin aradığını hızlıca bulmasını hem de Google'ın büronuzun hangi konularda çalıştığını anlamasını sağlıyor.",
  },
  {
    question: "Blog yazıları gerçekten müvekkil getirir mi?",
    answer: "Doğru konularda yazıldığında evet. İnsanlar avukata ulaşmadan önce çoğu zaman sorunlarını araştırıyor: “kıdem tazminatı nasıl hesaplanır”, “anlaşmalı boşanma ne kadar sürer”, “kiracı tahliyesi için ne gerekir” gibi. Bu sorulara açık ve doğru cevap veren yazılar, kişinin büronuzu ilk temas noktası olarak tanımasını sağlıyor.",
  },
  {
    question: "İçerikleri kim yazıyor? Hukuki doğruluk nasıl sağlanıyor?",
    answer: "İçerik planını ve SEO çerçevesini ben hazırlıyorum, metinleri de bu çerçevede yazıyorum. Ancak hukuki doğruluk konusunda son söz her zaman sizde: yayına almadan önce her içeriği büronuzdaki bir avukatın kontrol etmesini ve içeriğin altında kontrol eden avukatın adının yer almasını öneriyorum. Bu hem doğruluk hem de Google'ın güven değerlendirmesi açısından önemli.",
  },
  {
    question: "Hukuk büroları için Google Haritalar önemli mi?",
    answer: "Çok önemli. “Kadıköy avukat” ya da “yakınımdaki iş avukatı” gibi aramalarda Google, sonuçların en üstüne harita ve birkaç büro koyuyor. Eksiksiz bir Google İşletme profili, doğru kategoriler ve büro bilgilerinin her yerde tutarlı olması bu alanda görünmenizi destekliyor.",
  },
  {
    question: "Müvekkil yorumları toplamak meslek kurallarına uygun mu?",
    answer: "Bu konu hassas ve yoruma açık. Müvekkillerin kendiliğinden yazdığı yorumlara saygılı ve gizlilik ilkesine uygun şekilde cevap vermek genellikle sorun yaratmıyor; ancak yorum karşılığında bir şey vaat etmek ya da yorumları reklam malzemesi gibi kullanmak riskli. Bu konuda nasıl ilerleyeceğimize sizin mesleki değerlendirmenizle birlikte karar veriyoruz.",
  },
  {
    question: "Avukatlar için SEO'nun sonuçları ne kadar sürede görülür?",
    answer: "Harita ve teknik düzenlemelerin etkisi genellikle ilk aylarda görülmeye başlıyor. Büyük şehirlerde ve rekabetçi uzmanlık alanlarında kalıcı sıralama ise çoğu zaman altı ay ile bir yıl arasında oturuyor. Hukukta güven birikimli büyüyor; düzenli yayımlanan doğru içerikler zamanla en güçlü varlığınız oluyor.",
  },
];

export default function LawyersSEO() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Sektörel SEO Hizmetleri", href: "/sektorel-seo-hizmetleri" },
        { name: "Avukatlar için SEO", href: "/sektorel-seo-hizmetleri/avukatlar-icin-seo-hizmeti" }
      ]} />
      <ServicePageLayout
        title="Avukatlar için SEO"
        subtitle="Müvekkil hukuki sorusunu sorduğunda sizi bulsun"
        description="Hukuki bir sorunu olan kişi çoğu zaman önce Google'a yazıyor: “anlaşmalı boşanma ne kadar sürer”, “işten çıkarıldım haklarım neler”, “İstanbul kira avukatı”. Ben büronuzun uzmanlık alanlarını, bilgilendirici hukuk içeriklerini ve şehir aramalarındaki görünürlüğünüzü birlikte ele alıyorum; bunu da avukatlık mesleğinin tanıtım kurallarını gözeterek yapıyorum."
        canonicalUrl="https://ekimdemirci.com/sektorel-seo-hizmetleri/avukatlar-icin-seo-hizmeti"
        afterHeroNode={
          <DemoSection
            id="arama-gorunurlugu"
            eyebrow="Arama sonuçları"
            title="Müvekkil avukat arıyor. Karşısına siz çıkın."
            intro="Hukuki bir konuda avukat arayan kişi, ilk sayfadaki birkaç büroya bakıp karar veriyor. Uzmanlık alanınızda ve şehrinizde o sayfada yer almak, ilk görüşmeye giden en kısa yol."
            window={
              <DemoWindow label="google.com">
                <SerpDemo
                  query="boşanma avukatı istanbul"
                  results={[
                    { domain: "avukatrehberi.com", title: "İstanbul Boşanma Avukatları Listesi", snippet: "İstanbul'da aile hukuku alanında çalışan avukatları ilçeye göre listeleyin ve iletişim bilgilerine ulaşın." },
                    { domain: "ornekhukuk.com", title: "Boşanma Davası Süreci | Aile Hukuku", snippet: "Anlaşmalı ve çekişmeli boşanma davalarının aşamaları, gerekli belgeler ve dikkat edilmesi gereken noktalar." },
                    { domain: "hukukportali.com", title: "Boşanma Davası Nasıl Açılır? Rehber", snippet: "Boşanma davası açmak için izlenmesi gereken adımlar ve sık sorulan sorular." },
                    { domain: "sehirhukuk.com", title: "Aile Hukuku ve Boşanma Davaları", snippet: "Velayet, nafaka ve mal paylaşımı konularında bilgilendirme." },
                    { domain: "hukukburonuz.com", title: "İstanbul Boşanma Avukatı | Hukuk Büronuz", snippet: "Anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davaları hakkında açık ve güncel bilgiler. İletişim ve görüşme talebi.", brand: true },
                  ]}
                />
              </DemoWindow>
            }
            side={
              <DemoSide
                title="Güven, ilk aramada başlıyor"
                text="Hukuki bir sorunla karşılaşan biri genellikle stresli ve acelecidir; sorusuna açık cevap veren, kim olduğunu net gösteren bir büroya güvenir. Arama sonuçlarında görünmeyen bir büro, ne kadar deneyimli olursa olsun bu ilk değerlendirmenin dışında kalıyor."
                points={[
                  "Her uzmanlık alanı için ayrı ve detaylı sayfa kurmak",
                  "Müvekkilin sorularına cevap veren içerikler hazırlamak",
                  "Avukatların uzmanlığını Google'a net şekilde göstermek",
                  "Şehir ve semt aramalarında görünür olmak",
                ]}
                ctaTitle="Büronuz arama sonuçlarında kaçıncı sırada?"
                ctaText="Büronuzun Google'daki ve haritadaki durumunu inceleyip en hızlı yükselebileceğiniz alanları raporlayayım."
                ctaLabel="Ücretsiz büro analizi iste"
              />
            }
          />
        }
        icon="Settings"
        gradient="from-emerald-600 via-green-600 to-teal-600"
        blogCategory="SEO Hizmetleri"
      >
        <ScopeGrid
          title="Avukatlar için SEO'da neler yapıyorum?"
          intro="Hukukta SEO, güven ve doğrulukla başlıyor. Google'ın hukuk içeriklerinde aradığı uzmanlık sinyallerini kurarken, müvekkilin büro seçerken baktığı her yerde doğru ve güçlü görünmenizi sağlıyorum."
          items={[
            { icon: Scale, title: "Uzmanlık alanı sayfaları kuruyorum", text: "Boşanma, iş, ceza, kira, miras gibi çalıştığınız her alan için ayrı sayfalar planlıyorum. Her sayfa o alanda müvekkilin aklındaki sorulara cevap veriyor ve büronuzun o konuda ne yaptığını açıkça anlatıyor." },
            { icon: BookOpen, title: "Bilgilendirici hukuk içerikleri hazırlıyorum", text: "“Kıdem tazminatı nasıl hesaplanır?”, “Anlaşmalı boşanma ne kadar sürer?” gibi insanların gerçekten aradığı sorulara sade ve doğru cevaplar veren yazılar planlıyorum. Her içeriğin yayından önce bir avukat tarafından kontrol edilmesini öneriyorum." },
            { icon: UserCheck, title: "Avukat profillerini güçlendiriyorum", text: "Avukatların eğitimini, baro sicilini, uzmanlık alanlarını ve yayınlarını içeren profil sayfaları hazırlıyorum. Böylece hem müvekkil hem de Google içeriklerin gerçek bir hukukçudan geldiğini görebiliyor." },
            { icon: ShieldCheck, title: "Tanıtım kurallarını gözetiyorum", text: "Avukatlık mesleğinde reklam ve tanıtım kuralları sıkı. Bu yüzden “en iyi”, “kesin kazanırsınız” gibi vaatlerden ve yönlendirici ifadelerden uzak, bilgi veren bir dil kullanıyorum." },
            { icon: MapPin, title: "Şehir ve harita görünürlüğünü artırıyorum", text: "Google İşletme profilinizi eksiksiz hale getiriyor, doğru kategorileri seçiyor ve büro bilgilerinizin internetin her yerinde tutarlı olmasını sağlıyorum. Şehir ve semt aramaları için gereken yerel sinyalleri kuruyorum." },
            { icon: Braces, title: "Hukuk bürosu şemalarını ekliyorum", text: "Büro, avukat ve iletişim bilgilerini Google'ın doğrudan okuyabileceği yapılandırılmış veriyle işaretliyorum. Bu, büronuzun ve avukatlarınızın doğru anlaşılmasını destekliyor." },
          ]}
        />

        <ProcessTimeline
          title="Avukatlar için SEO çalışması adım adım nasıl ilerliyor?"
          intro="Önce büronuzun Google'daki durumunu, uzmanlık alanlarınızdaki rekabeti ve güven sinyallerini inceliyorum. Ardından teknik, yerel ve içerik çalışmaları paralel ilerliyor."
          ctaLabel="Ücretsiz büro analiziyle başlayalım"
          steps={[
            {
              tag: "1. ve 2. hafta",
              title: "Büro ve rekabet analizi",
              paragraphs: [
                "Sitenizi Google'ın hukuk gibi hassas konulardaki kalite beklentilerine göre inceliyorum: avukat bilgileri ne kadar görünür, içerikleri kim yazıyor, bilgiler güncel mi? Aynı zamanda uzmanlık alanlarınızdaki aramaları, şehrinizdeki rakip büroları ve haritadaki konumunuzu analiz ediyorum.",
                "Bu analizin sonunda hangi alanlarda en hızlı fırsat olduğunu ve hangi adımla başlamamız gerektiğini gösteren bir yol haritası hazırlıyorum. Önceliklere birlikte karar veriyoruz.",
              ],
            },
            {
              tag: "Paralel yürür",
              tone: "accent",
              title: "Teknik ve yerel düzenlemeler",
              paragraphs: [
                "Sitenin teknik altyapısını, mobil hızını ve iletişim akışını düzenliyorum. Hukuki sorunu olan biri çoğu zaman telefondan arıyor; tek dokunuşla arama ve kolay iletişim formu bu yüzden öncelikli.",
                "Aynı dönemde Google İşletme profilinizi ve büro bilgilerinizin tutarlılığını elden geçiriyorum.",
              ],
            },
            {
              tag: "1. aydan itibaren",
              title: "Uzmanlık sayfaları ve hukuk içerikleri",
              paragraphs: [
                "Uzmanlık alanı sayfalarını yeniden kurguluyor, müvekkillerin gerçekten sorduğu sorulara göre bilgilendirici içerikler planlıyorum. Her içeriğin büronuzdaki bir avukat tarafından kontrol edilmesini ve kontrol eden avukatın adının içerikte yer almasını sağlıyorum.",
                "Tüm metinleri avukatlık mesleğinin tanıtım kurallarını gözeten, vaat değil bilgi veren bir dille hazırlıyorum.",
              ],
            },
            {
              tag: "Ayrı bütçelendirilir",
              tone: "amber",
              title: "Otorite ve dijital PR çalışmaları",
              paragraphs: [
                "Hukuk yayınları, haber siteleri ve sektörel platformlarda büronuzun ve avukatlarınızın uzman görüşleriyle yer almasını sağlıyorum. Bu yayın çalışmalarının maliyeti siteye göre değiştiği için ayrıca bütçelendiriliyor; onayınız olmadan herhangi bir harcama yapılmıyor ve hiçbir içerik sizin onayınız olmadan yayına girmiyor.",
              ],
            },
            {
              tag: "Her ay",
              title: "Görüşme talebi odaklı ölçüm",
              paragraphs: [
                "Sıralamaların yanında asıl önemli olanı ölçüyorum: telefon aramaları, iletişim formları, randevu talepleri ve hangi uzmanlık alanından ne kadar talep geldiği. Raporu bu sonuçlara göre hazırlıyor, planı da buna göre birlikte güncelliyoruz.",
              ],
            },
          ]}
        />

        <ExampleGrid
          title="Büronuzda bu cümleler kuruluyorsa, SEO zamanı"
          intro="Hukuk bürolarının en sık yaşadığı sorunlar genellikle şunlar:"
          quoteStyle="speech"
          items={[
            { icon: EyeOff, title: "Aramalarda görünmemek", quote: "Kendi uzmanlık alanımda arattığımda hiç çıkmıyorum", text: "Uzmanlık alanı sayfaları yoksa ya da yüzeyselse, Google büronuzun o konuda çalıştığını anlayamıyor ve sizi önermiyor." },
            { icon: Users, title: "Rehber sitelerin önde olması", quote: "İlk sayfada hep avukat listesi siteleri var", text: "Rehber ve portal siteleri güçlü olsa da detaylı uzmanlık sayfaları ve yerel sinyallerle büronuzun kendi sitesiyle de ilk sayfada yer alması mümkün." },
            { icon: Megaphone, title: "Tanıtım kısıtları", quote: "Reklam veremiyorum, insanlar beni nasıl bulacak?", text: "Avukatlık mesleğinde tanıtım kuralları sıkı. Bu yüzden kurallara uygun, bilgilendirici içeriklerle kazanılan organik görünürlük daha da değerli." },
            { icon: SearchX, title: "Okunmayan yazılar", quote: "Blog yazıyoruz ama kimse okumuyor", text: "Yazılar insanların gerçekten aradığı sorulara göre planlanmadığında, ne kadar emek verilse de arama sonuçlarında görünmüyor." },
            { icon: TrendingDown, title: "Güncellemelerle düşen trafik", quote: "Bir Google güncellemesinden sonra sitemiz geriledi", text: "Hukuk siteleri, kalite odaklı güncellemelerden en çok etkilenen sitelerden. Yazar bilgisi ve güven sinyallerinin güçlendirilmesi gerekiyor." },
            { icon: Bot, title: "Yapay zekada görünmemek", quote: "ChatGPT'ye sordum, başka büroları önerdi", text: "İnsanlar hukuki sorularını artık yapay zekaya da soruyor. Güçlü avukat profilleri ve güvenilir kaynaklarda yer almak bu cevaplarda görünmenizi destekliyor." },
          ]}
        />

        <RelatedBand
          eyebrow="İlgili hizmetler"
          title="Büronuz için diğer çalışmaları inceleyin"
          text="Hukuk büroları için SEO; yerel görünürlük, içerik ve teknik altyapının birlikte çalışmasıyla güçleniyor. Bu alanları ayrı sayfalarda daha detaylı anlattım."
          links={[
            { icon: Building2, title: "Yerel işletme SEO", href: "/sektorel-seo-hizmetleri/yerel-isletme-seo", text: "Şehrinizde ve haritada bulunmak" },
            { icon: FileText, title: "İçerik yazımı", href: "/icerik-yazimi", text: "Arama niyetine göre planlanmış içerikler" },
            { icon: Stethoscope, title: "Sağlık ve klinik SEO", href: "/sektorel-seo-hizmetleri/saglik-ve-klinik-seo", text: "Güvene dayalı bir başka YMYL sektörü" },
          ]}
        />

        <GuideShell
          id="avukat-seo-rehberi"
          eyebrow="Avukatlar için SEO rehberi"
          title="Hukuk büroları için SEO hakkında bilmeniz gerekenler"
          intro="Hukuk sektöründe SEO'nun neden farklı işlediğini ve büronuzun görünürlüğünü artırmak için nelere dikkat etmeniz gerektiğini sade bir dille anlattım."
          toc={[
            { id: "avukat-seo-nedir", label: "Avukatlar için SEO nedir?" },
            { id: "ymyl", label: "YMYL ve güven sinyalleri" },
            { id: "uzmanlik-sayfalari", label: "Uzmanlık alanı sayfaları" },
            { id: "hukuk-icerikleri", label: "Bilgilendirici hukuk içerikleri" },
            { id: "yerel", label: "Şehir aramaları ve harita" },
            { id: "kurallar", label: "Tanıtım kuralları ve SEO" },
          ]}
          cta={{ eyebrow: "Ücretsiz büro analizi", title: "Müvekkiller sizi Google'da bulabiliyor mu?", text: "Büronuzun Google ve haritadaki durumunu inceleyip fırsatları raporlayayım.", label: "Ücretsiz analiz isteyin" }}
          faqTitle="Avukatlar için SEO hakkında sıkça sorulan sorular"
          faqItems={faqItems}
        >
          <div className="space-y-5">
            <GuideH2 id="avukat-seo-nedir">Avukatlar için SEO nedir?</GuideH2>
            <GuideDefinition>
              Avukatlar için SEO, hukuk bürolarının ve avukatların web sitelerinin; uzmanlık alanı, hukuki soru ve
              &ldquo;şehir + avukat&rdquo; aramalarında güvenilir bir kaynak olarak üst sıralarda yer alması için yapılan
              arama motoru optimizasyonu çalışmalarıdır.
            </GuideDefinition>
            <p>
              Genel SEO prensipleri hukukta da geçerli; ancak öncelikler farklı. Hukuki bir sorunu olan kişi önce
              sorununu anlamaya çalışıyor, sonra ona yardım edebilecek birini arıyor. İyi bir hukuk sitesi bu iki ihtiyaca
              da cevap veriyor: soruyu açıkça yanıtlıyor ve yanıtın arkasındaki avukatın kim olduğunu net gösteriyor.
            </p>
            <p>
              Bu yüzden avukatlar için SEO; uzmanlık sayfaları, bilgilendirici içerikler, avukat profilleri ve yerel
              görünürlüğün birlikte ele alındığı bir çalışma. Bunlardan biri eksik kaldığında diğerlerinin etkisi de
              zayıflıyor.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="ymyl">YMYL nedir, hukuk sitelerini nasıl etkiler?</GuideH2>
            <p>
              YMYL (Your Money or Your Life), Google&apos;ın insanların parasını, haklarını, sağlığını ya da güvenliğini
              etkileyebilecek konular için kullandığı bir ifade. Hukuk bu konuların tam merkezinde. Yanlış ya da eski bir
              hukuki bilgi, okuyanın gerçek bir hak kaybı yaşamasına yol açabiliyor; Google da bu yüzden hukuk içeriklerine
              daha sıkı bir standart uyguluyor.
            </p>
            <p>
              Pratikte bu şu anlama geliyor: içeriği kimin yazdığı ve kontrol ettiği görünür olmalı, bilgiler güncel
              tutulmalı, büronun gerçek ve ulaşılabilir olduğu açıkça anlaşılmalı. Google&apos;ın kaliteyi nasıl
              değerlendirdiğini <GuideLink href="/blog/google-raters-guideline-nedir">Google Raters Guideline nedir</GuideLink> yazımda,
              yazar uzmanlığının önemini ise <GuideLink href="/blog/yazar-otoritesi-nedir-seodaki-onemi-nedir">yazar otoritesi nedir</GuideLink> yazımda
              detaylı olarak anlattım.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="uzmanlik-sayfalari">Uzmanlık alanı sayfaları nasıl olmalı?</GuideH2>
            <p>
              Birçok hukuk bürosu sitesinde &ldquo;Çalışma alanlarımız&rdquo; başlığı altında tek satırlık bir liste görüyorum:
              aile hukuku, iş hukuku, ceza hukuku... Bu liste ne müvekkile ne de Google&apos;a yeterli bilgi veriyor. Her
              alan için ayrı bir sayfa, o alanda insanların aradığı konulara cevap verdiğinde gerçekten işe yarıyor.
            </p>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                ["Boşanma ve aile hukuku", "Anlaşmalı ve çekişmeli boşanma, velayet, nafaka, mal paylaşımı."],
                ["İş hukuku", "Kıdem ve ihbar tazminatı, işe iade, fazla mesai alacakları."],
                ["Ceza hukuku", "Soruşturma ve kovuşturma süreçleri, ifade ve duruşma aşamaları."],
                ["Kira hukuku", "Tahliye, kira tespiti, kira artışı uyuşmazlıkları."],
              ].map(([t, x]) => (
                <li key={t} className="rounded-2xl border border-line bg-canvas p-4">
                  <p className="font-semibold text-ink">{t}</p>
                  <p className="mt-1 text-[15px] leading-relaxed">{x}</p>
                </li>
              ))}
            </ul>
            <p>
              Her sayfada sürecin genel olarak nasıl işlediği, hangi belgelerin gerektiği, sık sorulan sorular ve bu alanda
              çalışan avukatların profillerine bağlantı bulunması, sayfayı hem müvekkil hem de Google için güçlü kılıyor.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="hukuk-icerikleri">Bilgilendirici hukuk içerikleri nasıl yazılmalı?</GuideH2>
            <p>
              İnsanlar avukata ulaşmadan önce çoğu zaman kendi sorularını araştırıyor. &ldquo;Kıdem tazminatı nasıl
              hesaplanır&rdquo;, &ldquo;kiracı ne zaman tahliye edilebilir&rdquo; gibi sorulara açık, sade ve doğru cevap veren
              içerikler; kişinin büronuzu ilk temas noktası olarak tanımasını sağlıyor.
            </p>
            <p>
              Hukuk içeriklerinde iki şey özellikle önemli: güncellik ve sorumluluk. Mevzuat ve içtihat değiştikçe içeriklerin
              de güncellenmesi, her yazının altında kontrol eden avukatın adının ve son güncelleme tarihinin yer alması gerekiyor.
              Okuyana somut hukuki tavsiye gibi görünen kesin ifadeler yerine genel bilgi verip, kişisel durum için bir avukatla
              görüşmesini önermek de hem doğru hem de daha güvenli bir yaklaşım.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="yerel">Şehir aramaları ve Google Haritalar</GuideH2>
            <p>
              Avukat aramalarının önemli bir kısmı yerel: &ldquo;İzmir iş avukatı&rdquo;, &ldquo;Kadıköy boşanma avukatı&rdquo;,
              &ldquo;yakınımdaki avukat&rdquo;. Bu aramalarda Google genellikle sonuçların en üstünde bir harita ve birkaç büro
              gösteriyor. Bu alanda yer almak için eksiksiz bir Google İşletme profili, doğru kategoriler ve büro bilgilerinin
              her yerde aynı yazılması gerekiyor.
            </p>
            <p>
              Birden fazla şehirde ofisi olan bürolar için her ofisin ayrı sayfası ve ayrı profili olmalı. Detaylar için{" "}
              <GuideLink href="/blog/yerel-seo-nedir">yerel SEO nedir</GuideLink> ve{" "}
              <GuideLink href="/blog/google-my-business-nedir">Google İşletme profili</GuideLink> yazılarıma göz atabilirsiniz.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="kurallar">Tanıtım kuralları SEO&apos;yu nasıl etkiler?</GuideH2>
            <p>
              Avukatlık mesleğinde reklam ve tanıtım kuralları sıkı. Müvekkil yönlendiren, abartılı, başarı garantisi veren
              ya da meslektaşlarla kıyaslama yapan ifadeler sorun yaratabiliyor. Bu kısıtlar reklam seçeneklerini daraltırken,
              doğru ve bilgilendirici içeriklerle kazanılan organik görünürlüğü daha da değerli hale getiriyor.
            </p>
            <p>
              Ben içerikleri bu çerçevede, vaat değil bilgi veren bir dille hazırlıyorum. Yine de kurallar konusunda son
              değerlendirme her zaman sizde; emin olunmayan durumlarda bağlı olduğunuz baronun yaklaşımını esas almak en
              sağlıklısı.
            </p>
          </div>
        </GuideShell>
      </ServicePageLayout>
    </>
  );
}
