import { Component, Input, OnInit } from '@angular/core';
import { PriceDataService } from '../../services/data-services/price-data.service';
import { ActivatedRoute } from '@angular/router';
import { Price } from '../../models/price';

@Component({
  selector: 'app-price-update',
  standalone: false,
  
  templateUrl: './price-update.component.html',
  styleUrl: './price-update.component.css'
})
export class PriceUpdateComponent implements OnInit {

  @Input()
  updatedPrice!: Price;
  isPriceUpdated: boolean = false;

  updatePriceIsValid: boolean = false;
  updatedPriceCurrencyIsValid: boolean = false;

  constructor(private priceDataService: PriceDataService, private activatedRoute: ActivatedRoute) {
    this.updatedPrice = new Price();
  }

  ngOnInit(): void {
    this.updatedPrice = this.activatedRoute.snapshot.data['id'];
  }

  checkUpdatedPriceIsValid () {
    this.updatePriceIsValid = !Number.isNaN(this.updatedPrice.price) && this.updatedPrice.price >= 13.00;
  }

  checkUpdatedPriceCurrencyIsValid() {
    this.updatedPriceCurrencyIsValid = (this.updatedPrice.currency.length > 1) && (this.updatedPrice.currency.includes('EUR'));
  }

  updatePrice() {
    this.priceDataService.updatePrice(this.updatedPrice).subscribe({
      complete: () => {
        console.info('Price is updated');
        this.isPriceUpdated = true;
      },
      next: (user) => this.updatedPrice = user,
      error: (e) => console.error(e)
    });
  }

}
