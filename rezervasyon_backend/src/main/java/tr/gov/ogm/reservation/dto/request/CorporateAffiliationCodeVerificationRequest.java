package tr.gov.ogm.reservation.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public record CorporateAffiliationCodeVerificationRequest(
        @NotBlank @Pattern(regexp = "^[0-9]{6}$") String code) {
}
