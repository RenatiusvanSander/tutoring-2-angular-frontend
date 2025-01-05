import { inject } from "@angular/core";
import Keycloak from 'keycloak-js';

export class KeycloakLoginAndLogout {
    
    private readonly keycloak : Keycloak;

    constructor() {
        this.keycloak = inject(Keycloak);
    }

    public login() {
        this.keycloak.login({redirectUri: 'http://localhost:4200/overview'});
    }
    
    public logout() {
        this.keycloak.logout();
    }

    public isLoggedIn(): boolean {
        return this.keycloak.authenticated ?? false;
    }
}