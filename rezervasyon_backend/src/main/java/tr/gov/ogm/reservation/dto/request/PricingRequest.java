package tr.gov.ogm.reservation.dto.request;

import lombok.Getter;
import lombok.Setter;
import java.math.BigDecimal;

@Getter
@Setter
public class PricingRequest {
    private Long roomId;
    private String season; // Dönem (Yaz/Kış)
    private String ageGroup; // Yetişkin, Çocuk, 12_ALT_UCRETSIZ
    private BigDecimal price;
}