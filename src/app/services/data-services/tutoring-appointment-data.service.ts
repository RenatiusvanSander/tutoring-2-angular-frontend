import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutoringAppointmentDataService {

  private static apiUrl: String = 'http://localhost:8082/tutoring3/api/tutoring-appointments';

  constructor(private http: HttpClient) { }

  persistTutoringAppointment(): Observable<any> {
    return this.http.post<any>(TutoringAppointmentDataService.apiUrl + '/save', "");
  }
}
