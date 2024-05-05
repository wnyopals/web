import {Transaction} from "./Transactions"
import {Inquerries} from "./Inquerries"

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
    inquerries: Inquerries [],
    transactions: Transaction []
}

export type User = {
    id?: number;
    email: string;
    firstName: string;
    lastName: string;
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
}

export type SignInRequest = {
    credential: string,
    password: string
}