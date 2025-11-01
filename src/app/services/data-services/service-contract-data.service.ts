import { Injectable } from '@angular/core';
import { ServiceContract } from '../../models/service-contract';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceContractDataService {

  private static apiUrl: String = 'http://localhost:8082/tutoring3/api/servicecontracts';

  constructor(private http: HttpClient) { }

  persistsServiceContract(serviceContract: ServiceContract): Observable<ServiceContract> {
      return this.http.post<ServiceContract>(ServiceContractDataService.apiUrl + '/save-service-conract', serviceContract);
  }

  getServiceContractById(id: number): Observable<ServiceContract> {
    return this.http.get<ServiceContract>(ServiceContractDataService.apiUrl + '/get-service-contract-by-id/' + id)
  }

  getServiceContracts(): Observable<Array<ServiceContract>> {
    return this.http.get<Array<ServiceContract>>(ServiceContractDataService.apiUrl + '/get-service-conracts')
        .pipe(
          map( data => {
            const serviceContracts = new Array<ServiceContract>();
            for(const serviceContract of data) {
              serviceContracts.push(ServiceContract.fromHttp(serviceContract));
            }
    
            return serviceContracts;
          })
        );
  }

}
