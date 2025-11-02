import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceContractPrice } from '../../models/service-contract-price';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceContractPriceDataService {

  private static apiUrl: String = 'http://localhost:8082/tutoring3/api';

  constructor(private http: HttpClient) {}

  persistServiceContractPrice(scp: ServiceContractPrice): Observable<ServiceContractPrice> {
    return this.http.post<ServiceContractPrice>(ServiceContractPriceDataService.apiUrl + '', scp);
  }

  getServiceContractPricesByUserId(userId: number): Observable<Array<ServiceContractPrice>> {
    return this.http.get<Array<ServiceContractPrice>>(ServiceContractPriceDataService.apiUrl + '/' + userId)
      .pipe(
        map( data => this.mappingArray(data))
    );
  }

  getSevciceContractPricesToBeconfirmed(): Observable<Array<ServiceContractPrice>> {
    return this.http.get<Array<ServiceContractPrice>>(ServiceContractPriceDataService.apiUrl + '').pipe(
        map( data => this.mappingArray(data)));
  }

  mappingArray(serviceContractPricesData: Array<ServiceContractPrice>): Array<ServiceContractPrice> {
    const serviceContractPrices = new Array<ServiceContractPrice>();
    for(const serviceContractPrice of serviceContractPricesData) {
      serviceContractPrices.push(ServiceContractPrice.fromHttp(serviceContractPrice));
    };
    
    return serviceContractPrices;
  }

  updateServiceContractPrice(scp: ServiceContractPrice): Observable<ServiceContractPrice> {
    return this.http.put<ServiceContractPrice>(ServiceContractPriceDataService.apiUrl + '', scp);
  }
}
