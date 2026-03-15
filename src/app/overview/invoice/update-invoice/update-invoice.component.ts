import { Component, OnInit } from '@angular/core';
import { TutoringAppointment } from '../../../models/tutoring-appointment';
import { InvoiceDataService } from '../../../services/data-services/invoice-data.service';
import { ServiceContractPriceDataService } from '../../../services/data-services/service-contract-price-data.service';
import { TutoringAppointmentDataService } from '../../../services/data-services/tutoring-appointment-data.service';
import { Invoice } from '../../../models/invoice';

@Component({
  selector: 'app-update-invoice',
  standalone: false,
  
  templateUrl: './update-invoice.component.html',
  styleUrl: './update-invoice.component.css'
})
export class UpdateInvoiceComponent implements OnInit {

  appointments!: Array<TutoringAppointment>;

  constructor(private appointmentService: TutoringAppointmentDataService, private invoiceService: InvoiceDataService, private serviceContractPriceService: ServiceContractPriceDataService) {
      this.appointments = new Array<TutoringAppointment>();
  }

  async ngOnInit(): Promise<void> {
    let invoice: Invoice = await this.invoiceService.loadInvoiceById(2);

    if(invoice.tutoringHours === 3.0) {
      invoice.tutoringHours = 1.0;
    } else {
      invoice.tutoringHours = 3.0
    }
    
    console.log(invoice);

    let updatedInvoice: Invoice = await this.invoiceService.updateSingleInvoice(invoice);
    console.log(updatedInvoice);
  }

}
