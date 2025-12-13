import { Component, OnInit } from '@angular/core';
import { TutoringAppointmentDataService } from '../../../services/data-services/tutoring-appointment-data.service';
import { TutoringAppointment } from '../../../models/tutoring-appointment';
import { DataService } from '../../../services/data.service';
import { User } from '../../../models/user';
import { ServiceContractPriceDataService } from '../../../services/data-services/service-contract-price-data.service';
import { ServiceContractDataService } from '../../../services/data-services/service-contract-data.service';
import { ServiceContract } from '../../../models/service-contract';
import { map } from 'rxjs';

@Component({
  selector: 'app-add-tutoring-appointment',
  standalone: false,
  
  templateUrl: './add-tutoring-appointment.component.html',
  styleUrl: './add-tutoring-appointment.component.css'
})
export class AddTutoringAppointmentComponent implements OnInit{
  persistedApppointment!: TutoringAppointment
  user!: User;
  serviceContracts!: Array<ServiceContract>;

  constructor(private appointmentService: TutoringAppointmentDataService, private dataService: DataService, private serviceContractPriceService: ServiceContractPriceDataService, private serviceContractService: ServiceContractDataService) {
    this.serviceContracts = new Array<ServiceContract>();
    this.user = new User();
  }

  ngOnInit(): void {
    this.dataService.getUser()
      .subscribe(
        (next: User) => {
          this.user = next;
          this.loadServiceContracts();
          if(this.serviceContracts.length > 0) {
            this.createAndSaveTutoringAppointment();
          }
        }
      );
  }

  loadServiceContracts() {
    this.serviceContractPriceService.getServiceContractPricesByUserId(this.user.userId).subscribe({
      next: (receivedServiceContractPrices) => {
        let serviceContractIds: Array<number> = new Array<number>();
        receivedServiceContractPrices.map(scp => serviceContractIds.push(scp.serviceContractId));
        this.serviceContractService.getServiceContractsByIds(serviceContractIds).subscribe({
          next: (loadedServiceContracts) => {
            this.serviceContracts = loadedServiceContracts;
          }
        })
      },
      complete: () => {
            console.info('Loaded users service price contracts');
      },
      error: (e) => console.error(e)
    })
  }

  createAndSaveTutoringAppointment() {
    const appointment = new TutoringAppointment();
    appointment.id = 0
    appointment.isAccomplished = false
    appointment.tutoringAppointmentDate = new Date(2024, 12, 6).toISOString();
    appointment.tutoringAppointmentStartDateTime = new Date(2024, 12, 6, 13, 0, 0).toISOString();
    appointment.tutoringAppointmentEndDateTime = new Date(2024, 12, 6, 14, 0, 0).toISOString();

    this.appointmentService.persistTutoringAppointment(appointment).subscribe({
      next:  (savedTutoringAppointment: TutoringAppointment) => {
        this.persistedApppointment = savedTutoringAppointment;
      },
      complete: () => {
        console.info('Tutoring Appointment is persisted');
      },
      error: (e) => console.error(e)
    });
  }
 
}
