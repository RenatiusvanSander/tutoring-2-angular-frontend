import { Component, OnInit } from '@angular/core';
import { TutoringAppointmentDataService } from '../../../services/data-services/tutoring-appointment-data.service';
import { TutoringAppointment } from '../../../models/tutoring-appointment';
import { DataService } from '../../../services/data.service';
import { User } from '../../../models/user';
import { ServiceContractPriceDataService } from '../../../services/data-services/service-contract-price-data.service';
import { ServiceContractDataService } from '../../../services/data-services/service-contract-data.service';
import { ServiceContract } from '../../../models/service-contract';
import { ServiceContractPrice } from '../../../models/service-contract-price';

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

  async ngOnInit() {
    try {
      this.user = await this.dataService.getUser();

    } catch(error) {
      console.error('Failed to load user for add-tutoring-appointment: ', error);
    }
    
    const serviceContractPrices = await this.loadSericeContractPrices();
    if(serviceContractPrices.length > 0) {
      const serviceContractIds: Array<number> = serviceContractPrices.map(scp => scp.serviceContractId);
      this.serviceContracts = await this.serviceContractService.getServiceContractsByIds(serviceContractIds);
    }

    if(this.serviceContracts.length > 0) {
      this.createAndSaveTutoringAppointment();
    }
  }

  async loadSericeContractPrices(): Promise<ServiceContractPrice[]> {
    try {
      return await this.serviceContractPriceService.getServiceContractPricesByUserId(this.user.userId);
    } catch(error) {
      console.error('Failed to load ServiceContractPrices: ', error);
    }

    return new Array<ServiceContractPrice>();
  }

  async createAndSaveTutoringAppointment() {
    if(this.serviceContracts.length > 0) {
      const appointment = new TutoringAppointment();
      appointment.tutoringAppointmentNo = 0;
      appointment.tutoringAppointmentUser = this.user.userId;
      appointment.isAccomplished = false;
      appointment.tutoringAppointmentDate = new Date(2024, 12, 6).toISOString();
      appointment.tutoringAppointmentStartDateTime = new Date(2024, 12, 6, 13, 0, 0).toISOString();
      appointment.tutoringAppointmentEndDateTime = new Date(2024, 12, 6, 14, 0, 0).toISOString();
      appointment.serviceContractId = this.serviceContracts[0].serviceContractNo;
      this.persistedApppointment = await this.appointmentService.persistTutoringAppointment(appointment);
      console.log('Persisted appointment: ', this.persistedApppointment);
    }
  }
 
}
