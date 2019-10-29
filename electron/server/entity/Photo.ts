import { Entity, Column } from "typeorm";
import getBase from "./Base";
let Base: any = getBase();

@Entity()
export class Photo extends Base {
  @Column({
    length: 100
  })
  name: string;

  @Column("text")
  description: string;

  @Column()
  filename: string;

  @Column("double")
  views: number;

  @Column()
  isPublished: boolean;
}
