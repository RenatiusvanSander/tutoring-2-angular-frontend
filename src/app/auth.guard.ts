import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthGuardData, createAuthGuard } from 'keycloak-angular';
import Keycloak from 'keycloak-js';

const isAlreadyAuthenticated = async (
  route: ActivatedRouteSnapshot,
  __: RouterStateSnapshot,
  authData: AuthGuardData
): Promise<boolean | UrlTree> => {
  const keycloakServce = inject(Keycloak);
  if (keycloakServce.authenticated) {
    return true;
  }

  const router = inject(Router);
  return router.parseUrl('/forbidden');
}

export const canActivateByAuthenticated = createAuthGuard<CanActivateFn>(isAlreadyAuthenticated)