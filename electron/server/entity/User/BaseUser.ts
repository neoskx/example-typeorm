import { Column } from "typeorm";

import { isMongo } from "../../utils";
import { BaseSQL, BaseMongo } from "../Base";

let Base: any;
if (isMongo()) {
  Base = BaseMongo;
} else {
  Base = BaseSQL;
}

export abstract class BaseUser extends Base {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  isActive: boolean;

  @Column("simple-json")
  profile: { name: string; nickname: string };
}
