package tr.gov.ogm.reservation.adapter;

import org.springframework.stereotype.Component;
import tr.gov.ogm.reservation.port.LdapEmployeeInfo;
import tr.gov.ogm.reservation.port.LdapLookupPort;

import java.util.Map;
import java.util.Optional;

@Component
public class InMemoryFakeLdapLookupAdapter implements LdapLookupPort {
    private static final Map<String, LdapEmployeeInfo> EXAMPLE_USERS = Map.of(
            "test.personel", new LdapEmployeeInfo("Test", "Personel", "test@ogm.gov.tr", "Bilgi Islem")
    );

    @Override
    public Optional<LdapEmployeeInfo> findByUsername(String username) {
        // TODO: Replace with a real adapter when the ActiveDirectoryLoginApplication integration is owned and delivered.
        return Optional.ofNullable(EXAMPLE_USERS.get(username));
    }
}
