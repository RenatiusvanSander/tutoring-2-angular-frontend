import { Component, OnInit } from '@angular/core';
import { TutoringAppointment } from '../../../models/tutoring-appointment';
import { TutoringAppointmentDataService } from '../../../services/data-services/tutoring-appointment-data.service';
import { Invoice } from '../../../models/invoice';
import { InvoiceDataService } from '../../../services/data-services/invoice-data.service';

@Component({
  selector: 'app-add-invoice',
  standalone: false,
  
  templateUrl: './add-invoice.component.html',
  styleUrl: './add-invoice.component.css'
})
export class AddInvoiceComponent implements OnInit {

  appointments!: Array<TutoringAppointment>;
  dataLoaded: boolean = false;

  constructor(private appointmentService: TutoringAppointmentDataService, private invoiceService: InvoiceDataService) {
    this.appointments = new Array<TutoringAppointment>();
  }

  async ngOnInit(): Promise<void> {
    this.appointments = await this.appointmentService.loadNotAccomplishedAppointments();
    this.dataLoaded = this.appointments.length > 0;
  }

  async submitInvoice(tutoringAppointmentNo: number): Promise<void> {
    let invoice: Invoice | undefined;
    let appointment = this.appointments.find(item => item.tutoringAppointmentNo === tutoringAppointmentNo);
    
    if (appointment) {
      invoice = new Invoice();
      invoice.no = 0
      invoice.priceId;
      invoice.date = appointment.tutoringAppointmentDate;
      invoice.userId = appointment.tutoringAppointmentUser;
      invoice.tutoringHours = this.calculateTutoringHours(appointment.tutoringAppointmentEndDateTime, appointment.tutoringAppointmentStartDateTime);
      invoice.userId = appointment.tutoringAppointmentUser;
      invoice.serviceContractId = appointment.serviceContractId;
    }

    if (invoice) {
      console.log(this.invoiceService.persistInvoice(invoice));
    }

  }

  private calculateTutoringHours(endDateTime: string,  startDateTime: string): number {
    let start = new Date(startDateTime).getTime();
    let end = new Date(endDateTime).getTime();
    let hoursNumber = end - start;

    return hoursNumber / (1000 * 60 * 60);
  }

}
