import { TestBed } from '@angular/core/testing';

import { ServiceContractPriceDataService } from './service-contract-price-data.service';

describe('ServiceContractPriceDataService', () => {
  let service: ServiceContractPriceDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceContractPriceDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
