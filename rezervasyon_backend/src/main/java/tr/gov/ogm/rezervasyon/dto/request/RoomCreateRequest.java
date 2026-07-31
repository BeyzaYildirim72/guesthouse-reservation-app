package tr.gov.ogm.rezervasyon.dto.request;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RoomCreateRequest {
    @NotBlank(message = "Room type cannot be blank")
    private String roomType;

    @Min(value = 1, message = "Capacity must be at least 1")
    private Integer capacity;

    private boolean hasAirConditioning;
    private boolean hasTv;
    private boolean hasMiniBar;
}
