import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceContractComponent } from './service-contract.component';

describe('ServiceContractComponent', () => {
  let component: ServiceContractComponent;
  let fixture: ComponentFixture<ServiceContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceContractComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
