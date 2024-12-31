import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthorized: boolean;

  constructor(private localStorage: LocalStorageService) {
    this.isAuthorized = localStorage.isLoggedIn();
  }

  get isAuthenticated() {
    return this.isAuthorized;
  }

  login(): any {
    // call keycloak login
    return '';
  }

  logout(): any {
    return '';
  }
}
