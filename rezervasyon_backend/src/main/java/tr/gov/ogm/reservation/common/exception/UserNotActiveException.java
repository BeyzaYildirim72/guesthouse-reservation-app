package tr.gov.ogm.reservation.common.exception;

public class UserNotActiveException extends RuntimeException {
    public UserNotActiveException() { super("User account is not active"); }
}
