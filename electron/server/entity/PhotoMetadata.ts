import { Entity, Column, OneToOne, JoinColumn } from "typeorm";
import { Photo } from "./Photo";
import {BaseSQL} from "./Base";
// let Base: any = getBase();

@Entity()
export class PhotoMetadata extends BaseSQL {
// export class PhotoMetadata {
  @Column("int")
  height: number;

  @Column("int")
  width: number;

  @Column()
  orientation: string;

  @Column()
  compressed: boolean;

  @Column()
  comment: string;

  @OneToOne(type => Photo)
  @JoinColumn()
  photo: Photo;
}
