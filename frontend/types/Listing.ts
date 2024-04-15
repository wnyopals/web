import { Attribute } from "./Attributes";

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
        id: number;
        name: string;
    };
    Cut: {
        id: number;
        name: string;
    };
    Dome: {
        id: number;
        name: string;
    };
    Origin: {
        id: number;
        name: string;
    };
    BodyTone: {
        id: number;
        name: string;
    };
    Brightness: {
        id: number;
        name: string;
    };
    Colors: Attribute [];
    Patterns: Attribute [];
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
    colors: number [];
    patterns: number [];   
}