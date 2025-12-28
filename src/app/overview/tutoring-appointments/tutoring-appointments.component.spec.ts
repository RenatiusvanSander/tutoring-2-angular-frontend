import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoringAppointmentsComponent } from './tutoring-appointments.component';

describe('TutoringAppointmentsComponent', () => {
  let component: TutoringAppointmentsComponent;
  let fixture: ComponentFixture<TutoringAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TutoringAppointmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutoringAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
