package tr.gov.ogm.reservation.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record CorporateAffiliationRequest(@NotBlank String ldapUsername, @Email @NotBlank String email) {
}
