// Site genelinde kullanılan statik içerik.
// İleride bir CMS / API'ye bağlanırken sadece bu dosyanın doldurulma şekli değişir.

export const kategoriMenu = [
  { etiket: "Koleksiyon", href: "/koleksiyon" },
  { etiket: "Sergiler", href: "/sergiler" },
  { etiket: "Eğitim Programları", href: "/egitim" },
  { etiket: "Müze Mağazası", href: "/magaza" },
  { etiket: "Hakkımızda", href: "/hakkimizda" },
];

export const heroSlaytlari = [
  {
    id: 1,
    baslik: "Anadolu'nun 12.000 Yıllık Hikâyesi",
    aciklama:
      "Göbeklitepe'den günümüze, toprağın altında saklı kalan kültürleri keşfedin.",
    gorsel:
      "https://images.unsplash.com/photo-1568797629192-908cebb55c50?q=80&w=2000&auto=format&fit=crop",
    butonMetni: "Koleksiyonu Gez",
    butonHref: "/koleksiyon",
  },
  {
    id: 2,
    baslik: "Yeni Sergi: Toprağın Hafızası",
    aciklama:
      "Anadolu çömlekçiliğinin 8 bin yıllık evrimini anlatan özel sergimiz kapılarını açtı.",
    gorsel:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=2000&auto=format&fit=crop",
    butonMetni: "Sergiyi İncele",
    butonHref: "/sergiler",
  },
  {
    id: 3,
    baslik: "Çocuklar için Doğa Atölyesi",
    aciklama:
      "Her hafta sonu düzenlenen atölyelerimizle doğayı ve tarihi birlikte öğrenin.",
    gorsel:
      "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=2000&auto=format&fit=crop",
    butonMetni: "Programa Katıl",
    butonHref: "/egitim",
  },
];

export const hizliLinkler = [
  {
    etiket: "Ziyaret Saatleri",
    aciklama: "Hafta içi 09:00–18:00",
    href: "/ziyaret",
  },
  {
    etiket: "Bilet & Randevu",
    aciklama: "Online randevu oluşturun",
    href: "/randevu",
  },
  {
    etiket: "Koleksiyon",
    aciklama: "12.000 yıllık eserler",
    href: "/koleksiyon",
  },
  {
    etiket: "Eğitim Programları",
    aciklama: "Okul grupları ve atölyeler",
    href: "/egitim",
  },
];

export const haberler = [
  {
    id: 1,
    baslik: "Müzemize UNESCO'dan Özel Tanınırlık Ödülü",
    ozet: "Atatürk Arboretumu Müzesi, kültürel mirası koruma çalışmalarıyla bu yıl UNESCO tarafından onurlandırıldı.",
    tarih: "14 Haziran 2026",
    gorsel:
      "https://images.unsplash.com/photo-1605106702734-205df224ecce?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    baslik: "Yeni Kazı Buluntuları Sergileniyor",
    ozet: "Geçtiğimiz sezon yapılan kazılarda bulunan 40'tan fazla eser, ilk kez ziyaretçilerle buluşuyor.",
    tarih: "2 Haziran 2026",
    gorsel:
      "https://images.unsplash.com/photo-1583407872630-50e9484bf0c8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    baslik: "Restorasyon Atölyemiz Ziyarete Açıldı",
    ozet: "Eserlerin nasıl korunduğunu canlı olarak izleyebileceğiniz cam bölmeli atölyemiz hizmete başladı.",
    tarih: "20 Mayıs 2026",
    gorsel:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?q=80&w=1200&auto=format&fit=crop",
  },
];

export const duyurular = [
  {
    id: 1,
    baslik: "Temmuz ayında Pazartesi günleri müzemiz kapalıdır.",
    tip: "Çalışma Saati",
  },
  {
    id: 2,
    baslik: "Okul grupları için erken rezervasyon dönemi başladı.",
    tip: "Eğitim",
  },
  {
    id: 3,
    baslik: "Müze mağazasında yaz indirimi: tüm el yapımı ürünlerde %20.",
    tip: "Mağaza",
  },
  {
    id: 4,
    baslik: "29 Haziran'da bahçede gece turu etkinliği düzenlenecek.",
    tip: "Etkinlik",
  },
];

export const muzeBilgileri = {
  baslik: "Müzemiz Hakkında",
  paragraf:
    "Atatürk Arboretumu Müzesi, 1962 yılından bu yana topraklarımızın doğal ve kültürel mirasını koruyup gelecek kuşaklara taşıyor. 12.000 yılı kapsayan koleksiyonumuzda arkeolojik buluntular, etnografik eserler ve doğa tarihi örnekleri yer alıyor. Uzman ekibimiz, her yıl binlerce öğrenciye ve ziyaretçiye eğitim programları sunuyor.",
  istatistikler: [
    { sayi: "12.000+", etiket: "Yıllık Koleksiyon" },
    { sayi: "8.500", etiket: "Sergilenen Eser" },
    { sayi: "60+", etiket: "Yıllık Tecrübe" },
    { sayi: "150K", etiket: "Yıllık Ziyaretçi" },
  ],
};
