import { Component, OnInit } from '@angular/core';
import { TutoringAppointment } from '../../../models/tutoring-appointment';
import { InvoiceDataService } from '../../../services/data-services/invoice-data.service';
import { ServiceContractPriceDataService } from '../../../services/data-services/service-contract-price-data.service';
import { TutoringAppointmentDataService } from '../../../services/data-services/tutoring-appointment-data.service';
import { Invoice } from '../../../models/invoice';

@Component({
  selector: 'app-update-invoices',
  standalone: false,
  
  templateUrl: './update-invoices.component.html',
  styleUrl: './update-invoices.component.css'
})
export class UpdateInvoicesComponent implements OnInit {

  appointments!: Array<TutoringAppointment>;
  
  constructor(private appointmentService: TutoringAppointmentDataService, private invoiceService: InvoiceDataService, private serviceContractPriceService: ServiceContractPriceDataService) {
    this.appointments = new Array<TutoringAppointment>();
  }

  async ngOnInit(): Promise<void> {
    let dd: Invoice[] = await this.invoiceService.loadMultipleInvoicesByUserId(1);

    for(let invoice of dd) {
      invoice.tutoringHours = 1.0;
      invoice.date =  '2026-03-08-T00:00:00';
      invoice.tutoringDate = '2026-03-08-T13:00:00';
    }

    let updatedInvoices: Invoice[] = await this.invoiceService.updateSeveralInvoices(dd);
  }

    
}
