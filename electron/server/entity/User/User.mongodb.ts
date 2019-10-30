import { Entity, Column } from "typeorm";
import { BaseMongo } from "../Base";
// import { BaseUser } from "./BaseUser";
// import { applyMixins } from "../../utils";

@Entity()
class User extends BaseMongo {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  isActive: boolean;

  @Column("simple-json")
  profile: { name: string; nickname: string };
}

// interface User extends BaseMongo, BaseUser {}
// applyMixins(User, [BaseMongo, BaseUser]);

export default User;
