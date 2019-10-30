import { Column } from "typeorm";

import { isMongo } from "../../utils";
import { BaseSQL } from "../Base";

let Base: any;
if (isMongo()) {
  Base = Object;
} else {
  Base = BaseSQL;
}

export abstract class BaseAddress extends Base {
  @Column()
  streetAddress: string;

  @Column()
  city: string;

  @Column()
  state: string;
  
  @Column()
  zipCode: number;
}
