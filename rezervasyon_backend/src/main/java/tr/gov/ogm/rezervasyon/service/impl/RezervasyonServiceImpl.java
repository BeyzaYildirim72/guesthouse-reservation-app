package tr.gov.ogm.rezervasyon.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tr.gov.ogm.rezervasyon.common.exception.BusinessException;
import tr.gov.ogm.rezervasyon.common.exception.ErrorCode;
import tr.gov.ogm.rezervasyon.dto.request.RezervasyonRequest;
import tr.gov.ogm.rezervasyon.dto.response.RezervasyonResponse;
import tr.gov.ogm.rezervasyon.entity.Rezervasyon;
import tr.gov.ogm.rezervasyon.entity.RezervasyonDurum;
import tr.gov.ogm.rezervasyon.repository.RezervasyonRepository;
import tr.gov.ogm.rezervasyon.service.RezervasyonService;

import java.time.Year;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RezervasyonServiceImpl implements RezervasyonService {

    private final RezervasyonRepository rezervasyonRepository;

    @Override
    public List<RezervasyonResponse> listele() {
        return rezervasyonRepository.findAll().stream()
                .map(this::toResponse)
                .toList();
    }

    @Override
    public RezervasyonResponse getir(Long id) {
        return toResponse(bul(id));
    }

    @Override
    public RezervasyonResponse olustur(RezervasyonRequest request) {
        dogrula(request);

        Rezervasyon rezervasyon = Rezervasyon.builder()
                .rezervasyonNo(yeniRezervasyonNo())
                .misafirAdi(request.getMisafirAdi())
                .odaNo(request.getOdaNo())
                .girisTarihi(request.getGiris())
                .cikisTarihi(request.getCikis())
                .durum(RezervasyonDurum.etiketten(request.getDurum()))
                .build();

        return toResponse(rezervasyonRepository.save(rezervasyon));
    }

    @Override
    public RezervasyonResponse guncelle(Long id, RezervasyonRequest request) {
        dogrula(request);
        Rezervasyon rezervasyon = bul(id);

        rezervasyon.setMisafirAdi(request.getMisafirAdi());
        rezervasyon.setOdaNo(request.getOdaNo());
        rezervasyon.setGirisTarihi(request.getGiris());
        rezervasyon.setCikisTarihi(request.getCikis());
        rezervasyon.setDurum(RezervasyonDurum.etiketten(request.getDurum()));

        return toResponse(rezervasyonRepository.save(rezervasyon));
    }

    @Override
    public void sil(Long id) {
        rezervasyonRepository.delete(bul(id));
    }

    // ---- yardımcılar ----

    private Rezervasyon bul(Long id) {
        return rezervasyonRepository.findById(id)
                .orElseThrow(() -> new BusinessException(ErrorCode.RESERVATION_NOT_FOUND));
    }

    private void dogrula(RezervasyonRequest request) {
        if (!request.getCikis().isAfter(request.getGiris())) {
            throw new BusinessException(ErrorCode.VALIDATION_ERROR, "Çıkış tarihi girişten sonra olmalı");
        }
    }

    private String yeniRezervasyonNo() {
        long sayac = rezervasyonRepository.count() + 1;
        return "REZ-" + Year.now().getValue() + "-" + String.format("%03d", sayac);
    }

    private RezervasyonResponse toResponse(Rezervasyon r) {
        long gece = ChronoUnit.DAYS.between(r.getGirisTarihi(), r.getCikisTarihi());
        return RezervasyonResponse.builder()
                .id(r.getId())
                .rezNo(r.getRezervasyonNo())
                .misafirAdi(r.getMisafirAdi())
                .odaNo(r.getOdaNo())
                .giris(r.getGirisTarihi())
                .cikis(r.getCikisTarihi())
                .gece(gece)
                .durum(r.getDurum().getEtiket())
                .build();
    }
}