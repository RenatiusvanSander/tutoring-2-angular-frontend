import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceContractComponent } from './add-service-contract.component';

describe('AddServiceContractComponent', () => {
  let component: AddServiceContractComponent;
  let fixture: ComponentFixture<AddServiceContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddServiceContractComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddServiceContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
