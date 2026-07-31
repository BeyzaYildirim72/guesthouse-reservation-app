package tr.gov.ogm.rezervasyon.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tr.gov.ogm.rezervasyon.common.response.ApiResponse;
import tr.gov.ogm.rezervasyon.dto.request.RezervasyonRequest;
import tr.gov.ogm.rezervasyon.dto.response.RezervasyonResponse;
import tr.gov.ogm.rezervasyon.service.RezervasyonService;

import java.util.List;

@RestController
@RequestMapping("/api/rezervasyonlar")
@RequiredArgsConstructor
public class RezervasyonController {

    private final RezervasyonService rezervasyonService;

    @GetMapping
    public ApiResponse<List<RezervasyonResponse>> listele() {
        return ApiResponse.success(rezervasyonService.listele());
    }

    @GetMapping("/{id}")
    public ApiResponse<RezervasyonResponse> getir(@PathVariable Long id) {
        return ApiResponse.success(rezervasyonService.getir(id));
    }

    @PostMapping
    public ApiResponse<RezervasyonResponse> olustur(@Valid @RequestBody RezervasyonRequest request) {
        return ApiResponse.success("Rezervasyon oluşturuldu", rezervasyonService.olustur(request));
    }

    @PutMapping("/{id}")
    public ApiResponse<RezervasyonResponse> guncelle(@PathVariable Long id,
                                                     @Valid @RequestBody RezervasyonRequest request) {
        return ApiResponse.success("Rezervasyon güncellendi", rezervasyonService.guncelle(id, request));
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> sil(@PathVariable Long id) {
        rezervasyonService.sil(id);
        return ApiResponse.success("Rezervasyon silindi", null);
    }
}