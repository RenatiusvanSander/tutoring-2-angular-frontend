import { Component, OnInit } from '@angular/core';
import { PriceDataService } from '../services/data-services/price-data.service';
import { Price } from '../models/price';

@Component({
  selector: 'app-price',
  standalone: false,
  
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit {

  prices!: Array<Price>;
  message: string = 'Loading prices ...';
  dataLoaded: boolean = false;

  constructor(private priceDataService: PriceDataService) {}

  ngOnInit(): void {
    this.loadPrice();
  }

  loadPrice() {
    this.priceDataService.getPriceById(1).subscribe({
      next: (price) => {
        this.prices = new Array<Price>;
        this.prices.push(price);
        this.message = '';
        this.dataLoaded = true;
      },
      complete: () => console.info('Price with id loaded.'),
      error: (e) => console.error(e)
    });
  }

}
