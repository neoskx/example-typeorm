import { BaseAddress } from "./BaseAddress";

export default class Address extends BaseAddress {
    constructor(streetAddress: string, city: string, state: string, zipCode: number) {
        super();
        this.streetAddress = streetAddress;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
    }
}
