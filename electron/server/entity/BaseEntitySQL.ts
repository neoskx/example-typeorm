import { PrimaryGeneratedColumn } from "typeorm";
import BaseEntity from "./BaseEntity";
export default abstract class BaseEntitySQL extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
