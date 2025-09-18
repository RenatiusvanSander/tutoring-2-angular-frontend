import { Component } from '@angular/core';
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
