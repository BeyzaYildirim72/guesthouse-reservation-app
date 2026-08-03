package tr.gov.ogm.reservation.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "rooms")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Room extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String roomType;
    private Integer capacity;
    private boolean hasAirConditioning;
    private boolean hasTv;
    private boolean hasMiniBar;
    private boolean isAvailable;
}