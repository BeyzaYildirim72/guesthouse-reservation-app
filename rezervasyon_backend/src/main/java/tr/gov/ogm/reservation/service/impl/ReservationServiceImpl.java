package tr.gov.ogm.reservation.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tr.gov.ogm.reservation.dto.request.ReservationCreateRequest;
import tr.gov.ogm.reservation.entity.Reservation;
import tr.gov.ogm.reservation.entity.ReservationStatus;
import tr.gov.ogm.reservation.repository.ReservationRepository;
import tr.gov.ogm.reservation.service.ReservationService;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

@Service
@RequiredArgsConstructor
public class ReservationServiceImpl implements ReservationService {
    private final ReservationRepository reservationRepository;

    @Override
    @Transactional
    public Reservation createReservation(ReservationCreateRequest request) {
        long hoursBetween = ChronoUnit.HOURS.between(LocalDateTime.now(), request.getCheckInDate());
        if (hoursBetween < 48) {
            throw new IllegalArgumentException("Giriş tarihine 48 saatten az kala reservation yapılamaz!");
        }

        Reservation reservation = Reservation.builder()
                .roomId(request.getRoomId())
                .userId(request.getUserId())
                .checkInDate(request.getCheckInDate())
                .totalPrice(BigDecimal.valueOf(1500.0))
                .status(ReservationStatus.PENDING_PAYMENT)
                .build();

        reservation.setCreatedAt(LocalDateTime.now());
        return reservationRepository.save(reservation);
    }

    @Override
    @Transactional
    public void cancelReservation(Long reservationId) {
        Reservation reservation = reservationRepository.findById(reservationId)
                .orElseThrow(() -> new RuntimeException("reservation bulunamadı!"));

        reservation.setStatus(ReservationStatus.CANCELLED);
        reservationRepository.save(reservation);
    }
}