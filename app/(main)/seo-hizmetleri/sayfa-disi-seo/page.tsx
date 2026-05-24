import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Sayfa Dışı SEO (Off-Page)",
  description: "Stratejik bağlantı kurma, marka anılmaları ve ilişki kurma yoluyla otorite ve güvenilirlik oluşturun. Sıralamaları yönlendiren kaliteli backlinkler.",
  alternates: {
    canonical: "/seo-hizmetleri/sayfa-disi-seo",
  },
  openGraph: {
    title: "Sayfa Dışı SEO Hizmetleri | Ekim Demirci",
    description: "Daha iyi sıralamalar için stratejik bağlantı kurma ve otorite oluşturma.",
  },
};

export default function OffPageSEO() {
  return (
    <ServicePageLayout
      title="Sayfa Dışı SEO"
      subtitle="Otorite ve Bağlantı Kurma"
      description="Sayfa dışı SEO (Off-page SEO), harici sinyaller aracılığıyla web sitenizin otoritesini ve güvenilirliğini oluşturmaya odaklanır. Stratejik bağlantı kurma kampanyaları geliştiriyor, marka anılmalarını artırıyor ve sitenizi sektörünüzde yetkili bir kaynak olarak konumlandıran ilişkiler kuruyorum."
      icon="Link2"
      gradient="from-orange-500 to-red-500"
      features={[
        "Stratejik Bağlantı Kurma",
        "Misafir Yazarlık (Guest Posting)",
        "Kırık Bağlantı İnşası",
        "Kaynak Sayfası Tanıtımı",
        "Marka Anılmaları Oluşturma",
        "Influencer Ortaklıkları",
        "PR ve Medya İlişkileri",
        "Dizin Kayıtları",
        "Sosyal Sinyaller",
        "Yerel Alıntılar (Citations)",
      ]}
      benefits={[
        {
          title: "Artan Alan Adı Otoritesi",
          description: "Yetkili web sitelerinden gelen yüksek kaliteli backlinkler, arama motorlarına içeriğinizin değerli ve güvenilir olduğunu göstererek alan adı otoritenizi ve arama sıralamalarınızı doğrudan iyileştirir.",
        },
        {
          title: "Yönlendirme Trafiği",
          description: "Kaliteli backlinkler sadece sıralamaları iyileştirmekle kalmaz, aynı zamanda bağlantı veren sitelerden doğrudan yönlendirme trafiği çekerek hedef kitlenizi ve potansiyel müşteri tabanınızı genişletir.",
        },
        {
          title: "Marka Görünürlüğü",
          description: "Stratejik sayfa dışı SEO, markanızın web üzerindeki görünürlüğünü artırır; marka bilinirliği oluşturur ve işletmenizi sektörünüzde bir düşünce lideri olarak konumlandırır.",
        },
        {
          title: "Rekabet Avantajı",
          description: "Kaliteli backlinklerle desteklenen güçlü bir sayfa dışı SEO stratejisi, özellikle sayfa içi optimizasyonun tek başına yeterli olmadığı rekabetçi sektörlerde size önemli bir avantaj sağlar.",
        },
      ]}
      process={[
        {
          step: "1",
          title: "Bağlantı Profili Analizi",
          description: "Mevcut backlink profilinizi analiz ederek güçlü yanları, zayıf noktaları ve fırsatları belirliyorum. Ayrıca potansiyel bağlantı fırsatlarını keşfetmek için rakip bağlantı profillerini inceliyorum.",
        },
        {
          step: "2",
          title: "Tanıtım Stratejisi Geliştirme",
          description: "Sektörünüze, hedef kitlenize ve iş hedeflerinize dayalı, en iyi bağlantı fırsatlarını belirleyen ve kişiselleştirilmiş tanıtım kampanyaları içeren özel bir strateji geliştiriyorum.",
        },
        {
          step: "3",
          title: "Bağlantı Edinme",
          description: "Misafir yazarlık, kaynak sayfası tanıtımı, kırık bağlantı inşası ve sektör etkileyicileriyle ilişki kurma gibi çeşitli yöntemlerle stratejik bağlantı kurma kampanyaları yürütüyorum.",
        },
        {
          step: "4",
          title: "İzleme ve Bakım",
          description: "Sürdürülebilir ve uzun vadeli bağlantı büyümesi sağlamak için backlink profilinizi sürekli izliyor, bağlantı kalitesini takip ediyor, zararlı bağlantıları reddediyor ve ilişkileri sürdürüyorum.",
        },
      ]}
      blogCategory="sayfa-disi-seo"
    />
  );
}

