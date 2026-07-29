package tr.gov.ogm.rezervasyon.auth.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class LoginResponse {

    private final String accessToken;
    private final String tokenType = "Bearer";
    private final String email;
    private final String fullName;
}