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

  constructor(private priceDataService: PriceDataService, private activatedRoute: ActivatedRoute) {
    this.updatedPrice = new Price();
  }

  ngOnInit(): void {
    this.updatedPrice = this.activatedRoute.snapshot.data[0];
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
