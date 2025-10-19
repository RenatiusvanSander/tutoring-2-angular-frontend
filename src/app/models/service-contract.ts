export class ServiceContract {
    id!: number;
    serviceContractName!: string;
    serviceContractDescription!: string;

    static fromHttp(serviceContract : ServiceContract) : ServiceContract {
        const newServiceContract = new ServiceContract();
        newServiceContract.id = serviceContract.id;
        newServiceContract.serviceContractName = serviceContract.serviceContractName;
        newServiceContract.serviceContractDescription = serviceContract.serviceContractName;

        return newServiceContract;
    }
}