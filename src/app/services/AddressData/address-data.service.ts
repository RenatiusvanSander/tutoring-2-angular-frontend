import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Address } from '../../models/address';

@Injectable({
  providedIn: 'root'
})
export class AddressDataService {

  static apiUrl: String = 'http://localhost:8082/tutoring3/api';

  constructor(private http: HttpClient) { }

  fetchAddressesByUserId(userId : number) : Observable<Array<Address>> {
    return this.http.get<Array<Address>>(AddressDataService.apiUrl + '/addresses/get-addresses/by-user-id/' + userId)
    .pipe(
      map( data => {
        const addresses = new Array<Address>();
        for(const address of data) {
          addresses.push(Address.fromHttp(address));
        }

        return addresses;
      })
    );
  }

  persistAddress(address: Address): Observable<Address> {
    return this.http.post<Address>(AddressDataService.apiUrl + '/addresses/save-address', address);
  }

  updateAddress(address: Address) : Observable<any> {
    return this.http.put<Address>(AddressDataService.apiUrl + '/addresses/update-an-address', address);
  }

  getAddressById(addressId: number): Observable<Address> {
    return this.http.get<Address>(AddressDataService.apiUrl + '/addresses/get-address/' + addressId);
  }

  deleteAddress(addressId: number): Observable<any> {
    return this.http.delete(AddressDataService.apiUrl + '/addresses/delete-address-by-id/' + addressId);
  }

}
