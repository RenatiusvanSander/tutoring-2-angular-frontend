import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PriceDataService } from '../../services/data-services/price-data.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Price } from '../../models/price';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-price',
  standalone: false,
  
  templateUrl: './add-price.component.html',
  styleUrl: './add-price.component.css'
})
export class AddPriceComponent implements OnInit {

    @Input()
    priceInput!: Price;
    
    priceIsValid = false;
    currencyIsValid = false;
    
    priceForm: FormGroup;
    
    @Output()
    priceDataChangedEvent: EventEmitter<Price> = new EventEmitter();
    
    resetEventSubscription: Subscription;

  constructor(private priceService: PriceDataService, private formBuilder: FormBuilder) {
    this.priceForm = this.formBuilder.group({});
    this.resetEventSubscription = new Subscription();
  }

  ngOnInit(): void {
    this.priceInput = new Price();
  }

  checkIfPriceIsValid() {
    this.priceIsValid = this.priceInput instanceof Number && !Number.isNaN(this.priceInput);
  }

  checkIfCurrencyIsValid() {
    this.currencyIsValid = this.priceInput.currency.length > 1;
  }

  onSubmit() {
    this.priceService.persistPrice(this.priceInput).subscribe({});
  }

}
