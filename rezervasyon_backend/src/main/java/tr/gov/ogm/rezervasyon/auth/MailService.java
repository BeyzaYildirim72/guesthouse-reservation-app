package tr.gov.ogm.rezervasyon.auth;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class MailService {

    @Value("${app.frontend.reset-password-url}")
    private String resetPasswordBaseUrl;

    /**
     * TODO: Gerçek SMTP entegrasyonu için spring-boot-starter-mail ekleyip
     * JavaMailSender enjekte et. Şimdilik linki logluyoruz ki akış test edilebilsin.
     */
    public void sendPasswordResetEmail(String toEmail, String token) {
        String resetLink = resetPasswordBaseUrl + "?token=" + token;
        log.info("Şifre sıfırlama linki [{}]: {}", toEmail, resetLink);
    }
}