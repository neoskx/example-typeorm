import { ObjectID, ObjectIdColumn } from "typeorm";
import BaseEntity from "./BaseEntity";
export default abstract class BaseEntityMongo extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID;
}
