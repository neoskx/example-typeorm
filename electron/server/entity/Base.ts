import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn,
  ObjectID,
  PrimaryGeneratedColumn
} from "typeorm";

export abstract class Base {
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
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
