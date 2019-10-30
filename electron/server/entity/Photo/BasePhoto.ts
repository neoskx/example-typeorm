import { Column } from "typeorm";

import { isMongo } from "../../utils";
import { BaseSQL } from "../Base";

let Base: any;
if (isMongo()) {
  Base = Object;
} else {
  Base = BaseSQL;
}

export abstract class BasePhoto extends Base {
  @Column()
  url: string;

  @Column()
  description: string;

  @Column()
  size: number;
}
