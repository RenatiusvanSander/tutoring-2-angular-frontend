import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Price } from '../../models/price';

@Injectable({
  providedIn: 'root'
})
export class PriceDataService {

  private static apiUrl: String = 'http://localhost:8082/tutoring3/api/prices';

  constructor(private http: HttpClient) { }

  persistPrice(price: Price): Observable<Price> {
    return this.http.post<Price>(PriceDataService.apiUrl + '/save-price', price);
  }

  getPriceById(id: number): Observable<Price> {
    return this.http.get<Price>(PriceDataService.apiUrl + '/get-price/' + id)
  }

  updatePrice(price: Price): Observable<Price> {
    return this.http.put<Price>(PriceDataService.apiUrl + '/update-price', price);
  }
}
