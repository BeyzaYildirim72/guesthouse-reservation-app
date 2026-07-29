package tr.gov.ogm.rezervasyon.common.exception;

import lombok.Getter;

/**
 * Herhangi bir feature'da iş kuralı ihlal edildiğinde bu exception
 * fırlatılır. GlobalExceptionHandler bunu yakalayıp ErrorCode'a göre
 * doğru HTTP status ve mesajı üretir.
 *
 * Kullanım:
 *   throw new BusinessException(ErrorCode.EMAIL_ALREADY_EXISTS);
 *   throw new BusinessException(ErrorCode.USER_NOT_FOUND, "id=" + id);
 */
@Getter
public class BusinessException extends RuntimeException {

    private final ErrorCode errorCode;

    public BusinessException(ErrorCode errorCode) {
        super(errorCode.getDefaultMessage());
        this.errorCode = errorCode;
    }

    public BusinessException(ErrorCode errorCode, String customMessage) {
        super(customMessage);
        this.errorCode = errorCode;
    }
}