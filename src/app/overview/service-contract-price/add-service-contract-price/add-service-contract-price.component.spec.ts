import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceContractPriceComponent } from './add-service-contract-price.component';

describe('AddServiceContractPriceComponent', () => {
  let component: AddServiceContractPriceComponent;
  let fixture: ComponentFixture<AddServiceContractPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddServiceContractPriceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddServiceContractPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
