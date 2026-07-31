package tr.gov.ogm.rezervasyon.aspect;
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
    @Before("execution(* tr.gov.ogm.rezervasyon.controller.*.*(..))")
    public void logBeforeExecution(JoinPoint joinPoint) {
        String methodName = joinPoint.getSignature().getName();
        String className = joinPoint.getTarget().getClass().getSimpleName();
        log.info("ACTION STARTED: {} method in {} is called.", methodName, className);
    }

    @AfterReturning(pointcut = "execution(* tr.gov.ogm.rezervasyon.controller.*.*(..))", returning = "result")
    public void logAfterExecution(JoinPoint joinPoint, Object result) {
        String methodName = joinPoint.getSignature().getName();
        log.info("ACTION COMPLETED: {} method executed successfully.", methodName);
    }
}
