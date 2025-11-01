import { Component, OnInit } from '@angular/core';
import { AddressDataService } from '../../../services/AddressData/address-data.service';
import { Address } from '../../../models/address';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-address',
  standalone: false,
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent implements OnInit {
  
  message: string = 'Loading addresses data';

  userId!: number;

  addresses!: Array<Address>;

  dataLoaded: boolean = false;

  constructor(private addressDataService: AddressDataService,
    private activatedRoute: ActivatedRoute) {
      this.addresses = new Array<Address>();
      this.userId = 0;
    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.userId = Number(params['id']);
    });
    this.loadData(+this.userId);
  }

  loadData(id: number) {
    this.addressDataService.fetchAddressesByUserId(+id).subscribe({
      next: (n) => {
        this.addresses = n ?? new Array<Address>();
        this.dataLoaded = true;
        this.message = '';
      },
      error: (e) => {
        this.message = 'An error occured - please contact support';
        console.error(e);
      }
    });
  }
}
