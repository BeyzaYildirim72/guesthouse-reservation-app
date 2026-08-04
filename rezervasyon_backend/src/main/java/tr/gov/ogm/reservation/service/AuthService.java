package tr.gov.ogm.reservation.service;

import tr.gov.ogm.reservation.dto.request.LoginRequest;
import tr.gov.ogm.reservation.dto.request.RegisterRequest;
import tr.gov.ogm.reservation.dto.response.AuthResponse;
import tr.gov.ogm.reservation.dto.response.UserResponse;

public interface AuthService {
    UserResponse register(RegisterRequest request);
    AuthResponse login(LoginRequest request);
}
