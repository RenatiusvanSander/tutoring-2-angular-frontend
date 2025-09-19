import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../models/address';
import { AddressDataService } from '../services/AddressData/address-data.service';

// I want to be typesafe
@Injectable({
  providedIn: 'root'
})
export class AddressResolver implements Resolve<Address> {

  constructor(private service: AddressDataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Address> {
    let id = Number(route.paramMap.get('id'));

    return this.service.getAddressById(id);
  }
}