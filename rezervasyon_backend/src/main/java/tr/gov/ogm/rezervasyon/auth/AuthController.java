package tr.gov.ogm.rezervasyon.auth;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirements;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tr.gov.ogm.rezervasyon.auth.dto.*;
import tr.gov.ogm.rezervasyon.common.response.ApiResponse;

@Tag(name = "Auth", description = "Kayıt, giriş ve şifre sıfırlama işlemleri")
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @Operation(summary = "Yeni kullanıcı kaydı")
    @SecurityRequirements // bu endpoint token gerektirmiyor, Swagger'da kilit ikonu görünmesin
    @PostMapping("/register")
    public ResponseEntity<ApiResponse<Void>> register(@Valid @RequestBody RegisterRequest request) {
        authService.register(request);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(ApiResponse.success("Kayıt başarılı", null));
    }

    @Operation(summary = "Giriş yap, JWT token al")
    @SecurityRequirements
    @PostMapping("/login")
    public ResponseEntity<ApiResponse<LoginResponse>> login(@Valid @RequestBody LoginRequest request) {
        LoginResponse response = authService.login(request);
        return ResponseEntity.ok(ApiResponse.success("Giriş başarılı", response));
    }

    @Operation(summary = "Şifre sıfırlama linki gönder")
    @SecurityRequirements
    @PostMapping("/forgot-password")
    public ResponseEntity<ApiResponse<Void>> forgotPassword(
            @Valid @RequestBody ForgotPasswordRequest request) {
        authService.forgotPassword(request);
        return ResponseEntity.ok(ApiResponse.success(
                "Eğer bu e-posta kayıtlıysa, şifre sıfırlama linki gönderildi", null));
    }

    @Operation(summary = "Token ile şifreyi sıfırla")
    @SecurityRequirements
    @PostMapping("/reset-password")
    public ResponseEntity<ApiResponse<Void>> resetPassword(
            @Valid @RequestBody ResetPasswordRequest request) {
        authService.resetPassword(request);
        return ResponseEntity.ok(ApiResponse.success("Şifreniz başarıyla güncellendi", null));
    }
}