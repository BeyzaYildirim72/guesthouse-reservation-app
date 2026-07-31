package tr.gov.ogm.rezervasyon.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "rezervasyonlar")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Rezervasyon extends BaseEntity {

    @Column(nullable = false, unique = true, length = 30)
    private String rezervasyonNo;

    @Column(nullable = false)
    private String misafirAdi;

    // Integer odaNo yerine Room tablosuyla ilişkilendirdik
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "room_id", nullable = false)
    private Room room;

    @Column(nullable = false)
    private LocalDate girisTarihi;

    @Column(nullable = false)
    private LocalDate cikisTarihi;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private RezervasyonDurum durum;

    // Fiyatlandırma ve Yaş Kriterleri için Eklenen Alanlar
    @Column(name = "total_price", nullable = false)
    private double totalPrice;

    @Column(name = "adult_count")
    private int adultCount;

    @Column(name = "child_above_12_count")
    private int childAbove12Count;

    @Column(name = "child_under_12_count")
    private int childUnder12Count;

    @Column(name = "cancellation_requested")
    private boolean cancellationRequested = false; // 72 saat kala iptal talebi kontrolü için
}