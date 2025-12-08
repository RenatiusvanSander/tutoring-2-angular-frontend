import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TutoringAppointment } from '../../models/tutoring-appointment';

@Injectable({
  providedIn: 'root'
})
export class TutoringAppointmentDataService {

  private static apiUrl: String = 'http://localhost:8082/tutoring3/api/tutoring-appointments';

  constructor(private http: HttpClient) { }

  persistTutoringAppointment(appointment: TutoringAppointment): Observable<TutoringAppointment> {
    return this.http.post<TutoringAppointment>(TutoringAppointmentDataService.apiUrl + '/save', appointment);
  }
}
