import { TrendingUp, Users, Target, Award, Zap, Shield, Scale, Gem } from "lucide-react";

export interface CaseStudy {
  slug: string;
  company: string;
  category: string;
  sector: string;
  duration: string;
  initialStatus: string;
  strategy: string[];
  clickIncrease: string;
  impressionIncrease: string;
  posChange: string;
  ctrChange: string;
  summary: string;
  chartData: {
    label: string;
    before: number;
    after: number;
  }[];
  timeline: {
    period: string;
    title: string;
    desc: string;
  }[];
  narrativeTitle: string;
  narrativeBody: string[];
  nextActionsTitle: string;
  nextActions: string[];
  imageUrl: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "cevrimici-egitim-platformu",
    imageUrl: "/kurs-sitesi-kiyas.png",
    company: "Online Eğitim Platformu",
    category: "Eğitim Platformları",
    sector: "Online eğitim ve kurs platformu",
    duration: "3 Ay",
    initialStatus: "Arama motorlarında görünürlük seviyesi düşüktü ve organik trafik hedeflenen düzeyin oldukça altındaydı",
    strategy: [
      "Teknik SEO taranma ve indeks hatalarının giderilmesi",
      "Yapay zeka tabanlı analizlerle içerik boşluklarının tespiti",
      "GEO yani üretken arama motoru optimizasyonu teknikleri",
      "Sayfa hızı ve Core Web Vitals metriklerinin iyileştirilmesi"
    ],
    clickIncrease: "yüzde 38.81",
    impressionIncrease: "yüzde 90.60",
    posChange: "8.0",
    ctrChange: "yüzde 0.7",
    summary: "Teknik SEO ve GEO çalışmalarıyla kurs aramalarında hedeflenen kelimelerde görünürlük artışı elde edildi",
    chartData: [
      { label: "Tıklama", before: 2290, after: 3180 },
      { label: "Gösterim", before: 243000, after: 462000 }
    ],
    timeline: [
      {
        period: "1. Ay",
        title: "Teknik Temeller ve Tarama",
        desc: "Sitenin teknik SEO hataları giderildi ve taranma bütçesi arama motoru botları için optimize edildi"
      },
      {
        period: "2. Ay",
        title: "Yapay Zeka Destekli Semantik Analiz",
        desc: "Kurs sayfaları yapay zeka analiz araçları ile kullanıcı odaklı semantik terimlerle zenginleştirildi"
      },
      {
        period: "3. Ay",
        title: "GEO ve Başlık Testleri",
        desc: "Üretken arama motorlarında görünürlüğü artırmak için GEO teknikleri ve meta başlık optimizasyonları yapıldı"
      }
    ],
    narrativeTitle: "Teknik SEO ve Yapay Zeka Destekli GEO Büyüme Analizi",
    narrativeBody: [
      "Çevrimiçi eğitim platformunda gerçekleştirdiğim çalışmalarda önceliği teknik SEO hatalarını gidererek tarama bütçesini optimize etmeye verdim",
      "Yapay zeka destekli analiz araçları kullanarak kurs sayfalarının semantik haritasını çıkardım ve içerik boşluklarını doldurdum",
      "Ayrıca yeni nesil yapay zeka arama motorları için GEO yani üretken arama motoru optimizasyonu tekniklerini uygulayarak sitenin yapay zeka yanıtlarında kaynak gösterilmesini sağladım",
      "Bu entegrasyonlar sayesinde sitenin Google Search Console üzerindeki gösterim hacmi 462000 seviyesine yükseldi ve organik tıklamalar 3180 adede ulaştı",
      "Gösterim hacminin bu denli hızlı artması ve sitenin yeni kelimelerde görünür olması ortalama tıklanma oranını geçici olarak yüzde 0.7 seviyesine çekmiştir. Bu durum yeni sorgularda yer edinmenin doğal ve beklenen bir aşamasıdır ve uzun kuyruk sorgularda görünürlük yerleştikçe tıklanma oranları tekrar toparlanacaktır",
      "Sayısal verilerin tamamı Google Search Console kaynaklarına dayanmaktadır"
    ],
    nextActionsTitle: "Gelecek Dönem Planlanan Adımlar",
    nextActions: [
      "Yapay zeka yanıtlarındaki görünürlük payını artırmak için veri işaretlemelerini zenginleştirmek",
      "Teknik SEO denetimlerini otomatik raporlama sistemleri ile sürekli kontrol altında tutmak",
      "GEO odaklı semantik makaleleri yayına alarak uzun kuyruklu aramalarda liderliği pekiştirmek"
    ]
  },
  {
    slug: "ayakkabi-e-ticaret-magazasi",
    imageUrl: "/ayakkabi-e-ticaret-kiyas.png",
    company: "E Ticaret Ayakkabı Markası",
    category: "E-ticaret",
    sector: "Ayakkabı ürünleri satan e ticaret sitesi",
    duration: "3 Ay",
    initialStatus: "Kategori sayfaları arama motorlarında geride kalıyordu ve dönüşüm getiren anahtar kelimelerde sıralama kaybı yaşanıyordu",
    strategy: [
      "Teknik SEO tarama bütçesi optimizasyonu",
      "Yapay zeka destekli semantik ürün açıklamaları",
      "Ürün entity yapılarının şema entegrasyonu",
      "GEO üretken arama kanalları uyumluluk çalışmaları"
    ],
    clickIncrease: "yüzde 29.42",
    impressionIncrease: "yüzde 23.07",
    posChange: "6.5",
    ctrChange: "yüzde 4.4",
    summary: "Teknik altyapı ve yapay zeka destekli içerik optimizasyonu ile trafik ve sıralamalarda kararlı bir artış yakalandı",
    chartData: [
      { label: "Tıklama", before: 62100, after: 80400 },
      { label: "Gösterim", before: 1470000, after: 1810000 }
    ],
    timeline: [
      {
        period: "1. Ay",
        title: "Teknik Kategori Mimarisi",
        desc: "Ana ve alt kategori sayfalarının bağlantı yapıları ve teknik indekslenebilirlik durumları düzeltildi"
      },
      {
        period: "2. Ay",
        title: "Yapay Zeka İçerik Otomasyonu",
        desc: "Yapay zeka tabanlı araçlarla binlerce ürün sayfası için semantik ve özgün açıklamalar üretildi"
      },
      {
        period: "3. Ay",
        title: "Şema ve GEO Entegrasyonu",
        desc: "Ürünlerin arama motoru üretken yanıtlarında yer alması amacıyla entity odaklı şema şablonları uygulandı"
      }
    ],
    narrativeTitle: "Teknik SEO ve Yapay Zeka Odaklı Dönüşüm Analizi",
    narrativeBody: [
      "Ayakkabı e ticaret platformunda teknik SEO mimarisini baştan aşağı yeniledim ve özellikle javascript tabanlı sayfaların tarama performansını artırdım",
      "Yapay zeka destekli ürün açıklaması otomasyonu kurarak binlerce ürün sayfasını benzersiz semantik içeriklerle donattım",
      "Arama motorlarının üretken yanıtlarında yani GEO alanlarında markanın öne çıkması için ürün entity yapılarını şema işaretlemeleriyle güçlendirdim",
      "Bu teknik ve yapay zeka odaklı dönüşüm sonucunda organik tıklama sayısını 80400 seviyesine çıkarırken gösterim hacmini de 1810000 adede ulaştırdım",
      "Elde ettiğim veriler e ticaret sektöründe doğru strateji ile hem hacim hem de kalite artışının bir arada sağlanabileceğini açıkça göstermektedir",
      "Sayısal verilerin tamamı Google Search Console kaynaklarına dayanmaktadır"
    ],
    nextActionsTitle: "Gelecek Dönem Planlanan Adımlar",
    nextActions: [
      "Yapay zeka destekli arama motorlarında ürün tavsiyesi olarak listelenme oranını yükseltmek",
      "Görsel arama motoru optimizasyonu ile ürün görsellerinin sıralamasını iyileştirmek"
    ]
  },
  {
    slug: "motosiklet-aksesuarlari-magazasi",
    imageUrl: "/motosiklet-aksesuar-kiyas.png",
    company: "Motosiklet Aksesuar Firması",
    category: "E-ticaret",
    sector: "Motosiklet aksesuarı ve giyim ürünleri satan firma",
    duration: "3 Ay",
    initialStatus: "Geniş ürün yelpazesine rağmen arama hacmi yüksek kelimelerde görünürlük oldukça kısıtlı seviyedeydi",
    strategy: [
      "Site hızı çekirdek metriklerinin teknik optimizasyonu",
      "Yapay zeka destekli veri madenciliğiyle kullanıcı arama niyeti analizi",
      "Kategori genişletme ve GEO uyumlu semantik içerik kurgusu",
      "İç linkleme yapısının teknik olarak güçlendirilmesi"
    ],
    clickIncrease: "yüzde 67.60",
    impressionIncrease: "yüzde 125.30",
    posChange: "7.2",
    ctrChange: "yüzde 3.1",
    summary: "Teknik site hızı optimizasyonu ve yapay zeka destekli kategori genişletme çalışmalarıyla gösterim hacmi katlandı",
    chartData: [
      { label: "Tıklama", before: 18900, after: 31600 },
      { label: "Gösterim", before: 451000, after: 1020000 }
    ],
    timeline: [
      {
        period: "1. Ay",
        title: "Teknik Site Hızı İyileştirmeleri",
        desc: "Kullanıcı deneyimi metrikleri ve sunucu yüklenme süreleri teknik olarak optimize edildi"
      },
      {
        period: "2. Ay",
        title: "Yapay Zeka Destekli Niyet Analizi",
        desc: "Kullanıcıların arama niyetleri yapay zekayla gruplandırılarak yeni kategori yapıları oluşturuldu"
      },
      {
        period: "3. Ay",
        title: "GEO ve İç Bağlantı Yapısı",
        desc: "Üretken arama motorlarına veri sunacak semantik içerikler yazıldı ve iç bağlantılar güçlendirildi"
      }
    ],
    narrativeTitle: "Teknik Hız ve Yapay Zeka Destekli GEO Başarısı",
    narrativeBody: [
      "Motosiklet aksesuarı projesinde ilk olarak site hızı çekirdek metriklerini optimize ederek teknik SEO temelini kusursuz hale getirdim",
      "Yapay zeka destekli veri madenciliği yöntemleriyle kullanıcıların arama niyetlerini gruplandırdım ve kategori sayfalarını buna göre yapılandırdım",
      "Yapay zeka aramalarında ve GEO kanallarında markanın otorite kabul edilmesi için kapsamlı semantik rehberler hazırlayarak dizine eklettim",
      "Bu adımlarla toplam gösterim sayısını 1020000 seviyesine taşıyarak yüzde 125 oranında devasa bir büyüme elde ettim ve tıklamaları 31600 seviyesine çıkardım",
      "Tıklanma oranındaki geçici düşüş sitenin çok sayıda yeni ve keşfedilmemiş sorguda listelenmeye başlamasından kaynaklanan doğal bir seyrelmedir",
      "Elde ettiğim ortalama pozisyon iyileşmesi rekabet düzeyi yüksek bir alanda kalıcı başarı yakaladığımın kanıtıdır",
      "Sayısal verilerin tamamı Google Search Console kaynaklarına dayanmaktadır"
    ],
    nextActionsTitle: "Gelecek Dönem Planlanan Adımlar",
    nextActions: [
      "Teknik SEO kapsamında sunucu yanıt sürelerini milisaniyeler seviyesine indirmek",
      "GEO görünürlüğünü korumak adına semantik içeriklerin güncelliğini yapay zeka sistemleriyle denetlemek"
    ]
  },
  {
    slug: "yeni-davetiye-tasarim-sitesi",
    imageUrl: "/yeni-davetiye-kiyas.png",
    company: "Yeni Açılan Davetiye Sitesi",
    category: "Yeni Açılan Siteler",
    sector: "Yeni açılan davetiye tasarım ve satış sitesi",
    duration: "3 Ay",
    initialStatus: "Sıfır geçmişe sahip yeni alan adı ile arama motorlarında hiçbir sıralaması bulunmuyordu",
    strategy: [
      "Teknik SEO kurulumu ve indeks hızlandırma çalışmaları",
      "Yapay zeka tabanlı rakip analizleriyle niş kelime tespiti",
      "GEO uyumlu entity şema kurgusu",
      "İçerik mimarisinin semantik olarak yapılandırılması"
    ],
    clickIncrease: "yüzde 52.54",
    impressionIncrease: "yüzde 18.25",
    posChange: "10.5",
    ctrChange: "yüzde 3.1",
    summary: "Sıfırdan başlayan projede en üst seviye teknik kurulum ve yapay zeka analizleriyle kısa sürede sıralamalar elde edildi",
    chartData: [
      { label: "Tıklama", before: 59, after: 90 },
      { label: "Gösterim", before: 2490, after: 2950 }
    ],
    timeline: [
      {
        period: "1. Ay",
        title: "Kusursuz Teknik SEO Kurulumu",
        desc: "Site haritaları indeks protokolleri ve arama motoru bot erişimleri sıfır hata ile yapılandırıldı"
      },
      {
        period: "2. Ay",
        title: "Yapay Zeka Destekli Fırsat Analizi",
        desc: "Yapay zeka araçlarıyla rakiplerin boş bıraktığı yüksek dönüşümlü kelime öbekleri belirlendi"
      },
      {
        period: "3. Ay",
        title: "Entity Şeması ve GEO Entegrasyonu",
        desc: "Arama motoru yapay zeka sistemlerinin siteyi kolayca taraması için GEO şemaları kuruldu"
      }
    ],
    narrativeTitle: "Teknik Kurulum ve GEO Odaklı Sıfırdan Büyüme",
    narrativeBody: [
      "Sıfırdan yayına başlayan davetiye sitesinde teknik SEO kurulumunu en üst standartta gerçekleştirerek indeks hızını maksimuma çıkardım",
      "Yapay zeka tabanlı rakip analiz araçları yardımıyla niş kelime fırsatlarını belirledim ve içerik stratejisini bu verilere göre şekillendirdim",
      "Sitenin yapay zeka arama motorları tarafından hızlıca anlaşılıp taranabilmesi için GEO uyumlu entity şemaları kurguladım",
      "Bu başlangıç stratejisi neticesinde ilk 3 ayda gösterimleri 2950 seviyesine ulaştırıp tıklamaları 90 adede çıkararak güçlü bir temel kurdum",
      "Yeni web sitesi sahiplerinin ilk dönemdeki düşük hacimli verileri doğru okuması ve teknik disiplinden ödün vermemesi başarı için kritiktir",
      "Sayısal verilerin tamamı Google Search Console kaynaklarına dayanmaktadır"
    ],
    nextActionsTitle: "Gelecek Dönem Planlanan Adımlar",
    nextActions: [
      "Yapay zeka aramalarında davetiye modellerinin doğrudan listelenmesi için şema entegrasyonunu geliştirmek",
      "Sayfa hızı ve mobil uyumluluk teknik kontrollerini düzenli olarak sürdürmek"
    ]
  },
  {
    slug: "hizmet-klinik-seo",
    imageUrl: "/google-search-console.webp",
    company: "Özel Diş Kliniği",
    category: "Kurumsal ve Hizmet Siteleri",
    sector: "Diş hekimliği ve sağlık hizmetleri",
    duration: "4 Ay",
    initialStatus: "Yerel aramalarda görünürlüğü düşüktü ve yeni hasta başvuruları yetersiz seviyedeydi",
    strategy: [
      "Yerel SEO optimizasyonu ve harita entegrasyonu",
      "Yapay zeka destekli hasta arama niyet analizi",
      "Tedavi sayfalarının teknik ve semantik olarak geliştirilmesi",
      "Klinik uzmanlığının GEO standartlarında optimizasyonu"
    ],
    clickIncrease: "yüzde 100",
    impressionIncrease: "yüzde 100",
    posChange: "3.2",
    ctrChange: "yüzde 2.0",
    summary: "Yerel SEO teknik altyapı ve GEO entegrasyonuyla kliniğin randevu sayıları iki katına çıkarıldı",
    chartData: [
      { label: "Tıklama", before: 1200, after: 2400 },
      { label: "Gösterim", before: 60000, after: 120000 }
    ],
    timeline: [
      {
        period: "1. Ay",
        title: "Yerel SEO ve Teknik Tarama",
        desc: "Google Business yapısı konum doğrulamaları ve teknik site taramaları eksiksiz tamamlandı"
      },
      {
        period: "2. Ay",
        title: "Yapay Zeka Soru Analizi",
        desc: "Hastaların en çok arattığı tedavi detayları yapay zekayla saptanıp sayfalar zenginleştirildi"
      },
      {
        period: "3. Ay",
        title: "GEO ve Uzmanlık Şeması",
        desc: "Arama motoru üretken yanıtlarında doktor ve klinik uzmanlığının öne çıkarılması için GEO uygulandı"
      }
    ],
    narrativeTitle: "Teknik Yerel SEO ve GEO Odaklı Klinik Başarısı",
    narrativeBody: [
      "Özel diş kliniği için yerel SEO ile teknik SEO altyapısını entegre ederek harita ve arama sonuçlarında tam uyumluluk yakaladım",
      "Yapay zeka destekli soru cevap analizleri ile hastaların en çok merak ettiği tedavi detaylarını tespit edip içerik yapılarını buna göre oluşturdum",
      "Klinik hekimlerinin uzmanlık bilgilerini ve makalelerini GEO standartlarında semantik olarak optimize ederek yapay zeka hekim aramalarında kaynak gösterilmesini sağladım",
      "Bu yerel teknik ve GEO odaklı çalışma sonucunda organik tıklamaları 2400 seviyesine gösterimleri ise 120000 adede çıkarmayı başardım",
      "Sayısal verilerin tamamı Google Search Console kaynaklarına dayanmaktadır"
    ],
    nextActionsTitle: "Gelecek Dönem Planlanan Adımlar",
    nextActions: [
      "Yapay zeka tabanlı sesli aramalara yönelik soru cevap şemalarını genişletmek",
      "Yerel sıralama gücünü korumak adına teknik tarama sağlığını haftalık olarak denetlemek"
    ]
  }
];
