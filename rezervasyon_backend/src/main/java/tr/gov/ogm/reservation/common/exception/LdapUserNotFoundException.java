package tr.gov.ogm.reservation.common.exception;

public class LdapUserNotFoundException extends RuntimeException {
    public LdapUserNotFoundException() {
        super("LDAP user not found");
    }
}
