import { Component, OnInit } from '@angular/core';
import { TutoringAppointment } from '../../../models/tutoring-appointment';
import { TutoringAppointmentDataService } from '../../../services/data-services/tutoring-appointment-data.service';
import { Invoice } from '../../../models/invoice';
import { InvoiceDataService } from '../../../services/data-services/invoice-data.service';
import { ServiceContractPriceDataService } from '../../../services/data-services/service-contract-price-data.service';
import { ServiceContractPrice } from '../../../models/service-contract-price';

@Component({
  selector: 'app-add-invoice',
  standalone: false,
  
  templateUrl: './add-invoice.component.html',
  styleUrl: './add-invoice.component.css'
})
export class AddInvoiceComponent implements OnInit {

  appointments!: Array<TutoringAppointment>;
  dataLoaded: boolean = false;

  constructor(private appointmentService: TutoringAppointmentDataService, private invoiceService: InvoiceDataService, private serviceContractPriceService: ServiceContractPriceDataService) {
    this.appointments = new Array<TutoringAppointment>();
  }

  async ngOnInit(): Promise<void> {
    this.appointments = await this.appointmentService.loadNotAccomplishedAppointments();
    this.dataLoaded = this.appointments.length > 0;
  }

  async submitInvoice(tutoringAppointmentNo: number): Promise<void> {
    let invoice: Invoice | undefined;
    let appointment = this.appointments.find(item => item.tutoringAppointmentNo === tutoringAppointmentNo);
    let serviceContractPrice: ServiceContractPrice = await this.serviceContractPriceService.getServiceContractPriceByUserIdAndServiceContractId(appointment?.tutoringAppointmentUser, appointment?.serviceContractId);
    
    invoice = this.createInvoice(appointment, invoice, serviceContractPrice);
    if (invoice && appointment) {
      let persistedInvoice = await this.invoiceService.persistInvoice(invoice);
      appointment.accomplished = persistedInvoice !== undefined;

      await this.updateAppointmentAccomplished(appointment);
    }

  }

  private createInvoice(appointment: TutoringAppointment | undefined, invoice: Invoice | undefined, serviceContractPrice: ServiceContractPrice) {
    if (appointment) {
      invoice = new Invoice();
      invoice.no = 0;
      invoice.priceId = serviceContractPrice.priceId;
      invoice.date = appointment.tutoringAppointmentDate;
      invoice.tutoringDate = appointment.tutoringAppointmentStartDateTime;
      invoice.userId = appointment.tutoringAppointmentUser;
      invoice.tutoringHours = this.calculateTutoringHours(appointment.tutoringAppointmentEndDateTime, appointment.tutoringAppointmentStartDateTime);
      invoice.userId = appointment.tutoringAppointmentUser;
      invoice.serviceContractId = appointment.serviceContractId;
    }

    return invoice;
  }
  
  private calculateTutoringHours(endDateTime: string,  startDateTime: string): number {
    let start = new Date(startDateTime).getTime();
    let end = new Date(endDateTime).getTime();
    let hoursNumber = end - start;

    return hoursNumber / (1000 * 60 * 60);
  }

  private async updateAppointmentAccomplished(appointment: TutoringAppointment) {
    if (appointment.accomplished === true) {
      var updatedAppointment = await this.appointmentService.updateSingleTutoringAppointment(appointment);
      console.log('Updated Appointment: ', updatedAppointment);
    }
  }

}
