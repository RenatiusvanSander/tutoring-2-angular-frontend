import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInvoicesComponent } from './update-invoices.component';

describe('UpdateInvoicesComponent', () => {
  let component: UpdateInvoicesComponent;
  let fixture: ComponentFixture<UpdateInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateInvoicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
