package tr.gov.ogm.rezervasyon.service.impl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tr.gov.ogm.rezervasyon.common.exception.BusinessException;
import tr.gov.ogm.rezervasyon.common.exception.ErrorCode;
import tr.gov.ogm.rezervasyon.dto.request.RoomCreateRequest;
import tr.gov.ogm.rezervasyon.dto.response.RoomResponse;
import tr.gov.ogm.rezervasyon.entity.Room;
import tr.gov.ogm.rezervasyon.repository.RoomRepository;
import tr.gov.ogm.rezervasyon.service.RoomService;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RoomServiceImpl implements RoomService {
    private final RoomRepository roomRepository;
    @Override
    public RoomResponse createRoom(RoomCreateRequest request) {
        Room room = new Room();
        room.setRoomType(request.getRoomType());
        room.setCapacity(request.getCapacity());
        room.setHasAirConditioning(request.isHasAirConditioning());
        room.setHasTv(request.isHasTv());
        room.setHasMiniBar(request.isHasMiniBar());

        Room savedRoom = roomRepository.save(room);
        return convertToResponse(savedRoom);
    }

    @Override
    public List<RoomResponse> getAllRooms() {
        return roomRepository.findAll()
                .stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public RoomResponse getRoomById(Long id) {
        Room room = findRoomOrElseThrow(id);
        return convertToResponse(room);
    }

    @Override
    public RoomResponse updateRoom(Long id, RoomCreateRequest request) {
        Room room = findRoomOrElseThrow(id);

        room.setRoomType(request.getRoomType());
        room.setCapacity(request.getCapacity());
        room.setHasAirConditioning(request.isHasAirConditioning());
        room.setHasTv(request.isHasTv());
        room.setHasMiniBar(request.isHasMiniBar());

        Room updatedRoom = roomRepository.save(room);
        return convertToResponse(updatedRoom);
    }

    @Override
    public void deleteRoom(Long id) {
        Room room = findRoomOrElseThrow(id);
        room.setDeleted(true);
        roomRepository.save(room);
    }

    private Room findRoomOrElseThrow(Long id) {
        return roomRepository.findById(id)
                .orElseThrow(() -> new BusinessException(ErrorCode.VALIDATION_ERROR, "Oda bulunamadı. ID: " + id));
    }

    private RoomResponse convertToResponse(Room room) {
        RoomResponse response = new RoomResponse();
        response.setId(room.getId());
        response.setRoomType(room.getRoomType());
        response.setCapacity(room.getCapacity());
        response.setHasAirConditioning(room.isHasAirConditioning());
        response.setHasTv(room.isHasTv());
        response.setHasMiniBar(room.isHasMiniBar());
        response.setAvailable(room.isAvailable());
        response.setCreatedAt(room.getCreatedAt());
        return response;
    }

}
