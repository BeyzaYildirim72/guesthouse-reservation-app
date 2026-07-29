package tr.gov.ogm.rezervasyon.common.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.security.SecurityScheme;

/**
 * Swagger UI'da sağ üstteki "Authorize" butonunu aktif eder.
 * Login sonrası aldığın JWT'yi buraya "Bearer <token>" formatında
 * yapıştırınca, sonraki tüm istekler Authorization header'ıyla gider.
 */
@OpenAPIDefinition(
        info = @Info(
                title = "Rezervasyon API",
                version = "1.0",
                description = "OGM Rezervasyon servisleri için REST API dokümantasyonu"
        ),
        security = @SecurityRequirement(name = "bearerAuth")
)
@SecurityScheme(
        name = "bearerAuth",
        type = SecuritySchemeType.HTTP,
        scheme = "bearer",
        bearerFormat = "JWT"
)
public class OpenApiConfig {
}