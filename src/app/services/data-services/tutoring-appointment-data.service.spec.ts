import { TestBed } from '@angular/core/testing';

import { TutoringAppointmentDataService } from './tutoring-appointment-data.service';

describe('TutoringAppointmentDataService', () => {
  let service: TutoringAppointmentDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutoringAppointmentDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
