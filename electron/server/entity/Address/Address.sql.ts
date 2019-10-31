import { Entity, OneToOne } from "typeorm";
import { BaseAddress } from "./BaseAddress";
import User from '../User/User.sql';

@Entity()
export default class Address extends BaseAddress {
    @OneToOne(type=>User, { onDelete: "CASCADE" })
    user:User
}
