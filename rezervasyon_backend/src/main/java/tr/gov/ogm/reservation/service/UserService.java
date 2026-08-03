package tr.gov.ogm.reservation.service;

import tr.gov.ogm.reservation.dto.request.CreateStaffUserRequest;
import tr.gov.ogm.reservation.dto.response.UserResponse;

import java.util.List;
import java.util.UUID;

public interface UserService {
    UserResponse createStaffUser(CreateStaffUserRequest request);
    UserResponse activateUser(UUID id);
    UserResponse deactivateUser(UUID id);
    List<UserResponse> listUsers();
}
