package tr.gov.ogm.rezervasyon.auth.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegisterRequest {

    @Schema(example = "ahmet@ogm.gov.tr")
    @NotBlank(message = "E-posta boş olamaz")
    @Email(message = "Geçerli bir e-posta adresi giriniz")
    private String email;

    @Schema(example = "Sifre1234")
    @NotBlank(message = "Şifre boş olamaz")
    @Size(min = 8, message = "Şifre en az 8 karakter olmalı")
    private String password;

    @Schema(example = "Ahmet Yılmaz")
    @NotBlank(message = "Ad soyad boş olamaz")
    private String fullName;
}