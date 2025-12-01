import type {Address} from "./IAddress.ts";
import type {Company} from "./ICompany.ts";


export interface IUser {
    website: string;
    address: Address;
    phone: string;
    name: string;
    company: Company;
    id: number;
    email: string;
    username: string;
}

