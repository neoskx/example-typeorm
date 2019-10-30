import { Column } from "typeorm";

export default class Profile {
  @Column()
  about: string;

  @Column()
  education: string;

  @Column()
  career: string;
}
