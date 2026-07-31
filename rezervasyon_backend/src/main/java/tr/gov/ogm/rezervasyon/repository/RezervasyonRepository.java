package tr.gov.ogm.rezervasyon.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tr.gov.ogm.rezervasyon.entity.Rezervasyon;

public interface RezervasyonRepository extends JpaRepository<Rezervasyon, Long> {
    boolean existsByRezervasyonNo(String rezervasyonNo);
}