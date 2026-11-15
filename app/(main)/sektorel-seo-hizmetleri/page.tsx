import { Metadata } from "next";
import { ShieldCheck, MapPin, Package, Clock, CalendarRange, Megaphone, Signpost, Bot, Wrench } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ServicePageLayout from "@/components/ServicePageLayout";
import SectorPicker from "@/components/sektorel/SectorPicker";
import { sectors } from "@/components/sektorel/sectors";
import { caseStudies } from "@/lib/case-studies";
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
  title: "Sektörel SEO Hizmetleri",
  description: "E-ticaret, sağlık, diş hekimliği, hukuk, güzellik, yerel işletmeler ve B2B şirketler için sektöre özel SEO danışmanlığı. Sektörünüzün arama davranışına göre hazırlanmış yol haritası.",
  alternates: {
    canonical: "/sektorel-seo-hizmetleri",
  },
  openGraph: {
    title: "Sektörel SEO Hizmetleri | Ekim Demirci",
    description: "Her sektörün arama davranışı farklı. Sektörünüze özel hazırlanmış SEO stratejisiyle doğru müşterilere ulaşın.",
  },
  twitter: {
    title: "Sektörel SEO Hizmetleri | Ekim Demirci",
    description: "Her sektörün arama davranışı farklı. Sektörünüze özel hazırlanmış SEO stratejisiyle doğru müşterilere ulaşın.",
  },
};

const faqItems: Faq[] = [
  {
    question: "Sektörel SEO nedir?",
    answer: "Sektörel SEO, arama motoru optimizasyonunun bir sektörün kendine özgü arama davranışına, rekabet yapısına ve kurallarına göre uyarlanmış halidir. Bir diş kliniği ile bir e-ticaret sitesinin müşterileri farklı şekillerde arama yapar; sektörel SEO bu farkları baştan hesaba katar.",
  },
  {
    question: "Genel bir SEO çalışması neden yetmez?",
    answer: "Temel SEO prensipleri her sektörde aynı olsa da öncelikler çok farklı. Sağlıkta güven ve uzmanlık sinyalleri, e-ticarette binlerce sayfanın teknik yönetimi, yerel işletmelerde harita sonuçları belirleyici. Sektörü bilmeden yapılan bir çalışma, en çok etki yaratacak işleri gözden kaçırabiliyor.",
  },
  {
    question: "Sektörümde hiç deneyiminiz yoksa ne olur?",
    answer: "Çalışmaya başlamadan önce sektörünüzün arama davranışını, rakiplerinizi ve varsa sektörel kuralları detaylı şekilde inceliyorum. Sektörünüze özel bir sayfa sitede yoksa bile ilk görüşmede yaklaşımımı somut örneklerle anlatıyorum; uygun olup olmadığına birlikte karar veriyoruz.",
  },
  {
    question: "Sağlık ve hukuk sitelerinde SEO neden daha zor?",
    answer: "Google, insanların sağlığını, parasını ya da güvenliğini etkileyebilecek konuları (YMYL) daha sıkı değerlendiriyor. Bu alanlarda içeriği kimin yazdığı, uzmanlığının nasıl kanıtlandığı ve bilgilerin güvenilirliği çok daha fazla önem taşıyor. Üstelik bu sektörlerde reklam ve tanıtım kuralları da sıkı olduğu için organik görünürlük ayrıca değer kazanıyor.",
  },
  {
    question: "Yerel işletmeler için SEO nasıl farklılaşır?",
    answer: "Yerel işletmelerde müşterilerin büyük bölümü \"yakınımdaki\" ya da şehir adıyla arama yapıyor. Bu aramalarda Google Haritalar sonuçları öne çıkıyor. Google İşletme profili, yorumlar ve konum bilgisi tutarlılığı bu yüzden en önemli konular arasında yer alıyor.",
  },
  {
    question: "Sektörel SEO danışmanlığı ne kadara mal olur?",
    answer: "Fiyat sektörden çok sitenizin büyüklüğüne, rekabet yoğunluğuna ve çalışmanın kapsamına bağlı. Aylık SEO danışmanlık paketlerim 20.000 TL'den başlıyor; backlink ve dijital PR çalışmaları ayrıca bütçelendiriliyor. Kesin teklifi ön analizden sonra hazırlıyorum.",
  },
];

function formatPercent(raw: string) {
  const n = parseFloat(raw.replace(/[^\d.]/g, ""));
  return Number.isNaN(n) ? raw : `+%${n.toLocaleString("tr-TR", { maximumFractionDigits: 1 })}`;
}

export default function SectoralSEOServices() {
  const picked = ["hizmet-klinik-seo", "motosiklet-aksesuarlari-magazasi", "cevrimici-egitim-platformu"]
    .map((slug) => caseStudies.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <>
      <Breadcrumb items={[{ name: "Sektörel SEO Hizmetleri", href: "/sektorel-seo-hizmetleri" }]} />
      <ServicePageLayout
        title="Sektörel SEO Hizmetleri"
        subtitle="Sektörünüzün diliyle SEO"
        description="Bir diş kliniğinin hastası ile bir e-ticaret sitesinin müşterisi Google'da aynı şekilde arama yapmıyor. Ben de her sektöre aynı paketi uygulamak yerine, sizin müşterinizin nasıl aradığını, neye güvendiğini ve rakiplerinizin nerede durduğunu inceleyip size özel bir yol haritası hazırlıyorum."
        canonicalUrl="https://ekimdemirci.com/sektorel-seo-hizmetleri"
        afterHeroNode={
          <DemoSection
            id="sektor-secici"
            eyebrow="Sektörünüze göre"
            title="Her sektörün müşterisi farklı arar."
            intro="Aşağıdan sektörünüzü seçerek müşterilerinizin Google'da nasıl arama yaptığına ve bu sektörde hangi alanlara odaklandığıma göz atabilirsiniz."
            window={
              <DemoWindow label="Sektörel SEO">
                <SectorPicker />
              </DemoWindow>
            }
            side={
              <DemoSide
                title="Aynı prensipler, farklı öncelikler"
                text="SEO'nun temel kuralları her sektörde aynı; ama hangi işin önce yapılacağı sektörden sektöre değişiyor. Bir klinikte güven sinyalleri, bir e-ticaret sitesinde kategori yapısı, bir yerel işletmede harita sonuçları belirleyici olabiliyor. Sektörü doğru okumak, bütçeyi en çok etki yaratacak işlere ayırmak demek."
                points={[
                  "Sektörünüzdeki arama davranışını analiz etmek",
                  "Rakiplerinizin neden önde olduğunu bulmak",
                  "Sektörel kuralları ve hassasiyetleri gözetmek",
                  "Size özel bir öncelik listesi hazırlamak",
                ]}
                ctaTitle="Sektörünüzde ne kadar fırsat var?"
                ctaText="Sitenizi ve rakiplerinizi inceleyip sektörünüzdeki en hızlı büyüme fırsatlarını raporlayayım."
                ctaLabel="Ücretsiz sektör analizi iste"
              />
            }
          />
        }
        icon="Settings"
        gradient="from-blue-600 via-indigo-600 to-purple-600"
        blogCategory="SEO Hizmetleri"
      >
        <ScopeGrid
          eyebrow="Sektörler"
          title="Sektörünüze özel SEO hizmetleri"
          intro="Aşağıdaki sektörlerin her biri için ayrı bir sayfada, o sektörün arama davranışını, sık yapılan hataları ve uyguladığım yaklaşımı detaylı olarak anlattım."
          items={sectors.map((s) => ({
            icon: s.icon,
            title: s.name,
            text: `${s.summary} Odak noktaları: ${s.focus.join(", ")}.`,
            href: `/sektorel-seo-hizmetleri/${s.slug}`,
            link: "Sektör sayfasını inceleyin",
          }))}
        />

        <ExampleGrid
          eyebrow="Neden sektörel?"
          title="Neden her sektöre aynı SEO uygulanmaz?"
          intro="SEO'nun temel prensipleri değişmez; ama her sektörün kendine özgü dinamikleri, hangi işin önce yapılması gerektiğini belirler. İşte en sık karşılaştığım farklar:"
          items={[
            { icon: ShieldCheck, title: "Güvenin ağırlığı değişir", text: "Sağlık, hukuk ve finans gibi alanlarda Google içeriği kimin yazdığına ve uzmanlığın nasıl kanıtlandığına çok daha fazla dikkat ediyor. Bu sektörlerde güven sinyalleri ilk öncelik." },
            { icon: MapPin, title: "Arama yerel olabilir", text: "Klinikler, güzellik merkezleri ve yerel işletmelerde müşterilerin çoğu şehir ya da semt adıyla arıyor. Harita sonuçlarında görünmek, sitenin sıralamasından bile önemli hale geliyor." },
            { icon: Package, title: "Ölçek farklıdır", text: "Binlerce ürünlü bir e-ticaret sitesinde tek tek sayfa düzenlemek mümkün değil. Burada kategori yapısı, filtre sayfaları ve şablon düzeyinde çözümler belirleyici." },
            { icon: Clock, title: "Karar süresi uzayabilir", text: "Kurumsal ve B2B satışlarda müşteri karar vermeden önce uzun süre araştırma yapıyor. Bu süreçte doğru aşamada doğru içerikle karşısına çıkmak gerekiyor." },
            { icon: CalendarRange, title: "Mevsimsellik etkilidir", text: "Turizm, eğitim ve bazı perakende sektörlerinde aramalar yılın belirli dönemlerinde yoğunlaşıyor. İçeriklerin bu dönemlerden önce hazır olması gerekiyor." },
            { icon: Megaphone, title: "Tanıtım kuralları sıkı olabilir", text: "Sağlık ve hukuk gibi alanlarda reklam ve tanıtım kuralları kısıtlayıcı. Bu sektörlerde kurallara uygun, bilgilendirici içeriklerle kazanılan organik görünürlük ayrıca değer kazanıyor." },
          ]}
        />

        <ProcessTimeline
          title="Sektörel SEO çalışması adım adım nasıl ilerliyor?"
          intro="Önce sektörünüzü ve rakiplerinizi tanıyorum. Ardından sektörünüze özel bir öncelik listesiyle çalışmaya başlıyor, sonuçları düzenli olarak ölçüyorum."
          ctaLabel="Ücretsiz sektör analiziyle başlayalım"
          steps={[
            {
              tag: "1. hafta",
              title: "Sektör ve rakip analizi",
              paragraphs: [
                "Sektörünüzde müşterilerin hangi kelimelerle, hangi aşamada arama yaptığını inceliyorum. Aynı aramalarda öne çıkan rakiplerinizin sitelerini, içeriklerini ve bağlantı profillerini analiz ederek onları öne çıkaran etkenleri buluyorum.",
                "Sektörünüze özel kurallar ve hassasiyetler varsa (sağlık ve hukuk alanındaki tanıtım kuralları gibi) bunları da bu aşamada not ediyorum.",
              ],
            },
            {
              tag: "1. ve 2. hafta",
              title: "Sitenizin değerlendirilmesi",
              paragraphs: [
                "Sitenizi teknik altyapı, içerik ve otorite açısından değerlendiriyorum. Sektörünüzdeki rakiplerle kıyasladığımda sitenizin güçlü ve zayıf kaldığı noktalar netleşiyor.",
              ],
            },
            {
              tag: "2. hafta",
              tone: "accent",
              title: "Sektörünüze özel yol haritası",
              paragraphs: [
                "Analizlerin sonucunda sektörünüze göre önceliklendirilmiş bir yol haritası hazırlıyorum. Örneğin bir klinik için önce güven ve yerel görünürlük, bir e-ticaret sitesi için önce kategori yapısı ve teknik düzen öne çıkabiliyor.",
                "Her maddenin neden önemli olduğunu ve size ne kazandıracağını açık bir dille anlatıyorum.",
              ],
            },
            {
              tag: "Ayrı bütçelendirilir",
              tone: "amber",
              title: "Uygulama ve otorite çalışmaları",
              paragraphs: [
                "Teknik düzenlemeler, içerik çalışmaları ve yerel SEO adımları paralel olarak ilerliyor. Sektörünüzle ilgili yayınlarda yer almanızı sağlayacak backlink ve dijital PR çalışmaları ise yayın maliyetleri değişken olduğu için ayrıca bütçelendiriliyor ve onayınız alınmadan harcama yapılmıyor.",
              ],
            },
            {
              tag: "Her ay",
              title: "Ölçüm ve raporlama",
              paragraphs: [
                "Sıralamaları, organik ziyaretçileri ve en önemlisi sektörünüze özgü dönüşümleri (randevu, teklif talebi, satış, arama) takip ediyorum. Sonuçlara göre planı güncelliyor, işe yarayanı büyütüyoruz.",
              ],
            },
          ]}
        />

        <ProofBand
          title="Farklı sektörlerden sonuçlar"
          results={picked.map((c) => ({
            code: c.category,
            metric: formatPercent(c.clickIncrease),
            label: `Tıklama artışı · ${c.company}`,
            detail: c.summary,
            source: `Vaka analizi, ${c.duration.toLocaleLowerCase("tr-TR")}`,
          }))}
        />

        <RelatedBand
          eyebrow="Diğer hizmetler"
          title="Sektörünüz ne olursa olsun, temel hizmetler aynı titizlikle yürür"
          text="Sektörel yaklaşım, hangi işin önce yapılacağını belirler. İşin kendisi ise teknik SEO, içerik ve otorite çalışmalarının bir arada yürütülmesine dayanır. Yapay zeka görünürlüğü de artık her sektör için ayrı bir fırsat."
          links={[
            { icon: Signpost, title: "SEO danışmanlığı", href: "/seo-danismanligi", text: "Tüm alanları birlikte ele alan genel çalışma" },
            { icon: Bot, title: "GEO danışmanlığı", href: "/geo-danismanligi", text: "ChatGPT ve AI Overview görünürlüğü" },
            { icon: Wrench, title: "Teknik SEO", href: "/seo-hizmetleri/teknik-seo", text: "Tarama, indekslenme ve hız" },
          ]}
        />

        <GuideShell
          id="sektorel-seo-rehberi"
          eyebrow="Sektörel SEO rehberi"
          title="Sektörel SEO hakkında bilmeniz gerekenler"
          intro="Sektörünüze özel bir SEO stratejisine neden ihtiyaç duyduğunuzu ve sektörlere göre nelerin değiştiğini sade bir dille anlattım."
          toc={[
            { id: "sektorel-seo-nedir", label: "Sektörel SEO nedir?" },
            { id: "ymyl", label: "Sağlık, hukuk ve finansta SEO" },
            { id: "yerel", label: "Yerel işletmelerde SEO" },
            { id: "e-ticaret", label: "E-ticarette SEO" },
            { id: "b2b", label: "Kurumsal ve B2B SEO" },
            { id: "guncellemeler", label: "Google güncellemeleri ve sektörler" },
          ]}
          cta={{ eyebrow: "Ücretsiz sektör analizi", title: "Sektörünüzde rakiplerinizin gerisinde mi kalıyorsunuz?", text: "Sitenizi rakiplerinizle karşılaştırıp en hızlı büyüme fırsatlarını raporlayayım.", label: "Ücretsiz analiz isteyin" }}
          faqTitle="Sektörel SEO hakkında sıkça sorulan sorular"
          faqItems={faqItems}
        >
          <div className="space-y-5">
            <GuideH2 id="sektorel-seo-nedir">Sektörel SEO nedir?</GuideH2>
            <GuideDefinition>
              Sektörel SEO, arama motoru optimizasyonunun bir sektörün kendine özgü arama davranışına, rekabet yapısına,
              güven beklentilerine ve kurallarına göre uyarlanarak uygulanmasıdır.
            </GuideDefinition>
            <p>
              Teknik altyapı, içerik ve otorite her sektörde SEO&apos;nun üç temel ayağıdır. Sektörel SEO&apos;yu farklı kılan,
              bu üç ayağın hangisine ne kadar ağırlık verileceğini ve hangi sırayla ilerleneceğini sektörün gerçeklerine göre
              belirlemesidir. Böylece bütçe, sizin sektörünüzde gerçekten fark yaratacak işlere harcanır.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="ymyl">Sağlık, hukuk ve finansta SEO neden farklıdır?</GuideH2>
            <p>
              Google, insanların sağlığını, parasını ya da güvenliğini etkileyebilecek konuları &ldquo;Your Money or Your
              Life&rdquo; (YMYL) olarak tanımlıyor ve bu konulardaki içerikleri çok daha sıkı değerlendiriyor. İçeriği kimin
              yazdığı, yazarın uzmanlığının nasıl kanıtlandığı ve bilgilerin güvenilir kaynaklara dayanıp dayanmadığı bu
              sektörlerde sıralamayı doğrudan etkiliyor.
            </p>
            <p>
              Google&apos;ın kaliteyi nasıl değerlendirdiğini merak ediyorsanız <GuideLink href="/blog/google-raters-guideline-nedir">Google Raters Guideline nedir</GuideLink> yazıma,
              diş klinikleri özelindeki yaklaşımımı görmek için de <GuideLink href="/blog/dis-klinigi-seo-nedir-dis-hekimleri-icin-neden-onemlidir">diş kliniği SEO</GuideLink> yazıma
              göz atabilirsiniz.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="yerel">Yerel işletmelerde SEO nasıl çalışır?</GuideH2>
            <p>
              Bir kuaför, veteriner ya da oto servis için en değerli aramalar, müşterinin yakınında hizmet aradığı
              aramalardır. Bu aramalarda Google genellikle sonuçların en üstünde bir harita ve üç işletme gösterir. Bu
              alanda yer almak için Google İşletme profilinin eksiksiz olması, yorumların düzenli gelmesi ve işletme
              bilgilerinin internetin her yerinde tutarlı olması gerekir.
            </p>
            <p>
              Detaylar için <GuideLink href="/blog/yerel-seo-nedir">yerel SEO nedir</GuideLink> ve{" "}
              <GuideLink href="/blog/google-my-business-nedir">Google İşletme profili</GuideLink> yazılarıma bakabilirsiniz.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="e-ticaret">E-ticarette SEO neden farklıdır?</GuideH2>
            <p>
              E-ticaret sitelerinde yüzlerce, bazen binlerce ürün ve kategori sayfası bulunur. Bu ölçekte sayfaları tek tek
              düzenlemek yerine kategori yapısını, filtre sayfalarının nasıl yönetileceğini ve ürün sayfası şablonlarını
              doğru kurgulamak gerekir. Aynı ürünün farklı renk ve beden seçenekleri, stoktan kalkan ürünler ve tekrar eden
              açıklamalar da e-ticarete özgü sorunlardır.
            </p>
            <p>
              Adım adım bir yol haritası için <GuideLink href="/blog/e-ticaret-seo-nasil-yapilir">e-ticaret SEO nasıl yapılır</GuideLink> rehberimi
              inceleyebilirsiniz.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="b2b">Kurumsal ve B2B SEO&apos;da nelere dikkat edilmeli?</GuideH2>
            <p>
              B2B şirketlerde arama hacimleri düşük ama her müşterinin değeri yüksektir. Karar süreci uzun ve genellikle
              birden fazla kişiyi kapsar. Bu yüzden içerik stratejisi, karar vericinin araştırma sürecinin her aşamasına
              (sorunu tanıma, çözümleri karşılaştırma, tedarikçi seçme) cevap verecek şekilde kurgulanmalıdır.
            </p>
          </div>

          <div className="space-y-5">
            <GuideH2 id="guncellemeler">Google güncellemeleri sektörleri nasıl etkiler?</GuideH2>
            <p>
              Google&apos;ın büyük algoritma güncellemeleri her sektörü aynı şiddette etkilemiyor. Özellikle sağlık, finans ve
              içerik ağırlıklı sektörler, kalite odaklı güncellemelerde daha büyük dalgalanmalar yaşayabiliyor. Sektörünüzün
              bu değişimlere ne kadar açık olduğunu bilmek, riskleri önceden yönetmeyi kolaylaştırıyor.
            </p>
            <p>
              Bu konuyu <GuideLink href="/blog/google-guncellemelerinden-en-cok-etkilenen-sektorler-ve-ayakta-kalma-rehberi">Google güncellemelerinden en çok etkilenen sektörler</GuideLink> yazımda
              detaylı olarak ele aldım.
            </p>
          </div>
        </GuideShell>
      </ServicePageLayout>
    </>
  );
}
