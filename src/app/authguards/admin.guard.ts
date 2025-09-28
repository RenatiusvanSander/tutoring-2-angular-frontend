import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import Keycloak from 'keycloak-js';

export const adminGuard: CanActivateFn = (route, state) => {
  const keycloak: Keycloak = inject(Keycloak);
  const requiredRoles: string = route.data['roles'];

  let hasRole = keycloak.hasResourceRole(requiredRoles,'tutoring2-resource-server');

  return hasRole;
};
