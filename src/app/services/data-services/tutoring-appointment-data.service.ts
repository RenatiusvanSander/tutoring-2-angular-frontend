import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { TutoringAppointment } from '../../models/tutoring-appointment';

@Injectable({
  providedIn: 'root'
})
export class TutoringAppointmentDataService {

  private static apiUrl: String = 'http://localhost:8082/tutoring3/api/tutoring-appointments';

  constructor(private http: HttpClient) { }

  async persistTutoringAppointment(appointment: TutoringAppointment): Promise<TutoringAppointment> {
    return firstValueFrom(this.http.post<TutoringAppointment>(TutoringAppointmentDataService.apiUrl + '/save', appointment));
  }
}
