package tr.gov.ogm.rezervasyon.auth;

import tr.gov.ogm.rezervasyon.auth.dto.*;

public interface AuthService {

    void register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

    void forgotPassword(ForgotPasswordRequest request);

    void resetPassword(ResetPasswordRequest request);
}