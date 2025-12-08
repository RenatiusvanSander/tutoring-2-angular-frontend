import { Component, OnInit } from '@angular/core';
import { TutoringAppointmentDataService } from '../../../services/data-services/tutoring-appointment-data.service';
import { TutoringAppointment } from '../../../models/tutoring-appointment';

@Component({
  selector: 'app-add-tutoring-appointment',
  standalone: false,
  
  templateUrl: './add-tutoring-appointment.component.html',
  styleUrl: './add-tutoring-appointment.component.css'
})
export class AddTutoringAppointmentComponent implements OnInit{

  constructor(private appointmentService: TutoringAppointmentDataService) {}

  ngOnInit(): void {
    const appointment = new TutoringAppointment();
    appointment.id = 0
    appointment.isAccomplished = false
    appointment.tutoringAppointmentDate = new Date(2024, 12, 6).toISOString();
    appointment.tutoringAppointmentStartDateTime = new Date(2024, 12, 6, 13, 0, 0).toISOString();
    appointment.tutoringAppointmentEndDateTime = new Date(2024, 12, 6, 14, 0, 0).toISOString();

    this.appointmentService.persistTutoringAppointment(appointment).subscribe({
          next:  () => {
            console.info('Tutoring Appointment is persisted');
          },
          complete: () => {
            console.info('Tutoring Appointment is persisted');
          },
          error: (e) => console.error(e)
        });
  }
 

}
