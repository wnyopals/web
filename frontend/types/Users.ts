import {Transaction} from "./Transactions"
import {InquiryResponse} from "./Inquerries"

export type CurrentUser = {
    id?: number;
    email: string;
    firstName: string;
    lastName: string;
    addressLineOne: string | null;
    addressLineTwo: string | null;
    addressCity: string | null;
    addressStateProvince: string | null;
    addressPostalCode: number | null;
    inquerries: InquiryResponse [],
    transactions: Transaction []
}

export type User = {
    id?: number;
    email: string;
    firstName: string;
    lastName: string;
}
export type successAuth = {
    user: {
        email: string;
        id: number;
    }
    accessToken: string;
}

export type SignUpRequest = {
    email: string;
    firstName: string;
    lastName: string;
    addressLineOne: string | null;
    addressLineTwo: string | null;
    addressCity: string | null;
    addressStateProvince: string | null;
    addressPostalCode: number | null;
    password:string;
}

export type SignInRequest = {
    credential: string,
    password: string
}