package tr.gov.ogm.reservation.service.impl;

// TODO: gerçek e-posta gönderimi entegre edilene kadar geçici implementasyon.
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import tr.gov.ogm.reservation.service.EmailVerificationSender;

@Slf4j
@Component
public class NoOpEmailVerificationSender implements EmailVerificationSender {
    @Override
    public void sendCode(String toEmail, String code) {
        log.info("Corporate affiliation verification code for {}: {}", toEmail, code);
    }
}
