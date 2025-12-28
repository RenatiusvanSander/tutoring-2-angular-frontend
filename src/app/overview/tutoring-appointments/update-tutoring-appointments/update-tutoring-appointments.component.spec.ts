import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTutoringAppointmentsComponent } from './update-tutoring-appointments.component';

describe('UpdateTutoringAppointmentsComponent', () => {
  let component: UpdateTutoringAppointmentsComponent;
  let fixture: ComponentFixture<UpdateTutoringAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateTutoringAppointmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTutoringAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
