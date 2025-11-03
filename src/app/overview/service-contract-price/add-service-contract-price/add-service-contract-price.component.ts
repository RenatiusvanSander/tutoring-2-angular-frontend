import { Component, Input, input, OnInit } from '@angular/core';
import { ServiceContractPriceDataService } from '../../../services/data-services/service-contract-price-data.service';
import { ServiceContractDataService } from '../../../services/data-services/service-contract-data.service';
import { ServiceContract } from '../../../models/service-contract';
import { Price } from '../../../models/price';
import { ServiceContractPrice } from '../../../models/service-contract-price';
import { PriceDataService } from '../../../services/data-services/price-data.service';

@Component({
  selector: 'app-add-service-contract-price',
  standalone: false,
  
  templateUrl: './add-service-contract-price.component.html',
  styleUrl: './add-service-contract-price.component.css'
})
export class AddServiceContractPriceComponent implements OnInit {

  @Input()
  serviceContracts!: Array<ServiceContract>;

  @Input()
  price!: Price;

  @Input()
  serviceContractPriceInput!: ServiceContractPrice;

  priceIsValid: boolean = false;
  serviceContractIsValid: boolean = false;
  serviceContractPriceIsValid: boolean = false;

  constructor(private serviceContractService: ServiceContractDataService, private priceService: PriceDataService, private serviceContractPriceService: ServiceContractPriceDataService) {}

  ngOnInit(): void {
    this.serviceContractService.getServiceContracts().subscribe({
      next: (serviceContractsData) => this.serviceContracts = serviceContractsData,
    });
    this.price = new Price();
    this.serviceContractPriceInput = new ServiceContractPrice();
  }

  onSubmit() {

  }
}
