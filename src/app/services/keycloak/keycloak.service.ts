import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';
import { UserProfile } from '../../models/user-profile';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {
  private privateKeycloak: Keycloak | undefined;
  private userProfile: UserProfile | undefined;

  constructor() { }

  get keycloak() {
    if(this.privateKeycloak == undefined) {
      console.log("Initializes Keycloak");
      this.privateKeycloak = new Keycloak({
        url: 'https://192.168.120.59:8443',
        realm: 'ConnectTrial',
        clientId: 'tutoring-angular-frontend'
      });
    }

    return this.privateKeycloak;
  }

  get profile(): UserProfile | undefined {
    return this.userProfile;
  }

  async init() {
    console.log('Authenticate the user ...');
    const authenticated = await this.keycloak?.init({
      onLoad: 'login-required'
    });

    if (authenticated) {
      console.log('User authenticated...');
      this.userProfile = (await this.keycloak?.loadUserProfile()) as UserProfile;
      this.userProfile.token = this.keycloak?.token;
      console.log('token is: ' + this.userProfile.token);
    }
  }

  login() {
    return this.keycloak?.login({redirectUri: 'http://localhost:4200/overview'});
  }

  logout()  {
    return this.keycloak?.logout({redirectUri: 'http://localhost:4200'});
  }

  public isAuthenticated(): boolean {
    return this.keycloak?.authenticated ?? false;
  }

}
