import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invoice } from '../../models/invoice';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceDataService {

  private static apiUrl: String = 'http://localhost:8082/tutoring3/api/invoices';

  constructor(private http: HttpClient) { }

  async persistInvoice(invoice: Invoice): Promise<Invoice> {
    return firstValueFrom(this.http.post<Invoice>(InvoiceDataService.apiUrl + '/save/single-invoice', invoice));
  }
}
