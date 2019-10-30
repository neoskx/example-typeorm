import { Entity, Column, OneToMany, JoinColumn } from "typeorm";
import { BaseUser } from "./BaseUser";
import Photo from "../Photo/Photo.sql";

@Entity()
export default class User extends BaseUser {
  @OneToMany(type => Photo, photo => photo.user)
  photos: Photo[];

  @Column("simple-json")
  profile: { about: string; education: string; career: string };
}
