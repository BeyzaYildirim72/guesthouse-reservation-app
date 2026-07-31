package tr.gov.ogm.rezervasyon.service;
import tr.gov.ogm.rezervasyon.dto.request.RoomCreateRequest;
import tr.gov.ogm.rezervasyon.dto.response.RoomResponse;
import java.util.List;
public interface RoomService {
    RoomResponse createRoom(RoomCreateRequest request);
    List<RoomResponse> getAllRooms();
    RoomResponse getRoomById(Long id);
    RoomResponse updateRoom(Long id, RoomCreateRequest request);
    void deleteRoom(Long id);
}
