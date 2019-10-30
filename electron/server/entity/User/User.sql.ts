import { Entity, Column } from "typeorm";
import { BaseSQL } from "../Base";
// import { BaseUser } from "./BaseUser";
// import { applyMixins } from "../../utils";

@Entity()
class User extends BaseSQL {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  isActive: boolean;

  @Column("simple-json")
  profile: { name: string; nickname: string };
}

// interface User extends BaseSQL, BaseUser {}
// applyMixins(User, [BaseSQL, BaseUser]);

export default User;
