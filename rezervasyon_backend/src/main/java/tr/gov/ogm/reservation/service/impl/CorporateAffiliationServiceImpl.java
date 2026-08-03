package tr.gov.ogm.reservation.service.impl;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tr.gov.ogm.reservation.common.exception.InvalidVerificationCodeException;
import tr.gov.ogm.reservation.common.exception.LdapEmailMismatchException;
import tr.gov.ogm.reservation.common.exception.LdapUserNotFoundException;
import tr.gov.ogm.reservation.common.exception.UserNotFoundException;
import tr.gov.ogm.reservation.common.exception.VerificationCodeExpiredException;
import tr.gov.ogm.reservation.common.exception.SsoEmailMismatchException;
import tr.gov.ogm.reservation.dto.request.CorporateAffiliationCodeVerificationRequest;
import tr.gov.ogm.reservation.dto.request.CorporateAffiliationRequest;
import tr.gov.ogm.reservation.entity.CorporateAffiliationMethod;
import tr.gov.ogm.reservation.entity.CorporateAffiliationVerification;
import tr.gov.ogm.reservation.entity.User;
import tr.gov.ogm.reservation.port.LdapEmployeeInfo;
import tr.gov.ogm.reservation.port.LdapLookupPort;
import tr.gov.ogm.reservation.port.SsoRedirectPort;
import tr.gov.ogm.reservation.repository.CorporateAffiliationVerificationRepository;
import tr.gov.ogm.reservation.repository.UserRepository;
import tr.gov.ogm.reservation.service.CorporateAffiliationService;
import tr.gov.ogm.reservation.service.EmailVerificationSender;

import java.security.SecureRandom;
import java.time.LocalDateTime;

@Service
public class CorporateAffiliationServiceImpl implements CorporateAffiliationService {
    private static final SecureRandom SECURE_RANDOM = new SecureRandom();
    private static final int VERIFICATION_CODE_BOUND = 1_000_000;

    private final UserRepository userRepository;
    private final CorporateAffiliationVerificationRepository verificationRepository;
    private final LdapLookupPort ldapLookupPort;
    private final EmailVerificationSender emailVerificationSender;
    private final SsoRedirectPort ssoRedirectPort;
    private final String ssoCallbackUrl;

    public CorporateAffiliationServiceImpl(UserRepository userRepository,
                                           CorporateAffiliationVerificationRepository verificationRepository,
                                           LdapLookupPort ldapLookupPort,
                                           EmailVerificationSender emailVerificationSender,
                                           SsoRedirectPort ssoRedirectPort,
                                           @Value("${app.corporate-affiliation.sso.callback-url:http://localhost:8080/api/corporate-affiliation/sso/callback}")
                                           String ssoCallbackUrl) {
        this.userRepository = userRepository;
        this.verificationRepository = verificationRepository;
        this.ldapLookupPort = ldapLookupPort;
        this.emailVerificationSender = emailVerificationSender;
        this.ssoRedirectPort = ssoRedirectPort;
        this.ssoCallbackUrl = ssoCallbackUrl;
    }

    @Override
    @Transactional
    public void requestVerification(CorporateAffiliationRequest request) {
        LdapEmployeeInfo ldapEmployee = ldapLookupPort.findByUsername(request.ldapUsername())
                .orElseThrow(LdapUserNotFoundException::new);
        if (!ldapEmployee.mail().equals(request.email())) {
            throw new LdapEmailMismatchException();
        }

        User currentUser = getCurrentUser();
        String code = String.format("%06d", SECURE_RANDOM.nextInt(VERIFICATION_CODE_BOUND));
        CorporateAffiliationVerification verification = new CorporateAffiliationVerification(
                currentUser.getId(), request.ldapUsername(), code, LocalDateTime.now().plusMinutes(10),
                CorporateAffiliationMethod.EMAIL_CODE);
        verificationRepository.save(verification);
        emailVerificationSender.sendCode(request.email(), code);
    }

    @Override
    @Transactional
    public void verifyCode(CorporateAffiliationCodeVerificationRequest request) {
        User currentUser = getCurrentUser();
        CorporateAffiliationVerification verification = verificationRepository
                .findTopByUserIdAndMethodAndVerifiedFalseOrderByCreatedAtDesc(
                        currentUser.getId(), CorporateAffiliationMethod.EMAIL_CODE)
                .orElseThrow(InvalidVerificationCodeException::new);
        if (verification.isExpired(LocalDateTime.now())) {
            throw new VerificationCodeExpiredException();
        }
        if (!verification.matchesCode(request.code())) {
            throw new InvalidVerificationCodeException();
        }
        verification.verify();
    }

    @Override
    @Transactional(readOnly = true)
    public String startSso() {
        return ssoRedirectPort.buildLoginRedirectUrl(ssoCallbackUrl);
    }

    @Override
    @Transactional
    public void completeSso(String verifiedEmail) {
        User currentUser = getCurrentUser();
        if (!currentUser.getEmail().equals(verifiedEmail)) {
            throw new SsoEmailMismatchException();
        }

        // TODO: Confirm the ActiveDirectoryLoginApplication callback payload and trusted identity guarantees with its owner.
        CorporateAffiliationVerification verification = new CorporateAffiliationVerification(
                currentUser.getId(), verifiedEmail, null, null, CorporateAffiliationMethod.SSO);
        verification.verify();
        verificationRepository.save(verification);
    }

    private User getCurrentUser() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByEmail(email).orElseThrow(UserNotFoundException::new);
    }
}
