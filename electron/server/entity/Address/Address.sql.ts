import { Entity, OneToOne } from "typeorm";
import { BaseAddress } from "./BaseAddress";

@Entity()
export default class Address extends BaseAddress {
}
