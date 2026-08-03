package tr.gov.ogm.reservation.service.impl;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tr.gov.ogm.reservation.common.exception.InvalidCredentialsException;
import tr.gov.ogm.reservation.common.exception.UserAlreadyExistsException;
import tr.gov.ogm.reservation.common.exception.UserNotActiveException;
import tr.gov.ogm.reservation.common.security.JwtUtil;
import tr.gov.ogm.reservation.dto.request.LoginRequest;
import tr.gov.ogm.reservation.dto.request.RegisterRequest;
import tr.gov.ogm.reservation.dto.response.AuthResponse;
import tr.gov.ogm.reservation.dto.response.UserResponse;
import tr.gov.ogm.reservation.entity.Role;
import tr.gov.ogm.reservation.entity.User;
import tr.gov.ogm.reservation.repository.UserRepository;
import tr.gov.ogm.reservation.service.AuthService;

@Service
public class AuthServiceImpl implements AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public AuthServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    @Override
    @Transactional
    public UserResponse register(RegisterRequest request) {
        // The database unique constraint remains authoritative; this check only improves the user-facing error.
        if (userRepository.existsByEmail(request.email())) {
            throw new UserAlreadyExistsException();
        }
        User user = new User(request.email(), passwordEncoder.encode(request.password()), request.firstName(),
                request.lastName(), Role.GUEST, true);
        return UserResponse.from(userRepository.save(user));
    }

    @Override
    @Transactional(readOnly = true)
    public AuthResponse login(LoginRequest request) {
        User user = userRepository.findByEmail(request.email())
                .orElseThrow(InvalidCredentialsException::new);
        if (!passwordEncoder.matches(request.password(), user.getPasswordHash())) {
            throw new InvalidCredentialsException();
        }
        if (!user.isActive()) {
            throw new UserNotActiveException();
        }
        return AuthResponse.from(user, jwtUtil.generateToken(user.getEmail(), user.getRole()));
    }
}
