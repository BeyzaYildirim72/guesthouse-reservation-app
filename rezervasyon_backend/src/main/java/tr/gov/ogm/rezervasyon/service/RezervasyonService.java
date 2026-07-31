package tr.gov.ogm.rezervasyon.service;

import tr.gov.ogm.rezervasyon.dto.request.RezervasyonRequest;
import tr.gov.ogm.rezervasyon.dto.response.RezervasyonResponse;

import java.util.List;

public interface RezervasyonService {
    List<RezervasyonResponse> listele();
    RezervasyonResponse getir(Long id);
    RezervasyonResponse olustur(RezervasyonRequest request);
    RezervasyonResponse guncelle(Long id, RezervasyonRequest request);
    void sil(Long id);
}