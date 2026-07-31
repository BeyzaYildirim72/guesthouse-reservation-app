package tr.gov.ogm.rezervasyon.entity;

public enum RezervasyonDurum {
    BEKLEMEDE("Beklemede"),
    ONAYLI("Onaylı"),
    CHECK_IN("Check-in"),
    CHECK_OUT("Check-out"),
    IPTAL("İptal");

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