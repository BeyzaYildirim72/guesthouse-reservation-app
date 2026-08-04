package tr.gov.ogm.reservation.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RoomCreateRequest {
    private String roomType;
    private Integer capacity;
    private boolean hasAirConditioning;
    private boolean hasTv;
    private boolean hasMiniBar;
}