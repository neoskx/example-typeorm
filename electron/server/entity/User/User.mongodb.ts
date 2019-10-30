import { Entity, Column } from "typeorm";
import { BaseUser } from "./BaseUser";
import Photo from '../Photo/Photo';
import Profile from './Profile';
import Address from '../Address/Address';

@Entity()
export default class User extends BaseUser {
    @Column(type => Photo)
    photos: Photo[];

    @Column(type => Profile)
    profile: Profile

    @Column(type => Address)
    address: Address
}