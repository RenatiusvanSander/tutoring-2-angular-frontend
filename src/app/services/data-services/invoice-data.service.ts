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

  async updateSingleInvoice(invoice: Invoice): Promise<Invoice> {
    return firstValueFrom(this.http.put<Invoice>(InvoiceDataService.apiUrl + '/update/single-invoice', invoice));
  }

  async updateSeveralInvoices(invoices: Invoice[]): Promise<Invoice[]> {
    return lastValueFrom(this.http.put<Invoice[]>(InvoiceDataService.apiUrl + '/update/several-invoices', invoices));
  }

  async loadInvoiceById(id: number): Promise<Invoice> {
    return firstValueFrom(this.http.get<Invoice>(InvoiceDataService.apiUrl + '/load/single-invoice/' + id));
  }

  async loadMultipleInvoicesWithNoInvoiceFile(): Promise<Invoice[]> {
    return lastValueFrom(this.http.get<Invoice[]>(InvoiceDataService.apiUrl + '/load/multiple-invoices/invoice-file-is-null'));
  }

  async loadMultipleInvoicesByUserId(id: number): Promise<Invoice[]> {
    return lastValueFrom(this.http.get<Invoice[]>(InvoiceDataService.apiUrl + '/load/multiple-invoices/invoice-by-user-id/' + id));
  }
}