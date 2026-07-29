// Blog, mağaza ve admin alanlarının ortak kullandığı veri tipleri.
// Admin dashboard bu tipler üzerinden mağaza/blog verisini düzenler.

export type Urun = {
  id: string;
  slug: string;
  ad: string;
  kategori: "Kitap" | "Broşür" | "Hediyelik" | "Basılı Materyal";
  fiyat: number;
  stok: number;
  gorsel: string;
  kisaAciklama: string;
  aciklama: string;
  durum: "Yayında" | "Taslak" | "Stokta Yok";
};

export type SepetUrunu = Urun & {
  adet: number;
};

export type Siparis = {
  id: string;
  musteriAdi: string;
  eposta: string;
  tarih: string;
  tutar: number;
  durum: "Beklemede" | "Hazırlanıyor" | "Kargoda" | "Teslim Edildi" | "İptal";
  urunSayisi: number;
};

export type BlogYazisi = {
  id: string;
  baslik: string;
  ozet: string;
  tarih: string;
  durum: "Yayında" | "Taslak";
  gorsel: string;
};

export type DuyuruKaydi = {
  id: number;
  baslik: string;
  tip: string;
  durum: "Yayında" | "Pasif";
};
