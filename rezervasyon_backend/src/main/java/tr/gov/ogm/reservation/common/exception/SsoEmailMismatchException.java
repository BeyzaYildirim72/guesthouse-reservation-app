package tr.gov.ogm.reservation.common.exception;

/**
 * This endpoint's contract is provisional. The real integration with ActiveDirectoryLoginApplication
 * has not been confirmed. Do not build frontend logic against this permanently without revisiting once
 * the real contract is known.
 */
public class SsoEmailMismatchException extends RuntimeException {
    public SsoEmailMismatchException() {
        super("SSO verified email does not match the current guest");
    }
}
