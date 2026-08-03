package tr.gov.ogm.reservation.controller;

import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tr.gov.ogm.reservation.common.response.ApiResponse;
import tr.gov.ogm.reservation.dto.request.CorporateAffiliationCodeVerificationRequest;
import tr.gov.ogm.reservation.dto.request.CorporateAffiliationRequest;
import tr.gov.ogm.reservation.service.CorporateAffiliationService;

@RestController
@RequestMapping("/api/corporate-affiliation")
@PreAuthorize("hasRole('GUEST')")
public class CorporateAffiliationController {
    private final CorporateAffiliationService corporateAffiliationService;

    public CorporateAffiliationController(CorporateAffiliationService corporateAffiliationService) {
        this.corporateAffiliationService = corporateAffiliationService;
    }

    @PostMapping("/request")
    public ResponseEntity<ApiResponse<Void>> requestVerification(
            @Valid @RequestBody CorporateAffiliationRequest request) {
        corporateAffiliationService.requestVerification(request);
        return ResponseEntity.ok(ApiResponse.success(null));
    }

    @PostMapping("/verify")
    public ResponseEntity<ApiResponse<Void>> verifyCode(
            @Valid @RequestBody CorporateAffiliationCodeVerificationRequest request) {
        corporateAffiliationService.verifyCode(request);
        return ResponseEntity.ok(ApiResponse.success(null));
    }

    @GetMapping("/sso/start")
    public ResponseEntity<ApiResponse<String>> startSso() {
        return ResponseEntity.ok(ApiResponse.success(corporateAffiliationService.startSso()));
    }

    @GetMapping("/sso/callback")
    public ResponseEntity<ApiResponse<Void>> completeSso(@RequestParam String verifiedEmail) {
        // TODO: This parameter is provisional; confirm the callback contract with ActiveDirectoryLoginApplication's owner.
        corporateAffiliationService.completeSso(verifiedEmail);
        return ResponseEntity.ok(ApiResponse.success(null));
    }
}
