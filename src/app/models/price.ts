export class Price {
    id!: number;
    price!: number;
    currency!: string;

    static fromHttp(price : Price) : Price {
        const newPrice = new Price();
        newPrice.id = price.id;
        newPrice.price = price.price;
        newPrice.currency = price.currency;

        return newPrice;
    }
}