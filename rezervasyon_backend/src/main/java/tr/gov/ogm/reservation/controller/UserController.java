package tr.gov.ogm.reservation.controller;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tr.gov.ogm.reservation.common.response.ApiResponse;
import tr.gov.ogm.reservation.dto.request.CreateStaffUserRequest;
import tr.gov.ogm.reservation.dto.response.UserResponse;
import tr.gov.ogm.reservation.service.UserService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/admin/users")
@PreAuthorize("hasRole('ADMIN')")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<UserResponse>> createStaffUser(@Valid @RequestBody CreateStaffUserRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(ApiResponse.success(userService.createStaffUser(request)));
    }

    @PatchMapping("/{id}/activate")
    public ResponseEntity<ApiResponse<UserResponse>> activateUser(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.success(userService.activateUser(id)));
    }

    @PatchMapping("/{id}/deactivate")
    public ResponseEntity<ApiResponse<UserResponse>> deactivateUser(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.success(userService.deactivateUser(id)));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<UserResponse>>> listUsers() {
        return ResponseEntity.ok(ApiResponse.success(userService.listUsers()));
    }
}
