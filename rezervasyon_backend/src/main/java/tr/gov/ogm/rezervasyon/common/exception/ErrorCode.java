package tr.gov.ogm.rezervasyon.common.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

/**
 * Uygulama genelindeki tüm iş hatalarını tek yerden yönetir.
 * Yeni bir feature eklendiğinde (rezervasyon, user, vs.) buraya
 * kendi hata kodlarını ekle.
 */
@Getter
@RequiredArgsConstructor
public enum ErrorCode {

    // ---- User / Auth ----
    EMAIL_ALREADY_EXISTS(HttpStatus.CONFLICT, "Bu e-posta adresi zaten kayıtlı"),
    USER_NOT_FOUND(HttpStatus.NOT_FOUND, "Kullanıcı bulunamadı"),
    INVALID_CREDENTIALS(HttpStatus.UNAUTHORIZED, "E-posta veya şifre hatalı"),
    ACCOUNT_DISABLED(HttpStatus.FORBIDDEN, "Hesap devre dışı bırakılmış"),
    INVALID_RESET_TOKEN(HttpStatus.BAD_REQUEST, "Şifre sıfırlama linki geçersiz"),
    RESET_TOKEN_EXPIRED(HttpStatus.BAD_REQUEST, "Şifre sıfırlama linkinin süresi dolmuş"),

    // ---- Auth / Token ----
    INVALID_TOKEN(HttpStatus.UNAUTHORIZED, "Token geçersiz"),
    TOKEN_EXPIRED(HttpStatus.UNAUTHORIZED, "Token süresi dolmuş"),
    UNAUTHORIZED(HttpStatus.UNAUTHORIZED, "Bu işlem için yetkiniz yok"),

    // ---- Generic ----
    VALIDATION_ERROR(HttpStatus.BAD_REQUEST, "Girilen bilgiler geçersiz"),
    INTERNAL_ERROR(HttpStatus.INTERNAL_SERVER_ERROR, "Beklenmeyen bir hata oluştu");

    private final HttpStatus status;
    private final String defaultMessage;
}