package tr.gov.ogm.rezervasyon.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tr.gov.ogm.rezervasyon.auth.dto.*;
import tr.gov.ogm.rezervasyon.common.exception.BusinessException;
import tr.gov.ogm.rezervasyon.common.exception.ErrorCode;
import tr.gov.ogm.rezervasyon.common.security.JwtUtil;
import tr.gov.ogm.rezervasyon.user.User;
import tr.gov.ogm.rezervasyon.user.UserRepository;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final PasswordResetTokenRepository resetTokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;
    private final MailService mailService;

    @Override
    @Transactional
    public void register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new BusinessException(ErrorCode.EMAIL_ALREADY_EXISTS);
        }

        String hashedPassword = passwordEncoder.encode(request.getPassword());
        User user = new User(request.getEmail(), hashedPassword, request.getFullName());
        userRepository.save(user);
    }

    @Override
    public LoginResponse login(LoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new BusinessException(ErrorCode.INVALID_CREDENTIALS));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new BusinessException(ErrorCode.INVALID_CREDENTIALS);
        }

        if (!user.isEnabled()) {
            throw new BusinessException(ErrorCode.ACCOUNT_DISABLED);
        }

        String token = jwtUtil.generateToken(user.getEmail());
        return new LoginResponse(token, user.getEmail(), user.getFullName());
    }

    @Override
    @Transactional
    public void forgotPassword(ForgotPasswordRequest request) {
        // Kullanıcı bulunamasa bile aynı davranış: email enumeration'a karşı koruma
        userRepository.findByEmail(request.getEmail()).ifPresent(user -> {
            String token = UUID.randomUUID().toString();
            resetTokenRepository.save(new PasswordResetToken(token, user));
            mailService.sendPasswordResetEmail(user.getEmail(), token);
        });
    }

    @Override
    @Transactional
    public void resetPassword(ResetPasswordRequest request) {
        PasswordResetToken resetToken = resetTokenRepository.findByToken(request.getToken())
                .orElseThrow(() -> new BusinessException(ErrorCode.INVALID_RESET_TOKEN));

        if (resetToken.isUsed()) {
            throw new BusinessException(ErrorCode.INVALID_RESET_TOKEN);
        }

        if (resetToken.isExpired()) {
            throw new BusinessException(ErrorCode.RESET_TOKEN_EXPIRED);
        }

        User user = resetToken.getUser();
        user.setPassword(passwordEncoder.encode(request.getNewPassword()));
        resetToken.markUsed();

        userRepository.save(user);
        resetTokenRepository.save(resetToken);
    }
}