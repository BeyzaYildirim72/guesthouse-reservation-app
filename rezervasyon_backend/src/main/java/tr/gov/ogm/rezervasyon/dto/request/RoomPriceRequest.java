package tr.gov.ogm.rezervasyon.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RoomPriceRequest {
    private double basePrice;
    private int adultPrice;
    private int childAbove12Price;
    // 12 yaş altı ücretsiz olduğu için fiyat eklemeye gerek yok
}