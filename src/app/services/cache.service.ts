import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  private cache = new Map<string, any>();

  constructor() {}

  setCache(key: string, data: any) {
    this.cache.set(key, data);
  }

  getCache(key: string): any {
    const data = this.cache.get(key);
    if (data) {
        return data;
    }

    return null;
  }
  deleteCache(key: string) {
    this.cache.delete(key);
  }
}