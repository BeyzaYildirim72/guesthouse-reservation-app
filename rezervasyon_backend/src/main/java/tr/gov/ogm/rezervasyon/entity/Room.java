package tr.gov.ogm.rezervasyon.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "rooms")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Room extends BaseEntity {

    // Not: id alanı BaseEntity'den geldiği için burada tekrar tanımlanmadı.

    @Column(name = "room_type", nullable = false)
    private String roomType;

    @Column(nullable = false)
    private Integer capacity;

    @Column(name = "base_price", nullable = false)
    private double basePrice; // Fiyatlandırma gereksinimi için eklendi

    @Column(name = "has_air_conditioning")
    private boolean hasAirConditioning;

    @Column(name = "has_tv")
    private boolean hasTv;

    @Column(name = "has_minibar")
    private boolean hasMiniBar;

    @Column(name = "is_available")
    private boolean isAvailable = true;
}