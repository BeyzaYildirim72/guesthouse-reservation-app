package tr.gov.ogm.reservation.service;

public interface EmailVerificationSender {
    void sendCode(String toEmail, String code);
}
