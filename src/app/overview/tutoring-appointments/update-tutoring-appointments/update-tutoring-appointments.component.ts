import { Component, OnInit } from '@angular/core';
import { TutoringAppointmentDataService } from '../../../services/data-services/tutoring-appointment-data.service';
import { DataService } from '../../../services/data.service';
import { ServiceContractPriceDataService } from '../../../services/data-services/service-contract-price-data.service';
import { User } from '../../../models/user';
import { TutoringAppointment } from '../../../models/tutoring-appointment';

@Component({
  selector: 'app-update-tutoring-appointments',
  standalone: false,
  
  templateUrl: './update-tutoring-appointments.component.html',
  styleUrl: './update-tutoring-appointments.component.css'
})
export class UpdateTutoringAppointmentsComponent implements OnInit {
  user!: User;
  appointments!: Array<TutoringAppointment>;

  constructor(private appointmentService: TutoringAppointmentDataService, private userService: DataService, private serviceContractPriceService: ServiceContractPriceDataService) {
    this.appointments = new Array<TutoringAppointment>();
  }

  async ngOnInit(): Promise<void> {
    try {
      this.user = await this.userService.getUser();
    } catch(error) {
      //
    }

    try {
      this.appointments = await this.appointmentService.getTutoringAppointmentsByUserId(this.user.userId);
    } catch(error) {
      //
    }

    if( this.appointments.length > 0) {
      const appointment = this.appointments[0];

      try {
        const updateAppointment = await this.appointmentService.updateSingleTutoringAppointment(appointment);
      } catch(error) {
        //
      }
    }
  }

}
