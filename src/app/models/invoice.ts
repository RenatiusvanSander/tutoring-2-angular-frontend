export class Invoice {
    invoiceNo!: number;
    invoiceServiceContractId!: number;
    invoiceTutoringHours!: number;
    invoiceDate!: string
    invoiceTutoringDate!: string
    invoiceUserId!: number;
    priceId!: number;

    static fromHttp(invoice : Invoice) : Invoice {
        const newInvoice = new Invoice();
        newInvoice.invoiceNo = invoice.invoiceNo;
        newInvoice.invoiceServiceContractId = invoice.invoiceServiceContractId;
        newInvoice.invoiceTutoringHours = invoice.invoiceTutoringHours;
        newInvoice.invoiceDate = invoice.invoiceDate;
        newInvoice.invoiceTutoringDate = invoice.invoiceTutoringDate;
        newInvoice.invoiceUserId = invoice.invoiceUserId;
        newInvoice.priceId = invoice.priceId;

        return newInvoice;
    }
}