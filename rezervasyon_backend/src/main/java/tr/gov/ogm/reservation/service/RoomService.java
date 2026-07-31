package tr.gov.ogm.reservation.service;

import tr.gov.ogm.reservation.dto.request.RoomCreateRequest;
import tr.gov.ogm.reservation.dto.response.RoomResponse;

public interface RoomService {
    RoomResponse createRoom(RoomCreateRequest request);
}