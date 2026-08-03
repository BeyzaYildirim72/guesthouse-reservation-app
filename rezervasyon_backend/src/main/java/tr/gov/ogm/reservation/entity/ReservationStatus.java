package tr.gov.ogm.reservation.entity;

public enum ReservationStatus {
    PENDING_PAYMENT, // Ödeme bekliyor
    ACTIVE,          // Aktif / Onaylandı
    CANCELLED        // İptal edildi
}