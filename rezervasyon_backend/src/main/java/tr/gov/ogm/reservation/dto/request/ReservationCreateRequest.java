package tr.gov.ogm.reservation.dto.request;

import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;

@Getter
@Setter
public class ReservationCreateRequest {
    private Long roomId;
    private Long userId;
    private LocalDateTime checkInDate;
}