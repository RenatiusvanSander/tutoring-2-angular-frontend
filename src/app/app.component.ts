import { Component } from '@angular/core';
import { KeycloakLoginAndLogout } from './KeyCloakLoginAndLogout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false
})
export class AppComponent {
  title = 'tutoring-2-angular-frontend';
  keycloakLoginAndLogout: KeycloakLoginAndLogout = new KeycloakLoginAndLogout();
}
