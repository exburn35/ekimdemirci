"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, BookA } from "lucide-react";

// Kapsamlı ve çok geniş SEO Terimleri Listesi
const rawTerms = [
  { term: "A/B Testing", desc: "Kullanıcı deneyimi veya dönüşüm oranını maksimize etmek için aynı sayfanın iki farklı varyasyonunu test etme ve karşılaştırma işlemidir." },
  { term: "Above the Fold", desc: "Bir web sayfasının, kullanıcı hiç aşağı kaydırmadan (scroll yapmadan) ekranında görünen ilk yüzeydir. Sayfa hızında ve kullanıcı deneyiminde kritik rol oynar." },
  { term: "Algoritma Güncellemesi", desc: "Platformların veya arama motorlarının sıralama ve kalite değerlendirme mantığında yaptığı yapısal değişikliklerdir (Örn: Google Panda, Penguin, Core Updates)." },
  { term: "Alt Text (Alternatif Metin)", desc: "Görsellerin ne içerdiğini açıklayan arka plan metnidir. Arama motorlarının görselleri okuyup anlamlandırmasını, görsel SEO'ya katkı yapmasını sağlar." },
  { term: "Anchor Text (Çapa Metin)", desc: "Web sayfasında verilen bir linkin üzerindeki, tıklanabilir metindir. Hedef sayfanın arama motorları tarafından ne ile ilgili olduğunun en güçlü sinyallerinden biridir." },
  { term: "API", desc: "Uygulama Programlama Arayüzü; iki farklı sistemin veya yazılımın arka planda birbirleriyle veri (Örn: Web arama verileri, indexleme verileri) alışverişi yapmasını sağlayan yapıdır." },
  { term: "B2B SEO", desc: "Şirketten şirkete (Business to Business) hizmet veren veya satış yapan firmaların arama motorlarındaki görünürlüğünü endüstriyel anahtar kelimelerle artıran spesifik SEO stratejisidir." },
  { term: "B2C SEO", desc: "Doğrudan son tüketiciyi (Business to Consumer) hedefleyen e-ticaret siteleri veya perakende siteler için yapılan, işlem odaklı arama kelimelerini kapsayan SEO türüdür." },
  { term: "Backlink", desc: "Dışarıdaki, farklı bir domainden sizin sitenize veya belli bir sayfanıza verilmiş her türlü (köprü) bağlantıya verilen genel addır. SEO'nun temeltaşlarından biridir." },
  { term: "Black Hat SEO", desc: "Google tarafından tespit edildiği an cezalandırılan (Penalty); kuraldışı, etik olmayan ve tamamen hileye dayalı kısa vadeli sıralama kazanma taktikleridir." },
  { term: "Bounce Rate (Hemen Çıkma Oranı)", desc: "Sitenize (veya belli bir sayfaya) gelen kullanıcının hiçbir ikinci sayfa gezmeden, linke tıklamadan siteyi terk ettiği oturumların yüzde oranıdır." },
  { term: "Breadcrumb (Ekmek Kırıntısı)", desc: "Genellikle sitenin üst kısımlarında yer alan, kullanıcının o an sitenin hangi hiyerarşisinde/kategorisinde olduğunu görsel olarak gösteren navigasyon satırıdır." },
  { term: "Broken Link (Kırık Link)", desc: "Tıklandığında 404 (bulunamadı) gibi hata ekranlarına düşüren, çalışmayan, var olmayan ölü URL'lerdir. Arama motorlarının sitenizi taramasını geciktirir." },
  { term: "Cache (Önbellek)", desc: "Sunucunun her bir ziyaretçiye siteyi sıfırdan oluşturmak yerine, halihazırda statik bir kopyasını kaydedip çok hızlı bir şekilde sunması işlemidir. İlk Byte Yüklenme Süresini (TTFB) düşürür." },
  { term: "Canonical Tag", desc: "Sitenizde birden çok URL'de sunulan çok benzer içerikler varsa (Örn: Hem /tişört hem de /ana-kategori/tişört), asıl olan ve taranması/sayılması gereken orijinal sayfanın hangisi olduğunu botlara söyleyen HTML etiketidir." },
  { term: "Click-Through Rate (CTR)", desc: "Tıklama Oranı; sitenizin arama sonuçlarında (SERP) gösterildiği (impression) sayının, kullanıcılar tarafından kaç kere tıklandığına (click) bölünmesiyle elde edilen yüzdelik başarı metrikidir." },
  { term: "Cloaking", desc: "Google robotlarına gösterilen site verisi veya HTML formatıyla, gerçek insanlara gösterilen sayfanın farklı olması durumudur. Ağır bir Black Hat SEO hatasıdır ve hızlıca ceza (Ban) ile sonuçlanır." },
  { term: "Core Web Vitals", desc: "LCP (En Büyük Zengin İçerikli Boya), CLS (Kümülatif Düzen Kayması) ve FID veya INP (Etkileşim Gecikmesi) değerlerinin harmanlanmasıyla oluşan, Google'ın sitelerin kullanıcı deneyimini ölçtüğü 3 ana resmi performans skoru." },
  { term: "Crawl Budget (Tarama Bütçesi)", desc: "Google Googlebot'un sizin sitenize ayırdığı tarama vaktidir. Bir site yavaşsa veya çok fazla kırık/gereksiz link barındırıyorsa bu altın değerindeki bütçe heba olur, yeni içerikler Index'e eklenmez." },
  { term: "Deep Linking", desc: "Genelde mobil uygulama jargonuna ait olsa da web için; bir kullanıcının veya bağlantının uygulamanızdaki/sitenizdeki iç, gizli, kompleks sayfalara doğrudan tek tıkla bağlanmasını ifade eder." },
  { term: "Disavow (Bağlantı Reddetme)", desc: "Size çirkin, spamsı ve kalitesiz sitelerden anti-SEO saldırısı (veya dikkatsizlik) sonucu gelen bağlantıları, Google Search Console üzerinden iptal ettirme, reddetme ve sorumluluk almadığınızı beyan etme aracıdır." },
  { term: "Dofollow Link", desc: "Arama botlarının 'evet, bu linki referans alabilir, güvenilir olduğunu varsayıp otoritemin bir miktarını ona aktarabilirsin' anlamı taşıyan saf 'gerçek' ve standart link çeşididir." },
  { term: "Domain Authority (DA)", desc: "Moz isimli köklü SEO aracının yarattığı, 1 ila 100 arasında web sitelerinin alan adlarının otoritelerini ve sıralama ihtimallerini dış bağlantı profiline göre puanlayan metrik." },
  { term: "Duplicate Content", desc: "Kopya İçerik; internette halihazırda var olan metinlerin birebir veya ufak değişikliklerle tekrardan bir sitede yayımlanması durumudur. Orijinallik filtrelerine (Panda Update vb.) takılır." },
  { term: "Dwell Time", desc: "Bir kullanıcının arama sonuçlarındaki (SERP) bir bağlantıya(sitenize) tıkladığı an ile o pencereyi/sekmeyi kapatıp sonuçlara geriye döndüğü arasındaki geçen zaman süresidir. Google için sitenin niyetin kalitesini belirtir." },
  { term: "E-E-A-T", desc: "Experience (Deneyim), Expertise (Uzmanlık), Authoritativeness (Otorite) ve Trust (Güven). Özellikle 2022'den sonra bir içeriğin gerçek bir şahıs ve otoriteli bir kimlik tarafından hazırlanmasının ne kadar önemli olduğunu anlatan çekirdek kavramdır." },
  { term: "Entity (Varlık)", desc: "Kelime yerine, somut veya soyut bir yapının (Kişi, film, yemek, marka, eşya vb.) arama motorları tarafından bir nesne olarak algılanması ve Knowledge Graph içerisine alınması durumudur. Anahtar kelimelerin üst seviyesidir." },
  { term: "Favicon", desc: "Sitenizin tarayıcı sekmesinin en solunda görünen küçük, tanınabilir minimal logodur. SERP (Google sonuç pencerelerinde) tıklama oranını görünür bir şekilde etkiler." },
  { term: "Featured Snippet (Öne Çıkan Snippet)", desc: "Sıfırıncı Konum olarak bilinen, genelde 'Nedir', 'Nasıl Yapılır' aramalarında, web sitelerinden çekilen öz, direkt bilginin Google sonuçlarında kocaman bir kutuda resimli şekilde parladığı alandır." },
  { term: "Freshness (İçerik Tazeliği)", desc: "Haberler veya periyodik bilgiler (Örn: '2026 yılı asgari ücreti') gibi konularda sistemin her zaman en güncel olan içeriği eski (ama çok backlinkli) içeriklerin önüne çekmesi fenomenidir." },
  { term: "GEO (Generative Engine Optimization)", desc: "Mevcut ChatGPT, Google AI Overview ve Perplexity gibi büyük 'Üretken Yapay Zeka' yanıt motorlarına optimize olarak içerik ve bilgi sağlama stratejisidir. 'Geleceğin SEO'su'dur." },
  { term: "Google Search Console", desc: "Her web site sahibinin bilmesi zorunlu, Google'ın sitelere organik trafiği, hata raporlarını, indeksleri sunduğu tek tamamen ücretsiz ve resmi araçtır." },
  { term: "Grey Hat SEO", desc: "Tamamen temiz (Black Hat olmayan) ile tamamen kurallara uyan (White Hat) stratejilerin ortasında kalan; Google'nin kural açıklarından yararlansa da sistemi kandırmaya tam yeltenmeyen taktiksel ara SEO bölgesidir." },
  { term: "H1-H6 Etiketleri", desc: "Sayfa içindeki başlık düzenlemeleridir (Heading Tags). H1 en önemli tek ana konuyu; H2, H3, H4 vb alt kırılımları tanımlar ve arama motorlarının içeriğin mimarisini anlamasını sağlar." },
  { term: "Hreflang Etiketi", desc: "Sitenin (Örneğin Ekim Demirci sitesinin) 'İngilizce arayanlara', 'Almanca arayanlara' hangi sayfa varyasyonunu sunacağını Google'a net bir formatla (örn: en-US veya tr-TR) dilde anlattığı koddur." },
  { term: "Index (Dizin Oluşturma)", desc: "Örümcek robotların sitenizden aldığı bilgileri kendi devasa veri tabanına kaydetme / arşivlendiği eylemidir. İndekse girmeyen sayfalar ASLA SERP'te listelenmez." },
  { term: "Internal Link (İç Linkleme)", desc: "Bir web sitesinin içindeki A sayfasından, yine aynı domaindeki o sitenin B sayfasına verilen bağlantı sistemidir. Harika bir site mimarisi ve Tarama Bütçesi yönetimidir." },
  { term: "Keyword Cannibalization", desc: "Sitenizdeki iki veya daha fazla benzer sayfanın/içeriğin aslında tamamen aynı anahtar kelime için yarışması; dolayısıyla sizin kendi sitenizin kendisini yiyerek iki içeriğin birden sıralama tepetaklak olmasına sebep olmasıdır." },
  { term: "Keyword Density", desc: "Bir web sayfasındaki hedef anahtar kelimenin yüzdelik oranıdır. Çok fazla ve yersiz geçerse Keyword Stuffing (Anahtar kelime yığma) spam eylemi sınıfına girer ve filtrelere takarsınız." },
  { term: "Landing Page (Açılış Sayfası)", desc: "Ziyaretçilerin belirli bir arama, reklam kanalı veya sosyal medya üzerinden sitenize 'ilk iniş (iniş yaptığı)' sayfasıdır. Pazarlamada her sayfa bir anasayfa hükmündedir ve öyle dizayn edilmelidir." },
  { term: "Local SEO (Yerel SEO)", desc: "Özellikle 'Bana en yakın', 'Kadıköy tesisatçı' tarzında harita ve fiziksel dükkan/bölge hedeflemesine entegre edilen yoğun coğrafi optimizasyon işlemlerinin tamamıdır." },
  { term: "Long-Tail Keywords (Uzun Kuyruklı Sözcükler)", desc: 'Aranma hacmi göreceli düşük, lakin tıklanma ve müşteriyi satın almaya çevirme noktasında zirvede olan 3-4 kelimeden oluşan kesin sonuç (Örn: "siyah boğazlı polo erkek tişört") aramalarıdır.' },
  { term: "LSI (Gizli Anlamsal İndeksleme)", desc: "Arama motoru AI'larının, yazının bütününde sadece anahtar kelimelere değil, konuyla ilintili sinonim ve ikincil akraba kelimelerin varlığını ölçerek metni anlamlandırıp sınıflandırma sanatıdır." },
  { term: "Meta Description", desc: "Google arama sonucundaki başlıktan (Mavi olan Metin) hemen altta yer alan gri, detay okutucu açıklama metnidir (maksimum 150-160 karakter), tıklamaları ciddi etkiler." },
  { term: "Mobile First Indexing", desc: "Google'nin bir sitenin ne kadar iyi olduğunu masaüstü tasarımına ve hızına bakarak değil, öncelikle %100 mobil performansına göre sıralamaya alma güncel yaklaşımıdır." },
  { term: "Nofollow Link", desc: "Arka planda (rel='nofollow') ile etiketlenen ve Google'ye 'Bu linklediğim siteye ben garanti veya SEO değerimi (PR) vermiyorum sadece referans ve okuma amaçlı bağladım' dediğiniz köprülerdir." },
  { term: "Off-Page SEO (Site Dışı SEO)", desc: "Halk arasında Backlink olarak kalsa da; marka aramaları, PR destekleri, sosyal sinyallerle arama motoruna o domain'in internet evreninde ne kadar popüler olduğunu dışarıdan ikna ettiğimiz adımlar bütünüdür." },
  { term: "On-Page SEO (Site İçi SEO)", desc: "İçerik pazarlaması, url yapısı, başlık organizasyonları, iç linkleme, alt text gibi sadece domaininiz sınırlarında site içerisindeki yapıları %100 kusursuz optimize ettiğiniz temel sistemdir." },
  { term: "Orphan Page (Yetim / Öksüz Sayfa)", desc: "Sitenizde olan ama o siteye hiçbir iç linklemenin gitmediği veya çok zor bulunabildiği, botun tamamen unutabildiği sayfalardır. Tarayıcı bütçesi ve SEO zafiyeti yaratır." },
  { term: "Page Speed (Sayfa Yüklenme Hızı)", desc: "Sunucunun dosyaları ilk sunması, görsellerin boyutu, JavaScript şişkinliği ve render sürelerini baz alan ve mobilde %90 oranda sıralamanızı ilk saniyeden etkileyebilecek can damarı SEO faktörüdür." },
  { term: "Pagination (Sayfalandırma)", desc: "Uzun, tonla içeriğe (e-ticaret ürün listeleri vs.) sahip bir listenin /blog/?p=1  /blog/?p=2 gibi sekanslara bölünmesi veya sonsuz scroll yapılandırması sanatıdır. Crawl süreçlerini zorlaştırmaması gerekir." },
  { term: "PBN (Private Blog Network)", desc: "Genelde Black-Hat jargonu olup; tamamen 1 tane siteyi yukarı sıralamaya çekmek için kurulan sahte binlerce küçük, çakma sitelerden oluşan Link (Halka) ağı çeteleridir." },
  { term: "PPC (Tıklama Başına Maliyet)", desc: "Organik SEO'nun tamamen dışında, Google Ads gibi parasını verdiğinizde 1. sıraya bir günde geçtiğiniz ve tıklama sayısı veya görüntülenme başı bütçenizi bitiren ücretli Search mekanizmasıdır." },
  { term: "RankBrain", desc: "Google'nin algoritmalarının kalbinde yatan ve arama kelimesini daha önce görülmemiş olsa bile yapay zeka/makine okumasıyla tahmin ederek eşleşme sunmaya çalışan yapay öğrenme mimarisidir." },
  { term: "Redirect (Yönlendirme)", desc: "Silinen, kalkan veya adresi değişen sayfaların ziyaretçilerini 404 gibi hatasız ekranlar yerine (301, 302, vb.) mevcut / en yakın sağlıklı veya anasayfaya yönlendirme tekniğidir." },
  { term: "Rich Snippets (Zengin Sonuçlar)", desc: "Sayfaların sadece klasik link ve açıklamadan ziyade (Tarifler için Pişirme süresi-Yıldızlar, Ürünler için Fiyat ve Stok durumu vb.) ekstra görsellerle SERP'te ihtişamlı (Schema Markup) bir şekilde var olmasıdır." },
  { term: "Robots.txt", desc: "Domain'inizin hemen kök dizininde bulunan ve tüm örümcek, sömürücü veya arama ağı tarayıcılarına hangi yollara girip girmemeleri gerektiğini deklare eden evrensel bir text protokolüdür." },
  { term: "Schema Markup (Yapısal Veri)", desc: "Sitenizin kodunun arasına konan bir Schema.org kod parçasıdır. Arama motoruna, eklediğiniz elementin 'Bu bir yazardır, bu bir telefon numarasıdır, bu bir adrestir' gibi somut tanımlamasını yapar." },
  { term: "Search Intent (Arama Niyeti)", desc: "Bir kişi 'Iphone Apple' diye Google'a yazdığında niyeti Iphone almak mı (satın alma), Iphone tarihi hakkında bilgi almak mı (bilgilendirici) olduğunu okuyarak strateji kurma bilimidir. Bunu karşılamayan sonuç elenir." },
  { term: "SERP (Search Engine Results Page)", desc: "Siz aramanızı Google veya diğer motorlara yolladıktan saniyeler sonra çıkan ve binlerce sonucu üstte reklamlarla harmanlayıp listelediği sayfanın ismidir." },
  { term: "Sitemap (Site Haritası)", desc: "Milyarlarca sayfayla boğuşan botların sizin sitenizi tek bir liste halinde tarayıp algılaması için özenle derlenen /sitemap.xml yapısındaki dinamik listelerdir." },
  { term: "Slug (Bağlantı Özeti)", desc: "Domainden sonraki sayfa başlığı uzantınızdır (Örn: /seo-hizmetleri/yapay-zeka-seo). İngilizce harfler ve boşluk yerine kısa tire içeren en okunabilir SEO standart yollarını gerektirir." },
  { term: "Spam", desc: "Otomatik içerik üretme, aşırı reklamla kaplama, ilgisiz yazılım, sahte tık siteleri vb. Google'ın kendi politikalarını alenen ve hileyle bozan kirli veriler ve eylemler bütünüdür." },
  { term: "Technical SEO (Teknik SEO)", desc: "Sitenin arka planı olan yapısal temeli optimize metotlarıdır. HTTPS geçişleri, Site Haritaları, Crawl Budget sorunları, Kod fazlalıklarını ve barındırma verimini iç yüzüyle temizler." },
  { term: "Thin Content (Zayıf İçerik)", desc: "Herhangi bir değerli veri taşımayan, kullanıcının sorununu çözmeye yetmeyen çok kısa, değersiz veya bilgisayar onaylı yüzeysel, zayıf sayfalara arama motoru tarafından vurulan algoritmik damgadır." },
  { term: "URL", desc: "Uniform Resource Locator; bir internet lokasyonundaki belge, doküman veya sayfanın nerede olduğuna dair eşsiz spesifik tek web adresidir." },
  { term: "User Experience (Kullanıcı Deneyimi - UX)", desc: "SEO ile et tırnak olan; sayfadaki buton büyüklüğü, okunabilirlik, kontrast, site içi dolaşım mimarisinin tasarlanıp kullanıcının tatmin olma oranını mükemmelleştiren süreç." },
  { term: "White Hat SEO", desc: "Zaman alan, riskleri ve Google yasaklarını reddeden, algoritma ne istiyorsa o sınır ve etik bağlamında kalarak yapılan organik (Gerçek makaleler, Orijinal Backlinkler, Gerçek PR vs) kaliteli işlemlerdir." },
  { term: "YMYL (Your Money or Your Life)", desc: "Senin Paran Veya Hayatın politikasının baş harfleri. Google'ın çok ama çok katı filtre testinden başarıyla geçmek zorunda olan Finansal ve Medikal/Tıbbi içerik barındıran kritik güven siteleri kümesidir." },
  { term: "Zero-Click Searches", desc: "Ziyaretçinin Google'a girdiği kelime sonrası aradığı bütün net cevabı 'Sıfırıncı Konum' alanından okuması sonrası tatmin olup hiç bir linke tıklamaması ile sonuçlanan yeni nesil Arama akımıdır." },
];

export default function SEOGlossaryPage() {
  const [search, setSearch] = useState("");

  // Gruplama ve filtreleme işlemi
  const groupedTerms = useMemo(() => {
    let listToGroup = rawTerms;
    
    if (search.trim()) {
      const normalizedQuery = search.toLowerCase('tr-TR');
      listToGroup = rawTerms.filter(
        item => 
          item.term.toLowerCase('tr-TR').includes(normalizedQuery) || 
          item.desc.toLowerCase('tr-TR').includes(normalizedQuery)
      );
    }
    
    // Alfabetik olarak sıralama
    listToGroup.sort((a, b) => a.term.localeCompare(b.term));

    // İlk harfe göre gruplandırma
    const grouped = listToGroup.reduce((acc, curr) => {
      // Baş harfini al (Türkçe ve İngilizce harf karakter kurallarına en yakın yapıda)
      let firstLetter = curr.term.charAt(0).toLocaleUpperCase('tr-TR');
      // Number check
      if (/[0-9]/.test(firstLetter)) {
        firstLetter = "0-9";
      }

      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(curr);
      return acc;
    }, {} as Record<string, typeof rawTerms>);

    return grouped;
  }, [search]);

  // Ekrandaki menü harfleri (Mevcut olup olmadığına göre listeliyoruz)
  const availableLetters = Object.keys(groupedTerms).sort();

  // İstediğimiz harfe yavaşça scroll olmak için
  const scrollToLetter = (letter: string) => {
    const element = document.getElementById(`letter-${letter}`);
    if (element) {
      const offset = 120; // top offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#020617] relative overflow-hidden">
      {/* Background Ambience Layers */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-6"
          >
            <BookA className="w-4 h-4" />
            Güncel SEO Rehberi
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight text-white leading-[1.1]"
          >
            Arama Deneyiminin <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">Dev Sözlüğü</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-light"
          >
            Algoritmalar ve pazarlama jargonları arasında kaybolmayın. Sektörde bilmeniz gereken tüm kritik sıralama ve kavram terimleri, en profesyonel açıklamalarıyla parmaklarınızın ucunda.
          </motion.p>
        </div>

        {/* Global Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto mb-16 relative"
        >
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-gray-500 group-focus-within:text-purple-400 transition-colors duration-300" />
            </div>
            <input
              type="text"
              className="block w-full pl-14 pr-6 py-5 bg-white/5 border border-white/10 rounded-2xl leading-5 bg-glass text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 text-lg transition-all shadow-[0_4px_40px_rgba(0,0,0,0.15)] backdrop-blur-md"
              placeholder="Terim veya kelime öbeği aramaya başlayın... (Örn: LSI, Otorite, Crawl)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </motion.div>

        {/* Main Content (Index Sidebar + Grouped Glossary Rows) */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* Alphabet Index Sticky Sidebar */}
          <div className="lg:w-16 flex-shrink-0">
            <div className="sticky top-28 hidden lg:flex flex-col gap-1 w-full glass p-2 rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.2)]">
              {availableLetters.length > 0 ? availableLetters.map((letter) => (
                <button
                  key={`index-${letter}`}
                  onClick={() => scrollToLetter(letter)}
                  className="w-10 h-10 rounded-xl mx-auto text-sm font-bold text-gray-400 hover:text-white hover:bg-white/10 transition-all flex items-center justify-center cursor-pointer"
                >
                  {letter}
                </button>
              )) : (
                 <span className="text-gray-600 text-center py-4">-</span>
              )}
            </div>
            
            {/* Mobile Alphabet Scroller (Row) */}
            <div className="lg:hidden flex overflow-x-auto gap-2 pb-4 scrollbar-hide w-full sticky top-[72px] bg-[#020617]/90 backdrop-blur-md z-20 pt-4 border-b border-white/5">
              {availableLetters.map((letter) => (
                <button
                   key={`index-mobile-${letter}`}
                   onClick={() => scrollToLetter(letter)}
                   className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-sm font-bold text-gray-300 hover:text-white hover:bg-purple-500/20 hover:border-purple-500/30 transition-all flex items-center justify-center cursor-pointer"
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>

          {/* Dictionary Lists grouped by Letter */}
          <div className="flex-1 space-y-24">
            <AnimatePresence mode="popLayout">
              {availableLetters.length > 0 ? (
                availableLetters.map((letter) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    key={letter} 
                    id={`letter-${letter}`} 
                    className="relative scroll-mt-32"
                  >
                    {/* The Giant Watermark Alphabet Letter behind the layout */}
                    <div className="absolute -top-16 -left-8 text-[15rem] leading-none font-black text-white/[0.02] select-none pointer-events-none z-0">
                      {letter}
                    </div>
                    
                    <div className="relative z-10 flex flex-col pt-8">
                       <h2 className="text-5xl font-black text-white mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 w-max border-b border-purple-500/30 pb-2 px-2">
                        {letter}
                       </h2>
                       
                       <div className="flex flex-col border border-white/5 rounded-3xl bg-[#0a0f25]/50 backdrop-blur-sm overflow-hidden shadow-2xl">
                          {groupedTerms[letter].map((item, index) => (
                             <div 
                                key={item.term} 
                                className={`flex flex-col md:flex-row gap-4 md:gap-12 p-8 transition-all hover:bg-white/[0.03] ${index !== groupedTerms[letter].length - 1 ? 'border-b border-white/5' : ''}`}
                             >
                               {/* Term Title */}
                               <div className="md:w-[35%] lg:w-[30%]">
                                 <h3 className="text-xl md:text-2xl font-bold text-white group cursor-default">
                                   <span className="relative inline-block transition-all hover:text-purple-400">
                                      {item.term}
                                   </span>
                                 </h3>
                               </div>
                               
                               {/* SEO Definition */}
                               <div className="md:w-[65%] lg:w-[70%]">
                                 <p className="text-gray-400 text-base md:text-[17px] leading-relaxed font-light">
                                   {item.desc}
                                 </p>
                               </div>
                             </div>
                          ))}
                       </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                /* No Results State */
                <motion.div 
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-full py-20 text-center flex flex-col items-center justify-center glass rounded-3xl border border-white/10 p-12"
                >
                  <div className="inline-flex w-24 h-24 items-center justify-center rounded-3xl bg-white/5 mb-6 border border-white/10 shadow-inner">
                     <Search className="w-10 h-10 text-gray-500 animate-pulse" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">Eşleşme Bulunamadı</h3>
                  <p className="text-gray-500 text-lg max-w-lg leading-relaxed">"{search}" ile ilgili herhangi bir SEO jargonu henüz sözlüğümüze eklenmemiş. Lütfen başka bir anahtar kelime girmeyi deneyin.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}
