export class TutoringAppointment {
    id!: number;
    tutoringAppointmentDate!: string;
    tutoringAppointmentStartDateTime!: string;
    tutoringAppointmentEndDateTime!: string;
    isAccomplished!: boolean;

    static fromHttp(tutoringAppointment : TutoringAppointment) : TutoringAppointment {
        const newTutoringAppointment = new TutoringAppointment();

        return newTutoringAppointment;
    }
}