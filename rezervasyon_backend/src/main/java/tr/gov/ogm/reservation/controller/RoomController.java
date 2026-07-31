package tr.gov.ogm.reservation.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tr.gov.ogm.reservation.dto.request.RoomCreateRequest;
import tr.gov.ogm.reservation.dto.response.RoomResponse;
import tr.gov.ogm.reservation.service.impl.RoomServiceImpl;

@RestController
@RequestMapping("/api/rooms")
@RequiredArgsConstructor
public class RoomController {
    private final RoomServiceImpl roomService;

    @PostMapping
    public ResponseEntity<RoomResponse> createRoom(@RequestBody RoomCreateRequest request) {
        return ResponseEntity.ok(roomService.createRoom(request));
    }
}