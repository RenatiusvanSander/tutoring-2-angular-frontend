import { TestBed } from '@angular/core/testing';

import { ServiceContractDataService } from './service-contract-data.service';

describe('ServiceContractDataService', () => {
  let service: ServiceContractDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceContractDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
