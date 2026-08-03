package tr.gov.ogm.reservation.dto.response;

import tr.gov.ogm.reservation.entity.Role;
import tr.gov.ogm.reservation.entity.User;

import java.time.LocalDateTime;
import java.util.UUID;

public record UserResponse(UUID id, String email, String firstName, String lastName, Role role,
                           boolean active, LocalDateTime createdAt) {
    public static UserResponse from(User user) {
        return new UserResponse(user.getId(), user.getEmail(), user.getFirstName(), user.getLastName(),
                user.getRole(), user.isActive(), user.getCreatedAt());
    }
}
