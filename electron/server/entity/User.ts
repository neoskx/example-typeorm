import { Entity, Column } from "typeorm";
import {getDBType} from '../dbConfiguration';
import config from '../config';
import BaseEntityMongo from './BaseEntityMongo';
import BaseEntitySQL from './BaseEntitySQL';

let BaseEntity:any;
if(getDBType()===config.DEFAULT_MONGODB.type){
  BaseEntity = BaseEntityMongo;
}else{
  BaseEntity = BaseEntitySQL;
}


@Entity()
export class User extends BaseEntity {

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  isActive: boolean;
}
