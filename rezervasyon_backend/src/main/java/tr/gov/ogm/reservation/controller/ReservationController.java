package tr.gov.ogm.reservation.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tr.gov.ogm.reservation.dto.request.ReservationCreateRequest;
import tr.gov.ogm.reservation.entity.Reservation;
import tr.gov.ogm.reservation.service.impl.ReservationServiceImpl;

@RestController
@RequestMapping("/api/reservations")
@RequiredArgsConstructor
public class ReservationController {
    private final ReservationServiceImpl reservationService;

    @PostMapping
    public ResponseEntity<Reservation> createReservation(@RequestBody ReservationCreateRequest request) {
        return ResponseEntity.ok(reservationService.createReservation(request));
    }
}