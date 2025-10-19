import { Component, OnInit } from '@angular/core';
import { ServiceContractDataService } from '../services/data-services/service-contract-data.service';
import { ServiceContract } from '../models/service-contract';

@Component({
  selector: 'app-service-contract',
  standalone: false,
  
  templateUrl: './service-contract.component.html',
  styleUrl: './service-contract.component.css'
})
export class ServiceContractComponent implements OnInit {

  message: string = 'Loading service contracts ...';

  serviceContracts!: Array<ServiceContract>;
  
  dataLoaded: boolean = false;
  
  constructor(private serviceContractService: ServiceContractDataService) {}

  ngOnInit(): void {
    this.loadServiceContracts();
  }

  loadServiceContracts() {
    this.serviceContractService.getServiceContracts().subscribe({
      next: (scs) => {
        this.serviceContracts = scs ?? new Array<ServiceContract>();
        this.message = '';
        this.dataLoaded = true;
      },
      error: (e) => {
        console.error(e)
        this.message = 'Error loading data ...';
      },
      complete: () => console.info('ServiceContracts fully loaded')
    })
  }

}
