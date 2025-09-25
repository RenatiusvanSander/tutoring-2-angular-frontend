export class Address {
    id!: number;
    addressStreet!: string;
    addressHouseNo!: string;
    addressZipCode!: number;
    place!: string; 
    userId!: number;

    static fromHttp(address : Address) : Address {
        const newAddress = new Address();
        newAddress.id = address.id;
        newAddress.addressStreet = address.addressStreet;
        newAddress.addressHouseNo = address.addressHouseNo;
        newAddress.addressZipCode = address.addressZipCode;
        newAddress.place = address.place;
        newAddress.userId = address.userId;

        return newAddress;
    }
}