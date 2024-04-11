export type listing = {
    id?: number;
    status: number | null;
    title: string;
    description: string;
    price: number;
    weight:number;
    length: number;
    width: number;
    height: number;
    quantity: number;
    OpalType: {
        name: string;
    };
    Cut: {
        name: string
    };
    Dome: {name: string};
    Origin: {name: string};
    BodyTone: {name: string};
    Brightness: {name:string};
    Colors: string [];
    Patterns: string [];
}

export type listingRequest = {
    id?: number;
    status: number | null;
    title: string;
    description: string;
    price: number;
    weight:number;
    length: number;
    width: number;
    height: number;
    quantity: number;
    type: number
    cut: number;
    dome: number;
    origin: number;
    bodyTone: number;
    brightness: number;
    // colors: string [];
    // patterns: string [];
}