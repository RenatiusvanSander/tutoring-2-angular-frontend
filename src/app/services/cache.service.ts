import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  private cache = new Map<string, any>();

  constructor() {}

  setCache(key: string, data: any) {
    // this.cache = new Map(JSON.parse(localStorage['tutoring3']));
    this.cache.set(key, data);
    // localStorage['tutoring3'] = JSON.stringify(Array.from(this.cache.entries()));
  }

  getCache(key: string): any {
    // this.cache = new Map(JSON.parse(localStorage['tutoring3']));
    const data = this.cache.get(key);
    if (data) {
      return data;
    }

    return null;
  }

  deleteCache(key: string) {
    // this.cache = new Map(JSON.parse(localStorage['tutoring3']));
    this.cache.delete(key);
    // localStorage['tutoring3'] = JSON.stringify(Array.from(this.cache.entries()));
  }
}