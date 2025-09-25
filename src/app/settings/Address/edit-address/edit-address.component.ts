import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AddressDataService } from '../../../services/AddressData/address-data.service';
import { ActivatedRoute } from '@angular/router';
import { Address } from '../../../models/address';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { isValidDate } from 'rxjs/internal/util/isDate';

@Component({
  selector: 'app-edit-address',
  standalone: false,
  
  templateUrl: './edit-address.component.html',
  styleUrl: './edit-address.component.css'
})
export class EditAddressComponent implements OnInit{

  addressId: number;
  message: string = '';

  @Input()
  addressInEditor: Address;

  streetIsValid = false;
  houseNumberIsValid = false;
  zipCodeIsValid = false;
  placeIsValid = false;
  
  addressEditForm: FormGroup;

  @Output()
  addressDataChangedEvent: EventEmitter<Address> = new EventEmitter();
  
  resetEventSubscription: Subscription;

  constructor(private addressService: AddressDataService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) {
    this.addressId = 0;
    this.addressInEditor = new Address();
    this.addressEditForm = this.formBuilder.group({});
    this.resetEventSubscription = new Subscription();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.addressId = Number(params['id']);
    });
    this.addressInEditor = this.activatedRoute.snapshot.data[0] ?? new Address();
  }

    checkIfStreetIsValid() {
    if (this.addressInEditor.addressStreet) {
      this.streetIsValid = (this.addressInEditor.addressStreet.trim().length > 0) && !Number.isNaN(this.addressInEditor.addressStreet);
    } else {
      this.streetIsValid = false;
    }
  }

  checkIfHouseNumberIsValid() {
    if(this.addressInEditor.addressHouseNo) {
      this.houseNumberIsValid = this.addressInEditor.addressHouseNo.trim().length > 0;
    } else {
      this.houseNumberIsValid = false;
    }
  }

  checkIfZipCodeIsValid() {
    if(this.addressInEditor.addressZipCode) {
      this.zipCodeIsValid = !Number.isNaN(this.addressInEditor.addressZipCode);
    } else {
      this.zipCodeIsValid = false;
    }
  }

  checkIfPlaceIsValid() {
    if(this.addressInEditor.place) {
      this.placeIsValid = this.addressInEditor.place.trim().length > 3;
    } else {
      this.placeIsValid = false;
    }
  }

  checkOneFieldIsUpdated(): boolean {
    this.checkIfPlaceIsValid();
    this.checkIfStreetIsValid();
    this.checkIfZipCodeIsValid();
    this.checkIfHouseNumberIsValid();

    return (this.placeIsValid && this.streetIsValid && this.houseNumberIsValid && this.zipCodeIsValid)
  }

  onSubmit() {
    setTimeout(() => {this.message = ''},1000);
    this.addressService.updateAddress(this.addressInEditor).subscribe(
        response => this.message = 'Address successful updated',
        error => this.message = 'Happened  an error ' + error
      );
  }
}
