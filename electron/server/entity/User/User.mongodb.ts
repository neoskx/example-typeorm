import { Entity, Column } from "typeorm";
import { BaseUser } from "./BaseUser";

@Entity()
class User extends BaseUser {
}

export default User;
