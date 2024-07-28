export type PurchaseInfo = {
    amount: number;
    currency: string
}

export type UpdatePurchase = PurchaseInfo & {
    id: string;
}

export type PurchaseLookup = {
    PaymentintentId: string;
}

export type StartPurchaseResponse = {
    client_secret: string
}