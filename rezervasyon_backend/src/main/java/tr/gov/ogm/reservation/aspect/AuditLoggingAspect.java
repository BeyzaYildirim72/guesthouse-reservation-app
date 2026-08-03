package tr.gov.ogm.reservation.aspect;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Aspect
@Component
@Slf4j
public class AuditLoggingAspect {

    @Before("execution(* tr.gov.ogm.reservation.service.impl.*.*(..))")
    public void logBeforeMethod(JoinPoint joinPoint) {
        log.info("[AUDIT-LOG] Başlıyor: {} metodu çağrıldı.", joinPoint.getSignature().toShortString());
    }

    @AfterReturning(pointcut = "execution(* tr.gov.ogm.reservation.service.impl.*.*(..))", returning = "result")
    public void logAfterMethod(JoinPoint joinPoint, Object result) {
        log.info("[AUDIT-LOG] Başarılı: {} metodu tamamlandı.", joinPoint.getSignature().toShortString());
    }
}