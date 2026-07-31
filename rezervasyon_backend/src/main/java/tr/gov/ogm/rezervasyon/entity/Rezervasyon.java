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

    @Column(nullable = false)
    private Integer odaNo;

    @Column(nullable = false)
    private LocalDate girisTarihi;

    @Column(nullable = false)
    private LocalDate cikisTarihi;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private RezervasyonDurum durum;
}