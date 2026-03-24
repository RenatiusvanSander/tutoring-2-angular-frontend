import { TestBed } from '@angular/core/testing';

import { InvoicePdfDataService } from './invoice-pdf-data.service';

describe('InvoicePdfDataService', () => {
  let service: InvoicePdfDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoicePdfDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
