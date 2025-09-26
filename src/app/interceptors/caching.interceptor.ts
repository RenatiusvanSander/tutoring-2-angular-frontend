import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpEvent } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";
import { CacheService } from "../services/cache.service";

@Injectable()
export class CachingInterceptor implements HttpInterceptor {

  private static apiUrl: string = 'http://localhost:8082/tutoring3/api';

  constructor(private cacheService: CacheService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!this.canCacheRequest(req)) {
      return next.handle(req);
    }

    const cachedResponse = this.cacheService.getCache(req.url);
    if (cachedResponse) {
      return of(cachedResponse as HttpResponse<any>);
    } else {
      return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse && this.canCacheRequest(req)) {
          this.cacheService.setCache(req.url, event);
        }
      }));
    }
  }

  private canCacheRequest(request: HttpRequest<any>): boolean {
    const isGet: boolean = request.method === 'GET';
    const containsApiUrl: boolean = request.url.includes(CachingInterceptor.apiUrl);

    return isGet && containsApiUrl;
  }
}