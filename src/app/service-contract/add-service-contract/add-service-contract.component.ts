import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiceContractDataService } from '../../services/data-services/service-contract-data.service';
import { ServiceContract } from '../../models/service-contract';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-service-contract',
  standalone: false,
  
  templateUrl: './add-service-contract.component.html',
  styleUrl: './add-service-contract.component.css'
})
export class AddServiceContractComponent implements OnInit {

  @Input()
  serviceContractInput!: ServiceContract;
  
  nameIsValid = false;
  descriptionIsValid = false;
  
  serviceContractForm: FormGroup;
  
  @Output()
  serviceContractDataChangedEvent: EventEmitter<ServiceContract> = new EventEmitter();
  
  resetEventSubscription: Subscription;

  constructor(private serviceContractService: ServiceContractDataService, private formBuilder: FormBuilder) {
    this.serviceContractInput = new ServiceContract();
    this.serviceContractForm = this.formBuilder.group({});
    this.resetEventSubscription = new Subscription();
  }

  ngOnInit(): void {
  }

  checkIfNameIsValid() {
    this.nameIsValid = this.serviceContractInput.serviceContractName.length > 1;
  }

  checkIfDescriptionIsValid() {
    this.descriptionIsValid = this.serviceContractInput.serviceContractDescription.length > 2;
  }

  onSubmit() {
    this.serviceContractService.persistsServiceContract(this.serviceContractInput).subscribe({
      error: (e) => console.error(e),
      complete: () => {
        console.info('ServiceContract was posted successful.');
        this.serviceContractInput = new ServiceContract();
      }
    }); 
  }
}
