import { Component, inject, OnInit } from '@angular/core';
import Keycloak, { KeycloakProfile } from 'keycloak-js';
import { KeycloakLoginAndLogout } from '../KeyCloakLoginAndLogout';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: false
})
export class LoginComponent {

  keycloakLoginAndLogout: KeycloakLoginAndLogout;

  constructor() {
    this.keycloakLoginAndLogout = new KeycloakLoginAndLogout();
  }

}
