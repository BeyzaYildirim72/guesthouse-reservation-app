package tr.gov.ogm.rezervasyon.auth.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResetPasswordRequest {

    @NotBlank(message = "Token boş olamaz")
    private String token;

    @NotBlank(message = "Yeni şifre boş olamaz")
    @Size(min = 8, message = "Şifre en az 8 karakter olmalı")
    private String newPassword;
}