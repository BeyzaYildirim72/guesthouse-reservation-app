package tr.gov.ogm.reservation.common.exception;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException() { super("User not found"); }
}
