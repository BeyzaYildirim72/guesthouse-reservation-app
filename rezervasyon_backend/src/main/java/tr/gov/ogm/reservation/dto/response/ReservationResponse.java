package tr.gov.ogm.reservation.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDate;

@Getter
@Builder
@AllArgsConstructor
public class ReservationResponse {
    private Long id;
    private String rezNo;
    private String misafirAdi;
    private Integer odaNo;
    private LocalDate giris;
    private LocalDate cikis;
    private long gece;
    private String durum;
}