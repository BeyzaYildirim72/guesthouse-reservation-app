package tr.gov.ogm.rezervasyon.controller;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tr.gov.ogm.rezervasyon.common.response.ApiResponse;
import tr.gov.ogm.rezervasyon.dto.request.RoomCreateRequest;
import tr.gov.ogm.rezervasyon.dto.response.RoomResponse;
import tr.gov.ogm.rezervasyon.service.RoomService;
import java.util.List;

@RestController
@RequestMapping("/api/v1/rooms")
@RequiredArgsConstructor
@Tag(name = "Rooms", description = "Oda Yönetimi API'leri")
public class RoomController {
    private final RoomService roomService;

    @PostMapping
    @Operation(summary = "Yeni Oda Ekle", description = "Sisteme yeni bir oda kaydeder.")
    public ResponseEntity<ApiResponse<RoomResponse>> createRoom(@Valid @RequestBody RoomCreateRequest request) {
        RoomResponse response = roomService.createRoom(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(ApiResponse.success(response));
    }

    @GetMapping
    @Operation(summary = "Tüm Odaları Getir", description = "Sistemdeki tüm odaları listeler.")
    public ResponseEntity<ApiResponse<List<RoomResponse>>> getAllRooms() {
        List<RoomResponse> responses = roomService.getAllRooms();
        return ResponseEntity.ok(ApiResponse.success(responses));
    }

    @GetMapping("/{id}")
    @Operation(summary = "Oda Detayı Getir", description = "ID'si verilen odanın detaylarını getirir.")
    public ResponseEntity<ApiResponse<RoomResponse>> getRoomById(@PathVariable Long id) {
        RoomResponse response = roomService.getRoomById(id);
        return ResponseEntity.ok(ApiResponse.success(response));
    }

    @PutMapping("/{id}")
    @Operation(summary = "Oda Güncelle", description = "ID'si verilen odanın bilgilerini günceller.")
    public ResponseEntity<ApiResponse<RoomResponse>> updateRoom(
            @PathVariable Long id,
            @Valid @RequestBody RoomCreateRequest request) {

        RoomResponse response = roomService.updateRoom(id, request);
        return ResponseEntity.ok(ApiResponse.success(response));
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Oda Sil", description = "ID'si verilen odayı sistemden siler (Soft Delete).")
    public ResponseEntity<ApiResponse<Void>> deleteRoom(@PathVariable Long id) {
        roomService.deleteRoom(id);
        return ResponseEntity.ok(ApiResponse.success(null));
    }
}
