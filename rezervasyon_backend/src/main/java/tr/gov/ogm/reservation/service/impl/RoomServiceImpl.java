package tr.gov.ogm.reservation.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tr.gov.ogm.reservation.dto.request.RoomCreateRequest;
import tr.gov.ogm.reservation.dto.response.RoomResponse;
import tr.gov.ogm.reservation.entity.Room;
import tr.gov.ogm.reservation.repository.RoomRepository;
import tr.gov.ogm.reservation.service.RoomService;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class RoomServiceImpl implements RoomService {
    private final RoomRepository roomRepository;

    @Override
    @Transactional
    public RoomResponse createRoom(RoomCreateRequest request) {
        Room room = Room.builder()
                .roomType(request.getRoomType())
                .capacity(request.getCapacity())
                .hasAirConditioning(request.isHasAirConditioning())
                .hasTv(request.isHasTv())
                .hasMiniBar(request.isHasMiniBar())
                .isAvailable(true)
                .build();

        room.setCreatedAt(LocalDateTime.now());
        room.setCreatedBy("Admin");

        Room saved = roomRepository.save(room);

        RoomResponse res = new RoomResponse();
        res.setId(saved.getId());
        res.setRoomType(saved.getRoomType());
        res.setCapacity(saved.getCapacity());
        res.setHasAirConditioning(saved.isHasAirConditioning());
        res.setHasTv(saved.isHasTv());
        res.setHasMiniBar(saved.isHasMiniBar());
        res.setAvailable(saved.isAvailable());
        res.setCreatedAt(saved.getCreatedAt());
        return res;
    }
}