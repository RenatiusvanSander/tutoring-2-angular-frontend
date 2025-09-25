import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { User } from '../models/user';
import { DataService } from '../services/data.service';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// ResolverFn
export const userResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  let id: number = Number(route.paramMap.get('id'));

  return inject(DataService).getByUserId(id!);
};

// I want to be typesafe
@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {

  constructor(private service: DataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User> {
    let id = Number(route.paramMap.get('id'));

    return this.service.getByUserId(id);
  }
}
