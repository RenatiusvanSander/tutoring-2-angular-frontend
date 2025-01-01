import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KeycloakService } from './services/keycloak/keycloak.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private keycloakService: KeycloakService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const jwtToken: string | undefined = this.keycloakService.keycloak.token;

    if(jwtToken) {
      const authReq: HttpRequest<any> = req.clone({
        headers: new HttpHeaders({
          Authorization: 'Bearer ${jwtToken}'
        })
      });

      return next.handle(authReq);
    }

    return next.handle(req);
  }

}

/*
export const httpTokenInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
*/
