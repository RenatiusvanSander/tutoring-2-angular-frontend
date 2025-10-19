export class ServiceContract {
    serviceContractNo!: number;
    serviceContractName!: string;
    serviceContractDescription!: string;

    static fromHttp(serviceContract : ServiceContract) : ServiceContract {
        const newServiceContract = new ServiceContract();
        newServiceContract.serviceContractNo = serviceContract.serviceContractNo;
        newServiceContract.serviceContractName = serviceContract.serviceContractName;
        newServiceContract.serviceContractDescription = serviceContract.serviceContractDescription;

        return newServiceContract;
    }
}