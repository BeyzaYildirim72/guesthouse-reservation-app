package tr.gov.ogm.reservation.port;

import java.util.Optional;

public interface LdapLookupPort {
    Optional<LdapEmployeeInfo> findByUsername(String username);
}
