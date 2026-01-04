import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceContractPrice } from '../../models/service-contract-price';
import { firstValueFrom, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceContractPriceDataService {

  private static apiUrl: String = 'http://localhost:8082/tutoring3/api/servicecontractprices';

  constructor(private http: HttpClient) {}

  persistServiceContractPrice(scp: ServiceContractPrice): Observable<ServiceContractPrice> {
    return this.http.post<ServiceContractPrice>(ServiceContractPriceDataService.apiUrl + '/save-service-contract-price', scp);
  }

  async getServiceContractPricesByUserId(userId: number): Promise<Array<ServiceContractPrice>> {
    let serviceContractPrices = await this.http.get<Array<ServiceContractPrice>>(ServiceContractPriceDataService.apiUrl + '/get-service-contract-by-user-id/' + userId).toPromise();
    
    return this.mappingArray(serviceContractPrices || new Array<ServiceContractPrice>());
  }

  getServciceContractPricesToBeconfirmed(): Observable<Array<ServiceContractPrice>> {
    return this.http.get<Array<ServiceContractPrice>>(ServiceContractPriceDataService.apiUrl + '/get-not-confirmed-service-contract-prices').pipe(
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
    return this.http.put<ServiceContractPrice>(ServiceContractPriceDataService.apiUrl + '/update-service-contract-price', scp);
  }

  async getServiceContractPriceByUserIdAndServiceContractId(userId: number | undefined, serviceContractId: number | undefined): Promise<ServiceContractPrice> {
    return await firstValueFrom(this.http.get<ServiceContractPrice>(ServiceContractPriceDataService.apiUrl + '/get-service-contract-price-by-userid-and-service-contract-id' + '?&userId=' + userId + '&serviceContractId=' + serviceContractId));
  }
}
