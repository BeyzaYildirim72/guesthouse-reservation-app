package tr.gov.ogm.reservation;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing(auditorAwareRef = "auditorAware")
public class RezervasyonApplication {
    public static void main(String[] args) {
        SpringApplication.run(RezervasyonApplication.class, args);
    }
}
