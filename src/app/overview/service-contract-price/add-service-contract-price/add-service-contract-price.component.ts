import { Component, Input, input, OnInit } from '@angular/core';
import { ServiceContractPriceDataService } from '../../../services/data-services/service-contract-price-data.service';
import { ServiceContractDataService } from '../../../services/data-services/service-contract-data.service';
import { ServiceContract } from '../../../models/service-contract';
import { Price } from '../../../models/price';
import { ServiceContractPrice } from '../../../models/service-contract-price';
import { PriceDataService } from '../../../services/data-services/price-data.service';
import { DataService } from '../../../services/data.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-add-service-contract-price',
  standalone: false,
  
  templateUrl: './add-service-contract-price.component.html',
  styleUrl: './add-service-contract-price.component.css'
})
export class AddServiceContractPriceComponent implements OnInit {

  user!: User;

  @Input()
  serviceContracts!: Array<ServiceContract>;

  @Input()
  price!: Price;

  @Input()
  serviceContractPriceInput!: ServiceContractPrice;

  selectedServiceContract!: ServiceContract | undefined;

  priceIsValid: boolean = false;
  currencyIsValid: boolean = false;
  serviceContractIsValid: boolean = false;
  serviceContractPriceIsValid: boolean = false;
  serviceContractPriceIsSuccessfulSaved: boolean = false;

  constructor(private serviceContractService: ServiceContractDataService, private priceService: PriceDataService, private serviceContractPriceService: ServiceContractPriceDataService, private userService: DataService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe({
      next: (receivedUser) => this.user = receivedUser,
    });
    this.serviceContractService.getServiceContracts().subscribe({
      next: (serviceContractsData) => this.serviceContracts = serviceContractsData,
      complete: () => console.info(''),
      error: (e) => console.error(e)
    });
    this.price = new Price();
    this.serviceContractPriceInput = new ServiceContractPrice();
    this.serviceContractPriceInput.confirmed = false;
  }

  onSelect(selectedValue: string) {
    this.selectedServiceContract = this.serviceContracts.find(serviceContract => serviceContract.serviceContractName === selectedValue);

    if(this.selectedServiceContract !== undefined) {
      console.info('Selected ServiceContract is now Id = ' + this.selectedServiceContract.serviceContractNo);
    }
    
  }

  checkIfPriceIsValid() {
    this.priceIsValid = !Number.isNaN(this.price.price) && this.price.price >= 13.00 && this.price.price.toString().length >= 4;
  }

  checkIfCurrencyIsValid() {
    this.currencyIsValid = this.price.currency === 'EUR' || this.price.currency === 'USD';
  }

  checkIfServiceContractIsValid() {
    this.serviceContractIsValid = this.selectedServiceContract !== undefined;
  }

  checkIfServiceContractPriceIsValid() {
    this.serviceContractPriceIsValid = this.serviceContractPriceInput.userId > 0;
  }

  onSubmit() {
    var persistedPrice: Price = new Price();

    this.priceService.persistPrice(this.price).subscribe({
      next:  (savedPriced) => persistedPrice = savedPriced,
      complete: () => console.info('Price is persisted'),
      error: (e) => console.error(e)
    });

    if(persistedPrice === undefined || persistedPrice.id == 0) {
      console.error('ServiceContractPrice was not persisted - Please try later or contact us.');
      return;
    }

    let newServiceContractPrice : ServiceContractPrice = ServiceContractPrice.fromHttp(this.serviceContractPriceInput);
    newServiceContractPrice.priceId = persistedPrice.id;
    newServiceContractPrice.serviceContractId = this.selectedServiceContract.id;
    newServiceContractPrice.userId = this.user.userId;

    this.serviceContractPriceService.persistServiceContractPrice(newServiceContractPrice).subscribe({
      next: (savedSCP) => this.serviceContractPriceInput = savedSCP,
      complete: () => {
        this.serviceContractPriceIsSuccessfulSaved = true;
        this.serviceContractPriceInput = new ServiceContractPrice();
        this.price = new Price();
        this.selectedServiceContract = undefined;
        this.priceIsValid = false;
        this.serviceContractIsValid = false;
        this.serviceContractPriceIsValid = false;
      }
    })
  }
}
