package tr.gov.ogm.reservation.common.exception;

public class LdapEmailMismatchException extends RuntimeException {
    public LdapEmailMismatchException() {
        super("Email does not match the LDAP record");
    }
}
