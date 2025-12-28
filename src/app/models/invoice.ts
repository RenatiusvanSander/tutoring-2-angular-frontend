export class Invoice {
    no!: number;
    serviceContractId!: number;
    tutoringHours!: number;
    date!: string
    tutoringDate!: string
    userId!: number;
    priceId!: number;

    static fromHttp(invoice : Invoice) : Invoice {
        const newInvoice = new Invoice();
        newInvoice.no = invoice.no;
        newInvoice.serviceContractId = invoice.serviceContractId;
        newInvoice.tutoringHours = invoice.tutoringHours;
        newInvoice.date = invoice.date;
        newInvoice.tutoringDate = invoice.tutoringDate;
        newInvoice.userId = invoice.userId;
        newInvoice.priceId = invoice.priceId;

        return newInvoice;
    }
}