package tr.gov.ogm.reservation.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tr.gov.ogm.reservation.entity.CorporateAffiliationMethod;
import tr.gov.ogm.reservation.entity.CorporateAffiliationVerification;

import java.util.Optional;
import java.util.Optional;

public interface CorporateAffiliationVerificationRepository
        extends JpaRepository<CorporateAffiliationVerification, Long> {

    Optional<CorporateAffiliationVerification> findTopByUserIdAndMethodAndVerifiedFalseOrderByCreatedAtDesc(
            Long userId, CorporateAffiliationMethod method);
}
