import { Component, OnInit } from '@angular/core';
import { TutoringAppointmentDataService } from '../../services/data-services/tutoring-appointment-data.service';
import { TutoringAppointment } from '../../models/tutoring-appointment';
import { InvoiceDataService } from '../../services/data-services/invoice-data.service';
import { ServiceContractPriceDataService } from '../../services/data-services/service-contract-price-data.service';
import { Invoice } from '../../models/invoice';

@Component({
  selector: 'app-invoice',
  standalone: false,
  
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent implements OnInit {

  appointments: Array<TutoringAppointment>;
  invoices: Array<Invoice>;
  dataLoaded: boolean = false;

  constructor(private appointmentService: TutoringAppointmentDataService, private invoiceService: InvoiceDataService, private serviceContractPriceService: ServiceContractPriceDataService) {
      this.appointments = new Array<TutoringAppointment>();
      this.invoices = new Array<Invoice>();
  }
  
  async ngOnInit(): Promise<void> {
    let loadedAllInvOicesWithoutPdf: Invoice[] =await this.invoiceService.loadMultipleInvoicesWithNoInvoiceFile();

    for(let invoice of loadedAllInvOicesWithoutPdf) {
      this.invoices.push(invoice);
    }

    this.dataLoaded = this.invoices.length > 0;
  }


}
