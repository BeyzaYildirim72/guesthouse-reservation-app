package tr.gov.ogm.reservation.adapter;

import org.springframework.stereotype.Component;
import org.springframework.web.util.UriUtils;
import tr.gov.ogm.reservation.port.SsoRedirectPort;

import java.nio.charset.StandardCharsets;

/**
 * This endpoint's contract is provisional. The real integration with ActiveDirectoryLoginApplication
 * has not been confirmed. Do not build frontend logic against this permanently without revisiting once
 * the real contract is known.
 */
@Component
public class PlaceholderSsoRedirectAdapter implements SsoRedirectPort {
    @Override
    public String buildLoginRedirectUrl(String callbackUrl) {
        // TODO: Replace with real ActiveDirectoryLoginApplication login URL and confirm required query parameters once that team provides the integration contract.
        return "https://ad-login.ogm.gov.tr/oauth/authorize?redirect_uri="
                + UriUtils.encodeQueryParam(callbackUrl, StandardCharsets.UTF_8);
    }
}
