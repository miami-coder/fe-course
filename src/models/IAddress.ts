import type {Geo} from "./IGeo.ts";

export interface Address {
    zipcode: string;
    geo: Geo;
    suite: string;
    city: string;
    street: string;
}