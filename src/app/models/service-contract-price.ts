export class ServiceContractPrice {
    id!: number;
    userId!: number;
    serviceContractId!: number;
    priceId!: number;
    confirmed!: boolean; // confirmed means service and price are confirmed

    static fromHttp(serviceContractPrice : ServiceContractPrice) : ServiceContractPrice {
        const newServiceContractPrice = new ServiceContractPrice();
        newServiceContractPrice.id = serviceContractPrice.id;
        newServiceContractPrice.userId = serviceContractPrice.userId;
        newServiceContractPrice.serviceContractId = serviceContractPrice.serviceContractId;
        newServiceContractPrice.priceId = serviceContractPrice.priceId;
        newServiceContractPrice.confirmed = serviceContractPrice.confirmed;

        return newServiceContractPrice;
    }
}