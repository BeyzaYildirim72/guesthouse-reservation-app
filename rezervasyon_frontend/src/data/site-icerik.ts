// Blog, mağaza ve admin alanlarının TÜMÜNÜN ortak kullandığı veriler.
// Sadece bir route grubuna özel içerik buraya eklenmez (örn. mağaza ürünleri
// magaza-icerik.ts'de, blog haberleri blog-icerik.ts'de kalır).

export const marka = {
  kisaAd: "ADK",
  tamAd: "Atatürk Arboretumu Müzesi",
  adres: "Atatürk Bulvarı No:1, Ankara",
  telefon: "0312 123 45 67",
  telefonHref: "tel:+903121234567",
  eposta: "bilgi@adkmuzesi.org",
};

export const footerMenu = {
  kesfedin: [
    { etiket: "Koleksiyon", href: "/koleksiyon" },
    { etiket: "Sergiler", href: "/sergiler" },
    { etiket: "Eğitim Programları", href: "/egitim" },
    { etiket: "Müze Mağazası", href: "/magaza" },
    { etiket: "Hakkımızda", href: "/hakkimizda" },
  ],
  ziyaret: [
    { etiket: "Randevu Al", href: "/randevu" },
    { etiket: "Ziyaret Saatleri", href: "/ziyaret" },
   { etiket: "İletişim", href: "/hakkimizda/iletisim" },
  ],
};
