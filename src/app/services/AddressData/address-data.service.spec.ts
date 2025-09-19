import { TestBed } from '@angular/core/testing';

import { AddressDataService } from './address-data.service';

describe('AddressDataService', () => {
  let service: AddressDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddressDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
