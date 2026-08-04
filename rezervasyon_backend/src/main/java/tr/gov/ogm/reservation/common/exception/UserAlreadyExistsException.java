package tr.gov.ogm.reservation.common.exception;

public class UserAlreadyExistsException extends RuntimeException {
    public UserAlreadyExistsException() { super("User already exists"); }
}
