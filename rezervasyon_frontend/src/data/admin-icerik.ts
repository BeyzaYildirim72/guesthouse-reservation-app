import type { Siparis, BlogYazisi, DuyuruKaydi } from "@/lib/types";

// Admin ekibinin sahip olduğu mock veri. Gerçek bir backend'e bağlanırken
// bu dosyadaki sabitler API çağrılarıyla değiştirilir.

export const dashboardOzet = {
  toplamSiparis: { deger: 86, degisim: "+12%", yon: "artis" as const },
  toplamGelir: { deger: "₺48.250", degisim: "+8%", yon: "artis" as const },
  yayindakiYazi: { deger: 24, degisim: "+3", yon: "artis" as const },
  bekleyenSiparis: { deger: 7, degisim: "-2", yon: "azalis" as const },
};

export const siparisler: Siparis[] = [
  {
    id: "SP-1042",
    musteriAdi: "Elif Yıldız",
    eposta: "elif.yildiz@example.com",
    tarih: "20 Haziran 2026",
    tutar: 465,
    durum: "Beklemede",
    urunSayisi: 2,
  },
  {
    id: "SP-1041",
    musteriAdi: "Mehmet Acar",
    eposta: "mehmet.acar@example.com",
    tarih: "20 Haziran 2026",
    tutar: 320,
    durum: "Hazırlanıyor",
    urunSayisi: 1,
  },
  {
    id: "SP-1040",
    musteriAdi: "Zeynep Kara",
    eposta: "zeynep.kara@example.com",
    tarih: "19 Haziran 2026",
    tutar: 600,
    durum: "Kargoda",
    urunSayisi: 3,
  },
  {
    id: "SP-1039",
    musteriAdi: "Ahmet Polat",
    eposta: "ahmet.polat@example.com",
    tarih: "18 Haziran 2026",
    tutar: 95,
    durum: "Teslim Edildi",
    urunSayisi: 1,
  },
  {
    id: "SP-1038",
    musteriAdi: "Selin Demir",
    eposta: "selin.demir@example.com",
    tarih: "17 Haziran 2026",
    tutar: 215,
    durum: "İptal",
    urunSayisi: 1,
  },
  {
    id: "SP-1037",
    musteriAdi: "Burak Şahin",
    eposta: "burak.sahin@example.com",
    tarih: "16 Haziran 2026",
    tutar: 745,
    durum: "Teslim Edildi",
    urunSayisi: 4,
  },
];

export const blogYazilari: BlogYazisi[] = [
  {
    id: "by-001",
    baslik: "Müzemize UNESCO'dan Özel Tanınırlık Ödülü",
    ozet: "Atatürk Arboretumu Müzesi, kültürel mirası koruma çalışmalarıyla onurlandırıldı.",
    tarih: "14 Haziran 2026",
    durum: "Yayında",
    gorsel:
      "https://images.unsplash.com/photo-1605106702734-205df224ecce?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "by-002",
    baslik: "Yeni Kazı Buluntuları Sergileniyor",
    ozet: "Geçtiğimiz sezon yapılan kazılarda bulunan 40'tan fazla eser ilk kez sergileniyor.",
    tarih: "2 Haziran 2026",
    durum: "Yayında",
    gorsel:
      "https://images.unsplash.com/photo-1583407872630-50e9484bf0c8?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "by-003",
    baslik: "Restorasyon Atölyemiz Ziyarete Açıldı",
    ozet: "Eserlerin nasıl korunduğunu canlı izleyebileceğiniz atölyemiz hizmete başladı.",
    tarih: "20 Mayıs 2026",
    durum: "Yayında",
    gorsel:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "by-004",
    baslik: "Sonbahar Sergisi için Hazırlıklar Başladı",
    ozet: "Ekim ayında açılacak yeni sergimizin küratörlük çalışmaları sürüyor.",
    tarih: "10 Haziran 2026",
    durum: "Taslak",
    gorsel:
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=400&auto=format&fit=crop",
  },
];

export const duyuruKayitlari: DuyuruKaydi[] = [
  {
    id: 1,
    baslik: "Temmuz ayında Pazartesi günleri müzemiz kapalıdır.",
    tip: "Çalışma Saati",
    durum: "Yayında",
  },
  {
    id: 2,
    baslik: "Okul grupları için erken rezervasyon dönemi başladı.",
    tip: "Eğitim",
    durum: "Yayında",
  },
  {
    id: 3,
    baslik: "Müze mağazasında yaz indirimi: tüm el yapımı ürünlerde %20.",
    tip: "Mağaza",
    durum: "Yayında",
  },
  {
    id: 4,
    baslik: "29 Haziran'da bahçede gece turu etkinliği düzenlenecek.",
    tip: "Etkinlik",
    durum: "Yayında",
  },
  {
    id: 5,
    baslik: "Ağustos bakım çalışması nedeniyle bahçe katı geçici kapalı.",
    tip: "Çalışma Saati",
    durum: "Pasif",
  },
];
