import { Component, inject, OnInit } from '@angular/core';
import { TutoringAppointmentDataService } from '../../../services/data-services/tutoring-appointment-data.service';
import { DataService } from '../../../services/data.service';
import { ServiceContractPriceDataService } from '../../../services/data-services/service-contract-price-data.service';
import { User } from '../../../models/user';
import { TutoringAppointment } from '../../../models/tutoring-appointment';
import { ActivatedRoute, ActivatedRouteSnapshot, Navigation, Router } from '@angular/router';

@Component({
  selector: 'app-update-tutoring-appointments',
  standalone: false,
  
  templateUrl: './update-tutoring-appointments.component.html',
  styleUrl: './update-tutoring-appointments.component.css'
})
export class UpdateTutoringAppointmentsComponent implements OnInit {

  user!: User;
  appointments!: Array<TutoringAppointment>;
  appointment!: TutoringAppointment;
  updateAppointment!: TutoringAppointment;
  updatedAppointments!: Array<TutoringAppointment>;
  dataLoaded: boolean = false;

  constructor(private appointmentService: TutoringAppointmentDataService, private userService: DataService, private serviceContractPriceService: ServiceContractPriceDataService, private router: Router) {
    this.appointments = new Array<TutoringAppointment>();
    let currentNavigation: Navigation | null = this.router.getCurrentNavigation();
    this.appointment = currentNavigation?.extras.state ? currentNavigation.extras.state['updateAppointment'] : new TutoringAppointment();
    this.updatedAppointments = new Array<TutoringAppointment>();
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
      try {
        this.updateAppointment = await this.appointmentService.updateSingleTutoringAppointment(this.appointment);
        this.updatedAppointments = await this.appointmentService.updateMultipleTutoringAppointments(this.appointments);
        this.dataLoaded = this.updateAppointment !== undefined && this.updateAppointment !== null;
      } catch(error) {
        //
      }
    }
  }

}
