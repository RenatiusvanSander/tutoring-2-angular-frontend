import { Injectable } from '@angular/core';

const KEYCLOAK_PROFILE_DATA_KEY = 'keycloak-profile-data';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  clean(): void {
    this.clear();
  }

  private clear() {
    window.sessionStorage.clear();
  }

  public saveKeycloakProfileData(keycloakProfile: any): void {
    window.sessionStorage.removeItem(KEYCLOAK_PROFILE_DATA_KEY);
    window.sessionStorage.setItem(KEYCLOAK_PROFILE_DATA_KEY, JSON.stringify(keycloakProfile));
  }

  public getKeycloakProfileData(): any {
    const keycloakProfile = window.sessionStorage.getItem(KEYCLOAK_PROFILE_DATA_KEY);
    if (keycloakProfile) {
      return JSON.parse(keycloakProfile);
    }

    return {};
  }

  public isLoggedIn(): boolean {
    const keycloakProfile = window.sessionStorage.getItem(KEYCLOAK_PROFILE_DATA_KEY);
    if (keycloakProfile) {
      return true;
    }

    return false;
  }
}
