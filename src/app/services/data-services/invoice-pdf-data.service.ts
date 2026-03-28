import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';

@Injectable({
  providedIn: 'root'
})
export class InvoicePdfDataService {

  private static apiUrl: String = 'http://localhost:8082/tutoring3/api/pdf-invoices';
  
  constructor(private http: HttpClient) { }

  async createAndSaveInvoiceFile(invoiceId: number): Promise<any> {
    return lastValueFrom(this.http.get(InvoicePdfDataService.apiUrl + '/getPdfInvoice/' + invoiceId, { responseType: 'blob'}));
  }

  async getPdfInvoices(invoiceIds: number[]): Promise<Blob> {
    let params: HttpParams = new HttpParams();
    for(let id of invoiceIds) {
      params = params.append('id', id);
    }

    return lastValueFrom(this.http.get(InvoicePdfDataService.apiUrl + '/getPdfInvoicesInOneFile', { params, responseType: 'blob' }));
  }

}
