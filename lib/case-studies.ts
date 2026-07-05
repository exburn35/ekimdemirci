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
      "Teknik altyapının taranma hatalarından arındırılması",
      "Kurs sayfalarında semantik kelime gruplarının kullanılması",
      "Kullanıcı aramalarına odaklanan özgün içeriklerin yayına alınması",
      "Sayfa yüklenme hızlarının optimize edilmesi"
    ],
    clickIncrease: "yüzde 38.81",
    impressionIncrease: "yüzde 90.60",
    posChange: "8.0",
    ctrChange: "yüzde 0.7",
    summary: "Kurs aramalarında hedeflenen anahtar kelimelerde görünürlük artışı elde edildi",
    chartData: [
      { label: "Tıklama", before: 2.29, after: 3.18 },
      { label: "Gösterim (K)", before: 243, after: 462 }
    ],
    timeline: [
      {
        period: "1. Ay",
        title: "Teknik Temeller",
        desc: "Sitenin teknik hataları giderildi ve taranma bütçesi optimize edildi"
      },
      {
        period: "2. Ay",
        title: "Semantik İçerik",
        desc: "Kurs sayfaları kullanıcı odaklı terimler ile zenginleştirildi"
      },
      {
        period: "3. Ay",
        title: "Meta Testleri",
        desc: "Tıklanma oranlarını artırmak amacıyla başlıklar optimize edildi"
      }
    ],
    narrativeTitle: "Gösterim Odaklı Büyüme Süreci",
    narrativeBody: [
      "Online eğitim platformunun arama motorlarındaki görünürlüğünü artırmak amacıyla teknik altyapı iyileştirmeleri ve semantik içerik çalışmaları gerçekleştirdim",
      "Çalışma sürecinde sitenin gösterim hacminde çok hızlı bir büyüme elde ettim. Toplam gösterim 462K seviyesine ulaşırken tıklama sayısı da 3.18K seviyesine yükseldi",
      "Gösterim hacminin bu denli hızlı artması ve sitenin yeni kelimelerde görünür olması ortalama tıklanma oranını geçici olarak yüzde 0.7 seviyesine çekmiştir. Bu durum yeni sorgularda yer edinmenin doğal ve beklenen bir aşamasıdır ve uzun kuyruk sorgularda görünürlük yerleştikçe tıklanma oranları tekrar toparlanacaktır",
      "Sayısal verilerin tamamı Google Search Console verilerine dayanmaktadır"
    ],
    nextActionsTitle: "Gelecek Dönem Planlanan Adımlar",
    nextActions: [
      "Sayfa başlıklarının tıklama eğilimini artıracak şekilde güncellenmesi",
      "Arama sonuçlarındaki meta açıklamalarının zenginleştirilmesi",
      "Kullanıcıların en çok arattığı uzun kuyruklu sorulara yönelik içeriklerin üretilmesi"
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
      "Kategori ağacının kullanıcı odaklı olarak yeniden yapılandırılması",
      "Ürün filtreleme sayfalarının indekslenme kontrolünün sağlanması",
      "Semantik ürün açıklamalarının yazılması",
      "Sayfa hızı ve mobil kullanıcı deneyiminin iyileştirilmesi"
    ],
    clickIncrease: "yüzde 29.42",
    impressionIncrease: "yüzde 23.07",
    posChange: "6.5",
    ctrChange: "yüzde 4.4",
    summary: "Hem trafik hacminde hem de sıralamalarda eş zamanlı ve kararlı bir artış yakalandı",
    chartData: [
      { label: "Tıklama (K)", before: 62.1, after: 80.4 },
      { label: "Gösterim (M)", before: 1.47, after: 1.81 }
    ],
    timeline: [
      {
        period: "1. Ay",
        title: "Kategori Yapılandırması",
        desc: "Ana ve alt kategorilerin bağlantı mimarisi düzeltildi"
      },
      {
        period: "2. Ay",
        title: "Filtre Optimizasyonu",
        desc: "Tarama bütçesini yoran gereksiz parametreli sayfalar engellendi"
      },
      {
        period: "3. Ay",
        title: "Dönüşüm Odaklılık",
        desc: "Ürün açıklamaları semantik kelimelerle güncellendi"
      }
    ],
    narrativeTitle: "Dengeli ve Kararlı Büyüme Analizi",
    narrativeBody: [
      "E ticaret sitesinde hem organik trafiği hem de dönüşüm potansiyelini aynı anda büyütmek amacıyla kapsamlı bir optimizasyon süreci yürüttüm",
      "Ürün kategori sayfalarındaki yapısal düzenlemeler sayesinde tıklama gösterim CTR ve pozisyon değerlerinde eş zamanlı olarak pozitif bir ilerleme kaydettim",
      "Tıklama sayısı 80.4K seviyesine çıkarken ortalama pozisyonumuz 6.5 seviyesine gelerek yüzde 20.73 oranında iyileşti",
      "Elde ettiğim veriler e ticaret sektöründe doğru strateji ile hem hacim hem de kalite artışının bir arada sağlanabileceğini açıkça göstermektedir",
      "Sayısal verilerin tamamı Google Search Console verilerine dayanmaktadır"
    ],
    nextActionsTitle: "Gelecek Dönem Planlanan Adımlar",
    nextActions: [
      "Kullanıcı yorumlarının sayfalara dinamik olarak beslenmesi",
      "Sezonluk ürün geçişleri için özel yönlendirme stratejilerinin kurulması"
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
      "Ürün yelpazesine uygun yeni kategori sayfalarının açılması",
      "Mevcut kategorilerin içerik derinliğinin artırılması",
      "Kullanıcı rehberleri ve blog içerikleriyle bilgi aramalarının hedeflenmesi",
      "İç linkleme yapısının güçlendirilmesi"
    ],
    clickIncrease: "yüzde 67.60",
    impressionIncrease: "yüzde 125.30",
    posChange: "7.2",
    ctrChange: "yüzde 3.1",
    summary: "Yeni eklenen kategori ve zengin içerikler sayesinde gösterim hacmi katlanarak arttı",
    chartData: [
      { label: "Tıklama (K)", before: 18.9, after: 31.6 },
      { label: "Gösterim (M)", before: 0.45, after: 1.02 }
    ],
    timeline: [
      {
        period: "1. Ay",
        title: "Sayfa Genişletme",
        desc: "Eksik olan popüler aksesuar kategorileri tespit edilerek oluşturuldu"
      },
      {
        period: "2. Ay",
        title: "İçerik Stratejisi",
        desc: "Arama niyeti analizlerine uygun detaylı rehberler yayına alındı"
      },
      {
        period: "3. Ay",
        title: "Otorite Çalışmaları",
        desc: "Kategori sayfalarına yönelik iç bağlantı gücü optimize edildi"
      }
    ],
    narrativeTitle: "Büyük Görünürlük Sıçraması",
    narrativeBody: [
      "Motosiklet aksesuarı satan web sitesinde gösterim hacmini yüzde 125 oranında artırarak görünürlüğü zirveye taşıdım ve gösterimi 1.02M seviyesine çıkardım",
      "Kategori sayfalarının genişletilmesi ve yeni içeriklerin üretilmesi gösterim artışını doğrudan destekleyen temel faktörler olmuştur",
      "Tıklanma oranındaki geçici düşüş sitenin çok sayıda yeni ve keşfedilmemiş sorguda listelenmeye başlamasından kaynaklanan doğal bir seyrelmedir",
      "Elde ettiğim ortalama pozisyon iyileşmesi rekabet düzeyi yüksek bir alanda kalıcı başarı yakaladığımın kanıtıdır",
      "Sayısal verilerin tamamı Google Search Console verilerine dayanmaktadır"
    ],
    nextActionsTitle: "Gelecek Dönem Planlanan Adımlar",
    nextActions: [
      "Tıklanma oranını artırmak için arama snippet yapılarını zenginleştirmek",
      "En çok gösterim alan rehber içerikleri dönüşüm butonları ile optimize etmek"
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
      "Doğru teknik SEO temelinin kurulumu",
      "Entity odaklı semantik içerik yapısının oluşturulması",
      "Arama motoru botlarının siteyi hızlı tanıması için şema işaretlemeleri",
      "Hızlı indeks alma stratejilerinin uygulanması"
    ],
    clickIncrease: "yüzde 52.54",
    impressionIncrease: "yüzde 18.25",
    posChange: "10.5",
    ctrChange: "yüzde 3.1",
    summary: "Sıfırdan başlayan projede ilk 3 ayda anahtar kelimelerde kararlı sıralamalar elde edildi",
    chartData: [
      { label: "Tıklama", before: 59, after: 90 },
      { label: "Gösterim (K)", before: 2.49, after: 2.95 }
    ],
    timeline: [
      {
        period: "1. Ay",
        title: "Teknik Temel",
        desc: "Site haritası robot dosyaları ve temiz url yapısı kuruldu"
      },
      {
        period: "2. Ay",
        title: "Entity Odaklı İçerik",
        desc: "Davetiye modellerine yönelik zengin açıklamalar girildi"
      },
      {
        period: "3. Ay",
        title: "İndeksleme Hızı",
        desc: "İndeks süreçlerini hızlandıracak teknik entegrasyonlar yapıldı"
      }
    ],
    narrativeTitle: "Yeni Sitelerde İlk Aşama Optimizasyonu",
    narrativeBody: [
      "Sıfırdan yayına başlayan yeni bir web sitesinde doğru teknik temel ve entity odaklı kurulum ile kısa sürede organik performans elde ettim",
      "Mutlak rakamlar başlangıç aşamasında küçük görünse de gösterilen büyüme oranları yeni bir site için oldukça güçlüdür",
      "Yeni web sitesi sahiplerinin ilk dönemdeki düşük hacimli verileri doğru okuması ve teknik disiplinden ödün vermemesi başarı için kritiktir",
      "Sayısal verilerin tamamı Google Search Console verilerine dayanmaktadır"
    ],
    nextActionsTitle: "Gelecek Dönem Planlanan Adımlar",
    nextActions: [
      "Davetiye tasarımları için görsel arama optimizasyonu yapmak",
      "Özgün blog içerikleriyle alan adı otoritesini büyütmeye devam etmek"
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
      "Google Haritalar ve yerel SEO optimizasyonu",
      "Tedavi sayfalarının semantik içeriklerle zenginleştirilmesi",
      "Hasta deneyimi ve klinik güvenilirlik içeriklerinin üretilmesi",
      "Site içi yönlendirmelerin düzeltilmesi"
    ],
    clickIncrease: "yüzde 100",
    impressionIncrease: "yüzde 100",
    posChange: "3.2",
    ctrChange: "yüzde 2.0",
    summary: "Yerel aramalarda ilk sıraya yükselerek klinik randevu sayısı artırıldı",
    chartData: [
      { label: "Tıklama (K)", before: 1.2, after: 2.4 },
      { label: "Gösterim (K)", before: 60, after: 120 }
    ],
    timeline: [
      {
        period: "1. Ay",
        title: "Yerel Optimizasyon",
        desc: "Google Business profili ve harita konum bilgileri güncellendi"
      },
      {
        period: "2. Ay",
        title: "İçerik Geliştirme",
        desc: "Hizmet sayfaları tedavilere yönelik sık sorulan sorularla dolduruldu"
      },
      {
        period: "3. Ay",
        title: "Güven Sinyalleri",
        desc: "Klinik uzmanlığı ve sertifikaları ön plana çıkarıldı"
      }
    ],
    narrativeTitle: "Yerel Görünürlük ve Hasta Artışı",
    narrativeBody: [
      "Özel diş kliniğinin yerel aramalardaki gücünü artırmak ve hasta başvurularını büyütmek amacıyla yerel SEO odaklı bir çalışma başlattım",
      "Klinik tedavi sayfalarını kullanıcıların sıkça sorduğu sorulara göre yeniden tasarladım ve arama niyetini karşılayan içerikler ekledim",
      "Elde edilen yerel sıralama başarıları sayesinde fiziksel klinik ziyaretlerinde ve randevu taleplerinde ciddi bir büyüme gözlemlendi",
      "Sayısal verilerin tamamı Google Search Console verilerine dayanmaktadır"
    ],
    nextActionsTitle: "Gelecek Dönem Planlanan Adımlar",
    nextActions: [
      "Klinik hekimlerinin uzmanlık makalelerini yayınlayarak otoriteyi pekiştirmek",
      "Yerel kullanıcı yorumlarını ve klinik puanlarını site üzerinde öne çıkarmak"
    ]
  }
];

