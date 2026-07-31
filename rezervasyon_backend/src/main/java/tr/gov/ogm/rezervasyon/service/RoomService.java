package tr.gov.ogm.rezervasyon.service;
import tr.gov.ogm.rezervasyon.dto.request.RoomCreateRequest;
import tr.gov.ogm.rezervasyon.dto.response.RoomResponse;
import tr.gov.ogm.rezervasyon.dto.RoomPriceRequest;
import tr.gov.ogm.rezervasyon.entity.Room;
import java.util.List;
public interface RoomService {
    RoomResponse createRoom(RoomCreateRequest request);
    List<RoomResponse> getAllRooms();
    RoomResponse getRoomById(Long id);
    RoomResponse updateRoom(Long id, RoomCreateRequest request);
    Room updateRoomPrice(Long roomId, RoomPriceRequest request);
    void deleteRoom(Long id);
}
