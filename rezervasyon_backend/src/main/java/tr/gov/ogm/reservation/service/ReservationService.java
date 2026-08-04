package tr.gov.ogm.reservation.service;

import tr.gov.ogm.reservation.dto.request.ReservationCreateRequest;
import tr.gov.ogm.reservation.entity.Reservation;

public interface ReservationService {
    Reservation createReservation(ReservationCreateRequest request);
    void cancelReservation(Long reservationId);
}