package tr.gov.ogm.rezervasyon.entity;

public enum RezervasyonDurum {
    BEKLEMEDE("Beklemede"),
    ONAYLI("Onaylı"),
    BEKLIYOR_ODEME("Ödeme Bekliyor"),       // Rezervasyon yapıldı, 48 saatlik ödeme süresi
    IPTAL_TALEBI_OLUSTU("İptal Talebi"),    // 72 saat kalaya kadar girilen iptal talebi
    IPTAL("İptal Edildi"),                  // Onaylanan veya iptal edilen
    SURESI_DOLDU("Süresi Doldu"),           // 48 saatte ödenmediği için otomatik iptal
    CHECK_IN("Check-in"),
    CHECK_OUT("Check-out");

    private final String etiket;

    RezervasyonDurum(String etiket) {
        this.etiket = etiket;
    }

    public String getEtiket() {
        return etiket;
    }

    public static RezervasyonDurum etiketten(String etiket) {
        for (RezervasyonDurum d : values()) {
            if (d.etiket.equalsIgnoreCase(etiket)) return d;
        }
        throw new IllegalArgumentException("Geçersiz durum: " + etiket);
    }
}