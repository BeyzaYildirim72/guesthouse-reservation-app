package tr.gov.ogm.rezervasyon.dto.request;

import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class RezervasyonRequest {

    @NotBlank(message = "Misafir adı boş olamaz")
    private String misafirAdi;

    @NotNull(message = "Oda no seçilmeli")
    private Integer odaNo;

    @NotNull(message = "Giriş tarihi zorunlu")
    private LocalDate giris;

    @NotNull(message = "Çıkış tarihi zorunlu")
    private LocalDate cikis;

    @NotBlank(message = "Durum seçilmeli")
    private String durum; // "Beklemede", "Onaylı" vb.
}