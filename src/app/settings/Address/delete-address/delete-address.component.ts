import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressDataService } from '../../../services/AddressData/address-data.service';

@Component({
  selector: 'app-delete-address',
  standalone: false,
  templateUrl: './delete-address.component.html',
  styleUrl: './delete-address.component.css'
})
export class DeleteAddressComponent implements OnInit{

  addressId: number;
  message: string = '';
  
  dataChangedEvent: EventEmitter<string> = new EventEmitter();

  constructor(private addressService: AddressDataService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.addressId = 0;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.addressId = Number(params['id']);
    });

    this.onDelete();
  }

  onDelete() {
    const result: boolean = confirm('Are you sure to delete the address?');

    if(result) {
      this.message = 'deleting...';

      this.addressService
        .deleteAddress(this.addressId)
        .subscribe(next => {
          this.message = '';
          this.dataChangedEvent.emit('address is deleted');
          // this.router.navigate([]);
        },
        error => {
          this.message = 'Sorry - this address cannot be deleted at this time.';
        }
      );
    }
  }
}