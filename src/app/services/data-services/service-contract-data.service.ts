import { Injectable } from '@angular/core';
import { ServiceContract } from '../../models/service-contract';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceContractDataService {

  static apiUrl: String = 'http://localhost:8082/tutoring3/api/servicecontracts';

  constructor(private http: HttpClient) { }

  persistsServiceContract(serviceContract: ServiceContract): Observable<ServiceContract> {
      return this.http.post<ServiceContract>(ServiceContractDataService.apiUrl + '/save-service-conract', serviceContract);
  }

  getServiceContractById() {}

  getServiceContracts() {}

}
