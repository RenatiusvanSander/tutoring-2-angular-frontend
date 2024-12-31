import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { KeycloakService } from './services/keycloak/keycloak.service';

export const authGuard: CanActivateFn = ():boolean => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if(!authService.isAuthenticated) {
    console.log("Not authorized user");
    router.navigate(['welcome']);
    return false;
  }

  return true;
};
