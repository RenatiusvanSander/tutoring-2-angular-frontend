import {
    IncludeBearerTokenCondition,
    provideKeycloak,
    createInterceptorCondition,
    INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,
    AutoRefreshTokenService,
    UserActivityService,
    withAutoRefreshToken
} from 'keycloak-angular';

const bearerTokenInterceptorCondition = createInterceptorCondition<IncludeBearerTokenCondition>({
    urlPattern: /^(http:\/\/localhost:8082)(\/tutoring3\/api\/.*)?$/i // Match URLs starting with http://localhost:8082/tutoring3/api/
});

export const provideKeycloakApp = () =>
    provideKeycloak({
        config: {
            realm: 'ConnectTrial',
            url: 'https://keycloak.local:8443',
            clientId: 'tutoring-angular-frontend'
        },
        initOptions: {
            onLoad: 'check-sso',
            // silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
            // redirectUri: window.location.origin + '/'
        },
        features: [
            withAutoRefreshToken({
                onInactivityTimeout: 'logout',
                sessionTimeout: 60000
            })
        ],
        providers: [
            {
                provide: INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,
                useValue: [bearerTokenInterceptorCondition] // Specify conditions for adding the Bearer token
            },
            AutoRefreshTokenService,
            UserActivityService
        ]
    });