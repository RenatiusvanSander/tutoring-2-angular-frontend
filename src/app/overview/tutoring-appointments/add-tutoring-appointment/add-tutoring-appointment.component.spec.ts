import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTutoringAppointmentComponent } from './add-tutoring-appointment.component';

describe('AddTutoringAppointmentComponent', () => {
  let component: AddTutoringAppointmentComponent;
  let fixture: ComponentFixture<AddTutoringAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTutoringAppointmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTutoringAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
