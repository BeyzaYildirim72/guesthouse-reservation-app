package tr.gov.ogm.reservation.common.exception;

public class VerificationCodeExpiredException extends RuntimeException {
    public VerificationCodeExpiredException() {
        super("Verification code has expired");
    }
}
