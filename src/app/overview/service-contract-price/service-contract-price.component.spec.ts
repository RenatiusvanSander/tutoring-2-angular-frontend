import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceContractPriceComponent } from './service-contract-price.component';

describe('ServiceContractPriceComponent', () => {
  let component: ServiceContractPriceComponent;
  let fixture: ComponentFixture<ServiceContractPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceContractPriceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceContractPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
