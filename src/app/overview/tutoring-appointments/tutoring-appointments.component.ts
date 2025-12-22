import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { User } from '../../models/user';
import { ServiceContract } from '../../models/service-contract';
import { TutoringAppointment } from '../../models/tutoring-appointment';
import { ServiceContractDataService } from '../../services/data-services/service-contract-data.service';
import { TutoringAppointmentDataService } from '../../services/data-services/tutoring-appointment-data.service';
import { ServiceContractPriceDataService } from '../../services/data-services/service-contract-price-data.service';
import { ServiceContractPrice } from '../../models/service-contract-price';

@Component({
  selector: 'app-tutoring-appointments',
  standalone: false,
  
  templateUrl: './tutoring-appointments.component.html',
  styleUrl: './tutoring-appointments.component.css'
})
export class TutoringAppointmentsComponent implements OnInit{

  user!: User;
  serviceContractPrices!: Array<ServiceContractPrice>;
  serviceContracts!: Array<ServiceContract>;
  appointments!: Array<TutoringAppointment>;

  constructor(private dataService: DataService, private serviceContractService: ServiceContractDataService, private serviceContractPriceService: ServiceContractPriceDataService, private appointmentService: TutoringAppointmentDataService) {
    this.user = new User();
    this.serviceContractPrices = new Array<ServiceContractPrice>();
    this.serviceContracts = new Array<ServiceContract>();
    this.appointments = new Array<TutoringAppointment>();
  }

  async ngOnInit(): Promise<void> {
    try {
      this.user = await this.dataService.getUser();

    } catch(error) {
      console.error('Failed to load user for add-tutoring-appointment: ', error);
    }
    
    try {
      this.serviceContractPrices = await this.serviceContractPriceService.getServiceContractPricesByUserId(this.user.userId);
    } catch(error) {
      console.error('Failed to load ServiceContractPrices: ', error);
    }

    if(this.serviceContractPrices.length > 0) {
      const serviceContractIds: Array<number> = this.serviceContractPrices.map(scp => scp.serviceContractId);

      try {
        this.serviceContracts = await this.serviceContractService.getServiceContractsByIds(serviceContractIds);
      } catch(error) {
        console.error('Failed to load ServiceContracts: ', error);
      }
    }

    if(this.serviceContracts.length > 0) {
      try {
        this.appointments = await this.appointmentService.getTutoringAppointmentsByUserId(this.user.userId);
      } catch(error) {
        console.error('Failed to load TutoringAppointments: ', error);
      }
    }
  }

}
