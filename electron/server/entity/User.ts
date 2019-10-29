import { Entity, Column } from "typeorm";
import getBase from './Base';
let Base:any = getBase();

@Entity()
export class User extends Base {

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  isActive: boolean;

  @Column("simple-json")
  profile: { name: string, nickname: string };
}
