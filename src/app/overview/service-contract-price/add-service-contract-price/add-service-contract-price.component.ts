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

  selectedServiceContractId: number | undefined = 0;

  priceIsValid: boolean = false;
  currencyIsValid: boolean = false;
  serviceContractIsValid: boolean = true;
  serviceContractPriceIsSuccessfulSaved: boolean = false;

  constructor(private serviceContractService: ServiceContractDataService, private priceService: PriceDataService, private serviceContractPriceService: ServiceContractPriceDataService, private userService: DataService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe({
      next: (receivedUser) => this.user = receivedUser,
    });
    this.serviceContractService.getServiceContracts().subscribe({
      next: (serviceContractsData) => this.serviceContracts = serviceContractsData,
      complete: () => console.info('All ServiceContracts loaded.'),
      error: (e) => console.error(e)
    });
    this.price = new Price();
    this.price.id = 0;
    this.serviceContractPriceInput = new ServiceContractPrice();
    this.serviceContractPriceInput.confirmed = false;
    this.selectedServiceContractId = 1;
  }

  onSelect(selectedValue: string) {
    var serviceContract = this.serviceContracts.find(serviceContract => serviceContract.serviceContractName === selectedValue);
    this.selectedServiceContractId = serviceContract?.serviceContractNo;
    console.info('Selected ServiceContract is now Id = ' + this.selectedServiceContractId);
    this.checkIfServiceContractIsValid()
  }

  checkIfPriceIsValid() {
    this.priceIsValid = !Number.isNaN(this.price.price) && this.price.price >= 13.00 && this.price.price.toString().length >= 4;
    console.log('price is valid: ' + this.priceIsValid);
  }

  checkIfCurrencyIsValid() {
    this.currencyIsValid = this.price.currency.toLowerCase() === 'eur' || this.price.currency.toLowerCase() === 'usd';
    console.log('currency is valid: ' + this.currencyIsValid);
  }

  checkIfServiceContractIsValid() {
    this.serviceContractIsValid = this.selectedServiceContractId !== undefined && this.selectedServiceContractId > 0;
    console.log('service contract is valid: ' + this.serviceContractIsValid);
  }

  onSubmit() {
    var persistedPrice: Price = Price.fromHttp(this.price);

    this.priceService.persistPrice(this.price).subscribe({
      next:  (savedPriced: Price) => {
        persistedPrice = savedPriced;
        this.saveServiceContractPrice(persistedPrice);
      },
      complete: () => {
        console.info('Price is persisted');
      },
      error: (e) => console.error(e)
    });
  }

  saveServiceContractPrice(persistedPrice: Price) {
    let newServiceContractPrice : ServiceContractPrice = ServiceContractPrice.fromHttp(this.serviceContractPriceInput);
    newServiceContractPrice.id = 0;
    newServiceContractPrice.priceId = persistedPrice.id;
    newServiceContractPrice.serviceContractId = this.selectedServiceContractId !== undefined? this.selectedServiceContractId : 0;
    newServiceContractPrice.userId = this.user.userId;

    this.serviceContractPriceService.persistServiceContractPrice(newServiceContractPrice).subscribe({
      next: (savedSCP) => this.serviceContractPriceInput = savedSCP,
      complete: () => {
        this.serviceContractPriceIsSuccessfulSaved = true;
        this.serviceContractPriceInput = new ServiceContractPrice();
        this.price = new Price();
        this.selectedServiceContractId = 0;
        this.priceIsValid = false;
        this.serviceContractIsValid = false;
        this.currencyIsValid = false;
      },
      error: (e) => console.error(e)
    })
  }
}
