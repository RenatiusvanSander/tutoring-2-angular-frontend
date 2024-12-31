import { Injectable } from '@angular/core';
import { KeycloakService } from './keycloak/keycloak.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private keycloakService: KeycloakService) {  }

  get isAuthenticated() {
    return this.keycloakService.isAuthenticated() ?? false;
  }

  login(): any {
    this.keycloakService.login();
  }

  logout(): any {
    const keycloakLogoutPromise: Promise<void> | undefined = this.keycloakService.logout();
    if(keycloakLogoutPromise == undefined) {
      console.log("keycloakPromise undefined");
      return;
    }
  }
}
