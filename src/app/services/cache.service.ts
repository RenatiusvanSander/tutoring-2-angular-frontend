import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  private cache = new Map<string, HttpResponse<any>>();

  constructor() {}

  setCache(key: string, response: HttpResponse<any>) {
    this.cache.set(key, response);
  }

  getCache(key: string): HttpResponse<any> | null {
    const response = this.cache.get(key);
    if (response) {
      return response as HttpResponse<any>;
    }

    return null;
  }

}