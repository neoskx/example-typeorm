import {
  Column
} from "typeorm";

export abstract class BaseUser {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  isActive: boolean;

  @Column("simple-json")
  profile: { name: string, nickname: string };
}