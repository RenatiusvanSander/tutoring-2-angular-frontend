import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Address } from '../../../models/address';
import { AddressDataService } from '../../../services/AddressData/address-data.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-address',
  standalone: false,
  templateUrl: './add-address.component.html',
  styleUrl: './add-address.component.css'
})
export class AddAddressComponent implements OnInit{

  @Input()
  addressInput!: Address;
  userId!: number;

  streetIsValid = false;
  houseNumberIsValid = false;
  zipCodeIsValid = false;
  placeIsValid = false;

  addressForm: FormGroup;

  @Output()
  addressDataChangedEvent: EventEmitter<Address> = new EventEmitter();

  resetEventSubscription: Subscription;

  constructor(private addressDataSerevice: AddressDataService, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) {
    this.addressInput = new Address();
    this.addressForm = this.formBuilder.group({});
    this.resetEventSubscription = new Subscription();
    this.userId = 0;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.userId = Number(params['userId']);
    });
    console.log('userId is: ' + this.userId);
  }

  checkIfStreetIsValid() {
    if (this.addressInput.addressStreet) {
      this.streetIsValid = (this.addressInput.addressStreet.trim().length > 0) && !Number.isNaN(this.addressInput.addressStreet);
    } else {
      this.streetIsValid = false;
    }
  }

  checkIfHouseNumberIsValid() {
    if(this.addressInput.addressHouseNo) {
      this.houseNumberIsValid = this.addressInput.addressHouseNo.trim().length > 0;
    } else {
      this.houseNumberIsValid = false;
    }
  }

  checkIfZipCodeIsValid() {
    if(this.addressInput.addressZipCode) {
      this.zipCodeIsValid =  !Number.isNaN(this.addressInput.addressZipCode);
    } else {
      this.zipCodeIsValid = false;
    }
  }

  checkIfPlaceIsValid() {
    if(this.addressInput.place) {
      this.placeIsValid = this.addressInput.place.trim().length > 3;
    } else {
      this.placeIsValid = false;
    }
  }

  onSubmit() {
    const address: Address = new Address();
    address.id = 0;
    address.addressStreet = this.addressInput.addressStreet;
    address.addressHouseNo = this.addressInput.addressHouseNo;
    address.addressZipCode = Number(this.addressInput.addressZipCode);
    address.place = this.addressInput.place;
    address.userId = this.userId;

    if(address != null && address !== undefined && this.userId > 0) {
      this.addressDataSerevice.persistAddress(address).subscribe(
        response => console.log('Post send successful: ', response),
        error => console.log('Error: ', error)
      );
    }
  }
}
