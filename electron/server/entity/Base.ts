import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ObjectIdColumn,
  ObjectID,
  PrimaryGeneratedColumn
} from "typeorm";

import { getDBType } from "../dbConfiguration";
import config from "../config";

export abstract class Base extends BaseEntity {
  @Column()
  globalId: string;

  @CreateDateColumn()
  created: string;

  @UpdateDateColumn()
  modified: string;
}

export abstract class BaseMongo extends Base {
  @ObjectIdColumn()
  id: ObjectID;
}

export abstract class BaseSQL extends Base {
  @PrimaryGeneratedColumn()
  id: number;
}

export default function getBase() {
  if (getDBType() === config.DEFAULT_MONGODB.type) {
    return BaseMongo;
  } else {
    return BaseSQL;
  }
}

// export default getBase();
