import { Metadata } from "next";
import {
  MapPin,
  Store,
  Star,
  Building2,
  Braces,
  Layers,
  EyeOff,
  PhoneOff,
  MessageSquareWarning,
  Copy,
  Bot,
  TrendingDown,
  Stethoscope,
  Scale,
  Wrench,
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
  title: "Yerel İşletme SEO Danışmanlığı",
  description: "Kuaför, veteriner, oto servis, restoran ve şubeli işletmeler için yerel SEO danışmanlığı. Google İşletme profili, tutarlı adres bilgileri ve yorumlarla “yakınımdaki” aramalarında bulunun.",
  alternates: {
    canonical: "/sektorel-seo-hizmetleri/yerel-isletme-seo",
  },
  openGraph: {
    title: "Yerel İşletme SEO Danışmanlığı | Ekim Demirci",
    description: "Mahallenizde, semtinizde ya da şehrinizde sizi arayan müşterinin Google Haritalar'da önce sizi görmesi için yerel SEO danışmanlığı.",
  },
  twitter: {
    title: "Yerel İşletme SEO Danışmanlığı | Ekim Demirci",
    description: "Mahallenizde, semtinizde ya da şehrinizde sizi arayan müşterinin Google Haritalar'da önce sizi görmesi için yerel SEO danışmanlığı.",
  },
};

const faqItems: Faq[] = [
  {
    question: "Google Haritalar'da ilk üç sıraya nasıl girilir?",
    answer: "Haritadaki ilk üç işletmelik alanda yer almak için doğrulanmış ve eksiksiz bir Google İşletme profili, doğru seçilmiş kategoriler, internetin her yerinde aynı yazılan işletme adı, adres ve telefon bilgileri, düzenli gelen gerçek müşteri yorumları ve web sitesinde güçlü yerel sinyaller gerekiyor. Aramayı yapan kişinin size uzaklığı da etkili; bunu değiştiremiyoruz ama geri kalan her şeyi düzenleyebiliyoruz.",
  },
  {
    question: "Müşteri yorumları sıralamayı gerçekten etkiler mi?",
    answer: "Evet. Yorumların sayısı, ne kadar yeni olduğu ve işletmenin yorumlara cevap verip vermediği hem harita sıralamasında hem de müşterinin seçiminde rol oynuyor. Önemli olan yorumların gerçek müşterilerden, düzenli aralıklarla gelmesi. Satın alınmış ya da toplu yazdırılmış yorumlar profilin askıya alınmasına kadar gidebilecek riskler taşıyor.",
  },
  {
    question: "NAP tutarlılığı nedir, neden önemlidir?",
    answer: "NAP; işletme adı (Name), adres (Address) ve telefon (Phone) bilgilerinin kısaltması. Bu bilgilerin web sitenizde, Google İşletme profilinizde, rehber sitelerinde ve sosyal medya hesaplarınızda birebir aynı yazılması gerekiyor. Bir yerde eski adres, başka bir yerde farklı telefon numarası görünüyorsa Google hangi bilginin doğru olduğundan emin olamıyor ve bu durum görünürlüğünüzü zayıflatıyor.",
  },
  {
    question: "Birden fazla şubem var, her şube için ayrı sayfa gerekir mi?",
    answer: "Evet. Her fiziki şube için ayrı bir Google İşletme profili ve web sitenizde o şubeye ait ayrı bir sayfa öneriyorum. Bu sayfada şubenin adresi, çalışma saatleri, yol tarifi, o şubede verilen hizmetler ve o şubeye gelen müşteri yorumları yer almalı. Böylece şubeler birbirinin önünü kesmiyor, her biri kendi bölgesinde bulunuyor.",
  },
  {
    question: "Semt ve ilçe sayfalarında kopya içerik riski nasıl önlenir?",
    answer: "Aynı metni sadece semt adını değiştirerek çoğaltmak Google'ın düşük kaliteli bulduğu bir yöntem. Ben her konum sayfasını o bölgeye özel bilgilerle hazırlıyorum: oraya nasıl ulaşılır, o bölgeden gelen müşterilerin sık sorduğu sorular, o bölgedeki işlerden örnekler. Gerçekten hizmet vermediğiniz yerler için sayfa açmıyorum.",
  },
  {
    question: "Fiziki dükkanım yok, eve hizmet veriyorum. Yerel SEO işime yarar mı?",
    answer: "Yarar. Tesisatçı, nakliyeci, temizlik firması gibi müşterinin adresine giden işletmeler, Google İşletme profilinde adreslerini gizleyip hizmet verdikleri bölgeleri tanımlayabiliyor. Web sitesinde de bu bölgelere yönelik doğru kurgulanmış sayfalarla hem haritada hem de normal arama sonuçlarında görünmek mümkün.",
  },
  {
    question: "Yerel SEO'nun sonuçları ne kadar sürede görülür?",
    answer: "Google İşletme profili ve adres bilgileri düzenlendikten sonra harita tarafındaki değişimler çoğu zaman ilk birkaç ay içinde fark ediliyor. Rekabetin yoğun olduğu şehir ve semtlerde kalıcı bir konuma oturmak daha uzun sürebiliyor. Süre; bölgedeki rakip sayısına, mevcut yorumlarınıza ve sitenizin durumuna göre değişiyor, bu yüzden ilk analizden sonra size daha net bir tablo veriyorum.",
  },
  {
    question: "Google İşletme profilimi kendim yönetebilir miyim?",
    answer: "Elbette. Profili ben kurup düzenledikten sonra günlük işleri (fotoğraf eklemek, yorumlara cevap vermek, gönderi paylaşmak) sizin ya da çalışanlarınızın yapabilmesi için basit bir rutin hazırlıyorum. İsterseniz bu kısmı da birlikte takip ediyoruz.",
  },
];

export default function LocalBusinessSEOPage() {
  return (
    <>
      <Breadcrumb items={[
        { name: "Sektörel SEO Hizmetleri", href: "/sektorel-seo-hizmetleri" },
        { name: "Yerel İşletme SEO", href: "/sektorel-seo-hizmetleri/yerel-isletme-seo" }
      ]} />
      <ServicePageLayout
        title="Yerel İşletme SEO Danışmanlığı"
        subtitle="Yakınınızdaki müşteri önce sizi bulsun"
        description="Kuaför, veteriner, oto servis ya da restoran fark etmez: müşteriniz telefonunu açıp “yakınımdaki” diye aradığında karşısına haritada üç işletme çıkıyor ve çoğu zaman seçim orada yapılıyor. Ben Google İşletme profilinizi, adres bilgilerinizin tutarlılığını, yorumlarınızı ve web sitenizdeki yerel sayfaları birlikte ele alıyorum; böylece semtinizde sizi arayan kişi önce sizi görüyor."
        canonicalUrl="https://ekimdemirci.com/sektorel-seo-hizmetleri/yerel-isletme-seo"
        afterHeroNode={
          <DemoSection
            id="harita-gorunurlugu"
            eyebrow="Harita sonuçları"
            title="Müşteri “yakınımdaki” diye arıyor. Sizi bulsun."
            intro="Yerel aramalarda Google sonuçların en üstüne bir harita ve üç işletme koyuyor. Bu üç işletmenin arasında olmak, telefonun çalmasıyla çalmaması arasındaki fark olabiliyor."
            window={
              <DemoWindow label="google.com/maps">
                <LocalPackDemo
                  query="yakınımdaki veteriner"
                  listings={[
                    { name: "Pati Veteriner Kliniği", category: "Veteriner", rating: 4.7, reviews: 186 },
                    { name: "Dost Hayvan Hastanesi", category: "Hayvan hastanesi", rating: 4.5, reviews: 241 },
                    { name: "Semt Veteriner", category: "Veteriner", rating: 4.4, reviews: 97 },
                    { name: "Can Dostlar Polikliniği", category: "Veteriner polikliniği", rating: 4.3, reviews: 58 },
                    { name: "İşletmeniz", category: "Veteriner", rating: 4.6, reviews: 34, brand: true },
                  ]}
                />
              </DemoWindow>
            }
            side={
              <DemoSide
                title="Seçim çoğu zaman haritada yapılıyor"
                text="Bir yere gitmem gerektiğinde ben de önce haritaya bakıyorum: kim yakın, kaç yorumu var, şu an açık mı? Müşterileriniz de büyük ihtimalle aynısını yapıyor. Haritada görünmeyen bir işletme, ne kadar iyi hizmet verirse versin bu karşılaştırmaya hiç giremiyor."
                points={[
                  "Google İşletme profilini eksiksiz ve doğru hale getirmek",
                  "Adres ve telefon bilgilerini her yerde aynı yazmak",
                  "Gerçek müşteri yorumlarını düzenli artırmak",
                  "Her şube ve hizmet bölgesi için ayrı sayfa kurmak",
                ]}
                ctaTitle="İşletmeniz haritada kaçıncı sırada?"
                ctaText="Google İşletme profilinizi ve bölgenizdeki rakipleri inceleyip en hızlı yükselebileceğiniz alanları raporlayayım."
                ctaLabel="Ücretsiz yerel analiz iste"
              />
            }
          />
        }
        icon="Settings"
        gradient="from-blue-500 via-sky-500 to-cyan-500"
        blogCategory="SEO Hizmetleri"
      >
        <ScopeGrid
          title="Yerel SEO'da neler yapıyorum?"
          intro="Yerel SEO, sadece haritada bir kayıt açmaktan ibaret değil. Müşterinin sizi bulduğu her yerde aynı, doğru ve güven veren bir işletme görmesi için şu alanlarda çalışıyorum."
          items={[
            { icon: MapPin, title: "Google İşletme profilinizi düzenliyorum", text: "Kategorileri, hizmetleri, çalışma saatlerini, fotoğrafları ve işletme açıklamasını gözden geçiriyor; eksik ya da hatalı bilgileri düzeltiyorum. Kopya kayıtlar ve yanlış harita konumları varsa onları da temizliyorum." },
            { icon: Layers, title: "Adres ve telefon bilgilerini tutarlı hale getiriyorum", text: "İşletme adınızın, adresinizin ve telefonunuzun web sitenizde, rehber sitelerinde ve sosyal medyada birebir aynı yazılmasını sağlıyorum. Eski adres ya da kapanmış numara gibi kalıntıları tek tek buluyorum." },
            { icon: Star, title: "Yorum sürecini planlıyorum", text: "Memnun müşterilerinizden düzenli yorum alabilmeniz için basit bir süreç kuruyor, olumsuz yorumlara nasıl ve ne dille cevap vereceğinizi birlikte belirliyoruz." },
            { icon: Building2, title: "Şubeler için ayrı sayfalar kuruyorum", text: "Birden fazla şubeniz varsa her biri için kendi adresi, saatleri, yol tarifi ve hizmetleriyle ayrı bir sayfa hazırlıyorum. Böylece şubeler birbirinin önünü kesmeden kendi bölgesinde bulunuyor." },
            { icon: Store, title: "Semt ve hizmet bölgesi sayfaları hazırlıyorum", text: "Eve hizmet veriyorsanız ya da birkaç semte birden çalışıyorsanız, gerçekten hizmet verdiğiniz bölgeler için o bölgeye özel bilgilerle sayfalar planlıyorum. Sadece semt adını değiştirip çoğaltılmış metin kullanmıyorum." },
            { icon: Braces, title: "Yerel işletme şemasını ekliyorum", text: "Adresinizi, konum bilginizi, çalışma saatlerinizi ve iletişim bilgilerinizi Google'ın doğrudan okuyabileceği yapılandırılmış veriyle işaretliyorum. Bu, işletmenizin doğru anlaşılmasını destekliyor." },
          ]}
        />

        <ProcessTimeline
          title="Yerel SEO çalışması adım adım nasıl ilerliyor?"
          intro="Önce işletmenizin haritadaki ve aramalardaki durumunu, bölgenizdeki rakiplerle birlikte inceliyorum. Ardından profil, site ve içerik çalışmaları birbirine paralel ilerliyor."
          ctaLabel="Ücretsiz yerel analizle başlayalım"
          steps={[
            {
              tag: "1. ve 2. hafta",
              title: "Harita ve konum analizi",
              paragraphs: [
                "Google İşletme profilinizi, bölgenizdeki rakiplerin profillerini ve hedef aramalarda haritada nerede durduğunuzu inceliyorum. Adres ve telefon bilgilerinizin internette nerelerde, nasıl yazıldığını tek tek çıkarıyorum.",
                "Bu incelemenin sonunda neyin eksik olduğunu, hangi aramalarda en hızlı yükselebileceğinizi ve hangi adımla başlamamız gerektiğini gösteren bir yol haritası hazırlıyorum.",
              ],
            },
            {
              tag: "Paralel yürür",
              tone: "accent",
              title: "Profil düzenleme ve teknik iyileştirmeler",
              paragraphs: [
                "Google İşletme profilinizi düzenlerken web sitenizin teknik tarafını da elden geçiriyorum. Yerel aramaların büyük kısmı telefondan yapıldığı için mobil hız, tek dokunuşla arama ve yol tarifi butonları bu aşamanın öncelikleri arasında.",
                "Yerel işletme şemasını ekliyor, rehber sitelerindeki tutarsız bilgileri düzeltiyorum.",
              ],
            },
            {
              tag: "1. aydan itibaren",
              title: "Şube, semt ve hizmet sayfaları",
              paragraphs: [
                "Şube sayfalarını ve hizmet verdiğiniz bölgeler için sayfaları planlayıp yazıyorum. Her sayfa, o bölgedeki müşterinin gerçekten merak ettiği bilgilere cevap veriyor: nerede, ne zaman açık, nasıl gelinir, hangi hizmetler var.",
                "Aynı dönemde yorum toplama sürecini başlatıyor, profil gönderileri ve fotoğraflar için size basit bir rutin bırakıyorum.",
              ],
            },
            {
              tag: "Ayrı bütçelendirilir",
              tone: "amber",
              title: "Yerel bağlantı ve tanınırlık çalışmaları",
              paragraphs: [
                "Yerel haber siteleri, sektör rehberleri ve bölgenizdeki kuruluşlarda işletmenizin doğru bilgilerle yer almasını sağlıyorum. Bu yayın çalışmalarının maliyeti siteye ve bölgeye göre değiştiği için ayrıca bütçelendiriliyor; onayınız olmadan herhangi bir harcama yapılmıyor.",
              ],
            },
            {
              tag: "Her ay",
              title: "Telefon ve yol tarifi odaklı ölçüm",
              paragraphs: [
                "Sıralamaya bakmakla yetinmiyorum. Haritadan gelen telefon aramalarını, yol tarifi taleplerini, web sitesi tıklamalarını ve form dönüşlerini ölçüyor, raporu bu sonuçlara göre hazırlıyorum. Planı da her ay bu verilere göre birlikte güncelliyoruz.",
              ],
            },
          ]}
        />

        <ExampleGrid
          title="İşletmenizde bu cümleler kuruluyorsa, yerel SEO zamanı"
          intro="Yerel işletme sahiplerinin en sık yaşadığı sorunlar genellikle şunlar:"
          quoteStyle="speech"
          items={[
            { icon: EyeOff, title: "Haritada görünmemek", quote: "Hemen yanımdaki dükkân çıkıyor, ben çıkmıyorum", text: "Profil eksikse, kategoriler yanlış seçilmişse ya da bilgiler tutarsızsa, müşteriye en yakın işletme siz olsanız bile haritada üst sıralarda yer almanız zorlaşıyor." },
            { icon: PhoneOff, title: "Çalmayan telefon", quote: "Eskiden telefon daha çok çalıyordu", text: "Bölgenize yeni rakipler girdiğinde ya da profiliniz uzun süre güncellenmediğinde, haritadan gelen aramalar fark ettirmeden azalabiliyor." },
            { icon: MessageSquareWarning, title: "Az yorum", quote: "Karşıdaki işletmenin yüzlerce yorumu var", text: "Yorum sayısı ve güncelliği hem sıralamayı hem de müşterinin kime gideceğini doğrudan etkiliyor. Düzenli bir süreç olmadan bu açık kapanmıyor." },
            { icon: Copy, title: "Yanlış bilgiler", quote: "Eski adresimiz hâlâ bazı sitelerde görünüyor", text: "Taşınmış ya da numara değiştirmiş işletmelerde eski bilgiler rehber sitelerinde kalıyor. Bu hem müşteriyi yanıltıyor hem de Google'ın size güvenini azaltıyor." },
            { icon: TrendingDown, title: "Şubelerin karışması", quote: "Kadıköy'de arayan Ataşehir şubesine düşüyor", text: "Şubelerin ayrı sayfaları ve doğru kurulmuş profilleri yoksa Google hangi şubeyi kime göstereceğine karar veremiyor." },
            { icon: Bot, title: "Yapay zekada görünmemek", quote: "ChatGPT'ye sordum, beni hiç saymadı", text: "İnsanlar artık “bu semtte iyi bir kuaför” gibi soruları yapay zekaya da soruyor. Tutarlı bilgiler, gerçek yorumlar ve güçlü yerel sayfalar bu cevaplarda yer almanızı destekliyor." },
          ]}
        />

        <ProofBand
          title="Yerel SEO projelerinden sonuçlar"
          results={[
            { code: "Yerel işletme", metric: "+%134", label: "Telefon araması artışı", detail: "Dört aylık yerel SEO ve harita optimizasyonu sürecinde bir işletmenin haritadan gelen telefon aramalarında elde edilen artış.", source: "Google Business Profile, 2025" },
            { code: "Harita sonuçları", metric: "İlk 3", label: "Yerel paket konumu", detail: "Hedef ilçelerde “yakınımdaki hizmet” türü aramalarda Google Haritalar'ın ilk üç işletmelik alanında kalıcı olarak yer alma.", source: "Ekim Demirci vaka çalışmaları" },
          ]}
        />

        <RelatedBand
          eyebrow="Yerel aramada öne çıkan sektörler"
          title="Sektörünüze özel yaklaşımı inceleyin"
          text="Bazı sektörlerde yerel SEO'nun kendine özgü kuralları var. Bu sektörler için ayrı sayfalarda daha detaylı bilgi veriyorum."
          links={[
            { icon: Stethoscope, title: "Sağlık ve klinik SEO", href: "/sektorel-seo-hizmetleri/saglik-ve-klinik-seo", text: "Hastaların güvenerek seçtiği klinik olmak" },
            { icon: Scale, title: "Avukatlar için SEO", href: "/sektorel-seo-hizmetleri/avukatlar-icin-seo-hizmeti", text: "Uzmanlık alanında ve şehrinizde bulunmak" },
            { icon: Wrench, title: "Teknik SEO", href: "/seo-hizmetleri/teknik-seo", text: "Hızlı ve sorunsuz bir site altyapısı" },
          ]}
        />

        <GuideShell
          id="yerel-seo-rehberi"
          eyebrow="Yerel SEO rehberi"
          title="Yerel işletme SEO'su hakkında bilmeniz gerekenler"
          intro="Yerel aramalarda Google'ın neye baktığını ve işletmenizi haritada öne çıkarmak için neler yapabileceğinizi sade bir dille anlattım."
          toc={[
            { id: "yerel-seo-nedir", label: "Yerel SEO nedir?" },
            { id: "isletme-profili", label: "Google İşletme profili" },
            { id: "nap", label: "Adres ve telefon tutarlılığı" },
            { id: "yorumlar", label: "Müşteri yorumları" },
            { id: "sube-sayfalari", label: "Şube ve semt sayfaları" },
            { id: "olcum", label: "Yerel SEO nasıl ölçülür?" },
          ]}
          cta={{ eyebrow: "Ücretsiz yerel analiz", title: "Müşterileriniz sizi haritada bulabiliyor mu?", text: "İşletmenizin Google Haritalar'daki durumunu ve bölgenizdeki rakipleri inceleyip fırsatları raporlayayım.", label: "Ücretsiz analiz isteyin" }}
          faqTitle="Yerel işletme SEO'su hakkında sıkça sorulan sorular"
          faqItems={faqItems}
        >
          <div className="space-y-5">
            <GuideH2 id="yerel-seo-nedir">Yerel SEO nedir?</GuideH2>
            <GuideDefinition>
              Yerel SEO, belirli bir şehirde ya da semtte dükkânı, ofisi veya hizmet bölgesi olan işletmelerin
              &ldquo;yakınımdaki&rdquo; ve &ldquo;şehir ya da semt adı + hizmet&rdquo; aramalarında Google Haritalar&apos;da
              ve normal arama sonuçlarında üst sıralarda yer alması için yapılan çalışmaların tümüdür.
            </GuideDefinition>
            <p>
              Genel SEO&apos;da hedef, bir konuyu arayan herkese ulaşmak. Yerel SEO&apos;da ise hedef daha net: sizin
              bölgenizde, sizin verdiğiniz hizmete şu an ihtiyacı olan kişi. &ldquo;Yakınımdaki veteriner&rdquo;,
              &ldquo;Bornova oto servis&rdquo; ya da &ldquo;açık kuaför&rdquo; diye arayan biri genellikle karar vermeye
              çok yakın; çoğu zaman birkaç dakika içinde arıyor ya da yola çıkıyor.
            </p>
            <p>
              Konuya daha genel bir giriş için <GuideLink href="/blog/yerel-seo-nedir">yerel SEO nedir</GuideLink> yazıma
              göz atabilirsiniz.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="isletme-profili">Google İşletme profili neden bu kadar önemli?</GuideH2>
            <p>
              Haritada görünen her işletmenin arkasında bir Google İşletme profili var. Müşterinin gördüğü puan, yorumlar,
              çalışma saatleri, fotoğraflar ve &ldquo;Ara&rdquo; ya da &ldquo;Yol tarifi&rdquo; butonları bu profilden geliyor.
              Profil ne kadar eksiksiz ve doğruysa, Google işletmenizi o kadar rahat önerebiliyor.
            </p>
            <p>
              En sık yapılan hatalar şunlar: ana kategorinin yanlış ya da çok genel seçilmesi, hizmetlerin hiç girilmemesi,
              tatil günlerinde saatlerin güncellenmemesi, yıllar önce yüklenmiş birkaç fotoğrafla yetinilmesi. Profilin nasıl
              kurulacağını adım adım <GuideLink href="/blog/google-my-business-nedir">Google İşletme profili</GuideLink> yazımda
              anlattım.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="nap">Adres ve telefon tutarlılığı (NAP) nedir?</GuideH2>
            <p>
              NAP; işletme adı, adres ve telefon bilgilerinin kısaltması. Google, işletmenizin gerçekten orada olduğundan emin
              olmak için bu bilgileri farklı kaynaklarda karşılaştırıyor: web siteniz, işletme profiliniz, rehber siteleri,
              sosyal medya hesaplarınız. Bilgiler her yerde aynıysa güven artıyor; farklıysa kafa karışıyor.
            </p>
            <p>
              Küçük farklar bile sorun çıkarabiliyor. &ldquo;Cad.&rdquo; ile &ldquo;Caddesi&rdquo;, eski bir sabit hat ile yeni
              cep numarası ya da taşınmadan önceki adres... Bu yüzden çalışmanın başında işletmenizin internette geçtiği yerleri
              tek tek listeliyor ve hepsini aynı bilgiye çekiyorum.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="yorumlar">Müşteri yorumları nasıl artırılır?</GuideH2>
            <p>
              Yorumlar hem sıralamada hem de müşterinin kararında belirleyici. Çoğu memnun müşteri yorum yazmayı sadece
              unutuyor; bir hatırlatma, kasada duran bir QR kod ya da işlem sonrası gönderilen kısa bir mesaj çoğu zaman yeterli
              oluyor. Önemli olan bunu bir kerelik kampanya gibi değil, düzenli bir alışkanlık gibi yapmak.
            </p>
            <p>
              Olumsuz yorumlar da işin parçası. Sakin, kısa ve çözüm odaklı bir cevap, o yorumu okuyan diğer müşterilere
              işletmenin ilgili olduğunu gösteriyor. Satın alınmış ya da tanıdıklara yazdırılmış yorumlardan ise kesinlikle
              uzak durmak gerekiyor; Google bu tür yorumları silebiliyor, profili kısıtlayabiliyor.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="sube-sayfalari">Şube ve semt sayfaları nasıl hazırlanmalı?</GuideH2>
            <p>
              Birden fazla şubesi olan bir işletmenin en sık yaptığı hata, tüm şubeleri tek bir &ldquo;İletişim&rdquo;
              sayfasında listelemek. Her şubenin kendi sayfası olduğunda Google hangi şubeyi hangi bölgedeki kişiye göstereceğini
              çok daha kolay anlıyor; müşteri de aradığı bilgiye doğrudan ulaşıyor.
            </p>
            <p>
              İyi bir şube sayfasında adres ve harita, çalışma saatleri, telefon, o şubede verilen hizmetler, park ya da ulaşım
              bilgisi ve o şubeye ait yorumlar bulunur. Semt sayfalarında da kural aynı: sadece semt adı değiştirilmiş kopya
              metinler yerine o bölgeye gerçekten özgü bilgiler. Hizmet vermediğiniz bir semt için sayfa açmak ise uzun vadede
              size zarar veriyor.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="olcum">Yerel SEO nasıl ölçülür?</GuideH2>
            <p>
              Yerel SEO&apos;da asıl soru &ldquo;kaçıncı sıradayım?&rdquo; değil, &ldquo;bu çalışma bana kaç müşteri
              getirdi?&rdquo;. Google İşletme profili; telefon aramalarını, yol tarifi taleplerini ve web sitesi tıklamalarını
              ayrı ayrı gösteriyor. Web sitesi tarafında ise form gönderimleri ve telefon tıklamaları ölçülebiliyor.
            </p>
            <p>
              Sıralama takibi de önemli ama harita sonuçları aramayı yapan kişinin konumuna göre değiştiği için tek bir sayıya
              bakmak yanıltıcı olabiliyor. Ben sıralamayı bölgenizin farklı noktalarından kontrol ediyor, raporu da telefon ve
              yol tarifi gibi gerçek müşteri hareketleriyle birlikte sunuyorum.
            </p>
          </div>
        </GuideShell>
      </ServicePageLayout>
    </>
  );
}
