// Sipariş/ürün/blog durumlarını Badge renklerine eşleyen yardımcılar.

export function siparisDurumRengi(durum: string) {
  switch (durum) {
    case "Teslim Edildi":
      return "yesil" as const;
    case "Kargoda":
      return "mavi" as const;
    case "Hazırlanıyor":
      return "sari" as const;
    case "İptal":
      return "kirmizi" as const;
    default:
      return "gri" as const;
  }
}

export function urunDurumRengi(durum: string) {
  switch (durum) {
    case "Yayında":
      return "yesil" as const;
    case "Taslak":
      return "sari" as const;
    case "Stokta Yok":
      return "kirmizi" as const;
    default:
      return "gri" as const;
  }
}

export function paraFormatla(tutar: number) {
  return tutar.toLocaleString("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  });
}
