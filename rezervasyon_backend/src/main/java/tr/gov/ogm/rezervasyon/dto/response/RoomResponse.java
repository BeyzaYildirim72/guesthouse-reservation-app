package tr.gov.ogm.rezervasyon.dto.response;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;

@Getter
@Setter
public class RoomResponse {
    private Long id;
    private String roomType;
    private Integer capacity;
    private boolean hasAirConditioning;
    private boolean hasTv;
    private boolean hasMiniBar;
    private boolean isAvailable;
    private LocalDateTime createdAt;
}
