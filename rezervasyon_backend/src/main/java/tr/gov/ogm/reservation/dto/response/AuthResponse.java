package tr.gov.ogm.reservation.dto.response;

import tr.gov.ogm.reservation.entity.Role;
import tr.gov.ogm.reservation.entity.User;

public record AuthResponse(String accessToken, String email, Role role) {
    public static AuthResponse from(User user, String accessToken) {
        return new AuthResponse(accessToken, user.getEmail(), user.getRole());
    }
}
