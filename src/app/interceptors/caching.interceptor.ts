import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";
import { CacheService } from "../services/cache.service";
import { canCacheRequest } from "app/utils/cache.requests.utils";

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
  constructor(private cacheService: CacheService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {

    const cacheKey = this.createCacheKey(req.urlWithParams, req.body);
    const cachedResponse = this.cacheService.getCache(cacheKey);
    if (cachedResponse) {
      return of(cachedResponse);// Return cached response if available
    }

    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          if (canCacheRequest(req)) this.cacheService.setCache(cacheKey, {data : event , maxAge: 90000});
        }
      })
    );
  }
  private createCacheKey(url: string, body: any): string {
    const bodyHash = this.simpleHash(JSON.stringify(body)).toString(); // with hash we can do it with only small key

    return `${url}_${bodyHash}`;
  }

  /** Generates a Hash to be appended with key */
  private simpleHash(str: string): string {
    let hash = 0;
    if (str.length === 0) return hash.toString();
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash.toString();
  }
}