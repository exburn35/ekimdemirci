import { Metadata } from "next";
import {
  UserRound,
  FileHeart,
  MapPin,
  Star,
  Braces,
  UserSearch,
  SearchX,
  EyeOff,
  MessageSquareWarning,
  TrendingDown,
  Bot,
  PhoneOff,
  HeartPulse,
  Smile,
  Building2,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ServicePageLayout from "@/components/ServicePageLayout";
import LocalPackDemo from "@/components/service/LocalPackDemo";
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
  RelatedBand,
  ScopeGrid,
  type Faq,
} from "@/components/service/ServiceBlocks";

export const metadata: Metadata = {
  title: "Doktorlar için SEO Danışmanlığı",
  description: "Muayenehanesi olan ya da kendi adıyla hasta kabul eden hekimler için SEO danışmanlığı. Adınızla, branşınızla ve semtinizle arandığınızda Google'da ve haritada güvenilir şekilde karşınıza çıkmanız için çalışıyorum.",
  alternates: {
    canonical: "/sektorel-seo-hizmetleri/doktorlar-icin-seo-2",
  },
  openGraph: {
    title: "Doktorlar için SEO Danışmanlığı | Ekim Demirci",
    description: "Hastalar sizi adınızla ya da branşınızla aradığında ilk karşılaştıkları hekim siz olun. Hekim profili, tedavi içerikleri ve Google İşletme profili birlikte.",
  },
  twitter: {
    title: "Doktorlar için SEO Danışmanlığı | Ekim Demirci",
    description: "Hastalar sizi adınızla ya da branşınızla aradığında ilk karşılaştıkları hekim siz olun. Hekim profili, tedavi içerikleri ve Google İşletme profili birlikte.",
  },
};

const faqItems: Faq[] = [
  {
    question: "Hastalarım beni adımla arıyor, yine de SEO'ya ihtiyacım var mı?",
    answer: "Evet. Adınızla arama yapan hasta zaten sizi tanıyor ama karşısına ne çıktığı önemli. Kendi siteniz yerine eski bir rehber kaydı, başka bir hekimin reklamı ya da yanlış telefon numarası çıkıyorsa o hastayı kaybedebilirsiniz. İsim aramalarında sonuçların ilk sayfasını sizin kontrol ettiğiniz, doğru bilgiler taşıyan sayfaların doldurması gerekiyor.",
  },
  {
    question: "Hastanede çalışıyorum, ayrıca muayenehanem var. Hangi site öne çıkmalı?",
    answer: "Bu, hekimlerde sık rastlanan bir durum. Hastanenin hekim sayfası ile kendi siteniz aynı aramalarda yarışabiliyor. Genelde kendi sitenizi ana kaynak olarak konumlandırıyor, hastane sayfasında ve diğer profillerde aynı bilgilerin ve sitenize verilen bağlantının yer almasını sağlıyoruz. Böylece Google hepsinin aynı kişiyi anlattığını kolayca anlıyor.",
  },
  {
    question: "Hekim profili sayfasında neler olmalı?",
    answer: "Eğitim geçmişi, uzmanlık eğitimi aldığınız kurum, çalıştığınız yerler, odaklandığınız tedaviler, mesleki üyelikler, varsa yayınlar ve sunumlar. Bunlara ek olarak sizin yazdığınız ya da kontrol ettiğiniz içeriklerin bu profile bağlanması gerekiyor. Hem hasta hem Google içeriğin arkasında gerçek bir uzman olduğunu buradan görüyor.",
  },
  {
    question: "Hastalık ve tedavi yazılarını kendim mi yazmalıyım?",
    answer: "Hepsini sizin yazmanız gerekmiyor. Hastaların gerçekten sorduğu soruları ve konu planını ben çıkarıyorum, taslakları hazırlıyorum; tıbbi doğruluk kontrolünü ve son onayı siz veriyorsunuz. Sizin onayınızdan geçmeyen tıbbi bir bilgi yayına girmiyor. Bu hem güvenilirlik hem de sağlık tanıtım kuralları açısından önemli.",
  },
  {
    question: "Google İşletme profili muayenehane için ne kadar önemli?",
    answer: "Semt ve branş aramalarında çok önemli. “Kadıköy dermatolog” gibi bir aramada Google çoğu zaman en üstte haritayı ve üç işletmeyi gösteriyor. Profilinizin doğru kategoriyle açılmış, çalışma saatleri ve iletişim bilgileri güncel, düzenli yorum alan bir profil olması bu alanda yer almanın temel koşulu.",
  },
  {
    question: "Olumsuz bir hasta yorumuna nasıl cevap vermeliyim?",
    answer: "Sakin, kısa ve hasta mahremiyetine dikkat ederek. Yorumda tedaviyle ilgili detaylara girmek, hastanın sağlık bilgisini ifşa etmek anlamına gelebilir. Genelde yaşanan deneyim için anlayış gösteren ve konuşmayı telefon ya da muayenehaneye taşıyan bir cevap en doğrusu. Bunun için birlikte birkaç hazır cevap şablonu belirliyoruz.",
  },
  {
    question: "Doktor SEO'sunun sonuçları ne zaman görülür?",
    answer: "İsim aramalarında ve Google İşletme profilindeki düzenlemelerde değişim genelde ilk birkaç ayda fark ediliyor. Branş ve tedavi aramalarında kalıcı yer edinmek ise çoğu zaman altı ay ile bir yıl arasında bir süre istiyor; bu süre branşınızdaki rekabete ve sitenizin başlangıç durumuna göre değişiyor.",
  },
];

export default function DoctorsSEO() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Sektörel SEO Hizmetleri", href: "/sektorel-seo-hizmetleri" },
        { name: "Doktorlar için SEO", href: "/sektorel-seo-hizmetleri/doktorlar-icin-seo-2" }
      ]} />
      <ServicePageLayout
        title="Doktorlar için SEO Danışmanlığı"
        subtitle="Adınızla ve branşınızla bulunun"
        description="Bir hasta size gelmeden önce mutlaka adınızı Google'a yazıyor ya da “yakınımdaki kardiyolog” gibi bir arama yapıyor. Karşısına sizin siteniz, güncel bilgileriniz ve güven veren yorumlarınız çıkmalı. Ben hekim profilinizi, tedavi içeriklerinizi ve Google İşletme profilinizi birlikte ele alıp muayenehanenizin dijitalde doğru bilinmesi için çalışıyorum."
        canonicalUrl="https://ekimdemirci.com/sektorel-seo-hizmetleri/doktorlar-icin-seo-2"
        afterHeroNode={
          <DemoSection
            id="harita-gorunurlugu"
            eyebrow="Branş ve semt aramaları"
            title="Hasta branşınızı ve semtini yazıyor. Karşısına siz çıkın."
            intro="Hekim aramalarının büyük kısmı “branş + semt” şeklinde yapılıyor. Bu aramalarda Google en üstte haritayı gösteriyor ve hasta çoğu zaman ilk üç hekim arasından seçim yapıyor."
            window={
              <DemoWindow label="google.com/maps">
                <LocalPackDemo
                  query="kadıköy dermatolog"
                  listings={[
                    { name: "Dermatoloji Muayenehanesi", category: "Dermatolog", rating: 4.7, reviews: 186 },
                    { name: "Moda Cilt Kliniği", category: "Dermatoloji kliniği", rating: 4.5, reviews: 121 },
                    { name: "Bahariye Tıp Merkezi", category: "Tıp merkezi", rating: 4.3, reviews: 254 },
                    { name: "Cilt ve Saç Polikliniği", category: "Dermatolog", rating: 4.4, reviews: 72 },
                    { name: "Muayenehaneniz", category: "Dermatolog", rating: 4.8, reviews: 19, brand: true },
                  ]}
                />
              </DemoWindow>
            }
            side={
              <DemoSide
                title="İyi hekim olmak yetmiyor, bulunmak da gerekiyor"
                text="Hekimlerde sık rastlanan bir tablo var: hastalar onları çok seviyor ama Google'da adları arandığında eski bir rehber kaydı ya da yanlış bir telefon numarası çıkıyor. Muayenehanenin dijitaldeki hali, hekimin gerçek itibarını yansıtmıyor."
                points={[
                  "İsminiz arandığında ilk sayfayı doğru bilgilerle doldurmak",
                  "Google İşletme profilinizi branşınıza göre düzenlemek",
                  "Hekim profilinizle uzmanlığınızı Google'a göstermek",
                  "Hastaların sorduğu sorulara cevap veren içerikler yazmak",
                ]}
                ctaTitle="Adınız arandığında karşınıza ne çıkıyor?"
                ctaText="Adınızla ve branşınızla yapılan aramalarda nerede durduğunuzu inceleyip öncelikli adımları raporlayayım."
                ctaLabel="Ücretsiz hekim analizi iste"
              />
            }
          />
        }
        icon="Brain"
        gradient="from-teal-500 via-cyan-500 to-sky-500"
        blogCategory="SEO Hizmetleri"
      >
        <ScopeGrid
          title="Doktorlar için SEO çalışmasında neler yapıyorum?"
          intro="Bir hekimin dijitaldeki gücü; adının, uzmanlığının ve hastalarının yorumlarının internette tutarlı ve güvenilir şekilde görünmesine bağlı. Çalışmayı bu üç başlığın etrafında kuruyorum."
          items={[
            { icon: UserRound, title: "Hekim profilinizi güçlendiriyorum", text: "Eğitim geçmişiniz, uzmanlık alanlarınız, çalıştığınız kurumlar, üyelikleriniz ve yayınlarınızla detaylı bir hekim profili hazırlıyorum. Hem hasta hem Google, karşısında gerçek bir uzman olduğunu buradan görüyor." },
            { icon: UserSearch, title: "İsim aramalarını sahipleniyorum", text: "“Dr. ad soyad” şeklinde arandığınızda ilk sayfada kendi sitenizin, Google İşletme profilinizin ve doğru bilgiler taşıyan profillerinizin yer almasını hedefliyorum." },
            { icon: FileHeart, title: "Hastalık ve tedavi içerikleri planlıyorum", text: "Hastaların muayeneden önce ve sonra sorduğu soruları araştırıp branşınıza özel bir içerik planı çıkarıyorum. Taslakları ben hazırlıyorum, tıbbi kontrolü ve onayı siz veriyorsunuz." },
            { icon: MapPin, title: "Muayenehanenizi haritada öne çıkarıyorum", text: "Google İşletme profilinizi doğru kategori, güncel saatler ve eksiksiz bilgilerle düzenliyor; adres ve telefonunuzun internetin her yerinde aynı yazılmasını sağlıyorum." },
            { icon: Star, title: "Yorum sürecini düzenliyorum", text: "Memnun hastalarınızdan, etik sınırlar içinde düzenli yorum alabileceğiniz basit bir süreç kuruyorum. Olumsuz yorumlara mahremiyeti koruyarak nasıl cevap vereceğinizi birlikte belirliyoruz." },
            { icon: Braces, title: "Hekim şemalarını ekliyorum", text: "Sizi, muayenehanenizi ve tedavi sayfalarınızı Google'ın doğrudan okuyabileceği yapılandırılmış veriyle işaretliyorum. Böylece arama motorları hangi bilginin kime ait olduğunu net şekilde anlıyor." },
          ]}
        />

        <ProcessTimeline
          title="Doktor SEO çalışması adım adım nasıl ilerliyor?"
          intro="Önce adınızla ve branşınızla yapılan aramalarda nerede durduğunuzu çıkarıyorum. Ardından teknik düzenlemeler, profil ve içerik çalışmaları birbirini besleyerek ilerliyor."
          ctaLabel="Ücretsiz hekim analiziyle başlayalım"
          steps={[
            {
              tag: "1. ve 2. hafta",
              title: "Analiz ve yol haritası",
              paragraphs: [
                "Adınızla, branşınızla ve semtinizle yapılan aramalarda karşınıza neyin çıktığını tek tek inceliyorum. Kendi siteniz, Google İşletme profiliniz, rehber siteleri ve varsa çalıştığınız hastanenin sayfası bu analizin parçası. Bölgenizde aynı branşta öne çıkan hekimlerin neyi farklı yaptığına da bakıyorum.",
                "Sonunda hangi işin hangi sırayla yapılacağını gösteren sade bir yol haritası hazırlıyorum. Önceliklere birlikte karar veriyoruz.",
              ],
            },
            {
              tag: "Paralel yürür",
              tone: "accent",
              title: "Teknik düzenlemeler ve Google İşletme profili",
              paragraphs: [
                "Sitenizin hızını, mobilde kullanımını, randevu ve arama butonlarının kolay bulunmasını düzenliyorum. Hastaların çoğu sizi telefondan aradığı için bu kısım doğrudan randevuya dokunuyor.",
                "Aynı dönemde Google İşletme profilinizi, kategori seçimini ve farklı sitelerdeki adres ve telefon bilgilerinizi tutarlı hale getiriyorum.",
              ],
            },
            {
              tag: "1. aydan itibaren",
              title: "Hekim profili ve tedavi içerikleri",
              paragraphs: [
                "Hekim profilinizi detaylandırıyor, branşınızdaki hastalık ve tedavilerle ilgili sayfaları hastaların gerçekte sorduğu sorulara göre planlıyorum. Her içerik sizin kontrolünüzden geçiyor ve sayfada kimin onayladığı, ne zaman güncellendiği açıkça yazıyor.",
                "Metinleri sağlık tanıtım kurallarına uygun, bilgilendirici bir dille yazıyorum; “en iyi”, “garantili” gibi ifadelerden uzak duruyorum.",
              ],
            },
            {
              tag: "Ayrı bütçelendirilir",
              tone: "amber",
              title: "Backlink ve dijital PR",
              paragraphs: [
                "Sağlık portallarında, sektörel yayınlarda ve haber sitelerinde adınızın uzmanlık alanınızla birlikte geçmesi, Google'ın sizi bir otorite olarak görmesini destekliyor. Bu yayın çalışmalarının maliyeti siteden siteye değiştiği için ayrıca bütçelendiriliyor; hiçbir harcama sizin onayınız olmadan yapılmıyor.",
              ],
            },
            {
              tag: "Her ay",
              title: "Ölçüm ve raporlama",
              paragraphs: [
                "Sıralamaların yanında asıl önemli olanı takip ediyorum: Google İşletme profilinden gelen aramalar, yol tarifi talepleri, sitedeki randevu ve WhatsApp tıklamaları. Her ay bu sonuçları sade bir raporla paylaşıyor, planı birlikte güncelliyoruz.",
              ],
            },
          ]}
        />

        <ExampleGrid
          title="Bu cümleleri siz de kuruyorsanız, doktor SEO'su zamanı"
          intro="Hekimlerin dijital görünürlük konusunda en sık dile getirdiği durumlar şunlar:"
          quoteStyle="speech"
          items={[
            { icon: SearchX, title: "İsim aramasında kaybolmak", quote: "Adımı yazınca önce rehber siteleri çıkıyor", text: "Kendi siteniz yerine başka sitelerin çıkması, hastanın sizinle ilgili ilk izlenimini sizin kontrolünüz dışına bırakıyor." },
            { icon: EyeOff, title: "Haritada görünmemek", quote: "Semtimde dermatolog aratınca başkaları çıkıyor", text: "Google İşletme profili eksik ya da yanlış kategorideyse, muayenehaneniz ne kadar yakın olursa olsun harita sonuçlarında öne çıkmak zorlaşıyor." },
            { icon: MessageSquareWarning, title: "Az ya da eski yorum", quote: "Hastalarım memnun ama kimse yorum yazmıyor", text: "Yorumların sayısı ve güncelliği hem harita sıralamasını hem de hastanın hekim seçimini doğrudan etkiliyor." },
            { icon: TrendingDown, title: "Güncellemeyle düşen trafik", quote: "Yazılarım eskiden okunuyordu, şimdi kimse gelmiyor", text: "Sağlık içerikleri Google'ın kalite güncellemelerinden en çok etkilenen alanlardan. Yazar bilgisi ve güven sinyalleri güçlendirilmeden toparlanmak zor." },
            { icon: PhoneOff, title: "Ziyaret var, randevu yok", quote: "Siteme giren var ama telefon çalmıyor", text: "Ziyaretçi randevu butonunu bulamıyorsa ya da sayfa telefonda yavaş açılıyorsa, gelen trafik randevuya dönüşmüyor." },
            { icon: Bot, title: "Yapay zekada görünmemek", quote: "ChatGPT'ye sordum, beni hiç saymadı", text: "Hastalar artık yapay zeka asistanlarına da hekim soruyor. Güçlü bir hekim profili ve güvenilir kaynaklarda adınızın geçmesi bu cevaplarda yer almanızı destekliyor." },
          ]}
        />

        <CaseSpotlight
          eyebrow="Öne çıkan vaka"
          title="Dr. Ersoy Kocabıçak: günde 500 tıklamadan 45.000 tıklamaya"
          text="drersoykocabicak.com için Mart 2025'te başlattığım medikal güven ve içerik optimizasyonu çalışmalarının ardından, başlangıçta günlük 500 olan organik tıklama bir yıl içinde günlük 45.000 seviyesine ulaştı. Hekim profili, tedavi içerikleri ve güven sinyalleri bu büyümenin temelini oluşturdu."
          image="/dr-ersoy-kocabicak-ahrefs-verisi.png"
          imageAlt="Dr. Ersoy Kocabıçak sitesinin Ahrefs organik trafik büyüme grafiği"
          stats={[
            { value: "500 → 45.000", label: "Günlük organik tıklama" },
            { value: "12 ay", label: "Çalışma süresi" },
          ]}
          siteUrl="https://drersoykocabicak.com/"
          siteLabel="drersoykocabicak.com"
        />

        <RelatedBand
          eyebrow="Sağlık alanındaki diğer sayfalar"
          title="Yapınıza en uygun yaklaşımı inceleyin"
          text="Muayenehanenizin yanında bir klinik, poliklinik ya da hastane yapısı da varsa, bu sayfalarda o yapılara özel yaklaşımı anlattım."
          links={[
            { icon: HeartPulse, title: "Sağlık ve klinik SEO", href: "/sektorel-seo-hizmetleri/saglik-ve-klinik-seo", text: "Poliklinik ve klinikler için güven odaklı SEO" },
            { icon: Smile, title: "Diş hekimleri için SEO", href: "/sektorel-seo-hizmetleri/dis-hekimleri-icin-seo-2", text: "Tedavi ve semt aramalarında hasta kazanmak" },
            { icon: Building2, title: "Hastaneler için SEO", href: "/sektorel-seo-hizmetleri/hastaneler-icin-seo-2", text: "Çok branşlı yapılar için mimari" },
          ]}
        />

        <GuideShell
          id="doktor-seo-rehberi"
          eyebrow="Doktor SEO rehberi"
          title="Doktorlar için SEO hakkında bilmeniz gerekenler"
          intro="Bir hekimin Google'da nasıl bulunduğunu, hangi sayfaların neden önemli olduğunu ve kendi başınıza nereden başlayabileceğinizi sade bir dille anlattım."
          toc={[
            { id: "doktor-seo-nedir", label: "Doktorlar için SEO nedir?" },
            { id: "isim-aramalari", label: "İsim aramalarını sahiplenmek" },
            { id: "ymyl", label: "YMYL ve hekim uzmanlığı" },
            { id: "icerik", label: "Hastalık ve tedavi içerikleri" },
            { id: "google-isletme", label: "Google İşletme profili ve yorumlar" },
            { id: "kurallar", label: "Tanıtım kuralları ve SEO" },
          ]}
          cta={{ eyebrow: "Ücretsiz hekim analizi", title: "Hastalar sizi Google'da doğru buluyor mu?", text: "Adınızla ve branşınızla yapılan aramalardaki durumunuzu inceleyip öncelikleri raporlayayım.", label: "Ücretsiz analiz isteyin" }}
          faqTitle="Doktorlar için SEO hakkında sıkça sorulan sorular"
          faqItems={faqItems}
        >
          <div className="space-y-5">
            <GuideH2 id="doktor-seo-nedir">Doktorlar için SEO nedir?</GuideH2>
            <GuideDefinition>
              Doktorlar için SEO, bir hekimin adıyla, branşıyla ve muayenehanesinin bulunduğu bölgeyle yapılan aramalarda
              Google&apos;da ve Google Haritalar&apos;da güvenilir bir kaynak olarak üst sıralarda yer alması için yapılan
              arama motoru optimizasyonu çalışmalarıdır.
            </GuideDefinition>
            <p>
              Bir klinik ya da hastane SEO&apos;sundan farkı, merkezde bir kurumun değil bir kişinin olması. Hasta çoğu zaman
              kurumu değil hekimi seçiyor; arkadaşından duyduğu bir ismi arıyor, ameliyatını yapacak cerrahı araştırıyor ya da
              semtindeki dermatologlar arasında karşılaştırma yapıyor. Bu yüzden hekimin kişisel markası, yani adının
              internette nasıl göründüğü, çalışmanın en önemli parçası haline geliyor.
            </p>
            <p>
              SEO&apos;nun genel mantığını <GuideLink href="/blog/seo-nedir">SEO nedir</GuideLink> yazımda anlattım. Burada
              hekimlere özgü kısımlara odaklanıyorum.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="isim-aramalari">İsminiz arandığında ilk sayfayı nasıl sahiplenirsiniz?</GuideH2>
            <p>
              “Dr. ad soyad” araması, hekim için en değerli aramalardan biri; çünkü bu aramayı yapan kişi büyük ihtimalle
              zaten size gelmeye niyetli. Bu aramada ilk sayfada kendi sitenizin, Google İşletme profilinizin, çalıştığınız
              kurumun hekim sayfasının ve güvenilir sağlık platformlarındaki profillerinizin yer alması gerekiyor. Hepsinde
              adınız, unvanınız, adresiniz ve telefonunuz aynı şekilde yazmalı.
            </p>
            <p>
              Google&apos;ın bir kişiyi farklı sitelerde aynı varlık olarak tanıması için bu tutarlılık çok önemli. Konuya
              daha derin bakmak isterseniz <GuideLink href="/blog/entity-seo-nedir">entity SEO nedir</GuideLink> yazımı
              okuyabilirsiniz. Sitenizde kişi şeması kullanmak da bu eşleşmeyi kolaylaştırıyor; detayları{" "}
              <GuideLink href="/blog/yapilandirilmis-veri-nedir">yapılandırılmış veri nedir</GuideLink> yazımda bulabilirsiniz.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="ymyl">YMYL nedir, hekim uzmanlığı neden bu kadar önemli?</GuideH2>
            <p>
              YMYL (Your Money or Your Life), Google&apos;ın insanların sağlığını, parasını ya da güvenliğini etkileyebilecek
              konular için kullandığı bir ifade. Sağlık içerikleri bu grubun tam merkezinde. Google bu konularda içeriği
              kimin yazdığına, yazarın gerçekten o alanda uzman olup olmadığına ve bilgilerin güvenilir olup olmadığına çok
              daha sıkı bakıyor.
            </p>
            <p>
              Hekimler burada aslında avantajlı: uzmanlık zaten var, sadece görünür kılınması gerekiyor. Detaylı bir hekim
              profili, her içerikte yazar ya da kontrol eden hekim bilgisi ve profile bağlanan yayınlar bu görünürlüğü
              sağlıyor. Google&apos;ın kaliteyi nasıl değerlendirdiğini{" "}
              <GuideLink href="/blog/google-raters-guideline-nedir">Google Raters Guideline nedir</GuideLink>, yazar
              uzmanlığının önemini ise <GuideLink href="/blog/yazar-otoritesi-nedir-seodaki-onemi-nedir">yazar otoritesi nedir</GuideLink>{" "}
              yazımda anlattım.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="icerik">Hastalık ve tedavi içerikleri nasıl hazırlanmalı?</GuideH2>
            <p>
              Hastalar muayeneden önce de sonra da çok soru soruyor: Bu şikayet neden olur, hangi testler yapılır, tedavi
              ne kadar sürer, ameliyattan sonra ne zaman işe dönebilirim? Bu soruların cevaplarını sizin ağzınızdan veren
              içerikler hem arama trafiği getiriyor hem de hasta size gelmeden önce güven oluşturuyor.
            </p>
            <p>
              İyi bir içerik planı, rastgele konu seçmekle değil hastaların gerçekte ne aradığını bulmakla başlıyor. Bunun
              nasıl yapıldığını <GuideLink href="/blog/anahtar-kelime-nedir">anahtar kelime nedir</GuideLink> yazımda
              anlattım. Her yazıda kontrol eden hekimin adı ve güncellenme tarihi yer almalı; bilgi değiştiğinde içerik de
              güncellenmeli.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="google-isletme">Google İşletme profili ve hasta yorumları</GuideH2>
            <p>
              Branş ve semt aramalarında Google çoğu zaman sonuçların en üstünde bir harita ve üç işletme gösteriyor. Bu
              alanda yer almak için Google İşletme profilinizin doğru kategoriyle açılmış olması, çalışma saatlerinin ve
              iletişim bilgilerinin güncel olması ve düzenli olarak gerçek hasta yorumu alması gerekiyor.
            </p>
            <p>
              Yorumlara cevap verirken hasta mahremiyetine özellikle dikkat etmek gerekiyor; tedaviyle ilgili detaylara
              girmeden, kibar ve kısa cevaplar en doğrusu. Profil kurulumu için{" "}
              <GuideLink href="/blog/google-my-business-nedir">Google İşletme profili</GuideLink>, haritadaki sıralamanın
              genel mantığı için <GuideLink href="/blog/yerel-seo-nedir">yerel SEO nedir</GuideLink> yazılarıma göz
              atabilirsiniz.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="kurallar">Sağlık tanıtım kuralları SEO&apos;yu nasıl etkiler?</GuideH2>
            <p>
              Hekimlerin tanıtım yapmasına dair kurallar abartılı vaatleri, garanti ifadelerini ve hasta yönlendirici
              reklamları kısıtlıyor. Bu, reklam kanallarını daraltırken bilgilendirici içeriklerle kazanılan organik
              görünürlüğü daha da değerli hale getiriyor.
            </p>
            <p>
              Benim yaklaşımım basit: içerik hastanın sorusuna dürüst bir cevap veriyorsa hem kurallara uygun oluyor hem de
              Google&apos;ın sağlık içeriklerinde aradığı güvenilirlikle örtüşüyor. “En iyi”, “kesin sonuç”, “ağrısız
              garanti” gibi ifadeler ise hem kurallar hem de hastanın güveni açısından risk.
            </p>
          </div>
        </GuideShell>
      </ServicePageLayout>
    </>
  );
}
