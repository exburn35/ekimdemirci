# ekimdemirci.com: Çalışma Kuralları

Bu dosya, bu projede çalışan her oturum için bağlayıcıdır. Site sahibinin açıkça belirlediği kurallardır.

## 1. Başlık ve paragraf genişliği (KESİN KURAL)

Başlıklar ve paragraflar **asla yarıda kesilip alt satıra itilmez.**

- Bölüm başlıklarına (`h1`, `h2`, `h3`) ve başlık altı açıklama paragraflarına **`max-w-*` sınıfı eklenmez**
  (`max-w-xl`, `max-w-2xl`, `max-w-3xl`, `max-w-4xl` vb. yasak). Metin, bulunduğu içerik kapsayıcısının
  (genellikle `max-w-7xl`) tam genişliğini kullanır.
- Başlık ve açıklamayı saran kapsayıcı `div`'e de dar bir `max-w-*` verilmez; bu, aynı kuralın dolaylı ihlalidir.
- Ortalanmış (`text-center`) başlıklar da tam genişlikte kalır; ortalamak için `max-w-* mx-auto` kullanılmaz.
- Tek istisna: metin bir grid sütununun içindeyse (ör. görsel/form yanında), **sütunun kendisi** sınırdır.
  Sütun içinde ayrıca `max-w-*` eklenmez.
- Kontrol: yeni bir bölüm yazdıktan sonra `grep -rnE "<(h1|h2|h3|p)[^>]*max-w-" app components` çıktısı
  yeni bir satır içermemeli.

## 2. Dil ve ses

- Site tek kişilik bir danışmanlığa ait: her zaman **birinci tekil şahıs** ("ben", "yapıyorum", "müşterilerim").
  "Biz", "ekibimiz", "uzmanlarımız" gibi ajans dili kullanılmaz. ("Birlikte konuşalım" gibi kapsayıcı ifadeler serbest.)
- Metinler özgün, doğal ve insan elinden çıkmış gibi olmalı. Kalıp, şişirilmiş "yapay zeka cümleleri" yazılmaz;
  yer yer kişisel deneyim tonu kullanılır.
- Sıradan bir müşterinin anlayacağı sade dil; teknik terimler gerekiyorsa açıklanır.
- "Taktik" yerine her zaman **"strateji"** kullanılır.

## 3. İçerik doğruluğu

- Rakam, istatistik, müşteri adı, deneyim süresi veya kaynak **uydurulmaz**. Doğrulanamayan dış istatistik eklenmez.
- Site sahibinin verdiği rakamlar (vaka sonuçları vb.) olduğu gibi korunur; yeni iddia gerekiyorsa sahibine sorulur.
- Yapılandırılmış veride (schema) gerçek yorumlara dayanmayan puan/değerlendirme (`aggregateRating`) kullanılmaz.

## 4. Tasarım

- Açık ve sıcak tema: `tailwind.config.ts` içindeki token'lar kullanılır
  (`canvas`, `ink`, `line`, `brand`, `accent`, `night`). Koyu hex renkler ve `text-white` yalnızca koyu
  (`bg-night`) zeminlerde ve renkli butonlarda kullanılır.
- Görseller sitenin kullandığı `ekimdemirci-main/public/` klasörüne konur (dış klasördeki `public/` kullanılmaz).
  Dosya adlarında boşluk, Türkçe karakter ve büyük harf olmaz.

## 5. Yayın akışı

- Site sahibi **önizleme/onay adımı istemiyor**: tamamlanan değişiklikler sorulmadan doğrudan canlıya alınır.
- Akış: ayrı branch → commit → push → `gh pr create` → Vercel build'inin başarılı olmasını bekle → merge →
  canlıda kontrol (sayfalar 200, yeni içerik yayında). Sahibinin incelemesi beklenmez.
- Vercel build'i başarısız olursa merge edilmez; hata düzeltilip tekrar denenir. Yerelde `tsc` ve `next build`
  hatasız geçmeden push yapılmaz.
- Doğrudan `main`'e commit atılmaz (PR geçmişi kayıt olarak tutulur), ama bu adımlar sahibine sorulmadan yapılır.
- Bittiğinde sahibine canlı adres(ler)i ve yapılan kontrolleri kısaca bildir.
- GitHub CLI yolu: `/c/Program Files/GitHub CLI/gh.exe`.
