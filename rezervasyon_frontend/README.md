# Atatürk Arboretumu Müzesi — Web Platformu

Next.js 14 (App Router) + TypeScript + Tailwind CSS ile hazırlanmış, **tek
proje / üç ekip** mimarisiyle kurulmuş müze web platformu: **Blog**, **Mağaza**
ve **Admin Panel**.

## Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:3000` adresini açın.

> Not: Bu kod sandbox ortamında hazırlandığı için bağımlılıklar (npm registry
> erişimi kapalı olduğundan) burada kurulup test edilemedi. Tüm dosyalar elle,
> dikkatlice yazıldı; import yolları, parantez dengesi ve route çakışmaları
> script ile doğrulandı. Kendi makinenizde sorunsuz çalışması beklenir.

## Mimari: Tek Proje, Üç Route Grubu

Next.js'in **route grupları** özelliği kullanıldı — `(blog)`, `(magaza)`,
`(admin)` klasörleri URL'e yansımaz, sadece kod organizasyonu sağlar. Böylece:

- Tek `npm run dev`, tek `npm run build`, tek deploy.
- Her ekip kendi route grubunda ve kendi component klasöründe çalışır.
- Ortak parçalar (`Footer`, `Badge`, tipler, format fonksiyonları) `shared`/`lib`
  altında, üç ekip de buradan import eder ama burayı **birlikte** değiştirir.

```
src/
  app/
    layout.tsx                      → KÖK layout (sadece font + <html>/<body>)
    globals.css

    (blog)/                          ─── BLOG EKİBİ ───────────────
      page.tsx                       → "/" ana sayfa
      randevu/page.tsx               → "/randevu"

    (magaza)/                        ─── MAĞAZA EKİBİ ─────────────
      layout.tsx                     → SepetProvider ile sarmalar
      magaza/
        page.tsx                     → "/magaza" ürün listeleme
        urun/[slug]/page.tsx         → "/magaza/urun/:slug" ürün detay
        sepet/page.tsx               → "/magaza/sepet"
        odeme/page.tsx               → "/magaza/odeme"

    (admin)/                         ─── ADMIN EKİBİ ───────────────
      layout.tsx                     → AdminShell (sidebar+topbar) sarmalayıcı
      admin/
        login/page.tsx               → "/admin/login" (sidebar'sız, tam ekran)
        page.tsx                     → "/admin" dashboard genel bakış
        blog/page.tsx                 → "/admin/blog" blog yönetimi
        duyurular/page.tsx            → "/admin/duyurular" duyuru yönetimi
        magaza/urunler/page.tsx       → "/admin/magaza/urunler" ürün yönetimi
        magaza/siparisler/page.tsx    → "/admin/magaza/siparisler" sipariş yönetimi

  components/
    blog/          ← SADECE Blog ekibi düzenler
      Header.tsx, HeroSlider.tsx, HizliLinkler.tsx,
      Haberler.tsx, Duyurular.tsx, MuzeBilgileri.tsx, RandevuFormu.tsx

    magaza/        ← SADECE Mağaza ekibi düzenler
      MagazaHeader.tsx, MagazaHero.tsx, KategoriFiltre.tsx,
      UrunKarti.tsx, UrunListesi.tsx, SepetContext.tsx

    admin/         ← SADECE Admin ekibi düzenler
      AdminShell.tsx, AdminSidebar.tsx, AdminTopbar.tsx, IstatistikKarti.tsx,
      BlogYonetimi.tsx, DuyuruYonetimi.tsx, UrunYonetimi.tsx, SiparisYonetimi.tsx

    shared/        ← ÜÇ EKİP ORTAK kullanır, değişiklik için koordinasyon gerekir
      Footer.tsx, Badge.tsx

  data/
    blog-icerik.ts    ← Blog ekibinin verisi (menü, slider, haber, duyuru)
    magaza-icerik.ts  ← Mağaza ekibinin verisi (ürünler, kategoriler)
    admin-icerik.ts   ← Admin ekibinin mock verisi (sipariş, dashboard özet)
    site-icerik.ts    ← Tüm ekiplerin ortak kullandığı veri (marka, footer menüsü)

  lib/
    types.ts      ← Paylaşılan TypeScript tipleri (Urun, Siparis, BlogYazisi...)
    format.ts     ← Paylaşılan yardımcılar (paraFormatla, durum renkleri)
```

## Ekip Sınırları — Kim Neyi Değiştirir?

| Klasör                                                           | Sahibi       | Not                                          |
| ---------------------------------------------------------------- | ------------ | -------------------------------------------- |
| `app/(blog)/*`, `components/blog/*`, `data/blog-icerik.ts`       | Blog Ekibi   | Ana sayfa, randevu sayfası                   |
| `app/(magaza)/*`, `components/magaza/*`, `data/magaza-icerik.ts` | Mağaza Ekibi | Ürün listeleme, detay, sepet, ödeme          |
| `app/(admin)/*`, `components/admin/*`, `data/admin-icerik.ts`    | Admin Ekibi  | Dashboard, içerik yönetim sayfaları          |
| `components/shared/*`, `data/site-icerik.ts`, `lib/*`            | Ortak        | Değişiklik öncesi diğer ekiplere haber verin |

Her ekip kendi `data/*-icerik.ts` dosyasını bir API/CMS'e bağlarken sadece o
dosyanın içeriğini değiştirir — component'lerin import şekli aynı kalır.

## Mağaza Özellikleri

- **Ürün listeleme** (`/magaza`): Kategori filtresi (Kitap, Broşür, Hediyelik,
  Basılı Materyal), responsive grid.
- **Ürün detay** (`/magaza/urun/:slug`): Adet seçimi, sepete ekleme, benzer
  ürünler.
- **Sepet** (`/magaza/sepet`): React Context (`SepetContext`) ile bellek-içi
  state yönetimi, adet güncelleme, kargo eşiği (500₺ üzeri ücretsiz).
- **Ödeme** (`/magaza/odeme`): Teslimat + kart bilgisi form iskeleti (demo —
  gerçek ödeme altyapısı entegre edilmedi), sipariş özeti.

> Sepet verisi şu an tarayıcı belleğinde (React state) tutuluyor, sayfa
> yenilendiğinde sıfırlanır. Kalıcı sepet için bir state yönetim çözümü
> (örn. Zustand + localStorage, ya da backend sepeti) eklenmesi gerekir.

## Admin Dashboard Özellikleri

- **Giriş ekranı** (`/admin/login`): UI iskeleti — gerçek kimlik doğrulama
  yapılmaz, "Giriş Yap" butonu doğrudan `/admin`'e yönlendirir. Gerçek auth
  eklerken bu sayfadaki `girisYap` fonksiyonu bir API/NextAuth çağrısıyla
  değiştirilmelidir.
- **Genel Bakış** (`/admin`): İstatistik kartları, son siparişler, son blog
  yazıları özeti.
- **Blog Yönetimi** (`/admin/blog`): Yazı listesi, yayında/taslak durumu
  değiştirme, silme, yeni yazı ekleme formu.
- **Duyuru Yönetimi** (`/admin/duyurular`): Duyuru ekleme/silme/yayın durumu
  değiştirme — ana sayfadaki duyuru şeridini besler.
- **Ürün Yönetimi** (`/admin/magaza/urunler`): Ürün listesi, kategori/fiyat/
  stok ile yeni ürün ekleme, yayın durumu değiştirme, silme.
- **Sipariş Yönetimi** (`/admin/magaza/siparisler`): Durum filtresi, sipariş
  durumunu bir sonraki aşamaya taşıma (Beklemede → Hazırlanıyor → Kargoda →
  Teslim Edildi), iptal etme.

> Admin sayfalarındaki tüm veri değişiklikleri şu an sadece tarayıcı state'inde
> tutulur (mock veri), sayfa yenilendiğinde sıfırlanır. Gerçek kullanımda her
> işlem bir API çağrısına (`fetch`, Server Action, vb.) bağlanmalıdır.

## Tasarım Sistemi (Üç Alan da Aynı Sistemi Kullanır)

- **Renkler:** Zeytin yeşili (`zeytin-*`), sıcak bej (`bej-*`), terrakota vurgu
  (`toprak-*`) — `tailwind.config.ts`.
- **Tipografi:** Başlıklarda `Fraunces` (serif), gövdede `Inter` —
  `next/font/google` ile yüklenir, kök `layout.tsx`'te tanımlı.
- **Paylaşılan bileşenler:** `Badge` (durum etiketleri), `Footer` — hem blog
  hem mağazada kullanılır; admin kendi koyu temalı sidebar'ını kullanır.

## Eklenebilecek Sayfalar / Geliştirmeler

- Blog tarafı: `/koleksiyon`, `/sergiler`, `/egitim`, `/hakkimizda`,
  `/haberler/[slug]` detay sayfaları henüz oluşturulmadı.
- Mağaza: Gerçek ödeme altyapısı (iyzico, Stripe vb.), sepetin kalıcı
  saklanması.
- Admin: Gerçek kimlik doğrulama (NextAuth, Clerk vb.), rol bazlı yetkilendirme,
  her ekibin verisini gerçek bir veritabanına/CMS'e bağlama.
