export class TutoringAppointment {
    tutoringAppointmentNo!: number;
    tutoringAppointmentUser!: number; 
    tutoringAppointmentDate!: string;
    tutoringAppointmentStartDateTime!: string;
    tutoringAppointmentEndDateTime!: string;
    serviceContractId!: number;
    accomplished!: boolean;

    static fromHttp(tutoringAppointment : TutoringAppointment) : TutoringAppointment {
        const newTutoringAppointment = new TutoringAppointment();
        newTutoringAppointment.tutoringAppointmentNo = tutoringAppointment.tutoringAppointmentNo;
        newTutoringAppointment.tutoringAppointmentUser = tutoringAppointment.tutoringAppointmentUser;
        newTutoringAppointment.tutoringAppointmentDate = tutoringAppointment.tutoringAppointmentDate;
        newTutoringAppointment.tutoringAppointmentStartDateTime = tutoringAppointment.tutoringAppointmentStartDateTime;
        newTutoringAppointment.tutoringAppointmentEndDateTime = tutoringAppointment.tutoringAppointmentEndDateTime;
        newTutoringAppointment.serviceContractId = tutoringAppointment.serviceContractId;
        newTutoringAppointment.accomplished = tutoringAppointment.accomplished;

        return newTutoringAppointment;
    }
}