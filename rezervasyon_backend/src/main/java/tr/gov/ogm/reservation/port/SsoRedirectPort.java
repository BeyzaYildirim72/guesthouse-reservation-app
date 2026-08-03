package tr.gov.ogm.reservation.port;

/**
 * This endpoint's contract is provisional. The real integration with ActiveDirectoryLoginApplication
 * has not been confirmed. Do not build frontend logic against this permanently without revisiting once
 * the real contract is known.
 */
public interface SsoRedirectPort {
    String buildLoginRedirectUrl(String callbackUrl);
}
