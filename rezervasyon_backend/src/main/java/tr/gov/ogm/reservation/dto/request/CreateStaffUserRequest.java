package tr.gov.ogm.reservation.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import tr.gov.ogm.reservation.entity.Role;

public record CreateStaffUserRequest(@Email @NotBlank String email, @NotBlank String firstName,
                                     @NotBlank String lastName, @NotNull Role role) {
}
