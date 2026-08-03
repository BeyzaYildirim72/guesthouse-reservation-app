package tr.gov.ogm.reservation.service.impl;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tr.gov.ogm.reservation.common.exception.BusinessException;
import tr.gov.ogm.reservation.common.exception.ErrorCode;
import tr.gov.ogm.reservation.common.exception.UserAlreadyExistsException;
import tr.gov.ogm.reservation.common.exception.UserNotFoundException;
import tr.gov.ogm.reservation.dto.request.CreateStaffUserRequest;
import tr.gov.ogm.reservation.dto.response.UserResponse;
import tr.gov.ogm.reservation.entity.Role;
import tr.gov.ogm.reservation.entity.User;
import tr.gov.ogm.reservation.repository.UserRepository;
import tr.gov.ogm.reservation.service.UserService;

import java.util.List;
import java.util.UUID;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    @Transactional
    public UserResponse createStaffUser(CreateStaffUserRequest request) {
        if (request.role() == Role.GUEST) {
            throw new BusinessException(ErrorCode.VALIDATION_ERROR, "Only STAFF or ADMIN roles can be created here");
        }
        if (userRepository.existsByEmail(request.email())) {
            throw new UserAlreadyExistsException();
        }
        // The activation scope does not include credential setup, so a non-usable random hash protects the account.
        String unusablePasswordHash = passwordEncoder.encode(UUID.randomUUID().toString());
        User user = new User(request.email(), unusablePasswordHash, request.firstName(), request.lastName(),
                request.role(), false);
        return UserResponse.from(userRepository.save(user));
    }

    @Override
    @Transactional
    public UserResponse activateUser(Long id) {
        User user = findUser(id);
        user.activate();
        return UserResponse.from(userRepository.save(user));
    }

    @Override
    @Transactional
    public UserResponse deactivateUser(Long id) {
        User user = findUser(id);
        user.deactivate();
        return UserResponse.from(userRepository.save(user));
    }

    @Override
    @Transactional(readOnly = true)
    public List<UserResponse> listUsers() {
        return userRepository.findAll().stream().map(UserResponse::from).toList();
    }

    private User findUser(Long id) {
        return userRepository.findById(id).orElseThrow(UserNotFoundException::new);
    }
}
