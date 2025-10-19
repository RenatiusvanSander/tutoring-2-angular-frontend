export class Price {
    id!: number;
    price!: number;

    static fromHttp(price : Price) : Price {
        const newPrice = new Price();
        newPrice.id = price.id;
        newPrice.price = price.price;

        return newPrice;
    }
}