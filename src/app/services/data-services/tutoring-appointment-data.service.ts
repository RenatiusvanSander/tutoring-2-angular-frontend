import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, lastValueFrom, Observable } from 'rxjs';
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

  async getTutoringAppointmentsByUserId(userId: number): Promise<Array<TutoringAppointment>> {
    return lastValueFrom(this.http.get<Array<TutoringAppointment>>(TutoringAppointmentDataService.apiUrl + '/get/by-user-id/' + userId ));
  }

  async updateSingleTutoringAppointment(appointment: TutoringAppointment): Promise<TutoringAppointment> {
    return lastValueFrom(this.http.put<TutoringAppointment>(TutoringAppointmentDataService.apiUrl + '/update/single-appointment', appointment));
  }
}
