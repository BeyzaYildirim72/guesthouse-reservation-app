package tr.gov.ogm.reservation.service;

import tr.gov.ogm.reservation.dto.request.CorporateAffiliationCodeVerificationRequest;
import tr.gov.ogm.reservation.dto.request.CorporateAffiliationRequest;

public interface CorporateAffiliationService {
    void requestVerification(CorporateAffiliationRequest request);
    void verifyCode(CorporateAffiliationCodeVerificationRequest request);
    String startSso();
    void completeSso(String verifiedEmail);
}
