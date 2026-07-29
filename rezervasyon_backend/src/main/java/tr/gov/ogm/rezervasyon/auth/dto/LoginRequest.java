package tr.gov.ogm.rezervasyon.auth.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginRequest {

    @Schema(example = "ahmet@ogm.gov.tr")
    @NotBlank(message = "E-posta boş olamaz")
    @Email(message = "Geçerli bir e-posta adresi giriniz")
    private String email;

    @Schema(example = "Sifre1234")
    @NotBlank(message = "Şifre boş olamaz")
    private String password;
}