package tr.gov.ogm.rezervasyon.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CancellationRequestDto {
    private Long rezervasyonId;
    private String aciklama;
}