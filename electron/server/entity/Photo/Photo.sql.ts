import { Entity, Column, ManyToOne } from "typeorm";
import { BasePhoto } from "./BasePhoto";
import User from "../User/User.sql";

@Entity()
export default class Photo extends BasePhoto {
    @ManyToOne(type => User, user => user.photos, { onDelete: "CASCADE" })
    user: User;
}
