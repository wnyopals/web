export type listing = {
    id: number;
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
    BodyTome: {name: string};
    Brightness: {name:string};
    Colors: string [];
    Patterns: string [];
}