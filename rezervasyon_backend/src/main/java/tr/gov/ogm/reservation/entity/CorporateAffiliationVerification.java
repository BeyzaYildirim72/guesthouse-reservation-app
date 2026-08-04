package tr.gov.ogm.reservation.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;

import java.time.LocalDateTime;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
@Table(name = "corporate_affiliation_verifications")
public class CorporateAffiliationVerification extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long userId;
    @Column(nullable = false)
    private String ldapUsername;
    private String generatedCode;
    private LocalDateTime expiresAt;
    @Column(nullable = false)
    private boolean verified;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private CorporateAffiliationMethod method;

    protected CorporateAffiliationVerification() {
    }

    public CorporateAffiliationVerification(Long userId, String ldapUsername, String generatedCode,
                                            LocalDateTime expiresAt, CorporateAffiliationMethod method) {
        this.userId = userId;
        this.ldapUsername = ldapUsername;
        this.generatedCode = generatedCode;
        this.expiresAt = expiresAt;
        this.method = method;
    }

    public boolean isExpired(LocalDateTime now) {
        return expiresAt == null || !expiresAt.isAfter(now);
    }

    public boolean matchesCode(String code) {
        return generatedCode != null && generatedCode.equals(code);
    }

    public void verify() {
        this.verified = true;
    }
}
